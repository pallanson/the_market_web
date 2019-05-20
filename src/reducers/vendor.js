import { get, post, put, del } from '../request'
import { initialState } from '../constants'

export const getAllVendors = async (state = initialState) => {
    try {
        const { token } = state
        const { data: vendors } = await get(`vendor`, token)
        return {
            ...state,
            vendors
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const getVendor = async (state = initialState, { vendorId }) => {
    try {
        const { token } = state
        const { data: vendor } = await get(`vendor/id/${vendorId}`, token)
        return {
            ...state,
            vendors: [
                ...state.vendors,
                vendor
            ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const getVendorByName = async (state = initialState, { name }) => {
    try {
        const { token } = state
        const { data: vendor } = await get(`vendor/name/${name}`, token)
        return {
            ...state,
            vendors: [
                ...state.vendors,
                vendor
            ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const getStore = async (state = initialState, { vendorId }) => {
    try {
        const { token } = state
        const { data } = await get(`vendor/${vendorId}/store`, token)
        return {
            ...state,
            currentStore: [ ...data.items ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const createVendor = async (state = initialState, { name }) => {
    try {
        const { token } = state
        const { data } = await post(`vendor`, { name }, token)
        return {
            ...state,
            vendors: [
                ...state.vendors,
                data.vendor
            ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const updateVendor = async (state = initialState, { vendorId, name }) => {
    try {
        const { token } = state
        const { data } = await put(`vendor`, { name }, token)
        return {
            ...state,
            vendors: [
                ...state.vendors,
                data
            ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}