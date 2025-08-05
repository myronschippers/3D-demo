import Box from '../custom/Box';

const enemy = new Box({
  width: 1,
  height: 1,
  depth: 1,
  color: '#fe77c6',
  velocity: { x: 0, y: 0, z: 0.005 },
  position: { x: 0, y: 0, z: -4 },
});

enemy.castShadow = true;

export default enemy;
