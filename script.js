// Typing Effect
const text = "Rising Web Developer | UI/UX Designer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// Mobile Menu
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.onclick = () => {
    nav.classList.toggle("active");
};

// Scroll Animation
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(sec => {
        const offset = sec.offsetTop - 300;
        if (window.scrollY > offset) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Resume Modal
const modal = document.getElementById("resumeModal");
const btn = document.getElementById("openResume");
const closeBtn = document.querySelector(".close");
const resumeFrame = document.getElementById("resumeFrame");

btn.onclick = () => {
    if (!resumeFrame.getAttribute("src")) {
        resumeFrame.setAttribute("src", "resume.pdf");
    }
    modal.style.display = "flex";
};
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};

// Contact Form - Mailto System
const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    // Basic validation
    if (!name || name.length < 2) {
        contactStatus.textContent = "Please enter a valid name (at least 2 characters).";
        contactStatus.classList.remove("success");
        contactStatus.style.color = "#ef4444";
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        contactStatus.textContent = "Please enter a valid email address.";
        contactStatus.classList.remove("success");
        contactStatus.style.color = "#ef4444";
        return;
    }

    if (!message || message.length < 10) {
        contactStatus.textContent = "Please enter a message (at least 10 characters).";
        contactStatus.classList.remove("success");
        contactStatus.style.color = "#ef4444";
        return;
    }

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:dbose0906@gmail.com?subject=${subject}&body=${body}`;

    // Open default mail client
    window.location.href = mailtoLink;

    // Show success message
    contactStatus.textContent = "Opening your email client... Please send the email to complete your inquiry.";
    contactStatus.classList.add("success");
    contactStatus.style.color = "#34d399";

    // Reset form after a short delay
    setTimeout(() => {
        contactForm.reset();
        contactStatus.textContent = "";
    }, 3000);
});