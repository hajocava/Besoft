import React, { useState } from 'react'
import StepWizard from 'react-step-wizard'
import Nav from './Nav'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import Three from './ThreeStep'
import Four from './FourStep'
import Formulario from './FiveStep'
import Success from './Success'

export default function Build() {
    const initialState = {
        type: '',
        size: '',
        project: '',
        time: ''
    }

    const [state, setState] = useState(initialState)

    const sendValue = (value, currentStep) => {
        switch (currentStep) {
            case 1:
                setState({ ...state, type: value })
                break
            case 2:
                setState({ ...state, size: value })
                break
            case 3:
                setState({ ...state, project: value })
                break
            case 4:
                setState({ ...state, time: value })
                break
            default:
                console.log('No se selecciono ningun card valido')
                break
        }
    }

    return (
        <div className="project section">
            <StepWizard nav={<Nav />} transitions={{}} >
                <FirstStep sendValue={sendValue} />
                <SecondStep sendValue={sendValue} />
                <Three sendValue={sendValue} />
                <Four sendValue={sendValue} />
                <Formulario data={state} />
                <Success />
            </StepWizard>
        </div>
    )
}
