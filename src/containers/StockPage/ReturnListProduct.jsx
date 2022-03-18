import React, { useEffect, useState } from 'react';
import CardProduct from '../../components/CardProduct';




const ReturnListProduct = (props) => {
    const { listProducts,
        eliminarProduct,
        activarModificador,
        id,
        busqueda
    } = props
    const [listaProduct, setListaProduct] = useState([])

    useEffect(() => {
        const listaDeProductos = listProducts.map(item => {
            return item.name.includes(busqueda) ? <CardProduct
                key={item.id}
                read={true}
                item={item}
                eliminarProduct={eliminarProduct}
                idModificar={id}
                activarModificador={activarModificador}
            /> : null
        })

        setListaProduct(listaDeProductos)
    }, [busqueda, eliminarProduct, activarModificador, id, listProducts])


    return (
        <div className='container-products'>
            {listaProduct}
        </div>
    )
}


export default ReturnListProduct