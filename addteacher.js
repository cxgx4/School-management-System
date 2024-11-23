document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-teacher-form');

    // Retrieve the existing teachers from localStorage, or set to an empty array if none exist
    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const enrollment = document.getElementById('enrollment').value;
        const classAllotted = document.getElementById('classAllotted').value;
        const section = document.getElementById('section').value;

        // Create a new teacher object
        const newTeacher = {
            name,
            enrollment,
            classAllotted,
            section
        };

        // Add the new teacher to the teachers array
        teachers.push(newTeacher);

        // Save the updated list of teachers back to localStorage
        localStorage.setItem('teachers', JSON.stringify(teachers));

        // Redirect to the teacher list page
        window.location.href = 'teacherslist.html';
    });
});
