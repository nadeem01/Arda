import React from "react";

import Navbar from "components/Navbar/Navbar.js";
import Hero from "components/Header/Hero.js";
import Intro from "views/sections/Intro.js";

import Heading from "views/IndexViews/Heading.js";
import TechnologySection from "views/IndexViews/TechnologySection.js";
import ConsultingSection from "views/IndexViews/ConsultingSection.js";
import ServicesSection from "views/IndexViews/ServicesSection.js";
import HardwareSection from "views/IndexViews/HardwareSection.js";

import Booking from "views/sections/Booking";
import Footer from "components/Footer/Footer.js";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Hero
          title="Future Is Digital"
          btn="Book a Call"
          btn_color="success"
          desc="We are Ready to Take your Business to new Heights"
          link="/#Booking"
        />
        <div className="main">
          <Intro />

          <Heading />
          <TechnologySection />
          <ConsultingSection />
          <ServicesSection />
          <HardwareSection />



          <Booking />
        </div>
        <Footer />
      </div>
    </>
  );
}
