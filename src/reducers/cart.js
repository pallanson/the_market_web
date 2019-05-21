import { get, post, put } from '../request'
import { initialState } from '../constants'

export const getCart = async (state = initialState) => {
    try {
        const { token } = state
        const { data } = await get(`cart`, token)
        return {
            ...state,
            cart: [ ...data.items ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const addToCart = async (state = initialState, {itemId}) => {
    try {
        const { token } = state
        await put(`cart/add`, { itemId }, token)
        const { data } = await get(`cart`, token)
        return {
            ...state,
            cart: [ ...data.items ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const removeFromCart = async (state = initialState, {itemId}) => {
    try {
        const { token } = state
        await put(`cart/remove`, { itemId }, token)
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const checkout = async (state = initialState, {addressId}) => {
    try {
        const { token } = state
        const { data: order } = await post(`cart/checkout`, { addressId }, token)
        return {
            ...state,
            order
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}