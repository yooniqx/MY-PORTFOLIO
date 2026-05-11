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

// Contact Form Storage
const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    const contactEntry = {
        name,
        email,
        message,
        savedAt: new Date().toISOString(),
    };

    const storedContacts = JSON.parse(localStorage.getItem("portfolioContacts") || "[]");
    storedContacts.push(contactEntry);
    localStorage.setItem("portfolioContacts", JSON.stringify(storedContacts));

    contactStatus.textContent = "Your message has been saved locally. Thank you for reaching out!";
    contactStatus.classList.add("success");
    contactForm.reset();
});