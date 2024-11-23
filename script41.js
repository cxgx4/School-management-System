document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
        // Populate the dashboard with user data
        document.getElementById("username").innerText = userData.name;
        document.getElementById("email").innerText = userData.email;

    } else {
        // Redirect to login page if no user data is found
        alert("No user data found. Please log in.");
        window.location.href = "login.html";
    }

    // Calendar initialization
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Math Exam', start: '2023-11-05' },
            { title: 'Science Project Due', start: '2023-11-15' }
        ]
    });
    calendar.render();

    // Handle content switching
    window.showContent = function (contentId) {
        document.querySelectorAll('.content-section').forEach((section) => {
            section.style.display = 'none';
        });
        document.getElementById(contentId).style.display = 'block';

        if (contentId === 'calendar-content') {
            calendar.updateSize();
        }
    };

    // Handle event form submission
    var eventForm = document.getElementById('eventForm');
    eventForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the values from the form inputs
        var title = document.getElementById('eventTitle').value;
        var date = document.getElementById('eventDate').value;

        // Add the new event to the calendar
        calendar.addEvent({
            title: title,
            start: date
        });

        // Clear the form fields after submission
        eventForm.reset();
    });
});
