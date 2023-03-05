import React, { useRef, useEffect } from 'react';
import ThreeGlobe from 'three-globe';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';

let HEIGHT = 840;

const globe = new ThreeGlobe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg');

// Setup renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, HEIGHT);

// Setup scene
const scene = new THREE.Scene();
scene.add(globe);
scene.add(new THREE.AmbientLight(0xbbbbbb));
scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

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
    <div className="bg-black h-[840px] relative">
      <div className="bg-blue-500" id="globe" />
      <div className="hero-divide absolute h-[130px] left-0 bottom-0 right-0" />
      <div className="absolute mt-44 left-0 top-0 right-0">
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