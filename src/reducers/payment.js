import { get, post, put, del } from '../request'
import { initialState } from '../constants'

export const addPaymentOption = async (state = initialState, 
{nameOnCard, cardNumber, expiryDate}) => {
    try {
        const { data } = await post(`payment`, {nameOnCard, cardNumber, expiryDate})
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
        const { data } = await get(`payment`)
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
        const { data } = await get(`payment/${paymentId}`)
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
        await put(`payment/${paymentId}`, {nameOnCard, cardNumber, expiryDate})
        const { data } = await get(`payment`)
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
        await del(`payment/${paymentId}`)
        const { data } = await get(`payment`)
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