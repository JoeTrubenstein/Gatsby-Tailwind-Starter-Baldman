import React from "react"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Snippet from "../components/Snippet"
import Portfolio from "../components/Portfolio"
import Pricing from "../components/Pricing"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Snippet />
      <Portfolio />
      <Pricing />
      <Footer />
    </div>
  )
}
export default HomePage;