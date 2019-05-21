import axios from 'axios'
import { API_HOSTNAME } from '../constants'
import auth from '../utils/auth';

export const get = (endpoint, token = auth.getToken()) => 
    axios.get(`${API_HOSTNAME}${endpoint}/`, token && { headers: { 'Authorization': `Bearer ${ token }` } })

export const del = (endpoint, token = auth.getToken()) =>
    axios.delete(`${API_HOSTNAME}${endpoint}/`, token && { headers: { 'Authorization': `Bearer ${ token }` } })

export const post = (endpoint, body = {}, token = auth.getToken()) =>
    axios.post(`${API_HOSTNAME}${endpoint}/`, body, token && { headers: { 'Authorization': `Bearer ${ token }` } })

export const put = (endpoint, body = {}, token = auth.getToken()) =>
    axios.put(`${API_HOSTNAME}${endpoint}/`, body, token && { headers: { 'Authorization': `Bearer ${ token }` } })