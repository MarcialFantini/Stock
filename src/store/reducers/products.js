import { ADD_PRODUCT, DELETE_PRODUCT, MODIFICATE_PRODUCT } from "../actionsTypes";

const products = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]

        case DELETE_PRODUCT:
            const filterState = state.filter(item => (item.id !== action.payload))
            return filterState;
        case MODIFICATE_PRODUCT:

            const indexTheProductToModificate = state.findIndex(item => {
                return (item.id === Number(action.payload[1]))
            })

            const newState = state.map(item => {
                if (indexTheProductToModificate === item.id) {
                    return action.payload[0]
                } else {
                    return item
                }
            })

            // const modificateState = state.splice(indexTheProductToModificate,
            //     1, action.payload[0])

            return newState;
        default:

            return [...state]
    }
}

export default products