const form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const service = document.getElementById('service').value.trim();

    if (!name || !contact || !service) {
        alert('All fields are required!');
        e.preventDefault(); // Prevent form submission
    }
});
