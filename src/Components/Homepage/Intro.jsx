import React from 'react'
import Phone from './../SourceFiles/Images/phone.png'

const Intro = () => {
  return (
    <div>

      <section className="py-6" >
        <div className="container">
          <div className="row flex-center">
            <div className="col-md-6 col-lg-4 text-center mb-6 mb-md-0 order-0 order-md-1">
              <img className="shadow-collab" src={Phone} width={300} alt="..." style={{ borderRadius: '3rem' }} />
            </div>
            <div className="col-md-6 text-center text-md-start mb-6 offset-lg-1">
              <h6 className="fs-0 text-uppercase fw-bold text-primary">Power Level Share</h6>
              <h6 className="fw-bold fs-3 fs-lg-5 lh-sm" style={{ color: '#cfcfcf' }}>Invest Today for <br /> Secured Tomorrow</h6>
              <p className="my-3 fs-1 pe-xl-8 textDemo" >PL-Share is a premium app for investor and clients. Undoubtedly, it is one of the largest and most popular platform. The app provides professionally managed portfolios using a selection of plans diversifying your investment into multiple fields to generate handsome profit margins.</p>
              <a className="btn hover-top btn-collab" href={require('./../SourceFiles/PLshare.apk')} download='PLshare' role="button">Download App</a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Intro