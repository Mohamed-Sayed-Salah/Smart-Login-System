var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var signinBtn = document.getElementById("signinBtn");

var allUsers = JSON.parse(localStorage.getItem("users")) || [];
var userSession = localStorage.getItem("userSession");
var currentUser;
console.log(allUsers);

if (userSession) {
  location.href = "home.html";
}

signinBtn.addEventListener("click", function () {
  if (isInputsEmpty()) {
    document.getElementById(
      "incorrect"
    ).innerHTML = `<span class="text-danger d-block mt-3">All inputs is required</span>`;
  } else {
    var user = {
      email: signinEmail.value,
      password: signinPassword.value
    };
    var isUserFound = false;
    for (var i = 0; i < allUsers.length; i++) {
      if (
        allUsers[i].email == user.email &&
        allUsers[i].password == user.password
      ) {
        isUserFound = true;
        currentUser = allUsers[i];
      }
    }
    if (isUserFound) {
      localStorage.setItem("userSession", `${currentUser.name}`);
      location.href = "/home.html";
    } else {
      document.getElementById(
        "incorrect"
      ).innerHTML = `<span class="text-danger d-block mt-3">incorrect email or password</span>`;
    }
  }
});

function isInputsEmpty() {
  if (signinEmail.value == "" || signinPassword.value == "") {
    return true;
  } else {
    return false;
  }
}
