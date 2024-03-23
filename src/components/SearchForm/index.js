import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchMovies } from '../../hooks/useSearchMovies';

import './style.css';

const SearchForm = () => {
    const { data, search, setSearch } = useSearchMovies()
    const [filteredData, setFilteredData] = useState([]);

    const filteredMovies = data?.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )

    const handleSearchInput = (e) => {
        setFilteredData(filteredMovies)
        setSearch(e.target.value)
    }

    const renderFilteredMovie = () => {
        if (!filteredData || filteredData?.length === 0) {
            return <p className="text-center text-white fs-5 fw-semibold m-auto p-5">No results found for "{search}"</p>
        }

        return filteredData?.map((result) => (
            <Link
                to={`/moviedetails/${result.id}`}
                key={result.id}
                className='text-white text-decoration-none'
            >
                <div className="card bg-dark detail">
                    <div className="row no-gutters overflow-hidden">
                        <div className="col-sm-2">
                            {result.poster &&
                                <img
                                    className="card-img img-cover"
                                    src={result.poster}
                                    alt={result.title}
                                />
                            }
                        </div>
                        <div className="col-sm-10">
                            <div className="card-body">
                                <h6 className="card-title">{result.title} ({result.year})</h6>
                                <p className="card-text fs-6">{result?.genres?.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        ))
    }


    return (
        <div className="position-relative">
            <div className="w-100">
                <input
                    className='form-control'
                    placeholder="Search for movies..."
                    name='search'
                    onChange={handleSearchInput}
                />
            </div>
            <div className="w-100">
                <div className={`bg-dark w-100 search-result ${search === '' ? 'd-none' : 'd-flex flex-column'}`}>
                    {renderFilteredMovie()}
                </div>
            </div>
        </div>
    );

}

export default SearchForm;