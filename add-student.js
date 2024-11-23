// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form and button elements
    const form = document.querySelector("form");
    const submitButton = document.querySelector(".button");

    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from reloading the page

        // Get the input field values
        const name = document.getElementById("name").value;
        const rollNumber = document.getElementById("rollnumber").value;
        const className = document.getElementById("class").value;
        const house = document.getElementById("house").value;
        const section = document.getElementById("section").value;

        // Check if all fields are filled
        if (name && rollNumber && className && house && section) {
            // Show a success alert with the student details
            alert("Student added successfully!\n\n" +
                "Name: " + name + "\n" +
                "Roll Number: " + rollNumber + "\n" +
                "Class: " + className + "\n" +
                "House: " + house + "\n" +
                "Section: " + section);

            // Optionally, you can clear the form fields after submission
            form.reset();
        } else {
            // Alert if any field is missing
            alert("Please fill in all the fields.");
        }
    });
});
