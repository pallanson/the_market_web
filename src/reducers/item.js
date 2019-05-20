import { get, put, post, del } from '../request'
import { initialState } from '../constants'

export const getAllItems = async (state = initialState) => {
    try {
        const { token } = state
        const { data: items } = get(`item`, token)
        return {
            ...state,
            items
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const getItem = async (state = initialState, {itemId}) => {
    try {
        const { token } = state
        const { data: item } = get(`item/${itemId}`, token)
        return {
            ...state,
            currentItem: item
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const getItemByName = async (state = initialState, {name}) => {
    try {
        const { token } = state
        const { data: item } = get(`item/name/${name}`, token)
        return {
            ...state,
            currentItem: item
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const createItem = async (state = initialState, {name, price, description, category, vendorId}) => {
    try {
        const { token } = state
        await post(`item`, {name, price, description, category}, token)
        const { data: items } = get(`item`, token)
        return {
            ...state,
            items
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const updateItem = async (state = initialState, {itemId, name, price, description, category}) => {
    try {
        const { token } = state
        await put(`item/${itemId}`, {name, price, description, category}, token)
        const { data: items } = get(`item`, token)
        return {
            ...state,
            items
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const deleteItem = async (state = initialState, {itemId}) => {
    try {
        const { token } = state
        await del(`item/${itemId}`)
        const { data: items } = get(`item`, token)
        return {
            ...state,
            items
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}