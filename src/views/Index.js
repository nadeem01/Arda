import React from "react";

import Navbar from "components/Navbar/Navbar.js";
import Hero from "components/Header/Hero.js";
import Intro from "views/sections/Intro.js";
import Technology from "views/sections/Technology.js";
import Consulting from "views/sections/Consulting.js";
import Services from "views/sections/Services.js";
import Hardware from "views/sections/Hardware.js";
import Booking from "views/sections/Booking"
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
          <Technology />
          <Consulting />
          <Services />
          <Hardware />
          <Booking />
        </div>
        <Footer />
      </div>
    </>
  );
}
