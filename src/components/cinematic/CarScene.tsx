import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Environment } from '@react-three/drei';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

/* ─────────────────────────────────────────────────────────────────────────────
 * Camera waypoints — one per section (S1 → S5)
 *
 * The camera sweeps around the car like a commercial shoot.
 * Ground is y = 0.  Car sits ~1.2 units tall from ground.
 * ───────────────────────────────────────────────────────────────────────────── */
const WAYPOINTS: { pos: THREE.Vector3; tgt: THREE.Vector3 }[] = [
  // S1 Hero — elegant front 3/4 from right, slightly elevated
  { pos: new THREE.Vector3( 2.8,  1.4,  4.8), tgt: new THREE.Vector3(0, 0.55, 0.2) },
  // S2 Match — clean side profile sweep
  { pos: new THREE.Vector3( 5.8,  0.9,  0.3), tgt: new THREE.Vector3(0, 0.55, 0)   },
  // S3 Vehicles — low dramatic front-left (worm's eye)
  { pos: new THREE.Vector3(-2.2,  0.30, 4.2), tgt: new THREE.Vector3(0, 0.75, 0.5) },
  // S4 Coverage — aerial, sees roof + full silhouette
  { pos: new THREE.Vector3( 0.8,  5.8,  3.5), tgt: new THREE.Vector3(0, 0.4,  0)   },
  // S5 CTA — warm front close-up, inviting
  { pos: new THREE.Vector3( 1.6,  0.85, 3.8), tgt: new THREE.Vector3(0, 0.55, 0.2) },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Geometric car — built from Three.js primitives.
 *
 * Proportions (world units, car group at y=0):
 *   Wheels:      radius 0.38  →  center y=0.38,  bottom touches y=0 (ground)
 *   Lower body:  y=0.44       →  occupies 0.18 – 0.70
 *   Upper cabin: y=0.93       →  occupies 0.67 – 1.19  (slight overlap is intentional)
 *   Roof top:    y=1.19
 * ───────────────────────────────────────────────────────────────────────────── */
function Car() {
  // ── shared materials (created once per mount) ──────────────────────────────
  const paint = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#F2EEE4',          // near-white with warm cream tint
    metalness: 0.10,
    roughness: 0.20,
    clearcoat: 1.0,
    clearcoatRoughness: 0.07,
  }), []);

  const glass = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#1B2240',
    metalness: 0.05,
    roughness: 0.06,
    opacity: 0.86,
    transparent: true,
  }), []);

  const tire = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#181818',
    roughness: 0.88,
  }), []);

  const rim = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#C4C4C4',
    metalness: 0.96,
    roughness: 0.04,
  }), []);

  // small emissive materials for lights
  const headMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#F0EFE5',
    emissive: '#FFFCE8',
    emissiveIntensity: 0.9,
  }), []);

  const tailMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#C01010',
    emissive: '#FF2818',
    emissiveIntensity: 0.7,
  }), []);

  const wheelPos: [number, number][] = [
    [-0.95,  1.48],   // front-left
    [ 0.95,  1.48],   // front-right
    [-0.95, -1.48],   // rear-left
    [ 0.95, -1.48],   // rear-right
  ];

  return (
    <group>
      {/* ── Lower body ──────────────────────────────────────────────────── */}
      <mesh material={paint} position={[0, 0.44, 0]}>
        <boxGeometry args={[2.02, 0.52, 4.7]} />
      </mesh>

      {/* ── Upper cabin ─────────────────────────────────────────────────── */}
      <mesh material={paint} position={[0, 0.93, -0.12]}>
        <boxGeometry args={[1.58, 0.52, 2.32]} />
      </mesh>

      {/* ── Front windshield ────────────────────────────────────────────── */}
      <mesh material={glass} position={[0, 0.92, 1.14]}>
        <boxGeometry args={[1.50, 0.46, 0.05]} />
      </mesh>

      {/* ── Rear windshield ─────────────────────────────────────────────── */}
      <mesh material={glass} position={[0, 0.92, -1.26]}>
        <boxGeometry args={[1.50, 0.44, 0.05]} />
      </mesh>

      {/* ── Left side windows ───────────────────────────────────────────── */}
      <mesh material={glass} position={[-0.80, 0.93, -0.12]}>
        <boxGeometry args={[0.05, 0.40, 1.96]} />
      </mesh>

      {/* ── Right side windows ──────────────────────────────────────────── */}
      <mesh material={glass} position={[0.80, 0.93, -0.12]}>
        <boxGeometry args={[0.05, 0.40, 1.96]} />
      </mesh>

      {/* ── Headlights (L + R) ──────────────────────────────────────────── */}
      <mesh material={headMat} position={[-0.64, 0.44, 2.38]}>
        <boxGeometry args={[0.42, 0.12, 0.04]} />
      </mesh>
      <mesh material={headMat} position={[ 0.64, 0.44, 2.38]}>
        <boxGeometry args={[0.42, 0.12, 0.04]} />
      </mesh>

      {/* ── Taillights (L + R) ──────────────────────────────────────────── */}
      <mesh material={tailMat} position={[-0.64, 0.44, -2.38]}>
        <boxGeometry args={[0.42, 0.12, 0.04]} />
      </mesh>
      <mesh material={tailMat} position={[ 0.64, 0.44, -2.38]}>
        <boxGeometry args={[0.42, 0.12, 0.04]} />
      </mesh>

      {/* ── Wheels ──────────────────────────────────────────────────────── */}
      {wheelPos.map(([x, z], i) => (
        <group key={i} position={[x, 0.38, z]}>
          {/* Tyre */}
          <mesh material={tire} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.38, 0.38, 0.27, 28]} />
          </mesh>
          {/* Rim */}
          <mesh material={rim} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.24, 0.24, 0.28, 10]} />
          </mesh>
          {/* Hub cap */}
          <mesh material={rim} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 0.30, 6]} />
          </mesh>
        </group>
      ))}

      {/* ── Front bumper strip ──────────────────────────────────────────── */}
      <mesh material={paint} position={[0, 0.26, 2.40]}>
        <boxGeometry args={[1.95, 0.24, 0.10]} />
      </mesh>

      {/* ── Rear bumper strip ───────────────────────────────────────────── */}
      <mesh material={paint} position={[0, 0.26, -2.40]}>
        <boxGeometry args={[1.95, 0.24, 0.10]} />
      </mesh>

      {/* ── Front grille ────────────────────────────────────────────────── */}
      <mesh position={[0, 0.32, 2.38]}>
        <boxGeometry args={[0.95, 0.16, 0.04]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.6} metalness={0.4} />
      </mesh>
    </group>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * CameraRig — reads scroll progress, lerps camera through WAYPOINTS
 * ───────────────────────────────────────────────────────────────────────────── */
