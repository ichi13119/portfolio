import React, { Suspense, useRef } from 'react';
import { useFrame,  Canvas } from 'react-three-fiber';

const Core = () => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry attach='geometry' args={[100, 100, 100]} />
      <meshStandardMaterial
        attach='material'
        color='#00C0FF'
        opacity={0.8}
        roughness={.3}
      />
    </mesh>
  );
};

function Satellite({ speed, factor, url, ...props }) {
  const group = useRef();
  useFrame(({ clock }) => {
    group.current.position.y += Math.cos(clock.getElapsedTime()) * 3;
    group.current.position.y += Math.sin(clock.getElapsedTime()) * 3;
    group.current.rotation.x += 0.01
    group.current.rotation.y += 0.01
    group.current.rotation.z += 0.01
  })

  return (
    <group ref={group} dispose={null}>
      <scene name="Scene" {...props}>
        <mesh ref={group}>
          <boxGeometry attach='geometry' args={[30, 30, 30]} />
          <meshStandardMaterial
            attach='material'
            color='#00C0FF'
            opacity={0.8}
            roughness={.3}
          />
        </mesh>
      </scene>
    </group>
  )
}

    function Satellites() {
      return new Array(300).fill().map((_, i) => {
        const x = (50 + Math.random() * 300) * (Math.round(Math.random()) ? -3 : 3)
        const y = -20 + Math.random() * 100
        const z = -20 + Math.random() * 100
        return <Satellite key={i} position={[x+1, y*20, z*20]} rotation={[1, x > 0 ? Math.PI : 1, 1]} />
      })
    }


const Graphic = () => (
  <div style={{height: '100vh', width: '100%'}}>
    <Canvas camera={{ position: [0, 750, 750]}}>
      <pointLight 
        color='#FFF'
        intensity={1}
        position={[1000, 1000, 1000]}
      />
      <Suspense fallback={null}>
        <Core />
        <Satellites position={[3, -3, 3]}/>
        <Satellites position={[-3, 3, -3]}/>
      </Suspense>
    </Canvas>
  </div>
);

export default Graphic;