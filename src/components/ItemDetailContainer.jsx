import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const productoFiltrado = item.filter(p => p.id == id)

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    {
                        id: 'ZN-1110',
                        stock: 90,
                        itemName: 'Producto 1',
                        itemCategory: 'Musica',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$76.999',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                    {
                        id: 'ZN-1111',
                        stock: 90,
                        itemName: 'Producto 2',
                        itemCategory: 'Videojuegos',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$43.112',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                    {
                        id: 'ZN-1112',
                        stock: 90,
                        itemName: 'Producto 3',
                        itemCategory: 'Musica',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$12.22',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                    {
                        id: 'ZN-1113',
                        stock: 90,
                        itemName: 'Producto 4',
                        itemCategory: 'Videojuegos',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$199.00',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                    {
                        id: 'ZN-1114',
                        stock: 90,
                        itemName: 'Producto 5',
                        itemCategory: 'Ropa',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$89.332',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                    {
                        id: 'ZN-1115',
                        stock: 90,
                        itemName: 'Producto 6',
                        itemCategory: 'Videojuegos',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$12.122',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                    {
                        id: 'ZN-1116',
                        stock: 90,
                        itemName: 'Producto 7',
                        itemCategory: 'Ropa',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$54.43',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                    {
                        id: 'ZN-1117',
                        stock: 90,
                        itemName: 'Producto 8',
                        itemCategory: 'Musica',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$211.12',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                    {
                        id: 'ZN-1118',
                        stock: 90,
                        itemName: 'Producto 9',
                        itemCategory: 'Videojuegos',
                        itemDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida consequat scelerisque. Morbi aliquet consequat purus at bibendum. Nullam tristique faucibus interdum. Curabitur odio lectus, fermentum nec mi at, aliquam aliquam dui. Morbi vel felis eget tellus dignissim eleifend at ac eros. Suspendisse potenti. Maecenas porta dignissim felis, non tempor justo aliquet eget.',
                        itemPrice: '$67.233',
                        itemColors: ['Rosa', 'Azul', 'Negro', 'Blanco'],
                        itemImage: 'https://dummyimage.com/600x400/222222/ffffff'
                    },
                ]);
                //rej('NO ENCONTRADO');
            }, 2000);
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
                    item={productoFiltrado}
                    loading={loading}
                    error={error}
                />
            </div>
        </>
    )
}

export default ItemDetailContainer