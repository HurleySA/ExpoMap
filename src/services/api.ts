import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://expo-map-api.onrender.com/api'
})