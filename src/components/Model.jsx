import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

function Modelo({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      // Rotación base FIJA: la que mostraba la cara principal. No se toca nunca.
      ref.current.rotation.set(-Math.PI / 2, Math.PI, Math.PI);
    }
  }, [scene]);

  return <primitive ref={ref} object={scene} position={[0, 0, 0]} scale={1} />;
}

export default function Modelo3D() {
  const isMobile = useIsMobile();

  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, isMobile ? 10 : 5], fov: 60 }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 2]} intensity={0.5} />

      {/* Este group rota en el eje de la CÁMARA (mundo), no en el eje local del objeto */}
      <group rotation={[0, 0, isMobile ? Math.PI / 2 : 0]}>
        <Modelo url="/driverlicence.glb" />
      </group>

      <OrbitControls />
    </Canvas>
  );
}