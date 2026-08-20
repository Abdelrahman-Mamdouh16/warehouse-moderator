"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";

export function SidebarWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <SidebarProvider open={open} onOpenChange={setOpen}>
            <div
                className="flex min-h-screen w-full"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <AppSidebar />

                <main className="flex min-h-screen flex-1 flex-col bg-background">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}