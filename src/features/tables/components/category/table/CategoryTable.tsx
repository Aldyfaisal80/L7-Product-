import {
    Table as TableComponent,
    TableCaption,
    TableCell,
    TableFooter,
    TableRow,
} from "@/components/ui/table"
import { CategoryTableBody } from "./CategoryTableBody"
import { useCategories } from "../../../api/category/useCategories"
import { CategoryTableHeader } from "./CategoryTableHeader";

export const CategoryTable = () => {
    const { data: categories } = useCategories();

    return (
        <TableComponent>
            <TableCaption>A list of categories.</TableCaption>
            <CategoryTableHeader />
            <CategoryTableBody />
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>Total</TableCell>
                    <TableCell className="w-[150px]">
                        <p className="">
                            {categories?.data?.meta?.total || categories?.data?.data?.length || 0} Categories
                        </p>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </TableComponent>
    );
}
