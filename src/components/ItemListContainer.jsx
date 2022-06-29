import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import "./itemlistcontainer.css";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemListContainer({ msg, nombre }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let {categoryId} = useParams();
  const [productos, setProductos] = useState([]);
  const coleccion = 'items';
  const db = getFirestore();
  let coleccionDeProductos = collection(db, coleccion);

  if (categoryId != undefined) {
    coleccionDeProductos = query(
      collection(db, coleccion),
      where("itemCategory", "==", categoryId)
    );
  }

  useEffect(() => {
    getDocs(coleccionDeProductos)
      .then((res)=>{
        if (res.size === 0) {
          console.log("Sin resultados"); 
        }else{
          setProductos(res.docs.map(doc=>({id:doc.id, ...doc.data() })));  
        }
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
            <h3><span>Bienvenido</span>, {msg} {categoryId}</h3>
          </div>
        </div>
        <ItemList
          resultado={productos}
          loading={loading}
          error={error}
        />
      </div>
    </>
  )
}

export default ItemListContainer