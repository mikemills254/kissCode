document.addEventListener('DOMContentLoaded', () => {
    alert("clicked")
    document.getElementById("account").addEventListener('click', () => {
        console.log("clicked");
    });
});
