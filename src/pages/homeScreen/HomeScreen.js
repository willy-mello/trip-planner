import React, { useCallback, useEffect, useState } from "react";
import { getLocationsFromServer } from "../../data";
import { generateTenRandomNumbersBetweenZeroAndN } from "../../utils";
import DetailView from "./components/DetailView";
import LocationItem from "./components/LocationItem";
import Spacer from "./components/Spacer";

const HomeScreen = () => {
  const [allLocations, setAllLocations] = useState(null);
  const [locationsLoaded, setLocationsLoaded] = useState(false);
  const [randomLocations, setRandomLocations] = useState(null);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(null);

  useEffect(async () => {
    setAllLocations(await getLocationsFromServer());
  }, []);

  useEffect(() => {
    if (allLocations && allLocations.length) {
      setLocationsLoaded(true);
    }
  }, [allLocations]);

  const grabTenRandomLocations = React.useCallback(() => {
    if (allLocations?.length) {
      const randomNumArray = generateTenRandomNumbersBetweenZeroAndN(
        allLocations.length
      );

      return randomNumArray;
    }
  }, [allLocations]);

  const moveDetailCardForward = React.useCallback(() => {
    return currentLocationIndex === randomLocations.length - 1
      ? setCurrentLocationIndex(0)
      : setCurrentLocationIndex(currentLocationIndex + 1);
  }, [currentLocationIndex, setCurrentLocationIndex]);
  const moveDetailCardBackward = React.useCallback(() => {
    return currentLocationIndex === 0
      ? setCurrentLocationIndex(randomLocations.length - 1)
      : setCurrentLocationIndex(currentLocationIndex - 1);
  }, [currentLocationIndex, setCurrentLocationIndex]);

  const generateNewTripList = () => {
    const locs = grabTenRandomLocations().map((el) => allLocations[el]);
    setRandomLocations(locs);
  };

  return (
    <>
      {currentLocationIndex !== null && <div className="overlay" />}
      {currentLocationIndex !== null && (
        <DetailView
          onClose={() => setCurrentLocationIndex(null)}
          location={randomLocations[currentLocationIndex]}
          moveForward={moveDetailCardForward}
          moveBackward={moveDetailCardBackward}
        />
      )}

      <div
        style={{ width: "100%", justifyContent: "space-evenly" }}
        className="flex-row"
      >
        <div className="flex-col">
          <h5>Trip List</h5>
          {randomLocations && (
            <div className="location-list-container">
              {randomLocations.map((el, idx) => (
                <LocationItem
                  key={`location-item-${el.name}`}
                  location={el}
                  onClick={() => {
                    setCurrentLocationIndex(idx);
                  }}
                  randomLocations={randomLocations}
                  setRandomLocations={setRandomLocations}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex-col">
          <Spacer size={45} />
          <button onClick={() => generateNewTripList()} title="Generate List">
            Generate List
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
