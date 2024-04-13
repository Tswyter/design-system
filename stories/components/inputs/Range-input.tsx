import React, { useState } from 'react';
import Inputwrapper, { IInputwrapper } from './shared/input-wrapper';

import './range-input.css';

interface IRangeinput extends IInputwrapper {
  customUniqueId?: string;
  inputClassNames?: string;
  minValue: number;
  maxValue: number;
  step: number;
  value?: string;
  defaultValue?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  handleClick?: any;
  handleChange?: any;
}

const Rangeinput = ({
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
  minValue,
  maxValue,
  step,
  value,
  defaultValue = '',
  ariaLabel,
  ariaLabelledby,
  isDisabled = false,
  isReadOnly = false,
  handleClick,
  handleChange,
}: IRangeinput) => {
  const [inputValue, setInputValue] = useState(value || defaultValue);
  const uniqueId = customUniqueId || 'test';

  function setValueOnChange(event) {
    setInputValue(event?.target.value);
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
      <input
        id={uniqueId}
        type="range"
        className={`swyt-range-input ${inputClassNames}`}
        min={minValue}
        max={maxValue}
        step={step}
        disabled={isDisabled}
        readOnly={isReadOnly}
        value={inputValue}
        aria-label={ariaLabel}
        onClick={handleClick}
        onChange={setValueOnChange}
        aria-labelledby={ariaLabelledby}
      />
      <div className="swyt-range-minmax-labels">
        <span className="swyt-range-min">{`${minValue}`}</span>
        <span className="swyt-range-max">{`${maxValue}`}</span>
      </div>
    </Inputwrapper>
  )
};

export default Rangeinput;
