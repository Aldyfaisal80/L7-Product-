import { axiosInstance } from "@/lib/axios/client"
import type { ApiResponse, DeleteProductsProps, Product } from "../../types/type"
import { useMutation } from "@tanstack/react-query"

// Fungsi DELETE hanya menerima string sebagai ID
export const deleteProducts = async (id: string) => {
    const response = await axiosInstance.delete<ApiResponse<Product>>(`/products/${id}`)
    return response.data
}

export const useDeleteProducts = ({ onSuccess, onError, onMutate }: Omit<DeleteProductsProps, "id">) => {
    return useMutation({
        mutationKey: ["delete-products"],
        mutationFn: deleteProducts,
        onSuccess,
        onError,
        onMutate
    });
};
