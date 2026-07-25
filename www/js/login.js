const form = document.getElementById("loginForm");

const users = [
{
username: "admin",
password: "admin123",
role: "admin"
},
{
username: "staff",
password: "staff123",
role: "staff"
}
];

form.addEventListener("submit", function(e){

e.preventDefault();

const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();

const user = users.find(
u => u.username === username && u.password === password
);

if(user){

localStorage.setItem("loggedIn","true");
localStorage.setItem("role",user.role);
localStorage.setItem("username",user.username);
window.location.href = "admin/dashboard.html";

}else{

document.getElementById("error").innerText =
"Invalid Username or Password";

}

});