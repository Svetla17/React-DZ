import React, { useState } from 'react';

 
const AccordionItems = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
 
  return (
    <div className="accordion-item">
      <div className="accordionTitle" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>       
      </div>
      {isActive && <div className="accordionContent">{content}</div>}
    </div>
  );
};
 

export default AccordionItems