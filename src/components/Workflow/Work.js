import React from 'react'
import getWindowDimensions from './getWindowDimensions'


export default function Work() {
    const { width } = getWindowDimensions();

    return (
        <div id="workflow" className="section workflow">
            <div className="container">
                <div className="title">
                    <h4>Work Process</h4>
                    <h2>Our Workflow</h2>
                </div>
                <div className="content">
                    <div className="cards">
                        <div className="row d-flex">
                            <div className="order-1 col-6 col-lg-4">
                                <div className="card">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="icono bg-primary">
                                            <i className="la la-sitemap"></i>
                                        </div>
                                        <div className="icono transparent">
                                            <i className="la la-arrow-right mb-3"></i>
                                        </div>
                                    </div>
                                    <h3>Plan</h3>
                                    <div className="card-info">
                                        <p>Identify the resources needed to carry out the project, as well as development costs and delivery dates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-2 col-6 col-lg-4">
                                <div className="card">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="icono bg-primary">
                                            <i className="la la-pencil-square"></i>
                                        </div>
                                        <div className="icono transparent">
                                            <i className={`mb-3 ${width < 992 ? 'la la-arrow-down' : 'la la-arrow-right'}`}></i>
                                        </div>
                                    </div>
                                    <h3>Design</h3>
                                    <div className="card-info">
                                        <p>We create a representation of the entity that will be built later, to show a preliminary design.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-4 order-lg-3 col-6 col-lg-4">
                                <div className="card">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="icono bg-primary">
                                            <i className="la la-gears"></i>
                                        </div>
                                        <div className="icono transparent">
                                            <i className="mb-3 la la-arrow-down"></i>
                                        </div>
                                    </div>
                                    <h3>Develop</h3>
                                    <div className="card-info">
                                        <p>We begin to build each stage at the application code level, this stage is closely linked to the previous step.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-6 col-6 col-lg-4">
                                <div className="card">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="icono bg-primary">
                                            <i className="la la-bug"></i>
                                        </div>
                                        <div className="icono transparent">
                                            <i className="mb-3 la la-arrow-left"></i>
                                        </div>
                                    </div>
                                    <h3>Test</h3>
                                    <div className="card-info">
                                        <p>It consists of verifying that the software correctly performs the tasks indicated in the specification.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-5 col-6 col-lg-4">
                                <div className="card">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="icono bg-primary">
                                            <i className="la la-rocket"></i>
                                        </div>
                                        <div className="icono transparent">
                                            <i className={`mb-3 ${width < 992 ? 'la la-arrow-up' : 'la la-arrow-left'}`}></i>
                                        </div>
                                    </div>
                                    <h3>Relese</h3>
                                    <div className="card-info">
                                        <p>A trial version is launched to identify possible errors and improvements in performance and functionality.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-3 order-lg-4 col-6 col-lg-4">
                                <div className="card">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="icono bg-primary">
                                            <i className="la la-refresh"></i>
                                        </div>
                                        <div className="icono transparent">
                                            <i className="la la-arrow-up mb-3"></i>
                                        </div>
                                    </div>
                                    <h3>Feedback</h3>
                                    <div className="card-info">
                                        <p>We receive feedback from the client and the test users to make improvements to our new iteration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
