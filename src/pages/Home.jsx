import { useEffect, useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Space  from '../models/Space';
import Sky from '../models/Sky';
import UFO from '../models/UFO';
import Ship from '../models/Ship';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [hasStartedRotating, setHasStartedRotating] = useState(false)
  const rotationSpeed = useRef(0);
  const [runShipAnimation, setRunShipAnimation] = useState(true);
  console.log("Run Ship Animation:", runShipAnimation);
  console.log("isRotating:", isRotating);
  const [currentStage , setCurrentStage] = useState(null);
  useEffect(() => {
  if (isRotating) {
    setHasStartedRotating(true)
  }
}, [isRotating])
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
      screenScale = 0.15;
      screenPosition = [-0.3,-0.5,3.2]
    }else{
      screenScale = 0.2;
      screenPosition = [-0.5,-0.5,3.2]
    }
    return [screenScale, screenPosition];
  }

  const [spaceScale, spacePosition, spaceRotation] = adjustSpaceForSreenSize();
  const [shipScale, shipPosition] = adjustShipForSreenSize();
  return (
    // w-full h-screen relative
    <section className="w-full h-screen relative">

      {/* <Loader /> */}
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-white text-2xl font-bold'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      {!hasStartedRotating && (
        <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center">
          <div className="drag-hint glassmorphism flex items-center gap-3 rounded-full px-5 py-3 text-sm text-white shadow-lg">
            <span aria-hidden="true" className="drag-hint-arrow text-xl text-blue-200">
              ↔
            </span>
            <span>Click and drag to rotate</span>
          </div>
        </div>
      )}

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near: 0.1, far: 1000}}>
        <Suspense>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Sky isRotating={isRotating}/>
          <UFO />
          <Ship 
            isRotating={isRotating}
            rotationSpeed={rotationSpeed}
            position={shipPosition}
            scale={shipScale}
            rotation={[0,20,0]}
            runShipAnimation={runShipAnimation}
          />
          <Space 
            position={spacePosition}
            scale={spaceScale}
            rotation={spaceRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            rotationSpeed={rotationSpeed}
            setCurrentStage={setCurrentStage}
            runShipAnimation={runShipAnimation}
            setRunShipAnimation={setRunShipAnimation}
          />
        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home