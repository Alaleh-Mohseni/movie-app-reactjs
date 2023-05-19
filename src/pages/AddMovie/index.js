import { useState } from "react";
import { httpClient } from "../../services/Http";
import { ADDMOVIE } from "../../config/api-endpoints";


const AddMovie = () => {

    const [title, setTitle] = useState('')
    const [id, setId] = useState('')
    const [poster, setPoster] = useState('')
    const [year, setYear] = useState('')
    const [votes, setVotes] = useState('')
    const [rating, setRating] = useState('')
    const [country, setCountry] = useState('')
    const [director, setDirector] = useState('')


    const getHandler = (setter) => {
        return function handler(e) {
            setter(e.target.value)
        }
    }


    const handleAddMovie = (e) => {
        e.preventDefault();

        const addNewMovie = async () => {
            try {
                const data = {
                    title: title,
                    poster: poster,
                    year: year,
                    director: director,
                    country: country,
                    imdb_rating: rating,
                    imdb_votes: votes,
                    imdb_id: id,
                }

                const response = await httpClient.post(ADDMOVIE, data)
                console.log('response', response)

            } catch (error) {
                console.log(error);
            }
        }

        addNewMovie()
    }


    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
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
                                    value={title}
                                    onChange={getHandler(setTitle)}
                                />
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="director" className="form-label">Director</label>
                                <input
                                    type="text"
                                    name="director"
                                    className="form-control"
                                    id="director"
                                    value={director}
                                    onChange={getHandler(setDirector)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    className="form-control"
                                    id="country"
                                    value={country}
                                    onChange={getHandler(setCountry)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="year" className="form-label">Year</label>
                                <input
                                    type="text"
                                    name="year"
                                    className="form-control"
                                    id="year"
                                    value={year}
                                    onChange={getHandler(setYear)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="rating" className="form-label">Imdb rating</label>
                                <input
                                    type="text"
                                    name="rating"
                                    className="form-control"
                                    id="rating"
                                    value={rating}
                                    onChange={getHandler(setRating)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="idimdb" className="form-label">Imdb id</label>
                                <input
                                    type="text"
                                    name="id"
                                    className="form-control"
                                    id="idimdb"
                                    value={id}
                                    onChange={getHandler(setId)}
                                />
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="vote" className="form-label">Imdb votes</label>
                                <input
                                    type="text"
                                    name="votes"
                                    className="form-control"
                                    id="vote"
                                    value={votes}
                                    onChange={getHandler(setVotes)}
                                />
                            </div>

                            <div className="col-md-12 mb-2">
                                <label htmlFor="poster" className="form-label">Poster</label>
                                <input
                                    type="file"
                                    name="poster"
                                    className="form-control"
                                    id="poster"
                                    multiple
                                    value={poster}
                                    onChange={getHandler(setPoster)}
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