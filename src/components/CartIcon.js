import React from 'react';
import logo from '../assets/Logo.png';
import iconCart from '../assets/iconCart.png';
import styles from '../styles/CartIcon.css';

class CartIcon extends React.Component {
    render() {
        return (
    <a className="nav-item nav-link">
        <img src={iconCart} alt="iconCart" className="cartLogo"/>
    </a>
    )
}
};
export default CartIcon;