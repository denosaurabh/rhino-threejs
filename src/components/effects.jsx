import React, { useEffect, useRef } from "react";
import * as THREE from 'three' 
import dynamic from 'next/dynamic'
import {
    EffectComposer,
    GodRays,
    ToneMapping,
    BrightnessContrast,
} from '@react-three/postprocessing';
import { ToneMappingMode, BlendFunction, KernelSize, Resizer } from 'postprocessing'

import Sun from '@/components/sun';

const Effects = () => {
    const sunRef = useRef();

    return (
        <>

            {/* <Sun ref={sunRef} /> */}

            {
                sunRef.current && (
                    <EffectComposer>
                        {/* <GodRays
                            sun={sunRef.current}
                            blendFunction={BlendFunction.Screen}
                            samples={60}
                            density={0.95}
                            decay={1}
                            weight={0.3}
                            exposure={0.8}
                            clampMax={1}
                            width={Resizer.AUTO_SIZE}
                            height={Resizer.AUTO_SIZE}
                            kernelSize={KernelSize.SMALL}
                            blur={true}
                        /> */}

                        {/* <ToneMappingMode mode={THREE.ACESFilmicToneMapping} /> */}


                    </EffectComposer>


                )
            }

        </>
    )
}

export default Effects;