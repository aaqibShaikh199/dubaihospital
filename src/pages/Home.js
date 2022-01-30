import React from "react";
import Slider from "../components/Home/Slider/Slider";
// import Department from "../components/Home/Department/Department";
// import FindSection from "../components/Home/FindSection/FindSection";
// import Stories from "../components/Home/Stories";
import SearchDoctor from "../components/Home/SearchDoctor/SearchDoctor";
import Dslider from "../components/Home/DepartmentSlider/Dslider";
import Facts from "../components/Home/Facts";
import { withTranslation } from "react-i18next";

const Home = ({t}) => {
  return (
    <div>
      <Slider />
      <SearchDoctor />
      {/* <FindSection /> */}
      <Facts />
      <Dslider />
      {/* <Department /> */}
      {/* <Stories/> */}
    </div>
  );
};

export default withTranslation()(Home);
