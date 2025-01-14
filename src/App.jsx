import React from "react";
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
    </>
  );
};

export default App;
