import { get, post, put } from '../request'
import { initialState } from '../constants'

export const getCart = async (state = initialState) => {
    try {
        const { data } = await get(`cart`)
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
        await put(`cart/add`, { itemId })
        const { data } = await get(`cart`)
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
        await put(`cart/remove`, { itemId })
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const checkout = async (state = initialState, {addressId}) => {
    try {
        const { data: order } = await post(`cart/checkout`, { addressId })
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