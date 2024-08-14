export const formatTimestampToReadableDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const options = { weekday: "long", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const formatUnixTimestampTo12Hour = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${formattedMinutes} ${ampm}`;
};

export function groupByDayLocal(forecastData) {
  // Helper function to get local date string in YYYY-MM-DD format from UNIX timestamp
  function getLocalDateString(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert UNIX timestamp to milliseconds
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based in JavaScript
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Object to store grouped data by local date
  const groupedData = {};

  // Iterate over each forecast object in the array
  forecastData.forEach((item) => {
    const dateString = getLocalDateString(item.dt);

    // If the date is not already a key in the groupedData object, create it
    if (!groupedData[dateString]) {
      groupedData[dateString] = [];
    }

    // Add the forecast item to the corresponding local date group
    groupedData[dateString].push(item);
  });

  // Convert the groupedData object to an array of arrays
  return Object.values(groupedData);
}
