import { DashboardLayout as DashboardLayoutComponent } from "@/components/layouts/DashboardLayout"

type DashboardLayoutProps = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <DashboardLayoutComponent>{children}</DashboardLayoutComponent>
    )
}

