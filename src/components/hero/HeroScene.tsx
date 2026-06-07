"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PremiumSculpture from "../three/PremiumSculpture";
import StudioLighting from "../three/StudioLighting";
import Effects from "../three/Effects";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        // Cap pixel ratio: 1.2 is enough for particles — reduces GPU fillrate on retina
        dpr={[1, 1.2]}
        gl={{
          antialias: false,        // Particles don't need AA; saves ~15% GPU bandwidth
          alpha: true,
          powerPreference: "high-performance", // Request dedicated GPU on dual-GPU laptops
          stencil: false,
          depth: false,            // No depth testing needed for flat particle field
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <StudioLighting />
          <PremiumSculpture />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
}
