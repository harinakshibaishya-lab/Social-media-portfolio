/**
 * Harinakshi Baishya - Social Media & Content Strategist Portfolio
 * Main Application Logic: Navigation, Visual Modals, Showcase Filters, 30-Day Calendar, Measurement Framework, Audit Checklist
 */

function refreshIcons() {
  if (typeof window !== "undefined" && window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initWorkflowSection();
  initContentPlayground();
  initContentModal();
  initCampaignMeasurement();
  initHookComparison();
  initGlossierAudit();
  initContentCalendar();
  initCopywritingLab();
  initStrategyFlow();
  initAuditChecklist();
  initCaseStudy01Carousel();
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

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });

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
   2. "FROM BRIEF TO POST" CONTENT CREATION WORKFLOW SECTION
   ========================================================================== */
function initWorkflowSection() {
  const container = document.getElementById("workflow-steps-container");
  if (!container || !PORTFOLIO_DATA.workflowSteps) return;

  container.innerHTML = PORTFOLIO_DATA.workflowSteps.map(step => `
    <div class="workflow-card">
      <div class="workflow-num">${step.number}</div>
      <h3 class="workflow-title">${step.title}</h3>
      <div class="workflow-question">"${step.question}"</div>
      <p class="workflow-desc">${step.description}</p>
    </div>
  `).join("");

  refreshIcons();
}

/* ==========================================================================
   3. CONTENT PLAYGROUND (12 POLISHED VISUAL ITEMS & FILTERING)
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
    <article class="content-card" data-id="${item.id}" tabindex="0" role="button" aria-label="Inspect ${item.title}">
      <!-- Visual Showcase Header Card -->
      <div class="card-visual-wrapper visual-${item.visualType}">
        <div class="card-speculative-badge">PORTFOLIO SAMPLE</div>
        
        <div class="card-visual-inner">
          <div class="card-platform-pills">
            <span class="pill-plat"><i data-lucide="${getPlatformIcon(item.platform)}"></i> ${item.platform}</span>
            <span class="pill-format">${item.format}</span>
          </div>

          <div class="card-visual-hero">
            <div class="card-code-tag">Item ${item.code}</div>
            <h4 class="card-hook-headline">"${item.hook}"</h4>
          </div>

          <div class="card-visual-bottom">
            <span class="pill-obj">Objective: <strong>${item.objective}</strong></span>
            <span class="card-inspect-hint">Inspect Visual & Copy →</span>
          </div>
        </div>
      </div>
      
      <!-- Card Info -->
      <div class="card-info">
        <div class="card-header-tags">
          <span class="badge badge-subtle">${item.platform.toUpperCase()}</span>
          <span class="badge badge-subtle">${item.format.toUpperCase()}</span>
          <span class="badge badge-objective">${item.objective.toUpperCase()}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.shortDesc}</p>
        <div class="card-footer-cta">
          <span class="view-visual-prompt"><i data-lucide="eye"></i> View Full Creative Sample</span>
          <i data-lucide="arrow-up-right" style="color: var(--accent-primary);"></i>
        </div>
      </div>
    </article>
  `).join("");

  refreshIcons();

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
   4. MODAL INSPECTOR: CAROUSEL SLIDERS, REEL STORYBOARDS, STORIES
   ========================================================================== */
