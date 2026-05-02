/* Shared header + footer renderer for LEDGUARD pages.
   Usage: include <div id="ledg-header" data-active="produkty"></div> + <div id="ledg-footer"></div>
   then <script src="assets/header.js"></script>
*/
(function () {
  const NAV = [
    { id: "produkty",     label: "Produkty",        href: "products.html" },
    { id: "technologia",  label: "Technologia EVLN", href: "technology.html" },
    { id: "blue-care",    label: "Blue Care",       href: "blue-care.html" },
    { id: "zastosowania", label: "Zastosowania",    href: "applications.html" },
    { id: "realizacje",   label: "Realizacje",      href: "case-studies.html" },
    { id: "badania",      label: "Badania i certyfikaty", href: "research.html" },
    { id: "pobierz",      label: "Do pobrania",     href: "downloads.html" },
    { id: "blog",         label: "Blog",            href: "blog.html" },
    { id: "kontakt",      label: "Kontakt",         href: "contact.html" },
  ];

  function icon(name, size = 18) {
    const s = size;
    const ic = {
      shield:  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      check:   `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
      truck:   `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      phone:   `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>`,
      search:  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
      heart:   `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
      user:    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      cart:    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
      download:`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
      building:`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>`,
      mark:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v7c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5l-8-3z"/><path d="M9 12h6M12 9v6" stroke="#00B4D8"/></svg>`,
      mail:    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
      pin:     `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      lin:     `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="8" y1="11" x2="8" y2="17"/><line x1="8" y1="7" x2="8" y2="7"/><path d="M12 17v-3a2 2 0 0 1 4 0v3M16 17v-3a2 2 0 0 1 4 0v3"/></svg>`,
      box:     `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
      file:    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
      book:    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
      x:       `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    };
    return ic[name] || "";
  }

  window.LEDG_ICON = icon;

  function logoLockup(white) {
    const sub = white ? "rgba(255,255,255,0.55)" : "var(--ink-3)";
    const subBorder = white ? "rgba(255,255,255,0.2)" : "var(--line)";
    return `
      <a href="index.html" class="logo" aria-label="LEDGUARD — strona główna">
        <span class="logo__mark">${icon('mark')}</span>
        <span>LEDGUARD</span>
        <span class="logo__sub" style="color:${sub}; border-color:${subBorder}">EVSun · Disinfecting Light</span>
      </a>
    `;
  }
  window.LEDG_LOGO = logoLockup;

  function renderHeader(active) {
    return `
      <div class="trustbar">
        <div class="shell">
          <div class="trustbar__items">
            <span class="trustbar__item">${icon('shield', 14)} Oficjalny dystrybutor EVSun w Polsce i Europie</span>
            <span class="trustbar__item">${icon('truck', 14)} Wysyłka B2B w 24–48h</span>
            <span class="trustbar__item">${icon('check', 14)} 2 lata gwarancji</span>
          </div>
          <div class="trustbar__right">
            <a href="contact.html">${icon('phone', 13)} +48 22 110 88 00</a>
            <a href="contact.html">Pomoc techniczna</a>
            <a href="downloads.html">Do pobrania</a>
          </div>
        </div>
      </div>

      <div class="header__top shell">
        ${logoLockup(false)}
        <div class="search" onclick="window.LEDG_openSearch&&window.LEDG_openSearch()" style="cursor:pointer">
          ${icon('search', 18)}
          <input type="search" placeholder="Szukaj produktów, modeli, dokumentów…" aria-label="Szukaj" readonly style="cursor:pointer;pointer-events:none" />
        </div>
        <div class="header__actions">
          <button class="icon-btn" id="cart-btn" title="Koszyk" onclick="event.preventDefault();window.LEDG_openCart&&window.LEDG_openCart()">${icon('cart')} <span class="hide-md">Koszyk</span><span class="icon-btn__badge" id="cart-count" style="display:none">0</span></button>
          <a href="account.html" class="icon-btn icon-btn--cta" title="Konto">${icon('user')} <span>Konto</span></a>
          <span class="lang" title="Language switcher">
            <button class="is-active">PL</button>
            <button>EN</button>
          </span>
        </div>
      </div>

      <nav class="nav">
        <div class="shell">
          <ul class="nav__list">
            ${NAV.map(n => `<li class="nav__item ${n.id === active ? 'nav__item--active' : ''}"><a href="${n.href}">${n.label}</a></li>`).join("")}
            <li class="nav__item nav__item--cta"><a href="b2b.html">Poproś o wycenę B2B →</a></li>
          </ul>
        </div>
      </nav>
    `;
  }

  function renderFooter() {
    return `
      <div class="shell">
        <div class="footer__grid">
          <div class="footer__brand">
            ${logoLockup(true)}
            <p>Oficjalny dystrybutor technologii oświetleniowej EVSun w Polsce i Unii Europejskiej. Energooszczędne LED + wspomagająca redukcja bakterii i grzybów, bez UV.</p>
            <div class="footer__certs">
              <span class="footer__cert">CE</span>
              <span class="footer__cert">PZH</span>
              <span class="footer__cert">IBPRS</span>
              <span class="footer__cert">TÜV SÜD</span>
              <span class="footer__cert">UGENE</span>
              <span class="footer__cert">SIRIM</span>
              <span class="footer__cert">ISO 9001</span>
            </div>
          </div>
          <div class="footer__col">
            <h4>Produkty</h4>
            <ul>
              <li><a href="products.html?cat=podtynkowe">Lampy podtynkowe</a></li>
              <li><a href="products.html?cat=natynkowe">Lampy natynkowe</a></li>
              <li><a href="products.html?cat=panele">Panele LED</a></li>
              <li><a href="products.html?cat=liniowe">Lampy liniowe</a></li>
              <li><a href="products.html?cat=hermetyczne">Hermetyczne</a></li>
              <li><a href="products.html?cat=przemyslowe">Przemysłowe</a></li>
              <li><a href="products.html?cat=akcesoria">Akcesoria</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Wiedza</h4>
            <ul>
              <li><a href="technology.html">Technologia EVLN</a></li>
              <li><a href="blue-care.html">Blue Care</a></li>
              <li><a href="research.html">Badania i certyfikaty</a></li>
              <li><a href="case-studies.html">Realizacje</a></li>
              <li><a href="downloads.html">Dokumenty do pobrania</a></li>
              <li><a href="blog.html">Blog / poradniki</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Dla firm</h4>
            <ul>
              <li><a href="b2b.html">Strefa Partnera B2B</a></li>
              <li><a href="b2b.html">Wycena projektu</a></li>
              <li><a href="b2b.html">Dla architektów</a></li>
              <li><a href="b2b.html">Dla wykonawców</a></li>
              <li><a href="b2b.html">Dla inwestorów</a></li>
              <li><a href="downloads.html">Pakiet dla inwestora</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Kontakt</h4>
            <ul>
              <li>${icon('phone', 14)} +48 22 110 88 00</li>
              <li>${icon('mail', 14)} kontakt@ledguard.pl</li>
              <li>${icon('pin', 14)} ul. Domaniewska 47, 02-672 Warszawa</li>
              <li>Pn–Pt 8:00–17:00</li>
              <li><a href="contact.html">Umów konsultację →</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <div>© 2026 LEDGUARD Sp. z o.o. · NIP 5213998811 · KRS 0000987654 · ledguard.pl · ledguard.eu</div>
          <div class="footer__legal">
            <a href="#">Regulamin</a>
            <a href="#">Polityka prywatności</a>
            <a href="#">Cookies</a>
            <a href="#">Reklamacje</a>
            <a href="#">Mapa strony</a>
          </div>
        </div>
      </div>
    `;
  }

  /* ── Search overlay HTML ── */
  function renderSearchOverlay() {
    return `
    <div class="search-overlay" id="ledg-search-overlay" role="dialog" aria-modal="true" aria-label="Wyszukiwarka">
      <div class="search-overlay__backdrop" id="ledg-search-backdrop"></div>
      <div class="search-overlay__panel">
        <div class="shell">
          <div class="search-overlay__input-row">
            <div class="search-overlay__input-wrap" style="flex:1">
              ${icon('search', 22)}
              <input class="search-overlay__input" id="ledg-search-input" type="search"
                placeholder="Szukaj produktów, certyfikatów, dokumentów…"
                autocomplete="off" spellcheck="false" />
            </div>
            <button class="search-overlay__close" id="ledg-search-close">
              Zamknij &nbsp; <kbd style="font-size:11px;opacity:.6">Esc</kbd>
            </button>
          </div>
          <div class="search-overlay__cats" id="ledg-search-cats">
            <button class="search-cat">${icon('box', 14)} Panele LED</button>
            <button class="search-cat">${icon('box', 14)} Podtynkowe</button>
            <button class="search-cat">${icon('box', 14)} Hermetyczne IP65</button>
            <button class="search-cat">${icon('file', 14)} Certyfikaty</button>
            <button class="search-cat">${icon('file', 14)} Raporty TÜV / UGENE</button>
            <button class="search-cat">${icon('book', 14)} Technologia EVLN</button>
            <button class="search-cat">${icon('book', 14)} Realizacje</button>
          </div>
          <div class="search-results" id="ledg-search-results"></div>
        </div>
      </div>
    </div>`;
  }

  /* ── Cart sidebar HTML ── */
  function renderCartOverlay() {
    return `
    <div class="cart-overlay" id="ledg-cart-overlay" role="dialog" aria-modal="true" aria-label="Koszyk">
      <div class="cart-overlay__backdrop" id="ledg-cart-backdrop"></div>
      <div class="cart-sidebar">
        <div class="cart-sidebar__head">
          <div class="cart-sidebar__title">
            ${icon('cart', 20)} Koszyk <span id="ledg-cart-badge">0</span>
          </div>
          <button class="cart-sidebar__close" id="ledg-cart-close" aria-label="Zamknij koszyk">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="cart-sidebar__body" id="ledg-cart-body">
          <div class="cart-empty" id="ledg-cart-empty">
            <div class="cart-empty__ico">${icon('cart', 30)}</div>
            <strong>Koszyk jest pusty</strong>
            <p>Przeglądaj produkty i dodaj coś do koszyka.</p>
            <a href="products.html" class="btn btn--primary" style="margin-top:16px">Zobacz produkty</a>
          </div>
          <div id="ledg-cart-items"></div>
        </div>
        <div class="cart-sidebar__foot" id="ledg-cart-foot" style="display:none">
          <div class="cart-subtotal">
            <span>Razem brutto</span>
            <strong id="ledg-cart-total">0,00 PLN</strong>
          </div>
          <div class="cart-vat" id="ledg-cart-vat"></div>
          <a href="contact.html" class="btn btn--primary btn--lg">Zamów / zapytaj o wycenę</a>
          <a href="products.html" class="btn btn--ghost">Kontynuuj zakupy</a>
          <div class="cart-trust">
            <span>${icon('check', 13)} 2 lata gwarancji</span>
            <span>${icon('truck', 13)} Wysyłka 24–48h</span>
            <span>${icon('shield', 13)} Bezpieczne płatności</span>
          </div>
        </div>
      </div>
    </div>`;
  }

  /* ── Mock search data ── */
  const SEARCH_DB = [
    { type: 'product', name: 'Panel LED EVSun 600×600, 40W, 4000K, EVLN + Blue Care', code: 'EVLN-PL-6060-40', price: '589 PLN', href: 'product.html' },
    { type: 'product', name: 'Panel LED EVSun 300×1200, 36W, 4000K, EVLN',           code: 'EVLN-PL-3012-36', price: '689 PLN', href: 'product.html' },
    { type: 'product', name: 'Panel LED EVSun 600×1200, 50W, 4000K, EVLN + Blue Care',code: 'EVLN-PL-6012-50', price: '869 PLN', href: 'product.html' },
    { type: 'product', name: 'Lampa podtynkowa EVSun 180mm, 15W, 4000K, IP44',        code: 'EVLN-DL-180-15',  price: '279 PLN', href: 'product.html' },
    { type: 'product', name: 'Hermetyczna EVSun 1200mm, 40W, 4000K, IP65',            code: 'EVLN-VL-1200-40', price: '429 PLN', href: 'product.html' },
    { type: 'product', name: 'HighBay EVSun 100W, 4000K, IP65, EVLN',                 code: 'EVLN-HBN-100',    price: '849 PLN', href: 'product.html' },
    { type: 'doc',     name: 'Raport TÜV SÜD Witness Test',                           code: 'PDF · 1.2 MB',    href: 'downloads.html' },
    { type: 'doc',     name: 'Atest higieniczny PZH',                                 code: 'PDF · 420 KB',    href: 'downloads.html' },
    { type: 'doc',     name: 'Raporty UGENE Lab (4 testy)',                            code: 'ZIP · 3.8 MB',    href: 'downloads.html' },
    { type: 'doc',     name: 'Katalog produktów 2026',                                code: 'PDF · 24 MB',     href: 'downloads.html' },
    { type: 'page',    name: 'Technologia EVLN — jak działa?',                        code: 'Strona wiedzy',   href: 'technology.html' },
    { type: 'page',    name: 'Badania i certyfikaty',                                 code: 'Strona wiedzy',   href: 'research.html' },
    { type: 'page',    name: 'Realizacje — szpitale, biura, gastronomia',             code: 'Strona',          href: 'case-studies.html' },
    { type: 'page',    name: 'Blue Care — ochrona rytmu dobowego',                   code: 'Strona wiedzy',   href: 'blue-care.html' },
    { type: 'page',    name: 'Strefa B2B — wycena i dokumentacja',                   code: 'Strona B2B',      href: 'b2b.html' },
  ];

  function runSearch(q) {
    if (!q || q.length < 2) return null;
    const lq = q.toLowerCase();
    return SEARCH_DB.filter(r =>
      r.name.toLowerCase().includes(lq) ||
      (r.code && r.code.toLowerCase().includes(lq))
    );
  }

  function renderResults(results, q) {
    if (!results) return '';
    if (!results.length) return `<div class="search-empty"><strong>Brak wyników dla „${q}"</strong>Spróbuj innej frazy lub przejrzyj <a href="products.html" style="color:var(--cyan-600)">wszystkie produkty</a>.</div>`;

    const products = results.filter(r => r.type === 'product');
    const docs     = results.filter(r => r.type === 'doc');
    const pages    = results.filter(r => r.type === 'page');

    const group = (title, items) => items.length ? `
      <div class="search-results__group">
        <div class="search-results__group-title">${title}</div>
        ${items.slice(0, 5).map(r => `
          <a href="${r.href}" class="search-result">
            <div class="search-result__thumb">${r.type === 'product' ? r.code.split('-').slice(-1)[0] : '📄'}</div>
            <div class="search-result__info">
              <div class="search-result__name">${r.name}</div>
              <div class="search-result__meta">${r.code}</div>
            </div>
            ${r.price ? `<div class="search-result__price">${r.price}</div>` : ''}
            <span class="search-result__arrow">→</span>
          </a>
        `).join('')}
      </div>` : '';

    return group('Produkty', products) + group('Dokumenty', docs) + group('Strony', pages);
  }

  /* ── Cart state ── */
  let cartItems = JSON.parse(localStorage.getItem('ledg_cart_items') || '[]');

  function saveCart() {
    localStorage.setItem('ledg_cart_items', JSON.stringify(cartItems));
    localStorage.setItem('ledg_cart', String(cartItems.reduce((s, i) => s + i.qty, 0)));
  }

  function renderCartItems() {
    const body   = document.getElementById('ledg-cart-items');
    const empty  = document.getElementById('ledg-cart-empty');
    const foot   = document.getElementById('ledg-cart-foot');
    const badge  = document.getElementById('ledg-cart-badge');
    const countEl= document.getElementById('cart-count');
    if (!body) return;

    const total = cartItems.reduce((s, i) => s + i.qty, 0);
    const price = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

    if (badge) badge.textContent = total;
    if (countEl) { countEl.textContent = total; countEl.style.display = total > 0 ? 'grid' : 'none'; }

    if (!cartItems.length) {
      empty.style.display = '';
      body.innerHTML = '';
      foot.style.display = 'none';
      return;
    }
    empty.style.display = 'none';
    foot.style.display = '';
    document.getElementById('ledg-cart-total').textContent = price.toFixed(2).replace('.', ',') + ' PLN';
    document.getElementById('ledg-cart-vat').textContent = 'w tym VAT 23%: ' + (price * 23/123).toFixed(2).replace('.', ',') + ' PLN · netto: ' + (price / 1.23).toFixed(2).replace('.', ',') + ' PLN';

    body.innerHTML = cartItems.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-item__thumb"></div>
        <div>
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__code">${item.code || ''}</div>
          <div class="cart-item__qty">
            <button onclick="LEDG.cartQty(${idx},-1)">−</button>
            <input type="number" value="${item.qty}" min="1" onchange="LEDG.cartSet(${idx},this.value)" />
            <button onclick="LEDG.cartQty(${idx},1)">+</button>
          </div>
        </div>
        <div class="cart-item__price-col">
          <div class="cart-item__price">${(item.price * item.qty).toFixed(2).replace('.', ',')} PLN</div>
          <button class="cart-item__remove" onclick="LEDG.cartRemove(${idx})">Usuń ✕</button>
        </div>
      </div>
    `).join('');
  }

  document.addEventListener("DOMContentLoaded", () => {
    // ── Inject overlays CSS ──
    if (!document.getElementById('ledg-overlays-css')) {
      const l = document.createElement('link');
      l.id = 'ledg-overlays-css';
      l.rel = 'stylesheet';
      l.href = 'assets/overlays.css';
      document.head.appendChild(l);
    }

    // ── Header + Footer ──
    const h = document.getElementById("ledg-header");
    if (h) h.innerHTML = renderHeader(h.dataset.active || "");
    const f = document.getElementById("ledg-footer");
    if (f) { f.classList.add("footer"); f.innerHTML = renderFooter(); }

    // ── Search overlay ──
    document.body.insertAdjacentHTML('beforeend', renderSearchOverlay());
    document.body.insertAdjacentHTML('beforeend', renderCartOverlay());

    const searchOverlay = document.getElementById('ledg-search-overlay');
    const searchInput   = document.getElementById('ledg-search-input');
    const searchResults = document.getElementById('ledg-search-results');
    const cartOverlay   = document.getElementById('ledg-cart-overlay');

    function openSearch() {
      searchOverlay.classList.add('is-open');
      setTimeout(() => searchInput && searchInput.focus(), 80);
      document.body.style.overflow = 'hidden';
    }
    function closeSearch() {
      searchOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    function openCart() {
      renderCartItems();
      cartOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function closeCart() {
      cartOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    window.LEDG_openCart = openCart;
    window.LEDG_openSearch = openSearch;

    // Wire header search bar click
    document.addEventListener('click', e => {
      const si = e.target.closest('.search input');
      if (si) { e.preventDefault(); openSearch(); }

      const cartBtn = e.target.closest('[title*="Cart"], [title*="Koszyk"], #cart-btn');
      if (cartBtn) { e.preventDefault(); openCart(); }
    });

    // Search input handler
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim();
        const results = runSearch(q);
        if (results !== null) {
          searchResults.innerHTML = renderResults(results, q);
          searchResults.classList.add('is-visible');
          document.getElementById('ledg-search-cats').style.display = 'none';
        } else {
          searchResults.classList.remove('is-visible');
          document.getElementById('ledg-search-cats').style.display = '';
        }
      });
    }

    // Quick category buttons
    document.querySelectorAll('.search-cat').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = btn.textContent.trim();
        if (searchInput) { searchInput.value = q; searchInput.dispatchEvent(new Event('input')); }
      });
    });

    // Close buttons + backdrop
    document.getElementById('ledg-search-close') &&
      document.getElementById('ledg-search-close').addEventListener('click', closeSearch);
    document.getElementById('ledg-search-backdrop') &&
      document.getElementById('ledg-search-backdrop').addEventListener('click', closeSearch);
    document.getElementById('ledg-cart-close') &&
      document.getElementById('ledg-cart-close').addEventListener('click', closeCart);
    document.getElementById('ledg-cart-backdrop') &&
      document.getElementById('ledg-cart-backdrop').addEventListener('click', closeCart);

    // Esc key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeSearch(); closeCart(); }
    });

    // Cart counter init
    renderCartItems();
  });

  // ── LEDG global util ──
  window.LEDG = {
    addToCart: function (label, price, code) {
      price = price || 589;
      code  = code  || '';
      const existing = cartItems.find(i => i.name === label);
      if (existing) { existing.qty++; }
      else { cartItems.push({ name: label, price: price, code: code, qty: 1 }); }
      saveCart();
      renderCartItems();
      window.LEDG.toast('Dodano do koszyka: ' + label);
      setTimeout(() => window.LEDG_openCart && window.LEDG_openCart(), 600);
    },
    cartQty: function (idx, delta) {
      cartItems[idx].qty = Math.max(1, cartItems[idx].qty + delta);
      saveCart(); renderCartItems();
    },
    cartSet: function (idx, val) {
      cartItems[idx].qty = Math.max(1, parseInt(val) || 1);
      saveCart(); renderCartItems();
    },
    cartRemove: function (idx) {
      cartItems.splice(idx, 1);
      saveCart(); renderCartItems();
    },
    toast: function (msg) {
      let t = document.getElementById("ledg-toast");
      if (!t) {
        t = document.createElement("div");
        t.id = "ledg-toast";
        t.style.cssText = "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#0F1F4C;color:#fff;padding:12px 20px;border-radius:10px;font-size:14px;font-weight:500;box-shadow:0 12px 40px rgba(15,31,76,0.25);z-index:9999;display:none;";
        document.body.appendChild(t);
      }
      t.textContent = msg;
      t.style.display = "block";
      clearTimeout(window._ledgToastT);
      window._ledgToastT = setTimeout(() => { t.style.display = "none"; }, 2200);
    }
  };
})();
