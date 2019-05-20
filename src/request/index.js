import axios from 'axios'
import { API_HOSTNAME } from '../constants'

export const get = (endpoint, token) =>
    axios.get(`${API_HOSTNAME}${endpoint}/`, token && { headers: { 'Authorization': `Bearer ${ token }` } })

export const post = (endpoint, body = {}, token) =>
    axios.post(`${API_HOSTNAME}${endpoint}/`, body, token && { headers: { 'Authorization': `Bearer ${ token }` } })