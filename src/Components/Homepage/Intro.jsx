import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import ReadMoreReact from 'read-more-react';
import { useCountUp } from 'react-countup';
import CountUp from 'react-countup';
import Phone from './../SourceFiles/phone.png'

const Intro = () => {
  return (
    <div>
      {/* <section id="home">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-5 col-lg-6 order-0 order-md-1 text-end"><img className="pt-7 pt-md-0 w-100" src={man} alt="hero-header" /></div>
            <div className="col-md-7 col-lg-6 py-6 text-md-start text-center">
              <h6 className="fs-0 text-uppercase fw-bold text-600">Top Trading App</h6>
              <h1 className="fw-bold fs-4 fs-lg-6 fs-xxl-7 text-primary"> The plaform for<br />better cooperation</h1>
              <p className="mb-5 fs-1 fw-medium">Crafted with care &amp; creativity. Brings together <br className="d-none d-xl-block" />everthing in one place.</p><a className="btn hover-top btn-collab" href="#!"><i className="fa-brands fa-google-play me-2" /> Coming soon for android!</a>
              <a className="btn hover-top btn-collab-outline text-gradient ms-2" href="#!"> <i className="fa-brands fa-app-store-ios text-danger me-md-2 me-0" /> Coming soon for IOS</a>
            </div>
          </div>
        </div>
      </section> */}
      {/* style={{ background: 'linear-gradient(180deg, #161616 -54.51%, #181818 99.98%)' }} */}
      <section className="py-6" >
        <div className="container">
          <div className="row flex-center">
            <div className="col-md-6 col-lg-4 text-center mb-6 mb-md-0 order-0 order-md-1"><img className="shadow-collab" src={Phone} width={300} alt="..." style={{ borderRadius: '3rem' }} /></div>
            <div className="col-md-6 text-center text-md-start mb-6 offset-lg-1">
              <h6 className="fs-0 text-uppercase fw-bold text-primary">Power Level Share</h6>
              <h6 className="fw-bold fs-3 fs-lg-5 lh-sm" style={{ color: '#cfcfcf' }}>Invest Today for <br /> Secured Tomorrow</h6>
              <p className="my-3 fs-1 pe-xl-8 textDemo" >PL-Share is a premium app for investor and clients. Undoubtedly, it is one of the largest and most popular platform. The app provides professionally managed portfolios using a selection of plans diversifying your investment into multiple fields to generate handsome profit margins.</p>
              {/* <a className="btn hover-top btn-collab" href="#" role="button">Learn more</a> */}
            </div>
          </div>
        </div>

        {/* <div className="row mt-5 flex-center" style={{ backgroundColor: '#3EB8B4' }}>
                    <CountUp end={550} >
                        {({ countUpRef, start }) => (
                            <div className='col-lg-4 text-center' onMouseOver={start}>
                                <div>
                                    <h1><span ref={countUpRef} /></h1>
                                    <h3>LOANS FUNDED SINCE INCEPTION</h3>
                                </div>
                            </div>
                        )}
                    </CountUp>

                    <CountUp start={0} duration={5} end={310000000} >
                        {({ countUpRef, start }) => (
                            <div className='col-lg-4 text-center' onMouseOver={start}>
                                <div>
                                    <h1><span ref={countUpRef} /></h1>
                                    <h3>TOTAL $ LOAN FUNDING</h3>
                                </div>
                            </div>
                        )}
                    </CountUp>

                    <CountUp start={0} end={1384056} >
                        {({ countUpRef, start }) => (
                            <div className='col-lg-4 text-center' onMouseOver={start}>
                                <div>
                                    <h1><span ref={countUpRef} /></h1>
                                    <h3>AVERAGE $ LOAN SIZE</h3>
                                </div>
                            </div>
                        )}
                    </CountUp>

                </div> */}
      </section>
    </div>
  )
}

export default Intro