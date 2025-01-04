"use client";

import * as THREE from "three";

export function useThree() {
  const initScene = (container: HTMLElement) => {
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create particles
    const particles = new THREE.Group();
    const particleGeometry = new THREE.SphereGeometry(0.05);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("hsl(221, 83%, 53%)"),
      transparent: true,
      opacity: 0.6,
    });

    for (let i = 0; i < 100; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      particles.add(particle);
    }

    scene.add(particles);

    return { scene, camera, renderer, particles };
  };

  const animate = (
    scene: THREE.Scene,
    camera: THREE.Camera,
    renderer: THREE.WebGLRenderer,
    particles: THREE.Group
  ) => {
    const animateFrame = () => {
      requestAnimationFrame(animateFrame);

      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animateFrame();
  };

  return { initScene, animate };
}