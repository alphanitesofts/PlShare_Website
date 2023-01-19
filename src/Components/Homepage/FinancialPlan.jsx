import React from 'react'
import image from '.././SourceFiles/trading.jpg'
const FinancialPlan = () => {
    return (
        <div>
            {/* <hr /> */}
            <h6 className="fw-bold fs-5 display-3 lh-sm mb-5 text-center text-primary">About Us</h6>
            <div className='row mt-4 mb-5 m-5'>
                <div className='col-lg-6 containerx'>
                    {/* <h5><b>Financial Planning</b></h5> */}
                    <h1 className='' style={{color:'#cfcfcf'}}>Good Financial Planning Is Vital To Business Success</h1>
                    <img src={image} className='ImagePlan img-fluid' alt="" />
                </div>
                <div className='col-lg-6'>
                    <p className='textDemo'>PL-Share Wealth Partners offer financial plans for all clients through our professional planning platform. We are dedicated to creating you a brighter financial future, and a financial plan is a great first step.
                        Having a comprehensive financial plan can help you better understand the probability of retiring successfully on your terms, what you are invested in, your financial goals, and your current investment allocation, using historical market data as well as current information. All of these give a better understanding of where your financial future is headed.</p>

                    <p className='textDemo'><b>What Is a Financial Plan?</b> <br /> A financial plan is a document comprising of current money situation and long-term monetary goals, as well as strategies to achieve those goals. A financial plan begins with an in-depth evaluation of the current financial state of the market and future expectations. This plan takes into account past historical market data while running thousands of financial setups to help identify how and when you can reach your financial goals.</p>
                </div>
            </div>

        </div>
    )
}

export default FinancialPlan