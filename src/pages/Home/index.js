import { useContext } from "react";
import { stateContext } from "../../contexts/contexts";

import Carousel from "../../components/Carousel";
import Popular from "../../components/Popular";
import Pagination from "../../components/Pagination";


const Home = () => {

    const { setPage, pageCount } = useContext(stateContext)

    return (
        <main>
            <Carousel />
            <Popular />
            <Pagination
                setPage={setPage}
                pageCount={pageCount}
            />
        </main>
    )
}

export default Home