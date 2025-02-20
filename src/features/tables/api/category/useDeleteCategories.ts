import { axiosInstance } from "@/lib/axios/client"
import type { ApiResponse, Category, DeleteCategoriesProps } from "../../types/type"
import { useMutation } from "@tanstack/react-query"

// Fungsi DELETE hanya menerima string sebagai ID
export const deleteCategories = async (id: string) => {
    const response = await axiosInstance.delete<ApiResponse<Category>>(`/categories/${id}`)
    return response.data
}

// useDeleteCategories tidak butuh "id" saat inisialisasi
export const useDeleteCategories = ({ onSuccess, onError, onMutate }: Omit<DeleteCategoriesProps, "id">) => {
    return useMutation({
        mutationKey: ["delete-categories"],
        mutationFn: deleteCategories, // Langsung gunakan fungsi deleteCategories
        onSuccess,
        onError,
        onMutate
    });
};
