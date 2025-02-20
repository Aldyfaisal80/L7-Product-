import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { type z } from "zod";
import type { createCategoriesSchema } from '../../../../schemas/index';
type CreateTodoFormInnerProps = {
  formId: string;
  onSubmit: (values: z.infer<typeof createCategoriesSchema>) => void;
  handleChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CreateCategoryFormInner = ({
  formId,
  onSubmit,
  handleChangeTodo,
}: CreateTodoFormInnerProps) => {
  const form = useFormContext<z.infer<typeof createCategoriesSchema>>();
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
            <FormDescription>Create your category</FormDescription>
            {form.formState.errors.name && (
              <FormMessage>{form.formState.errors.name.message}</FormMessage>
            )}
          </FormItem>
        )}
      />
    </form>
  );
};
