/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 art.gltf 
Author: cherkesgiller (https://sketchfab.com/cherkesgiller)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/abstract-design-5f61a7b5eaa64af093d7cd721c9ef5ad
Title: Abstract Design
*/

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/art.gltf')

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01 
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.VoronoiDynoBake_Material_0.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/art.gltf')
