// 1) Hamburger Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Close hamburger menu automatically when a user selects a link (on mobile)
document.addEventListener("DOMContentLoaded", () => {
    // For skill bars
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach((bar) => {
        // Read the percentage from the data attribute
        const percentage = bar.getAttribute("data-percentage");
        // Read the color from the data attribute (default to #3498db if none)
        const color = bar.getAttribute("data-color") || "#3498db";
        // Get the progress-line span element
        const progressLine = bar.querySelector(".progress-line span");
        // Set the width & background color based on the data attributes
        progressLine.style.width = percentage + "%";
        progressLine.style.backgroundColor = color;
    });

    // Add click event to each link to close menu if currently active
    const navLinks = document.querySelectorAll("#nav-links li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const navbarNav = document.getElementById("nav-links");
            // Only close if we're in "mobile" mode (the nav is active)
            if (navbarNav.classList.contains("active")) {
                toggleMenu();
            }
        });
    });
});

// 2) Back to Top Button Visibility on Scroll
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const btn = document.getElementById("btn-back-to-top");
    // Show the button after scrolling 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Smooth scroll to top
document.getElementById("btn-back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3) Handle the contact form submission using EmailJS
function sendEmail(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }

    // Prepare the template parameters for EmailJS
    const templateParams = {
        from_name: name,
        reply_to: email,
        message: message
    };

    // Replace with your actual Service ID, Template ID from EmailJS
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";

    // Send the email
    emailjs
        .send(serviceID, templateID, templateParams)
        .then(function (response) {
            alert("Your message has been sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            // REDIRECT to YouTube after successful submission
            window.location.href = "https://www.youtube.com";
        })
        .catch(function (error) {
            alert("Oops... " + JSON.stringify(error));
            console.error("FAILED...", error);
        });

    // Reset form fields
    event.target.reset();
    return false;
}