import * as THREE from 'three';

export default class Box extends THREE.Mesh {
  constructor({ width, height, depth, color }) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({ color });

    super(geometry, material);

    this.width = width;
    this.height = height;
    this.depth = depth;
  }
}
