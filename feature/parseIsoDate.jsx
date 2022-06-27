export default function parseIsoDate(date) {
  const months = [
    "Janury",
    "Februry",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const a = new Date(date);
  const year = a.getFullYear();
  const month = a.getMonth();
  const day = a.getDay();
  const hour = a.getHours();
  const minutes = a.getMinutes();
  return `${months[month - 1]} ${day} ,${year}-${hour}:${minutes} ${
    hour > 12 ? "PM" : "AM"
  }`;
}
