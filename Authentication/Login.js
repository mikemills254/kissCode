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

document.getElementById("submit-login").addEventListener("click", async (event) => {
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

    url = "http://localhost:8000/api/v1/login"

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            password
        })
    })

    if(!res.ok) {
        throw new Error("error loging in", res.statusText)
    }
    const data = await res.json()
    console.log("data",data)

    localStorage.setItem("accessToken",data.accessToken)
    // window.location.replace = "/index.html";

    emailInput.value = "";
    passwordInput.value = "";
});

