import { get, post } from '../request'
import { initialState } from '../constants'
import auth from '../utils/auth';

export const login = async (state = initialState, { email, password }) => {
    try {
        const res = await post(`user/login`, {
            email,
            password
        })
        const { token, userId } = res.data
        auth.setToken(token, true)
        const userRes = await get(`user/${userId}`)
        const { data: currentUser } = userRes
        auth.setUserInfo(currentUser)
        return {
            ...state,
            currentUser,
            email,
            password,
            loggedIn: true,
            token
        }
    } catch(error) {
        return {
            ...state,
            error,
            email,
            password
        }
    }
}

export const logout = (state = initialState) => {
    auth.clearAppStorage()
    auth.clearToken()
    auth.clearUserInfo()
    return {
        ...state,
        loggedIn: false,
        password: null,
        currentToken: null
    }
}

export const register = async (state = initialState, { email, firstName, lastName, password }) => {
    try {
        const registerRes = await post(`user/`, {
            email,
            firstName,
            lastName,
            password
        })
        const { data: currentUser } = registerRes
        const res = await post(`user/login`, {
            email,
            password
        })
        const { token } = res.data
        return {
            ...state,
            token,
            email,
            password,
            currentUser
        }
    } catch (error) {
        return {
            ...state,
            error
        }
    }
}

export const fetchUser = async (state = initialState, { userId }) => {
    try {
        const res = await get(`user/${userId}`)
        const { data } = res
        return {
            ...state,
            users: {
                ...state.users,
                [userId]: data
            }
        }
    } catch (error) {
        return {
            ...state,
            error
        }
    }
}