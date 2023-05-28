import { createContext,useState, useEffect, useCallback, useMemo } from "react";
import { httpClient } from "../services/Http"
import { MOVIES } from "../config/api-endpoints";
import { debounce } from "lodash";

export const searchContext = createContext();

const SearchProvider = ({children}) => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)


    const fetchMovie = useCallback(async () => {
        try {
            const response = await httpClient.get(`${MOVIES}?q=${search}&page=${page}`)
            setMovies(response.data.data)
        } catch (err) {
            console.log(err)
        }

    }, [search, page])

    console.log('movie', movies)

    useEffect(() => {
        fetchMovie()
    }, [fetchMovie])


    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const debouncedOnChange = useMemo(() => debounce(handleChange, 300), []);

    return (
        <searchContext.Provider value={{search, setSearch, setPage, debouncedOnChange}}>
            {children}
        </searchContext.Provider>
    );
}

export default SearchProvider