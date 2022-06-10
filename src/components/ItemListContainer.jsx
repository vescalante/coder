import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import "./itemlistcontainer.css";

function ItemListContainer({ msg, nombre }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const productos = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 'ZN-1110', stock: 90, itemName: 'Producto 1' },
          { id: 'ZN-1111', stock: 50, itemName: 'Producto 2' },
          { id: 'ZN-1112', stock: 60, itemName: 'Producto 3' },
        ]);
        //rej('NO PAGO');
      }, 2000);
    });

    productos
      .then((result) => {
        setResultado(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);


  return (
    <>
      <div className='container'>
        <div className='row pt-5 pb-2'>
          <div className='col-lg-12 title-saludo'>
            <h3>Hola <span>{nombre}</span>, {msg}</h3>
          </div>
        </div>
        <ItemCount
          stock={5}
          initial={1}
          onAdd={function onAdd(e) {
            alert("El valor del carrito es:" + e);
          }}
        />
        <ItemList
          resultado={resultado}
          loading={loading}
          error={error}
        />
      </div>
    </>
  )
}

export default ItemListContainer