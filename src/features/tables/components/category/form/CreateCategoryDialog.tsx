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
import { CreateCategoryFormInner } from "./CreateCategoryFormInner";
import { createCategoriesSchema } from "@/features/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { CreateCategoriesSchema } from "../../../types/type";
import { useCategories } from "../../../api/category/useCategories";
import { useCreateCategories } from "../../../api/category/useCreateCategories";

type CreateCategoryDialogProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const CreateCategoryDialog = ({ open, setOpen }: CreateCategoryDialogProps) => {
    const { refetch: refetchCategories } = useCategories();

    const { mutate: createCategory, isPending: isCreateCategoryPending } =
        useCreateCategories({
            onSuccess: () => {
                form.reset();
                toast.success("Category created successfully");
                void refetchCategories();
                setOpen(false); // Tutup modal setelah sukses
            },
            onError: () => {
                toast.error("Something went wrong");
            },
        });

    const onSubmit = (values: CreateCategoriesSchema) => {
        createCategory(values);
    };

    const form = useForm<CreateCategoriesSchema>({
        resolver: zodResolver(createCategoriesSchema),
        defaultValues: {
            name: "",
        },
    });

    const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setTodo(e.target.value);
    };

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
                            <CreateCategoryFormInner
                                formId="create-category-form"
                                onSubmit={onSubmit}
                                handleChangeTodo={handleChangeTodo}
                            />
                        </Form>
                    </CardContent>
                    <CardFooter className="place-content-end">
                        <Button form="create-category-form" disabled={isCreateCategoryPending}>
                            {isCreateCategoryPending ? (
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
