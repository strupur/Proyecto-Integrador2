import './Header.css'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
    
    <header className="main-header">

    <div className="div-logo-head">
      <i className="fa-solid fa-guitar"><span className="logo-music-head">MUSIC </span></i>
    </div>

    <input type="checkbox" id="responsive-menu" className="input-burger" />

    <nav className="main-nav">
      <NavLink to="/" className="link-header">Principal</NavLink>
      <NavLink to="/contact" className="link-header">Contacto</NavLink>
      <NavLink to="/login" className="link-header">Login</NavLink>
      <NavLink to="/admin-product" className="link-header">Admin Productos</NavLink>
      <NavLink to="/pages/menu/registro.html" className="link-header">Registro</NavLink>
      <NavLink to="/acerca-de-nosotros" className="link-header">Acerca de nosotros</NavLink>
      
      
    </nav>

    <div className="usuario-logo">
      <label className="burger-menu" htmlFor="responsive-menu">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </label>

      <span className="ocultar-span">
        Francisco
      </span>
      <div className="div-logo-head2">
        <i className="fa-solid fa-guitar"><span className="logo-music-head2">MUSIC </span></i>
      </div>

      <i className="cart-icon fa-solid fa-cart-shopping" data-count="6"></i>

    </div>
  </header>
    
    
    
    </>
  )
}
