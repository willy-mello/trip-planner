const LOCATIONS_URL =
  "https://api.worldbank.org/v2/countries?format=json&per_page=300";

const getLocationsFromServer = async () => {
  try {
    const response = await fetch(LOCATIONS_URL, {});
    const allLocations = await response.json();
    const cleanedLocations = allLocations[1].filter((location) => {
      return location.capitalCity !== "";
    });
    return cleanedLocations;
  } catch (error) {
    console.error(error);
  }
};

export { getLocationsFromServer };
