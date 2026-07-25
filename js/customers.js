// ===============================
// Customers Module
// ===============================
alert("customers.js loaded");
const orders = JSON.parse(localStorage.getItem("orders")) || [];

const customersBody = document.getElementById("customersBody");

const customers = {};

orders.forEach(order => {

    const phone = order.phone;

    if (!customers[phone]) {

        customers[phone] = {
            name: order.customer,
            phone: order.phone,
            orders: 0,
            total: 0
        };

    }

    customers[phone].orders++;

    customers[phone].total += Number(order.total);

});

customersBody.innerHTML = "";

Object.values(customers).forEach(customer => {

    customersBody.innerHTML += `
    <tr>

        <td>
<a href="customer-details.html?phone=${customer.phone}">
${customer.name}
</a>
</td>

        <td>${customer.phone}</td>

        <td>${customer.orders}</td>

        <td>Rs. ${customer.total.toLocaleString()}</td>

    </tr>
    `;

});

if(Object.keys(customers).length===0){

customersBody.innerHTML=`
<tr>

<td colspan="4" style="text-align:center">

No Customers Found

</td>

</tr>
`;

}