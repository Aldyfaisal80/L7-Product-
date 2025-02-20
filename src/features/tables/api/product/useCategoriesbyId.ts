import { axiosInstance } from "@/lib/axios/client"
import { useQuery } from "@tanstack/react-query"
import type { ApiResponse, Product } from "../../types/type"

export const getProductsId = async (id?: string) => {
    if (!id) throw new Error('id is required') 
    const response = await axiosInstance.get<ApiResponse<Product>>(`/products/${id}`)
    return response.data.data
}

export const useProductsId = (id:string) => {
    return useQuery({
        queryKey: ['mutate', 'products', id],
        queryFn: () => getProductsId(id),
    })
}