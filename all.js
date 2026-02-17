document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  clearErrors();

  let isValid = true;

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let dob = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;
  let country = document.getElementById("country").value;
  let passport = document.getElementById("passport").value.trim();
  let terms = document.getElementById("terms").checked;

  // Name
  if (name === "" || name.length < 3) {
    showError("nameError", "Enter valid name (min 3 characters)");
    isValid = false;
  }

  // Email
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    showError("emailError", "Enter valid email");
    isValid = false;
  }

  // Phone
  let phonePattern = /^[0-9]{10}$/;
  if (!phone.match(phonePattern)) {
    showError("phoneError", "Enter 10 digit phone number");
    isValid = false;
  }

  // Password
  let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{6,}$/;
  if (!password.match(passwordPattern)) {
    showError(
      "passwordError",
      "Password must contain 1 uppercase, 1 number, 1 special character",
    );
    isValid = false;
  }

  // Confirm Password
  if (password !== confirmPassword) {
    showError("confirmPasswordError", "Passwords do not match");
    isValid = false;
  }

  // DOB
  if (dob === "") {
    showError("dobError", "Select date of birth");
    isValid = false;
  }

  // Gender
  if (gender === "") {
    showError("genderError", "Select gender");
    isValid = false;
  }

  // Country
  if (country === "") {
    showError("countryError", "Select country");
    isValid = false;
  }

  // Passport (Example: 1 letter + 7 digits)
  let passportPattern = /^[A-Z]{1}[0-9]{7}$/;
  if (!passport.match(passportPattern)) {
    showError("passportError", "Passport format: A1234567");
    isValid = false;
  }

  // Terms
  if (!terms) {
    showError("termsError", "You must accept terms");
    isValid = false;
  }

  if (isValid) {
    alert("Form Submitted Successfully!");
    document.getElementById("myForm").reset();
  }
});

function showError(id, message) {
  document.getElementById(id).innerText = message;
}

function clearErrors() {
  let errors = document.querySelectorAll(".error");
  errors.forEach((error) => (error.innerText = ""));
}

function resetForm() {
  document.getElementById("myForm").reset();
  clearErrors();
}
