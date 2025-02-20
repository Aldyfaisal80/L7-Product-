import { PageContainer } from "@/components/layouts/PageContainer"
import { UpdateCategoryForm } from "../components/category/form/UpdateCategoryForm"

type EditCategoryPageProps = {
    params: Promise<{ id: string }>
}

export const EditCategoryPage = async ({ params }: EditCategoryPageProps) => {
    const id = (await params).id
    return (
        <PageContainer title="Detail Category - Page" >
            <UpdateCategoryForm id={id} />
        </PageContainer >
    )
}