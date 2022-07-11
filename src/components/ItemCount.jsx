import React, {useEffect, useState, useContext} from 'react';
import "./itemcount.css";
import {CarritoContext} from '../context/CartContext';

function ItemCount({stock, initial, item, price, onAdd, itemName, itemImage}) {
    const { carrito, isInCart } = useContext(CarritoContext);
    const [InitialVal, setInitialVal]=useState(initial);
    const [ItemId, setItemId]=useState(item);
    const [ItemPrice, setItemPrice]=useState(price);
    const [ItemName, setItemName]=useState(itemName);
    const [ItemImage, setItemImage]=useState(itemImage);
    const [StockVal, setStockVal]=useState(stock);
    const [disablePlus,setDisablePlus]=useState(false);
    const [disableAdd,setDisableAdd]=useState(false);
    const [loTengo,setloTengo]=useState(false);

    useEffect(() => {
      setloTengo(false)
      if(isInCart(ItemId)){
            console.log(JSON.stringify(carrito))
            console.log(ItemId);
            carrito.map(obj => {
                if(obj.itemId === ItemId){
                    setInitialVal(obj.quantity)
                    setloTengo(true)
                }
            });
        }
    }, [])

    useEffect(()=>{
        if(InitialVal===(StockVal+1)){
            alert('Te has llegado al limite del stock');
            setDisablePlus(true);
            setDisableAdd(true);
        }else if(InitialVal<=0){
            setDisableAdd(true);
        }else{
            setDisableAdd(false);
            setDisablePlus(false);
        }
    },[InitialVal]);

  return (
        <div className="card">
            <div className="card-body">
                <div className="product-form container">
                    <div className="product-qty-form">
                        <div className="input-group">
                            <button className="button-minus"
                                onClick={()=>{
                                    if(InitialVal>=1){
                                        setInitialVal(InitialVal-1);
                                    }
                                }}>-</button>
                            <input type="number" value={InitialVal} name="quantity" className="quantity-field" readOnly='readOnly' />
                            <button className="button-plus"
                                onClick={()=>{
                                    setInitialVal(InitialVal+1);
                                }}
                                disabled={disablePlus}>+</button>
                        </div>
                    </div>
                    
                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Producto agregado al carrito</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Agregaste a tu carrito: <br />
                                    {itemName} ({InitialVal}), cada uno cuesta: ${ItemPrice}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-cart mt-2" data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={()=> onAdd(ItemId,ItemPrice,InitialVal, itemImage, itemName)} disabled={disableAdd}>
                        {loTengo ? <span>Actualizar producto en el carrito</span> : <span>Agregar al carrito</span>}
                    </button>
                </div>
            </div>
            {loTengo ? <div className="card-footer text-muted text-center">Este producto ya está en tu carrito</div> : <div></div>}
        </div>
  )
}

export default ItemCount