import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center><p style={{ width: 'max-content' }}>{progress} % loaded ({loaded} out of {total})</p></Html>
}

export default Loader;