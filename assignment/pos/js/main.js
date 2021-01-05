function showDashboard() {
    document.getElementById("dashboard").style.display="block";
    document.getElementById("orders").style.display="none";
    document.getElementById("items").style.display="none";
    document.getElementById("customers").style.display="none";

}

function showOrders() {
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="block";
    document.getElementById("items").style.display="none";
    document.getElementById("customers").style.display="none";

}

function showItems() {
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("items").style.display="block";
    document.getElementById("customers").style.display="none";

}
function showCustomers() {
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("items").style.display="none";
    document.getElementById("customers").style.display="block";

}