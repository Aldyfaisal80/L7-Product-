import { Button } from "@/components/ui/button"
import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useCategories } from "../../../api/category/useCategories"
import { renderElements } from "@/utils/render-elements"
import type { Category } from "../../../types/type"
import { formatDate } from "@/utils/format-date"
import { useDeleteCategories } from "../../../api/category/useDeleteCategories"
import { toast } from "sonner"
import { PencilIcon, Trash } from "lucide-react"
import Link from "next/link"

export const CategoryTableBody = () => {
    const { data: categories, refetch } = useCategories()
    const { mutate: deleteCategories } = useDeleteCategories({
        onSuccess: () => {
            toast.success("Category deleted successfully")
            void refetch()
        },
        onError: () => {
            toast.error("Something went wrong")
        }
    })

    // Fungsi delete harus menerima "id" sebagai parameter
    const handleDeleteCategory = (id: string) => {
        deleteCategories(id)
    }

    console.log(categories)

    return (
        <TableBody>
            {renderElements({
                of: categories?.data.data,
                render: (category: Category) => (
                    <TableRow key={category.id}>
                        <TableCell className="font-medium">{category.name}</TableCell>
                        <TableCell>{category.slug}</TableCell>
                        <TableCell>{formatDate(category.created_at, "medium")}</TableCell>
                        <TableCell className="text-right">{formatDate(category.updated_at, "medium")}</TableCell>
                        <TableCell className="text-center gap-4 flex justify-center items-center">
                            <Button variant={"destructive"} size="sm" onClick={() => handleDeleteCategory(category.id)}>
                                <Trash />
                            </Button>
                            <Button variant="outline" size="sm">
                                <div>
                                    <Link href={`/dashboard/tables/categories/${category.id}/edit`}><PencilIcon /></Link>
                                </div>
                            </Button>

                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    )
};
