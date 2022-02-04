import React from "react";

import Navbar from "components/Navbar/Navbar.js";
import Footer from "components/Footer/Footer.js";

export default function Success() {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="main">
          <h1>Success Page</h1>
        </div>
      </div>

      <Footer />
    </>
  );
}
