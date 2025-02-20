import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { EditCategoriesSchema, UpdateCategoriesFormSchema } from "@/features/tables/types/type";
import { useFormContext } from "react-hook-form";
type UpdateTodoFormInnerProps = {
    formId: string;
    onSubmit: (values: UpdateCategoriesFormSchema) => void;
    handleChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UpdateCategoryFormInner = ({
    formId,
    onSubmit,
    handleChangeTodo,
}: UpdateTodoFormInnerProps) => {
    const form = useFormContext<EditCategoriesSchema>();
    return (
        <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category Name</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                type="text"
                                placeholder="Enter your category name"
                            // onChange={handleChangeTodo}
                            />
                        </FormControl>
                        <FormDescription>Update your category</FormDescription>
                        {form.formState.errors.name && (
                            <FormMessage>{form.formState.errors.name.message}</FormMessage>
                        )}
                    </FormItem>
                )}
            />
        </form>
    );
};
