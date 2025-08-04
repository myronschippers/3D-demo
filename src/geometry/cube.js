import * as THREE from 'three';

import Box from '../custom/Box';

const cube = new Box({ width: 1, height: 1, depth: 1, color: '#646cff' });

cube.castShadow = true;

export default cube;
