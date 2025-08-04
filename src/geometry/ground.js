import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(5, 0.5, 10);
const material = new THREE.MeshStandardMaterial({ color: '#54b892' });
const ground = new THREE.Mesh(geometry, material);

ground.receiveShadow = true;
ground.position.y = -2;

export default ground;
