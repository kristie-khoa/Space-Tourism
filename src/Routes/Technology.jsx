import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Technology({}) {
  const { technologyData } = useOutletContext();
  const [currTechnologyIndex, setCurrTechnologyIndex] = useState(0);
  if (technologyData) {
    const technologyButtons = technologyData.map((technology, index) => {
      return (
        <li>
          <button
            className={`technology-button ${
              currTechnologyIndex === index ? "active" : ""
            }`}
            onClick={() => {
              setCurrTechnologyIndex(index);
            }}
          >
            {index + 1}
          </button>
        </li>
      );
    });

    return (
      <div className="technology-page">
        <h2 className="page-header">
          <span>03</span>SPACE LAUNCH 101
        </h2>
        <div className="main-content technology-content">
          <ul className="technology-buttons">{technologyButtons}</ul>
          <div className="technology col-left">
            <h2>THE TERMINILOGY...</h2>
            <h1>{technologyData[currTechnologyIndex].name.toUpperCase()}</h1>

            <p>{technologyData[currTechnologyIndex].description}</p>
          </div>
          <div className="technology col-right">
            <div className="technology img-container">
              <img src={technologyData[currTechnologyIndex].images.portrait} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technology;
