
export const product = (item) => {
    return (
        <div className="list-product" key={item.id} >
            <picture>
                <img src={item.src} />
            </picture>
            <div className="titles-product">
                <h3>{item.name}</h3>
                <p>Precio:{item.precio}</p>
            </div>
        </div>
    )
}


export const list = [
    {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh2GYP3KlGu2LZpf9m8N0c_zb_Crp8iWYYA&usqp=CAU",
        name: 'producto',
        precio: 200

    },
    {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh2GYP3KlGu2LZpf9m8N0c_zb_Crp8iWYYA&usqp=CAU",
        name: 'producto',
        precio: 200

    },
    {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh2GYP3KlGu2LZpf9m8N0c_zb_Crp8iWYYA&usqp=CAU",
        name: 'producto',
        precio: 200

    },
    {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh2GYP3KlGu2LZpf9m8N0c_zb_Crp8iWYYA&usqp=CAU",
        name: 'producto',
        precio: 200

    },
    {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh2GYP3KlGu2LZpf9m8N0c_zb_Crp8iWYYA&usqp=CAU",
        name: 'producto',
        precio: 200

    },
]