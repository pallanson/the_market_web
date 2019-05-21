import { get, put, post, del } from '../request'
import { initialState } from '../constants'

export const getAllItems = async (state = initialState) => {
    try {
        const { data: items } = get(`item`)
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
        const { data: item } = get(`item/${itemId}`)
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
        const { data: item } = get(`item/name/${name}`)
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
        await post(`item`, {name, price, description, category})
        const { data: items } = get(`item`)
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
        await put(`item/${itemId}`, {name, price, description, category})
        const { data: items } = get(`item`)
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
        await del(`item/${itemId}`)
        const { data: items } = get(`item`)
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