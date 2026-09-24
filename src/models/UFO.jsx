import { useGLTF } from '@react-three/drei'
import React from 'react'

import UFOScene from '../assets/3d/ufo.glb'
const UFO = () => {
    const {scene, animations} = useGLTF(UFOScene);
  return (
    <mesh position={[0,3,0]} scale={0.2} rotation={[0.5,0,0]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default UFO