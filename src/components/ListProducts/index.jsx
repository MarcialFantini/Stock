import React, { useEffect, useState } from 'react'

import CardProduct from '../CardProduct'

import './style.css'



const ListProducts = ({ list, read, agregarProduct, busqueda }) => {

    const [renderizado, setRenderizado] = useState([])

    useEffect(() => {
        const listaBusqueda = list.filter(item => item.name.includes(busqueda))
        listaBusqueda.length = 10
        setRenderizado(listaBusqueda.map((item) => {

            return <CardProduct
                read={read}
                key={item.id}
                item={item}
                agregarProduct={agregarProduct}
            />
        }))
    }, [busqueda, agregarProduct, read, list])

    return (
        <div className='list-products'>
            {
                // renderObjetos(list, read, agregarProduct, busqueda)
                renderizado ? renderizado : null

            }
        </div>
    )
}

export default ListProducts