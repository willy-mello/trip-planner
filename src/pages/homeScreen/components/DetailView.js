import React, { useEffect, useMemo, useState } from "react";
import Spacer from "./Spacer";

export default function DetailView({
  location,
  onClose,
  moveForward,
  moveBackward,
}) {
  const [notes, setNotes] = useState(undefined);
  const localStorageKey = useMemo(() => {
    return `trip-planner-${location.id}`;
  }, [location?.id]);
  useEffect(() => {
    const localNotes = localStorage.getItem(localStorageKey);

    localNotes ? setNotes(localNotes) : setNotes("");
  }, [localStorageKey]);
  const saveNotesToLocalStorage = () => {
    localStorage.setItem(localStorageKey, notes);
  };
  const resetState = () => {
    setNotes("");
  };
  return (
    <div className="flex-col detail-view">
      <div className="flex-col detail-item">
        <div className="flex-col" style={{ flexWrap: "wrap" }}>
          <div
            className="flex-row"
            style={{ width: "100%", justifyContent: "flex-end" }}
          >
            <button style={{ width: "70px" }} onClick={onClose}>
              X
            </button>
          </div>
          <Spacer size={10} />
          <span>Country: {location.name}</span>
          <span>Capital City: {location.capitalCity}</span>
        </div>
        <Spacer size={10} />

        <Spacer size={10} />
        <div className="flex-row" style={{ padding: "4px" }}>
          <textarea
            type="text"
            placeholder="Add some notes"
            value={notes}
            style={{ width: "80%" }}
            onChange={(e) => {
              e.stopPropagation();
              setNotes(e.target.value);
            }}
            id={"notes-field"}
          />
          <Spacer size={4} />
          <div className="flex-col">
            <button
              type="submit"
              htmlFor={"notes-field"}
              onClick={saveNotesToLocalStorage}
            >
              Save notes
            </button>
          </div>
        </div>
        <Spacer size={14} />
        <div className="flex-row" style={{ justifyContent: "space-between" }}>
          <button
            style={{ width: "70px" }}
            onClick={() => {
              resetState();
              moveBackward();
            }}
          >
            back
          </button>

          <button
            style={{ width: "70px" }}
            onClick={() => {
              resetState();
              moveForward();
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
