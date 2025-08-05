import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import light from './lighting/light';
import ground from './geometry/ground';
import cube from './geometry/cube';
import enemy from './geometry/enemy';
import {
  MOVEMENT_VELOCITY_POSITIVE,
  MOVEMENT_VELOCITY_NEGATIVE,
} from './constants';

import './style.css';
import { boxCollision } from './utils';
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
scene.add(enemy);

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
  w: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
};

window.addEventListener('keydown', (keydownEvent) => {
  switch (keydownEvent.code) {
    case 'KeyA':
      // move cube to the left
      keys.a.pressed = true;
      break;
    case 'KeyD':
      // move cube to the right
      keys.d.pressed = true;
      break;
    case 'KeyW':
      // move cube to forward
      keys.w.pressed = true;
      break;
    case 'KeyS':
      // move cube to backward
      keys.s.pressed = true;
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
    case 'KeyW':
      // move cube to forward
      keys.w.pressed = false;
      break;
    case 'KeyS':
      // move cube to backward
      keys.s.pressed = false;
      break;
    default:
      return;
  }
});

const enemies = [enemy];

function animate() {
  const animationId = requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cube.velocity.x = 0;
  if (keys.a.pressed) {
    cube.velocity.x = MOVEMENT_VELOCITY_NEGATIVE;
  } else if (keys.d.pressed) {
    cube.velocity.x = MOVEMENT_VELOCITY_POSITIVE;
  }

  cube.velocity.z = 0;
  if (keys.w.pressed) {
    cube.velocity.z = MOVEMENT_VELOCITY_NEGATIVE;
  } else if (keys.s.pressed) {
    cube.velocity.z = MOVEMENT_VELOCITY_POSITIVE;
  }

  enemies.forEach((enemyItem) => {
    enemyItem.update(ground);
    if (boxCollision({ box1: cube, box2: enemyItem })) {
      cancelAnimationFrame(animationId);
    }
  });
  cube.update(ground);
}
animate();
