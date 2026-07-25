alert("orders.js loaded");

const tbody = document.getElementById("ordersTable");

let orders = JSON.parse(localStorage.getItem("orders")) || [];

const products = JSON.parse(localStorage.getItem("products")) || [];

const productSelect = document.getElementById("product");

products.forEach(p => {
    productSelect.innerHTML += `
        <option value="${p.name}">
            ${p.name} (Stock: ${p.stock})
        </option>
    `;
});JSON.parse(localStorage.getItem("orders")) || [];

function loadOrders(){

tbody.innerHTML = "";

let totalSales = 0;
let pending = 0;
let delivered = 0;

orders.forEach((o,index)=>{

totalSales += Number(o.total);

if(o.status=="Pending") pending++;
if(o.status=="Delivered") delivered++;

tbody.innerHTML += `
<tr>

<td>${o.id}</td>

<td>${o.customer}</td>

<td>${o.phone}</td>

<td>${o.product}</td>

<td>${o.qty}</td>

<td>Rs. ${o.total}</td>

<td>${o.status}</td>

<td>${o.date}</td>

<td>

<button onclick="deleteOrder(${index})">

Delete

</button>

</td>

</tr>
`;

});

document.getElementById("totalOrders").innerText = orders.length;

document.getElementById("pendingOrders").innerText = pending;

document.getElementById("deliveredOrders").innerText = delivered;

document.getElementById("totalSales").innerText = "Rs. " + totalSales;

}

function deleteOrder(index){

orders.splice(index,1);

localStorage.setItem("orders",JSON.stringify(orders));

loadOrders();

}

loadOrders();document.getElementById("saveOrder").onclick = function () {

    const productName = document.getElementById("product").value;
    const qty = Number(document.getElementById("qty").value);

    const selected = products.find(p => p.name === productName);

    if (!selected) {
        alert("Product not found!");
        return;
    }

    if (qty > Number(selected.stock)) {
        alert("Not enough stock!");
        return;
    }

    selected.stock = Number(selected.stock) - qty;

    localStorage.setItem("products", JSON.stringify(products));

    const order = {
        id: "#ORD" + (orders.length + 1),
        customer: document.getElementById("customer").value,
        phone: document.getElementById("phone").value,
        product: productName,
        qty: qty,
        total: qty * Number(selected.sellingPrice),
        status: document.getElementById("status").value,
        date: new Date().toLocaleDateString()
    };

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    loadOrders();

    alert("Order Saved Successfully");

window.open("invoice.html", "_blank");

};