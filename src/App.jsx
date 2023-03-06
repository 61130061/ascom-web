import { useState } from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partner from './components/Partner';
import Footer from './components/Footer';
import Research from './components/Research';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partner />
      <Research />
      <Team />
      <Footer />
    </div>
  )
}

export default App
