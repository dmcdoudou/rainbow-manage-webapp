import fetch from './fetch'

export const list = params => fetch.get('/v1/student', { params })