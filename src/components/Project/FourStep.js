import React from 'react'


const FourStep = ({ nextStep, sendValue, currentStep }) => {
    const recolect = () => value => {
        nextStep()
        sendValue(value, currentStep)
    }

    return (
        <div className="options d-flex justify-content-between flex-wrap">
            <button onClick={recolect('As Soon As Possible')} className="card-button">
                <i className="la la-rocket"></i>
                As Soon As Possible
            </button>
            <button onClick={recolect('1 - 2 Weeks')} className="card-button">
                <i className="la la-plane"></i>
                1 - 2 Weeks
            </button>
            <button onClick={recolect('1 - 2 Months')} className="card-button">
                <i className="la la-hourglass-1"></i>
                1 - 2 Months
            </button>
        </div>
    )
}


export default FourStep