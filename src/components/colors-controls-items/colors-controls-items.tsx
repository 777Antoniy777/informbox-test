import * as React from "react";
import {ColorControlValue} from "../../js/enums";
import {ColorControls} from "../../types/colors-controls-items";

type ColorsControlsItemsProps = {
  colorControlsValues: ColorControls;
  handleCheckboxChange: (evt: {}) => void;
  setColorItemsClasses: (prefix: string) => {};
};

const ColorsControlsItems: React.FC<ColorsControlsItemsProps> = ({colorControlsValues, handleCheckboxChange, setColorItemsClasses}: ColorsControlsItemsProps) => {
  const controlItemClass = setColorItemsClasses('colors__table-header');

  return (
    <tr className="colors__table-row">
      <th className={controlItemClass[ColorControlValue.COLOR_ID]}>
        <label htmlFor="color-id">Id</label>
        <input type="checkbox" id="color-id" name="color-id" onChange={handleCheckboxChange} checked={colorControlsValues[ColorControlValue.COLOR_ID]}/>
      </th>
      <th className={controlItemClass[ColorControlValue.COLOR_NAME]}>
        <label htmlFor="color-name">Name</label>
        <input type="checkbox" id="color-name" name="color-name" onChange={handleCheckboxChange} checked={colorControlsValues[ColorControlValue.COLOR_NAME]}/>
      </th>
      <th className={controlItemClass[ColorControlValue.COLOR_YEAR]}>
        <label htmlFor="color-year">Year</label>
        <input type="checkbox" id="color-year" name="color-year" onChange={handleCheckboxChange} checked={colorControlsValues[ColorControlValue.COLOR_YEAR]}/>
      </th>
      <th className={controlItemClass[ColorControlValue.COLOR_VALUE]}>
        <label htmlFor="color-value">Color</label>
        <input type="checkbox" id="color-value" name="color-value"onChange={handleCheckboxChange}  checked={colorControlsValues[ColorControlValue.COLOR_VALUE]}/>
      </th>
      <th className={controlItemClass[ColorControlValue.COLOR_PANTONE]}>
        <label htmlFor="color-pantone">Pantone value</label>
        <input type="checkbox" id="color-pantone" name="color-pantone" onChange={handleCheckboxChange} checked={colorControlsValues[ColorControlValue.COLOR_PANTONE]}/>
      </th>
    </tr>
  );
};

export default ColorsControlsItems;
