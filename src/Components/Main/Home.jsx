import React from 'react'
import VideoSection from '../Homepage/VideoSection'
import Intro from '../Homepage/Intro'
import Partners from '../Homepage/Partners'
import FinancialPlan from '../Homepage/AboutUs'
import Testimonials from '../Homepage/Testimonials'
import Pricing from '../Homepage/Pricing'
import Reviews from '../Homepage/Reviews'
import FAQs from '../Homepage/FAQs'
import ContactUs from '../Homepage/ContactUs'
import Investment from '../Homepage/Investment'
const Home = () => {
    return (
        <div>
            <VideoSection />
            <Intro />
            <Partners />
            <Investment />
            <FinancialPlan />
            <Testimonials />
            <Pricing />
            <Reviews />
            {/* <Quoets /> */}
            <FAQs />
            <ContactUs />
        </div>
    )
}

export default Home