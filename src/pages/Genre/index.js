import { useGenres } from "../../hooks/useGenres";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Pagination from "../../components/Pagination";
import MovieCards from "../../components/MovieCards";

import "./style.css";

const Genre = () => {
    const {data, isLoading, error, setPage, pageCount, refetch} = useGenres()

    const renderGenre = () => {

        if (isLoading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage refetch={refetch} />
        }

        return data?.map(movie => {
            return (
                <MovieCards
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster}
                    id={movie.id}
                    genres={movie?.genres?.join(', ')}
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