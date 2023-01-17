import React, { useRef } from 'react'
import Image from '.././SourceFiles/contact.jpg'
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure()
const ContactUs = () => {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_5tgfldd', 'template_ah02fuc', form.current, 'j9CQiMuXPMuGbRF1T')
            .then((result) => {
                console.log(result.text);
                toast.success('Email sent successfully!')
            }, (error) => {
                console.log(error.text);
                toast.warn('Error while submitting')
            });
        e.target.reset()
    }


    return (
        <div>
            <div className='card'>
                <div className='row g-0'>
                    <div className='col-lg-3'>

                        {/* <img src={Image} className='imageContact' alt="" /> */}
                    </div>

                    <div className='col-lg-6 me-4 ms-auto'>

                        <div className='card-body'>
                            <h1 className='card-title'>CONTACT US</h1>
                            <p>Please fill out the form and someone will be in touch shortly. If you are in need of a quote, please call or use the funding form here.</p>

                            <form ref={form} onSubmit={sendEmail} method="post" role="form">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                                    <input name='name' type="name" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label">Username</label>
                                    <input type="name" name="subject" className="form-control " id="exampleInputEmail2" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                    <input type="email" name="email" placeholder='' className="form-control " id="exampleInputPassword1" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Your Message</label>
                                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                    <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </form>



                        </div>


                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-lg-12'>
                        <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Heaven mall&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen />

                    </div>
                </div>

            </div>
        </div>

    )
}

export default ContactUs