export function calculateDistance(a, b) {
  return Math.abs(b - a);
}

export function calculateSegmentProduct(a, b, c) {
  return Math.abs((c - b) * (c - a));
}

export function calculateKilobytes(fileSizeInBytes) {
  return Math.floor(fileSizeInBytes / 1024);
}

export function calculateSegments(lengthA, lengthB) {
  return Math.floor(lengthA / lengthB);
}

export function calculateDigitSum(twoDigitNumber) {
  return +twoDigitNumber.toString()[0] + +twoDigitNumber.toString()[1];
}

export function swapHundredsAndTens(threeDigitNumber) {
  return +`${threeDigitNumber.toString()[1]}${threeDigitNumber.toString()[0]}${
    threeDigitNumber.toString()[2]
  }`;
}

export function getHundredsDigit(number) {
  return number >= 999 ? Math.floor((number % 1000) / 100) : 0;
}

export function getFullHours(seconds) {
  console.log(Math.floor(+seconds) !== +seconds);
  if (+seconds < 0 || Math.floor(+seconds) !== +seconds) {
    return;
  } else if (seconds === 0) {
    return 0;
  }
  return Math.floor(+seconds / 3600);
}

getFullHours(123.5);

export function getDayOfWeek(dayOfYear) {
  return dayOfYear % 7;
}

export function countSquares(A, B, C) {
  const areaBig = A * B;
  const areaSmall = C * C;
  return Math.floor(areaBig / areaSmall);
}
