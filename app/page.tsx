import Header from '/components/Header'
import Hero from '/components/Hero'
import About from '/components/About'
import Projects from '/components/Projects'
import Contact from '/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
