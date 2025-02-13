document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  // Function to show the toast message
  function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to handle validation first

    // Clear previous error messages
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((error) => (error.textContent = ""));

    let hasError = false;

    // First Name Validation
    const firstName = document.getElementById("firstName");
    if (!firstName.value) {
      document.getElementById("firstNameError").textContent =
        "First Name is required.";
      hasError = true;
    }

    // Last Name Validation
    const lastName = document.getElementById("lastName");
    if (!lastName.value) {
      document.getElementById("lastNameError").textContent =
        "Last Name is required.";
      hasError = true;
    }

    // Email Validation
    const email = document.getElementById("emailAddress");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.value || !emailRegex.test(email.value)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      hasError = true;
    }

    // Query Type Validation
    const queryType = document.querySelector(
      'input[name="query-type"]:checked'
    );
    if (!queryType) {
      document.getElementById("queryTypeError").textContent =
        "Please select a query type.";
      hasError = true;
    }

    // Message Validation
    const message = document.getElementById("message");
    if (!message.value) {
      document.getElementById("messageError").textContent =
        "Message is required.";
      hasError = true;
    }

    // Consent Validation
    const consent = document.querySelector('input[name="consent"]');
    if (!consent.checked) {
      document.getElementById("consentError").textContent =
        "You must consent to being contacted.";
      hasError = true;
    }

    if (hasError) {
      return; // Prevent form submission if there are errors
    }

    // If no errors, show success toast
    showToast("Form submitted successfully!");

    // Optionally, here you can submit the form to the server
    // form.submit(); // Uncomment this to submit the form to the server
  });
});
