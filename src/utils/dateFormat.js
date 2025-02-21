function dateFormat(uploadDate) {
  const uploadMilli = Date.parse(uploadDate);
  const todayMilli = Date.now();
  const diff = todayMilli - uploadMilli;

  const seconds = Math.floor(diff / 1000);
  if (seconds < 60)
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60)
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} ${days === 1 ? "day" : "days"} ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} ${months === 1 ? "month" : "months"} ago`;

  const years = Math.floor(days / 365);
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}
export default dateFormat;
