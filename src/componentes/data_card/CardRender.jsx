import React from 'react';

const CardRender = ({children}) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default CardRender;