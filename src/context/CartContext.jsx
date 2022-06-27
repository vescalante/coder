import React from 'react';
import { createContext, useState, useEffect } from 'react';
export const CarritoContext = createContext({});

export default function CartContext({children}) {
    const [carrito, setCarrito] = useState([]);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        console.log(carrito);
    }, [carrito]);

    function onAdd(i,p,e){
        alert("Agregaste:" + e + " del producto "+ i + " al carrito, cada uno cuesta cuesta: $"+ p );
        if(isInCart(i)){
            const newCart = carrito.map(obj => {
                if(obj.itemId === i){
                    return {...obj, quantity: obj.quantity + e, subtotal: (obj.quantity+e)*p }
                }
                return obj;
            });
            setCarrito(newCart);
        }else{
            setCarrito(current => [...current, {itemId: i, price: p, quantity: e, subtotal: p*e }]);
        }
        setTotalQuantity (totalQuantity+e);
        setMostrarItemCount(false);
    }
    function removeItem(itemId,q){
        setCarrito(carrito.filter(p => p.itemId !== itemId));
        setTotalQuantity (totalQuantity-q);
        if ((totalQuantity-q) === 0) { setMostrarItemCount(true) }
    }
    function clear(){
        alert("Se ha vaciado el carro");
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
        <CarritoContext.Provider value={{ mostrarItemCount, setMostrarItemCount, onAdd, totalQuantity, carrito, setCarrito, clear, removeItem }}>
            {children}
        </CarritoContext.Provider>
    )
}
