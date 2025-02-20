import { axiosInstance } from "@/lib/axios/client";
import { useQuery } from "@tanstack/react-query";
import type { CategoriesResponse, Category } from "../../types/type";

// Modify getCategories to accept a limit parameter
export const getCategoriesProductLimit = async (limit: number) => {
  // Append limit to the API request URL
  const response = await axiosInstance.get<CategoriesResponse<Category>>(
    `/categories?limit=${limit}`  // Add limit query param
  );
  return response.data;
};

// Use query with the limit parameter
export const useCategoriesProductLimit = (limit: number) => {
  return useQuery({
    queryKey: ['categories', limit], // Adding limit to the queryKey for caching and refetching
    queryFn: () => getCategoriesProductLimit(limit), // Pass the limit to the getCategories function
  });
};
