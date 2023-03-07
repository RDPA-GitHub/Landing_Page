import React from "react";

const CardBody = ({texto_card}) => {
  return (
    <div className="card-body">
      <p className="card-text">
        {texto_card}
      </p>
    </div>
  );
}

export default CardBody;