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
import Powertools from "./all_pages/Powertools";
import Music from "./all_pages/Music";
import Farmland from "./all_pages/Farmland";
import RealEstate from "./all_pages/RealEstate";
import TechHardware from "./all_pages/TechHardware";
import Vehicle from "./all_pages/Vehicle";
import VideoShooting from "./all_pages/VideoShooting";
import Books from "./all_pages/Books";

function App() {
  return (
    <div className="App">
      {/* every single route should have a header */}
      {/* EVERYTHING inside Switch will always changed
    and every thing inside rouoter will always visible everywhere on site*/}
      <Router>
        <Switch>
          {/* homepage */}
          <Route exact path="/">
            <Navbar />
            <Homee />
          </Route>

          {/* Contact & about page */}
          <Route path="/about">
            <Navbar />

            <About />
          </Route>

          {/* become a tenant page */}
          <Route path="/tenant">
            <Navbar />
            <Tenant />
            {/* <Route element={<Becomeatenant />} path="/tenant" /> */}
          </Route>

          {/* all links category*/}
          <Route path="/clothes">
            <Navbar />

            <Clothes />
          </Route>

          <Route path="/powertools">
            <Powertools />
          </Route>

          <Route path="/video">
            <VideoShooting />
          </Route>

          <Route path="/techhardware">
            <TechHardware />
          </Route>

          <Route path="/books">
            <Books />
          </Route>

          <Route path="/music">
            <Music />
          </Route>

          <Route path="/vehicles">
            <Vehicle />
          </Route>

          <Route path="/realestate">
            <RealEstate />
          </Route>

          <Route path="/farmland">
            <Farmland />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
