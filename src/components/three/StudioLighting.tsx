"use client";

import { Environment } from "@react-three/drei";

export default function StudioLighting() {
  return (
    <>
      {/* Key light - main illumination */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        color="#ffffff"
        castShadow={false}
      />

      {/* Fill light - softer from opposite side */}
      <directionalLight
        position={[-3, 3, -5]}
        intensity={0.4}
        color="#c0c0ff"
      />

      {/* Rim light - edge highlight */}
      <directionalLight
        position={[0, -2, -5]}
        intensity={0.6}
        color="#ffffff"
      />

      {/* Subtle ambient */}
      <ambientLight intensity={0.15} color="#ffffff" />

      {/* Point light for inner glow */}
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffffff" distance={5} />

      {/* Environment for reflections */}
      <Environment preset="night" environmentIntensity={0.3} />
    </>
  );
}
