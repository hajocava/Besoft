import React from 'react'

const SecondStep = ({ nextStep, sendValue, currentStep }) => {
    const recolect = () => value => {
        nextStep()
        sendValue(value, currentStep)
    }

    return (
        <div className="cards-container">
            <div className="cards">
                <button onClick={recolect('New Project')} className="card-button">
                    <i className="la la-lightbulb-o"></i>
                    New Project
                </button>
                <button onClick={recolect('Existing Project')} className="card-button">
                    <i className="la la-cubes"></i>
                    Existing Project
                </button>
            </div>
        </div>
    )
}


export default SecondStep