import { axiosInstance } from "@/lib/axios/client"
import { useMutation } from "@tanstack/react-query"
import type { ApiResponse, MutationUpdateProductsProps, Product, UpdateProductsFormSchema } from "../../types/type"

export const UpdateProducts = async ({id, values}: UpdateProductsFormSchema) => {
    const response = await axiosInstance.patch<ApiResponse<Product>>(`/products/${id}`, values)
    return response.data.data
}

export const useUpdateProducts = ({ onSuccess, onError, onMutate }: MutationUpdateProductsProps) => {
    return useMutation({
        mutationFn: UpdateProducts,
        mutationKey: ['update-products'],
        onSuccess,
        onError,
        onMutate
    })
}