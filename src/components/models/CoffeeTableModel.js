import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

export default function CoffeeTableModel() {
    const gltf = useLoader(
        GLTFLoader,
        'https://cdn.jsdelivr.net/gh/gedewir/gdaygede-models/Coffee-Table/Coffee-Table.gltf');
        return(
            <>
                <primitive 
                    object={gltf.scene} 
                    scale={0.01} 
                    position={[0, 0, 1.2]}
                    rotation={[0,1.55,0]}/>
            </>
        )
}