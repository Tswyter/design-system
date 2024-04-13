import React, { PropsWithChildren } from 'react';
import './input-wrapper.css';

export interface IInputwrapper {
  forId?: string;
  containerClassNames?: string;
  labelClassNames?: string;
  label?: string;
  helpTextClassNames?: string;
  helpText?: string;
  disclaimerTextClassNames?: string;
  disclaimerText?: string;
  errorTextClassNames?: string;
  errorText?: string;
}

const Inputwrapper = ({
  forId,
  containerClassNames,
  labelClassNames,
  label,
  helpTextClassNames,
  helpText,
  disclaimerTextClassNames,
  disclaimerText,
  errorTextClassNames,
  errorText,
  children,
}: PropsWithChildren<IInputwrapper>) => (
  <div className={`swyt-input-wrapper ${containerClassNames}`}>
    {label && <label id={`label-${forId}`} className={`swyt-label-text ${labelClassNames}`} htmlFor={forId}>{label}</label>}
    {helpText && <p className={`swyt-help-text ${helpTextClassNames}`}>{helpText}</p>}
    {children}
    {disclaimerText && <p className={`swyt-disclaimer-text ${disclaimerTextClassNames}`}>{disclaimerText}</p>}
    {errorText && <p className={`swyt-error-text ${errorTextClassNames}`}>{errorText}</p>}
  </div>
);

export default Inputwrapper;
