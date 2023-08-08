import { RefObject } from 'react';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';
import { useLoader, useThree } from '@react-three/fiber';

type Props = {
    url: string,
    stlRef: RefObject<any>,
    scale?: THREE.Vector3,
    position?: THREE.Vector3,
}

const StlModel = (props: Props) => {
    const geom = useLoader(STLLoader, props.url, undefined, (e) => {
        console.log((e.loaded / e.total) * 100 + '% loaded');
    });

    return (
        <mesh position={props.position || undefined} scale={props.scale || undefined} ref={props.stlRef}>
            <primitive object={geom} attach="geometry"/>
            <meshStandardMaterial color="white"/>
            {/* <meshPhongMaterial color="#DAA964"/> */}
        </mesh>
    );
};

export default StlModel;