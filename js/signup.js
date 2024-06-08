var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signupBtn = document.getElementById("signupBtn");

var allUsers = JSON.parse(localStorage.getItem("users")) || [];

signupBtn.addEventListener("click", function () {
  console.log(allUsers);
  if (isInputsEmpty()) {
    document.getElementById(
      "incorrect"
    ).innerHTML = `<span class="text-danger d-block mt-3">All inputs is required</span>`;
  } else if (isEmailExist(signupEmail.value)) {
    document.getElementById(
      "incorrect"
    ).innerHTML = `<span class="text-danger d-block mt-3">Email is already exist</span>`;
  } else {
    var user = {
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value
    };
    allUsers.push(user);
    localStorage.setItem("users", JSON.stringify(allUsers));
    localStorage.setItem("userSession", `${user.name}`);
    location.href = "/home.html";
  }
});

function isInputsEmpty() {
  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}

function isEmailExist(email) {
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email.toLowerCase() == email.toLowerCase()) {
      return true;
    }
  }
  return false;
}
