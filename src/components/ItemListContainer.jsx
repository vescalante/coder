import React from 'react'
import ItemCount from './ItemCount';
import "./itemlistcontainer.css";

function ItemListContainer({msg, nombre}) {
  return (
    <div className='container'>
        <div className='row pt-5 pb-2'>
            <div className='col-lg-12 title-saludo'>
                <h3>Hola <span>{nombre}</span>, {msg}</h3>
            </div>
        </div>
        <ItemCount 
          stock={5} 
          initial={1} 
          onAdd={ function onAdd(e){
            alert("El valor del carrito es:"+ e);
          }}
        />
    </div>
  )
}

export default ItemListContainer