import axios from "axios"

export const enhancedFetch = async (url) => {
  try {
    const response = await axios.get(url)
    const result = await response.data
    return result
  } catch (error) {
    console.log('Error', error);
  }
}

// const axiosClient = axios.create({
//   baseURL: `https://moviesapi.ir`,
//   headers: {
//     "Content-Type" : "application/json",
//   }
// })

// axiosClient.interceptors.response.use(response => response.data)

// export default axiosClient