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
import { updateCategoriesSchema } from "@/features/schemas";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { EditCategoriesSchema, UpdateCategoriesFormSchema } from "../../../types/type";
import { useCategories } from "../../../api/category/useCategories";
import { UpdateCategoryFormInner } from "./UpdateCategoryFormInner";
import { useUpdateCategories } from "@/features/tables/api/useUpdateCategories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategoriesId } from "@/features/tables/api/useCategoriesbyId";
import { useEffect } from "react";

type UpdateCategoryDialogProps = {
    id: string;
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const UpdateCategoryDialog = ({ open, setOpen, id }: UpdateCategoryDialogProps) => {
    const { refetch: refetchCategories } = useCategories();

    const { data: category } = useCategoriesId(id);

    console.log(id)

    const { mutate: updateCategory, isPending: isUpdateCategoryPending } = useUpdateCategories({
        onSuccess: () => {
            form.reset();
            toast.success("Category Update successfully");
            void refetchCategories();
            setOpen(false); // Tutup modal setelah sukses
        },
        onError: () => {
            toast.error("Something went wrong");
        },
    })

    const onSubmit = (values: UpdateCategoriesFormSchema) => {
        updateCategory({ id, values });
    };

    const form = useForm<EditCategoriesSchema>({
        resolver: zodResolver(updateCategoriesSchema),
        defaultValues: {
            name: "",
        }
    })

    const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setTodo(e.target.value);
    };

    useEffect(() => {
        if (category) {
            form.setValue("name", category.name);
        }
    }, [form, category]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg w-full ml-auto">
                <DialogHeader>
                    <DialogTitle>Update Category</DialogTitle>
                    <DialogDescription>Fill in the details to Update a new category.</DialogDescription>
                </DialogHeader>

                <Card className="shadow-none border-none">
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
            </DialogContent>
        </Dialog>
    );
};
