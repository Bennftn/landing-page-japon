import Hero from '@/components/Hero'
import About from '@/components/About'
import Included from '@/components/Included'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Included />
      <Contact />
    </main>
  )
}
