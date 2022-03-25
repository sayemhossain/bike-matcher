import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { name, img, price } = props.product;
  return (
    <div>
      <div className="card bg-secondary rounded">
        <img className="mx-auto" src={img} alt="" />
        <div className="card-body bg-light">
          <h5 className="card-title">{name}</h5>
          <h6 className=" mb-4">
            Price: <span className="text-danger fw-bold">${price}</span>
          </h6>
          <a
            href="#"
            onClick={() => {
              props.handleAddToCart(props.product);
            }}
            className="btn btn-success"
          >
            Add to Cart
            <FontAwesomeIcon className="ps-2" icon={faCartPlus} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
