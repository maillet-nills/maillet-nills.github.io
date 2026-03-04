const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showAlert(message, type = "success") {
  const existing = document.querySelector(".alert");
  if (existing) existing.remove();

  const icon =
    type === "success"
      ? "bi bi-check-circle-fill"
      : "bi bi-exclamation-triangle-fill";

  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} mt-3`;
  alertDiv.innerHTML = `<i class="${icon} me-2"></i>${message}`;

  const submitBtn = document.querySelector(".d-flex.justify-content-center");
  submitBtn.parentNode.insertBefore(alertDiv, submitBtn);
  setTimeout(() => {
    alertDiv.style.opacity = "1";
  }, 80);
}

async function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    showAlert("Please fill in all fields.", "danger");
    return;
  }

  if (!emailRegex.test(email)) {
    showAlert("Please enter a valid email address.", "danger");
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("Error sending message:", error);
      showAlert("Failed to send your message ! Please try again.", "danger");
    } else {
      showAlert("Your message has been sent successfully !", "success");

      document.getElementById("contact-form").reset();
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    showAlert("An unexpected error occurred ! Please try again.", "danger");
  }
}
