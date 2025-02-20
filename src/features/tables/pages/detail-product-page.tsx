'use client'

import { PageContainer } from "@/components/layouts/PageContainer"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { useCategories } from "../api/category/useCategories"

export const DetailProductPage = () => {
    const { data: category } = useCategories()

    console.log(category)

    if (!category) {
        return (
            <PageContainer title="Detail Product - Page">
                <div className="flex items-center justify-center min-h-[200px]">
                    <p className="text-lg text-muted-foreground">Loading product...</p>
                </div>
            </PageContainer>
        )
    }

    return (
        <PageContainer title="Detail Product - Page">
            <div className="space-y-6">
                <Card className="w-full max-w-2xl mx-auto">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">{product.title}</CardTitle>
                        </div>
                        <CardDescription>
                            Product ID: {product.id}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Product Image */}
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-contain" />
                        </div>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Detail</TableHead>
                                    <TableHead>Value</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Price</TableCell>
                                    <TableCell>${product.price}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Category</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Description</TableCell>
                                    <TableCell className="whitespace-normal">
                                        {product.description}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </PageContainer>
    )
}