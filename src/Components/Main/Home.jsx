import React from 'react'
import VideoSection from '../Homepage/VideoSection'
import Intro from '../Homepage/Intro'
import Partners from '../Homepage/Partners'
import AboutUs from '../Homepage/AboutUs'
import Testimonials from '../Homepage/Testimonials'
import Pricing from '../Homepage/Pricing'
import Reviews from '../Homepage/Reviews'
import FAQs from '../Homepage/FAQs'
import ContactUs from '../Homepage/ContactUs'
import Investment from '../Homepage/Investment'
import Crypto from '../Homepage/Crypto'
import Project from '../Homepage/Project'

const Home = () => {
    return (
        <div>
            <VideoSection />
            <Intro />
            <Partners />
            <Investment />
            <Pricing />
            <Crypto />
            <Testimonials />
            <AboutUs />
            {/* <Quoets /> */}
            <Project/>
            <Reviews />
            <FAQs />
            <ContactUs />
        </div>
    )
}

export default Home