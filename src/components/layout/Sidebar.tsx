import { Github, Linkedin } from "lucide-react"
import { siteConfig } from "../../config/site"
import { cn } from "../../lib/utils"
// import { ThemeToggle } from "./ThemeToggle" // Placing theme toggle in sidebar or top right?

export function Sidebar({ className }: { className?: string }) {
    return (
        <aside className={cn("flex flex-col h-full py-8 px-6 bg-zinc-50 dark:bg-zinc-900/50 border-r border-zinc-200 dark:border-zinc-800", className)}>
            <div className="flex flex-col gap-4 mb-8">
                {/* Placeholder Avatar - could use an image component here */}
                <div className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xl font-bold text-zinc-500">
                    JS
                </div>
                <div>
                    <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{siteConfig.name}</h1>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-[200px]">{siteConfig.headline}</p>
                </div>
            </div>

            <nav className="flex-1">
                <ul className="flex flex-col gap-2">
                    {siteConfig.nav.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="mt-8 flex gap-4">
                <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    aria-label="GitHub"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>
        </aside>
    )
}
