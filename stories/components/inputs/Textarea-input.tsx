import React, { useState } from 'react';
import Inputwrapper, { IInputwrapper } from './shared/input-wrapper';
import './text-input.css';

interface ITextareainput extends IInputwrapper {
  customUniqueId?: string;
  inputClassNames?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  handleClick?: any;
  handleChange?: any;
  inputType?: 'text' | 'password' | 'email' | 'file' | 'search' | 'tel' | 'url';
};

// ideas: Add a character count limiter

const Textareainput = ({
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
  value,
  defaultValue = '',
  placeholder,
  ariaLabel,
  ariaLabelledby,
  isDisabled = false,
  isReadOnly = false,
  handleClick,
  handleChange,
}: ITextareainput) => {
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
      <textarea
        id={uniqueId}
        className={`swyt-text-input ${inputClassNames}`}
        disabled={isDisabled}
        readOnly={isReadOnly}
        value={inputValue}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onClick={handleClick}
        onChange={setValueOnChange}
        aria-labelledby={ariaLabelledby}
      />
    </Inputwrapper>
  );
};

export default Textareainput;
