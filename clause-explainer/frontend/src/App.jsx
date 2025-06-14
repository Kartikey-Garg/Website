import Hero from './components/Hero'
import ClauseExplainer from './components/ClauseExplainer'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <ClauseExplainer />
      <HowItWorks />
      <Footer />
    </div>
  )
}