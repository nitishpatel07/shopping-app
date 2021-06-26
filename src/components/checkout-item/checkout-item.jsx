import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
} from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          {" "}
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItem(cartItem)}>
          {" "}
          &#10095;
        </div>
      </div>
      <div className="price">${price}</div>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItemToCart(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
