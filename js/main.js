// Builds the page from js/data.js. Each block below fills one section.

// Cursor glow

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const li = (text) => `<li>${text}</li>`;

// ---------------------------------------------------------------------------
// Simple lists
// ---------------------------------------------------------------------------
$("interests").innerHTML = interests.map(li).join("");
$("learning").innerHTML = learning.map(li).join("");

// ---------------------------------------------------------------------------
// Education timeline
// ---------------------------------------------------------------------------
$("timeline").innerHTML = education
  .map(
    (e) => `
  <article class="card step ${e.current ? "current" : ""}">
    <h3>
      ${e.year}
      ${e.current ? '<span class="now">Currently Studying</span>' : ""}
    </h3>
    <p>Bachelor of Science in Information Technology (BSIT)</p>
    <ul>${e.focus.map(li).join("")}</ul>
  </article>`
  )
  .join("");

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
$("skillGrid").innerHTML = Object.entries(skills)
  .map(
    ([category, items]) => `
  <div class="card">
    <h3>${category}</h3>
    ${items
      .map(
        ([name, level]) => `
    <div class="skill">
      <span>${name}</span>
      <span>${level}</span>
    </div>`
      )
      .join("")}
  </div>`
  )
  .join("");

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
$("projectGrid").innerHTML = projects
  .map(
    (p) => `
  <article class="card">
    <span class="tag">${p.category}</span>
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <p class="tech">${p.tech}</p>
    ${
      p.github
        ? `<a class="btn small" href="${p.github}" target="_blank" rel="noopener">GitHub</a>`
        : ""
    }
    ${
      p.demo
        ? `<a class="btn small primary" href="${p.demo}" target="_blank" rel="noopener">Live Demo</a>`
        : ""
    }
  </article>`
  )
  .join("");

// ---------------------------------------------------------------------------
// Labs
// ---------------------------------------------------------------------------
$("labGrid").innerHTML = labs
  .map(
    ([title, description]) => `
  <div class="card">
    <h3>${title}</h3>
    <p>${description}</p>
  </div>`
  )
  .join("");

// ---------------------------------------------------------------------------
// Mobile menu
// ---------------------------------------------------------------------------
const menuBtn = $("menuBtn");
const navLinks = $("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", false);
});

// ---------------------------------------------------------------------------
// Contact form
// Nothing is sent until contactConfig.endpoint is set in data.js.
// ---------------------------------------------------------------------------
$("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const status = $("formStatus");
  const form = e.target;

  if (!form.checkValidity()) {
    status.textContent = "Please fill in your name, a valid email, and a message.";
    return;
  }

  if (!contactConfig.endpoint) {
    status.textContent = "The form isn't connected yet. Please email me directly.";
    return;
  }

  try {
    const res = await fetch(contactConfig.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });

    if (!res.ok) throw new Error();

    status.textContent = "Message sent. Thank you!";
    form.reset();
  } catch {
    status.textContent = "Message failed to send. Please try again or email me.";
  }
});