import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import forms from './../SourceFiles/Images/forms.jpg'

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
            <div className='card' style={{ backgroundColor: '#161616' }} id='contact'>
                <div className='row g-0'>
                    <div className='col-lg-4 mx-auto'>
                        <img src={forms} className='img-fluid ' alt="" />
                        {/* imageContact */}
                    </div>

                    <div className='col-lg-7 me-4 ms-auto'>

                        <div className='card-body'>
                            <h6 className="fw-bold fs-5 display-3 lh-sm mb-5 text-primary">Contact Us</h6>
                            <p>Please fill out the form and someone will be in touch shortly. If you are in need of a quote, please call or use the funding form here.</p>

                            <form ref={form} onSubmit={sendEmail} method="post" role="form">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                                    <input name='name' type="name" className="form-control text-white" style={{ backgroundColor: '#161616', borderColor: '#303030' }} id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label">Username</label>
                                    <input type="name" name="subject" className="form-control text-white" style={{ backgroundColor: '#161616', borderColor: '#303030' }} id="exampleInputEmail2" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                    <input type="email" name="email" placeholder='' className="form-control text-white" style={{ backgroundColor: '#161616', borderColor: '#303030' }} id="exampleInputPassword1" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Your Message</label>
                                    <textarea className="form-control text-white" name="message" id="exampleFormControlTextarea1" style={{ backgroundColor: '#161616', borderColor: '#303030' }} rows={3} defaultValue={""} />
                                    <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button className="btn hover-top btn-collab" ><i className="" /> Submit</button>
                                {/* <button type="submit" className="btn btn-danger">Submit</button> */}
                            </form>



                        </div>


                    </div>
                </div>
{/* 
                <div className='row mt-4'>
                    <div className='col-lg-12'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10995.807855635443!2d77.58463265555102!3d12.99708773267609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2s!4v1674133377780!5m2!1sen!2s" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div> */}

            </div>
        </div>

    )
}

export default ContactUs