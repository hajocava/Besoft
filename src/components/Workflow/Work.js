import React from 'react'
import getWindowDimensions from './getWindowDimensions'


export default function Work() {
    const { width } = getWindowDimensions();

    return (
        <div className="section workflow">
            <div className="container">
                <div className="title">
                    <h4>Work Process</h4>
                    <h2>Our Workflow</h2>
                </div>
                <div className="content">
                    <div className="cards">
                        <div className="row d-flex">
                            <div className="order-1 col-6 col-md-4">
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, unde ipsa illo natus magni tempora cum quibusdam.
                                    </div>
                                </div>
                            </div>
                            <div className="order-2 col-6 col-md-4">
                                <div className="card">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="icono bg-primary">
                                            <i className="la la-pencil-square"></i>
                                        </div>
                                        <div className="icono transparent">
                                            <i className={`mb-3 ${width < 768 ? 'la la-arrow-down' : 'la la-arrow-right'}`}></i>
                                        </div>
                                    </div>
                                    <h3>Design</h3>
                                    <div className="card-info">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, unde ipsa illo natus magni tempora cum quibusdam nesciunt, officiis iste ex.
                                    </div>
                                </div>
                            </div>
                            <div className="order-4 order-md-3 col-6 col-md-4">
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, unde ipsa illo natus magni tempora cum quibusdam nesciunt, officiis iste ex.
                                    </div>
                                </div>
                            </div>
                            <div className="order-6 col-6 col-md-4">
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, unde ipsa illo natus magni tempora cum quibusdam nesciunt, officiis iste ex.
                                    </div>
                                </div>
                            </div>
                            <div className="order-5 col-6 col-md-4">
                                <div className="card">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="icono bg-primary">
                                            <i className="la la-rocket"></i>
                                        </div>
                                        <div className="icono transparent">
                                        <i className={`mb-3 ${width < 768 ? 'la la-arrow-up' : 'la la-arrow-left'}`}></i>
                                        </div>
                                    </div>
                                    <h3>Relese</h3>
                                    <div className="card-info">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, unde ipsa illo natus magni tempora cum quibusdam nesciunt, officiis iste ex.
                                    </div>
                                </div>
                            </div>
                            <div className="order-3 order-md-4 col-6 col-md-4">
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, unde ipsa illo natus magni tempora cum quibusdam nesciunt, officiis iste ex.
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
