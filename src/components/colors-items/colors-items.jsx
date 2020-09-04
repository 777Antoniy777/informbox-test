import * as React from "react";

class ColorsItems extends React.PureComponent {
  state = {
    colorsCheckboxes: [
      {
        id: 'color-id',
        value: true,
      },
      {
        id: 'color-name',
        value: true,
      }
    ],
  }

  render() {
    const {colorsCheckboxes} = this.state;

    const handleCheckboxChange = () => {
      this.setState(() => ({
        colorsCheckboxes: [
          {
            id: 'color-id',
            value: false,
          },
          {
            id: 'color-name',
            value: true,
          }
        ],
      }));
    };

    return (
      <section className="colors">
        <div className="site-wrapper">
          <form className="colors__form">

            <div className="colors__title-wrapper">
              <h1 className="colors__title">Pantone colors</h1>

              <button className="colors__reset-button" type="reset">Reset</button>
            </div>

            <table className="colors__table">
              <tbody>
                <tr className="colors__table-row">
                  <th className="colors__table-header colors__table-header--id">
                    <label htmlFor="color-id">Id</label>
                    <input type="checkbox" id="color-id" name="color-id" onChange={handleCheckboxChange} checked={colorsCheckboxes[0].value}/>
                  </th>
                  <th className="colors__table-header">
                    <label htmlFor="color-name">Name</label>
                    <input type="checkbox" id="color-name" name="color-name" onChange={handleCheckboxChange} checked={colorsCheckboxes[1].value}/>
                  </th>
                  <th className="colors__table-header colors__table-header--year">
                    <label htmlFor="color-year">Year</label>
                    <input type="checkbox" id="color-year" name="color-year" onChange={handleCheckboxChange} checked={colorsCheckboxes[1].value}/>
                  </th>
                  <th className="colors__table-header colors__table-header--value">
                    <label htmlFor="color-value">Color</label>
                    <input type="checkbox" id="color-value" name="color-value" onChange={handleCheckboxChange} checked={colorsCheckboxes[1].value}/>
                  </th>
                  <th className="colors__table-header">
                    <label htmlFor="color-pantone">Pantone value</label>
                    <input type="checkbox" id="color-pantone" name="color-pantone" onChange={handleCheckboxChange} checked={colorsCheckboxes[1].value}/>
                  </th>
                </tr>

                <tr className="colors__table-row">
                  <td className="colors__table-cell colors__table-cell--id">1</td>
                  <td className="colors__table-cell colors__table-cell--name">Cerulean</td>
                  <td className="colors__table-cell colors__table-cell--year">2000</td>
                  <td className="colors__table-cell colors__table-cell--value">
                    <span>#98B2D1</span>
                    <div></div>
                  </td>
                  <td className="colors__table-cell">15-4020</td>
                </tr>

              </tbody>
            </table>
          </form>
        </div>
      </section>
    );
  }
}

export default ColorsItems;
