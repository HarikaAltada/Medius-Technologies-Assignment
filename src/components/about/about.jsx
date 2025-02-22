import React from "react";
import Navbar from "../Navbar/Navbar";
import Mission from "./Mission";
import StatusSection from "./StatusSection";
import HowWeAreChanging from "./HowWeAreChanging";
import Timeline from "./Timeline";
import Footer from "../Footer/Footer";
function About() {
  return (
    <div>
      <Navbar />
      <Mission />
      <StatusSection />
      <HowWeAreChanging />
      <Timeline />
      <Footer />
    </div>
  );
}

export default About;
