import * as React from "react";
import {ColorControlValue} from "../../js/enums";
import {ColorItem, ColorItems} from "../../types/colors-items-type";

type ColorsItemsProps = {
  data: ColorItems;
  setColorItemsClasses: (prefix: string) => {};
};

type ColorsItemProps = {
  elem: ColorItem;
  setColorItemsClasses: (prefix: string) => {};
};

const ColorsItems: React.FC<ColorsItemsProps> = ({data, setColorItemsClasses}: ColorsItemsProps) => {
  return (
    <React.Fragment>
    { data &&
      data.map(elem =>
        <ColorsItem
          // properites
          key={elem.id}
          elem={elem}
          // handlers
          setColorItemsClasses={setColorItemsClasses}
        />
      )
    }
    </React.Fragment>
  );
}

const ColorsItem: React.FC<ColorsItemProps> = ({elem, setColorItemsClasses}: ColorsItemProps) => {
  const {id, color, year, name, pantone_value: pantoneValue} = elem;
  const colorItemClass = setColorItemsClasses('colors__table-cell');

  return (
    <tr className="colors__table-row">
      <td className={colorItemClass[ColorControlValue.COLOR_ID]}>{id}</td>
      <td className={colorItemClass[ColorControlValue.COLOR_NAME]}>{name}</td>
      <td className={colorItemClass[ColorControlValue.COLOR_YEAR]}>{year}</td>
      <td className={colorItemClass[ColorControlValue.COLOR_VALUE]}>
        <span>{color}</span>
        <div style={{backgroundColor: `${color}`,}}></div>
      </td>
      <td className={colorItemClass[ColorControlValue.COLOR_PANTONE]}>{pantoneValue}</td>
    </tr>
  );
};

export default ColorsItems;
