export const getRandomNumber = (min, max) => {
  const amplitud = max - min;
  const ramdonNumber = Math.random() * amplitud;

  return min + Math.round(ramdonNumber);
};
