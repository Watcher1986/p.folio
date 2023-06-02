/* eslint-disable react/no-unknown-property */
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(7000), {
    radius: 1.2,
  });

  useFrame((state) => {
    ref.current.rotation.y += 0.001;
    ref.current.rotation.x += 0.001;
    ref.current.rotation.z += 0.001;
    ref.current.scale.set(
      1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1,
      1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1,
      1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    );
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    ref.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    ref.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
