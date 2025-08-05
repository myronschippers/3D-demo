import * as THREE from 'three';

import Box from '../custom/Box';

const ground = new Box({
  width: 10,
  height: 0.5,
  depth: 50,
  color: '#54b892',
  // color: '#0369a1',
  // color: '#3b9f3e',
  position: {
    x: 0,
    y: -2,
    z: 0,
  },
});

ground.receiveShadow = true;
// ground.position.y = -2;

export default ground;
