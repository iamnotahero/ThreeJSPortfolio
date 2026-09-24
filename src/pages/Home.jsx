import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Space  from '../models/Space';
import Sky from '../models/Sky';
import UFO from '../models/UFO';
import Ship from '../models/Ship';
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex'>
        POPUP
      </div> */}
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const adjustSpaceForSreenSize = () => {
    let screenScale = null;
    let screenPosition = [0,-1,-5];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768){
      screenScale = [0.9,0.9,0.9];
    }else{
      screenScale = [1,1,1];
    }
    return [screenScale, screenPosition, rotation];
  }

    const adjustShipForSreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5];
      screenPosition = [0, -1.5,0]
    }else{
      screenScale = [3,3,3];
      screenPosition = [0,-0.5,-4]
    }
    return [screenScale, screenPosition];
  }

  const [spaceScale, spacePosition, spaceRotation] = adjustSpaceForSreenSize();
  const [shipScale, shipPosition] = adjustShipForSreenSize();
  return (
    <section className="w-full h-screen relative">
      <Loader />
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near: 0.1, far: 1000}}>
        <Suspense>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Sky/>
          <UFO />
          <Ship 
            isRotating={isRotating}
            position={shipPosition}
            scale={shipScale}
            rotation={[0,20,0]}
          />
          <Space 
            position={spacePosition}
            scale={spaceScale}
            rotation={spaceRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home