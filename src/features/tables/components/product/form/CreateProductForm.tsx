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
import { createProductsSchema } from "@/features/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { CreateProductSchema } from "../../../types/type";
import { CreateProductFormInner } from "./CreateProductFormInner";
import { useCreateProducts } from "@/features/tables/api/product/useCreateProducts";
import { useProducts } from "@/features/tables/api/product/useProducts";

export const CreateTodoForm = () => {
    const { refetch: refetchProducts } = useProducts()
    const { mutate: createProduct, isPending: isCreateProductPending } = useCreateProducts({
        onSuccess: () => {
            form.reset();
            toast.success("Product created successfully");
            void refetchProducts();
        },
        onError: () => {
            toast.error("Something went wrong");
        },
    })

    const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setTodo(e.target.value);
    };

    const onSubmit = (values: CreateProductSchema) => {
        createProduct(values);
    };

    const form = useForm<CreateProductSchema>({
        resolver: zodResolver(createProductsSchema),
        defaultValues: {
            name: "",
            price: "0",
            category_id: "",
        },
    });


    return (
        <Card className="mb-20">
            <CardHeader>
                <CardTitle>Create Category</CardTitle>
                <CardDescription>Create a new category</CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <CreateProductFormInner
                        formId="create-product-form"
                        onSubmit={onSubmit}
                        handleChangeProduct={handleChangeProduct}
                    />
                </Form>
            </CardContent>

            <CardFooter className="place-content-end">
                <Button form="create-product-form" disabled={isCreateProductPending}>
                    {isCreateProductPending ? (
                        <>
                            <Loader2 className="animate-spin" />
                            Adding...
                        </>
                    ) : (
                        "Add"
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
};
