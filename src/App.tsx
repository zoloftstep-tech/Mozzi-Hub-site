import { Business } from './components/Business'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Works } from './components/Works'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Business />
        <Works />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
