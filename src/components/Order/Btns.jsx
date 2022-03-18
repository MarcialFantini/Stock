import React from 'react'

const Btns = ({ read, handleSetId, item, handleDelete }) => {

    const returnButtons = (read) => {
        if (read) {
            return (
                <>
                    <button
                        value={item.id}
                        onClick={handleSetId}
                    >Editar</button>
                    <button
                        value={item.id}
                        onClick={handleDelete}
                    >Eliminar</button>
                </>
            )
        } else {
            <>
                <button>
                    Agregar
                </button>
            </>
        }
    }

    return (
        <>
            {returnButtons(read)}
        </>
    )
}

export default Btns