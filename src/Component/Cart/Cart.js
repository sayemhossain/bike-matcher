import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { id, img, name } = props.item;
  return (
    <div>
      <div className="cart bg-light mt-3 rounded container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-3  ps-0 ">
            <img src={img} alt="" />
          </div>
          <div className="col-lg-7 ps-1">
            <p className="fw-bold">{name}</p>
          </div>
          <div className="col-lg-2">
            <FontAwesomeIcon
              onClick={() => {
                props.handleDeleteBtn(id);
              }}
              icon={faTrashCan}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
