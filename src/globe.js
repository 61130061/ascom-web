// import ThreeGlobe from 'three-globe';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';

import countries from '../static/countries.json';
import globeTextureUrl from '../static/earth-water.png';

class Globe {
  constructor(clientWindow) {
    this.HEIGHT = 920;
    this.window = clientWindow;

    const ThreeGlobe = require('three-globe');

    this.globe = new ThreeGlobe.default()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .atmosphereColor("#2563eb")
      .atmosphereAltitude(0.3)
      .polygonsData(
        countries.features.filter((d) => d.properties.ISO_A2 !== "AQ")
      )
      .polygonCapColor(() => "rgba(24, 114, 249, 0.2)")
      .polygonSideColor(() => "rgba(167, 200, 249, 0.05)")

    const globeMaterial = this.globe.globeMaterial();
    globeMaterial.bumpScale = 10;
    new THREE.TextureLoader().load(globeTextureUrl, texture => {
      globeMaterial.specularMap = texture;
      globeMaterial.specular = new THREE.Color('blue');
      globeMaterial.color = new THREE.Color('black');
      globeMaterial.emissive = new THREE.Color("rgba(0, 16, 98, 1)");
      globeMaterial.shininess = 0;
    });

    // Setup renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.window.innerWidth, this.HEIGHT);
    this.renderer.setClearColor(0x000000, 0);

    // Setup scene
    this.scene = new THREE.Scene();
    this.scene.add(this.globe);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    this.scene.add(new THREE.DirectionalLight(0x5a54ff, 0.2));

    // Setup camera
    this.camera = new THREE.PerspectiveCamera();
    this.camera.aspect = this.window.innerWidth / this.window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.camera.position.z = 100;
    
    // Add camera controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enablePan = false;
    this.controls.enableDamping = false;
    this.controls.enableZoom = false;
    this.controls.enableRotate = false;
    this.controls.target.set(-0.549814203181327, 109.31088477768138, -6.0841171544877055e-15);
    this.camera.position.set(-0.549814203181327, 109.31088477768138, 136.0374141999787);

    this.animate();

    // Update Screen Resize
    this.window.addEventListener('resize', () => {
      this.camera.aspect = this.window.innerWidth / this.HEIGHT;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.window.innerWidth, this.HEIGHT);
    }, false);
  }

  animate() { // IIFE
    // Frame cycle
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.globe.rotateY(-0.001);
    this.globe.rotateX(-0.0005);
    requestAnimationFrame(this.animate.bind(this));
  }

  render (id) {
    document.getElementById(id).innerHTML = ''; // Ensure to render only one canvas
    document.getElementById(id).appendChild(this.renderer.domElement);
  }
}

export default Globe;