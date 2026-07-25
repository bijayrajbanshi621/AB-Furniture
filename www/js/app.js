// =========================
// SCROLL TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

// =========================
// HERO FADE ANIMATION
// =========================

const hero = document.querySelector(".hero");

window.addEventListener("load", () => {

hero.style.opacity = "1";

hero.style.transform = "translateY(0)";

});

// =========================
// ADD TO CART DEMO
// =========================

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(btn => {

btn.addEventListener("click", () => {

alert("✅ Product added to cart!");

});

});

// =========================
// SEARCH
// =========================

const search = document.getElementById("search");

if (search) {

search.addEventListener("keyup", function () {

console.log(search.value);

});

}

// =========================
// DARK MODE
// =========================

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

});

}