const form = document.getElementById("settingsForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const settings = {

shopName: document.getElementById("shopName").value,

ownerName: document.getElementById("ownerName").value,

phone: document.getElementById("phone").value,

email: document.getElementById("email").value,

address: document.getElementById("address").value

};

localStorage.setItem("shopSettings", JSON.stringify(settings));

alert("Settings Saved Successfully!");

});

window.onload = function(){

const settings = JSON.parse(localStorage.getItem("shopSettings"));

if(!settings) return;

document.getElementById("shopName").value = settings.shopName || "";

document.getElementById("ownerName").value = settings.ownerName || "";

document.getElementById("phone").value = settings.phone || "";

document.getElementById("email").value = settings.email || "";

document.getElementById("address").value = settings.address || "";

};