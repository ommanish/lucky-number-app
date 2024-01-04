// Numerology calculation utilities

export const calculateLifePathNumber = (birthDate) => {
  const sum = birthDate
    .split("-")
    .join("")
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  return sum % 9 || 9;
};

export const generateLuckyNumbers = () => {
  const luckyNumbers = new Set();
  while (luckyNumbers.size < 5) {
    luckyNumbers.add(Math.floor(Math.random() * 64) + 1);
  }
  return Array.from(luckyNumbers);
};

export const generateSpecialLuckyNumber = () =>
  Math.floor(Math.random() * 26) + 1;

export const calculateCombinedNumber = (
  birthDate,
  birthTime,
  specificDate,
  specificTime
) => {
  const dateString = `${birthDate.replace(/-/g, "")}${birthTime.replace(
    /:/g,
    ""
  )}${specificDate.replace(/-/g, "")}${specificTime.replace(/:/g, "")}`;

  let sum = dateString
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

  // Reduce the sum to a single digit (or a master number like 11, 22)
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }

  return sum;
};
