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
let result = calculateFinalScore("hello");
console.log(result);
