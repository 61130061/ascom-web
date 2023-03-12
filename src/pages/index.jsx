import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import teams from '../team-data';
import Link from '@docusaurus/Link';

import astrolabLogo from '../../static/astrolab_logo.png';
import satangLogo from '../../static/satang_logo.png';
import ccosLogo from '../../static/ccos_logo.png';
import screenImg from '../../static/3stap-screenshot.png';

import { SatIcon, UAVIcon, PlaneIcon, GlobeIcon } from '../components/Icon';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const research = [
    {
      title: 'Space',
      icon: <SatIcon />,
      des: 'focusing on the application of advanced computerized algorithm by implementation of various space objects according to the increasing in demand of space exploring in the near future.'
    },
    {
      title: 'UAV',
      icon: <UAVIcon />,
      des: 'focus on autonomous unmanned aerial vehicle communication, navigation, guidance, and control systems.'
    },
    {
      title: 'Airport',
      icon: <PlaneIcon />,
      des: 'focusing on the airport traffic management and integrating of machine learning methods.'
    },
    {
      title: 'Geographic Information System (GIS)',
      icon: <GlobeIcon />,
      des: 'focusing on enviromental remote sensoring and image processing.'
    },
  ]

  const forceScroll = (right) => {
    document.getElementById('team-slider').scrollBy({
      left: right ? -40 : 40,
      behavior: 'smooth'
    });
  }


  return (
    <Layout
      title={`Homepage`}
      description="Air-Space Control, Optimazition, and Management Laboratory"
    >
      <main>
        <div className="h-[920px] relative">
          <div className="absolute top-0 left-0 z-[20] w-full h-full bg-transparent" />
          <div id="globe" />
          <div className="bg-gradient-to-b from-transparent to-[#111111] absolute h-[240px] left-0 bottom-0 right-0" />
          <div className="absolute mt-28 md:mt-44 left-0 top-0 right-0 z-[30]">
            <div className="flex flex-col gap-5 items-center z-20 px-5">
              <h1 className="max-w-[1080px] text-4xl sm:text-5xl md:text-6xl font-extrabold text-center">
                Air-Space Control, Optimazition, and Management <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-pink-500">Laboratory</span>
              </h1>
              <div className="max-w-[600px] px-5 text-center text-base md:text-xl">
                focus on Intelligent Aerospace Technology and project to the frontier research of Air-Space control, optimization, and management system.
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto p-5 flex flex-wrap gap-10 justify-center items-center">
          <img src={astrolabLogo} className="s-logo opacity-30 h-16 mt-10" />
          <img src={ccosLogo} className="s-logo opacity-30 h-16" />
          <img src={satangLogo} className="s-logo opacity-30 h-10" />
        </div>

        <section id="research" className="container mx-auto flex flex-col items-center px-5 py-10">
          <div className="flex justify-center md:px-5 py-10 mb-10">
            <div className="rounded-xl md:p-5 flex flex-wrap items-center gap-10">
              <div className="bg-white bg-opacity-5 border border-zinc-900 rounded-lg p-2 md:p-3 max-w-[640px] flex items-center">
                <img className="object-fill rounded-lg" src={screenImg} />
              </div>
              <div className="flex-1 flex flex-col gap-12">
                <div>
                  <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-bl from-pink-500 to-blue-500">LATEST PROJECT</div>
                  <h2 className="text-5xl font-bold mb-5">3STAP</h2>
                  <div>3STAP stands for 3d Satellite Trajectory and Position Tracking online application.</div>
                </div>
                <div className="flex flex-wrap gap-5 items-center">
                  <button className="shrink-0 font-bold bg-gradient-to-bl text-base hover:cursor-pointer from-pink-500 to-blue-500 px-7 py-3 rounded-lg">Try 3STAP</button>
                  <button className="bg-transparent text-base hover:cursor-pointer hover:bg-white hover:bg-opacity-5 px-7 py-3 rounded-lg">Read Document</button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl mb-10 font-semibold">Research Area</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {research.map((d, i) =>
              <Link
                to={'docs/' + d.title.toLowerCase()}
                key={i}
                className="hover:no-underline text-white relative flex-1 p-5 md:p-8 rounded-xl border border-zinc-700 bg-white bg-opacity-5 hover:cursor-pointer hover:border-zinc-600 hover:bg-opacity-10"
              >
                <div className="h-14 mb-6">
                  {d.icon}
                </div>
                <h2 className="text-xl font-bold mb-3">{d.title}</h2>
                <div className="text-sm text-gray-300">
                  {d.des}
                </div>
              </Link>
            )}
          </div>
        </section>

        <section id="team" className="py-5">
          <div className="container mx-auto px-5">
            <div className="flex justify-between items-center mb-8">
              <div>
                <div className="uppercase text-sm font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-yellow-500">The team</div>
                <h1 className="text-4xl font-semibold">Meet Our Researchers</h1>
              </div>
              <div className="flex items-center gap-5">
                <button className="w-9 aspect-square rounded-lg hover:cursor-pointer bg-white bg-opacity-20" onClick={() => forceScroll(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button className="w-9 aspect-square rounded-lg hover:cursor-pointer bg-white bg-opacity-20" onClick={() => forceScroll()}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="team-slider" className="hide-scrollbar flex overflow-x-scroll snap-mandatory snap-x mb-5">
            {Object.entries(teams).map(([key, value], oi) => 
              value.map((d, i) =>
                <div key={i} className="snap-start px-3 md:px-5 mb-5">
                  <img className="mb-3 rounded-lg min-w-[250px] md:min-w-[300px] aspect-square" src={d.img} />
                  <h2 className="text-lg font-bold mb-1">{d.name}</h2>
                  <div className="text-sm text-gray-300">{d.role}</div>
                </div>
              )
            )}
          </div>
          <div className="flex justify-center">
              <Link to="/teams" className="text-white border border-zinc-700 border-opacity-20 bg-transparent text-base hover:cursor-pointer rounded-lg font-semibold px-6 py-2.5 mb-10 hover:bg-white hover:bg-opacity-10">See all</Link>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-5 my-10">
          <div className="rounded-2xl bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 text-center shadow border border-zinc-700">
            <div className="rounded-2xl bg-zinc-900 bg-opacity-30 py-10 md:py-16">
              <div>Like our work?</div>
              <h1 className="text-5xl font-bold mt-3 mb-10">Let's Talk!!</h1>
              <button className="bg-transparent text-base hover:cursor-pointer px-6 py-2.5 border border-white rounded-lg w-fit hover:bg-white hover:bg-opacity-20 font-semibold">Get in touch</button>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
