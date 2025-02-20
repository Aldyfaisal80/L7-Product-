import { Button } from "@/components/ui/button"
import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { useCategories } from "../../../api/category/useCategories"
import { renderElements } from "@/utils/render-elements"
import type { Category, Product } from "../../../types/type"
import { formatDate } from "@/utils/format-date"
import { useProducts } from "../../../api/product/useProducts"
import { convertCurrency } from "@/utils/convert-currency"
import { PencilIcon, Trash } from "lucide-react"
import { useDeleteProducts } from "@/features/tables/api/product"
import { toast } from "sonner"

export const CategoryTableBody = () => {
    const { data: Products, refetch: refetchProducts } = useProducts()
    console.log(Products)

    const { mutate: deleteProducts } = useDeleteProducts({
        onSuccess: () => {
            toast.success("Product deleted successfully")
            void refetchProducts()
        },
        onError: () => {
            toast.error("Something went wrong")
        }
    })

    return (
        <TableBody>
            {renderElements({
                of: Products?.data,
                render: (Products: Product) => (
                    <TableRow key={Products.id}>
                        <TableCell className="font-medium">{Products.name}</TableCell>
                        <TableCell>{Products.category?.name}</TableCell>
                        <TableCell>{convertCurrency(Products.price.toString())}</TableCell>
                        <TableCell className="text-center gap-4 flex justify-center items-center">
                            <Button variant={"destructive"} size="sm" onClick={() => deleteProducts(Products.id)}>
                                <Trash />
                            </Button>
                            <Button variant="outline" size="sm">
                                <div>
                                    <Link href={`/dashboard/tables/products/${Products.id}/edit`}><PencilIcon /></Link>
                                </div>
                            </Button>
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    )
}