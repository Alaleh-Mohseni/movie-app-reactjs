import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./style.css";

const MovieCards = ({ id, title, poster, genres, year, rating }) => {
    return (
        <div className="col" key={id}>
            <div className="card border-light shadow-sm">
                <img
                    className="img-fluid rounded-top"
                    src={poster}
                    alt="Movie poster"
                />
                <div className="card-body">
                    <p className="card-text title__text fw-semibold">{title} ({year})</p>
                    <p className="card-text text-secondary genres">{genres}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link
                            className="text-decoration-none text-dark"
                            to={`/moviedetails/${id}`}
                            key={id}
                        >
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary text-uppercase btn__view"
                            >
                                View info
                            </button>
                        </Link>
                        <div className="text-body-secondary d-flex align-items-center">
                            <FaStar className="text-warning pe-1" size='20' />
                            <span className="mb-0 rating">{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCards