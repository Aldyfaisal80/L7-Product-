import { z } from "zod";

// Skema validasi untuk create
export const createCategoriesSchema = z.object({
    name: z.string().min(3, "Nama category minimal 3 karakter").max(20, "Nama category maksimal 20 karakter"),
});

// Skema validasi untuk update menggunakan optional() untuk menjadikan nama opsional
export const updateCategoriesSchema = createCategoriesSchema.extend({
  name: createCategoriesSchema.shape.name.optional() // Menjadikan 'name' opsional
});

export const createProductsSchema = z.object({
    name: z.string().min(3, "Nama product minimal 3 karakter").max(50, "Nama product maksimal 50 karakter"),
    price: z.string().min(3, "Harga product minimal 3 karakter").max(20, "Harga product maksimal 20 karakter"),
    category_id: z.string().optional(),
});

export const updateProductSchema = createProductsSchema.partial();
