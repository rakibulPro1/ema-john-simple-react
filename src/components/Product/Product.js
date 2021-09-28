import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Product = (props) => {
  // console.log(props.product);
  const { name, img, seller, price, stock, star } = props.product;
  const cartIcon = (
    <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faShoppingCart} />
  );
  return (
    <div className="product">
      <div>
        <img className="product-img" src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p>
          <small>Sell By: {seller}</small>
        </p>
        <p style={{ fontWeight: "bold" }}>Price: {price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <Rating
          initialRating={star}
          readonly
          fullSymbol="fas fa-star icon-star"
          emptySymbol="far fa-star icon-star"
        />

        <br />
        <button
          onClick={() => props.handleClicked(props.product)}
          className="btn-regular"
        >
          {cartIcon}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
