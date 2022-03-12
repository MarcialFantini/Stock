import { ADD_PRODUCT, DELETE_PRODUCT, MODIFICATE_PRODUCT } from "../actionsTypes";

const products = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]

        case DELETE_PRODUCT:
            const filterState = state.filter(item => (item.id !== action.payload))
            return filterState;
        case MODIFICATE_PRODUCT:
            const modificateState = state.splice(action.payload.id, 1, action.payload.product)
            return modificateState;
        default:
            return [...state]
    }
}

export default products