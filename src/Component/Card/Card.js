import React from "react";
import "./Card.css";

const Card = (props) => {
  const { name, img, price } = props.product;
  return (
    <div>
      <div className="card bg-secondary rounded">
        <img className="mx-auto" src={img} alt="" />
        <div className="card-body bg-light">
          <h5 className="card-title">{name}</h5>
          <h5 className="fw-bold text-danger mb-4">${price}</h5>
          <a
            href="#"
            onClick={() => {
              props.handleAddToCart(props.product);
            }}
            className="btn btn-success"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
