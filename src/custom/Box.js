import * as THREE from 'three';

import { boxCollision } from '../utils';

export default class Box extends THREE.Mesh {
  constructor({
    width,
    height,
    depth,
    color = '#646cff',
    velocity = { x: 0, y: 0, z: 0 },
    position = { x: 0, y: 0, z: 0 },
    zAcceleration = false,
  }) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({ color });

    super(geometry, material);

    this.gravity = -0.005;
    this.jumpCount = 0;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.velocity = velocity;
    this.zAcceleration = zAcceleration;

    // The readOnly position property needs to be set before the
    // calculation of bottom and top for correct positioning
    this.position.set(position.x, position.y, position.z);
  }

  get top() {
    return this.position.y + this.height / 2;
  }

  get bottom() {
    return this.position.y - this.height / 2;
  }

  get right() {
    return this.position.x + this.width / 2;
  }

  get left() {
    return this.position.x - this.width / 2;
  }

  get front() {
    return this.position.z + this.depth / 2;
  }

  get back() {
    return this.position.z - this.depth / 2;
  }

  jump() {
    if (this.jumpCount < 2) {
      this.jumpCount++;
      this.velocity.y = 0.12;
    }
  }

  update(ground) {
    if (this.zAcceleration) {
      this.velocity.z += 0.0003;
    }

    this.position.x += this.velocity.x;
    this.position.z += this.velocity.z;

    this.applyGravity(ground);
  }

  applyGravity(ground) {
    this.velocity.y += this.gravity;

    // this is where the box has hit the ground
    if (
      // ground && this.bottom + this.velocity.y <= ground.top
      boxCollision({ box1: this, box2: ground })
    ) {
      this.jumpCount = 0;
      // adding friction so the velocity is reduced when it hits the ground
      const friction = 0.5;
      this.velocity.y *= friction;
      // adding bounce when the ground is hit
      this.velocity.y = -this.velocity.y;
    } else {
      this.position.y += this.velocity.y;
    }
  }
}
