const SERVICE_ID = "service_ixpnav6";
const TEMPLATE_ID = "template_6z6tpbc";
const PUBLIC_KEY = "lpMC3NGfFvKeLzc3L";

emailjs.init({
    publicKey: PUBLIC_KEY
});

const form = document.querySelector("#contact-form");
const submitBtn = form.querySelector(".submit-btn");
const statusMessage = document.querySelector("#status-message");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    submitBtn.disabled = true;
    statusMessage.textContent = "Sending your message...";

    try {
        await emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            form
        );

        statusMessage.textContent =
            "Your message has been sent successfully!";

        form.reset();

    } catch (error) {
        console.error("EmailJS error:", error);

        statusMessage.textContent =
            "Unable to send your message. Please try again.";
    } finally {
        submitBtn.disabled = false;
    }
});
