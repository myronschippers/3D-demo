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

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

window.addEventListener('keydown', (keydownEvent) => {
  switch (keydownEvent.code) {
    case 'KeyA':
      // move cube to the left
      // cube.velocity.x = -0.01;
      keys.a.pressed = true;
      break;
    case 'KeyD':
      // move cube to the right
      // cube.velocity.x = 0.01;
      keys.d.pressed = true;
      break;
    default:
      return;
  }
});

window.addEventListener('keyup', (keydownEvent) => {
  switch (keydownEvent.code) {
    case 'KeyA':
      // stop cube from moving left
      keys.a.pressed = false;
      break;
    case 'KeyD':
      // stop cube from moving right
      keys.d.pressed = false;
      break;
    default:
      return;
  }
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cube.velocity.x = 0;
  if (keys.a.pressed) {
    cube.velocity.x = -0.01;
  } else if (keys.d.pressed) {
    cube.velocity.x = 0.01;
  }

  cube.update(ground);
}
animate();
