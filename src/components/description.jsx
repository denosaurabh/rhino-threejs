import TopDescription from './descriptions/top'
import HornDescription from './descriptions/horn'
import FaceDescription from './descriptions/face';
import LandDescription from './descriptions/land';
import LegDescription from './descriptions/leg';
import StomachDescription from './descriptions/stomach';
import DefaultDescription from './descriptions/default';

const Description = ({ type, pos, size, flexDirection }) => {

    return (
        <div style={{
            position: 'absolute',
            zIndex: '100',
            display: 'flex',
            flexWrap: 'wrap',
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
    )
}

export default Description;