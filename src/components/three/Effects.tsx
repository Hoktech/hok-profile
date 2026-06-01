"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.6}
        luminanceSmoothing={0.9}
        intensity={0.4}
        mipmapBlur
      />
    </EffectComposer>
  );
}
