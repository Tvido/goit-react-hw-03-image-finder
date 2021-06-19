import React from 'react';

const ButtonTmp = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="buttonTmp" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

export default ButtonTmp;
