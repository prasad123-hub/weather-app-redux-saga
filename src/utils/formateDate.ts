export function FormateDate(dateString: string) {
  // Convert the date string to a Date object
  const date = new Date(dateString);

  // Define an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the day of the month
  const dayOfMonth = date.getDate();

  // Get the month name
  const monthName = monthNames[date.getMonth()];

  // Get the day of the week name
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });

  // Create the formatted date string
  const formattedDateString = `${dayOfWeek} ${dayOfMonth}, ${monthName}`;

  return formattedDateString;
}
