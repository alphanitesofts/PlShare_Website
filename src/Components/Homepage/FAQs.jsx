import React from 'react'

const FAQs = () => {
  return (
    <div>
        <section className="pb-md-10" id="faq">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 text-center mb-3">
                                <h6 className="fw-bold fs-4 display-3 lh-sm mb-5">Frequently asked questions</h6>
                            </div>
                        </div>
                        <div className="row flex-center">
                            <div className="col-lg-9">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item border-top">
                                        <h2 className="accordion-header" id="heading1">
                                            <button className="accordion-button px-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1"><span className="mb-0 fw-bold text-start fs-1 text-1000">Why should I use the app?</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse show" id="collapse1" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0 px-2">This app is under copyright protection and is property of Power Level Shares Ltd. PL-Share is an investment company and its core purpose is to provide investment solution for its individual clients. This app is designed for the clients to use to invest into the company.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-top">
                                        <h2 className="accordion-header" id="heading2">
                                            <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2"><span className="mb-0 fw-bold text-start fs-1 text-1000">Where our money is invested?</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse" id="collapse2" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0 px-2">We invest in stocks and shares of the blue chip companies, properties and agriculture keeping in view of our clients earn steady profits.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-top">
                                        <h2 className="accordion-header" id="heading3">
                                            <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3"><span className="mb-0 fw-bold text-start fs-1 text-1000">How can I deposit and Withdraw my amount?</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse" id="collapse3" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0 px-2">Every client can invest in our company through USDT and get withdraw in USDT wallets attached with your app account. All Bonuses and Rewards are subject to paid plans only. There is a withdraw limit of $20.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-top">
                                        <h2 className="accordion-header" id="heading4">
                                            <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4"><span className="mb-0 fw-bold text-start fs-1 text-1000">Why there are only 22 working days in a month?</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse" id="collapse4" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0 px-2">All investments are paid on working days therefore, Saturday and Sunday are off. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-top">
                                        <h2 className="accordion-header" id="heading5">
                                            <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5"><span className="mb-0 fw-bold text-start fs-1 text-1000">Is the app workable while you got no internet?</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse" id="collapse5" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0 px-2">App is fully functional as your investments are placed into our investment schemes and you can withdraw your amounts on your ease.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-top">
                                        <h2 className="accordion-header" id="heading6">
                                            <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6"><span className="mb-0 fw-bold text-start fs-1 text-1000">Is this app secure to invest?</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse" id="collapse6" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0 px-2">This is registered company under the US Company Laws and it working since the past decade. Our committed clients trust us.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-top">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7"><span className="mb-0 fw-bold text-start fs-1 text-1000">Is my investment secure?</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse" id="collapse7" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                            <div className="accordion-body pt-0 px-2">Every client is offered 1-year contract and until then it is responsibility of PLS to handle investments and secure it keeping your profits a steady flow.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of .container*/}
                </section>
    </div>
  )
}

export default FAQs