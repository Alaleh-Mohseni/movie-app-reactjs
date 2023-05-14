import { useState } from "react";
import axios from "axios";
import "./style.css"

const AddMovie = () => {
    const [newMovie, setNewMovie] = useState({
        title: '',
        // poster: '',
        year: '',
        director: '',
        country: '',
        rating: '',
        votes: '',
        id: '',
    })

    const handleInputs = (name, value) => {
        setNewMovie({
            ...newMovie,
            [name]: value,
        });
    };


    const handleAddMovie = (e) => {
        e.preventDefault();

        const data = {
            title: newMovie.title,
            // poster: newMovie.poster,
            year: newMovie.year,
            director: newMovie.director,
            country: newMovie.country,
            imdb_rating: newMovie.rating,
            imdb_votes: newMovie.votes,
            imdb_id: newMovie.id,
        }

        axios.post(`https://moviesapi.ir/api/v1/movies`, data)
            .then((response) => {
                console.log('res', response)
            })
    }


    return (
        <div className="container">
            <div className="row justify-content-center align-items-center add__movie">
                <div className="col-md-9 col-lg-7 border border-light shadow-sm p-5">
                    <h4 className="mb-3 text-center">Add Movie</h4>
                    <form className="needs-validation">
                        <div className="row g-3">
                            <div className="col-sm-5">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    id="title"
                                    value={newMovie.title}
                                    onChange={({ target }) => handleInputs(target.name, target.value)}
                                />
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="director" className="form-label">Director</label>
                                <input
                                    type="text"
                                    name="director"
                                    className="form-control"
                                    id="director"
                                    value={newMovie.director}
                                    onChange={({ target }) => handleInputs(target.name, target.value)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    className="form-control"
                                    id="country"
                                    value={newMovie.country}
                                    onChange={({ target }) => handleInputs(target.name, target.value)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="year" className="form-label">Year</label>
                                <input
                                    type="text"
                                    name="year"
                                    className="form-control"
                                    id="year"
                                    value={newMovie.year}
                                    onChange={({ target }) => handleInputs(target.name, target.value)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="rating" className="form-label">Imdb rating</label>
                                <input
                                    type="text"
                                    name="rating"
                                    className="form-control"
                                    id="rating"
                                    value={newMovie.rating}
                                    onChange={({ target }) => handleInputs(target.name, target.value)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="idimdb" className="form-label">Imdb id</label>
                                <input
                                    type="text"
                                    name="id"
                                    className="form-control"
                                    id="idimdb"
                                    value={newMovie.id}
                                    onChange={({ target }) => handleInputs(target.name, target.value)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="vote" className="form-label">Imdb votes</label>
                                <input
                                    type="text"
                                    name="votes"
                                    className="form-control"
                                    id="vote"
                                    value={newMovie.votes}
                                    onChange={({ target }) => handleInputs(target.name, target.value)}
                                />
                            </div>
                        </div>

                        <button
                            className="w-100 btn btn-primary btn-lg mt-4"
                            type="submit"
                            onClick={handleAddMovie}
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMovie