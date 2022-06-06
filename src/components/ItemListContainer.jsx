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
          { id: 'ZN-1113', stock: 70, itemName: 'Producto 4' },
          { id: 'ZN-1114', stock: 180, itemName: 'Producto 5' },
          { id: 'ZN-1115', stock: 30, itemName: 'Producto 6' },
          { id: 'ZN-1116', stock: 30, itemName: 'Producto 7' },
          { id: 'ZN-1117', stock: 10, itemName: 'Producto 8' },
          { id: 'ZN-1118', stock: 210, itemName: 'Producto 9' },
          { id: 'ZN-1119', stock: 760, itemName: 'Producto 10' },
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