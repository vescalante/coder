import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import "./itemlistcontainer.css";

function ItemListContainer({ msg, nombre }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  const {categoryId} = useParams();

  let productosFiltrados = resultado.filter(p => p.category == categoryId)
  
  if(categoryId===undefined){
    productosFiltrados = resultado;
  }

  useEffect(() => {
    const productos = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 'ZN-1110', stock: 10, itemName: 'Producto 1', category: 'musica' },
          { id: 'ZN-1111', stock: 30, itemName: 'Producto 2', category: 'videojuegos' },
          { id: 'ZN-1112', stock: 11, itemName: 'Producto 3', category: 'musica' },
          { id: 'ZN-1113', stock: 21, itemName: 'Producto 4', category: 'videojuegos' },
          { id: 'ZN-1114', stock: 43, itemName: 'Producto 5', category: 'ropa' },
          { id: 'ZN-1115', stock: 65, itemName: 'Producto 6', category: 'videojuegos' },
          { id: 'ZN-1116', stock: 76, itemName: 'Producto 7', category: 'ropa' },
          { id: 'ZN-1117', stock: 65, itemName: 'Producto 8', category: 'musica' },
          { id: 'ZN-1118', stock: 34, itemName: 'Producto 9', category: 'videojuegos' },
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
  }, [categoryId]);

  return (
    <>
      <div className='container'>
        <div className='row pt-5 pb-2'>
          <div className='col-lg-12 title-saludo'>
            <h3>Hola <span>{nombre}</span>, {msg} {categoryId}</h3>
          </div>
        </div>
        <ItemList
          resultado={productosFiltrados}
          loading={loading}
          error={error}
        />
      </div>
    </>
  )
}

export default ItemListContainer