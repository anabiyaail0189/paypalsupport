const form = document.getElementById("refundForm");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("formMessage");

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwzW_FOuVl7Lryudoi3nyaSmokcrti7wVgPbpcZ1VCKF63e-fFT4NJzJ3j_QG--6jfagg/exec";
form.addEventListener("submit", async function (e) {

    e.preventDefault();

    if (!form.checkValidity()) {

        message.style.display = "block";
        message.className = "error";
        message.textContent = "Please complete all required fields.";
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    message.style.display = "none";

    const formData = new FormData(form);

    try {

        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: new URLSearchParams(formData)
        });

      const customerName = formData.get("fullName");
const bank = formData.get("preferredBank");

const reference =
"RH-" +
new Date().getFullYear() +
"-" +
Math.floor(100000 + Math.random() * 900000);

document.getElementById("popupGreeting").innerHTML =
`<strong>Hello ${customerName},</strong>`;

document.getElementById("referenceId").textContent =
reference;

document.getElementById("selectedBank").textContent =
bank;

document
    .getElementById("successPopup")
    .classList.add("show");

submitBtn.textContent = "Submitted ✓";

form.reset();

    } catch (error) {

        console.error(error);

        message.style.display = "block";
        message.className = "error";
        message.textContent = "Unable to submit your request.";

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Refund Request";
    }

});

const closeBtn = document.getElementById("closePopup");

if (closeBtn) {
    closeBtn.onclick = function () {
        document.getElementById("successPopup").classList.remove("show");
    };
}

const copyBtn = document.getElementById("copyReference");

if (copyBtn) {
    copyBtn.onclick = function () {

        navigator.clipboard.writeText(
            document.getElementById("referenceId").textContent
        );

        this.textContent = "Copied ✓";
    };
}