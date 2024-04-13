import React, { PropsWithChildren, MouseEventHandler } from 'react';
import './round-button.css';

interface IRoundButton {
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  ariaLabel?: string;
  type?: string;
  size?: string;
}

export const RoundButton = ({ 
  children,
  handleClick,
  ariaLabel,
  type = 'primary',
  size = 'medium',
}: PropsWithChildren<IRoundButton>) => (
  <button className={`swyt-round-button -${type} -${size}`} onClick={handleClick} aria-label={ariaLabel}><span className="inner">{children}</span></button>
);
