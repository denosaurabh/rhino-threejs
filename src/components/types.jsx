import { useAtom } from "jotai";
import currentRhinoType from "@/helpers/rhinoTypesStore";

const RhinoTypes = ({ setDescription }) => {
    const [, setCurrentRhinoType] = useAtom(currentRhinoType)

    const onRhinoTypeClick = e => {
        const { type } = e.target.dataset;
        setCurrentRhinoType(type)
    }

    return (
        <div className="rhino-types">
            <h5 data-type="one-horned" onClick={onRhinoTypeClick}>
                Greater One Horned
            </h5>
            <h5 data-type="sumatran" onClick={onRhinoTypeClick}>
                Sumatran
            </h5>
            <h5 data-type="javan" onClick={onRhinoTypeClick}>
                Javan
            </h5>
            <h5 data-type="black" onClick={onRhinoTypeClick}>
                Black
            </h5>
            <h5 data-type="white" onClick={onRhinoTypeClick}>
                White
            </h5>
        </div>
    )
}

export default RhinoTypes;