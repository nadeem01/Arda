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
import Technology from "views/sections/Technology.js";
import Consulting from "views/sections/Consulting.js";
import Services from "views/sections/Services.js";
import Hardware from "views/sections/Hardware.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Index />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/success" render={() => <Success />} />
      <Redirect from="/" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
