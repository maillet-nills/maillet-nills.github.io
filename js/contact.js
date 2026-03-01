const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again.");
    } else {
      alert("Your message has been sent successfully!");
      document.getElementById("contact-form").reset();
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    alert("An unexpected error occurred. Please try again.");
  }
}
