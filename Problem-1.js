function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid input";
  }
  if (0 <= income && 0 <= expenses && income >= expenses) {
    let calculatedTax = (income - expenses) * 0.2;
    return calculatedTax;
  }
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let output = email.split("@");
  let userName = output[0];
  let domainName = output[1];
  return userName + " sent you an email from " + domainName;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid input";
  } else {
    for (let i of name) {
      if (!isNaN(i)) {
        return true;
      }
    }
    return false;
  }
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  } else if (
    typeof obj.name === "string" &&
    typeof obj.testScore === "number" &&
    typeof obj.schoolGrade === "number" &&
    typeof obj.isFFamily === "boolean"
  ) {
    if (
      obj.testScore <= 50 &&
      obj.schoolGrade <= 30 &&
      obj.isFFamily === true
    ) {
      let finalScore = obj.testScore + obj.schoolGrade + 20;
      if (finalScore >= 80) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}

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
