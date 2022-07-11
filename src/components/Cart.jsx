import React from 'react'
import { Link } from 'react-router-dom';
import {CarritoContext} from '../context/CartContext';
import {useContext} from 'react';
import CartTable from './CartTable';
import { FaCartArrowDown, FaCreditCard, FaShoppingBag } from 'react-icons/fa';

export default function cart() {
    const { carrito, setCarrito, mostrarItemCount, setMostrarItemCount, clear, removeItem, resultado } = useContext(CarritoContext);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    { mostrarItemCount ? <div className='col-md-12 p-5 text-center'><h2>No hay productos en tu carrito</h2><br /><Link type="button" to="/" className="btn btn-primary m-1">REGRESAR A LA TIENDA</Link> </div> :
                        <>
                            <div className='col-md-12 p-5 text-center'>
                                <h2 className="pb-2">Tu carrito de Compras</h2> 
                                <div className="btn-group" role="group" aria-label="">
                                    <Link type="button" className="btn btn-primary active" to={"/checkout"}><FaCreditCard /> PASAR A PAGAR</Link>
                                    <Link type="button" className="btn btn-primary" to="/"><FaShoppingBag /> SEGUIR COMPRANDO</Link>
                                    <button type="button" className="btn btn-danger" onClick={()=> clear()}><FaCartArrowDown /> VACIAR CARRITO</button>
                                </div> 
                            </div>
                            <div className='col-md-12'>
                                <CartTable />
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
