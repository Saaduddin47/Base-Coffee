/* =========================================================
   Base Coffee — Interactions
   ========================================================= */
(function () {
  "use strict";

  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  /* ---- Sticky nav: solid background on scroll ---- */
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---- */
  const closeMenu = () => {
    if (!nav || !burger) return;
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
  }

  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ---- Scroll reveal via IntersectionObserver ---- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---- Form validation helpers ---- */
  const isEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());

  const showMsg = (el, text, ok) => {
    if (!el) return;
    el.textContent = text;
    el.style.color = ok ? "var(--caramel-light)" : "#e08a6a";
  };

  /* Newsletter (home + menu) */
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmail");
      const msg = document.getElementById("newsletterMsg");
      if (!isEmail(email.value)) {
        showMsg(msg, "Please enter a valid email address.", false);
        email.focus();
        return;
      }
      showMsg(msg, "Thank you — you're on the list.", true);
      newsletterForm.reset();
    });
  }

  /* Contact (about) */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cName");
      const email = document.getElementById("cEmail");
      const message = document.getElementById("cMessage");
      const msg = document.getElementById("contactMsg");

      if (!name.value.trim()) {
        showMsg(msg, "Please tell us your name.", false);
        name.focus();
        return;
      }
      if (!isEmail(email.value)) {
        showMsg(msg, "Please enter a valid email address.", false);
        email.focus();
        return;
      }
      if (message.value.trim().length < 10) {
        showMsg(msg, "Please write a little more so we can help.", false);
        message.focus();
        return;
      }
      showMsg(msg, "Thank you — we'll be in touch soon.", true);
      contactForm.reset();
    });
  }

  /* ---- Footer year ---- */
  const yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach((el) => (el.textContent = new Date().getFullYear()));
})();
