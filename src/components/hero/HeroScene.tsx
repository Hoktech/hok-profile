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
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
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
