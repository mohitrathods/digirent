// import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Homee from "./components/Homee";
import Tenant from "./components/Tenant";
import Clothes from "./all_pages/Clothes";
import Vehicle from "./all_pages/Vehicle";
import VideoShooting from "./all_pages/VideoShooting";
import Books from "./all_pages/Books";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Powertools from "./all_pages/Powertools";

function App() {
  return (
    <div className="App">
      {/* every single route should have a header */}
      {/* EVERYTHING inside Switch will always changed
    and every thing inside rouoter will always visible everywhere on site*/}
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Homee />} />
          {/* homepage */}
          {/* <Route exact path="/">
            <Navbar />
            <Homee />
          </Route> */}

          {/* Contact & about page */}
          {/* <Route path="/about">
            <Navbar />

            <About />
          </Route> */}

          {/* become a tenant page */}
          {/* <Route path="/tenant">
            <Navbar />
            <Tenant />
          </Route> */}

          {/* all links category*/}
          {/* <Route path="/clothes">
            <Navbar />

            <Clothes />
          </Route>

          <Route path="/video">
            <Navbar />

            <VideoShooting />
          </Route>

          <Route path="/books">
            <Navbar />

            <Books />
          </Route>

          <Route path="/powertools">
            <Navbar />

            <Powertools />
          </Route>

          <Route path="/vehicles">
            <Navbar />

            <Vehicle />
          </Route>

          <Route path="/contact">
            <Navbar />

            <Contact />
          </Route>

          <Route path="/checkout">
            <Navbar />

            <Checkout />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
