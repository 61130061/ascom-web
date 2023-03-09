import React, { useState } from 'react';
import logo from '../assets/ascom_logo.png';

export default function Navbar() {
  const [burger, setBurger] = useState(false);

  const menu = ["Home", "Research", "Team", "Contact", "Github"];

  const scrollTo = (id) => {
    const ele = document.getElementById(id.toLowerCase());

    if (ele) ele.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="absolute top-0 left-0 w-full z-40">
      <div className="container px-3 py-5 mx-auto flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <img className="h-8 md:h-10" src={logo} />
        </div>
        <div className="hidden md:flex items-center gap-2">
          {menu.map((d, i) =>
            <button 
              onClick={() => scrollTo(d)}
              id={i}
              className="hover:bg-white rounded hover:bg-opacity-30 px-2.5 py-1"
            >
              {d}
            </button>
          )}
        </div>
        <div className="md:hidden flex relative">
          <button onClick={() => setBurger(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {burger &&
            <div className="absolute flex flex-col gap-2 w-[80vw] top-12 right-0 bg-black rounded-lg py-5">
              {menu.map((d, i) =>
                <button
                  onClick={() => {
                    setBurger(false);
                    scrollTo(d);
                  }}
                  className="text-left px-5 py-3"
                  key={i}
                >
                  {d}
                </button>
              )}
            </div>
          }
        </div>
      </div>
    </div>
  )
}