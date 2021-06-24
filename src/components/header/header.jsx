import React from "react";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="header-box">
        <div className="options">
          <Link className="option" to="/">
            HOME
          </Link>
          <Link className="option" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <div className="sign-out" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="sign-in" to="/signin">
              SIGN IN
            </Link>
          )}
        </div>
        <div className="cart">
          <CartIcon />
        </div>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
