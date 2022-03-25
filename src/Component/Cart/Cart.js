import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { img, name } = props.item;
  console.log(props);
  return (
    <div>
      <div className="cart bg-white  container">
        <img src={img} alt="" />
        <p>{name}</p>
        <p className="btn btn-primary">Delete</p>
      </div>
    </div>
  );
};

export default Cart;
