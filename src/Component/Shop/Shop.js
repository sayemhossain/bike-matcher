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

  const handleChooseBtn = (product) => {
    let newCart = [...cart, product];
    for (let i = 0; i < newCart.length; i++) {
      // console.log(props);
      if (i == Math.floor(Math.random() * 5 + 1)) {
        newCart = [product];
      }
    }
    // newCart.map((product) => {
    //   if (product.id == Math.floor(Math.random() * 5 + 1)) {
    //     setCart(product);
    //   }
    // });
  };
  // console.log(cart);

  // this is for choose again btn
  const handleChooseAgain = () => {
    setCart([]);
  };
  return (
    <div className="product-container bg-light">
      <div className="card-container m-2 m-md-5 ">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
          ></Card>
        ))}
      </div>
      <div className="cart-container bg-info">
        <h3 className="text-uppercase   my-4">Selected Item</h3>
        <div className="mx-3">
          {cart.map((item) => (
            <Cart key={item.id} item={item}></Cart>
          ))}
        </div>
        <button
          onClick={handleChooseBtn}
          className="btn btn-danger mt-3 fw-bold"
        >
          Choose one for me <FontAwesomeIcon icon={faPersonArrowDownToLine} />
        </button>
        <br></br>
        <button
          onClick={handleChooseAgain}
          className="btn btn-warning mt-3 fw-bold"
        >
          Choose Again
          <FontAwesomeIcon className="ps-2" icon={faArrowRotateRight} />
        </button>
      </div>
    </div>
  );
};

export default Shop;
