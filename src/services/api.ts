import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dot-money.vercel.app/api'
})