function CameraRig() {
  const { camera } = useThree();
  const rawProgress  = useRef(0);
  const smoothProgress = useRef(0);
  const posVec = useRef(new THREE.Vector3());
  const tgtVec = useRef(new THREE.Vector3());

  useEffect(() => {
    const st = ScrollTrigger.create({
      id: 'car-scene-camera',
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (s) => { rawProgress.current = s.progress; },
    });
    return () => st.kill();
  }, []);

  useFrame(() => {
    // Lerp smoothness: 0.055 ≈ ~half-second ease-in at 60fps
    smoothProgress.current += (rawProgress.current - smoothProgress.current) * 0.055;

    const p = Math.max(0, Math.min(smoothProgress.current * (WAYPOINTS.length - 1), WAYPOINTS.length - 1.001));
    const i = Math.floor(p);
    const t = p - i;

    posVec.current.lerpVectors(WAYPOINTS[i].pos, WAYPOINTS[i + 1].pos, t);
    tgtVec.current.lerpVectors(WAYPOINTS[i].tgt, WAYPOINTS[i + 1].tgt, t);

    camera.position.copy(posVec.current);
    camera.lookAt(tgtVec.current);
  });

  return null;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * CarScene — fixed full-screen canvas, cream background
 * ───────────────────────────────────────────────────────────────────────────── */
export default function CarScene() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        camera={{
          position: [2.8, 1.4, 4.8],
          fov: 42,
          near: 0.1,
          far: 120,
        }}
      >
        {/* Cream background matching brand */}
        <color attach="background" args={['#FFFDF5']} />

        {/* Gentle cream fog fades edges so car feels grounded */}
        <fog attach="fog" args={['#FFFDF5', 14, 38]} />

        <CameraRig />

        {/* ── Lighting — warm studio feel ─────────────────────────────── */}
        {/* Key light: warm overhead */}
        <directionalLight
          position={[6, 10, 7]}
          intensity={2.2}
          color="#FFF8F0"
        />
        {/* Fill light: cool-blue from the left */}
        <directionalLight
          position={[-5, 4, -3]}
          intensity={0.55}
          color="#D4E8FF"
        />
        {/* Rim light: rear right — gives the clearcoat its edge pop */}
        <directionalLight
          position={[-3, 2, -8]}
          intensity={0.8}
          color="#FFFFFF"
        />
        {/* Ambient — soft, keeps shadows from going fully black */}
        <ambientLight intensity={1.1} color="#FFF9F0" />

        <Car />

        {/* Soft drop shadow baked below car */}
        <ContactShadows
          position={[0, 0.02, 0]}
          opacity={0.20}
          scale={12}
          blur={2.8}
          far={5}
          color="#14142A"
        />

        {/* Studio environment reflections — keys the clearcoat nicely */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
