import { get, post, put, del } from '../request'
import { initialState } from '../constants'

export const getReviews = async (state = initialState, {itemId}) => {
    try {
        const { data: reviews } = get(`item/${itemId}/reviews`)
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
        await post(`item/${itemId}/review`, { title, text, rating })
        const { data: reviews } = get(`item/${itemId}/reviews`)
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
        await put(`item/${itemId}/review`, { title, text, rating })
        const { data: reviews } = get(`item/${itemId}/reviews`)
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
        await del(`item/${itemId}/review`)
        const { data: reviews } = get(`item/${itemId}/reviews`)
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