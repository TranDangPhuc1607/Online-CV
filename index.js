// Handle "Back to Top" Button visibility on scroll
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const btn = document.getElementById("btn-back-to-top");
    // Show button after scrolling 100px
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Smooth scroll to top
document.getElementById("btn-back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Handle the contact form submission
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }

    // You can integrate with your email service or backend here.
    alert(`Thank you, ${name}! Your message has been sent.`);
    event.target.reset();
    return false;
}