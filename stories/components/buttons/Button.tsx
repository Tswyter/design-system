import React, { PropsWithChildren, MouseEventHandler } from 'react';
import './button.css';

interface IButton {
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  ariaLabel?: string;
  type?: string;
  size?: string;
}

export const Button = ({ 
  children,
  handleClick,
  ariaLabel,
  type = 'primary',
  size = 'medium',
}: PropsWithChildren<IButton>) => (
  <button className={`swyt-button -${type} -${size}`} onClick={handleClick} aria-label={ariaLabel}>{children ? children : 'placeholder'}</button>
);
