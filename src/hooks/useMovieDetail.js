import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { httpClient } from "../services/Http";
import { MOVIES } from "../config/api-endpoints";

export const useMovieDetail = () => {
    const { id } = useParams()

    const fetchMovieDetail = async (id) => {
        const response = await httpClient.get(`${MOVIES}/${id}`)
        return response.data
    }

    const { data, isLoading, error, refetch } = useQuery(
        {
            queryKey: ["movie-detail", id],
            queryFn: () => fetchMovieDetail(id),
            staleTime: 1000,
        }
    )

    return { data, isLoading, error, refetch }
}