let previouslyFocusedElement = null;
let activeModalSlide = 0;

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

  activeModalSlide = 0;

  let visualHtml = "";

  // Visual Type A: Multi-Slide Carousel Viewer
  if (item.slides && item.slides.length > 0) {
    visualHtml = `
      <div class="modal-carousel-viewer" id="modal-carousel-viewer">
        <div class="carousel-preview-screen">
          <div class="screen-top-meta">
            <span class="screen-plat-badge"><i data-lucide="${getPlatformIcon(item.platform)}"></i> ${item.platform} Carousel</span>
            <span class="screen-slide-counter" id="modal-slide-counter">Slide 1 of ${item.slides.length}</span>
          </div>
          <div class="screen-main-content">
            <div class="screen-slide-note" id="modal-slide-note">${item.slides[0].note}</div>
            <div class="screen-slide-text" id="modal-slide-text">${item.slides[0].text}</div>
          </div>
          <div class="screen-bottom-meta">
            <span>harinakshi.creates • Speculative Sample</span>
            <span>Swipe ➔</span>
          </div>
        </div>

        <div class="carousel-nav-toolbar">
          <button class="carousel-prev-btn" id="modal-prev-slide" aria-label="Previous slide">
            <i data-lucide="chevron-left"></i>
          </button>
          <div class="carousel-dots-row" id="modal-carousel-dots">
            ${item.slides.map((_, idx) => `
              <button class="c-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}" aria-label="Slide ${idx + 1}"></button>
            `).join("")}
          </div>
          <button class="carousel-next-btn" id="modal-next-slide" aria-label="Next slide">
            <i data-lucide="chevron-right"></i>
          </button>
        </div>
      </div>
    `;
  } 
  // Visual Type B: Reel Storyboard with Scene-by-Scene Breakdown
  else if (item.storyboard && item.storyboard.length > 0) {
    visualHtml = `
      <div class="modal-reel-viewer">
        <div class="reel-phone-frame">
          <div class="phone-notch"></div>
          <div class="reel-top-row">
            <span class="reel-icon-tag"><i data-lucide="film"></i> REELS CONCEPT</span>
            <span class="reel-audio-chip"><i data-lucide="music-2"></i> ${item.audio || 'Original Audio'}</span>
          </div>
          
          <div class="reel-cover-box">
            <span class="reel-cover-eyebrow">OPENING HOOK (0-2s)</span>
            <div class="reel-cover-hook">${item.hook}</div>
            <div class="reel-cta-overlay">${item.cta}</div>
          </div>
        </div>

        <div class="reel-storyboard-scenes">
          <h4 class="scenes-header"><i data-lucide="clapperboard"></i> Scene-by-Scene Structure:</h4>
          ${item.storyboard.map(scene => `
            <div class="storyboard-scene-card">
              <span class="scene-label">${scene.scene}</span>
              <p class="scene-visual"><strong>Visual:</strong> ${scene.visual}</p>
              <p class="scene-text"><strong>On-Screen Text:</strong> "${scene.onScreenText}"</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  // Visual Type C: 3 Connected Instagram Story Screens
  else if (item.storyScreens && item.storyScreens.length > 0) {
    visualHtml = `
      <div class="modal-stories-sequence">
        <h4 class="stories-seq-title"><i data-lucide="sparkles"></i> 3-Part Connected Story Sequence:</h4>
        <div class="stories-triptych">
          ${item.storyScreens.map(screen => `
            <div class="story-screen-mockup">
              <div class="story-screen-header">
                <span class="story-avatar">H</span>
                <span class="story-handle">harinakshi</span>
                <span class="story-time">2h</span>
              </div>
              <div class="story-screen-body">
                <span class="story-screen-num">${screen.title}</span>
                <p class="story-screen-copy">"${screen.text}"</p>
                <div class="story-interactive-sticker">
                  ${screen.sticker}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  // Visual Type D: Polished LinkedIn Post Card
  else if (item.linkedInPost) {
    visualHtml = `
      <div class="modal-linkedin-viewer">
        <div class="linkedin-post-card">
          <div class="li-post-header">
            <div class="li-post-avatar">HB</div>
            <div class="li-post-author">
              <strong>Harinakshi Baishya</strong>
              <span>Social Media & Content Strategist</span>
              <span class="li-post-time">1d • 🌐</span>
            </div>
          </div>
          <div class="li-post-body">
            <pre class="li-post-pre">${item.linkedInPost}</pre>
          </div>
          <div class="li-post-engagement-bar">
            <span>👍 84 reactions</span>
            <span>💬 28 comments</span>
          </div>
          <div class="li-post-actions-row">
            <span><i data-lucide="thumbs-up"></i> Like</span>
            <span><i data-lucide="message-square"></i> Comment</span>
            <span><i data-lucide="repeat"></i> Repost</span>
            <span><i data-lucide="send"></i> Send</span>
          </div>
        </div>
      </div>
    `;
  }
  // Visual Type E: General Creative Mockup
  else {
    visualHtml = `
      <div class="modal-generic-viewer">
        <div class="generic-phone-mockup">
          <div class="phone-notch"></div>
          <div class="generic-mockup-header">
            <span class="mock-avatar">H</span>
            <span class="mock-user">harinakshi.creates</span>
          </div>
          <div class="generic-screen-art visual-${item.visualType}">
            <div class="art-badge">${item.badge}</div>
            <div class="art-hook">${item.hook}</div>
            <div class="art-cta">${item.cta}</div>
          </div>
          <div class="generic-caption-summary">
            <strong>harinakshi.creates</strong> ${item.shortDesc}
          </div>
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <div class="modal-layout-grid">
      <!-- Left Column: Visual Content (Primary Focus) -->
      <div class="modal-primary-visual">
        <div class="modal-speculative-header">
          <span class="spec-label"><i data-lucide="file-badge-2"></i> SPECULATIVE PORTFOLIO WORK</span>
          <span class="spec-category">${item.platform.toUpperCase()} • ${item.format.toUpperCase()}</span>
        </div>
        
        ${visualHtml}
      </div>

      <!-- Right Column: Strategy & Copy Breakdown -->
      <div class="modal-strategy-details">
        <div class="meta-tags-line">
          <span class="badge badge-subtle">${item.platform}</span>
          <span class="badge badge-subtle">${item.format}</span>
          <span class="badge badge-objective">Objective: ${item.objective}</span>
        </div>

        <h2 class="modal-entry-title">${item.title}</h2>

        <div class="strategy-detail-section">
          <span class="strategy-label">THE HOOK (FIRST 2 SECONDS)</span>
          <blockquote class="hook-callout">"${item.hook}"</blockquote>
        </div>

        <div class="strategy-detail-section">
          <span class="strategy-label">PLATFORM-READY CAPTION</span>
          <div class="caption-display-box">
            <pre class="caption-content">${item.caption}</pre>
          </div>
        </div>

        <div class="strategy-detail-section">
          <span class="strategy-label">CALL TO ACTION (CTA)</span>
          <div class="cta-display-pill">
            <i data-lucide="corner-down-right"></i>
            <span>${item.cta}</span>
          </div>
        </div>

        <div class="strategy-two-col">
          <div class="strategy-sub-box">
            <span class="strategy-label">TARGET AUDIENCE</span>
            <p class="strategy-sub-text">${item.audience}</p>
          </div>
          <div class="strategy-sub-box">
            <span class="strategy-label">WHY THIS CONTENT WORKS</span>
            <p class="strategy-sub-text">${item.whyItWorks}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  refreshIcons();

  // Attach carousel interactive buttons if present
  if (item.slides && item.slides.length > 0) {
    const prevBtn = document.getElementById("modal-prev-slide");
    const nextBtn = document.getElementById("modal-next-slide");
    const dots = document.querySelectorAll("#modal-carousel-dots .c-dot");
    const counterEl = document.getElementById("modal-slide-counter");
    const noteEl = document.getElementById("modal-slide-note");
    const textEl = document.getElementById("modal-slide-text");

    const updateSlide = (idx) => {
      activeModalSlide = (idx + item.slides.length) % item.slides.length;
      const s = item.slides[activeModalSlide];
      if (counterEl) counterEl.textContent = `Slide ${activeModalSlide + 1} of ${item.slides.length}`;
      if (noteEl) noteEl.textContent = s.note;
      if (textEl) textEl.textContent = s.text;
      dots.forEach((d, i) => d.classList.toggle("active", i === activeModalSlide));
    };

    if (prevBtn) prevBtn.addEventListener("click", () => updateSlide(activeModalSlide - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => updateSlide(activeModalSlide + 1));
    dots.forEach(d => {
      d.addEventListener("click", () => updateSlide(parseInt(d.getAttribute("data-idx"))));
    });
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) closeBtn.focus();
}

/* ==========================================================================
   5. HOW I WOULD MEASURE A CAMPAIGN (AUTHENTIC MEASUREMENT FRAMEWORK)
   ========================================================================== */
function initCampaignMeasurement() {
  const container = document.getElementById("campaign-measurement-grid");
  const processContainer = document.getElementById("measurement-process-flow");

  if (!container || !PORTFOLIO_DATA.campaignMeasurement) return;

  const data = PORTFOLIO_DATA.campaignMeasurement;

  container.innerHTML = data.metrics.map(m => `
    <div class="measurement-card">
      <div class="measurement-header">
        <span class="measurement-name">${m.name}</span>
        <i data-lucide="${m.icon}" class="measurement-icon"></i>
      </div>
      <div class="measurement-question">${m.question}</div>
      <p class="measurement-desc">${m.explanation}</p>
    </div>
  `).join("");

  if (processContainer) {
    processContainer.innerHTML = data.process.map((step, idx) => `
      <span class="process-node">${step}</span>
      ${idx < data.process.length - 1 ? '<span class="process-arrow">→</span>' : ''}
    `).join("");
  }

  refreshIcons();
}

/* ==========================================================================
   6. HOOK WRITING COMPARISON (REPLACING 36% STATISTIC)
   ========================================================================== */
function initHookComparison() {
  const container = document.getElementById("hook-comparison-container");
  if (!container || !PORTFOLIO_DATA.hookComparison) return;

  const data = PORTFOLIO_DATA.hookComparison;

  container.innerHTML = `
    <div class="hook-comparison-card">
      <div class="hook-comp-header">
        <span class="badge badge-speculative">${data.label.toUpperCase()}</span>
        <h3 class="hook-comp-title">${data.principle}</h3>
      </div>

      <div class="hook-comp-grid">
        <div class="hook-box hook-weaker">
          <div class="hook-box-tag">WEAKER HOOK</div>
          <div class="hook-quote-text">"${data.weaker.hook}"</div>
          <div class="hook-critique">${data.weaker.why}</div>
        </div>

        <div class="hook-box hook-stronger">
          <div class="hook-box-tag">STRONGER HOOK</div>
          <div class="hook-quote-text">"${data.stronger.hook}"</div>
          <div class="hook-critique">${data.stronger.why}</div>
        </div>
      </div>
    </div>
  `;

  refreshIcons();
}

/* ==========================================================================
   7. GLOSSIER INDEPENDENT AUDIT (VISUAL 5-PILLAR BREAKDOWN)
   ========================================================================== */
function initGlossierAudit() {
  const container = document.getElementById("glossier-pillars-container");
  if (!container || !PORTFOLIO_DATA.glossierAudit) return;

  const data = PORTFOLIO_DATA.glossierAudit;

  container.innerHTML = data.pillars.map(pillar => `
    <div class="glossier-pillar-card">
      <div class="pillar-cat-badge">${pillar.category}</div>
      
      <div class="pillar-row">
        <span class="pillar-label">OBSERVATION:</span>
        <p class="pillar-content">${pillar.observation}</p>
      </div>

      <div class="pillar-row">
        <span class="pillar-label">OPPORTUNITY:</span>
        <p class="pillar-content">${pillar.opportunity}</p>
      </div>

      <div class="pillar-row content-idea-row">
        <span class="pillar-label">CONTENT IDEA:</span>
        <p class="pillar-content idea-text">${pillar.contentIdea}</p>
      </div>
    </div>
  `).join("");

  refreshIcons();
}

/* ==========================================================================
   8. 30-DAY CONTENT CALENDAR (DYNAMIC TABLE & FILTERING)
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
   9. COPYWRITING LAB ("WORDS MATTER")
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
          <span class="copy-spec-badge">Copywriting Example</span>
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
            <strong>Why This Works (Audience Psychology):</strong>
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

  renderCopySample("EDUCATIONAL");
}

/* ==========================================================================
   10. STRATEGY 5-STEP PROCESS FLOW
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
   11. INTERACTIVE SOCIAL MEDIA AUDIT CHECKLIST
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
      scoreCounter.textContent = `${checkedCount} / ${totalItems} Criteria Met (${pct}%)`;
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
   12. CASE STUDY 01 INTERACTIVE CAROUSEL SIMULATOR
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
      desc: "Utility-focused CTA prompting bookmark behavior, signaling high content value."
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
   13. CONTACT BUTTON ACTIONS & EMAIL COPY
   ========================================================================== */
function initContactActions() {
  const copyBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("toast-notice");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const emailNotice = "Please connect via LinkedIn or message to discuss opportunities!";
      navigator.clipboard.writeText("contact.harinakshi@placeholder.com").then(() => {
        showToast("Email placeholder copied! Direct inquiries welcome via LinkedIn.");
      }).catch(() => {
        showToast(emailNotice);
      });
    });
  }

  const contactForm = document.getElementById("portfolio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you for reaching out! Portfolio message simulation sent.");
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
