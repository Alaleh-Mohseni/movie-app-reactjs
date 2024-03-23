import { FaStar } from "react-icons/fa";

const MovieItem = ({
    poster,
    title,
    year,
    released,
    genres,
    runtime,
    country,
    plot,
    director,
    actors,
    rated,
    rating,
    writer,
    images
}) => {

    return (
        <div className="col-md-12 col-lg-12 py-5 h-100">
            <div className="row g-0 border border-light rounded-3 overflow-hidden flex-md-row shadow">
                <div className="col-auto">
                    <img
                        className="img-fluid"
                        src={poster}
                        alt="movie poster"
                    />
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                    <div className="">
                        <h1 className="pb-3 pt-4">{title} ({year})</h1>
                        <span className="fs-5">
                            <FaStar className="text-warning pe-1" size='24' />
                            ({rating}/10)
                        </span>
                        <p className="pt-2">
                            {released} ({country})
                            <span className="fw-bold fs-3"> . </span>
                            {rated}
                            <span className="fw-bold fs-3"> . </span>
                            {genres}
                            <span className="fw-bold fs-3"> . </span>
                            {runtime}
                        </p>
                    </div>
                    <div className='content'>
                        <div className="pt-3">
                            <p className="fw-semibold fs-4">Overview</p>
                            <p>{plot}</p>
                        </div>
                        <div className="pt-2">
                            <span className="fw-semibold fs-5">Director: </span>
                            <span>{director}</span>
                        </div>
                        <div className="pt-2">
                            <span className="fw-semibold fs-5">Writer: </span>
                            <span>{writer}</span>
                        </div>
                        <div className="pt-3">
                            <span className="fw-semibold fs-5">The Cast: </span>
                            <span>{actors}</span>
                        </div>
                    </div>
                    <div className="d-flex row h-100 w-100 mt-5">
                        {images && images?.map((item, index) => (
                            <div key={index} style={{ width: '33%' }}>
                                <img
                                    className="img-fluid h-auto rounded-3 border"
                                    src={item}
                                    alt="movie poster"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieItem