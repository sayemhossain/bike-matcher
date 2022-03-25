import React from "react";
import "./Card.css";

const Card = (props) => {
  const { name, img, price } = props.product;
  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
