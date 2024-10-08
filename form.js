document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('newsletter-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Create a new FormData object to hold the form data
        const formData = new FormData(form);

        // Submit the form data using fetch
        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Disable cross-origin restrictions (Google Forms doesn't require a response)
        })
        .then(() => {
            // Redirect to the thank-you page after form submission
            window.location.href = "thankyou.html";
        })
        .catch(error => console.error('Error:', error));
    });
});
