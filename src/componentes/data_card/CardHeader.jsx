import React from "react";

const CardHeader = ({titulo}) => {
  return (
    <h3 className="card-title mt-3 text-center">
      {titulo}
    </h3>
  );
}

export default CardHeader;