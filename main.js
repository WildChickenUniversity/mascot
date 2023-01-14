import './style.css'

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(2.5, 2, 5);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#chicken'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


// GridHelper
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

// Load external model
const loader = new GLTFLoader();
let chickenModel
loader.crossOrigin = true;
loader.load('assets/chicken.glb', function (gltf) {
  chickenModel = gltf.scene;
  // chickenModel.traverse((node) => {
  //   if (!node.isMesh) return;
  //   node.material.wireframe = true;
  // });
  scene.add(chickenModel);

});


// Light Effects
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

// Orbit Controlling
var controls = new OrbitControls(camera, renderer.domElement);
controls.rotateSpeed = 0.3;
controls.zoomSpeed = 0.9;

controls.minDistance = 4;
controls.maxDistance = 20;

controls.minPolarAngle = 0; // radians
controls.maxPolarAngle = Math.PI / 2; // radians

controls.enableDamping = true;
controls.dampingFactor = 0.05;


// Randomly gen stars
const addStars = () => {
  const star = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 24, 24), 
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}


Array(500).fill().forEach(addStars)
renderer.render(scene, camera);
const animate = () => {
  requestAnimationFrame(animate);
  chickenModel.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();