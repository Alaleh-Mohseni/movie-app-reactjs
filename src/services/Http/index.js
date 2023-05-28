import axios from "axios"

export const httpClient = axios.create({
  baseURL: `https://moviesapi.ir`,
})
