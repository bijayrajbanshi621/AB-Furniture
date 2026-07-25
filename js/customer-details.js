// ===============================
// Customer Details
// ===============================

const params = new URLSearchParams(window.location.search);

const phone = params.get("phone");

const orders = JSON.parse(localStorage.getItem("orders")) || [];

const customerOrders = orders.filter(order => order.phone === phone);

const historyBody = document.getElementById("historyBody");

const customerName = document.getElementById("customerName");

const customerPhone = document.getElementById("customerPhone");

const totalOrders = document.getElementById("customerOrders");

const totalPurchase = document.getElementById("customerPurchase");

if(customerOrders.length===0){

customerName.textContent="Customer Not Found";

}else{

customerName.textContent=customerOrders[0].customer;

customerPhone.textContent="Phone : "+customerOrders[0].phone;

totalOrders.textContent=customerOrders.length;

let purchase=0;

historyBody.innerHTML="";

customerOrders.forEach(order=>{

purchase+=Number(order.total||0);

let statusClass="pending";

if(order.status==="Processing"){
statusClass="processing";
}

if(order.status==="Delivered"){
statusClass="delivered";
}

historyBody.innerHTML+=`

<tr>

<td>${order.id}</td>

<td>${order.product}</td>

<td>${order.qty}</td>

<td>Rs. ${Number(order.total).toLocaleString()}</td>

<td>

<span class="${statusClass}">

${order.status}

</span>

</td>

</tr>

`;

});

totalPurchase.textContent="Rs. "+purchase.toLocaleString();

}