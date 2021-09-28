import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  const handleClicked = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
    console.log(matchedProducts.length);
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Product"
          onChange={handleSearch}
        />
      </div>
      <div className="shop-container">
        <div className="products-container">
          <h2>Products:{products.length}</h2>
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleClicked={handleClicked}
            ></Product>
          ))}
        </div>
        <div className="order-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
