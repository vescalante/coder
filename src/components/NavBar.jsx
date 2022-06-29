import React from 'react';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import {CarritoContext} from '../context/CartContext';
import {useContext} from 'react';

function NavBar() {
    const { totalQuantity } = useContext(CarritoContext);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >
                    <img src="/logo192.png" alt="" width="30" height="30" className="d-inline-block align-text-top" />
                    Tienda Online
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/regalos">Regalos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/cosmeticos">Cosmeticos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/electronicos">Electrónicos</Link>
                        </li>
                    </ul>
                    <CartWidget cuantos={totalQuantity}/>
                </div>
            </div>
        </nav>
    );
  }
  
  export default NavBar;