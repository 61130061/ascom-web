import React, { useRef, useEffect } from 'react';
import ThreeGlobe from 'three-globe';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';

import countries from '../assets/countries.json';
import globeTextureUrl from '../assets/earth-water.png';

let HEIGHT = 920;

const globe = new ThreeGlobe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .atmosphereColor("#2563eb")
  .atmosphereAltitude(0.3)
  .polygonsData(
    countries.features.filter((d) => d.properties.ISO_A2 !== "AQ")
  )
  .polygonCapColor(() => "rgba(24, 114, 249, 0.2)")
  .polygonSideColor(() => "rgba(167, 200, 249, 0.05)")

const globeMaterial = globe.globeMaterial();
globeMaterial.bumpScale = 10;
new THREE.TextureLoader().load(globeTextureUrl, texture => {
  globeMaterial.specularMap = texture;
  globeMaterial.specular = new THREE.Color('blue');
  globeMaterial.color = new THREE.Color('black');
  globeMaterial.emissive = new THREE.Color("rgba(0, 16, 98, 1)");
  globeMaterial.shininess = 0;
});

// Setup renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, HEIGHT);
renderer.setClearColor(0x000000, 0);

// Setup scene
const scene = new THREE.Scene();
scene.add(globe);
scene.add(new THREE.AmbientLight(0xffffff, 0.75));
scene.add(new THREE.DirectionalLight(0x5a54ff, 0.2));


// Setup camera
const camera = new THREE.PerspectiveCamera();
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
camera.position.z = 100;

// Add camera controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableDamping = false;
controls.enableZoom = false;
controls.enableRotate = false;

controls.target.set(-0.549814203181327, 109.31088477768138, -6.0841171544877055e-15);
camera.position.set(-0.549814203181327, 109.31088477768138, 136.0374141999787);

// Kick-off renderer
(function animate() { // IIFE
  // Frame cycle
  controls.update();
  renderer.render(scene, camera);
  globe.rotateY(-0.001);
  globe.rotateX(-0.0005);
  requestAnimationFrame(animate);
})();

// Update Screen Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / HEIGHT;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, HEIGHT);
}, false);


export default function Hero () {

  useEffect(() => {
    document.getElementById('globe').innerHTML = ''; // Ensure to render only one canvas
    document.getElementById('globe').appendChild(renderer.domElement);
  }, []);

  return (
    <div className="h-[920px] relative">
      <div className="absolute top-0 left-0 z-[20] w-full h-full bg-transparent" />
      <div id="globe" />
      <div className="hero-divide absolute h-[240px] left-0 bottom-0 right-0" />
      <div className="absolute mt-28 md:mt-44 left-0 top-0 right-0 z-[30]">
        <div className="flex flex-col gap-10 items-center z-20 px-5">
          <h1 className="max-w-[1080px] text-4xl sm:text-5xl md:text-6xl font-extrabold text-center">
            Air-Space Control, Optimazition, and Management <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-pink-500">Laboratory</span>
          </h1>
          <div className="max-w-[640px] text-center text-xl md:text-2xl">
            focus on Intelligent Aerospace Technology and project to the frontier research of Air-Space control, optimization, and management system.
          </div>
        </div>
      </div>
    </div>
  )
}