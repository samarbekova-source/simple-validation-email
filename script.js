function validate() {
  const email = document.getElementById("text").value;

  const regx = /^([a-zA-z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regx.test(email)) {
    alert("You have provided a valid Email ID");
    return true;
  } else {
    alert("Sorry, you entered Incorrect Email ID");
    return false;
  }
}
