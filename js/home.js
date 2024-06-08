var userSession = localStorage.getItem("userSession");
var tbody = document.getElementById("tableBody");
if (userSession == "") {
  location.href = "index.html";
} else {
  document.getElementById("welcomeUser").innerHTML = `Welcome ${userSession}`;
}

function logout() {
  localStorage.removeItem("userSession");
}

var req = new XMLHttpRequest();

req.open("get", "https://forkify-api.herokuapp.com/api/search?q=apple");

req.send();

req.addEventListener("readystatechange", function () {
  if (req.readyState == 4 && req.status == 200) {
    var data = JSON.parse(req.responseText);
    recipes = data.recipes;
    cartona = "";
    for (var i = 0; i < recipes.length; i++) {
      console.log(recipes[i]);
      cartona += `
      <tr>
              <th scope="row">${i + 1}</th>
              <td>${recipes[i].publisher}</td>
              <td>${recipes[i].title}</td>
              <td><img src="${recipes[i].image_url}" alt="${
        recipes[i].title
      }"></td>
      </tr>
      `;
    }
    tbody.innerHTML = cartona;
  }
});
