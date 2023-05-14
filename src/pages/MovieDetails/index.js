import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { enhancedFetch } from "../../services/Http";

import MovieItem from "../../components/MovieItem";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";


const BASE_API_URL = `https://moviesapi.ir`;


const MovieDetails = () => {

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { id } = useParams()

    useEffect(() => {

        const fetchMovie = async () => {
            try {
                setLoading(true)
                const response = await enhancedFetch(BASE_API_URL + `/api/v1/movies/${id}`)
                setMovie(response)
            } catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchMovie()

    }, [id])


    const renderDetails = () => {

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage />
        }

        return (
            <MovieItem
                key={movie.id}
                title={movie.title}
                poster={movie.poster}
                year={movie.year}
                released={movie.released}
                runtime={movie.runtime}
                genres={movie.genres.join(', ')}
                country={movie.country}
                plot={movie.plot}
                director={movie.director}
                actors={movie.actors}
                rated={movie.rated}
                rating={movie.imdb_rating}
            />
        )

    }


    return (
        <div className="">
            <div className="container">
                <div className="row">
                    {renderDetails()}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails