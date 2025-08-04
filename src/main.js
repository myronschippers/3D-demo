import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import light from './lighting/light';
import ground from './geometry/ground';
import cube from './geometry/cube';

import './style.css';
// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';

const scene = new THREE.Scene();

const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('#demo').appendChild(renderer.domElement);

// viewport maneuvering
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(cube);

scene.add(ground);

scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
animate();
