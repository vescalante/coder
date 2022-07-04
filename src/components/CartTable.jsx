import React from 'react'
import {CarritoContext} from '../context/CartContext';
import {useContext} from 'react';

function CartTable() {
  const { carrito, setCarrito, mostrarItemCount, setMostrarItemCount, clear, removeItem, resultado } = useContext(CarritoContext);
  
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">Imágen</th>
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
                        <td><img src={item.itemImage} className="rounded-circle" style={{ width: '40px', height: '40px' }} /></td>
                        <td>{item.itemName}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.subtotal.toLocaleString('en-US')}</td>
                        <td><button className='btn btn-primary' onClick={()=> removeItem(item.itemId, item.quantity)}>Borrar</button></td>
                    </tr>
                </>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={6} className="text-center">
                    <h3>Total: ${resultado.toLocaleString('en-US')}</h3>
                </td>
            </tr>
        </tfoot>
    </table>
  )
}

export default CartTable