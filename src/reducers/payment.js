import { get, post, put, del } from '../request'
import { initialState } from '../constants'

export const addPaymentOption = async (state = initialState, 
{nameOnCard, cardNumber, expiryDate}) => {
    try {
        const { token } = state
        const { data } = await post(`payment`, {nameOnCard, cardNumber, expiryDate}, token)
        return {
            ...state,
            paymentMethods: [
                ...state.paymentMethods,
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
export const getPaymentOptions = async (state = initialState) => {
    try {
        const { token } = state
        const { data } = await get(`payment`, token)
        return {
            ...state,
            paymentMethods: [ ...data ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const getPaymentOption = async (state = initialState, 
{paymentId}) => {
    try {
        const { token } = state
        const { data } = await get(`payment/${paymentId}`, token)
        return {
            ...state,
            paymentMethods: [ ...state.paymentMethods, data ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const editPaymentOption = async (state = initialState, 
{paymentId, nameOnCard, cardNumber, expiryDate}) => {
    try {
        const { token } = state
        await put(`payment/${paymentId}`, {nameOnCard, cardNumber, expiryDate}, token)
        const { data } = await get(`payment`, token)
        return {
            ...state,
            paymentMethods: [ ...data ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const deletePaymentOption = async (state = initialState,
{paymentId}) => {
    try {
        const { token } = state
        await del(`payment/${paymentId}`, token)
        const { data } = await get(`payment`, token)
        return {
            ...state,
            paymentMethods: [ ...data ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}