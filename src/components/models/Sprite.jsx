/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Dasha Klyusova (https://sketchfab.com/AnoFail)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hollow-knight-5a76d93e39984f829abd6f406562265b
Title: Hollow Knight
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export default function Sprite(props) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb');

  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    console.log(state.clock)
    modelRef.current.position.y = -0.85 + Math.sin(state.clock.elapsedTime) * 0.15
  })

  return (
    <group {...props} dispose={null}
      ref={modelRef}
      position={[0, -0.85, 0]}
      scale={[3, 3, 3]}
      rotation={[0.05, -0.85, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['null']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials['None.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.068}
      />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')
