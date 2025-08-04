import * as THREE from 'three';

import Box from '../custom/Box';

const cube = new Box({
  width: 1,
  height: 1,
  depth: 1,
  color: '#646cff',
  velocity: { x: 0, y: -0.01, z: 0 },
});

cube.castShadow = true;

export default cube;
