const users = {
	"john": {
		"password": "password123",
		"data": {
			"name": "John Doe",
			"email": "john@example.com"
		}
	},
	"jane": {
		"password": "password456",
		"data": {
			"name": "Jane Doe",
			"email": "jane@example.com"
		}
	}
};
document.getElementById("login-form").addEventListener("submit", (e) => {
	e.preventDefault();

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	if (users[username] && users[username].password === password) {
		// Store user data in local storage
		localStorage.setItem("userData", JSON.stringify(users[username].data));

		// Redirect to dashboard page
		window.location.href = "dashboard.html";
	} else {
		alert("Invalid username or password");
	}
});
