import React from 'react'
import Slider from 'react-slick'

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
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
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Slider>
        </div>
    );
}
