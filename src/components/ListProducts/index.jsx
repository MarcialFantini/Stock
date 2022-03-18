import React from 'react'

import CardProduct from '../CardProduct'

import './style.css'



const ListProducts = ({ list, read, agregarProduct, busqueda }) => {

    const listaBusqueda = list.filter(item => item.name.includes(busqueda))

    return (
        <div className='list-products'>
            {
                // renderObjetos(list, read, agregarProduct, busqueda)

                listaBusqueda.map((item) => {

                    return <CardProduct
                        read={read}
                        key={item.id}
                        item={item}
                        agregarProduct={agregarProduct}

                    />


                })
            }
        </div>
    )
}

export default ListProducts