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
                        <div className='col-md-3 pt-3 pb-3' key={item.id}>
                            <Item
                                stock={item.stock}
                                price={item.itemPrice}
                                itemName={item.itemName}
                                itemImage={item.itemImage}
                                id={item.id}
                                itemCategory={item.itemCategory}
                            />
                        </div>
                    </>
                ))}

        </div>
    )
}

export default ItemList