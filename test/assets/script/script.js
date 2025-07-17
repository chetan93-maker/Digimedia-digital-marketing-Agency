document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, subject, message })
    });

    const data = await response.json();
    console.log("Server Response:", data);

    if (response.ok) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Error: " + data.error);
    }
});
