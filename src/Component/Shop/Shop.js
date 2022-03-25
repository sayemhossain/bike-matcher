import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faPersonArrowDownToLine,
} from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  // console.log(cart);
  return (
    <div className="product-container bg-light">
      <div className="card-container m-5 ">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
          ></Card>
        ))}
      </div>
      <div className="cart-container bg-secondary">
        <h3 className="text-uppercase   my-4">Selected Item</h3>
        <div className="mx-3">
          {cart.map((item) => (
            <Cart key={item.id} item={item}></Cart>
          ))}
        </div>
        <button className="btn btn-danger mt-3 fw-bold">
          Choose one for me <FontAwesomeIcon icon={faPersonArrowDownToLine} />
        </button>
        <br></br>
        <button className="btn btn-warning mt-3 fw-bold">
          Choose Again
          <FontAwesomeIcon className="ps-2" icon={faArrowRotateRight} />
        </button>
      </div>
    </div>
  );
};

export default Shop;
