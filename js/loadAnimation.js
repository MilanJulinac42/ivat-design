import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js";

const container = document.querySelector(".tdlogo-animation");

let camera, scene, renderer;

const mouse = new THREE.Vector2();
const target = new THREE.Vector2();
const windowHalf = new THREE.Vector2(
  window.innerWidth / 2,
  window.innerHeight / 2
);

init();
animate();

function init() {
  const holder = new THREE.Group();
  holder.position.set(-2, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(
    18,
    window.innerWidth / window.innerHeight,
    0.1,
    300
  );
  // camera.position.set(1.8, 0.5, 11);
  camera.rotation.set(0, -0.068, 0);
  camera.position.set(-0.8, 0.7, 11);

  const pmremGenerator = new THREE.PMREMGenerator(renderer);

  scene = new THREE.Scene();

  let light = new THREE.DirectionalLight(0xedb89c, 0.5);
  light.position.set(0, 3, 0);
  light.target.position.set(0, 0, 0);
  light.castShadow = true;
  light.shadow.bias = 0.01;
  light.shadow.mapSize.width = 512;
  light.shadow.mapSize.height = 512;
  light.shadow.camera.near = 0.5;
  light.shadow.camera.far = 500;
  light.shadow.camera.left = 300;
  light.shadow.camera.right = -300;
  light.shadow.camera.top = 300;
  light.shadow.camera.bottom = -300;

  // scene.add(light);
  // scene.add(light.target);

  holder.add(light);
  holder.add(light.target);

  let light2 = new THREE.DirectionalLight(0xedb89c, 0.5);
  light2.position.set(0, 0, 3);
  light2.target.position.set(-0.5, -5, 0);
  light2.castShadow = true;
  light2.shadow.bias = 0.01;
  light2.shadow.mapSize.width = 512;
  light2.shadow.mapSize.height = 512;
  light2.shadow.camera.near = 0.5;
  light2.shadow.camera.far = 500;
  light2.shadow.camera.left = 5;
  light2.shadow.camera.right = -2;
  light2.shadow.camera.top = 5;
  light2.shadow.camera.bottom = -1;

  // scene.add(light2);
  // scene.add(light2.target);

  holder.add(light2);
  holder.add(light2.target);

  let light3 = new THREE.DirectionalLight(0xedb89c, 0.5);
  light3.position.set(2, 0, 3);
  light3.target.position.set(5, -5, 0);
  light3.castShadow = true;
  light3.shadow.bias = 0;
  light3.shadow.mapSize.width = 512;
  light3.shadow.mapSize.height = 512;
  light3.shadow.camera.near = 0.5;
  light3.shadow.camera.far = 500;
  light3.shadow.camera.right = -50;
  light3.shadow.camera.left = 200;
  light3.shadow.camera.top = -10;
  light3.shadow.camera.bottom = 5;

  // scene.add(light3);
  // scene.add(light3.target);

  holder.add(light3);
  holder.add(light3.target);

  let light4 = new THREE.DirectionalLight(0xedb89c, 0.5);
  light4.position.set(20, 10, -10);
  light4.target.position.set(20, 34, -20);
  light4.castShadow = true;
  light4.shadow.bias = 0.01;
  light4.shadow.mapSize.width = 512;
  light4.shadow.mapSize.height = 512;
  light4.shadow.camera.near = 0.5;
  light4.shadow.camera.far = 500;
  light4.shadow.camera.left = 300;
  light4.shadow.camera.right = -300;
  light4.shadow.camera.top = 300;
  light4.shadow.camera.bottom = -300;

  // scene.add(light4);
  // scene.add(light4.target);

  holder.add(light4);
  holder.add(light4.target);

  let light5 = new THREE.DirectionalLight(0xedb89c, 0.5);
  light5.position.set(0, 10, 0);
  light5.target.position.set(0, 0, 2);

  // scene.add(light5);
  // scene.add(light5.target);

  holder.add(light5);
  holder.add(light5.target);

  // const spotLight = new THREE.SpotLight(0xedb89c, 0.2);
  // spotLight.castShadow = true;
  // spotLight.position.set(0, 0, 0);

  const geometry1 = new THREE.PlaneGeometry(5, 2, 1);

  const material1 = new THREE.ShadowMaterial();
  material1.opacity = 0.2;

  const plane1 = new THREE.Mesh(geometry1, material1);
  plane1.position.set(1.5, 1, -1);
  plane1.receiveShadow = true;

  // scene.add(plane1);
  holder.add(plane1);

  const geometry = new THREE.PlaneGeometry(5, 2, 1);

  const material = new THREE.ShadowMaterial();
  material.opacity = 0.2;

  const plane3 = new THREE.Mesh(geometry, material);
  plane3.position.set(1.5, 0, 0);
  plane3.rotation.set(30, 0, 0);
  plane3.receiveShadow = true;

  //scene.add(plane3);
  holder.add(plane3);

  document.addEventListener("mousemove", onMouseMove, false);

  const loader = new GLTFLoader();
  loader.load("../assets/logoi/video/logo.gltf", async function (glb) {
    glb.scene.traverse((c) => {
      c.castShadow = true;
    });

    // scene.add(glb.scene);
    holder.add(glb.scene);

    scene.add(holder);

    render();
  });
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  target.x = (1 - mouse.x) * 0.002;
  target.y = (1 - mouse.y) * 0.002;

  if (target.x > 1) {
    camera.rotation.y += 0.00008 * (target.x - camera.rotation.y);
  } else {
    camera.rotation.y += 0.00008 * (target.x - camera.rotation.y);
  }

  if (target.y > 1) {
    camera.rotation.x += 0.00008 * (target.y - camera.rotation.x);
  } else {
    camera.rotation.x -= 0.00008 * (target.y - camera.rotation.x);
  }

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function onMouseMove(event) {
  mouse.x = event.clientX - windowHalf.x;
  mouse.y = event.clientY - windowHalf.x;
}
