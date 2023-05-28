import ReactPaginate from "react-paginate";

const Pagination = ({ setPage, pageCount }) => {

    const handleClick = (e) => {
        const selectedPage = ++e.selected
        setPage(selectedPage)
    }


    return (
        <div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handleClick}
                containerClassName={"pagination justify-content-center flex-wrap"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    )
}

export default Pagination