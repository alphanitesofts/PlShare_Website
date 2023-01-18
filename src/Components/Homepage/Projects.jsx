import React from 'react'
import Image from './../SourceFiles/contact.jpg'
import coin from './../SourceFiles/coins.jpg'
import crops from './../SourceFiles/crops.jpg'
import building from './../SourceFiles/building.jpg'
import farming from './../SourceFiles/farming.jpg'

const Projects = () => {
    return (
        <div>

            <h6 className="fw-bold fs-5 display-3 mt-5 lh-sm mb-5 text-center">Where We Invest?</h6>

            <div className='row m-5'>
                <div className='col-lg-4 mb-2'>
                    <div className="card  projectsCard" style={{ width: '18rem', borderRadius: '10px' }}>
                        <img src={farming} className="card-img-top investingPictures" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>Company Stocks and Shares</h5>
                            <p className="card-text">We invest in Blue chip companies and yield a great profits through dividends Biyearly and yearly. We invest in top 500 US companies with established businesses. </p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 mb-2'>
                    <div className="card projectsCard" style={{ width: '18rem', borderRadius: '10px' }}>
                        <img src={building} className="card-img-top investingPictures" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>Real Estate</h5>
                            <p className="card-text"> We have 200+ properties in hand. We buy properties, renovate houses and sell them for a higher price in across USA. We hold $142 Million worth of properties</p>
                        </div>
                    </div>
                </div>


                <div className='col-lg-4 mb-2'>
                    <div className="card projectsCard" style={{ width: '18rem', borderRadius: '10px' }}>
                        <img src={crops} className="card-img-top investingPictures" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>Agriculture</h5>
                            <p className="card-text"> We have 4250+ acre of land in Venezuela produced high revenues of over $23 Million in 2022 alone. We cultivate and invest in corn, wheat and rice.</p>
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