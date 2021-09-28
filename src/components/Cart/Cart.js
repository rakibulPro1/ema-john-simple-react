import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.cart);
  let total = 0;
  for (const product of props.cart) {
    total = total + product.price;
  }
  const shiping = total > 0 ? 15 : 0;
  const tax = ((total + shiping) * 10) / 100;
  const grandTotal = total + shiping + tax;
  return (
    <div>
      <div style={{ textAlign: "center", borderBottom: "1px solid lightgray" }}>
        <h2>Order Summery</h2>
        <h3>Item Ordered: {props.cart.length}</h3>
      </div>
      <div className="calculate">
        <p>Total: {total.toFixed(2)}</p>
        <p>Shiping: {shiping.toFixed(2)}</p>
        <p>Tax: {tax.toFixed(2)}</p>
        <p>Grand Total: {grandTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
