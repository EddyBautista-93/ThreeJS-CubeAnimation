import * as THREE from '../node_modules/three/build/three.module'

// Module used to allow click and drag functionality 
import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls'

// Parent object where we place all the rendered object 
const scene = new THREE.Scene();
/* Perspective Camera taking in 4 parameters:

 - Field of view - number in degrees that represents the vertical FOV.
 - Aspect Ratio - This is the ratio between the width and the height of the scene 
   , to make sure we don't squish the objects we use innerWidth and innerHeight.
 - Near Clipping Plane: Boundary plane of the camera, anything closer to the value of the 
   , camera won't be registered. 
 - Near Clipping Plane: Like near clipping but anything further. 
*/
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, )

// Here create a WebGL renderer object to render objects. 
const renderer = new THREE.WebGL1Renderer({antialias: true});

// Sets the scene color ,(second argument optional ) you can pass in a float anywhere between 0 - 1 for opacity
renderer.setClearColor("#233143");

// Sets the size of our app.
renderer.setSize(window.innerWidth, window.innerHeight);

//adds the object to the <canvas></canvas> tag in our html document.
document.body.appendChild(renderer.domElement);


/*
We used set size to make sure the app can fit in any screen but we want to
add the below settings if a user changes window sizes.
*/

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix(); // apply the changes.
});

