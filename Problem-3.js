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
let result = checkDigitsInName(["Raj"]);
console.log(result);
