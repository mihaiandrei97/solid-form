import { Accessor } from "solid-js";

type Props = {
    currentStep: Accessor<number>;
}

export default function Stepper({currentStep}: Props){
    return <div>
        <h1>Step {currentStep()}</h1>
    </div>
}