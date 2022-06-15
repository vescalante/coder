import React from 'react'
import { Link } from 'react-router-dom'

function Item({ stock, id, itemName, category }) {
    return (
        <div className='col-md-4 pt-3 pb-3'>
            <div className="card">
                <div className="card-header text-center">
                    {itemName}
                </div>
                <img src="https://dummyimage.com/600x400/222222/ffffff" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <p className="card-text">id:{id}, categoría:{category} <br /> Lorem Ipsum Dolor</p>
                    <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle del producto</Link>
                </div>
                <div className="card-footer text-muted text-center">
                    Stock disponible: {stock}
                </div>
            </div>
        </div>
    )
}

export default Item