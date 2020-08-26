import React from 'react';
import logo from '../assets/Logo.png';
import styles from '../styles/NavBar.css';
import CartIcon from '../components/CartIcon';
import Counter from '../components/Counter';

class Navbar extends React.Component {
    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="#">

  <img src={logo} alt="Logo" className="logo"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="#">INICIO <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">TRABAJOS REALIZADOS</a>
      <a className="nav-item nav-link" href="#">PRESUPUESTOS</a>
      <a className="nav-item nav-link" href="#">CONTACTO</a>
    </div>
  </div>

  <div>  <CartIcon/>
</div>
<div>
<Counter/>
</div>

</nav>
        )
    }
};
export default Navbar;