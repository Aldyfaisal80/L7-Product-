import {
    Table as TableComponent,
    TableCaption,
    TableCell,
    TableFooter,
    TableRow,
} from "@/components/ui/table"
import { CategoryTableBody } from "./ProductTableBody"
import { useProducts } from "../../../api/product/useProducts"
import { ProductTableHeader } from "./ProductTableHeader"

export const ProductTable = () => {
    const { data: products } = useProducts()

    return (
        <TableComponent>
            <TableCaption>A list of products.</TableCaption>

            <ProductTableHeader />
            <CategoryTableBody />
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">
                        <p className="">
                            {products?.data?.meta?.total || products?.data?.data?.length || 0} Products
                        </p>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </TableComponent >
    )
}