import axios from "axios"

export const instance = axios.create({
  baseURL: `https://moviesapi.ir`,
})

instance.interceptors.response.use(response => response.data)