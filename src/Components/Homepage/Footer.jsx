import React from 'react'

const Footer = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row flex-center mt-5">
                        <div className="col-lg-6">
                            <h4 className="fw-bold">For more, Subscribe now</h4>
                            <p className="fs-1">Stay updated and work accordingly </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end mb-4">
                            <form className="row row row-cols-lg-auto align-items-center">
                                <div className="col-8 col-sm-9">
                                    <label className="visually-hidden" htmlFor="colFormLabel">Username</label>
                                    <div className="input-group">
                                        <input className="form-control" id="colFormLabel" type="email" placeholder="Enter email address" />
                                    </div>
                                </div>
                                <div className="col-4 col-sm-3 text-end">
                                    <button className="btn btn-collab" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr className="text-200" />
                    <div className="row justify-content-lg-between circle-blend-right circle-danger">
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">WHY US</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Channel</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Engagement</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Scale</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Watch Demo</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">PRODUCT</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Features</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Integrations</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Enterprise</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Solutions</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">RESOURCES</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Partners</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Developers</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Apps</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Blogs</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">COMPANY</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">About Us</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Leadership</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Investor Relations</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">News</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">PRICING</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Plans</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Paid vs. Free</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">FOLLOW</h6>
                            <ul className="list-unstyled list-inline my-3">
                                <li className="list-inline-item me-3"><a className="text-decoration-none" href="#!"><img className="list-social-icon" src="assets/img/icons/facebook.svg" alt /></a></li>
                                <li className="list-inline-item me-3"><a className="text-decoration-none" href="#!"><img className="list-social-icon" src="assets/img/icons/twitter.svg" alt /></a></li>
                                <li className="list-inline-item me-3"><a className="text-decoration-none" href="#!"><img className="list-social-icon" src="assets/img/icons/instagram.svg" alt /></a></li>
                                <li className="list-inline-item"><a className="text-decoration-none" href="#!"><img className="list-social-icon" src="assets/img/icons/snapchat.svg" alt /></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="text-200 mb-0" />
                    <div className="row justify-content-md-between justify-content-evenly py-3">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                            <p className="fs-0 my-2 text-400">All rights Reserved <span className="fw-bold text-500">© Alphanites, 2023</span></p>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6">
                            <p className="text-center text-md-end text-400"> Made with&nbsp;
                                <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#FD7D72" viewBox="0 0 16 16">
                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                </svg>&nbsp;by&nbsp;<a className="fw-bold text-500" href="https://themewagon.com/" target="_blank">Alphanites </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer