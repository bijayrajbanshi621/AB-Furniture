const supplierForm = document.getElementById("supplierForm");

let suppliers = JSON.parse(localStorage.getItem("suppliers")) || [];

const supplierBody = document.getElementById("supplierBody");

function loadSuppliers() {

supplierBody.innerHTML = "";

if (suppliers.length === 0) {

supplierBody.innerHTML = `
<tr>
<td colspan="5" style="text-align:center;">
No Suppliers Found
</td>
</tr>
`;

return;

}

suppliers.forEach((supplier,index)=>{

supplierBody.innerHTML += `

<tr>

<td>${supplier.name}</td>

<td>${supplier.phone}</td>

<td>${supplier.material}</td>

<td>Rs. ${Number(supplier.due).toLocaleString()}</td>

<td>

<button onclick="deleteSupplier(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

supplierForm.addEventListener("submit",function(e){

e.preventDefault();

const supplier={

name:document.getElementById("supplierName").value,

phone:document.getElementById("supplierPhone").value,

address:document.getElementById("supplierAddress").value,

material:document.getElementById("supplierMaterial").value,

due:Number(document.getElementById("supplierDue").value)

};

suppliers.push(supplier);

localStorage.setItem("suppliers",JSON.stringify(suppliers));

alert("Supplier Saved Successfully");

supplierForm.reset();

loadSuppliers();

});

function deleteSupplier(index){

if(confirm("Delete Supplier?")){

suppliers.splice(index,1);

localStorage.setItem("suppliers",JSON.stringify(suppliers));

loadSuppliers();

}

}

loadSuppliers();