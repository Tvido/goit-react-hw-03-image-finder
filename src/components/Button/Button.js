import React from 'react';

import './Button.css';

const ButtonTmp = ({ children, onClick, ...allyProps }) => (
  <div className="ButtonTmp">
    <button type="button" className="Button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  </div>
);

export default ButtonTmp;
