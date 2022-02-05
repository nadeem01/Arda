import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";
import "App.css";

// Pages
import Index from "views/Index.js";
import About from "views/About.js";
import Success from "views/Success.js";

// Sections
import Technology from "views/Pages/Technology.js";
import Consulting from "views/Pages/Consulting.js";
import Services from "views/Pages/Services.js";
import Hardware from "views/Pages/Hardware.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Index Page */}
      <Route exact path="/" render={() => <Index />} />

      {/* Technology Page */}
       <Route path="/technology" render={() => <Technology />}/>
      {/* Consulting Page */}
      <Route path="/consulting" render={() => <Consulting />}/>
      {/* Services Page */}
      <Route path="/services" render={() => <Services />}/>
      {/* Hardware Page */}
      <Route path="/hardware" render={() => <Hardware />}/>

       {/* About Page */}
      <Route path="/about" render={() => <About />} />
      {/* Success Page */}
      <Route path="/success" render={() => <Success />} />
      <Redirect from="/" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
