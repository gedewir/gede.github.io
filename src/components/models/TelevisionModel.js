import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

export default function TelevisionModel() {
    const gltf = useLoader(
        GLTFLoader,
        'https://cdn.jsdelivr.net/gh/gedewir/gdaygede-models/TV/TV.gltf');
    return (
        <>
            <primitive object={gltf.scene} scale={1}/>
        </>
    )
}