import React, { useState } from 'react';

export const AccordionComponent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 dark:border-gray-700">
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-2 font-semibold focus:outline-none"
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};