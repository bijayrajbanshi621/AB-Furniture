// =========================
// Dashboard Data
// =========================

const products = JSON.parse(localStorage.getItem("products")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];
const customers = JSON.parse(localStorage.getItem("customers")) || [];

// Dashboard Cards

document.getElementById("totalProducts").textContent = products.length;

document.getElementById("totalOrders").textContent = orders.length;

document.getElementById("totalCustomers").textContent = customers.length;

// Total Stock

let totalStock = 0;

products.forEach(product => {
    totalStock += Number(product.stock || 0);
});

document.getElementById("totalStock").textContent = totalStock;

// Low Stock

const lowStock = products.filter(product =>
    Number(product.stock) <= Number(product.lowStock || 5)
);

document.getElementById("lowStock").textContent = lowStock.length;

// Total Sales

let totalSales = 0;

orders.forEach(order => {
    totalSales += Number(order.total || 0);
});

document.getElementById("totalSales").textContent =
"Rs. " + totalSales.toLocaleString();

// Monthly Income

document.getElementById("monthlyIncome").textContent =
"Rs. " + totalSales.toLocaleString();

// Today's Sales

document.getElementById("todaySales").textContent =
"Rs. " + totalSales.toLocaleString();

// Profit (Temporary)

document.getElementById("totalProfit").textContent =
"Rs. " + Math.round(totalSales * 0.20).toLocaleString();
// =========================
// Recent Orders
// =========================

const recentOrdersBody = document.getElementById("recentOrdersBody");

if (recentOrdersBody) {

    recentOrdersBody.innerHTML = "";

    if (orders.length === 0) {

        recentOrdersBody.innerHTML = `
        <tr>
            <td colspan="6" style="text-align:center;">
                No Orders Found
            </td>
        </tr>`;
    } else {

        orders.slice(-5).reverse().forEach(order => {

            let statusClass = "";

            if (order.status === "Pending") {
                statusClass = "pending";
            } else if (order.status === "Processing") {
                statusClass = "processing";
            } else {
                statusClass = "delivered";
            }

            recentOrdersBody.innerHTML += `
            <tr>
                <td>${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.product}</td>
                <td>${order.qty}</td>
                <td>Rs. ${Number(order.total).toLocaleString()}</td>
                <td>
                    <span class="${statusClass}">
                        ${order.status}
                    </span>
                </td>
            </tr>`;
        });

    }

}

// =========================
// Low Stock Table
// =========================

const lowStockBody = document.getElementById("lowStockBody");

if (lowStockBody) {

    lowStockBody.innerHTML = "";

    if (lowStock.length === 0) {

        lowStockBody.innerHTML = `
        <tr>
            <td colspan="3" style="text-align:center;">
                No Low Stock Products
            </td>
        </tr>`;
    } else {

        lowStock.forEach(product => {

            lowStockBody.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.stock}</td>
                <td>
                    <span class="pending">
                        Low Stock
                    </span>
                </td>
            </tr>`;
        });

    }

}