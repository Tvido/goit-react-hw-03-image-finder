import React from 'react';

const buttonTmp = ({ children, onClick, ...allyProps }) => (
  <buttton
    type="buttton"
    className="buttonTmp"
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </buttton>
);

export default buttonTmp;
