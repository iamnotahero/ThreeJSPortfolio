import { useGLTF } from '@react-three/drei'
import React from 'react'

import skyScene from '../assets/3d/spacebox.glb';

const Sky = () => {
    const sky = useGLTF(skyScene);
  return (
    <mesh>
        <primitive object={sky.scene} scale={20}/>
    </mesh>
  )
}

export default Sky