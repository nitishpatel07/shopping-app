import React from "react";
import ShopPreview from "../shop-preview/shop-preview";
import "./shop-item.styles.scss";

const ShopItem = ({ title, items }) => {
  return (
    <div className="shop-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview-box">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ShopPreview key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ShopItem;
