import React, { useState, PropsWithChildren } from 'react';

import './accordion-item.css';

interface IAccordionItem {
  children: React.ReactNode;
  label: string;
  defaultIsOpen?: boolean;
}

export const AccordionItem = ({ label, defaultIsOpen, children }: PropsWithChildren<IAccordionItem>) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="swyt-accordion">
      <button className="swyt-accordion-button" aria-expanded={isOpen} onClick={handleClick}>
        <div className="swyt-accordion-plus-minus">{isOpen ? '-' : '+'}</div>{label}
      </button>
      <div className="swyt-accordion-content" aria-hidden={!isOpen}>
        {children}
      </div>
    </div>
  )
};
