import React from "react";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Hero from "components/Header/Hero.js";
import Footer from "components/Footer/Footer.js";

// About Sections


export default function About() {
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
          title="Vision Behind Arda"
          btn="See our Partners"
          btn_color="success"
          desc="We are Futuristic team Ready to Produce Innovative Solutions"
          link="#"
        />
        <div className="main">

          {/* <Mission />
          <Team />
          <Partners />
          <Enqueries /> */}

        </div>
        <Footer />
      </div>
    </>
  );
}
