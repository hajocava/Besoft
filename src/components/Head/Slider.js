import React from 'react'
import Slider from 'react-slick'

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    }
    
    return (
        <div className="slider">
            <div className="container buttons d-flex">
                <div className="button active">
                    <i class="la la-code"></i>
                </div>
                <div className="button">
                    <i class="la la-mobile-phone"></i>
                </div>
                <div className="button">
                    <i class="la la-briefcase"></i>
                </div>
                <div className="button">
                    <i class="la la-paint-brush"></i>
                </div>
            </div>
            <Slider {...settings} >
                <div className="imagen uno">
                    <div className="filtro">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h1>Web & Mobile <span>Development</span></h1>
                                    <p className="mt-2">Applications for all devices and user experience</p>
                                    <button className="btn transparent white mt-5">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imagen dos">
                    <div className="filtro">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h1>Interfaces Design</h1>
                                    <p className="mt-2">Applications for all devices and user experience</p>
                                    <button className="btn transparent white mt-5">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imagen tres">
                    <div className="filtro">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h1>User Experience</h1>
                                    <p className="mt-2">Applications for all devices and user experience</p>
                                    <button className="btn transparent white mt-5">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imagen cuatro">
                    <div className="filtro">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h1>Business Software</h1>
                                    <p className="mt-2">Applications for all devices and user experience</p>
                                    <button className="btn transparent white mt-5">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
