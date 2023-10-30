export function calculateAge (bDay: string) {
  const birthDate = new Date(bDay);
  const today = new Date();
  let years = (today.getFullYear() - birthDate.getFullYear());
  if (today.getMonth() < birthDate.getMonth() ||
      today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate()) {
      years--;
  }
  return years;
}