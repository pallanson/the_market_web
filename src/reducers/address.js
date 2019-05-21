import { get, post, put, del } from '../request'
import { initialState } from '../constants'

export const getAddresses = async (state = initialState) => {
    try {
        const { currentUser } = state
        const { data } = await get(`address/user/${currentUser.userId}`)
        return {
            ...state,
            addresses: [ ...data ]
        }
    } catch(error) {
        return {
            ...state,
            error
        }
    }
}
export const addAddress = async (state = initialState, {
    name,
    addressLineOne,
    addressLineTwo,
    city,
    country,
    postcode
}) => {
    try {
        const { data } = await post(`address/add`, {
            name,
            addressLineOne,
            addressLineTwo,
            city,
            country,
            postcode
        })
        return {
            ...state,
            addresses: [
                ...state.addresses,
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
export const removeAddress = async (state = initialState, { addressId }) => {
    try {
        const { currentUser } = state
        await del(`address/user/${addressId}`)
        const { data } = await get(`address/user/${currentUser.userId}`)
        return {
            ...state,
            addresses: [ ...data ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const editAddress = async (state = initialState, {
    addressId,
    name,
    addressLineOne,
    addressLineTwo,
    city,
    country,
    postcode
}) => {
    try {
        const { currentUser } = state
        await put(`address/${addressId}`, {
            name,
            addressLineOne,
            addressLineTwo,
            city,
            country,
            postcode
        })
        const { data } = await get(`address/user/${currentUser.userId}`)
        return {
            ...state,
            addresses: [ ...data ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}