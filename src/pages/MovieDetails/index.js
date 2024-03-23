import { useMovieDetail } from "../../hooks/useMovieDetail";

import MovieItem from "../../components/MovieItem";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";


const MovieDetails = () => {
    const { data, isLoading, error, refetch } = useMovieDetail()

    const renderDetails = () => {

        if (isLoading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage refetch={refetch}/>
        }

        return (
            <MovieItem
                key={data?.id}
                title={data?.title}
                poster={data?.poster}
                year={data?.year}
                released={data?.released}
                runtime={data?.runtime}
                genres={data?.genres?.join(', ')}
                country={data?.country}
                plot={data?.plot}
                director={data?.director}
                actors={data?.actors}
                rated={data?.rated}
                rating={data?.imdb_rating}
                writer={data?.writer}
                images={data?.images}
            />
        )

    }


    return (
        <div className="min-vh-100">
            <div className="container">
                <div className="row">
                    {renderDetails()}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails