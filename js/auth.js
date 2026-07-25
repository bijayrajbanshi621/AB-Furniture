const loggedIn = localStorage.getItem("loggedIn");
const role = localStorage.getItem("role");

if (loggedIn !== "true") {
    window.location.href = "../login.html";
}

const page = window.location.pathname.toLowerCase();

if (
    role === "staff" &&
    (
        page.includes("accounting.html") ||
        page.includes("settings.html") ||
        page.includes("sales-report.html") ||
        page.includes("categories.html")
    )
) {
    alert("Access Denied!");
    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "../login.html";
}