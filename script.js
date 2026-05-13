// Get form
const form = document.getElementById("loginForm");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    try {
        // API call
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            message.style.color = "green";
            message.innerText = data.message;
        } else {
            message.style.color = "red";
            message.innerText = data.message;
        }

    } catch (error) {
        message.style.color = "red";
        message.innerText = "Server error ❌";
    }
});