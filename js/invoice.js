const orders = JSON.parse(localStorage.getItem("orders")) || [];

if (orders.length === 0) {
    alert("No Orders Found");
} else {

    const order = orders[orders.length - 1];

    document.getElementById("invoiceNo").textContent = order.id;
    document.getElementById("invoiceDate").textContent = order.date;

    document.getElementById("customerName").textContent =
        "Customer : " + order.customer;

    document.getElementById("customerPhone").textContent =
        "Phone : " + order.phone;

    document.getElementById("invoiceBody").innerHTML = `
        <tr>
            <td>${order.product}</td>
            <td>${order.qty}</td>
            <td>Rs. ${Number(order.total) / Number(order.qty)}</td>
            <td>Rs. ${order.total}</td>
        </tr>
    `;

    document.getElementById("grandTotal").textContent =
        "Rs. " + Number(order.total).toLocaleString();
}