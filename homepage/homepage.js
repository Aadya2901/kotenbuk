// === Typewriter ===
const typingText = document.getElementById("typing-text");
const phrases = ["Hyouka", "\u6C37\u83EF"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 150;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const visibleText = currentPhrase.substring(0, charIndex);
  typingText.textContent = visibleText;

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
    delay = 100;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    delay = 50;
  } else if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    delay = 1000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 500;
  }

  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// === Carousel ===
  const track = document.querySelector('.carousel-track');
  const totalSlides = document.querySelectorAll('.carousel-slide').length;
  let currentIndex = 0;

  function showSlide(i) {
    track.style.transform = `translateX(-${i * 100}vw)`; // Move track to the correct position
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;  // Move to the next slide
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide
    showSlide(currentIndex);
  }

 setInterval(nextSlide, 3000); // Automatically transition every 3 seconds

// === Sakura Effect ===
const container = document.getElementById("sakura-container");

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("sakura");
  const size = Math.random() * 10 + 10;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  petal.style.opacity = Math.random() + 0.3;
  const xEnd = (Math.random() - 0.5) * 200 + "px";
  petal.style.setProperty('--x-end', xEnd);
  container.appendChild(petal);
  setTimeout(() => container.removeChild(petal), 10000);
}

setInterval(createPetal, 300);

// Navbar toggle functionality for mobile view
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navbarToggle.classList.toggle('active'); // Ensure navbar toggle button also gets styled
});

// IntersectionObserver to trigger animation when the form enters the viewport
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.upload-section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'is-visible' class when the form is in view
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, {
    threshold: 0.5, // Trigger when 50% of the form is visible
  });

  observer.observe(form);
});

// Fan Art Upload Form
document.getElementById('uploadForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const image = document.getElementById('imageUpload').files[0];
  const artistName = document.getElementById('artistName').value;
  const caption = document.getElementById('caption').value;

  if (!image || !artistName || !caption) {
    alert("Please fill all fields.");
  } else {
    // Handle file upload and form submission here
    alert("Fan art uploaded successfully!");
  }
});
