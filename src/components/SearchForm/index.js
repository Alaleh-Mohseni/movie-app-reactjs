import { useContext } from "react";
import { searchContext } from "../../contexts/search-provider";

const SearchForm = () => {
    const { setPage, debouncedOnChange } = useContext(searchContext)

    return (
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
                type="search"
                className="form-control"
                placeholder="Search for movies..."
                aria-label="Search"
                onChange={(e) => {
                    setPage(1)
                    debouncedOnChange(e)
                }}
            />
        </form>
    )
}

export default SearchForm