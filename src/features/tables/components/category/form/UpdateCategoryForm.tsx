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
import { updateCategoriesSchema } from "@/features/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { EditCategoriesSchemas, UpdateCategoriesFormSchema } from "../../../types/type";
import { useEffect } from "react";
import { UpdateCategoryFormInner } from "./UpdateCategoryFormInner";
import { useRouter } from "next/navigation";
import { useCategories } from "@/features/tables/api/category/useCategories";
import { useCategoriesId } from "@/features/tables/api/category/useCategoriesbyId";
import { useUpdateCategories } from "@/features/tables/api/category/useUpdateCategories";

type EditCategoriesSchemasUpdateProps = {
    id: string
}
export const UpdateCategoryForm = ({ id }: EditCategoriesSchemasUpdateProps) => {
    const { refetch: refetchCategories } = useCategories();
    const { data: category } = useCategoriesId(id);
    const router = useRouter();

    console.log(category)

    const { mutate: updateCategory, isPending: isUpdateCategoryPending } = useUpdateCategories({
        onSuccess: () => {
            form.reset();
            toast.success("Category created successfully");
            void refetchCategories();
            router.push("/dashboard/tables");
        },
        onError: () => {
            toast.error("Something went wrong");
        },
    })


    const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setTodo(e.target.value);
    };

    const onSubmit = (values: UpdateCategoriesFormSchema) => {
        updateCategory({ id, ...values });
    };

    const form = useForm<EditCategoriesSchemas>({
        resolver: zodResolver(updateCategoriesSchema),
        defaultValues: {
            name: "",
        },
    });

    useEffect(() => {
        if (category) {
            form.reset({
                name: category.name
            })
        }
    }, [form, category]);


    return (
        <Card className="mb-20">
            <CardHeader>
                <CardTitle>Update Category</CardTitle>
                <CardDescription>Update a new category</CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <UpdateCategoryFormInner
                        formId="update-category-form"
                        onSubmit={onSubmit}
                        handleChangeTodo={handleChangeTodo}
                    />
                </Form>
            </CardContent>

            <CardFooter className="place-content-end">
                <Button form="update-category-form" disabled={isUpdateCategoryPending}>
                    {isUpdateCategoryPending ? (
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
