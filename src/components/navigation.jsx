import { useThree } from "@react-three/fiber";

const Navigation = ({ cameraPosition }) => {
    const { camera } = useThree();
    camera.position.set(...cameraPosition);
    return null;
}

export default Navigation;