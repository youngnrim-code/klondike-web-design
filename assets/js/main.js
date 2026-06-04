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
    { tag: "Where", label: "Case Studies", href: "where.html" },
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
        <nav class="nav" aria-label="주요 메뉴">
          <a class="brand" href="index.html" aria-label="KLONDIKE INC home">
            ${MARK}<span class="brand__name">KLONDIKE<span>.</span></span>
          </a>
          <div class="nav__links">${links}</div>
          <div class="nav__actions">
            <a class="btn btn--gold nav__cta" href="contact.html">상담 신청</a>
            <button class="nav__toggle" aria-label="Toggle menu" aria-expanded="false"><span></span></button>
          </div>
        </nav>
      </div>`;

    const mobile = document.createElement("div");
    mobile.className = "mobile-nav";
    mobile.innerHTML = `${mLinks}<a class="btn btn--gold btn--block" href="contact.html">상담 신청</a>`;

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
            <p>비버 매장연구소 공식 총판 — 키오스크부터 결제·운영까지, 매장에 필요한 하드웨어와 소프트웨어를 전국 어디서나 공급·설치·지원합니다.</p>
            <div class="footer__social">
              <a href="https://youtu.be/dsZYxFDcBro?si=aCYKTQJfxp9Uq5XQ" target="_blank" rel="noopener" aria-label="YouTube">${ICON.youtube}</a>
            </div>
          </div>
          <div class="footer__col">
            <h5>솔루션</h5>
            <ul>
              <li><a href="solutions.html">키오스크 · 배리어프리</a></li>
              <li><a href="solutions.html">포스 · 주방(KDS)</a></li>
              <li><a href="solutions.html">테이블오더 · QR오더</a></li>
              <li><a href="solutions.html">비버페이 · IoT 출입인증</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>회사</h5>
            <ul>
              <li><a href="company.html">회사 소개</a></li>
              <li><a href="why.html">선택 이유</a></li>
              <li><a href="where.html">도입 사례</a></li>
              <li><a href="contact.html">상담·문의</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>고객지원</h5>
            <ul>
              <li><a href="mailto:support@klondike.co.kr">support@klondike.co.kr</a></li>
              <li><a href="contact.html">무료 상담 신청</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__legal">
            <span><b>클론다이크(주) · KLONDIKE INC.</b> &nbsp;·&nbsp; 대표 김혜림 &nbsp;·&nbsp; 사업자등록번호 642-86-02107</span>
            <span>서울특별시 강남구 테헤란로1길 28-4 &nbsp;·&nbsp; support@klondike.co.kr</span>
            <span>비버 매장연구소(㈜비버웍스) 공식 총판. 제품명 및 사양은 제조사의 자산입니다.</span>
            <span>© ${new Date().getFullYear()} KLONDIKE INC. All rights reserved.</span>
          </div>
          <a class="btn btn--outline-light" href="#top">맨 위로 ↑</a>
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

  /* ---- Consultation form (emails the team via form endpoint) ---- */
  function initForms() {
    document.querySelectorAll("form[data-demo], form[data-endpoint]").forEach((form) => {
      const ok = form.querySelector(".form__success");
      const btn = form.querySelector('button[type="submit"]');
      const endpoint = form.getAttribute("data-endpoint");

      const showSuccess = () => {
        if (ok) ok.classList.add("show");
        form.querySelectorAll("input, textarea, select").forEach((f) => {
          if (f.type !== "submit" && f.type !== "hidden") f.value = "";
        });
        if (ok) ok.scrollIntoView({ behavior: "smooth", block: "center" });
      };

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }

        if (!endpoint) { showSuccess(); return; } // demo fallback

        const data = {};
        form.querySelectorAll("input, textarea, select").forEach((f) => {
          if (f.name) data[f.name] = f.value;
        });

        const label = btn ? btn.innerHTML : "";
        if (btn) { btn.disabled = true; btn.textContent = "전송 중…"; }
        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(data)
          });
          if (!res.ok) throw new Error("Request failed: " + res.status);
          showSuccess();
        } catch (err) {
          alert("전송에 실패했습니다. 잠시 후 다시 시도하시거나 support@klondike.co.kr 로 연락해 주세요.");
        } finally {
          if (btn) { btn.disabled = false; btn.innerHTML = label; }
        }
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
