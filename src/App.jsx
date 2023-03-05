import { useState } from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partner from './components/Partner';
import Footer from './components/Footer';
import Research from './components/Research';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-[1000px]">
        <Partner />
        <div className="container max-w-[840px] mx-auto px-5 py-10 my-10">
          <div className="rounded-xl p-5 flex items-center gap-10">
            <div className="bg-zinc-900 rounded-lg w-96 h-40">img</div>
            <div className="flex flex-col gap-3">
              <div>
                <div className="text-sm text-gray-300">LATEST PROJECT</div>
                <h2 className="text-4xl font-bold">3STAP</h2>
              </div>
              <div>3STAP stands for 3d Satellite Trajectory and Position Tracking online application.</div>
              <div>
                <button>Try 3STAP</button>
              </div>
            </div>
          </div>
        </div>
        <Research />
      </div>
      <Footer />
    </div>
  )
}

export default App
