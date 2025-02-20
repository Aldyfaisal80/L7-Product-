import { axiosInstance } from "@/lib/axios/client";
import type { ApiResponse, Category, CreateCategoriesSchema, MutationCreateCategoriesProps } from "../../types/type";
import { useMutation } from "@tanstack/react-query";

export const createCategories = async (values: CreateCategoriesSchema) => {
    const response = await axiosInstance.post<ApiResponse<Category>>('/categories', values)
    return response.data.data
}

export const useCreateCategories = ({ onSuccess, onError, onMutate }: MutationCreateCategoriesProps) => {
    return useMutation({
        mutationFn: createCategories,
        mutationKey: ['create-categories'],
        onSuccess,
        onError,
        onMutate
    })
}