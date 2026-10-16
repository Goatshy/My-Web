document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var statusEl = document.getElementById("form-status");
    var submitBtn = document.getElementById("submit-btn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
        statusEl.textContent = "";
        statusEl.className = "form-status";

        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };  

        emailjs.send("service_9m1xkeo", "template_9gmeogj", params)
            .then(function () {
                statusEl.textContent = "Message sent. I'll get back to you soon.";
                statusEl.className = "form-status success";
                form.reset();
            })
            .catch(function (error) {
                console.error("EmailJS error:", error);
                statusEl.textContent = "Something went wrong. Please try again.";
                statusEl.className = "form-status error";
            })
            .finally(function () {
                submitBtn.disabled = false;
                submitBtn.textContent = "Send message";
            });
    });
});