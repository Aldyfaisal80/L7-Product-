import { axiosInstance } from "@/lib/axios/client"
import { useQuery } from "@tanstack/react-query"
import type { ApiResponse, Category } from "../../types/type"

export const getCategoriesId = async (id?: string) => {
    if (!id) throw new Error('id is required') 
    const response = await axiosInstance.get<ApiResponse<Category>>(`/categories/${id}`)
    return response.data.data
}

export const useCategoriesId = (id:string) => {
    return useQuery({
        queryKey: ['mutate', 'categories', id],
        queryFn: () => getCategoriesId(id),
    })
}