import {  TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const CategoryTableHeader = () => {
    return (
        <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Updated</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
        </TableHeader>
    )
}