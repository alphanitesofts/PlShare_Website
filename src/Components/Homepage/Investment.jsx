import React from 'react'
import crops from './../SourceFiles/crops.jpg'
import graphs from './../SourceFiles/graphs.png'
import buildings from './../SourceFiles/buildings.jpeg'

const Investment = () => {
    return (
        <div className='container'>

            <h6 className="fw-bold fs-5 display-3 lh-sm mb-5 text-center" style={{ marginTop: '100px', color: '#3eb8b4' }}>Where We Invest?</h6>

            <div className='row m-4'>
                <div className='col-lg-4 mb-3'>
                    <div className="card  projectsCard" >
                        <img src={graphs} className="card-img-top investingPictures" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>Company Stocks and Shares</h5>
                            <p className="card-text">We invest in Blue chip companies and yield a great profits through dividends Biyearly and yearly. We invest in top 500 US companies with established businesses. </p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 mb-3'>
                    <div className="card projectsCard" >
                        <img src={buildings} className="card-img-top investingPictures" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>Real Estate</h5>
                            <p className="card-text"> We have 200+ properties in hand. We buy properties, renovate houses and sell them for a higher price in across USA. We hold $142 Million worth of properties</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 mb-3'>
                    <div className="card projectsCard" >
                        <img src={crops} className="card-img-top investingPictures" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>Agriculture</h5>
                            <p className="card-text"> We have 4250+ acre of land in Venezuela produced high revenues of over $23 Million in 2022 alone. We cultivate and invest in corn, wheat and rice.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Investment