import React, { PropsWithChildren } from 'react';
import './card.css';

export const Card = ({ children }: PropsWithChildren) => (
  <div className="swyt-card">
    {children}
  </div>
);
