/* script.js */

document.addEventListener("DOMContentLoaded", function () {
    const professions = [
        "Data Analyst",
        "Data Scientist",
        "AI Automation Engineer",
        "Data Engineer"
    ];
    let index = 0;
    const professionElement = document.querySelector(".profession");

    function updateProfession() {
        professionElement.style.opacity = 0;
        setTimeout(() => {
            professionElement.textContent = professions[index];
            professionElement.style.opacity = 1;
            index = (index + 1) % professions.length;
        }, 1000);
    }
    setInterval(updateProfession, 3000);

    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // View more button toggle
    document.getElementById("viewMoreBtn").addEventListener("click", function () {
        const moreContent = document.getElementById("moreAbout");
        if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "block";
            this.textContent = "View Less";
        } else {
            moreContent.style.display = "none";
            this.textContent = "View More";
        }
    });

    // Form submission (console log for testing)
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted! Name: " + this.firstName.value + " " + this.lastName.value);
        alert("Thank you for contacting me! I will get back to you soon.");
        this.reset();
    });
});


// JavaScript for the 'View More' button functionality
document.getElementById("viewMoreBtn").addEventListener("click", function() {
    // Toggle the visibility of the 'more-details' section
    const moreDetails = document.querySelector(".more-details");
    moreDetails.classList.toggle("show");

    // Change the text of the button when clicked
    if (moreDetails.classList.contains("show")) {
        this.textContent = "View Less";
    } else {
        this.textContent = "View More";
    }
});
