import { ThemeProvider } from "next-themes"
import { Layout } from "./components/layout/Layout"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { siteConfig } from "./config/site"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <footer className="mt-24 pb-8 text-sm text-zinc-500 dark:text-zinc-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}.</p>
        </footer>
      </Layout>
    </ThemeProvider>
  )
}

export default App
