import { useCategoriesProductLimit } from "../../api/product/useCategoriesProductLimit";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { type Category } from "../../types/type";
import { renderElements } from "@/utils/render-elements";

export const OptionSelectProduct = ({ field }: { field: any }) => {
    const { data: category } = useCategoriesProductLimit(100);

    return (
        <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Product" />
            </SelectTrigger>
            <SelectContent>
                {renderElements({
                    of: category?.data.data,
                    render: (category: Category) => (
                        <SelectItem key={category.id} value={category.id}>
                            {category.name}
                        </SelectItem>
                    ),
                })}
            </SelectContent>
        </Select>
    );
};
