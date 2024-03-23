import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../services/Http";
import { MOVIES } from "../config/api-endpoints";


export const useMovies = () => {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(25)


    const fetchMovies = async (page) => {
        const response = await httpClient.get(`${MOVIES}?page=${page}`)
        return response.data.data
    }

    const onSuccess = (data) => {
        console.log("fetch succeeded!", data)
    }

    const onError = (error) => {
        console.log("fetch failed!", error)
    }

    const { data, isLoading, error, isError, refetch } = useQuery(
        {
            queryKey: ["movies", page],
            queryFn: () => fetchMovies(page),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )

    return {data, isLoading, error, setPage, pageCount, refetch}
}