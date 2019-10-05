import React from 'react'

const FirstStep = ({ nextStep, sendValue, currentStep }) => {

    const recolect = () => value => {
        nextStep()
        sendValue(value, currentStep)
    }

    return (
        <div className="cards-container">
            <div className="cards">
                <button onClick={recolect('Mobile App')} className="card-button">
                    <i className="la la-code"></i>
                    Web Development
                </button>
                <button onClick={recolect('Web Development')} className="card-button">
                    <i className="la la-mobile-phone"></i>
                    Movil App Development
                </button>
                <button onClick={recolect('User Interface')} className="card-button">
                    <i className="la la-briefcase"></i>
                    Conversational User Interface
                </button>
                <button onClick={recolect('Ux Design')} className="card-button">
                    <i className="la la-paint-brush"></i>
                    Ux Design & Workshops
                </button>
                <button onClick={recolect('Other')} className="card-button">
                    <i className="la la-lightbulb-o"></i>
                    Other
                </button>
            </div>
        </div>
    )
}

export default FirstStep