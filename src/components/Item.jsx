import React from 'react'

function Item({ stock, id, itemName }) {
    return (
        <div className='col-md-4 pt-3 pb-3'>
            <div className="card">
                <div className="card-header text-center">
                    {itemName}
                </div>
                <img src="https://dummyimage.com/600x400/222222/ffffff" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <p className="card-text">id:{id} <br /> Lorem Ipsum Dolor </p>
                    <a href="#" className="btn btn-primary">Ver detalle del producto</a>
                </div>
                <div className="card-footer text-muted text-center">
                    Stock disponible: {stock}
                </div>
            </div>
        </div>
    )
}

export default Item