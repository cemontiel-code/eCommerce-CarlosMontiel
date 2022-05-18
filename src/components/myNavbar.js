import { Link } from "react-router-dom";
import menu from './svg/MenuIcon.svg' 
import CartWidget from "./CartWidget";

const NavBar =()=>{
    return (  
    <div className="navbar z-50 rounded-b-lg bg-accent ">
      <div className="navbar-start">
        
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-info rounded-full gap-2" data-bs-toggle="tooltip" title="Categorias">
            <img src={menu} alt={'menu'} className="h-5 w-5" ></img>
            CATEGORIAS
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/category/car' > Vehiculos  </Link></li>
            <li><Link to='/category/part'> Respuesto y Partes   </Link></li>
            <li><Link to='/category/misc'> Accesorios para Vehiculos  </Link></li>
          </ul>
        </div>
        
      </div>
      <div className="navbar-center">
        <Link  to='/' className="normal-case gap-2 text-center text-4xl " data-bs-toggle="tooltip" title="Tienda de Respuesto">
          Repuestos 
         de vehiculos 
           
        </Link>
      </div>
      <div className="navbar-end">

        <CartWidget></CartWidget>
      </div>
    </div>   )
};


export default NavBar;