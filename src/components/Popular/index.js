import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import MovieCards from "../MovieCards";

const Popular = ({loading, error, filteredMovies, search}) => {

    const renderMovies = () => {

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage />
        }


        if (!filteredMovies || filteredMovies.length === 0) {
            return <p className="text-center fs-5 fw-semibold m-auto">No results found for "{search}"</p>
        }

        return filteredMovies.map(movie => {
            return (
                <MovieCards
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
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
                    {renderMovies()}
                </div>
            </div>
        </div>
    )
}

export default Popular