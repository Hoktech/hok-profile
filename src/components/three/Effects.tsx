"use client";

import { useEffect, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Effects() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Disable postprocessing entirely on mobile to save GPU cycles and prevent frame drops/TBT lag
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (!isDesktop) return null;

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
