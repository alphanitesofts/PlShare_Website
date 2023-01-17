import React from 'react'
import Image from './../SourceFiles/contact.jpg'

const Projects = () => {
    return (
        <div>
            <hr />
            <h2 className='text-center  mt-2 mb-4'><b>Our Projects</b></h2>

            <div className='row m-5'>
                <div className='col-lg-4'>
                    <div className="card projectsCard" style={{ width: '18rem', borderRadius:'10px' }}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className="card projectsCard" style={{ width: '18rem', borderRadius:'10px' }}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className="card projectsCard" style={{ width: '18rem' , borderRadius:'10px'}}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>


            </div>

            {/* <div className='row m-5'>
                <div className='col-lg-4'>
                    <div className="card projectsCard" style={{ width: '18rem', borderRadius:'10px' }}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className="card projectsCard" style={{ width: '18rem', borderRadius:'10px' }}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className="card projectsCard" style={{ width: '18rem', borderRadius:'10px' }}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>


            </div> */}
        </div>
    )
}

export default Projects