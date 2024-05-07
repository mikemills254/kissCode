document.addEventListener("DOMContentLoaded", function() {
    fetch("Dashboard/Sidebar.html")
        .then(response => response.text())
        .then(html => {
            document.querySelectorAll(".sidebar-container").forEach(function(element) {
                element.innerHTML = html;
            });
        })
        .catch(error => {
            console.error("Error loading sidebar:", error);
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch("Dashboard/Topbar.html")
        .then(response => response.text())
        .then(html => {
            document.querySelectorAll(".topbar-container").forEach(function(element) {
                element.innerHTML = html;
            });
        })
        .catch(error => {
            console.error("Error loading sidebar:", error);
        });
});