import React from "react";
import { Html } from "@react-three/drei";

const Point = ({
    position,
    id,
    onMarkerClicked,
}) => {

    return (
        <mesh position={position}>
            <Html scaleFactor={100}>
                <div className="annotation" onClick={() => onMarkerClicked(id)} />
            </Html>
        </mesh>
    );
}

export default Point;