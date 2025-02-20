import { axiosInstance } from "@/lib/axios/client"
// import type { ApiResponse, Category, MutationCreateCategoriesProps, UpdadteCategoriesResponse} from "../types/type"
import { useMutation } from "@tanstack/react-query"
import type { ApiResponse, Category, MutationCreateCategoriesProps, UpdateCategoriesFormSchema } from "../../types/type"

export const UpdateCategories = async ({id, values}: UpdateCategoriesFormSchema) => {
    const response = await axiosInstance.patch<ApiResponse<Category>>(`/categories/${id}`, values)
    return response.data.data
}

export const useUpdateCategories = ({ onSuccess, onError, onMutate }: MutationCreateCategoriesProps) => {
    return useMutation({
        mutationFn: UpdateCategories,
        mutationKey: ['update-categories'],
        onSuccess,
        onError,
        onMutate
    })
}