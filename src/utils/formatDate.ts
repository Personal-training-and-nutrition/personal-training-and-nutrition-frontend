const formatMonth = (n: string) => {
  if (n === '01') return'января'
  if (n === '02') return 'февраля'
  if (n === '03') return 'марта'
  if (n === '04') return 'апреля'
  if (n === '05') return 'мая'
  if (n === '06') return 'июня'
  if (n === '07') return 'июля'
  if (n === '08') return 'августа'
  if (n === '09') return 'сентября'
  if (n === '10') return 'октября'
  if (n === '11') return 'ноября'
  if (n === '12') return 'декабря'
}
export const formatDate = (date: string) => {
   const arr = date.split('-')
   const year = arr[0]
   const month = formatMonth(arr[1])
   const day = arr[2]

   return day + ' ' + month + ' ' + year;
 }