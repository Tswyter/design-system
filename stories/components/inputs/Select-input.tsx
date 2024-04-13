import React, { useState } from 'react';
import Inputwrapper, { IInputwrapper } from './shared/input-wrapper';
import './select-input.css';

type Option = {
  value: string;
  label: string;
  isSelected?: boolean;
}

interface ISelectinput extends IInputwrapper {
  options: Option[];
  customUniqueId?: string;
  inputClassNames?: string;
  defaultValue?: string;
  placeholder?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  isDisabled?: boolean;
  handleClick?: any;
  handleChange?: any;
  inputType?: 'select';
  isMultiSelect?: boolean;
  multiSelectSize?: number;
};

const Selectinput = ({
  options,
  customUniqueId,
  containerClassNames = '',
  inputClassNames = '',
  labelClassNames = '',
  helpTextClassNames = '',
  disclaimerTextClassNames = '',
  errorTextClassNames = '',
  label,
  helpText,
  errorText,
  disclaimerText,
  defaultValue = '',
  ariaLabel,
  ariaLabelledby,
  isDisabled = false,
  handleClick,
  handleChange,
  isMultiSelect = false,
  multiSelectSize,
}: ISelectinput) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || 'none');
  const uniqueId = customUniqueId || 'test';

  function setValueOnChange(event) {
    setSelectedValue(event?.target.value);
    handleChange(event);
  }

  return (
    <Inputwrapper
      containerClassNames={containerClassNames}
      forId={uniqueId}
      label={label}
      labelClassNames={labelClassNames}
      helpText={helpText}
      helpTextClassNames={helpTextClassNames}
      disclaimerText={disclaimerText}
      disclaimerTextClassNames={disclaimerTextClassNames}
      errorText={errorText}
      errorTextClassNames={errorTextClassNames}
    >
      <select
        id={uniqueId}
        className={`swyt-select-input ${isMultiSelect && '-multiselect'} ${inputClassNames}`}
        disabled={isDisabled}
        aria-label={ariaLabel}
        onClick={handleClick}
        onChange={setValueOnChange}
        aria-labelledby={ariaLabelledby}
        multiple={isMultiSelect}
        size={multiSelectSize}
      >
        {options?.map(option => (
          <option value={option.value} selected={option.isSelected}>{option.label}</option>
        ))}
      </select>
    </Inputwrapper>
  );
};

export default Selectinput;
