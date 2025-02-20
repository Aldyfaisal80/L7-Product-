import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { cookies } from "next/headers"
import { DashboardSidebar } from "../fragments/sidebar/Sidebar"
import { Navbar } from "../fragments/Navbar"
import { Container } from "./Container"

type DashboardContainerProps = {
    children: React.ReactNode
    className?: string
}
export const DashboardContainer: React.FC<DashboardContainerProps> = async ({
    children,
    className,
}) => {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
    return (
        <div className={`${className}`}>
            <SidebarProvider defaultOpen={defaultOpen}>
                <DashboardSidebar />
                <Container>
                    <nav className="flex items-center justify-between gap-4 mb-4">
                        <SidebarTrigger />
                        <Navbar />
                    </nav>
                    {children}
                </Container>
            </SidebarProvider>
        </div >
    )
}
