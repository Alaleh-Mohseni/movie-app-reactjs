import { useContext } from "react";
import { stateContext } from "../../contexts/contexts";
import { Link } from "react-router-dom";

import SearchForm from "../SearchForm";

const Header = () => {

    const { handleModalLogin, handleModalRegister, genres, logged, setLogged } = useContext(stateContext)

    const sortGenre = genres.sort((a, b) => a.name.localeCompare(b.name))

    const renderGenres = () => {

        return sortGenre.map(genre => {
            return (
                <Link className="text-decoration-none text-primary" to={`/genre/${genre.id}-${genre.name}`} key={genre.id}>
                    <li className="dropdown-item" key={genre.id}>{genre.name}</li>
                </Link>
            );
        })
    }

    return (
        <header className="p-3 text-bg-dark">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                    <Link to="/" className="text-white text-decoration-none">
                        <h1 className="fs-3 fw-normal">TheMovie<span className="fw-bold">Box</span></h1>
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-semibold text-white">
                        <Link to="/" className="text-white text-decoration-none">
                            <li className="nav-item px-3">Home</li>
                        </Link>
                        <Link to="/" className="text-white text-decoration-none">
                            <li className="nav-item px-3">Popular</li>
                        </Link>
                        <li className="nav-item px-3 dropdown">
                            <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Genres</span>
                            <ul className="dropdown-menu">
                                {renderGenres()}
                            </ul>
                        </li>
                    </ul>

                    <SearchForm />

                    {
                        logged ? (
                            <div className="d-flex row dropdown text-white">
                                <span className="dropdown-toggle fw-semibold" data-bs-toggle="dropdown" aria-expanded="false">My Account</span>
                                <ul className="dropdown-menu text-small text-white">
                                    <Link to="/profile" className="text-dark text-decoration-none">
                                        <li className="dropdown-item">Profile</li>
                                    </Link>
                                    <Link to="/newmovie" className="text-dark text-decoration-none">
                                        <li className="dropdown-item">Add Movie</li>
                                    </Link>
                                    <li><hr className="dropdown-divider" /></li>
                                    <Link to="/" className="text-dark text-decoration-none">
                                        <li className="dropdown-item" onClick={() => setLogged(false)}>Log out</li>
                                    </Link>
                                </ul>
                            </div>

                        ) : (
                            < div className="text-end">
                                <button
                                    type="button"
                                    className="btn btn-outline-light me-2"
                                    onClick={handleModalLogin}
                                >
                                    Login
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleModalRegister}
                                >
                                    Sign-up
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header