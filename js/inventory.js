const body = document.getElementById("inventoryBody");

let products = JSON.parse(localStorage.getItem("products")) || [];

function loadInventory() {

body.innerHTML = "";

products.forEach((p) => {

let status = "";

if (parseInt(p.stock) <= 2) {
status = "<span class='pending'>Low Stock</span>";
} else if (parseInt(p.stock) <= 5) {
status = "<span class='processing'>Running Low</span>";
} else {
status = "<span class='delivered'>In Stock</span>";
}

body.innerHTML += `
<tr>

<td>${p.image ? `<img src="${p.image}" width="60">` : "-"}</td>

<td>${p.name}</td>

<td>${p.category}</td>

<td>${p.stock}</td>

<td>${status}</td>

</tr>
`;

});

}

loadInventory();

const search = document.getElementById("search");

search.addEventListener("keyup", function () {

const keyword = search.value.toLowerCase();

body.innerHTML = "";

products
.filter(p => p.name.toLowerCase().includes(keyword))
.forEach((p) => {

let status = "";

if (parseInt(p.stock) <= 2) {
status = "<span class='pending'>Low Stock</span>";
} else if (parseInt(p.stock) <= 5) {
status = "<span class='processing'>Running Low</span>";
} else {
status = "<span class='delivered'>In Stock</span>";
}

body.innerHTML += `
<tr>

<td>${p.image ? `<img src="${p.image}" width="60">` : "-"}</td>

<td>${p.name}</td>

<td>${p.category}</td>

<td>${p.stock}</td>

<td>${status}</td>

</tr>
`;

});

});