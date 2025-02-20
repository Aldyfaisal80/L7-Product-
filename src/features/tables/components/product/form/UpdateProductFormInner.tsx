import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { EditProductSchema } from "@/features/tables/types/type";
import { useFormContext } from "react-hook-form";
import { OptionSelectProduct } from "../OptionSelectProduct";
type UpdateProductFormInnerProps = {
    formId: string;
    onSubmit: (values: EditProductSchema) => void;
    handleChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UpdateProductFormInner = ({
    formId,
    onSubmit,
    handleChangeTodo,
}: UpdateProductFormInnerProps) => {
    const form = useFormContext<EditProductSchema>();
    return (
        <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                type="text"
                                placeholder="Enter your product name"
                            // onChange={handleChangeProduct}
                            />
                        </FormControl>
                        <FormDescription>Update your product</FormDescription>
                        {form.formState.errors.name && (
                            <FormMessage>{form.formState.errors.name.message}</FormMessage>
                        )}
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Update Product Price</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                type="text"
                                placeholder="Enter your price product"
                            // onChange={handleChangeProduct}
                            />
                        </FormControl>
                        <FormDescription>Update your product price</FormDescription>
                        {form.formState.errors.price && (
                            <FormMessage>{form.formState.errors.price.message}</FormMessage>
                        )}
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Product Category</FormLabel>
                        <FormControl>
                            <OptionSelectProduct field={field} />
                        </FormControl>
                        <FormDescription>Update your category</FormDescription>
                        {form.formState.errors.category_id && (
                            <FormMessage>{form.formState.errors.category_id.message}</FormMessage>
                        )}
                    </FormItem>
                )}
            />
        </form>
    );
};
