import { ADD_PRODUCT, DELETE_PRODUCT, MODIFICATE_PRODUCT } from "../actionsTypes";

const products = (state = [], action) => {
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