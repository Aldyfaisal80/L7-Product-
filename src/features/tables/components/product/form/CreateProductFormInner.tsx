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
import type { CreateProductSchema } from "@/features/tables/types/type";
import { OptionSelectProduct } from "../OptionSelectProduct";
type CreateProductFormInnerProps = {
    formId: string;
    onSubmit: (values: CreateProductSchema) => void;
    handleChangeProduct: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CreateProductFormInner = ({
    formId,
    onSubmit,
    handleChangeProduct,
}: CreateProductFormInnerProps) => {
    const form = useFormContext<CreateProductSchema>();
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
                        <FormDescription>Create your product</FormDescription>
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
                        <FormLabel>Product Price</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                type="text"
                                placeholder="Enter your price product"
                            // onChange={handleChangeProduct}
                            />
                        </FormControl>
                        <FormDescription>Create your product price</FormDescription>
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
                        <FormDescription>Create your category</FormDescription>
                        {form.formState.errors.category_id && (
                            <FormMessage>{form.formState.errors.category_id.message}</FormMessage>
                        )}
                    </FormItem>
                )}
            />
        </form>
    );
};
