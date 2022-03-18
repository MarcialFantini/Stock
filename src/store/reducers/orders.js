import { ADD_ORDER, DELETE_ORDER, MODIFICATE_ORDER } from "../actionsTypes";



const orders = (state = [], action) => {
    switch (action.type) {
        case ADD_ORDER:
            return [...state, action.payload]

        case DELETE_ORDER:
            const filterState = state.filter(item => (item.id !== action.payload))
            return filterState;
        case MODIFICATE_ORDER:

            const modificateState = state.map(item => {
                if (item.id === action.payload[1]) {
                    return action.payload[0]
                } else {
                    return item
                }
            })

            // const modificateState = state.splice(action.payload.id,
            //  1, action.payload.order)
            return modificateState;
        default:
            return [...state]
    }
}

export default orders