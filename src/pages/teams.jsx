import React, { useState } from 'react';
import Layout from '@theme/Layout';
import contents from '../team-data';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Teams () {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Team`}
      description="Meet our teams of scientists and problem solvers."
    >
      <main className="py-5 container">
        <h1 className="text-5xl text-center uppercase my-14">Meet our team</h1>
        {Object.entries(contents).map(([key, value], ci) => 
          <div key={ci} className="mb-10">
            <h2 className="text-3xl mb-5">{key}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 justify-center">
              {value.map((d, pi) => 
                <div key={pi}>
                  <img className="mb-3 rounded-lg aspect-square w-[250px] md:w-[300px]" src={siteConfig.baseUrl + d.img} />
                  <h3 className="text-base font-bold mb-1">{d.name}</h3>
                  <div className="text-sm text-gray-300">{d.role}</div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </Layout>
  )
}