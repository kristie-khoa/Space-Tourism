import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Crew({}) {
  const { crewData } = useOutletContext();
  const [currCrewIndex, setCurrCrewIndex] = useState(0);
  console.log(crewData);

  if (crewData) {
    const crewButtons = crewData.map((crewMember, index) => {
      return (
        <li>
          <button
            className={`crew-button ${currCrewIndex === index ? "active" : ""}`}
            onClick={() => {
              setCurrCrewIndex(index);
            }}
          ></button>
        </li>
      );
    });
    return (
      <div className="crew-page">
        <h2 className="page-header">
          <span>02</span>MEET YOUR CREW
        </h2>
        <div className="main-content crew-content">
          <div className="crew col-left">
            <h2>{crewData[currCrewIndex].role.toUpperCase()}</h2>
            <h1>{crewData[currCrewIndex].name}</h1>
            <p>{crewData[currCrewIndex].bio}</p>
            <ul className="crew-buttons">
              {crewButtons}
              {/* <li>o</li>
              <li>o</li>
              <li>o</li>
              <li>o</li> */}
            </ul>
          </div>
          <div className="crew col-right">
            <img src={crewData[currCrewIndex].images.png} />
          </div>
        </div>
      </div>
    );
  }
}

export default Crew;
