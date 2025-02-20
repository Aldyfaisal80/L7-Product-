import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu} from "@/components/ui/sidebar";
import { SidebarItem } from "./SidebarItem";

type SidebarMenuListProps = {
    group: string;
    sidebarList: {
        title: string;
        href: string;
        icon: React.ReactNode;
    }[];
};

export const SidebarMenuList = (props: SidebarMenuListProps) => {
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarGroupLabel className="px-2 text-md font-semibold text-zinc-900 dark:text-zinc-50 capitalize">
                    {props.group}
                </SidebarGroupLabel>
                <SidebarMenu>
                    {props.sidebarList.map((item, index) => (
                        <SidebarItem key={index} sidebar={item} />
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
