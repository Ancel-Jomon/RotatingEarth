import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const h = window.innerHeight;
const w = window.innerWidth;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const asratio = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, asratio, near, far);
camera.position.z = 5;

const scene = new THREE.Scene();

new OrbitControls(camera,renderer.domElement)

const geo = new THREE.SphereGeometry();
const mat = new THREE.MeshStandardMaterial({
 map: new THREE.TextureLoader().load("./textures/00_earthmap1k.jpg")
});

const mesh = new THREE.Mesh(geo, mat);

scene.add(mesh);

const hemilight=new THREE.HemisphereLight("rgb(255,255,255)")
const sunlight=new THREE.DirectionalLight("rgb(255,255,255)","rgb(139, 139, 139)")
sunlight.position.set(-1,0,0)
//scene.add(sunlight)
scene.add(hemilight)


function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera);
    
}
animate()