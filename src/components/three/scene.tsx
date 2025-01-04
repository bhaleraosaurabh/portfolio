"use client";

import { useThree } from "@/hooks/useThree";
import { useEffect, useRef } from "react";

export function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { initScene, animate } = useThree();

  useEffect(() => {
    if (!containerRef.current) return;

    const { scene, camera, renderer, particles } = initScene(containerRef.current);

    animate(scene, camera, renderer, particles);

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [initScene, animate]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      style={{ background: "transparent" }}
    />
  );
}