import * as THREE from 'three';

export default class Box extends THREE.Mesh {
  constructor({
    width,
    height,
    depth,
    color = '#646cff',
    velocity = { x: 0, y: 0, z: 0 },
  }) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({ color });

    super(geometry, material);

    this.width = width;
    this.height = height;
    this.depth = depth;
    this.velocity = velocity;

    this.bottom = this.position.y - this.height / 2;
    this.top = this.position.y + this.height / 2;
  }

  update() {
    this.bottom = this.position.y - this.height / 2;
    this.top = this.position.y + this.height / 2;

    this.position.y += this.velocity.y;
  }
}
