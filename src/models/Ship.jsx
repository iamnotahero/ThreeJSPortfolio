import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect } from 'react'

import ShipScene from '../assets/3d/plane.glb'
const Ship = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(ShipScene);
    const { actions } = useAnimations(animations, ref);
    console.log(
    'Available animations:',
    animations.map((clip) => ({
        name: clip.name,
        duration: clip.duration,
    }))
    );

    useEffect(() => {
        if(isRotating){
            actions["Take 001"].play();
        }else{
            actions["Take 001"].stop();
        }
    }, [isRotating, actions]);
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Ship