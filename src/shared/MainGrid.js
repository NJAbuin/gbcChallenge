import React from "react";
import Header from "./Header";
import TopAds from "./TopAds";
import SideAds from "./SideAds";
import Articles from "./Articles";
import Footer from "./Footer";

const MainGrid = () => {
  return (
    <div className="grid-container">
      <Header />
      <TopAds />
      <Articles />
      <SideAds />
      <Footer />
    </div>
  );
};

export default MainGrid;
