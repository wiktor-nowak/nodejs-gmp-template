const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 1000);
};

console.log(getRandomNumber());

export default getRandomNumber;
