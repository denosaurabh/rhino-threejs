import { useAtom } from "jotai";

import TopDescription from './descriptions/top'
import HornDescription from './descriptions/horn'
import FaceDescription from './descriptions/face';
import LandDescription from './descriptions/land';
import LegDescription from './descriptions/leg';
import StomachDescription from './descriptions/stomach';
import DefaultDescription from './descriptions/default';

import rhinoTypesData from '@/helpers/rhinoTypesData'
import currentRhinoType from "@/helpers/rhinoTypesStore";

const Description = ({ type, pos, size, flexDirection }) => {
    const [currentType ] = useAtom(currentRhinoType)
    const { title, description } = rhinoTypesData[currentType]

    return (
        <>
            <div style={{
                position: 'absolute',
                zIndex: '100',
                display: 'flex',
                flexDirection,
                ...pos,
                ...size,
            }}>
                {type === 'default' ? <DefaultDescription /> : null}
                {type === 'top' ? <TopDescription /> : null}
                {type === 'horn' ? <HornDescription /> : null}
                {type === 'stomach' ? <StomachDescription /> : null}
                {type === 'face' ? <FaceDescription /> : null}
                {type === 'land' ? <LandDescription /> : null}
                {type === 'leg' ? <LegDescription /> : null}
            </div>
            {
                type === 'default' ? (
                    <div className="rhino-type-box">
                        <h1 className="description-heading">{title}</h1>
                        <p className="description-text">{description}</p>
                    </div>
                ) : null
            }
        </>
    )
}

export default Description;