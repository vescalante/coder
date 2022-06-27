import React from 'react'
import { Link } from 'react-router-dom';
import {CarritoContext} from '../context/CartContext';
import {useContext} from 'react';
import Item from './Item';

export default function cart() {
    const { carrito, setCarrito, mostrarItemCount, setMostrarItemCount, clear, removeItem } = useContext(CarritoContext);
    const result = carrito.reduce((total, currentValue) => total = total + currentValue.subtotal,0);
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
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Subtotal</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {carrito &&
                                        carrito.map((item) => (
                                            <>
                                                <tr>
                                                    <td>{item.itemId}</td>
                                                    <td>${item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>${item.subtotal.toFixed(3)}</td>
                                                    <td><button className='btn btn-primary' onClick={()=> removeItem(item.itemId, item.quantity)}>Borrar</button></td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-md-12 p-5 text-center'>
                                <h3>Total: ${result.toFixed(3)}</h3>
                            </div>
                            <div className='col-md-12 p-5 text-center'>
                                <button type="button" className="btn btn-primary m-1">PROCEDER AL PAGO</button>
                                <button type="button" className="btn btn-secondary m-1" onClick={()=> clear()}>VACIAR CARRITO</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
