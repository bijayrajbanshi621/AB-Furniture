const body = document.getElementById("salesBody");

let orders = JSON.parse(localStorage.getItem("orders")) || [];

function loadSales() {

    body.innerHTML = "";

    let total = 0;

    orders.forEach((o) => {

        total += Number(o.total);

        body.innerHTML += `
        <tr>
            <td>${o.date}</td>
            <td>${o.customer}</td>
            <td>${o.product}</td>
            <td>${o.qty}</td>
            <td>Rs. ${o.total}</td>
        </tr>
        `;

    });

    document.getElementById("todaySales").innerText = "Rs. " + total;
    document.getElementById("monthlySales").innerText = "Rs. " + total;
    document.getElementById("yearlySales").innerText = "Rs. " + total;
    document.getElementById("profit").innerText = "Rs. " + total;

}

loadSales();