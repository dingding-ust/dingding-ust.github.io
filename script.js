const config = window.siteConfig;
const profile = config.profile;

const linkLabelMap = {
  email: "Email",
  github: "GitHub",
  scholar: "Google Scholar",
  linkedin: "LinkedIn",
  cv: "CV"
};

const linkOrder = ["email", "scholar", "github", "linkedin", "cv"];

function initialsFromName(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function toHref(type, value) {
  if (!value) {
    return "";
  }

  if (type === "email") {
    return `mailto:${value}`;
  }

  if (/^https?:\/\//.test(value)) {
    return value;
  }

  return `https://${value}`;
}

function createProfileLink(type, value) {
  if (!value) {
    return "";
  }

  const href = toHref(type, value);
  const target = type === "email" ? "" : ' target="_blank" rel="noreferrer"';
  return `
    <a class="social-link" href="${href}" aria-label="${linkLabelMap[type]}" title="${linkLabelMap[type]}"${target}>
      <span>${linkLabelMap[type]}</span>
    </a>
  `;
}

function createTextLink(type, value) {
  if (!value) {
    return "";
  }

  const href = toHref(type, value);
  const target = type === "email" ? "" : ' target="_blank" rel="noreferrer"';
  return `<a href="${href}"${target}>${linkLabelMap[type]}</a>`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function highlightSelf(authors) {
  return authors.replace(/Ding Ding\*/g, "<strong>Ding Ding*</strong>");
}

function renderProfile() {
  document.title = config.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", config.meta.description);

  document.getElementById("brand-name").textContent = profile.name;
  document.getElementById("page-title").textContent = profile.name;
  document.getElementById("profile-role").textContent = profile.role;
  document.getElementById("profile-affiliation").textContent = profile.affiliation;
  document.getElementById("profile-department").textContent = profile.department;

  const photo = document.getElementById("profile-photo");
  const fallback = document.getElementById("profile-fallback");
  fallback.textContent = initialsFromName(profile.name);

  if (profile.photo) {
    photo.src = profile.photo;
    photo.hidden = false;
    fallback.hidden = true;
  } else {
    photo.hidden = true;
    fallback.hidden = false;
  }

  document.getElementById("social-links").innerHTML = linkOrder
    .map((type) => createProfileLink(type, profile[type]))
    .filter(Boolean)
    .join("");

  document.getElementById("about-copy").innerHTML = profile.summary
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

function renderEducation() {
  document.getElementById("education-list").innerHTML = (config.education || [])
    .map((item) => `
      <article class="education-item">
        <div class="education-date">${item.date}</div>
        <div class="education-body">
          <div class="education-school">${item.school}</div>
          <div class="education-degree">${item.degree}</div>
        </div>
      </article>
    `)
    .join("");
}

function renderPublications() {
  document.getElementById("publication-extra").textContent = config.notes.publicationPrefix;
  document.getElementById("publication-note").textContent = config.notes.publications;

  document.getElementById("publication-list").innerHTML = (config.publications || [])
    .map((item, index) => `
      <li class="publication-item">
        <div class="publication-badge-col">
          <span class="publication-badge">${item.badge}</span>
          <span class="publication-year">${item.year}</span>
        </div>
        <div class="publication-body">
          <div class="publication-title">${item.title}</div>
          <div class="publication-authors">${highlightSelf(item.authors)}</div>
          <div class="publication-venue"><em>${item.venue}</em></div>
          ${item.note ? `<div class="publication-honor">${item.note}</div>` : ""}
          <div class="publication-links">
            <button class="publication-link abstract-toggle" type="button" data-target="abstract-${index}">Abstract</button>
            ${(item.links || [])
              .map((link) => `<a class="publication-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
              .join("")}
          </div>
          <div class="publication-abstract" id="abstract-${index}" hidden>
            <p>${escapeHtml(item.abstract)}</p>
          </div>
        </div>
      </li>
    `)
    .join("");
}

function renderContact() {
  document.getElementById("contact-copy").innerHTML = `<a href="mailto:${profile.email}">${escapeHtml(config.contact.blurb)}</a>`;
  document.getElementById("contact-links").innerHTML = "";

  document.getElementById("footer-note").textContent = `${profile.name} · ${profile.affiliation}`;
  document.getElementById("footer-credit").textContent = "";
}

function setupAbstractToggles() {
  document.querySelectorAll(".abstract-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      const hidden = target.hasAttribute("hidden");
      if (hidden) {
        target.removeAttribute("hidden");
        button.textContent = "Hide Abstract";
      } else {
        target.setAttribute("hidden", "");
        button.textContent = "Abstract";
      }
    });
  });
}

function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

renderProfile();
renderEducation();
renderPublications();
renderContact();
setupAbstractToggles();
setupNav();
