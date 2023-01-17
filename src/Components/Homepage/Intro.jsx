import React from 'react'

const Intro = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-5 col-lg-6 order-0 order-md-1 text-end"><img className="pt-7 pt-md-0 w-100" src="assets/img/gallery/hero-header.gif" alt="hero-header" /></div>
            <div className="col-md-7 col-lg-6 py-6 text-md-start text-center">
              <h6 className="fs-0 text-uppercase fw-bold text-600">Top Trading App</h6>
              <h1 className="fw-bold fs-4 fs-lg-6 fs-xxl-7 text-primary"> The plaform for<br />better cooperation</h1>
              <p className="mb-5 fs-1 fw-medium">Crafted with care &amp; creativity. Brings together <br className="d-none d-xl-block" />everthing in one place.</p><a className="btn hover-top btn-collab" href="#!"><i className="fas fa-download me-2" /> Comming soon!</a>
              <a className="btn hover-top btn-collab-outline text-gradient ms-2" href="#!"> <i className="fas fa-play text-danger me-md-2 me-0" /> CHECK DEMO</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro