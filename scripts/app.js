/**
 * Harinakshi Baishya - Social Media & Content Strategist Portfolio
 * Main Application Logic: Navigation, Modals, Showcase Filters, 30-Day Calendar, Audit Checklist, Interactive Tabs
 */

function refreshIcons() {
  if (typeof window !== "undefined" && window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initContentPlayground();
  initContentModal();
  initContentCalendar();
  initCopywritingLab();
  initStrategyFlow();
  initAuditChecklist();
  initCaseStudy01Carousel();
  initAnalytics();
  initContactActions();
  refreshIcons();
});

/* ==========================================================================
   1. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // Sticky header scroll shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });

  // Mobile menu toggle
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll", !isExpanded);
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("is-open");
        document.body.classList.remove("no-scroll");
      });
    });
  }
}

/* ==========================================================================
   2. CONTENT PLAYGROUND (12 ITEMS & FILTERING)
   ========================================================================== */
let activePlaygroundFilter = "All";

function initContentPlayground() {
  const grid = document.getElementById("playground-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!grid) return;

  renderPlaygroundCards(activePlaygroundFilter);

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activePlaygroundFilter = btn.getAttribute("data-filter");
      renderPlaygroundCards(activePlaygroundFilter);
    });
  });
}

function renderPlaygroundCards(filter) {
  const grid = document.getElementById("playground-grid");
  if (!grid) return;

  const items = PORTFOLIO_DATA.contentPlayground.filter(item => {
    if (filter === "All") return true;
    if (filter === "Copy") return item.category === "LinkedIn" || item.format.includes("Carousel") || item.format.includes("Text");
    return item.category === filter;
  });

  grid.innerHTML = items.map(item => `
    <article class="content-card" data-id="${item.id}" tabindex="0" role="button" aria-label="View post details for ${item.title}">
      <div class="card-visual-wrapper visual-${item.visualType}">
        <span class="card-speculative-badge">Speculative Work</span>
        <div class="card-visual-content">
          <div class="visual-platform-tag">
            <i data-lucide="${getPlatformIcon(item.platform)}"></i>
            <span>${item.platform}</span>
          </div>
          <div class="visual-headline">${item.hook}</div>
          <div class="visual-meta-row">
            <span class="visual-format-chip">${item.format}</span>
            <span class="visual-action-prompt">Inspect Post →</span>
          </div>
        </div>
      </div>
      
      <div class="card-info">
        <div class="card-header-tags">
          <span class="badge badge-subtle">${item.badge}</span>
          <span class="badge badge-objective">${item.objective}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.shortDesc}</p>
        <div class="card-footer-cta">
          <span class="cta-label">Objective:</span>
          <strong>${item.objective}</strong>
          <span class="cta-inspect-btn">Details & Caption <i data-lucide="arrow-up-right"></i></span>
        </div>
      </div>
    </article>
  `).join("");

  refreshIcons();

  // Attach click events to open modal
  const cards = grid.querySelectorAll(".content-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openContentModal(id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const id = card.getAttribute("data-id");
        openContentModal(id);
      }
    });
  });
}

function getPlatformIcon(platform) {
  switch (platform.toLowerCase()) {
    case "instagram": return "instagram";
    case "reels":
    case "tiktok/reels": return "film";
    case "stories": return "sparkles";
    case "linkedin": return "linkedin";
    case "campaigns": return "flag";
    default: return "share-2";
  }
}

/* ==========================================================================
   3. MODAL FOR CONTENT PLAYGROUND (CAPTION, HOOK, AUDIENCE, OBJECTIVE)
   ========================================================================== */
let previouslyFocusedElement = null;

