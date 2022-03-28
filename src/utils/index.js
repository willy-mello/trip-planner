const getRandomNumberBetweenZeroAndN = (n) => {
  // with only 211 countries, the chances of getting duplicates is quite high,
  // getting duplicates breaks the app.
  return Math.floor(Math.random() * n);
};

const generateTenRandomNumbersBetweenZeroAndN = (n) => {
  const emptyArray = Array(10).fill(undefined);
  const arrayToReturn = emptyArray.map((el) => {
    const newEl = getRandomNumberBetweenZeroAndN(n);

    return newEl;
  });

  return arrayToReturn;
};

export { generateTenRandomNumbersBetweenZeroAndN };
