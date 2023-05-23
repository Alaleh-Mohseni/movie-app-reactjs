import { useState, useEffect, useCallback, useMemo } from "react";
import { stateContext } from "./contexts";
import { httpClient } from "../services/Http"
import { MOVIES, GENRES } from "../config/api-endpoints";
import { debounce } from "lodash";


const DataProvider = (props) => {

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
            const response = await httpClient.get(`${MOVIES}?q=${search}&page=${page}`)
            setMovies(response.data.data)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }

    }, [search, page])


    const fetchGenre = useCallback(async () => {
        try {
            setLoading(true)
            const response = await httpClient.get(GENRES)
            setGenres(response.data)
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

    const debouncedOnChange = useMemo(() => debounce(handleChange, 300), []);

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
            {props.children}
        </stateContext.Provider>
    );
}

export default DataProvider