import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import Link from "next/link"

type SidebarItemProps = {
    sidebar: {
        title: string;
        href: string;
        icon: React.ReactNode;
    }
};

export const SidebarItem = (props: SidebarItemProps) => {
    return (
        <SidebarMenuItem>
            <SidebarMenuButton asChild>
                <Link href={props.sidebar.href} className="flex items-center gap-2 w-full">
                    {props.sidebar.icon}
                    <span className="capitalize">{props.sidebar.title}</span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}