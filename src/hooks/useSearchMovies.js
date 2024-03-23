import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../services/Http";
import { MOVIES } from "../config/api-endpoints";

export const useSearchMovies = () => {
    const [search, setSearch] = useState("");

    const fetchMovies = async (search) => {
        const response = await httpClient.get(`${MOVIES}?q=${search}`)
        return response.data.data
    }

    const { data } = useQuery({
        queryKey: ["movies", search],
        queryFn: () => fetchMovies(search),
        staleTime: 1000,
    })

    return { data, search, setSearch }
}