import { siteConfig } from "../../config/site"

export function Hero() {
    return (
        <section id="hero" className="mb-16 scroll-mt-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6">
                {siteConfig.headline}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                {siteConfig.bio} I build accessible, pixel-perfect, performant, and premium web experiences.
            </p>
        </section>
    )
}
