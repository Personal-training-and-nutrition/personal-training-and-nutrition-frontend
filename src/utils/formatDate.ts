const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

const getNumberMonth = (date: string) => {
  const monthNumber = (month.findIndex((item, index) => (item === date) && index) + 1)
  if(monthNumber <= 9){
    return `0${String(monthNumber)}`
  }
  return monthNumber
}
const getNameMonth = (date: string ) => month.find((item, index) => (index + 1) === Number(date) ? item : '')


// const formatMonth = (n: string) => {
//   if (n === '01') return 'января';
//   if (n === '02') return 'февраля';
//   if (n === '03') return 'марта';
//   if (n === '04') return 'апреля';
//   if (n === '05') return 'мая';
//   if (n === '06') return 'июня';
//   if (n === '07') return 'июля';
//   if (n === '08') return 'августа';
//   if (n === '09') return 'сентября';
//   if (n === '10') return 'октября';
//   if (n === '11') return 'ноября';
//   if (n === '12') return 'декабря';
// };
export const formatDate = (date: IUser['dob']): string => {
  if (date) {
    const arr = date?.split('-');
    const year = arr[0];
    const month = getNameMonth(arr[1]);
    const day = arr[2];

    return day + ' ' + month + ' ' + year;
  }
  return ''
};


export const formatDateToSent = (date: IUser['dob']): string => {
  if (date) {
    const arr = date?.split(' ');
    const year = arr[2];
    const month = getNumberMonth(arr[1])
    const day = arr[0];

    return year + '-' + month + '-' + day;
  }
  return ''
};