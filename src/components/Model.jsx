import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Modelo({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.set(-Math.PI / 2, Math.PI, Math.PI); // opción 3  // opción 2
    }
  }, [scene]);

  return <primitive ref={ref} object={scene} position={[0, 0, 0]} scale={1} />;
}

export default function Modelo3D() {
  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 2]} intensity={0.5} />
      <Modelo url="/driverlicence.glb" />
      <OrbitControls />
    </Canvas>
  );
}
