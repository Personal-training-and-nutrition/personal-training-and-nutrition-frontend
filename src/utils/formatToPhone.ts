export const formatToPhone = (event:  React.ChangeEvent<HTMLInputElement>) => {

  event.target.value=event.target.value.replace(/\D/g,'');

  const input = event.target.value.substring(0,11);
  const countryCode = input.substring(0,1);
  const areaCode = input.substring(1,4);
  const middle = input.substring(4,7);
  const preLast = input.substring(7,9);
  const last = input.substring(9,11);

  if(input.length > 9) {
    event.target.value = `${countryCode} (${areaCode}) ${middle}-${preLast}-${last}`
  } else if(input.length > 7){
    event.target.value = `${countryCode} (${areaCode}) ${middle}-${preLast}`
  } else if(input.length > 4) {
    event.target.value = `${countryCode} (${areaCode}) ${middle}`
  } else if(input.length > 3) {
    event.target.value = `${countryCode} (${areaCode}`
  } else if(input.length <= 1 ) {
    event.target.value = `${countryCode}`
  }
};