import * as THREE from 'three';

const light = new THREE.DirectionalLight(0xffffff, 1);

light.position.y = 3;
light.position.z = 1;
light.castShadow = true;

export default light;
