export function getNextDay(date) {
  let resultDate = new Date(date.valueOf());
  resultDate.setDate(resultDate.getDate() + 1);
  return resultDate;
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

export function getDayString(dateObj) {
  let day = dateObj.getDay();
  let date = dateObj.getDate();
  let month = dateObj.getMonth();

  return days[day] + ", " + months[month] + " " + date;
}
