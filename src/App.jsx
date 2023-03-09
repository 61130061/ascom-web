import { useState } from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partner from './components/Partner';
import Footer from './components/Footer';
import Research from './components/Research';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[50px] -right-[250px] w-[450px] h-[500px] bg-pink-400 rounded-full blur-[50px] opacity-20 z-0" />
      <div className="absolute -top-[30px] -right-[150px] w-[400px] h-[400px] bg-yellow-400 rounded-full blur-[50px] opacity-20 z-0" />
      <div className="absolute top-[1600px] -left-[200px] w-[500px] h-[500px] bg-pink-400 rounded-full blur-[50px] opacity-20 z-0" />
      <div className="absolute top-[1800px] -left-[200px] w-[400px] h-[400px] bg-blue-400 rounded-full blur-[50px] opacity-20 z-0" />
      <Navbar />
      <Hero />
      <Partner />
      <Research />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