function initContentModal() {
  const modal = document.getElementById("content-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (previouslyFocusedElement) previouslyFocusedElement.focus();
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  // Platform dismiss via ESC key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function openContentModal(id) {
  const item = PORTFOLIO_DATA.contentPlayground.find(i => i.id === id);
  if (!item) return;

  previouslyFocusedElement = document.activeElement;
  const modal = document.getElementById("content-modal");
  const body = document.getElementById("modal-body-content");

  if (!modal || !body) return;

  body.innerHTML = `
    <div class="modal-grid">
      <!-- Left Column: Visual Mockup Preview -->
      <div class="modal-visual-column">
        <div class="phone-mockup">
          <div class="phone-notch"></div>
          <div class="phone-header">
            <div class="mockup-avatar">H</div>
            <div class="mockup-user">
              <strong>harinakshi.creates</strong>
              <span>${item.platform} • Speculative Sample</span>
            </div>
            <span class="mockup-dots">•••</span>
          </div>
          
          <div class="mockup-screen-art visual-${item.visualType}">
            <div class="mockup-art-badge">${item.badge}</div>
            <div class="mockup-art-hook">${item.hook}</div>
            <div class="mockup-art-footer">
              <span>Swipe for Strategy ➔</span>
            </div>
          </div>

          <div class="phone-actions">
            <div class="phone-action-left">
              <i data-lucide="heart"></i>
              <i data-lucide="message-circle"></i>
              <i data-lucide="send"></i>
            </div>
            <i data-lucide="bookmark"></i>
          </div>

          <div class="phone-caption-preview">
            <strong>harinakshi.creates</strong> ${item.shortDesc}
          </div>
        </div>
      </div>

      <!-- Right Column: Strategy, Copy, Hook & Intended Audience -->
      <div class="modal-details-column">
        <div class="modal-speculative-tag">
          <i data-lucide="shield-alert"></i> Speculative Project Sample • Demonstrating Content & Copy Strategy
        </div>

        <h2 class="modal-title">${item.title}</h2>

        <div class="modal-meta-grid">
          <div class="meta-box">
            <span class="meta-label">Platform & Format</span>
            <span class="meta-value">${item.platform} • ${item.format}</span>
          </div>
          <div class="meta-box">
            <span class="meta-label">Strategic Objective</span>
            <span class="meta-value">${item.objective}</span>
          </div>
        </div>

        <div class="modal-section">
          <h4 class="section-subhead">1. The Hook (First 3 Seconds / First Line)</h4>
          <blockquote class="hook-quote">"${item.hook}"</blockquote>
        </div>

        <div class="modal-section">
          <h4 class="section-subhead">2. Platform-Ready Caption & Tags</h4>
          <div class="caption-container">
            <pre class="caption-pre">${item.caption}</pre>
          </div>
        </div>

        <div class="modal-section">
          <h4 class="section-subhead">3. Call to Action (CTA)</h4>
          <div class="cta-pill">
            <i data-lucide="corner-down-right"></i>
            <span>${item.cta}</span>
          </div>
        </div>

        <div class="modal-section">
          <h4 class="section-subhead">4. Intended Audience Persona</h4>
          <p class="audience-text">${item.audience}</p>
        </div>
      </div>
    </div>
  `;

  refreshIcons();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) closeBtn.focus();
}

/* ==========================================================================
   4. 30-DAY CONTENT CALENDAR (DYNAMIC TABLE & FILTERING)
   ========================================================================== */
