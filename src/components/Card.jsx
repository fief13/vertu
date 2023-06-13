import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="cardPage">
      <Link to={`/single-product/${data?.id}`}>
        <div className="cardImg">
          <img
            src={`http://localhost:5000/${data?.productImage}`}
            alt={data?.name}
          />
        </div>
        <div className="cardInformation">
          <h4 className="cardTitle">{data?.name}</h4>
          <p className="cardDetails">{data?.details}</p>
          <span className="price">${data?.price} USD</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
