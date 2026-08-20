"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    Package,
    Settings,
    Moon
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";

const items = {
    top: [
        {
            title: "Dashboard",
            url: "/",
            icon: LayoutDashboard,
        },
        {
            title: "Products",
            url: "/products",
            icon: Package,
        },
    ],

    bottom: [
        {
            title: "Dark Mode",
            url: "#",
            icon: Moon,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ],
};

export function AppSidebar() {
    const { isMobile, setOpen } = useSidebar();
    return (
        <Sidebar
            collapsible="icon" variant="sidebar"
            // collapsible="icon"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <SidebarContent className="flex flex-col justify-between">
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarGroupLabel>Warehouse Moderator</SidebarGroupLabel>
                        <SidebarMenu>
                            {items.top.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        render={<Link href={item.url} />}
                                        tooltip={isMobile ? item.title : undefined}
                                    >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.bottom.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        render={<Link href={item.url} />}
                                        tooltip={isMobile ? item.title : undefined}
                                    >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}