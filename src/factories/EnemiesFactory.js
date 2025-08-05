import Box from '../custom/Box';
import { boxCollision } from '../utils';

export default class EnemiesFactory {
  constructor() {
    this.enemies = [];
  }

  createEnemy(scene) {
    const enemy = new Box({
      width: 1,
      height: 1,
      depth: 1,
      color: '#fe77c6',
      velocity: {
        x: 0,
        y: 0,
        z: 0.005,
      },
      position: {
        x: (Math.random() - 0.5) * 10,
        y: 0,
        z: -20,
      },
      zAcceleration: true,
    });
    enemy.castShadow = true;

    scene.add(enemy);
    this.enemies.push(enemy);
  }

  update(ground, cube, animationId) {
    this.enemies.forEach((enemyItem) => {
      enemyItem.update(ground);

      if (boxCollision({ box1: cube, box2: enemyItem })) {
        cancelAnimationFrame(animationId);
      }
    });
  }
}
