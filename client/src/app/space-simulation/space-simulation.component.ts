import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { Entity } from './entity';

@Component({
  selector: 'app-space-simulation',
  templateUrl: './space-simulation.component.html',
  styleUrls: ['./space-simulation.component.scss']
})
export class SpaceSimulationComponent implements OnInit {

  scene: any = new THREE.Scene();
  scale: number = 1/1000;
  detail: number = 100;
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({antialias: true});
  loader = new THREE.TextureLoader();

  constructor() {
    this.initialize();
  }

  ngOnInit(): void {
  }

  initialize(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor('blue');
    document.body.appendChild(this.renderer.domElement);
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    })

    

    let sun = new Entity(695700*this.scale);
    this.loader.load('/assets/SpaceSimulation/SunTexture.jpg', (texture) => {
      let geometry = new THREE.SphereGeometry(sun.radius, this.detail, this.detail);
      let material = new THREE.MeshBasicMaterial({map: texture, overdraw: 0.5});
      let mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);
    })

    let light = new THREE.DirectionalLight(0xFFFFFF);
    light.position.set(0.5, 0, 1);
    this.scene.add(light);

    this.camera.position.z = 2*sun.radius;
    this.renderer.render(this.scene, this.camera);
  }

  

}
