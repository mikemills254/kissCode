document.getElementById("eye").addEventListener("click", () => {
    const password = document.getElementById("password");
    const eyeIcon = document.getElementById("eye");

    if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.remove("bi-eye-slash");
        eyeIcon.classList.add("bi-eye");
    } else {
        password.type = "password";
        eyeIcon.classList.remove("bi-eye");
        eyeIcon.classList.add("bi-eye-slash");
    }
});

document.getElementById("submit-login").addEventListener("click", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    const email = emailInput.value.trim(); 
    const password = passwordInput.value.trim();

    if (!email || !password) {
        console.error("Email and password are required");
        return;
    }


    console.log("Email:", email);
    console.log("Password:", password);

    emailInput.value = "";
    passwordInput.value = "";
});

