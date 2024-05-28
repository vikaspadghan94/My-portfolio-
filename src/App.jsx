// import React from 'react'

import About from "./components/About"
import Contact from "./components/Contact"
import Cursor from "./components/Cursor"
import Experiance from "./components/Experiance"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experiance />
      <Projects />
      <Contact />
      <Footer />
      </div>
      
    </div>
  )
}

export default App


{/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}