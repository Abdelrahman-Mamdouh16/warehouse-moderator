import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AppSidebar } from "../components/AppSidebar/AppSidebar";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { SidebarProvider } from "../components/ui/sidebar";
import { TooltipProvider } from "../components/ui/tooltip";
import "./globals.css";
import { Cairo } from "next/font/google";

// Font configurations with performance optimizations (explicit weights & swap display)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const fontCairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warehouse Moderator",
  description: "Frontend Technical Assessment",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontCairo.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Global theme, sidebar, and tooltip context wrappers */}
        <ThemeProvider>
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar />
              <main className="flex min-h-screen flex-1 flex-col mx-3 pt-2">
                {children}
              </main>
            </SidebarProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}