export const getFirstLetters = (name: string): string => {
  const firstLetter = name.split(' ')[0].charAt(0);
  const secondLetter = name.split(' ')[1].charAt(0);
  return firstLetter + secondLetter;
};
