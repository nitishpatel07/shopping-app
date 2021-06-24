import React from "react";
import "./shop-preview.styles.scss";
import CustomButton from "../custom-button/custom-button";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const ShopPreview = ({ item, addItem }) => {
  const { id, name, imageUrl, price } = item;
  return (
    <div className="preview-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="details">
        <div className="preview-footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>
          ADD TO CART
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (user) => dispatch(addItem(user)),
});
export default connect(null, mapDispatchToProps)(ShopPreview);
