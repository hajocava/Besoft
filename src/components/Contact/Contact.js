import React from 'react'

export default function Contact() {
    return (
        <div className="contact section">
            <div className="image-morelia">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="content d-md-flex flex-md-column align-items-center">
                        <div>
                            <div className="d-flex flex-wrap">
                                <div className="info-contact mr-5 mb-4">
                                    <div className="title d-flex align-items-center">
                                        <i className="la la-at mr-2"></i>
                                        <h5>Email</h5>
                                    </div>
                                    <p className="mt-1">contact@besoft.com</p>
                                </div>
                                <div className="info-contact">
                                    <div className="title d-flex align-items-center">
                                        <i className="la la-phone mr-2"></i>
                                        <h5>Phone</h5>
                                    </div>
                                    <p className="mt-1">443-198-7781</p>
                                </div>
                            </div>
                            <div className="info-contact mt-4">
                                <div className="title d-flex align-items-center">
                                    <i className="la la-map-o mr-2"></i>
                                    <h5>Address</h5>
                                </div>
                                <p className="mt-1">Peripheral of the republic 14 Morelia Michoacan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
