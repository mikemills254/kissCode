document.addEventListener("DOMContentLoaded", function() {
    fetch("Sidebar.html")
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
    fetch("Topbar.html")
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