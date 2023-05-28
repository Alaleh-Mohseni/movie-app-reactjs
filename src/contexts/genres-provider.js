import { createContext,useState, useEffect, useCallback } from "react";
import { httpClient } from "../services/Http"
// import { helpers } from "../services/Http";
import { GENRES } from "../config/api-endpoints";


export const genresContext = createContext();

const GenresProvider = ({children}) => {
    
    const [genres, setGenres] = useState([])
    
    const fetchGenre = useCallback(async () => {
        try {
            const response = await httpClient.get(GENRES)
            setGenres(response.data)
        } catch (err) {
            console.log(err)
        }
    }, [])
    console.log('genre', genres)


    useEffect(() => {
        fetchGenre()
    }, [fetchGenre])

    return (
        <genresContext.Provider value={{genres, setGenres}}>
            {children}
        </genresContext.Provider>
    );
}

export default GenresProvider