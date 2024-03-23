import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { httpClient } from "../services/Http";
import { GENRES } from "../config/api-endpoints";


export const useGenres = () => {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const { id } = useParams()

    const fetchGenres = async (id, page) => {
        const response = await httpClient.get(`${GENRES}/${id}/movies?page=${page}`)
        setPageCount(response.data.metadata.page_count)
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
            queryKey: ["genres", id, page],
            queryFn: () => fetchGenres(id, page),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )

    return {data, isLoading, error, setPage, pageCount, refetch}
}