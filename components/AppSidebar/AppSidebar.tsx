"use client";

import { LayoutDashboard, Package, Settings } from "lucide-react";
import Link from "next/link";

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
import { ThemeToggle } from "../theme/ThemeToggle";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  // Check mobile state to control tooltip behavior
  const { isMobile } = useSidebar();
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  // Unified configuration for top and bottom navigation items
  const items = {
    top: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
      { title: "Products", url: "/products", icon: Package },
    ],
    bottom: [
      {
        // Custom component for Dark/Light theme toggling
        element: ThemeToggle,
      },
      { title: "Settings", url: "#", icon: Settings },
    ],
  };

  return (
    <Sidebar collapsible="icon" variant="floating">
      {/* Vertically distribute content so the bottom group stays at the end */}
      <SidebarContent className="flex flex-col justify-between">
        {/* Top Navigation Group */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel>Warehouse Moderator</SidebarGroupLabel>
            <SidebarMenu>
              {items.top.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={<Link href={item.url} />}
                    tooltip={isMobile ? item.title : undefined}
                    isActive={pathname === item.url}
                    className={pathname === item.url ? "text-accent" : ""}
                  >
                     <item.icon className={pathname === item.url ? "text-accent  dark:text-accent" : ""} />
                    <span className={pathname === item.url ? "text-accent  dark:text-accent" : ""}>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Bottom Navigation Group (Settings & Theme Toggle) */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.bottom.map((item, i) => {
                const ElementComponent = item?.element;

                return (
                  <SidebarMenuItem key={`${item?.title}` + i}>
                    {/* Conditionally render custom components vs standard link items */}
                    {ElementComponent ? (
                      <SidebarMenuButton
                        tooltip={resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
                        className="cursor-pointer py-0"
                      >
                        <ElementComponent />
                        <span className="py-0">{item?.title}</span>
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton
                        render={<Link href={item.url || "#"} />}
                        tooltip={item.title}
                        className="cursor-pointer"
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
