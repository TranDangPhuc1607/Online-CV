// 1) Toggle Hamburger Menu (Mobile)
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Close hamburger menu automatically when link clicked (mobile)
document.addEventListener("DOMContentLoaded", () => {
    // For skill bars
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach((bar) => {
        const percentage = bar.getAttribute("data-percentage");  // e.g. "90"
        const color = bar.getAttribute("data-color") || "#3498db";

        // Update the percentage text in .skill-percentage
        const skillPercentageElem = bar.querySelector(".skill-percentage");
        skillPercentageElem.textContent = percentage + "%";

        // Update the progress-line span width & background color
        const progressLine = bar.querySelector(".progress-line span");
        progressLine.style.backgroundColor = color;
        progressLine.style.width = percentage + "%"; // triggers the CSS transition
    });

    // Close menu on link click if in mobile mode
    const navLinks = document.querySelectorAll("#nav-links li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const navbarNav = document.getElementById("nav-links");
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

// 3) Handle contact form submission using EmailJS (optional)
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

    // Prepare template params
    const templateParams = {
        from_name: name,
        reply_to: email,
        message: message,
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
            // Optionally redirect somewhere
            // window.location.href = "https://www.youtube.com";
        })
        .catch(function (error) {
            alert("Oops... " + JSON.stringify(error));
            console.error("FAILED...", error);
        });

    // Reset form
    event.target.reset();
    return false;
}