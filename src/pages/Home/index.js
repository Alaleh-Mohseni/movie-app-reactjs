import { useMovies } from "../../hooks/useMovies";

import Carousel from "../../components/Carousel";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MovieCards from "../../components/MovieCards";


const Home = () => {
    const { data, isLoading, error, setPage, pageCount, refetch } = useMovies()

    const renderMovies = () => {

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
        <main>
            <Carousel />
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3">
                        {renderMovies()}
                    </div>
                </div>
            </div>
            <Pagination
                setPage={setPage}
                pageCount={pageCount}
            />
        </main>
    )
}

export default Home