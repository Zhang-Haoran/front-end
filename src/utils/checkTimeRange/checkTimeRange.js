const checkTimeRange = (time, start, end) => {
  const timeNum = Number(time.replace(":", ""));
  const startNum = Number(start.replace(":", ""));
  const endNum = Number(end.replace(":", ""));

  console.log(timeNum, startNum, endNum);

  if (timeNum > startNum && timeNum < endNum) return true;

  return false;
};

export default checkTimeRange;
