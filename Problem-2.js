function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let output = email.split("@");
  let userName = output[0];
  let domainName = output[1];
  return userName + " sent you an email from " + domainName;
}
