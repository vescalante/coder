import React from 'react'
import "./itemlistcontainer.css";

function ItemListContainer({msg, nombre}) {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 p-5 title-saludo'>
                <h3>Hola <span>{nombre}</span>, {msg}</h3>
            </div>
        </div>
    </div>
  )
}

export default ItemListContainer