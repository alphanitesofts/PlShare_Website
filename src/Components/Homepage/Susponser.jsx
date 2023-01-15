import React from 'react'

const Susponser = () => {
    return (
        <div>
            <section className="py-md-0">
                <div className="bg-holder" style={{ backgroundImage: 'url(assets/img/gallery/cta-2-bg.png)', backgroundPosition: 'center' }}>
                </div>
                {/*/.bg-holder*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-lg-3 text-center"><img className="mt-n8 d-none d-md-block w-100" src="assets/img/gallery/cta-2.png" alt="cta" /></div>
                        <div className="col-md-7 col-lg-8 offset-lg-1">
                            <h1 className="fw-bold fs-4 fs-lg-6 mb-4 text-white"> Start using our app today, <br className="d-none d-xxl-block" />enjoy the complete fun</h1><a className="pe-2" href="https://www.apple.com/app-store/" target="_blank"><img src="assets/img/gallery/app-store.png" width={160} alt /></a><a href="https://play.google.com/store/apps" target="_blank"><img src="assets/img/gallery/google-play.png" width={160} alt /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Susponser