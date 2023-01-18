import React from 'react'
import { useState } from 'react'
import Register from '../Modal/Register'
const Pricing = () => {

    const [shouldShow, setShouldShow] = useState(false)

    function oncloseModal() {
        setShouldShow((prev) => !prev)
    }

    return (
        <div>

<div className='fw-bold fs-5 display-3 lh-sm mb-5 text-center container'>
<p>Investment Plans</p>
<h6>Investment Plans are designed for best interest of our clients. There are 07 investment plans which may suite you. Please choose one of the following plans.</h6>
</div>

            {/* <h6 className="fw-bold fs-5 display-3 lh-sm mb-5 text-center">Investments Plans</h6> */}
            {/* <p className='text-center'>Investment Plans are designed for best interest of our clients. Following are 07 investment plans which may suite you. Please choose one of the plans.</p> */}
            <div className="container-fluid" >
                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="cardx  pb-4 shadow-lg">
                                <div className="cardx-body">
                                    <div className="text-center p-3">
                                        <h5 className="cardx-title">Basic</h5>
                                        <small>Plan 1</small>
                                        <br /><br />
                                        <span className="h2">$50</span>
                                        <br />
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Daily Profit 2%</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Level 2 Unlocked</li>
                                    <li className="list-group-item "><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Productive Days 22</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> 1 Year Contract</li>
                                </ul>
                                <div className="cardx-body text-center ">
                                    <button className="btn btn-outline-primary mt-2" style={{ borderRadius: 30 }}>Select</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="cardx  pb-4 shadow-lg" >
                                <div className="cardx-body">
                                    <div className="text-center p-3">
                                        <h5 className="cardx-title">Silver</h5>
                                        <small>Plan 2</small>
                                        <br /><br />
                                        <span className="h2">$100</span>
                                        <br />
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Daily Profit 2.5%</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Level 3 Unlocked</li>
                                    <li className="list-group-item "><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Productive Days 22</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> 1 Year Contract</li>
                                </ul>
                                <div className="cardx-body text-center ">
                                    <button className="btn btn-outline-primary mt-2" style={{ borderRadius: 30 }}>Select</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="cardx  pb-4 shadow-lg">
                                <div className="cardx-body">
                                    <div className="text-center p-3">
                                        <h5 className="cardx-title">Gold</h5>
                                        <small>Plan 3</small>
                                        <br /><br />
                                        <span className="h2">$250</span>
                                        <br />
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Daily Profit 2.5%</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Level 4 Unlocked</li>
                                    <li className="list-group-item "><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Productive Days 22</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> 1 Year Contract</li>
                                </ul>
                                <div className="cardx-body text-center ">
                                    <button className="btn btn-outline-primary mt-2" style={{ borderRadius: 30 }}>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="cardx  pb-4 shadow-lg">
                                <div className="cardx-body">
                                    <div className="text-center p-3">
                                        <h5 className="cardx-title">Platinum</h5>
                                        <small>Plan 4</small>
                                        <br /><br />
                                        <span className="h2">$500</span>
                                        <br />
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Daily Profit 2.75%</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Level 4 Unlocked</li>
                                    <li className="list-group-item "><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Productive Days 22</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> 1 Year Contract</li>
                                </ul>
                                <div className="cardx-body text-center ">
                                    <button className="btn btn-outline-primary mt-2" style={{ borderRadius: 30 }}>Select</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="cardx   pb-4 shadow-lg">
                                <div className="cardx-body">
                                    <div className="text-center p-3">
                                        <h5 className="cardx-title">Emerald</h5>
                                        <small>Plan 5</small>
                                        <br /><br />
                                        <span className="h2">$1000</span>
                                        <br />
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Daily Profit 3%</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Level 5 Unlocked</li>
                                    <li className="list-group-item "><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Productive Days 22</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> 1 Year Contract</li>
                                </ul>
                                <div className="cardx-body text-center ">
                                    <button className="btn btn-outline-primary mt-2" style={{ borderRadius: 30 }}>Select</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="cardx  pb-4 shadow-lg">
                                <div className="cardx-body">
                                    <div className="text-center p-3">
                                        <h5 className="cardx-title">Diamond</h5>
                                        <small>Plan 6</small>
                                        <br /><br />
                                        <span className="h2">$5000</span>
                                        <br />
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Daily Profit 3%</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Level 6 Unlocked</li>
                                    <li className="list-group-item "><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Productive Days 22</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> 1 Year Contract</li>
                                </ul>
                                <div className="cardx-body text-center ">
                                    <button className="btn btn-outline-primary mt-2" style={{ borderRadius: 30 }}>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-12 mx-auto mb-4">
                            <div className="cardx  pb-4 shadow-lg">
                                <div className="cardx-body">
                                    <div className="text-center p-3">
                                        <h5 className="cardx-title">Business Plan</h5>
                                        <small>Plan 7</small>
                                        <br /><br />
                                        <span className="h2">$10000</span>
                                        <br />
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Daily Profit 3.33%</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Level 6 Unlocked</li>
                                    <li className="list-group-item "><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> Productive Days 22</li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> 1 Year Contract</li>
                                </ul>
                                <div className="cardx-body text-center ">
                                    <button className="btn btn-outline-primary mt-2" onClick={() => {
                                        setShouldShow(true)
                                        oncloseModal()
                                    }} style={{ borderRadius: 30 }}>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Register
                shouldShow={shouldShow}
                close={oncloseModal}
            />


        </div >
    )
}

export default Pricing