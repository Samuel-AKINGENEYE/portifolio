// Placeholder for any interactive functionality
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
});

function searchProjects() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
      const projectName = project.getAttribute("data-name").toLowerCase();
      if (projectName.includes(input)) {
        project.style.display = "block"; // Show matching projects
      } else {
        project.style.display = "none"; // Hide non-matching projects
      }
    });
  }

  document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.querySelector('[name="name"]').value;
    let email = document.querySelector('[name="email"]').value;
    let message = document.querySelector('[name="message"]').value;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields.');
    } else if (!emailRegex.test(email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});
function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  // Toggle the "show" class to open or close the navigation menu
  navMenu.classList.toggle('show');
}
