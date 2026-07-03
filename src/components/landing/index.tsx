import Header from "./Header"
import Hero from "./Hero"
import Projects from "./Projects"
import Services from "./Services"
import Faq from "./Faq"
import CallToAction from "./CallToAction"
import Footer from "./Footer"
import type { LandingPageProps } from "./types"

export { Header, Hero, Projects, Services, Faq, CallToAction, Footer }

export default function LandingPage({ showHeader = true, showFooter = true }: LandingPageProps) {
  return (
    <main className="min-h-screen">
      {showHeader && <Header />}
      <div className="container pt-4">
        <Hero />
        <Services />
        <Projects />
        <Faq />
        <CallToAction />
      </div>
      {showFooter && <Footer />}
    </main>
  )
}
