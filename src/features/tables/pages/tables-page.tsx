'use client'
import { PageContainer } from "@/components/layouts/PageContainer"
import { TabTable } from "../components/TabTable";
import { CreateTodoForm } from "../components/category/form/CreateCategoryForm";

export const TablesPage = () => {

    return (
        <PageContainer title="Tables - Page">
            {/* <CreateTodoForm/> */}
            <TabTable />
        </PageContainer>
    )
}