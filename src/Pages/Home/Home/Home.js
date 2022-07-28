import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./Home.css";
// import background from "../../../public/Rectangle 1.png";

const Home = () => {
  return (
    <div className="home container text-center">
      <h3 className="text-primary">Home Page</h3>
      {/* <Banner></Banner> */}
      <Services></Services>
    </div>
  );
};

export default Home;