function initContentCalendar() {
  const tableBody = document.getElementById("calendar-table-body");
  const searchInput = document.getElementById("calendar-search");
  const platformFilter = document.getElementById("calendar-platform-filter");
  const typeFilter = document.getElementById("calendar-type-filter");
  const objectiveFilter = document.getElementById("calendar-objective-filter");
  const countBadge = document.getElementById("calendar-count-badge");

  if (!tableBody) return;

  function renderCalendar() {
    const q = (searchInput?.value || "").toLowerCase();
    const plat = platformFilter?.value || "All";
    const type = typeFilter?.value || "All";
    const obj = objectiveFilter?.value || "All";

    const filtered = PORTFOLIO_DATA.contentCalendar.filter(entry => {
      const matchSearch = entry.topic.toLowerCase().includes(q) || 
                          entry.hook.toLowerCase().includes(q) || 
                          entry.cta.toLowerCase().includes(q);
      const matchPlat = (plat === "All") || entry.platform === plat;
      const matchType = (type === "All") || entry.type === type;
      const matchObj = (obj === "All") || entry.objective === obj;

      return matchSearch && matchPlat && matchType && matchObj;
    });

    if (countBadge) {
      countBadge.textContent = `Showing ${filtered.length} of 30 days`;
    }

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="calendar-empty-state">
            <i data-lucide="search-x"></i>
            <p>No content entries match your active filters. Try clearing search or selecting 'All'.</p>
          </td>
        </tr>
      `;
      refreshIcons();
      return;
    }

    tableBody.innerHTML = filtered.map(row => `
      <tr class="calendar-row">
        <td class="col-date">
          <span class="day-chip">${row.date}</span>
        </td>
        <td class="col-platform">
          <span class="plat-tag plat-${row.platform.toLowerCase().replace(/[^a-z]/g, '')}">
            <i data-lucide="${getPlatformIcon(row.platform)}"></i>
            ${row.platform}
          </span>
        </td>
        <td class="col-type">
          <span class="type-pill">${row.type}</span>
        </td>
        <td class="col-topic">
          <strong>${row.topic}</strong>
        </td>
        <td class="col-hook">
          <span class="hook-cell-text">"${row.hook}"</span>
        </td>
        <td class="col-objective">
          <span class="obj-badge obj-${row.objective.toLowerCase()}">${row.objective}</span>
        </td>
        <td class="col-cta">
          <span class="cta-cell-text">${row.cta}</span>
        </td>
      </tr>
    `).join("");

    refreshIcons();
  }

  renderCalendar();

  if (searchInput) searchInput.addEventListener("input", renderCalendar);
  if (platformFilter) platformFilter.addEventListener("change", renderCalendar);
  if (typeFilter) typeFilter.addEventListener("change", renderCalendar);
  if (objectiveFilter) objectiveFilter.addEventListener("change", renderCalendar);

  // Reset filter button
  const resetBtn = document.getElementById("calendar-reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (platformFilter) platformFilter.value = "All";
      if (typeFilter) typeFilter.value = "All";
      if (objectiveFilter) objectiveFilter.value = "All";
      renderCalendar();
    });
  }
}

/* ==========================================================================
   5. COPYWRITING LAB ("WORDS MATTER")
   ========================================================================== */
function initCopywritingLab() {
  const tabs = document.querySelectorAll(".copy-tab");
  const displayContainer = document.getElementById("copy-display-box");

  if (!tabs.length || !displayContainer) return;

  function renderCopySample(type) {
    const sample = PORTFOLIO_DATA.copywritingSamples.find(s => s.type === type);
    if (!sample) return;

    displayContainer.innerHTML = `
      <div class="copy-card-inner">
        <div class="copy-card-header">
          <span class="copy-tag">${sample.label}</span>
          <span class="copy-spec-badge">Copy Breakdown</span>
        </div>

        <div class="copy-hook-box">
          <span class="copy-hook-label">The Hook</span>
          <p class="copy-hook-text">"${sample.hook}"</p>
        </div>

        <div class="copy-body-box">
          <span class="copy-hook-label">The Body Copy</span>
          <p class="copy-body-text">${sample.body}</p>
        </div>

        <div class="copy-cta-box">
          <span class="copy-hook-label">Call to Action (CTA)</span>
          <p class="copy-cta-text">👉 ${sample.cta}</p>
        </div>

        <div class="copy-why-box">
          <div class="why-header">
            <i data-lucide="lightbulb"></i>
            <strong>Why This Works (Psychology & Retention):</strong>
          </div>
          <p class="why-text">${sample.whyItWorks}</p>
        </div>
      </div>
    `;

    refreshIcons();
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderCopySample(tab.getAttribute("data-type"));
    });
  });

  // Render initial tab (Educational)
  renderCopySample("EDUCATIONAL");
}

/* ==========================================================================
   6. STRATEGY 5-STEP PROCESS FLOW
   ========================================================================== */
function initStrategyFlow() {
  const stepCards = document.querySelectorAll(".strategy-step-card");
  stepCards.forEach(card => {
    card.addEventListener("click", () => {
      stepCards.forEach(c => c.classList.remove("is-active"));
      card.classList.add("is-active");
    });
  });
}

/* ==========================================================================
   7. INTERACTIVE SOCIAL MEDIA AUDIT CHECKLIST
   ========================================================================== */
function initAuditChecklist() {
  const container = document.getElementById("audit-checklist-container");
  const scoreCounter = document.getElementById("audit-score-counter");
  const progressBar = document.getElementById("audit-progress-bar");

  if (!container) return;

  let totalItems = 0;
  PORTFOLIO_DATA.auditChecklist.forEach(cat => totalItems += cat.items.length);

  container.innerHTML = PORTFOLIO_DATA.auditChecklist.map((cat, catIdx) => `
    <div class="audit-category-group">
      <div class="audit-cat-header">
        <span class="audit-cat-icon"><i data-lucide="check-circle-2"></i></span>
        <h4 class="audit-cat-title">${cat.category} CHECKLIST</h4>
      </div>
      <div class="audit-items-list">
        ${cat.items.map((item, itemIdx) => `
          <label class="audit-checkbox-label">
            <input type="checkbox" class="audit-check-input" data-cat="${catIdx}" data-item="${itemIdx}" ${item.checked ? "checked" : ""}>
            <span class="custom-checkbox"></span>
            <span class="audit-item-text">${item.text}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");

  refreshIcons();

  function updateAuditScore() {
    const checkboxes = container.querySelectorAll(".audit-check-input");
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const pct = Math.round((checkedCount / totalItems) * 100);

    if (scoreCounter) {
      scoreCounter.textContent = `${checkedCount} / ${totalItems} Passed (${pct}%)`;
    }
    if (progressBar) {
      progressBar.style.width = `${pct}%`;
    }
  }

  container.addEventListener("change", (e) => {
    if (e.target.classList.contains("audit-check-input")) {
      updateAuditScore();
    }
  });

  updateAuditScore();
}

/* ==========================================================================
   8. CASE STUDY 01 INTERACTIVE CAROUSEL SIMULATOR
   ========================================================================== */
function initCaseStudy01Carousel() {
  const slides = [
    {
      num: "01 / 04",
      tag: "The Cover Slide",
      hook: "Why Your Wellness Routine Feels Like Another Job",
      desc: "Bold contrast, uncluttered whitespace, and an immediate problem statement stopping the scroll in under 2 seconds."
    },
    {
      num: "02 / 04",
      tag: "The Friction Point",
      hook: "You don't need a 14-step morning. You need 3 quiet minutes.",
      desc: "Reframing consumer guilt into relief. Highlighting how Vela simplifies mornings rather than adding chores."
    },
    {
      num: "03 / 04",
      tag: "The 5-Pillar Architecture",
      hook: "Education • Lifestyle • Community • Product • Behind the Scenes",
      desc: "Transforming erratic one-off posts into recurring predictable formats that followers actively look forward to."
    },
    {
      num: "04 / 04",
      tag: "The Conversation CTA",
      hook: "Save this framework for your Monday ritual.",
      desc: "Utility-focused CTA prompting bookmark behavior, teaching the algorithm that this post delivers high value."
    }
  ];

  let currentSlide = 0;
  const slideNumEl = document.getElementById("cs-carousel-num");
  const slideTagEl = document.getElementById("cs-carousel-tag");
  const slideHookEl = document.getElementById("cs-carousel-hook");
  const slideDescEl = document.getElementById("cs-carousel-desc");
  const prevBtn = document.getElementById("cs-carousel-prev");
  const nextBtn = document.getElementById("cs-carousel-next");
  const dotsContainer = document.getElementById("cs-carousel-dots");

  if (!slideHookEl || !dotsContainer) return;

  function updateSlide(idx) {
    currentSlide = (idx + slides.length) % slides.length;
    const s = slides[currentSlide];

    if (slideNumEl) slideNumEl.textContent = s.num;
    if (slideTagEl) slideTagEl.textContent = s.tag;
    if (slideHookEl) slideHookEl.textContent = `"${s.hook}"`;
    if (slideDescEl) slideDescEl.textContent = s.desc;

    const dots = dotsContainer.querySelectorAll(".carousel-dot");
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === currentSlide);
    });
  }

  dotsContainer.innerHTML = slides.map((_, i) => `
    <button class="carousel-dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
  `).join("");

  dotsContainer.querySelectorAll(".carousel-dot").forEach(btn => {
    btn.addEventListener("click", () => {
      updateSlide(parseInt(btn.getAttribute("data-index")));
    });
  });

  if (prevBtn) prevBtn.addEventListener("click", () => updateSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => updateSlide(currentSlide + 1));
}

/* ==========================================================================
   9. ANALYTICS CHARTS INITIALIZATION
   ========================================================================== */
function initAnalytics() {
  if (window.AnalyticsVisualizer) {
    const visualizer = new window.AnalyticsVisualizer();
    visualizer.init();
  }
}

/* ==========================================================================
   10. CONTACT BUTTON ACTIONS & EMAIL COPY
   ========================================================================== */
function initContactActions() {
  const copyBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("toast-notice");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const emailNotice = "Please connect via LinkedIn or send an inquiry to discuss opportunities!";
      navigator.clipboard.writeText("contact.harinakshi@placeholder.com").then(() => {
        showToast("Email placeholder copied! Inquiries welcome via LinkedIn.");
      }).catch(() => {
        showToast(emailNotice);
      });
    });
  }

  // Handle contact form submission demo
  const contactForm = document.getElementById("portfolio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you for reaching out! Portfolio demo submission received.");
      contactForm.reset();
    });
  }
}

function showToast(message) {
  let toast = document.getElementById("toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 4000);
}
