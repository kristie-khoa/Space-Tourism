import React, { useState, useEffect } from "react";
import axios from "axios";
import backgroundHome from "/assets/home/background-home-desktop.jpg";
import backgroundDestination from "/assets/destination/background-destination-desktop.jpg";
import backgroundCrew from "/assets/crew/background-crew-desktop.jpg";
import backgroundTechnology from "/assets/technology/background-technology-desktop.jpg";
import logo from "/assets/shared/logo.svg";
import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import hamburger from "/assets/shared/hamburger.svg";
import data from "../data/data.json";

const backgroundImgs = [
  backgroundHome,
  backgroundDestination,
  backgroundCrew,
  backgroundTechnology,
];

function Root() {
  // const [data, setData] = useState({});
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [currPageIndex, setCurrPageIndex] = useState(
    JSON.parse(localStorage.getItem("currPageIndex")) || 0
  );
  const [backgroundImg, setBackgroundImg] = useState(
    backgroundImgs[currPageIndex] || backgroundHome
  );
  const destinationData = data.destinations;
  const crewData = data.crew;
  const technologyData = data.technology;

  const handleSetCurrPageIndex = (index) => {
    setCurrPageIndex(index);
    localStorage.setItem("currPageIndex", JSON.stringify(index));
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 850) {
        setIsNavOpen(false);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const getData = async () => {
  //   const res = await axios.get("./data.json");
  //   console.log(res.data);
  //   setData(res.data);
  // };

  // if (data) {
  const navLinks = ["home", "destination", "crew", "technology"].map(
    (page, index) => {
      return (
        <li>
          <Link
            className={`nav-link ${currPageIndex === index ? "active" : ""}`}
            to={`/Space-Tourism/${index > 0 ? `${page}` : ""}`}
            onClick={() => {
              handleSetCurrPageIndex(index);
              setBackgroundImg(backgroundImgs[index]);
              setIsNavOpen(false);
            }}
          >
            <span>{`0${index}`}</span> {page.toUpperCase()}
          </Link>
        </li>
      );
    }
  );

  return (
    <div
      className="layout"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <img className="logo" src={logo} />
      <img
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
        className="hamburger"
        src={hamburger}
      />
      <div className={`nav-bar ${isNavOpen ? "open" : ""}`}>
        <div className="header-line"></div>
        <ul>{navLinks}</ul>
      </div>

      <Outlet
        context={{
          destinationData,
          crewData,
          technologyData,
          handleSetCurrPageIndex,
        }}
      />
    </div>
  );
}
// }

export default Root;
