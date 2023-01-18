import React from 'react'
import ReadMoreReact from 'read-more-react';

const Partners = () => {
    return (
        <div>
            <section className="py-0">
                <div className="">

                    {/* <div className="row flex-center">
                        <div className="col-md-6 col-lg-4 text-center mb-6 mb-md-0 order-0"><img className="shadow-lg" src="assets/img/gallery/partnership.png" width={300} alt="..." style={{ borderRadius: '3rem' }} /></div>
                        <div className="col-md-6 text-center text-md-start mb-6 offset-0">
                            <h6 className="fs-0 text-uppercase fw-bold text-primary">Financial Planning</h6>
                            <h6 className="fw-bold fs-3 fs-lg-5 lh-sm">Build strong partnership &amp; organizations</h6>
                            <p className="my-4 fs-1 pe-xl-8">Bring all your document under one place and make it easy to share with other in no time. That makes the whole process comfortable.</p><a className="btn hover-top btn-collab" href="#" role="button">Learn more</a>
                        </div>
                    </div> */}

                    <div className='row mt-5 m-5 '>
                        <div className='col-lg-4  text-center'>
                            <div className="badge bg-soft-danger p-3 rounded-3 description"> <i className='fa-solid fa-5x fa-eye' /> </div>
                            <div className='mt-4'>
                                <h4>Our Vision</h4>
                                <p className='textDemo'> <ReadMoreReact text={'Our award winning team holds over 15 years of investment industry experience helping clients successful growth and continuous profits without interruption. One of our greatest assets is helping you pursue your financial freedom through our financial system. We have worked together for multiple years through changing and challenging environment and economic cycles and been recognized for our efforts as Top Wealth Advisors in various platforms.'}
                                    min={313}
                                    ideal={316}
                                    max={318}
                                    readMoreText="Read more..." />
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4 text-center'>
                            <div className="badge bg-soft-danger p-3 rounded-3 description"><i className='fa-solid fa-5x fa-rocket' /></div>
                            <div className='mt-4'>
                                <h4>Our Mission</h4>
                                <p className='textDemo'>To provide best quality financial planning the individuals and businesses we serve and professional client service experience. Our goal is to provide you with guidance that can help you recognize and better define your economic goals. We work hard to create an eloquent and respected long-term relationship with our customers and businesses.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 text-center'>
                            <div className="badge bg-soft-danger p-3 rounded-3 description"><i className='fa-solid fa-5x fa-heart' /></div>
                            <div className='mt-4'>
                                <h4>Our Values</h4>
                                <p className='textDemo'>Our focus is you. Our value structure encompasses
                                    <br />
                                    •	Honesty <br />
                                    •	Transparency <br />
                                    •	Commitment <br />
                                    <ReadMoreReact text={'Our clients are offered a distinctive experience. We draw upon the experiences, knowledge, and opinions through this platform. This approach helps ensure clients receive optimal profits that we believe adds even more value to those we serve.'}
                                        min={80}
                                        ideal={85}
                                        max={90}
                                        readMoreText="Read more ..." />
                                </p>
                            </div>
                        </div>
                    </div>




                </div>
            </section>

            {/* <section className="py-6" style={{ background: 'linear-gradient(180deg, #FFFEFC -54.51%, #FFF8F0 99.98%)' }}>
                <div className="container">
                    <div className="row flex-center">
                        <div className="col-md-6 col-lg-4 text-center mb-6 mb-md-0 order-0 order-md-1"><img className="shadow-collab" src="assets/img/gallery/corroboration.png" width={300} alt="..." style={{ borderRadius: '3rem' }} /></div>
                        <div className="col-md-6 text-center text-md-start mb-6 offset-lg-1">
                            <h6 className="fs-0 text-uppercase fw-bold text-primary">corroboration</h6>
                            <h6 className="fw-bold fs-3 fs-lg-5 lh-sm">Keeping All Elements Together To Present The Project</h6>
                            <p className="my-4 fs-1 pe-xl-8">While the project is shared between several members, the resources need to be at one place to maintain the clarity of the project, and flexibility among developers.</p><a className="btn hover-top btn-collab" href="#" role="button">Learn more</a>
                        </div>
                    </div>
                    <div className="row flex-center">
                        <div className="col-md-4 col-lg-3 mt-4 mt-lg-8 text-center text-md-start">
                            <div className="badge bg-white p-3 rounded-3"><img className="w-100 h-100" src="assets/img/icons/video.svg" alt="..." /></div>
                            <h4 className="mt-5 mb-3 fw-bold">Video conferencing</h4>
                            <p className="fs-1 lh-sm"><span className="text-900">Communicating through video on elaborate <br className="d-none d-md-block d-lg-none" /> workflow and understanding.</span></p>
                        </div>
                        <div className="col-md-4 col-lg-3 mt-4 mt-lg-8 text-center text-md-start">
                            <div className="badge bg-white p-3 rounded-3"><img className="w-100 h-100" src="assets/img/icons/chat.svg" alt="..." /></div>
                            <h4 className="mt-5 mb-3 fw-bold">Talk with mates</h4>
                            <p className="fs-1 lh-sm"><span className="text-900">Stay communicated with all the colleagues<br className="d-none d-md-block d-lg-none" /> and brush up your social skill.</span></p>
                        </div>
                        <div className="col-md-4 col-lg-3 mt-4 mt-lg-8 text-center text-md-start">
                            <div className="badge bg-white p-3 rounded-3"><img className="w-100 h-100" src="assets/img/icons/image.svg" alt="..." /></div>
                            <h4 className="mt-5 mb-3 fw-bold">High quality image sharing</h4>
                            <p className="fs-1 lh-sm"><span className="text-900">Click it and share the top <br className="d-none d-md-block d-lg-none" />quality images to all the member of your group.</span></p>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    )
}

export default Partners