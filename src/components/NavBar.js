import React from 'react';
import logo from '../assets/Logo.png';
import styles from '../styles/NavBar.css'

class Navbar extends React.Component {
    render() {
        return (
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <a class="navbar-brand" href="#">

  <img src={logo} alt="Logo" class="logo"/>

  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">INICIO <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">TRABAJOS REALIZADOS</a>
      <a class="nav-item nav-link" href="#">PRESUPUESTOS</a>
      <a class="nav-item nav-link" href="#">CONTACTO</a>
    </div>
  </div>
</nav>
        )
    }
};
export default Navbar;