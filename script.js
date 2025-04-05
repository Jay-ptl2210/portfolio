// Add this at the beginning of your script.js
window.onload = function() {
  window.scrollTo(0, 0);
  history.scrollRestoration = "manual";
};

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector("#hamburger-menu");
    menu.classList.toggle("open");
  }
}

const texts = [
  "MERN Stack/Web Dev",
  "OOP in Java/Python",
  "AI/ML Enthusiast"
];

let textIndex = 0;
const typingText = document.querySelector('.typing-text');

function typeText() {
  let charIndex = 0;
  const currentText = texts[textIndex];
  
  function type() {
    if (charIndex < currentText.length) {
      typingText.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, 500);
    }
  }

  type();
}

document.addEventListener('DOMContentLoaded', typeText);
