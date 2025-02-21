function numberFormat(num) {
  if (num < 1000) return num;
  if (num < 1_000_000)
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  if (num < 1_000_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
}

export default numberFormat;
