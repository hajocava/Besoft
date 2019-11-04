import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Carousel extends Component {

    state = { slideIndex: 0 }

    render() {
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
            cssEase: 'linear',
            afterChange: current => this.setState({ slideIndex: current })
        }

        const goToSlide = slide => () => {
            this.setState({ slideIndex: slide})
            this.slider.slickGoTo(slide)
        }

        return (
            <div id="services" className="slider-hero">
                <div className="container buttons d-flex">
                    <div className={`button ${this.state.slideIndex === 0 ? 'active' : ''}`} onClick={goToSlide(0)} >
                        <i className="la la-code"></i>
                    </div>
                    <div className={`button ${this.state.slideIndex === 1 ? 'active' : ''}`} onClick={goToSlide(1)} >
                        <i className="la la-mobile-phone"></i>
                    </div>
                    <div className={`button ${this.state.slideIndex === 2 ? 'active' : ''}`} onClick={goToSlide(2)} >
                        <i className="la la-briefcase"></i>
                    </div>
                    <div className={`button ${this.state.slideIndex === 3 ? 'active' : ''}`} onClick={goToSlide(3)} >
                        <i className="la la-paint-brush"></i>
                    </div>
                </div>
                <Slider ref={slider => (this.slider = slider)} {...settings} >
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
                                    <div className="col align-self-center text-center">
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
}
