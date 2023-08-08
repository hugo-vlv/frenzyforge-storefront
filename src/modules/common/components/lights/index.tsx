import * as THREE from 'three';
import {
    AmbientLight,
    DirectionalLight,
    PointLight,
    DirectionalLightHelper,
    PointLightHelper,
} from 'three';
import { RefObject, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { useHelper } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

type Props = {
    directionalLightRef: RefObject<any>,
    pointLightRef: RefObject<any>,
    directionalLightPosition: THREE.Vector3,
}

let direction = 'right';

const Lights = (props: Props) => {
    useHelper(props.directionalLightRef, DirectionalLightHelper, 1, 'green');
    useHelper(props.pointLightRef, PointLightHelper, 1, 'red');
    // const lightTexture = useLoader(TextureLoader, 'textures/disturb.jpg');

    const secondaryDirectionalLightRef = useRef<DirectionalLight>(null!);
    useHelper(secondaryDirectionalLightRef, DirectionalLightHelper, 1, 'orange');

    // useFrame(({clock}) => {
    //   if (props.pointLightRef.current) {
    //     if (direction === 'right' && props.pointLightRef.current.position.x >= 1) {
    //         direction = 'left';
    //     }
    //     else if (direction === 'left' && props.pointLightRef.current.position.x <= -2) {
    //         direction = 'right';
    //     }
    //     props.pointLightRef.current.position.x += direction === 'right' ? .02 : -.02;        
    //   }
    // });
    
    return (
        <>
            {/* <ambientLight color="#FFF" intensity={0.5} /> */}
            <directionalLight
                ref={props.directionalLightRef}
                position={props.directionalLightPosition}
                color="#f0e6d0"
                intensity={.7}
            />
            <pointLight
                ref={props.pointLightRef}
                color="#daa964"
                position={[-2, 0, 0]}
                intensity={1}
                distance={100}
            />
        </>
    );
};

export default Lights;