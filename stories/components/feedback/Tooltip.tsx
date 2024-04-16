import React, { PropsWithChildren } from 'react';

import './tooltip.css';

interface ITooltip {
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  caretPosition?: 'beginning' | 'middle' | 'end';
}

export const Tooltip = ({ position, caretPosition, children }: PropsWithChildren<ITooltip>) => (
  <div className={`swyt-tooltip -${position} -${caretPosition}`}>
    {children}
  </div>
);