"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { CategoryTable } from "./category/table/CategoryTable";
import { ProductTable } from "./product/table/ProductTable";
import { CreateCategoryDialog } from "./category/form/CreateCategoryDialog";
import { Button } from "@/components/ui/button";
import { CreateProductDialog } from "./product/form/CreateProductDialog";

export const TabTable = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Ambil tab dari URL, jika tidak ada default ke "categories"
    const defaultTab = searchParams.get("tab") || "categories";
    const [activeTab, setActiveTab] = useState(defaultTab);

    // Pisahkan state dialog untuk kategori dan produk
    const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
    const [openProductDialog, setOpenProductDialog] = useState(false);

    // Update URL saat tab berubah
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        router.push(`?tab=${tab}`, { scroll: false }); // Update URL tanpa refresh halaman
    };

    // Sync state dengan URL jika URL berubah langsung
    useEffect(() => {
        if (searchParams.get("tab")) {
            setActiveTab(searchParams.get("tab")!);
        }
    }, [searchParams]);

    return (
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
            {/* Tabs Navigation */}
            <TabsList className="flex justify-between w-[]">
                <div className="flex space-x-4">
                    <TabsTrigger value="categories">Categories</TabsTrigger>
                    <TabsTrigger value="products">Products</TabsTrigger>
                </div>
            </TabsList>
            <div className="flex justify-end">
                {activeTab === "categories" && (
                    <Button onClick={() => setOpenCategoryDialog(true)}>Create Category</Button>
                )}
                {activeTab === "products" && (
                    <Button onClick={() => setOpenProductDialog(true)}>Create Product</Button>
                )}
            </div>

            {/* Content berdasarkan Tab */}
            <TabsContent value="categories">
                <CategoryTable />
                <CreateCategoryDialog open={openCategoryDialog} setOpen={setOpenCategoryDialog} />
            </TabsContent>
            <TabsContent value="products">
                <ProductTable />
                <CreateProductDialog open={openProductDialog} setOpen={setOpenProductDialog} />
            </TabsContent>
        </Tabs>
    );
};
