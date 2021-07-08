import React from "react";
import "./shop-preview.styles.scss";
import CustomButton from "../custom-button/custom-button";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";

const ShopPreview = ({ item, addItem }) => {
  const { id, name, imageUrl, price } = item;
  return (
    <div className="preview-item">
      <img className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="preview-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (user) => dispatch(addItemToCart(user)),
});
export default connect(null, mapDispatchToProps)(ShopPreview);
