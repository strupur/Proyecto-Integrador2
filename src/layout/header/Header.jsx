import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import { NavLink } from "react-router-dom";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import userImg from '../../assets/image/OIF.jpg'
import { useOrder } from '../../context/OrderContext';

export default function Header() {

  const { setToggleModal, count } = useOrder()

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

      <div className='user'>
        <div className='order'>
          <div className='order-count'>{count}</div>
          <FontAwesomeIcon icon={faCartShopping}
                          onClick={() => setToggleModal((estado) => !estado)} />
        </div>
        <div className='avatar'>
          <img src={userImg} alt="" />
        </div>
      </div>

    </div>
  </header>
    
    
    
    </>
  )
}
