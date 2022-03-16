import React from 'react'

const ButtonAgregar = ({ item }) => {
  return (
    <div className='btn-container' >
      <button
        className='btn agregar'
        value={item.id}
      >
        Agregar
      </button>

    </div>
  )
}

export default ButtonAgregar