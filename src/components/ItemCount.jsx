import React, { useEffect, useState } from 'react'
import "./itemcount.css";

function ItemCount({stock, initial, item, price, onAdd, itemName, itemImage}) {
    const [InitialVal, setInitialVal]=useState(initial);
    const [ItemId, setItemId]=useState(item);
    const [ItemPrice, setItemPrice]=useState(price);
    const [ItemName, setItemName]=useState(itemName);
    const [ItemImage, setItemImage]=useState(itemImage);
    const [StockVal, setStockVal]=useState(stock);
    const [disablePlus,setDisablePlus]=useState(false);
    const [disableAdd,setDisableAdd]=useState(false);

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
                    <button className="btn btn-primary btn-cart" onClick={()=> onAdd(ItemId,ItemPrice,InitialVal, itemImage, itemName)} disabled={disableAdd}>
                        <span>Agregar al carrito</span>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default ItemCount