import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    {
                        id: 'ZN-1110',
                        stock: 90,
                        itemName: 'Producto 1',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$76.999',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                ]);
                //rej('NO ENCONTRADO');
            }, 4000);
        });

        getItem
            .then((result) => {
                setItem(result);
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