import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState([]);
    const {id} = useParams();

    const coleccion = 'items';
    const db = getFirestore();
    const docProducto = doc(db, coleccion, id);

    useEffect(() => {
        getDoc(docProducto)
            .then((res)=>{
                if (res.exists()) {
                    setItem([{...res.data(), id: res.id}]);  
                }else{
                    console.log("Sin resultados"); 
                }
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
                <ItemDetail
                    item={item}
                    loading={loading}
                    error={error}
                />
            </div>
        </>
    )
}

export default ItemDetailContainer