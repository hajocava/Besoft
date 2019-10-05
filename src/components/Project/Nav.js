import React, { Fragment } from 'react'

export default function Nav({ previousStep, totalSteps, currentStep }) {

    const check = step => currentStep > step ? 'line check' : 'line'

    const texts = [
        'Tell us what you need to build',
        'Tell us a bit about what you want to build',
        'Great! Is this a new project?',
        'When do you want to get started?',
        'Thanks. We just need a few details about you',
        'Excelent!'
    ]


    return (
        <div className="container nav-step mb-5">
            <h2 className="text-center">{texts[currentStep - 1]}</h2>
            <div className="bar mt-4 mb-4">
                <div className="progress-bar mb-3">
                    <span className="line check"></span>
                    <span className={check(1)}></span>
                    <span className={check(2)}></span>
                    <span className={check(3)}></span>
                    <span className={check(4)}></span>
                </div>
                <div className="current-step mt-2 d-flex justify-content-center align-items-center">
                    {currentStep !== totalSteps ?
                        <Fragment>
                            <button style={{ opacity: currentStep === 1 ? '0' : '1' }} onClick={previousStep}>
                                <i className="la la-angle-double-left"></i>
                            </button>
                            <p>{currentStep} de {totalSteps - 1}</p>
                        </Fragment>
                        : <p>Apenas es el comienzo</p>}
                </div>
            </div>
        </div>
    )
}
