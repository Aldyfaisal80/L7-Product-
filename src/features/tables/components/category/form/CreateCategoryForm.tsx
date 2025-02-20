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
import { createCategoriesSchema } from "@/features/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { CreateCategoriesSchema } from "../../../types/type";
import { useCategories } from "../../../api/category/useCategories";
import { useCreateCategories } from "../../../api/category/useCreateCategories";
import { CreateCategoryFormInner } from "./CreateCategoryFormInner";

export const CreateTodoForm = () => {
  const { refetch: refetchCategories } = useCategories();

  const { mutate: createCategory, isPending: isCreateCategoryPending } = useCreateCategories({
    onSuccess: () => {
      form.reset();
      toast.success("Category created successfully");
      void refetchCategories();
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  })

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTodo(e.target.value);
  };

  const onSubmit = (values: CreateCategoriesSchema) => {
    createCategory(values);
  };

  const form = useForm<CreateCategoriesSchema>({
    resolver: zodResolver(createCategoriesSchema),
    defaultValues: {
      name: "",
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
  );
};
