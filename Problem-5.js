function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) === false ||
    typeof serialNumber !== "number"
  ) {
    return "Invalid Input";
  } else {
    let totalTime = 0;
    let avgerageTime;
    let arrLen = waitingTimes.length;
    for (let time of waitingTimes) {
      totalTime += time;
      avgerageTime = Math.round(totalTime / arrLen);
    }
    if (serialNumber > arrLen) {
      let serialRemain = serialNumber - arrLen - 1;
      return serialRemain * avgerageTime;
    }
  }
}

console.log(waitingTime([13, 2], 6));
