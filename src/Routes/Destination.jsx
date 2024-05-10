import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Destination() {
  const { destinationData } = useOutletContext();
  const [currDestinationIndex, setCurrDestinationIndex] = useState(0);
  //   const [currDestinationData, setCurrDestinationData] = useState(
  //     data[currDestinationIndex]
  //   );

  if (destinationData) {
    const destinationButtons = destinationData.map((destination, index) => {
      return (
        <li>
          <button
            className={`destination-button ${
              currDestinationIndex === index ? "active" : ""
            }`}
            onClick={() => {
              setCurrDestinationIndex(index);
            }}
          >
            {destination.name.toUpperCase()}
          </button>
        </li>
      );
    });
    return (
      <div className="destination-page">
        <h2 className="page-header">
          <span>01</span>PICK YOUR DESTINATION
        </h2>
        <div className="main-content destination-content">
          <div className="destination col-left">
            <img src={destinationData[currDestinationIndex].images.png} />
          </div>
          <div className="destination col-right">
            <ul>
              {destinationButtons}
              {/* <li>
                <button 
                  className={`${}`}
                  onClick={() => {
                    setCurrDestinationIndex(1);
                  }}
                >
                  MARS
                </button>
              </li>
              <li>
                <button 
                  className={`${}`}
                  onClick={() => {
                    setCurrDestinationIndex(2);
                  }}
                >
                  EUROPA
                </button>
              </li>
              <li>
                <button 
                  className={`${}`}
                  onClick={() => {
                    setCurrDestinationIndex(3);
                  }}
                >
                  TITAN
                </button>
              </li> */}
            </ul>
            <h1>{destinationData[currDestinationIndex].name}</h1>
            <p>{destinationData[currDestinationIndex].description}</p>
            <div className="destination-stats">
              <div>
                <p>DISTANCE</p>
                <h4>{destinationData[currDestinationIndex].distance}</h4>
              </div>
              <div>
                <p>TRAVEL</p>
                <h4>{destinationData[currDestinationIndex].travel}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Destination;
