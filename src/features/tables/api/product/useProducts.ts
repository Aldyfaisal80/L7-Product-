import { axiosInstance } from "@/lib/axios/client"
import { useQuery } from "@tanstack/react-query"
import type { Product, ProductApiResponse } from "../../types/type"

export const getProducts = async () => {
  const response = await axiosInstance.get<ProductApiResponse<Product>>('/products')
  return response.data.data

}
export const useProducts = () => {
  return useQuery({
    queryKey: ['mutate','products'],
    queryFn: getProducts,
  })
}