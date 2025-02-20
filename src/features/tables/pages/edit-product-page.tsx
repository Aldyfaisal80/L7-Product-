import { PageContainer } from "@/components/layouts/PageContainer"
import { UpdateProductForm } from "../components/product/form/UpdateProductForm"

type EditProductPageProps = {
    params: Promise<{ id: string }>
}

export const EditProductPage = async ({ params }: EditProductPageProps) => {
    const id = (await params).id
    return (
        <PageContainer title="Detail Product - Page" >
            <UpdateProductForm id={id} />
        </PageContainer >
    )
}