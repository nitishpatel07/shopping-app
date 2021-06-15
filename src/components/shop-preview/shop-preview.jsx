import React from "react";
import "./shop-preview.styles.scss";

const ShopPreview = ({ id, name, imageUrl, price }) => {
  return (
    <div className="preview">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="details">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ShopPreview;
