import { Link } from "react-router-dom";
import menu from './svg/MenuIcon.svg' 
import logo from './svg/logo.svg' 
import busq from './svg/busquedaIcon.svg' 
import CartWidget from "./CartWidget";

const NavBar =()=>{
    return (  
    <div className="navbar bg-accent">
      <div className="navbar-start">
        
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle" data-bs-toggle="tooltip" title="Categorias">
            <img src={menu} alt={'menu'} className="h-5 w-5" ></img>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/category/car'>vehiculos</Link></li>
            <li><Link to='/category/part'>Partes</Link></li>
            <li><Link to='/category/cosm'>Cosmetico</Link></li>
          </ul>
        </div>
        
      </div>
      <div className="navbar-center">
        <Link  to='/' className="normal-case gap-2 text-xl text-center" data-bs-toggle="tooltip" title="Tienda de Respuesto">
          Repuestos 
         de vehiculos 
          <img src={logo} alt={'logo'} className="h-5 w-5" ></img>
        </Link>
      </div>
      <div className="navbar-end">

        <button className="btn btn-ghost btn-circle" data-bs-toggle="tooltip" title="Busqueda de articulos">
          <img src={busq} alt={'busqueda'} className="h-5 w-5" ></img>
        </button>

        <CartWidget></CartWidget>
      </div>
    </div>   )
};


export default NavBar;