import { useAnimations, useGLTF, Text} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {useRef, useEffect} from 'react'

import UFOScene from '../assets/3d/ufo.glb'
const UFO = () => {
    const {scene, animations} = useGLTF(UFOScene);
    const UFOref = useRef();
    const { actions } = useAnimations(animations, UFOref);
        // console.log(
        // 'Available animations UFO:',
        // animations.map((clip) => ({
        //     name: clip.name,
        //     duration: clip.duration,
        // }))
        // );
    useEffect(() => {
        actions["ArmatureAction.001"].play();
    }, [actions]);
    useFrame((state) => {
    if (!UFOref.current) return;

    const time = state.clock.getElapsedTime();

    UFOref.current.position.x = Math.sin(time * 0.5) * 6;
    UFOref.current.position.y = 2 + Math.sin(time * 1.5) * 0.25;
    UFOref.current.position.z = Math.cos(time * 0.5) * 0.8;

    UFOref.current.rotation.z = Math.sin(time * 1.5) * 0.12;
    UFOref.current.rotation.y += 0.005;
    });


  return (
    <mesh position={[0,3,0]} 
    scale={0.2} 
    rotation={[0.5,0,0]} 
    ref={UFOref}>
        <primitive object={scene} />
        {/* <Text
        position={[0, 1.5, 0]}
        fontSize={0.35}
        color="white"
        anchorX="center"
        anchorY="middle"
        billboard
        >
        UFO
        </Text> */}
    </mesh>
  )
}

export default UFO