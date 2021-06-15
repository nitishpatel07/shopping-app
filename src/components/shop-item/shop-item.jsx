import React from "react";
import ShopPreview from "../shop-preview/shop-preview";
import "./shop-item.styles.scss";

const ShopItem = ({ title, items }) => {
  return (
    <div className="shop-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...shopitemprops }) => (
            <ShopPreview key={id} {...shopitemprops} />
          ))}
      </div>
    </div>
  );
};

export default ShopItem;
