const form = document.getElementById("productForm");
const body = document.getElementById("productBody");

let products = JSON.parse(localStorage.getItem("products")) || [];

function loadProducts() {

body.innerHTML = "";

products.forEach((p, index) => {

body.innerHTML += `
<tr>

<td>${p.image ? `<img src="${p.image}" width="60">` : "-"}</td>

<td>${p.name}</td>

<td>${p.category}</td>

<td>${p.stock}</td>

<td>Rs. ${p.costPrice}</td>

<td>Rs. ${p.sellingPrice}</td>

<td>${p.status}</td>

<td>

<button onclick="deleteProduct(${index})">
Delete
</button>

</td>

</tr>
`;

});

}

loadProducts();

form.addEventListener("submit", function(e){

e.preventDefault();

const file = document.getElementById("image").files[0];

const reader = new FileReader();

reader.onload = function(){

const product = {code: "ABF-" + String(products.length + 1).padStart(4, "0"),

name: document.getElementById("name").value,

category: document.getElementById("category").value,

stock: document.getElementById("stock").value,

costPrice: document.getElementById("costPrice").value,

sellingPrice: document.getElementById("sellingPrice").value,

discount: document.getElementById("discount").value,

description: document.getElementById("description").value,

status: document.getElementById("status").value,

image: file ? reader.result : ""

};

products.push(product);
let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

inventory.push({
    code: product.code,
    name: product.name,
    category: product.category,
    stock: Number(product.stock),
    status: product.status
});

localStorage.setItem("inventory", JSON.stringify(inventory));
localStorage.setItem("products", JSON.stringify(products));

loadProducts();

form.reset();

alert("Product Saved Successfully!");

};

if(file){

reader.readAsDataURL(file);

}else{

reader.onload();

}

});

function deleteProduct(index){

products.splice(index,1);

localStorage.setItem("products", JSON.stringify(products));

loadProducts();

}