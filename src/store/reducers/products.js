import { ADD_PRODUCT, DELETE_PRODUCT, MODIFICATE_PRODUCT } from "../actionsTypes";

const initialState = () => {
    const store = localStorage.getItem("store")
    const parseStore = JSON.parse(store)
    console.log(parseStore.products)
    const returneable = parseStore.products || []
    return returneable
}



const products = (state = initialState(), action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]

        case DELETE_PRODUCT:
            const filterState = state.filter(item => {
                console.log(String(item.id))
                console.log(String(action.payload))
                return (String(item.id) !== String(action.payload))
            })


            return filterState;
        case MODIFICATE_PRODUCT:


            const newState = state.map(item => {
                if (String(item.id) === String(action.payload[1])) {
                    return action.payload[0]
                } else {
                    return item
                }
            })

            return newState;
        default:

            return [...state]
    }
}

export default products