import * as THREE from 'three';

import Box from '../custom/Box';

const ground = new Box({ width: 5, height: 0.5, depth: 10, color: '#54b892' });

ground.receiveShadow = true;
ground.position.y = -2;

export default ground;
