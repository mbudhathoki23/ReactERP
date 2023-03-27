import React from 'react'
import Hero from "../components/Hero"
import OurServices from "../components/OurServices"
import Team from "../components/Team"
import ContactUs from "../components/ContactUs"
import Testimonial from "../components/Testimonial"
import HomeNavBars from '../components/HomeNavBars'

const HomePage = () => {
    return (
        <>
            <HomeNavBars />
            <Hero />
            <OurServices />
            <Team />
            <ContactUs />
            <Testimonial />

        </>
    )
}

export default HomePage