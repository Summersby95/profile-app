export function Projects() {
    return (
        <section id="projects" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {/* Project Cards will go here */}
                <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">Project Placeholder</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Description of a pinned project will appear here.</p>
                </div>
            </div>
        </section>
    )
}
