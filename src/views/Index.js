import React from "react";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Hero from "components/Header/Hero.js";
import Heading from "components/Header/Heading.js";
import Footer from "components/Footer/Footer.js";

// Index Sections
import CompaniesSection from "views/IndexViews/CompaniesSection.js";
import IntroSection from "views/IndexViews/IntroSection";
import TechnologySection from "views/IndexViews/TechnologySection.js";
import ConsultingSection from "views/IndexViews/ConsultingSection.js";
import ServicesSection from "views/IndexViews/ServicesSection.js";
import HardwareSection from "views/IndexViews/HardwareSection.js";
import EndingSection from "views/IndexViews/EndingSection.js";
import BookingSection from "views/IndexViews/BookingSection.js";

// Pages
import Partners from "views/Pages/Partners.js";

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
          title="The Future Is Digital"
          btn="Book a Call"
          btn_color="primary"
          desc="We are Ready to Take your Business to new Heights"
          link="/#Booking"
        />
        <div className="main">
          <Heading title="Trusted By Top Leading Companies" />
          <CompaniesSection />
          <IntroSection />
          <Heading title="Leading Top notch IT Services" />
          <TechnologySection />
          <ConsultingSection />
          <ServicesSection />
          <HardwareSection />
          <EndingSection />
          <Partners />
          <Heading title="Top Maintained Support by Our Team" />
          <BookingSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
