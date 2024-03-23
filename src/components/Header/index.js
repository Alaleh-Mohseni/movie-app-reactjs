import { useContext } from "react";
import { Link } from "react-router-dom";
import { genresContext } from "../../contexts/genres-provider";
import { authContext } from "../../contexts/auth-provider";
import { FaRegUser } from "react-icons/fa";
import { MdMovieEdit } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import SearchForm from "../SearchForm";

import './style.css';

const Header = () => {
    const { data } = useContext(genresContext)
    const { handleModalLogin, handleModalRegister, logged, setLogged } = useContext(authContext)

    const renderGenres = () => {
        return data?.sort((a, b) => a.name.localeCompare(b.name))
            .map(genre => {
                return (
                    <Link
                        className="text-decoration-none text-primary"
                        to={`/genre/${genre.id}-${genre.name}`}
                        key={genre.id}
                    >
                        <li className="dropdown-item" key={genre.id}>{genre.name}</li>
                    </Link>
                );
            })
    }

    return (
        <header className="p-3 text-bg-dark">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                    <Link to="/" className="text-white text-decoration-none mb-lg-0 mb-md-2">
                        <h1 className="fs-3 fw-normal m-0">TheMovie<span className="fw-bold">Box</span></h1>
                    </Link>

                    <div className="col-12 col-lg-7 mb-md-2 mb-lg-0 justify-content-center">
                        <SearchForm />
                    </div>

                    <ul className="nav col-12 col-lg-auto justify-content-center align-items-center mb-lg-0 mb-md-2 fw-semibold text-white">
                        <Link to="/" className="text-white text-decoration-none">
                            <li className="nav-item px-3">Home</li>
                        </Link>
                        <li className="nav-item px-3 dropdown">
                            <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Genres</span>
                            <ul className="dropdown-menu genres__box">
                                {renderGenres()}
                            </ul>
                        </li>
                    </ul>

                    {logged ? (
                        <div className="d-flex row dropdown text-white">
                            <span className="dropdown-toggle fw-semibold" data-bs-toggle="dropdown" aria-expanded="false">My Account</span>
                            <ul className="dropdown-menu text-small text-white">
                                <Link to="/profile" className="text-dark text-decoration-none">
                                    <li className="dropdown-item">
                                        <span>
                                            <FaRegUser size='20' />
                                        </span>
                                        <span className="ps-2 fw-semibold mb-0">Profile</span>
                                    </li>
                                </Link>
                                <Link to="/newmovie" className="text-dark text-decoration-none">
                                    <li className="dropdown-item">
                                        <span>
                                            <MdMovieEdit size='22' />
                                        </span>
                                        <span className="ps-2 fw-semibold">Add Movie</span>
                                    </li>
                                </Link>
                                <li><hr className="dropdown-divider" /></li>
                                <Link to="/" className="text-dark text-decoration-none">
                                    <li className="dropdown-item" onClick={() => setLogged(false)}>
                                        <span>
                                            <FiLogOut size='20' />
                                        </span>
                                        <span className="ps-2 fw-semibold">Log Out</span>
                                    </li>
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