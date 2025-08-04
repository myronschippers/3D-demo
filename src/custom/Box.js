import * as THREE from 'three';

export default class Box extends THREE.Mesh {
  constructor({
    width,
    height,
    depth,
    color = '#646cff',
    velocity = { x: 0, y: 0, z: 0 },
    position = { x: 0, y: 0, z: 0 },
  }) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({ color });

    super(geometry, material);

    this.gravity = -0.005;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.velocity = velocity;

    // The readOnly position property needs to be set before the
    // calculation of bottom and top for correct positioning
    this.position.set(position.x, position.y, position.z);

    this.bottom = this.position.y - this.height / 2;
    this.top = this.position.y + this.height / 2;
  }

  update(ground) {
    this.bottom = this.position.y - this.height / 2;
    this.top = this.position.y + this.height / 2;

    this.position.x += this.velocity.x;
    this.position.z += this.velocity.z;
    this.applyGravity(ground);
  }

  applyGravity(ground) {
    this.velocity.y += this.gravity;

    // this is where the box has hit the ground
    if (ground && this.bottom + this.velocity.y <= ground.top) {
      // adding friction so the velocity is reduced when it hits the ground
      this.velocity.y *= 0.8;
      // adding bounce when the ground is hit
      this.velocity.y = -this.velocity.y;
    } else {
      this.position.y += this.velocity.y;
    }
  }
}
