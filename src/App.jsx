import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import Cyl from './Cyl'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


const App = () => {

  return (
    <>
    <Canvas flat camera={{ fov: 30 }}>
      <ambientLight />
      <Cyl />
      <EffectComposer>
      {/* <Bloom  
        minmapblur
        intensity={12.0} // The bloom intensity.
        luminanceThreshold={0.36} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={1} // smoothness of the luminance threshold. Range is [0, 1]
      /> */}
      {/* <ToneMapping adaptive/> */}
    </EffectComposer>
    </Canvas >
    {/* <div className="w-full top-0 absolute z-20 bg-black">
       <h3 className='absolute left-1/2  text-6xl top-20 -translate-x-1/2 text-white'>My Portfolio Coming Soon 😉</h3> 
    </div> */}
    </>
  )
}

export default App