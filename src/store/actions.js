import { ADD_ORDER, ADD_PRODUCT, DELETE_ORDER, DELETE_PRODUCT, MODIFICATE_ORDER, MODIFICATE_PRODUCT } from "./actionsTypes"

export function addProduct(payload) {
    return {
        type: ADD_PRODUCT,
        payload
    }
}

export function deleteProduct(payload) {
    return {
        type: DELETE_PRODUCT,
        payload
    }
}

export function modificateProduct(payload) {
    return {
        type: MODIFICATE_PRODUCT,
        payload
    }
}


export function addOrder(payload) {
    return {
        type: ADD_ORDER,
        payload
    }
}

export function deleteOrder(payload) {
    return {
        type: DELETE_ORDER,
        payload
    }
}

export function modificateOrder(payload) {
    return {
        type: MODIFICATE_ORDER,
        payload
    }
}