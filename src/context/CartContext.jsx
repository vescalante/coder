import React from 'react';
import { createContext, useState, useEffect } from 'react';
export const CarritoContext = createContext({});

export default function CartContext({children}) {
    const [carrito, setCarrito] = useState([]);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
      let data = localStorage.getItem('cart')
      let localCarrito = ({})
      if (data) {
        localCarrito = JSON.parse(data);
        setCarrito(localCarrito);
        setMostrarItemCount(false);
        setTotalQuantity(localCarrito.reduce((totalQty, currentValueQty) => totalQty = totalQty + currentValueQty.quantity,0))
      }
    }, [])
    

    useEffect(() => {
        setResultado(carrito.reduce((total, currentValue) => total = total + currentValue.subtotal,0));
        localStorage.setItem('cart', JSON.stringify(carrito));
        if (totalQuantity===0) {
            setMostrarItemCount(true);
        }else{
            setMostrarItemCount(false);
        }
    }, [carrito]);

    function onAdd(i,p,e,a,n){
        //alert("Agregaste a tu carrito:" + n + " ("+ e +"), cada uno cuesta: $"+ p );
        if(isInCart(i)){
            const newCart = carrito.map(obj => {
                if(obj.itemId === i){
                    //n es el nombre del articulo
                    //e es el total de piezas agregadas o la cantidad
                    //p es el precio por pieza
                    //i es el id del producto
                    //a es la imagen
                    let realQty = 0;
                    if(e>obj.quantity){
                        realQty = e - obj.quantity;
                        //console.log(e+" mayor que "+obj.quantity)
                        setTotalQuantity (totalQuantity+realQty);
                        return {...obj, quantity: realQty+obj.quantity, subtotal: (realQty+obj.quantity)*p, itemName: n, itemImage: a }
                    }else if(e<obj.quantity){
                        realQty = obj.quantity - e;
                        //console.log(e+" menor que "+obj.quantity)
                        setTotalQuantity (totalQuantity-realQty);
                        return {...obj, quantity: obj.quantity-realQty, subtotal: (obj.quantity-realQty)*p, itemName: n, itemImage: a }
                    }
                }
                return obj;
            });
            setCarrito(newCart);
        }else{
            setCarrito(current => [...current, {itemId: i, price: p, quantity: e, subtotal: p*e, itemName: n, itemImage: a }]);
            setTotalQuantity (totalQuantity+e);
        }
        setMostrarItemCount(false);
    }
    function removeItem(itemId,q){
        setCarrito(carrito.filter(p => p.itemId !== itemId));
        setTotalQuantity (totalQuantity-q);
        if ((totalQuantity-q) === 0) { setMostrarItemCount(true) }
    }
    function clear(){
        //alert("Se ha vaciado el carro");
        setTotalQuantity(0);
        setMostrarItemCount(true);
        setCarrito([]);
    }
    function isInCart(itemId){
        let searchItem = carrito.filter(p => p.itemId == itemId)
        if(Object.keys(searchItem).length === 0){
            return false
        }else{
            return true
        }
    }
    return (
        <CarritoContext.Provider value={{ mostrarItemCount, setMostrarItemCount, onAdd, totalQuantity, carrito, setCarrito, clear, removeItem, resultado, isInCart }}>
            {children}
        </CarritoContext.Provider>
    )
}
