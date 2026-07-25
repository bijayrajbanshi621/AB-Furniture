const form = document.getElementById("categoryForm");
const body = document.getElementById("categoryBody");

let categories = JSON.parse(localStorage.getItem("categories")) || [];

function loadCategories() {

    body.innerHTML = "";

    categories.forEach((category, index) => {

        body.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${category}</td>
            <td>
                <button onclick="deleteCategory(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

}

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const categoryName = document.getElementById("categoryName").value;

    categories.push(categoryName);

    localStorage.setItem("categories", JSON.stringify(categories));

    loadCategories();

    form.reset();

});

function deleteCategory(index) {

    categories.splice(index, 1);

    localStorage.setItem("categories", JSON.stringify(categories));

    loadCategories();

}

loadCategories();