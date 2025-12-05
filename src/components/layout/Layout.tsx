import { Sidebar } from "./Sidebar"
import { ThemeToggle } from "./ThemeToggle"
import { siteConfig } from "../../config/site"

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-zinc-950 transition-colors">
            {/* Mobile Header - only visible on small screens */}
            <div className="md:hidden p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50 sticky top-0 z-10">
                <span className="font-bold flex flex-col">
                    <span>{siteConfig.name}</span>
                </span>
                <ThemeToggle />
            </div>

            {/* Sidebar - fixed on desktop */}
            <div className="hidden md:block w-72 fixed inset-y-0 z-20 h-full">
                <Sidebar />
            </div>

            <main className="flex-1 md:pl-72 w-full">
                <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-20 relative animate-in fade-in duration-500">
                    <div className="absolute top-6 right-6 hidden md:block">
                        <ThemeToggle />
                    </div>
                    {children}
                </div>
            </main>
        </div>
    )
}
