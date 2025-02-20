import { axiosInstance } from "@/lib/axios/client";
import type { ApiResponse, CreateProductSchema, MutationCreateProductsProps, Product } from "../../types/type";
import { useMutation } from "@tanstack/react-query";

export const createProducts = async (values: CreateProductSchema) => {
    const response = await axiosInstance.post<ApiResponse<Product>>('/products', values)
    return response.data.data
}

export const useCreateProducts = ({ onSuccess, onError, onMutate }: MutationCreateProductsProps) => {
    return useMutation({
        mutationFn: createProducts,
        mutationKey: ['create-products'],
        onSuccess,
        onError,
        onMutate
    })
}