import React from "react";
import "./checkout-page.styles.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectCartItemsTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../checkout-item/checkout-item";

const CheckOutPage = ({ cartItems, total }) => (
  <div>
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartItemsTotal(state),
});
export default connect(mapStateToProps)(CheckOutPage);
