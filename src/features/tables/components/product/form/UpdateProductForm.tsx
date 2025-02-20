"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form"
import { Loader2 } from "lucide-react";
import { updateProductSchema } from "@/features/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { EditProductSchema, UpdateProductsFormSchema } from "../../../types/type";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProducts, useUpdateProducts } from "@/features/tables/api/product";
import { UpdateProductFormInner } from "./UpdateProductFormInner";
import { useProductsId } from "@/features/tables/api/product/useCategoriesbyId";

type EditProductsSchemasUpdateProps = {
    id: string
}
export const UpdateProductForm = ({ id }: EditProductsSchemasUpdateProps) => {
    const router = useRouter();
    const { refetch: refetchProducts } = useProducts()
    const { data: product } = useProductsId(id)

    const { mutate: updateProduct, isPending: isUpdateProductPending } = useUpdateProducts({
        onSuccess: () => {
            form.reset();
            toast.success("Product created successfully");
            void refetchProducts();
            router.push("/dashboard/tables");
        },
        onError: () => {
            toast.error("Something went wrong");
            console.log("error")
        },
    })


    const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setTodo(e.target.value);
    };

    const onSubmit = (values: UpdateProductsFormSchema) => {
        updateProduct({ id, values });
    };

    const form = useForm<EditProductSchema>({
        resolver: zodResolver(updateProductSchema),
        defaultValues: {
            name: "",
            price: "0",
            category_id: "",
        },
    });

    useEffect(() => {
        if (product) {
            form.reset({
                name: product.name,
                price: product.price,
                category_id: product?.category_id ?? "",
            })
        }
    }, [form, product])

    return (
        <Card className="mb-20">
            <CardHeader>
                <CardTitle>Update Category</CardTitle>
                <CardDescription>Update a new category</CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <UpdateProductFormInner
                        formId="update-product-form"
                        onSubmit={onSubmit}
                        handleChangeTodo={handleChangeTodo}
                    />
                </Form>
            </CardContent>

            <CardFooter className="place-content-end">
                <Button form="update-product-form" disabled={isUpdateProductPending}>
                    {isUpdateProductPending ? (
                        <>
                            <Loader2 className="animate-spin" />
                            Updating...
                        </>
                    ) : (
                        "Update"
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
};
