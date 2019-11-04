import React, { Component } from 'react'
import Slider from 'react-slick'
import Guijoza from '../img/guijoza.png'

export default class Testimonials extends Component {

    render() {
        const settings = {
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        }

        return (
            <div id="testimonials" className="testimonials">
                <div className="container d-md-flex justify-content-md-between align-items-center mb-md-5">
                    <h2>Our customers say</h2>
                    <div className="buttons">
                        <i onClick={() => { this.slider.slickPrev() }} className="la la-chevron-circle-left mr-5"></i>
                        <i onClick={() => { this.slider.slickNext() }} className="la la-chevron-circle-right"></i>
                    </div>
                </div>
                <div className="cards-testimonials mt-4">
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        <div className="testimonial">
                            <div className="d-md-flex align-items-center">
                                <img src={Guijoza} alt="" />
                                <div className="name">
                                    <h3>Erick Guijoza</h3>
                                    <p>Distribuidora Comercial Agricola</p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <i className="la la-quote-right"></i>
                                <p>Connect allows us to achieve compliance with minimal effort.</p>
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="d-md-flex align-items-center">
                                <img src={Guijoza} alt="" />
                                <div className="name">
                                    <h3>Erick Guijoza</h3>
                                    <p>Distribuidora Comercial Agricola</p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <i className="la la-quote-right"></i>
                                <p>Connect allows us to achieve compliance with minimal effort.</p>
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="d-md-flex align-items-center">
                                <img src={Guijoza} alt="" />
                                <div className="name">
                                    <h3>Erick Guijoza</h3>
                                    <p>Distribuidora Comercial Agricola</p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <i className="la la-quote-right"></i>
                                <p>Connect allows us to achieve compliance with minimal effort.</p>
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="d-md-flex align-items-center">
                                <img src={Guijoza} alt="" />
                                <div className="name">
                                    <h3>Erick Guijoza</h3>
                                    <p>Distribuidora Comercial Agricola</p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <i className="la la-quote-right"></i>
                                <p>Connect allows us to achieve compliance with minimal effort.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
