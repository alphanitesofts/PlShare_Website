import React from 'react'

const Quoets = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-6">
                            <div className="d-flex flex-column flex-sm-row align-items-start"><img className="me-sm-3 my-2 my-sm-0 align-self-center align-self-sm-start" src="assets/img/gallery/testimonial-1.png" width={100} alt="services" /><img className="me-sm-3 my-2 my-sm-0 align-self-center align-self-sm-start" src="assets/img/icons/quot.svg" alt="..." />
                                <div className="flex-1 text-center text-sm-start">
                                    <p className="fs-1 text-1200">It would be only imprudent if you dont grab this app now and use it at its best, with all the great facilities it got.”</p>
                                    <h6 className="mb-1 fw-bold fs-0">Safira Petterson</h6>
                                    <h6 className="fs-0">Director, Plugbase</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-6">
                            <div className="d-flex flex-column flex-sm-row align-items-start"><img className="me-sm-3 my-2 my-sm-0 align-self-center align-self-sm-start" src="assets/img/gallery/testimonial-2.png" width={100} alt="services" /><img className="me-sm-3 my-2 my-sm-0 align-self-center align-self-sm-start" src="assets/img/icons/quot.svg" alt="..." />
                                <div className="flex-1 text-center text-sm-start">
                                    <p className="fs-1 text-1200">Myriad options and brillant outlook: what more I can ask for? I trust this app for it well furnished features and reliable modeling. The best of all is it got the option of scalability which opens up a big window of opportunity. It is the tool of future.”</p>
                                    <h6 className="mb-1 fw-bold fs-0">Nazip Terasi</h6>
                                    <h6 className="fs-0">CEO, FrankPhoto</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-6">
                            <div className="d-flex flex-column flex-sm-row align-items-start"><img className="me-sm-3 my-2 my-sm-0 align-self-center align-self-sm-start" src="assets/img/gallery/testimonial-3.png" width={100} alt="services" /><img className="me-sm-3 my-2 my-sm-0 align-self-center align-self-sm-start" src="assets/img/icons/quot.svg" alt="..." />
                                <div className="flex-1 text-center text-sm-start">
                                    <p className="fs-1 text-1200">From the production to deployment, this one is an absolute marvel to be work with. Give it your shot so that you don’t regret ”</p>
                                    <h6 className="mb-1 fw-bold fs-0">Manion Potter</h6>
                                    <h6 className="fs-0">Senior Engineer, ArtsyCode</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-6">
                            <div className="d-flex flex-column flex-sm-row align-items-start"><img className="me-sm-3 my-2 my-sm-0 align-self-center align-self-sm-start" src="assets/img/gallery/testimonial-4.png" width={100} alt="services" /><img className="me-sm-3 my-2 my-sm-0 align-self-center align-self-sm-start" src="assets/img/icons/quot.svg" alt="..." />
                                <div className="flex-1 text-center text-sm-start">
                                    <p className="fs-1 text-1200">The app totally surprised me with its well planned designs and fine structured build-up. For a brilliant team-work, this one is a perfect choice. ”</p>
                                    <h6 className="mb-1 fw-bold fs-0">Frankistain Belio</h6>
                                    <h6 className="fs-0">CTO, NerdBean</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of .container*/}
            </section>

            <section className="py-md-0 bg-warning-gradient">
                <div className="container">
                    <div className="row flex-center">
                        <div className="col-md-6"> <img className="w-100 w-lg-75 d-none d-md-block" src="assets/img/gallery/cta.png" width={320} alt="cta" /></div>
                        <div className="col-md-6">
                            <h1 className="fw-bold fs-4 fs-lg-5 fs-xl-6 mb-4 text-primary"> Collaborate with the<br className="d-none d-xl-block" />team free of cost</h1><a className="btn hover-top btn-collab" href="#!">TRY FOR FREE</a>
                        </div>
                    </div>
                </div>
                {/* end of .container*/}
            </section>
        </div>
    )
}

export default Quoets