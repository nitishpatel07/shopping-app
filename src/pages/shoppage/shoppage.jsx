import React from "react";
import "./shoppage.styles.scss";
import ShopItem from "../../components/shop-item/shop-item";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <ShopItem key={id} {...otherSectionProps}></ShopItem>
        ))}
      </div>
    );
  }
}

export default ShopPage;
