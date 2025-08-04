import * as THREE from 'three';

export default class Box extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: '#646cff' });

    super(geometry, material);
  }
}
