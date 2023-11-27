import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

export default function CouchModel() {
    const gltf = useLoader(
        GLTFLoader,
        'https://cdn.jsdelivr.net/gh/gedewir/gdaygede-models/Couch/Couch.gltf'
    );
    return(
        <>
            <primitive
                object={gltf.scene}
                scale={0.01}
                position={[0,0.4,2.5]}
            />
        </>
    )

}