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
        {/* HOMEPAGE  */}
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Homee />} />
        </Routes>

        {/* ABOUT PAGE */}
        <Routes>
          <Route path="/about" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        {/* BECOME A TENANT PAGE */}
        <Routes>
          <Route path="/tenant" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/tenant" element={<Tenant />} />
        </Routes>

        {/* CONTACT PAGE */}
        <Routes>
          <Route path="/contact" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* CHECKOUT */}
        {/* <Routes>
          <Route path="/checkout" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes> */}

        {/* ALL CATEGORIES */}
        <Routes>
          <Route path="/clothes" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/clothes" element={<Clothes />} />
        </Routes>

        <Routes>
          <Route path="/video" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/video" element={<VideoShooting />} />
        </Routes>

        <Routes>
          <Route path="/books" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/books" element={<Books />} />
        </Routes>

        <Routes>
          <Route path="/powertools" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/powertools" element={<Powertools />} />
        </Routes>

        <Routes>
          <Route path="/vehicles" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/vehicles" element={<Vehicle />} />
        </Routes>

        {/*  */}
      </Router>
    </div>
  );
}

export default App;
