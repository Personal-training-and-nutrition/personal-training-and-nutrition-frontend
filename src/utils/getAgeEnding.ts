export function getAgeEnding(age?: number | null) {
  if (age) {
    const lastDigit = age % 10;
    const secondToLastDigit = Math.floor((age % 100) / 10);

    if (lastDigit === 1 && secondToLastDigit !== 1) {
      return age + ' год';
    } else if (lastDigit >= 2 && lastDigit <= 4 && secondToLastDigit !== 1) {
      return age + ' года';
    } else {
      return age + ' лет';
    }
  }
}
