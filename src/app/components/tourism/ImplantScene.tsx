import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";

/* ================================================================
   Procedural Dental Implant — Titanium Grade 5 material
   Screw-thread profile generated via LatheGeometry
   ================================================================ */

function ImplantFixture() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // Generate screw thread profile using lathe geometry
  const threadGeometry = useMemo(() => {
    const points: THREE.Vector2[] = [];
    const bodyTop = 0.8;
    const bodyBottom = -1.6;
    const bodyLength = bodyTop - bodyBottom;
    const threadCount = 14;
    const threadDepth = 0.04;
    const steps = threadCount * 8;

    // Abutment top cap
    points.push(new THREE.Vector2(0, 1.3));
    points.push(new THREE.Vector2(0.22, 1.3));
    points.push(new THREE.Vector2(0.22, 1.15));

    // Collar / neck
    points.push(new THREE.Vector2(0.28, 1.15));
    points.push(new THREE.Vector2(0.30, 1.05));
    points.push(new THREE.Vector2(0.32, 0.95));
    points.push(new THREE.Vector2(0.33, bodyTop));

    // Threaded body with taper
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const y = bodyTop - t * bodyLength;
      // Gradually taper the radius toward the apex
      const taper = 1 - t * 0.35;
      const baseRadius = 0.32 * taper;
      // Screw thread: sine wave on the radius
      const threadPhase = (i / steps) * threadCount * Math.PI * 2;
      const threadOffset = Math.sin(threadPhase) * threadDepth * taper;
      points.push(new THREE.Vector2(baseRadius + threadOffset, y));
    }

    // Apex (rounded tip)
    const apexR = 0.32 * 0.65;
    points.push(new THREE.Vector2(apexR * 0.6, bodyBottom - 0.05));
    points.push(new THREE.Vector2(apexR * 0.3, bodyBottom - 0.15));
    points.push(new THREE.Vector2(0, bodyBottom - 0.2));

    return new THREE.LatheGeometry(points, 64);
  }, []);

  // Crown geometry - simple rounded shape on top
  const crownGeometry = useMemo(() => {
    const points: THREE.Vector2[] = [];
    points.push(new THREE.Vector2(0, 1.9));
    points.push(new THREE.Vector2(0.15, 1.9));
    points.push(new THREE.Vector2(0.28, 1.85));
    points.push(new THREE.Vector2(0.35, 1.75));
    points.push(new THREE.Vector2(0.38, 1.6));
    points.push(new THREE.Vector2(0.35, 1.45));
    points.push(new THREE.Vector2(0.25, 1.35));
    points.push(new THREE.Vector2(0.22, 1.3));
    points.push(new THREE.Vector2(0, 1.3));
    return new THREE.LatheGeometry(points, 64);
  }, []);

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      {/* Implant fixture (screw body) — Titanium Grade 5 */}
      <mesh geometry={threadGeometry}>
        <meshStandardMaterial
          color="#C0C0C0"
          metalness={1.0}
          roughness={0.3}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Abutment / crown — Ceramic white */}
      <mesh geometry={crownGeometry}>
        <meshStandardMaterial
          color="#E8E4D8"
          metalness={0.1}
          roughness={0.4}
          envMapIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

/* ================================================================
   Pyramid wireframe — subtle background element
   ================================================================ */

function PyramidWireframe({ position, scale, opacity }: { position: [number, number, number]; scale: number; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });

  const geo = useMemo(() => new THREE.ConeGeometry(1, 1.4, 4), []);

  return (
    <mesh ref={ref} geometry={geo} position={position} scale={scale}>
      <meshBasicMaterial
        color="#D4AF37"
        wireframe
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

/* ================================================================
   Orbital ring — decorative element
   ================================================================ */

function OrbitalRing({ radius, speed, opacity }: { radius: number; speed: number; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
      ref.current.rotation.x += delta * speed * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshBasicMaterial color="#D4AF37" transparent opacity={opacity} />
    </mesh>
  );
}

/* ================================================================
   The full 3D scene - exported for use in the hero
   ================================================================ */

export function ImplantScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="w-80 h-80 md:w-[420px] md:h-[420px] mx-auto"
    >
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Ambient fill */}
        <ambientLight intensity={0.3} />

        {/* Key light — warm from upper-left */}
        <directionalLight
          position={[3, 4, 2]}
          intensity={1.2}
          color="#FFFAF0"
        />

        {/* Rim light — catches screw thread edges for drama */}
        <directionalLight
          position={[-3, 1, -2]}
          intensity={2.0}
          color="#D4AF37"
        />

        {/* Bottom fill — subtle gold uplighting */}
        <pointLight
          position={[0, -3, 1]}
          intensity={0.5}
          color="#C5A55A"
        />

        {/* Back rim — edge separation against dark bg */}
        <directionalLight
          position={[0, 0, -4]}
          intensity={1.5}
          color="#FFFFFF"
        />

        {/* Environment for realistic reflections */}
        <Environment preset="city" />

        {/* Floating implant */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          <ImplantFixture />
        </Float>

        {/* Background pyramids */}
        <PyramidWireframe position={[-1.5, -1.2, -2]} scale={0.8} opacity={0.12} />
        <PyramidWireframe position={[0, -1.0, -3]} scale={1.2} opacity={0.08} />
        <PyramidWireframe position={[1.8, -1.3, -2.5]} scale={0.6} opacity={0.10} />

        {/* Orbital rings */}
        <OrbitalRing radius={1.8} speed={0.15} opacity={0.08} />
        <OrbitalRing radius={2.2} speed={-0.1} opacity={0.05} />
      </Canvas>
    </motion.div>
  );
}
