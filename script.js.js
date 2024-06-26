// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
