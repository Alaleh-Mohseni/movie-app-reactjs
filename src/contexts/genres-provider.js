import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../services/Http"
import { GENRES } from "../config/api-endpoints";


export const genresContext = createContext();

const GenresProvider = ({ children }) => {

    const fetchGenres = async () => {
        const response = await httpClient.get(GENRES)
        return response.data
    }

    const { data } = useQuery({
        queryKey: ["genres"],
        queryFn: fetchGenres,
        staleTime: 1000,
    });


    return (
        <genresContext.Provider value={{ data }}>
            {children}
        </genresContext.Provider>
    );
}

export default GenresProvider