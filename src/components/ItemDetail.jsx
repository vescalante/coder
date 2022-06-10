import React from 'react'

function ItemDetail({ loading, error, item }) {
    return (
        <div className='row mt-3 pb-5'>
            <div className='col-lg-12'>
                <div>{loading && 'Cargando Vista de producto...'}</div>
                <div>{error && 'Hubo un error en la carga...'}</div>
            </div>

            {item &&
                item.map((prod) => (
                    <>
                        <div className='col-lg-6'>
                            <img src={prod.itemImage} className="card-img-top" alt="..." />
                        </div>
                        <div className='col-lg-6 p-3'>
                            <h1>{prod.itemName}</h1>
                            <h3>{prod.itemPrice}</h3>
                            <p>Stock: {prod.stock}</p>
                            <p>Colores: {prod.itemColors.toString()}</p>
                            <p>{prod.itemDetail}</p>
                            <button className="btn btn-primary">Comprar Ahora</button>
                        </div>
                    </>
                ))}
        </div>
    )
}

export default ItemDetail