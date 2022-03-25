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

  // this is for adding cart in cart section
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    const targetCart = newCart.filter((item) => item.id === product.id);

    if (newCart.length > 4) {
      alert("Ops! You can only add 4 items..");
    } else if (targetCart.length == 2) {
      alert("Already added");
    } else {
      setCart(newCart);
    }
  };

  // this is for choosing one item
  const handleChooseBtn = (product) => {
    const newCart = [...cart, product];
    const singleCart =
      newCart[Math.floor(Math.random() * (newCart.length - 1))];
    const newItem = [singleCart];
    setCart(newItem);
  };
  // this is for choose again btn
  const handleChooseAgain = () => {
    setCart([]);
  };

  //this is for delete button
  const handleDeleteBtn = (id) => {
    const newCart = [...cart];
    const rest = newCart.filter((item) => item.id !== id);
    setCart(rest);
  };

  return (
    <div className="product-container bg-light text-center ">
      <div className="card-container  m-2 m-md-5 ">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
          ></Card>
        ))}
      </div>
      <div className="cart-container bg-light">
        <h3 className="text-uppercase  text-danger my-4">Selected Item</h3>
        <div className="mx-3">
          {cart.map((item) => (
            <Cart
              key={item.id}
              item={item}
              handleDeleteBtn={handleDeleteBtn}
            ></Cart>
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
          className="btn btn-warning mt-3 mb-3 fw-bold"
        >
          Choose Again
          <FontAwesomeIcon className="ps-2" icon={faArrowRotateRight} />
        </button>
      </div>
    </div>
  );
};

export default Shop;
