import { useState, useEffect, useCallback, useContext } from "react";
import { searchContext } from "../../contexts/search-provider";
import { httpClient } from "../../services/Http"
import { MOVIES } from "../../config/api-endpoints";

import Carousel from "../../components/Carousel";
import Popular from "../../components/Popular";
import Pagination from "../../components/Pagination";


const Home = () => {
    const { search } = useContext(searchContext)
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(25)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const fetchMovie = useCallback(async () => {
        try {
            setLoading(true)
            const response = await httpClient.get(`${MOVIES}?q=${search}&page=${page}`)
            setMovies(response.data.data)
            setPageCount(25)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }

    }, [search, page])

    useEffect(() => {
        fetchMovie()
    }, [fetchMovie])

    const filteredMovies = movies.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <main>
            <Carousel />
            <Popular
                filteredMovies={filteredMovies}
                search={search}
                loading={loading}
                error={error}
            />
            <Pagination
                setPage={setPage}
                pageCount={pageCount}
            />
        </main>
    )
}

export default Home