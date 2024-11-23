document.addEventListener('DOMContentLoaded', function () {
    // Example array of student data
    const students = [
        {
            id: "12345",
            name: "Shweta Jha",
            rollNumber: "25",
            house: "Ganga",
            section: "A",
            class: "5"
        },
        {
            id: "12346",
            name: "Rahul Sharma",
            rollNumber: "26",
            house: "Yamuna",
            section: "B",
            class: "6"
        },
        {
            id: "12347",
            name: "Priya Singh",
            rollNumber: "27",
            house: "Saraswati",
            section: "A",
            class: "5"
        }
    ];

    // Function to find and populate student data based on ID
    function populateStudentData(studentId) {
        const student = students.find(student => student.id === studentId);
        if (student) {
            document.querySelector(".student-info .student-details:nth-child(2)").textContent = `Student ID: ${student.id}`;
            document.querySelector(".student-info .student-details:nth-child(3)").textContent = `Name: ${student.name}`;
            document.querySelector(".student-info .student-details:nth-child(4)").textContent = `Roll No: ${student.rollNumber}`;
            document.querySelector(".student-info .student-details:nth-child(5)").textContent = `House: ${student.house}`;
            document.querySelector(".student-info .student-details:nth-child(6)").textContent = `Section: ${student.section}`;
            document.querySelector(".student-info .student-details:nth-child(7)").textContent = `Class: ${student.class}`;
        } else {
            alert("Student ID not found!");
        }
    }

    // Retrieve student ID from localStorage or use a default for demo
    const loggedInStudentId = localStorage.getItem('studentId') || "12345";
    populateStudentData(loggedInStudentId);

    // Function to switch between content sections
    function showContent(contentId) {
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        // Display the selected content section
        const content = document.getElementById(contentId);
        if (content) {
            content.style.display = 'block';
        }

        // Special handling for the calendar content
        if (contentId === 'calendar-content') {
            calendar.updateSize();
        }
    }

    // Calendar initialization
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Math Exam', start: '2023-11-05' },
            { title: 'Science Project Due', start: '2023-11-15' }
        ]
    });
    calendar.render();

    // Event form handling
    const eventForm = document.getElementById('eventForm');
    if (eventForm) {
        eventForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const title = document.getElementById('eventTitle').value;
            const date = document.getElementById('eventDate').value;

            calendar.addEvent({
                title: title,
                start: date
            });

            eventForm.reset();
        });
    }

    // Expose showContent to global scope for usage in HTML
    window.showContent = showContent;
});
