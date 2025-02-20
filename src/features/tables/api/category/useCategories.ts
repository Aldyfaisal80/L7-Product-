import { axiosInstance } from "@/lib/axios/client"
import { useQuery } from "@tanstack/react-query"
import type { CategoriesResponse, Category } from "../../types/type"

export const getCategories = async () => {
  const response = await axiosInstance.get<CategoriesResponse<Category>>('/categories')
  return response.data

}
export const useCategories = () => {
  return useQuery({
    queryKey: ['mutate','categories'],
    queryFn: getCategories,
  })
}