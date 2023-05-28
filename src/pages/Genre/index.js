import { useState, useEffect, useCallback, useContext } from "react";
import { searchContext } from "../../contexts/search-provider";
import { useParams } from "react-router-dom";
import { httpClient } from "../../services/Http";
import { GENRES } from "../../config/api-endpoints";

import "./style.css";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Pagination from "../../components/Pagination";
import MoviesCard from "../../components/MovieCards";

const Genre = () => {

    const {search} = useContext(searchContext)

    const [genre, setGenre] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { id } = useParams()


    const fetchGenre = useCallback(async () => {
        try {
            setLoading(true)
            const response = await httpClient.get(`${GENRES}/${id}/movies?page=${page}`)
            console.log('response', response.data)
            setGenre(response.data.data)
            setPageCount(response.data.metadata.page_count)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [id, page])


    useEffect(() => {
        fetchGenre()
    }, [fetchGenre])
    

    const filteredGenre = genre.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )


    const renderGenre = () => {

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage />
        }

        if (!filteredGenre || filteredGenre.length === 0) {
            return <p className="text-center fs-5 fw-semibold m-auto">No results found for "{search}"</p>
        }

        return filteredGenre.map(movie => {
            return (
                <MoviesCard
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster}
                    id={movie.id}
                    genres={movie.genres.join(', ')}
                    year={movie.year}
                    rating={movie.imdb_rating}
                />
            );
        })

    }


    return (
        <div className="container">
            <div className="album py-5 bg-body-tertiary genre__page">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
                        {renderGenre()}
                    </div>
                </div>
            </div>
            <Pagination
                setPage={setPage}
                pageCount={pageCount}
            />
        </div>
    )
}

export default Genre