import { Canvas } from "@react-three/fiber";
import { Stats, Environment, OrbitControls } from "@react-three/drei";
import CoffeeTableModel from "./models/CoffeeTableModel";
import TelevisionModel from "./models/TelevisionModel";
import CouchModel from "./models/CouchModel";

export default function ObjectCanvas() {
    return (
    <Canvas camera={{ position: [-0.5, 1, 2] }}>
        <OrbitControls />
        <Environment 
            files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
            background
            blur={0.5}
        />
        <TelevisionModel />
        <CoffeeTableModel />
        <CouchModel />
        <directionalLight position={[3.3, 1.0, 4.4]} />
        <axesHelper args={[5]}/>
        <Stats />
        
    </Canvas>
    )
}