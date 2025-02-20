import type { createCategoriesSchema, createProductsSchema, updateCategoriesSchema, updateProductSchema } from "@/features/schemas";
import type { z, ZodError } from "zod";
import { name } from './../../../../node_modules/next/dist/compiled/webpack/bundle5';

export type Category <T = undefined> = {
  data?: T
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  products: Product[];
  
}

export type Meta = {
  total: number;
  page: number;
  last_page: number;
  limit: number;
}

export type CategoriesResponse <T> = {
  status: boolean;
  statusCode: number;
  message: string;
  data : T;
}

export type Product <T = undefined> = {
  data?: T
  id: string;
  name: string;
  slug: string;
  price: string;
  image?: string | null;
  category_id?: string | null;
  created_at: string; // ISO 8601 Date format
  updated_at: string; // ISO 8601 Date format
  values?: Product[]
  Products?: {
    category:{
      id: string;
      name: string;
    }
  }
  category?: Category
}

export type ProductApiResponse <T> = {
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export type ApiResponse <T> = {
  status: boolean;
  statusCode: number;
  message: string;
  data?: T;
  error?: string;
  details?: ZodError;
}

export type MutationCreateCategoriesProps<T = undefined> = {
  data?: T
  onSuccess?: () => void,
  onError?: () => void,
  onMutate?: () => void
}

export type UpdateCategoriesFormSchema = {
  id?: string;
  name?: string;
  values?: Category[];
};

export type DeleteCategoriesProps = {
  id: string
  data?: Category
  onSuccess?: () => void,
  onError?: () => void,
  onMutate?: () => void
}

export type DeleteProductsProps = {
  id: string
  data?: Product
  onSuccess?: () => void,
  onError?: () => void,
  onMutate?: () => void
}

export type UpdateProductsFormSchema = {
  id?: string;
  name?: string;
  price?: string;
  category_id?: string | null;
  values?: Product[];
}

export type MutationUpdateProductsProps<T = undefined> = {
  data?: T
  onSuccess?: () => void,
  onError?: () => void,
  onMutate?: () => void
}

export type MutationCreateProductsProps<T = undefined> = {
  data?: T
  onSuccess?: () => void,
  onError?: () => void,
  onMutate?: () => void
}

export type ApiProps<T = undefined> = {
  id?: T;
  onSuccess?: () => void;
  onError?: () => void;
  onMutate?: () => void;
}

export type EditCategoriesSchemas = {
  id?: string;
  name?: string;
  values?: EditCategoriesSchema;
}

export type CreateCategoriesSchema = z.infer<typeof createCategoriesSchema>
export type EditCategoriesSchema = z.infer<typeof updateCategoriesSchema>
export type CreateProductSchema = z.infer<typeof createProductsSchema>
export type EditProductSchema = z.infer<typeof updateProductSchema>