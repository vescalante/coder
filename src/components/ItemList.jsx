import React from 'react'
import Item from './Item'

function ItemList({ loading, error, resultado }) {
    return (
        <div className='row mt-3'>
            <div>{loading && 'Cargando Elementos...'}</div>
            <div>{error && 'Hubo un error en la carga...'}</div>

            {resultado &&
                resultado.map((item) => (
                    <>
                        <Item
                            stock={item.stock}
                            itemName={item.itemName}
                            id={item.id}
                        />
                    </>
                ))}

        </div>
    )
}

export default ItemList