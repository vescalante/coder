import React from 'react'
import {CarritoContext} from '../context/CartContext';
import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

function CartTable() {
  const { carrito, setCarrito, mostrarItemCount, setMostrarItemCount, clear, removeItem, resultado } = useContext(CarritoContext);
  
  return (
    <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
            <thead>
                <tr>
                    <th scope="col" className='text-center'>Imágen</th>
                    <th scope="col" className='text-left'>Producto</th>
                    <th scope="col" className='text-center'>Precio</th>
                    <th scope="col" className='text-center'>Cantidad</th>
                    <th scope="col" className='text-center'>Subtotal</th>
                    <th scope="col" className='text-center'>Borrar</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
            {carrito &&
                carrito.map((item) => (
                    <>
                        <tr>
                            <td className='text-center'><img src={item.itemImage} className="rounded-circle" style={{ width: '40px', height: '40px' }} /></td>
                            <td className='text-left'><Link className='btn btn-info' to={`/item/${item.itemId}`} >{item.itemName}</Link></td>
                            <td className='text-center'>${item.price}</td>
                            <td className='text-center'>{item.quantity}</td>
                            <td className='text-center'>${item.subtotal.toLocaleString('en-US')}</td>
                            <td className='text-center'><button className='btn btn-danger' onClick={()=> removeItem(item.itemId, item.quantity)}><FaTrash /></button></td>
                        </tr>
                    </>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colSpan={2} className="text-center">
                        <h4>Total: ${resultado.toLocaleString('en-US')}</h4>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default CartTable