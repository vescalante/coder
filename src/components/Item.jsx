import React from 'react'
import { Link } from 'react-router-dom'

function Item({ stock, id, itemName, itemCategory, itemImage, price }) {
    return (
        <div className="card">
            <div className="card-header text-center">
                <p style={{ fontWeight: '700' }}>{itemName}</p>
            </div>
            <img src={itemImage} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h2 className="card-text">${price.toLocaleString('en-US')}</h2>
                <p className="card-text">categoría:{itemCategory}</p>
                <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle del producto</Link>
            </div>
            <div className="card-footer text-muted text-center">
                Stock disponible: {stock}
            </div>
        </div>
    )
}

export default Item