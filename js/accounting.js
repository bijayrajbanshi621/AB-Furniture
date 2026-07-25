const body = document.getElementById("accountBody");

let income = JSON.parse(localStorage.getItem("orders")) || [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function loadAccounting() {

    body.innerHTML = "";

    let totalIncome = 0;
    let totalExpense = 0;

    // Income
    income.forEach(order => {

        totalIncome += Number(order.total);

        body.innerHTML += `
        <tr>
            <td>${order.date}</td>
            <td>Income</td>
            <td>Sale - ${order.product}</td>
            <td>Rs. ${order.total}</td>
        </tr>
        `;

    });

    // Expense
    expenses.forEach(exp => {

        totalExpense += Number(exp.amount);

        body.innerHTML += `
        <tr>
            <td>${exp.date}</td>
            <td>Expense</td>
            <td>${exp.description}</td>
            <td>Rs. ${exp.amount}</td>
        </tr>
        `;

    });

    document.getElementById("income").innerText = "Rs. " + totalIncome;
    document.getElementById("expense").innerText = "Rs. " + totalExpense;
    document.getElementById("profit").innerText = "Rs. " + (totalIncome - totalExpense);

}

loadAccounting();