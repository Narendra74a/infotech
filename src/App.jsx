import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Testmonial from "./components/Testmonial";
import Footer from "./components/Footer";
import Services from "./components/Services";
import WhychooseUs from "./components/WhychooseUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Testmonial />
      <Services />
      <WhychooseUs/>
      <Footer />

  
  



{/*    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testmonial" element={<Testmonial />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whychooseUs" element={<WhychooseUs />} />
        </Routes>
        <Footer />
      </Router> */}
    </>
  );
};

export default App;
