import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Palette tailored to portfolio theme
const PALETTE = [
  '#00f2fe', // Aurora Cyan
  '#a855f7', // Electric Violet
  '#4facfe', // Electric Blue
  '#38bdf8', // Sky Blue
  '#c084fc', // Soft Violet
]

// Single 3D floating geometric shape (Square / Cube, Circle / Torus & Sphere, Triangle / Tetrahedron)
function FloatingShape({ shape, mouseRef }) {
  const groupRef = useRef()
  const initialPos = useRef(shape.position)

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()

    // Continuous 3D rotation
    groupRef.current.rotation.x += shape.rotSpeed[0] * delta
    groupRef.current.rotation.y += shape.rotSpeed[1] * delta
    groupRef.current.rotation.z += shape.rotSpeed[2] * delta

    // Harmonic floating wave
    const floatY = Math.sin(t * shape.floatSpeed + shape.phase) * shape.floatAmp
    const floatX = Math.cos(t * (shape.floatSpeed * 0.7) + shape.phase) * (shape.floatAmp * 0.5)

    // Depth-weighted mouse parallax reaction
    const depthWeight = (shape.position[2] + 6) / 8
    const mouseShiftX = mouseRef.current.x * 0.45 * depthWeight
    const mouseShiftY = mouseRef.current.y * 0.45 * depthWeight

    groupRef.current.position.x = initialPos.current[0] + floatX + mouseShiftX
    groupRef.current.position.y = initialPos.current[1] + floatY + mouseShiftY
    groupRef.current.position.z = initialPos.current[2]
  })

  // Geometry selector with delicate, refined proportions
  const renderGeometry = () => {
    const s = shape.size
    switch (shape.type) {
      case 'square':
        // Slim 3D Cube / Square
        return <boxGeometry args={[s, s, s]} />
      case 'circle':
        // Delicate Torus halo ring or wireframe Sphere
        return shape.subType === 'torus' ? (
          <torusGeometry args={[s * 0.6, s * 0.05, 12, 32]} />
        ) : (
          <sphereGeometry args={[s * 0.45, 10, 10]} />
        )
      case 'triangle':
        // 3D Tetrahedron or 3-sided pyramid
        return shape.subType === 'pyramid' ? (
          <coneGeometry args={[s * 0.5, s * 0.75, 3]} />
        ) : (
          <tetrahedronGeometry args={[s * 0.65, 0]} />
        )
      default:
        return <boxGeometry args={[s, s, s]} />
    }
  }

  return (
    <group ref={groupRef} position={shape.position} rotation={shape.rotation}>
      {/* Subtle translucent inner fill */}
      <mesh>
        {renderGeometry()}
        <meshBasicMaterial
          color={shape.color}
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Sleek, soft luminous wireframe edges */}
      <mesh>
        {renderGeometry()}
        <meshBasicMaterial
          color={shape.color}
          wireframe
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

// Field of mixed geometric shapes: Squares, Circles, Triangles
function MixedGeometricShapesField({ mouseRef }) {
  const containerRef = useRef()

  // Generate an evenly balanced, subtle collection of small geometric shapes
  const shapes = useMemo(() => {
    const items = []
    const types = ['square', 'circle', 'triangle']
    const totalCount = 24 // 8 squares, 8 circles, 8 triangles - clean and spacious

    for (let i = 0; i < totalCount; i++) {
      const type = types[i % 3] // Balanced distribution
      const color = PALETTE[i % PALETTE.length]
      const subType = i % 2 === 0 ? 'torus' : 'sphere'
      const triSubType = i % 2 === 0 ? 'tetra' : 'pyramid'

      // Spread shapes across background with comfortable depth and separation
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 13
      const z = -1.2 - Math.random() * 3.2 // Positioned with clear depth from -1.2 to -4.4

      // Smooth, relaxing tumbling speeds
      const rotSpeed = [
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
      ]

      items.push({
        id: i,
        type,
        subType: type === 'circle' ? subType : triSubType,
        color,
        position: [x, y, z],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        rotSpeed,
        floatSpeed: 0.3 + Math.random() * 0.45,
        floatAmp: 0.14 + Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
        size: 0.22 + Math.random() * 0.16, // Balanced size: noticeable yet non-intrusive (0.22 to 0.38)
      })
    }
    return items
  }, [])

  useFrame((state, delta) => {
    if (!containerRef.current) return
    // Gentle global ambient rotation
    containerRef.current.rotation.y += delta * 0.02
    // Global mouse tilt
    containerRef.current.rotation.x = THREE.MathUtils.lerp(
      containerRef.current.rotation.x,
      mouseRef.current.y * 0.1,
      0.05
    )
    containerRef.current.rotation.z = THREE.MathUtils.lerp(
      containerRef.current.rotation.z,
      mouseRef.current.x * 0.08,
      0.05
    )
  })

  return (
    <group ref={containerRef}>
      {shapes.map((shape) => (
        <FloatingShape key={shape.id} shape={shape} mouseRef={mouseRef} />
      ))}
    </group>
  )
}

// Background soft circular stardust to complement floating geometry
function StarDustField({ count = 75 }) {
  const pointsRef = useRef()

  // Generate round canvas particle texture
  const circleTexture = useMemo(() => {
    if (typeof document === 'undefined') return null
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.3, 'rgba(0, 242, 254, 0.75)')
    gradient.addColorStop(0.7, 'rgba(168, 85, 247, 0.2)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 32, 32)
    return new THREE.CanvasTexture(canvas)
  }, [])

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const c1 = new THREE.Color('#00f2fe')
    const c2 = new THREE.Color('#a855f7')
    const c3 = new THREE.Color('#38bdf8')

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2

      const mixed = i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3
      col[i * 3] = mixed.r
      col[i * 3 + 1] = mixed.g
      col[i * 3 + 2] = mixed.b
    }
    return [pos, col]
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.03
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        map={circleTexture}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function HeroCanvas() {
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const updateSmoothMouse = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06
      requestAnimationFrame(updateSmoothMouse)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    const animId = requestAnimationFrame(updateSmoothMouse)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <StarDustField count={80} />
        <MixedGeometricShapesField mouseRef={mouseRef} />
      </Canvas>

      {/* Atmospheric vignette overlays to blend smoothly into deep obsidian background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08090d]/30 to-[#08090d] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
