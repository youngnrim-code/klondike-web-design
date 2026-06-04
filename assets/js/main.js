/* =========================================================
   KLONDIKE INC — Site behavior
   Shared header/footer, nav, reveal, accordion, forms
   ========================================================= */
(function () {
  "use strict";

  /* ---- Brand mark (real KLONDIKE "K", white for dark surfaces) ---- */
  const MARK = `<img class="brand__mark" src="assets/img/logo-mark-white.png" alt="KLONDIKE" width="34" height="34" />`;

  /* ---- Navigation model ---- */
  const NAV = [
    { tag: "What", label: "Solutions", href: "solutions.html" },
    { tag: "Why", label: "Why Klondike", href: "why.html" },
    { tag: "Where", label: "Where We Work", href: "where.html" },
    { tag: "Company", label: "Company", href: "company.html" }
  ];

  const ICON = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9l5 3-5 3V9Z" fill="currentColor" stroke="none"/></svg>',
    blog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M14 4v5h5M8 13h8M8 17h5"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 4c4.97 0 9 3.13 9 7s-4.03 7-9 7a11 11 0 0 1-3-.4L4 20l1.2-3.2C3.83 15.5 3 13.84 3 12c0-3.87 4.03-7 9-7Z"/></svg>'
  };

  const current = (document.body.getAttribute("data-page") || "").trim();

  /* ---- Build header ---- */
  function buildHeader() {
    const links = NAV.map(
      (n) =>
        `<a class="nav__link${current === n.href ? " is-active" : ""}" href="${n.href}">
           <span class="tag">${n.tag}</span>${n.label}
         </a>`
    ).join("");

    const mLinks = NAV.map(
      (n) => `<a href="${n.href}"><span class="tag">${n.tag}</span>${n.label}</a>`
    ).join("");

    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="container">
        <nav class="nav" aria-label="Primary">
          <a class="brand" href="index.html" aria-label="KLONDIKE INC home">
            ${MARK}<span class="brand__name">KLONDIKE<span>.</span></span>
          </a>
          <div class="nav__links">${links}</div>
          <div class="nav__actions">
            <a class="btn btn--gold nav__cta" href="contact.html">Let's Talk</a>
            <button class="nav__toggle" aria-label="Toggle menu" aria-expanded="false"><span></span></button>
          </div>
        </nav>
      </div>`;

    const mobile = document.createElement("div");
    mobile.className = "mobile-nav";
    mobile.innerHTML = `${mLinks}<a class="btn btn--gold btn--block" href="contact.html">Let's Talk</a>`;

    document.body.prepend(mobile);
    document.body.prepend(header);

    const toggle = header.querySelector(".nav__toggle");
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    mobile.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );

    const onScroll = () =>
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Build footer ---- */
  function buildFooter() {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer__top">
          <div class="footer__brand">
            <a class="brand" href="index.html">${MARK}<span class="brand__name">KLONDIKE<span>.</span></span></a>
            <div class="brand__tagline">Earnest Payment</div>
            <p>Official distributor of Beaver Store Lab — the complete store hardware &amp; software lineup, supplied, installed and supported nationwide.</p>
            <div class="footer__social">
              <a href="#" aria-label="Instagram">${ICON.instagram}</a>
              <a href="#" aria-label="YouTube">${ICON.youtube}</a>
              <a href="#" aria-label="Blog">${ICON.blog}</a>
              <a href="#" aria-label="Chat">${ICON.chat}</a>
            </div>
          </div>
          <div class="footer__col">
            <h5>Solutions</h5>
            <ul>
              <li><a href="solutions.html">Kiosks &amp; Barrier-Free</a></li>
              <li><a href="solutions.html">POS &amp; Kitchen (KDS)</a></li>
              <li><a href="solutions.html">Table &amp; QR Order</a></li>
              <li><a href="solutions.html">BeaverPay &amp; IoT Access</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>Company</h5>
            <ul>
              <li><a href="company.html">About Klondike</a></li>
              <li><a href="why.html">Why Klondike</a></li>
              <li><a href="where.html">Case Studies</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>Support</h5>
            <ul>
              <li><a href="mailto:support@klondike.co.kr">support@klondike.co.kr</a></li>
              <li><a href="contact.html">Request a Demo</a></li>
              <li><a href="#">Partner Login</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__legal">
            <span><b>KLONDIKE INC</b> &nbsp;·&nbsp; CEO: Helen Kim &nbsp;·&nbsp; Reg. No. 642-86-02107</span>
            <span>28-4 Teheran-ro 1-gil, Gangnam-gu, Seoul, Republic of Korea &nbsp;·&nbsp; support@klondike.co.kr</span>
            <span>Official distributor of Beaver Store Lab (㈜비버웍스). Product names &amp; specifications are property of the manufacturer.</span>
            <span>© ${new Date().getFullYear()} KLONDIKE INC. All rights reserved.</span>
          </div>
          <a class="btn btn--outline-light" href="#top">Back to top ↑</a>
        </div>
      </div>`;
    document.body.appendChild(footer);
  }

  /* ---- Scroll reveal ---- */
  function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---- Accordion ---- */
  function initAccordion() {
    document.querySelectorAll(".acc__q").forEach((q) => {
      q.addEventListener("click", () => {
        const item = q.closest(".acc");
        const body = item.querySelector(".acc__a");
        const open = item.classList.toggle("is-open");
        body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
      });
    });
  }

  /* ---- Demo form ---- */
  function initForms() {
    document.querySelectorAll("form[data-demo]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const ok = form.querySelector(".form__success");
        if (ok) ok.classList.add("show");
        form.querySelectorAll("input, textarea, select").forEach((f) => {
          if (f.type !== "submit") f.value = "";
        });
        if (ok) ok.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
  }

  /* ---- Animated counters ---- */
  function initCounters() {
    const nums = document.querySelectorAll("[data-count]");
    if (!nums.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.getAttribute("data-count"));
        const suffix = el.getAttribute("data-suffix") || "";
        const dur = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent =
            (target % 1 ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach((n) => io.observe(n));
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    buildFooter();
    initReveal();
    initAccordion();
    initForms();
    initCounters();
  });
})();
