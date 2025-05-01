import emailjs from "emailjs-com";

window.onload = function () {
    emailjs.init("desG5B5sH6mY5bCTj");

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_fa43xnh", "template_btd4e8a", form)
            .then((result) => {
                console.log("Email sent successfully:", result.status, result.text);
                document.getElementById("form-status").style.display = "block";
                document.getElementById("form-status").textContent = "✅ Message sent successfully!";
                form.reset();
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                document.getElementById("form-status").style.display = "block";
                document.getElementById("form-status").textContent = "❌ Failed to send. Please try again.";
            });
    });
};
