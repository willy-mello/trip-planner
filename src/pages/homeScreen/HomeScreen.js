import React, { useEffect, useState } from "react";
import { getLocationsFromServer } from "../../data";
import Spacer from "./components/Spacer";

const HomeScreen = () => {
  const [allLocations, setAllLocations] = useState(null);
  const [locationsLoaded, setLocationsLoaded] = useState(false);
  const [randomLocations, setRandomLocations] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(async () => {
    setAllLocations(await getLocationsFromServer());
  }, []);

  useEffect(() => {
    if (allLocations && allLocations.length) {
      setLocationsLoaded(true);
      console.log({ allLocations });
    }
  }, [allLocations]);

  const grabTenRandomLocations = () => {};

  return (
    <>
      {currentLocation && <div className="overlay" />}

      <div
        style={{ width: "100%", justifyContent: "space-evenly" }}
        className="flex-row"
      >
        <div className="flex-col">
          <h5>Trip List</h5>
          <div></div>
        </div>
        <div className="flex-col">
          <Spacer size={45} />
          <button title="Generate List">Generate List</button>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
