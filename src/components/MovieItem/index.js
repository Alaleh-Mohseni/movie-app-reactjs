const MovieItem = ({ poster, title, year, released, genres, runtime, country, plot, director, actors, rated, rating }) => {

    return (
        <div className="col-md-12 col-lg-12 py-5">
            <div className="row g-0 border border-light rounded-2 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                <div className="col-auto d-none d-lg-block">
                    <img
                        className="img-fluid"
                        src={poster}
                        alt="movie poster"
                    />
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                    <div className="blog-post">
                        <h1 className="blog-post-title pb-3 pt-4">{title} ({year})</h1>
                        <span className="fs-5"><i className="fa fa-star text-warning pe-1"></i>({rating}/10)</span>
                        <p className="blog-post-meta pt-3">{released} ({country}) . {rated} . {genres} . {runtime}</p>
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
                        <div className="pt-3">
                            <span className="fw-semibold fs-5">The Cast: </span>
                            <span>{actors}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieItem