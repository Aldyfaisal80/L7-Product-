import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { SidebarGroupList } from "./SidebarGroup"
import Link from "next/link"
import { SignOutButton } from "../SignOutButton"

export function DashboardSidebar() {
    return (
        <Sidebar className="min-h-screen border-r border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/50">
            <SidebarHeader className="border-b border-zinc-200 dark:border-zinc-800 px-6 pt-6">
                <Link href="/">
                    <h1 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed ">
                        Material Tailwind Dashboard
                    </h1>
                </Link>
            </SidebarHeader>
            <SidebarContent className="px-2">
                <SidebarGroupList />
            </SidebarContent>
            <SidebarFooter className="p-4 pb-4">
                <SignOutButton />
            </SidebarFooter>
        </Sidebar>
    )
}











