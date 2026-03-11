'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function SkillNode({
  position,
  color,
  name,
}: {
  position: [number, number, number];
  color: string;
  name: string;
}) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            wireframe={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

function NeuralConnections({ points }: { points: [number, number, number][] }) {
  const linePoints = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (Math.random() > 0.6) {
          pts.push(points[i], points[j]);
        }
      }
    }
    return pts;
  }, [points]);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(linePoints.flat(), 3));
    return g;
  }, [linePoints]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#00ff88" transparent opacity={0.3} />
    </lineSegments>
  );
}

function SceneContent() {
  const skillPositions = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 12; i++) {
      const theta = (i / 12) * Math.PI * 2 + Math.random() * 0.5;
      const phi = Math.acos(2 * Math.random() - 1) * 0.8;
      const r = 2 + Math.random() * 1.5;
      pts.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi) * 0.5,
        r * Math.sin(phi) * Math.sin(theta),
      ]);
    }
    return pts;
  }, []);

  const colors = ['#00ff88', '#00d4ff', '#bf00ff', '#ff006e', '#d29922'];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#00d4ff" />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
      <NeuralConnections points={skillPositions} />
      {skillPositions.map((pos, i) => (
        <SkillNode
          key={i}
          position={pos as [number, number, number]}
          color={colors[i % colors.length]}
          name={`skill-${i}`}
        />
      ))}
      <OrbitControls
        enableZoom
        enablePan
        minDistance={3}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function Scene3D({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 bg-terminal-bg">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense
          fallback={
            <mesh>
              <sphereGeometry args={[0.5, 16, 16]} />
              <meshBasicMaterial color="#00ff88" wireframe />
            </mesh>
          }
        >
          <SceneContent />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="text-terminal-green text-xs glass px-3 py-2 rounded">
          Drag to rotate · Scroll to zoom · Skills galaxy
        </span>
        <button
          onClick={onClose}
          className="glass px-4 py-2 rounded text-terminal-green text-sm border border-terminal-green/30 hover:bg-terminal-green/10"
        >
          Exit 3D
        </button>
      </div>
    </div>
  );
}
