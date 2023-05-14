import { BrowserRouter } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { stateContext } from "../../contexts"
import { enhancedFetch } from "../../services/Http";
import { debounce } from "lodash";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from "../Header";
import Footer from "../Footer"
import ModalLogin from "../ModalLogin"
import ModalRegister from "../ModalRegister";
import AllRoutes from "../../config";

const BASE_API_URL = `https://moviesapi.ir`;

const App = () => {

  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageCount] = useState(25)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [logged, setLogged] = useState(false)


  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true)
      const response = await enhancedFetch(BASE_API_URL + `/api/v1/movies?q=${search}&page=${page}`)
      setMovies(response.data)

    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }

  }, [search, page])


  const fetchGenre = useCallback(async () => {
    try {
      setLoading(true)
      const response = await enhancedFetch(BASE_API_URL + `/api/v1/genres`)
      setGenres(response)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])


  useEffect(() => {
    fetchMovie()
    fetchGenre()
  }, [fetchMovie, fetchGenre])


  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const debouncedOnChange = debounce(handleChange, 300);

  const filteredMovies = movies.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  const handleModalLogin = () => {
    setLogin(true)
  }

  const handleModalRegister = () => {
    setRegister(true)
  }

  const handleModalClose = () => {
    setLogin(false)
    setRegister(false)
  }

  return (
    <BrowserRouter>
      <div>
        <stateContext.Provider
          value={{
            genres,
            setGenres,
            error,
            loading,
            login,
            setLogin,
            register,
            logged,
            setLogged,
            search,
            setSearch,
            setPage,
            pageCount,
            filteredMovies,
            debouncedOnChange,
            handleModalLogin,
            handleModalRegister,
            handleModalClose
          }}
        >
          <ModalLogin />
          <ModalRegister />
          <Header />
          <AllRoutes />
          <Footer />
        </stateContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
