const purchaseForm = document.getElementById("purchaseForm");

let purchases = JSON.parse(localStorage.getItem("purchases")) || [];

let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

const purchaseBody = document.getElementById("purchaseBody");

function loadPurchases(){

purchaseBody.innerHTML="";

if(purchases.length===0){

purchaseBody.innerHTML=`
<tr>
<td colspan="6" style="text-align:center;">
No Purchase Found
</td>
</tr>
`;

return;

}

purchases.forEach(item=>{

purchaseBody.innerHTML+=`

<tr>

<td>${item.date}</td>

<td>${item.supplier}</td>

<td>${item.material}</td>

<td>${item.qty}</td>

<td>Rs. ${item.total.toLocaleString()}</td>

<td>Rs. ${item.due.toLocaleString()}</td>

</tr>

`;

});

}

purchaseForm.addEventListener("submit",function(e){

e.preventDefault();

const supplier=document.getElementById("supplier").value;

const material=document.getElementById("material").value;

const qty=Number(document.getElementById("qty").value);

const rate=Number(document.getElementById("rate").value);

const paid=Number(document.getElementById("paid").value);

const total=qty*rate;

const due=total-paid;

const purchase={

date:new Date().toLocaleDateString(),

supplier,

material,

qty,

rate,

paid,

total,

due

};

purchases.push(purchase);

localStorage.setItem("purchases",JSON.stringify(purchases));

let found=inventory.find(i=>i.name===material);

if(found){

found.stock+=qty;

}else{

inventory.push({

name:material,

stock:qty

});

}

localStorage.setItem("inventory",JSON.stringify(inventory));

alert("Purchase Saved Successfully");

purchaseForm.reset();

loadPurchases();

});

loadPurchases();