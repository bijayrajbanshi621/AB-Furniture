// ============================
// Manufacturing Module
// ============================

const form = document.getElementById("workOrderForm");

let workOrders = JSON.parse(localStorage.getItem("workOrders")) || [];

form.addEventListener("submit", function(e){

e.preventDefault();

const workOrder = {

id: "WO-" + Date.now(),

date: new Date().toLocaleDateString(),

furniture: document.getElementById("furnitureName").value,

qty: Number(document.getElementById("qty").value),

plywood: Number(document.getElementById("plywood").value),

laminate: Number(document.getElementById("laminate").value),

edgeBand: Number(document.getElementById("edgeBand").value),

handles: Number(document.getElementById("handles").value),

hinges: Number(document.getElementById("hinges").value),

screws: Number(document.getElementById("screws").value),

glue: Number(document.getElementById("glue").value),

labour: Number(document.getElementById("labour").value),

otherCost: Number(document.getElementById("otherCost").value)

};

workOrders.push(workOrder);

localStorage.setItem("workOrders", JSON.stringify(workOrders));

alert("Work Order Saved Successfully");

form.reset();
loadWorkOrders();
});
// ==========================
// Show Work Orders
// ==========================

const workOrderBody = document.getElementById("workOrderBody");

function loadWorkOrders() {

    if (!workOrderBody) return;

    workOrderBody.innerHTML = "";

    if (workOrders.length === 0) {

        workOrderBody.innerHTML = `
        <tr>
            <td colspan="7" style="text-align:center">
                No Work Orders
            </td>
        </tr>`;

        return;
    }

    workOrders.forEach((item,index)=>{

        workOrderBody.innerHTML += `

<tr>

<td>${item.id}</td>

<td>${item.date}</td>

<td>${item.furniture}</td>

<td>${item.qty}</td>

<td>${item.plywood}</td>

<td>Rs. ${item.labour}</td>

<td>

<button onclick="deleteWorkOrder(${index})">

Delete

</button>

</td>

</tr>

`;

    });

}

loadWorkOrders();

function deleteWorkOrder(index){

if(confirm("Delete this Work Order?")){

workOrders.splice(index,1);

localStorage.setItem("workOrders",JSON.stringify(workOrders));

loadWorkOrders();

}

}