import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Marquee from '../components/Marquee.jsx'
import HeroSection from '../sections/HeroSection.jsx'
import HowSection from '../sections/HowSection.jsx'
import OwnersSection from '../sections/OwnersSection.jsx'
import CrewSection from '../sections/CrewSection.jsx'
import ProviderSection from '../sections/ProviderSection.jsx'
import PricingSection from '../sections/PricingSection.jsx'
import LaunchSection from '../sections/LaunchSection.jsx'
import useReveal from '../hooks/useReveal.js'
import WaitlistProvider from '../components/WaitlistModal.jsx'

export default function Home() {
  useReveal()
  return (
    <WaitlistProvider>
      <div className="safe-top-cover" aria-hidden="true" />
      <Header />
      <main>
        <HeroSection />
        <Marquee />
        <HowSection />
        <OwnersSection />
        <CrewSection />
        <ProviderSection />
        <PricingSection />
        <LaunchSection />
      </main>
      <Footer />
    </WaitlistProvider>
  )
}
