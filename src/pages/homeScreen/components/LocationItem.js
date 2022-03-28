import React, { useCallback } from "react";

export default function LocationItem({
  location,
  onClick,
  randomLocations,
  setRandomLocations,
}) {
  const itemCanMoveUp = React.useCallback(
    (item) => {
      if (randomLocations && randomLocations?.length) {
        const index = randomLocations.findIndex((el) => el.id === item.id);

        return index !== 0;
      }
      return false;
    },
    [randomLocations]
  );
  const itemCanMoveDown = React.useCallback(
    (item) => {
      if (randomLocations && randomLocations?.length) {
        const index = randomLocations.findIndex((el) => el.id === item.id);

        return index !== randomLocations.length - 1;
      }
      return false;
    },
    [randomLocations]
  );

  const moveItemUp = useCallback(
    (item) => {
      const copyOfArray = [...randomLocations];
      const index = randomLocations.findIndex((el) => el.id === item.id);
      copyOfArray.splice(index, 1);
      copyOfArray.splice(index - 1, 0, item);
      setRandomLocations(copyOfArray);
    },
    [randomLocations, setRandomLocations]
  );
  const moveItemDown = useCallback(
    (item) => {
      const copyOfArray = [...randomLocations];
      const index = randomLocations.findIndex((el) => el.id === item.id);

      copyOfArray.splice(index, 1);

      copyOfArray.splice(index + 1, 0, item);

      setRandomLocations(copyOfArray);
    },
    [randomLocations, setRandomLocations]
  );
  return (
    <div className="flex-col location-item">
      <div className="flex-row">
        <div className="flex-col" style={{ justifyContent: "center" }}>
          {itemCanMoveUp(location) && (
            <button onClick={() => moveItemUp(location)}>^</button>
          )}
          {itemCanMoveDown(location) && (
            <button onClick={() => moveItemDown(location)}>v</button>
          )}
        </div>
        <div style={{ width: "80%", flexWrap: "wrap" }}>
          <span>{location.name}</span>
        </div>
        <div className="flex-col" style={{ justifyContent: "center" }}>
          <button onClick={onClick}>View Details</button>
        </div>
      </div>
    </div>
  );
}
