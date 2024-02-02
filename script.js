 // Add your JavaScript code here
 function submitForm(event) {
    // Prevent the default behavior of the form submission
    event.preventDefault();
    // Get the form data from the input fields
    var formData = new FormData(event.target);
    // Display the form data in the console
    console.log("Form data:");
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    // Show an alert message to the user
    alert("Your form has been submitted successfully!");
  }