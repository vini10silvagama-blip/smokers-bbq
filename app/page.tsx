import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Solucao from '@/components/Solucao'
import Produtos from '@/components/Produtos'
import Parceria from '@/components/Parceria'
import Sobre from '@/components/Sobre'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solucao />
      <Produtos />
      <Parceria />
      <Sobre />
      <Contato />
      <Footer />
    </main>
  )
}
