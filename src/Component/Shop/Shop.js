import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="card-container">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
