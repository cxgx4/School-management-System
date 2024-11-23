document.addEventListener('DOMContentLoaded', function () {
    // Example array of student data
    const students = [
        {
            id: "12345",
            name: "Shweta Jha",
            rollNumber: "25",
            house: "Ganga",
            section: "A",
            class: "5",
            username: "shweta"
        },
        {
            id: "12346",
            name: "Rahul Sharma",
            rollNumber: "26",
            house: "Yamuna",
            section: "B",
            class: "6",
            username: "rahul"
        },
        {
            id: "12347",
            name: "Priya Singh",
            rollNumber: "27",
            house: "Saraswati",
            section: "A",
            class: "5",
            username: "priya"
        }
    ];

    // Login system
    const loginButton = document.querySelector('.login-button');
    if (loginButton) {
        loginButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent actual form submission

            // Retrieve username and password from inputs
            const username = document.getElementById('student-username').value;
            const password = document.getElementById('student-password').value;

            // Simple validation to ensure fields are not empty
            if (!username || !password) {
                alert('Please enter both username and password!');
                return;
            }

            // Validate username against the student database
            const student = students.find(student => student.username === username);
            if (!student) {
                alert('Invalid username!');
                return;
            }

            // Save the username and ID to localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('studentId', student.id);

            // Redirect to the student dashboard
            window.location.href = "/student-dashboard.html";
        });
    } else {
        console.error('Login button not found. Ensure your HTML has an element with class "login-button".');
    }

    // Student dashboard data population
    if (window.location.pathname.includes("student-dashboard.html")) {
        // Function to populate student data dynamically
        function populateStudentData(studentId) {
            // Find the student data based on the given ID
            const student = students.find(student => student.id === studentId);
            if (student) {
                // Populate the data dynamically
                document.querySelector(".student-info .student-details:nth-child(2)").textContent = `Student ID: ${student.id}`;
                document.querySelector(".student-info .student-details:nth-child(3)").textContent = `Name: ${student.name}`;
                document.querySelector(".student-info .student-details:nth-child(4)").textContent = `Roll No: ${student.rollNumber}`;
                document.querySelector(".student-info .student-details:nth-child(5)").textContent = `House: ${student.house}`;
                document.querySelector(".student-info .student-details:nth-child(6)").textContent = `Section: ${student.section}`;
                document.querySelector(".student-info .student-details:nth-child(7)").textContent = `Class: ${student.class}`;
            } else {
                alert("Student data not found!");
            }
        }

        // Retrieve the logged-in student's ID from localStorage
        const loggedInStudentId = localStorage.getItem('studentId');
        if (loggedInStudentId) {
            populateStudentData(loggedInStudentId);
        } else {
            alert("No student logged in!");
            window.location.href = "/login.html"; // Redirect to login if no data is found
        }
    }
});

