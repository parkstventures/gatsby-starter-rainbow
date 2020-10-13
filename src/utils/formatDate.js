export default (date) => {
  const now = new Date(date)

   return now.toDateString()
  
  //return `${now.getDay()} ${now.getMonth() + 1} ${now.getDate()} ${now.getFullYear()} `
}
