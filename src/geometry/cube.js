import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: '#646cff' });
const cube = new THREE.Mesh(geometry, material);

export default cube;
