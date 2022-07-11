import React, { useState, useContext, useEffect } from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {CarritoContext} from '../context/CartContext';
import "./itemdetail.css";

function ItemDetail({ loading, error, item }) {
    const { mostrarItemCount, setMostrarItemCount, onAdd } = useContext(CarritoContext);
    useEffect(()=>{
        if(!mostrarItemCount){
            setMostrarItemCount(true);
        }
    },[]);

    return (
        <div className='row mt-3 pb-5'>
            <div className='col-lg-12 pt-5'>
                <div>{loading && 'Cargando Vista de producto...'}</div>
                <div>{error && 'Hubo un error en la carga...'}</div>
            </div>

            {item &&
                item.map((prod) => (
                    <>
                        <div className='col-lg-6'>
                            <img src={prod.itemImage} className="card-img-top" alt="..." />
                        </div>
                        <div className='col-lg-6 descripcion'>
                            <h1>{prod.itemName}</h1>
                            <h3>${prod.itemPrice.toLocaleString('en-US')}</h3>
                            <p>Id: {prod.id}
                            <br/>Categoría: {prod.itemCategory}
                            <br/>Stock: {prod.stock}</p>
                            <p>{prod.itemDetail}</p>
                            {mostrarItemCount ? <ItemCount itemName={prod.itemName} itemImage={prod.itemImage} stock={prod.stock} initial={1} item={prod.id} price={prod.itemPrice} onAdd={onAdd} /> : <div><Link className="btn btn-primary mt-3" to="/cart">Ir a mi Carrito</Link> <Link className="btn btn-secondary mt-3" to="/">Seguir comprando</Link></div> }
                        </div>
                    </>
                ))}
        </div>
    )
}

export default ItemDetail