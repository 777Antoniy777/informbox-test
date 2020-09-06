import * as React from "react";
import classNames from "classnames";
import axios from "axios";
import {BASE_URL} from "../../js/const";
import {ColorControlValue} from "../../js/enums";
import {ColorItems} from "../../types/colors-items-type";
import {ColorControls} from "../../types/colors-controls-items";
import ColorsControlsItems from "../colors-controls-items/colors-controls-items";
import ColorsItems from "../colors-items/colors-items";

interface State {
  colorControlsValues: null | ColorControls,
  data: null | ColorItems,
}

class Main extends React.PureComponent<{}, State> {
  state = {
    colorControlsValues: null,
    data: null,
  }

  componentDidMount() {
    this.getColorsData(this);
    this.getActualState(this);
  }

  getColorsData = (ctx) => {
    axios.get(BASE_URL)
      .then(function (response) {
        ctx.setState({
          data: response.data.data,
        })
      })
      .catch(function (error) {
        throw new Error(error);
      });
  }

  getActualState = (ctx) => {
    const colorControlsValues = {
      [ColorControlValue.COLOR_ID]: true,
      [ColorControlValue.COLOR_NAME]: true,
      [ColorControlValue.COLOR_YEAR]: true,
      [ColorControlValue.COLOR_VALUE]: true,
      [ColorControlValue.COLOR_PANTONE]: true,
    };

    for (let key in window.localStorage) {
      for (let objKey in colorControlsValues) {
        if (key === objKey) {
          colorControlsValues[objKey] = JSON.parse(window.localStorage[key]);
        }
      }
    }

    ctx.setState({
      colorControlsValues,
    });
  }

  render() {
    const {colorControlsValues, data} = this.state;

    const isControlsValues = () => {
      for (let key in colorControlsValues) {
        if (!colorControlsValues[key]) {
          return false;
        }
      }

      return true;
    };

    const resetButtonClass = classNames({
      'colors__reset-button': true,
      'active-reset-button': !isControlsValues(),
      'disabled-reset-button': isControlsValues(),
    });

    const setColorItemsClasses = (prefix) => {
      const colorItemsClasses = {};

      for (let key in colorControlsValues) {
        const splittedKey = key.split('-')[1];
        const mod = `${prefix}--${splittedKey}`;

        const colorItemClass = classNames({
          [prefix]: true,
          [mod]: true,
          'hidden': !colorControlsValues[key],
        });

        colorItemsClasses[key] = colorItemClass;
      }

      return colorItemsClasses;
    };

    const handleCheckboxChange = (evt) => {
      const target = evt.target;
      const name = target.name;
      const checked = target.checked;
      const changedColorControlsValues: any = {};

      for (let key in colorControlsValues) {
        const strKey = key.toString();
        changedColorControlsValues[key] = colorControlsValues[key];
        window.localStorage.setItem(strKey, colorControlsValues[key]);

        if (key === name) {
          changedColorControlsValues[key] = checked;
          window.localStorage.setItem(strKey, checked);
        }
      }

      this.setState({
        colorControlsValues: changedColorControlsValues,
      });
    };

    const handleResetButtonClick = () => {
      const changedColorControlsValues: any = {};

      for (let key in colorControlsValues) {
        const strKey = key.toString();
        changedColorControlsValues[key] = true;
        window.localStorage.setItem(strKey, 'true');
      }

      this.setState({
        colorControlsValues: changedColorControlsValues,
      });
    };

    return (
      <main>
        <section className="colors">
          <div className="site-wrapper">
            <form className="colors__form">

              <div className="colors__title-wrapper">
                <h1 className="colors__title">Pantone colors</h1>

                <button className={resetButtonClass} type="reset" onClick={handleResetButtonClick} disabled={isControlsValues()}>Reset</button>
              </div>

              { data &&
                <table className="colors__table">
                  <tbody>
                    {/* Список контролов для цветов */}
                    <ColorsControlsItems
                      // properites
                      colorControlsValues={colorControlsValues}
                      // handlers
                      setColorItemsClasses={setColorItemsClasses}
                      handleCheckboxChange={handleCheckboxChange}
                    />

                    {/* Список цветов */}
                    <ColorsItems
                      // properites
                      data={data}
                      // handlers
                      setColorItemsClasses={setColorItemsClasses}
                    />

                  </tbody>
                </table>
              }

            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
