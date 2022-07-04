import React from 'react'
import { Link } from 'react-router-dom';
import {CarritoContext} from '../context/CartContext';
import {useContext} from 'react';
import CartTable from './CartTable';

export default function cart() {
    const { carrito, setCarrito, mostrarItemCount, setMostrarItemCount, clear, removeItem, resultado } = useContext(CarritoContext);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    { mostrarItemCount ? <div className='col-md-12 p-5 text-center'><h2>No hay productos en tu carrito</h2><br /><Link type="button" to="/" className="btn btn-primary m-1">REGRESAR A LA TIENDA</Link> </div> :
                        <>
                            <div className='col-md-12 p-5 text-center'>
                                <h2>Tu carrito de Compras</h2>  
                            </div>
                            <div className='col-md-12'>
                                <CartTable />
                            </div>
                            <div className='col-md-12 p-5 text-center'>
                                <Link type="button" className="btn btn-primary m-1" to={"/checkout"}>PROCEDER AL PAGO</Link>
                                <button type="button" className="btn btn-secondary m-1" onClick={()=> clear()}>VACIAR CARRITO</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
