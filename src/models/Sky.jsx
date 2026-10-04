import { useGLTF } from '@react-three/drei'
import { useRef }from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/spacebox.glb';

const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const SkyRef = useRef();
    useFrame((_, delta) => {
        if(isRotating){
            SkyRef.current.rotation.y += 0.25 * delta;
        }
    });
        
  return (
    <mesh ref={SkyRef}>
        <primitive object={sky.scene} scale={50}/>
    </mesh>
  )
}

export default Sky