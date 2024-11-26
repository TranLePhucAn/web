function startTrial() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;

  if (email === "") {
    alert("Please enter your email address.");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you for starting your trial!");
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
