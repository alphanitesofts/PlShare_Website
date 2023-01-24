import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ab from '../SourceFiles/ab.jpg'
import bc from '../SourceFiles/bc.png'
import cd from '../SourceFiles/cd.png'
import ef from '../SourceFiles/ef.png'
import gh from '../SourceFiles/gh.png'
import ij from '../SourceFiles/ij.png'

const Reviews = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className='fw-bold fs-5 display-3 lh-sm text-center container wow ' data-wow-delay="0.1s">
                <p className='text-primary'>Our Clients</p>
            </div>
            {/* <p className='textDemo text-center container' style={{ color: '#cfcfcf' }}>Our Clients are located globally. <br /> There are 07 investment plans which may suite you. Please choose one of the following plans.</p> */}

            <div className="testimonial-carousel wow fadeInUp container" data-wow-delay="0.1s">

                <Slider {...settings}>
                    <div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                            <div className="d-flex align-items-end mb-4">
                                <img className="img-fluid flex-shrink-0" src={ab} style={{ width: 80, height: 80 }} />
                                <div className="ms-4">
                                    <h5 className="mb-1 text-white">Jey Shetty</h5>
                                    <p className="m-0">Dalias, TX</p>
                                </div>
                            </div>
                            <p className="mb-0 textDemo">This app is amazing. I've only been using it for a week and I am already trading far more confidently.</p>
                        </div>
                    </div>

                    <div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                            <div className="d-flex align-items-end mb-4">
                                <img className="img-fluid flex-shrink-0" src={bc} style={{ width: 80, height: 80 }} />
                                <div className="ms-4">
                                    <h5 className="mb-1 text-white">Erik Maqueda</h5>
                                    <p className="m-0">Chicago, IL</p>
                                </div>
                            </div>
                            <p className="mb-0 textDemo">This is a good app for beginner traders. I am getting withdrawals from the day first. I am enjoying my freedom more than ever. Feels like retiring so early.</p>
                        </div>
                    </div>

                    <div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                            <div className="d-flex align-items-end mb-4">
                                <img className="img-fluid flex-shrink-0" src={cd} style={{ width: 80, height: 80 }} />
                                <div className="ms-4">
                                    <h5 className="mb-1 text-white">Jared Thomson</h5>
                                    <p className="m-0">Nashville, TN</p>
                                </div>
                            </div>
                            <p className="mb-0 textDemo">As a beginner with zero knowledge for investment. Recommending it to beginners. It would be better if they do real trading but they recommend another app where you can simulate trading until you're ready.</p>
                        </div>
                    </div>

                    <div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                            <div className="d-flex align-items-end mb-4">
                                <img className="img-fluid flex-shrink-0" src={ef} style={{ width: 80, height: 80 }} />
                                <div className="ms-4">
                                    <h5 className="mb-1 text-white">Caleb Khooger</h5>
                                    <p className="m-0">Los Angeles, CA</p>
                                </div>
                            </div>
                            <p className="mb-0 textDemo">I have been trading for years and have never come across a trading platform. It is the best app I have find, it has a great layout and graphics.</p>
                        </div>
                    </div>

                    <div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                            <div className="d-flex align-items-end mb-4">
                                <img className="img-fluid flex-shrink-0" src={gh} style={{ width: 80, height: 80 }} />
                                <div className="ms-4">
                                    <h5 className="mb-1 text-white">Adam Kingston</h5>
                                    <p className="m-0">Dalias, TX</p>
                                </div>
                            </div>
                            <p className="mb-0 textDemo">Extremely helpful app. I had been just started using app. No ads and steady incomes through step by step and gives you illustration how to use the app. I highly recommend using this it.</p>
                        </div>
                    </div>
                </Slider>

            </div>

        </div>
    )
}

export default Reviews