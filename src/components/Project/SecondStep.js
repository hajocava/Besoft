import React from 'react'


const SecondStep = ({ nextStep, sendValue, currentStep }) => {
    const recolect = () => value => {
        nextStep()
        sendValue(value, currentStep)
    }

    return (
        <div className="options d-flex justify-content-between flex-wrap">
            <button onClick={recolect('Small')} className="card-button">
                <i className="la la-leaf"></i>
                S
            </button>
            <button onClick={recolect('Medium')} className="card-button">
                <i className="la la-tree"></i>
                M
            </button>
            <button onClick={recolect('Large')} className="card-button">
                <i className="la la-map-pin"></i>
                L
            </button>
            <button onClick={recolect('Extra Large')} className="card-button">
                <i className="la la-sun-o"></i>
                XL
            </button>
        </div>
    )
}

export default SecondStep