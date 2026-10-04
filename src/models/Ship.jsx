import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect } from 'react'

import ShipScene from '../assets/3d/blockbenchshipnoparticle.glb'
const Ship = ({isRotating, rotationSpeed, runShipAnimation, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(ShipScene);
    const { actions } = useAnimations(animations, ref);

        console.log(
        'Available animations SHIP:',
        animations.map((clip) => ({
            name: clip.name,
            duration: clip.duration,
        }))
        );
    useEffect(() => {
        if(isRotating || runShipAnimation){
            actions["animation.model.new"].play();
        }else{
            actions["animation.model.new"].stop();
        }
    }, [isRotating, runShipAnimation, actions]);
  return (
    <mesh {...props} ref={ref} rotation={[0,3.2, 0]} >
        <primitive object={scene} />
    </mesh>
  )
}

export default Ship