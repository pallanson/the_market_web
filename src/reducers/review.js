import { get, post, put, del } from '../request'
import { initialState } from '../constants'

export const getReviews = async (state = initialState, {itemId}) => {
    try {
        const { token } = state
        const { data: reviews } = get(`item/${itemId}/reviews`, token)
        return {
            ...state,
            items: {
                ...state.items,
                [itemId]: {
                    ...state.items[itemId],
                    reviews
                }
            },
            currentReviews: [...reviews]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const postReview = async (state = initialState, 
{itemId, title, text, rating}) => {
    try {
        const { token } = state
        await post(`item/${itemId}/review`, { title, text, rating }, token)
        const { data: reviews } = get(`item/${itemId}/reviews`, token)
        return {
            ...state,
            items: {
                ...state.items,
                [itemId]: {
                    ...state.items[itemId],
                    reviews
                }
            },
            currentReviews: [...reviews]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const editReview = async (state = initialState, {itemId, title, text, rating}) => {
    try {
        const { token } = state
        await put(`item/${itemId}/review`, { title, text, rating }, token)
        const { data: reviews } = get(`item/${itemId}/reviews`, token)
        return {
            ...state,
            items: {
                ...state.items,
                [itemId]: {
                    ...state.items[itemId],
                    reviews
                }
            },
            currentReviews: [...reviews]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const removeReview = async (state = initialState, {itemId}) => {
    try {
        const { token } = state
        await del(`item/${itemId}/review`, token)
        const { data: reviews } = get(`item/${itemId}/reviews`, token)
        return {
            ...state,
            items: {
                ...state.items,
                [itemId]: {
                    ...state.items[itemId],
                    reviews
                }
            },
            currentReviews: [...reviews]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
export const updateRating = async (state = initialState, {itemId, rating}) => {
    try {
        const { token } = state
        return {
            ...state
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}