import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navbar bg-primary bg-opacity-70 backdrop-blur-lg100 drop-shadow-lg z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex="0"
            className="btn btn-primary rounded-full gap-2"
            data-bs-toggle="tooltip"
            title="Categorias"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="h-5 w-5"
            ></FontAwesomeIcon>
            <div className="md:block hidden text-primary-content">
              {" "}
              CATEGORIAS{" "}
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-64 rounded-box "
          >
            <li>
              <Link to="/category/car"> Vehiculos </Link>
            </li>
            <li>
              <Link to="/category/part"> Respuesto y Partes </Link>
            </li>
            <li>
              <Link to="/category/misc"> Accesorios para Vehiculos </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="normal-case gap-2 text-center md:text-4xl text-2xl text-secondary-content"
          data-bs-toggle="tooltip"
          title="Tienda de Respuesto"
        >
          Tienda de Repuestos
        </Link>
      </div>
      <div className="navbar-end">
        <CartWidget></CartWidget>
      </div>
    </div>
  );
};

export default NavBar;
