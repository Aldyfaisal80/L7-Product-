"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { createCategoriesSchema, createProductsSchema } from "@/features/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { CreateCategoriesSchema, CreateProductSchema } from "../../../types/type";
import { useCategories } from "../../../api/category/useCategories";
import { useCreateCategories } from "../../../api/category/useCreateCategories";
import { useProducts } from "@/features/tables/api/product/useProducts";
import { useCreateProducts } from "@/features/tables/api/product/useCreateProducts";
import { CreateCategoryFormInner } from "../../category/form/CreateCategoryFormInner";
import { CreateProductFormInner } from "./CreateProductFormInner";

type CreateProductDialogProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const CreateProductDialog = ({ open, setOpen }: CreateProductDialogProps) => {

    const { refetch: refetchProducts } = useProducts()
    const { mutate: createProduct, isPending: isCreateProductPending } = useCreateProducts({
        onSuccess: () => {
            form.reset();
            toast.success("Product created successfully");
            void refetchProducts();
            setOpen(false);
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
            price: 0,
            category_id: "",
        },
    });

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg w-full ml-auto">
                <DialogHeader>
                    <DialogTitle>Create Category</DialogTitle>
                    <DialogDescription>Fill in the details to create a new category.</DialogDescription>
                </DialogHeader>

                <Card className="shadow-none border-none">
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
            </DialogContent>
        </Dialog>
    );
};
