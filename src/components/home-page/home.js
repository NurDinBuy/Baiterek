import React from "react";
import Slider from "../slider";
import SaleDetails from "../sale-details";
import AboutCompany from "../about-company";
import DoneProject from "../done-projects";
import RealizedProjects from "../realized-projects";
import Connections from "../connections";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <SaleDetails />
      <AboutCompany />
      <DoneProject />
      <RealizedProjects />
      <Connections />
    </div>
  );
};

export default HomePage;
