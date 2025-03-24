let futureDate = Date.now() + 15 * 60 * 1000;

export function getTimeDifference() {
  // Get the current date and time
  const now = new Date();

  // Convert the given date to a Date object
  const targetDate = new Date(futureDate);

  //   console.log(targetDate, now);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = targetDate - now;

  // Check if the target date is in the past
  if (differenceInMilliseconds < 0) {
    return null;
  }

  // Calculate the difference in seconds
  const totalSeconds = Math.floor(differenceInMilliseconds / 1000);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
