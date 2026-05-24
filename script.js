const body = document.body;
const langButton = document.querySelector(".language-toggle");
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

function setLanguage(lang) {
  const isFa = lang === "fa";
  body.classList.toggle("fa", isFa);
  document.documentElement.lang = isFa ? "fa" : "en";

  document.querySelectorAll("[data-en][data-fa]").forEach((el) => {
    el.textContent = isFa ? el.dataset.fa : el.dataset.en;
  });
}

langButton.addEventListener("click", () => {
  const nextLang = body.classList.contains("fa") ? "en" : "fa";
  setLanguage(nextLang);
});

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

setLanguage("en");
