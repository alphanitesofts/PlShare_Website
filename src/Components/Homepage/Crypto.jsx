import React from 'react'
import crytpo from './../SourceFiles/cryptos.png'

const Crypto = () => {
    return (
        <div>
            <h6 className="fw-bold fs-5 display-3 lh-sm mb-5 text-center text-primary" id='about'>Why Tether (USDT)?</h6>
            <div className='row mt-4 mb-5 m-5'>
                <div className='col-lg-6'>
                    <div className='textDemo'>
                    <p ><b>What is cryptocurrency Tether (USDT) and how does it work?</b></p>
                    <p >Tether (USDT) is what’s known as a “Stablecoin” – a cryptocurrency designed to provide a stable price point at all times. The USDT cryptocurrency was created by Tether Limited to function as the internet’s Digital Dollar, with each token worth $1.00 USD and backed by $1.00 USD in physical reserves. Tether is used by millions of blockchain users each day to trade, hedge, and transact on various blockchain networks – without the need of a trusted third-party intermediary. However, despite being a popular choice on cryptocurrency markets, Tether has a controversial history due to the company’s alleged role in manipulating the price of Bitcoin and not managing their reserves properly.</p>
                    <p >Interested in Tether (USDT), but not sure what it’s all about or where to even begin? No worries. This guide is designed to teach you everything you need to know about the project and get you ready to jump into the most user-friendly trading experience available on the market.</p>
                    </div>
                  </div>
                <div className='col-lg-6 containerx'>
                    {/* <h5><b>Financial Planning</b></h5> */}
                    {/* <h1 className='' style={{ color: '#cfcfcf' }}></h1> */}
                    <img src={crytpo} style={{height:'390px'}} className='ImagePlan img-fluid' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Crypto