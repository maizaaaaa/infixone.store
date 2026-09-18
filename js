/* ============================================================
   infixone.pk — app.js
   Easy to edit: DATA, PACKAGES, ACCOUNTS
   ============================================================ */

/* ---------- GAMES CATALOGUE ----------
   Format: [Name, Category, Short label, From-price, Currency label, Image URL]
   Remove or add rows as needed.
*/
const DATA = [
  ["Fortnite",          "Battle Royale",    "V-Bucks, Accounts, Crew", 1200, "V-Bucks",           "https://cdn2.unrealengine.com/en-fn-og-42-10-c1sx-egs-launcher-blade-2560x1440-2560x1440-319ff81b274e.jpg"],
  ["PUBG Mobile",       "Battle Royale",    "UC, Accounts",            415,  "UC",                "https://www.independentarabia.com/sites/default/files/thumbnails/image/2020/06/07/208186-2056759375.jpg"],
  ["Call of Duty",      "Battle Royale",    "COD Points, Accounts",    3600, "CP",                "https://vigiato.net/wp-content/uploads/2023/08/modern-warfare-3-mw2-dlc.jpg"],
  ["Free Fire",         "Battle Royale",    "Diamonds, Accounts",      120,  "Diamonds",          "https://telegrafi.com/media-library/2022-02-garena-free-fire-jpg.jpg?coordinates=150%2C0%2C150%2C0&height=1500&id=57961205&width=2000"],
  ["Valorant",          "Tactical",         "VP, Accounts",            1200, "VP",                "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/8f0df8efd5b986039cd37a4d5f3bf31b815d0c54-3840x2160.jpg"],
  ["Genshin Impact",    "RPG & Open World", "Genesis Crystals, Accounts", 400, "Genesis Crystals", "https://www.teyvatavern.com/cdn/shop/collections/genshin-impact-official-merch-945659.jpg?v=1739288877"],
  ["GTA V Online",      "RPG & Open World", "Accounts only",           5000, "Account",           "https://p2.bahamut.com.tw/B/2KU/64/911515c004fa2a8d72009cee861fl845.JPG?v=1647400010929"],
  ["Minecraft",         "Sandbox",          "Premium Accounts",        1800, "Account",           "https://ethlan.fr/img/jeux/121.jpg"],
  ["Roblox",            "Sandbox",          "Robux, Accounts",         1400, "Robux",             "https://store-images.s-microsoft.com/image/apps.47252.13510798883386282.a1e5df65-8dd7-427c-9da9-506afa37b254.f4132380-deee-4518-8bbd-2a9b540046f3"],
  ["Discord Nitro",     "Media & Utility",  "Subscriptions",          450,  "Nitro",             "https://img.tamindir.com/2023/11/253503/discord-nitro.jpg"],
  ["Crunchyroll",       "Media & Utility",  "Premium",                600,  "Premium",           "https://i.blogs.es/2c137a/sin-titulo-2/840_560.jpeg"],
  ["Marvel Rivals",     "Media & Utility",  "Units, Accounts",        350,  "Units",             "https://www.amd.com/content/dam/amd/en/images/games/marvel-rivals/3032700-marvel-rivals-screen-blk.jpg"]
];

/* ---------- CURRENCY / SUBSCRIPTION PACKAGES ----------
   Key = exact game name from DATA
   Leave empty array [] if the game has NO currency (accounts only)
*/
const PACKAGES = {
  "Fortnite": [
    ["800 V-Bucks (Epic)", 2400],
    ["2,400 V-Bucks (Epic)", 5500],
    ["4,500 V-Bucks (Epic)", 8500],
    ["12,500 V-Bucks (Epic)", 18500],
    ["800 V-Bucks (Xbox)", 2199],
    ["2,400 V-Bucks (Xbox)", 4599],
    ["4,600 V-Bucks (Xbox)", 5999],
    ["12,500 V-Bucks (Xbox)", 15500],
    ["Fortnite Crew 1 Month (Epic)", 1600],
    ["Fortnite Crew 1 Month (Xbox)", 1200]
  ],
  "PUBG Mobile": [
    ["60 UC", 415],
    ["235 UC", 1633],
    ["660 UC", 3200],
    ["1,800 UC", 7700]
  ],
  "Call of Duty": [
    ["500 COD Points", 3600],
    ["2,400 COD Points", 5200],
    ["4,800 COD Points", 9800],
    ["9,600 COD Points", 18500]
  ],
  "Free Fire": [
    ["70 Diamonds", 120],
    ["140 Diamonds", 230],
    ["355 Diamonds", 525],
    ["713 Diamonds", 1050]
  ],
  "Valorant": [
    ["375 VP", 1200],
    ["475 VP", 1600],
    ["845 VP", 2400],
    ["1,000 VP", 2700]
  ],
  "Genshin Impact": [
    ["60 Genesis Crystals", 400],
    ["330 Genesis Crystals", 1400],
    ["1,090 Genesis Crystals", 3000],
    ["2,240 Genesis Crystals", 5200]
  ],
  "GTA V Online": [],   // accounts only
  "Minecraft": [],      // accounts only
  "Roblox": [
    ["400 Robux", 1400],
    ["800 Robux", 2600],
    ["1,700 Robux", 4200]
  ],
  "Discord Nitro": [
    ["1 Month Nitro", 450],
    ["3 Months Nitro", 1200],
    ["1 Year Nitro", 4200]
  ],
  "Crunchyroll": [
    ["1 Month Premium", 600],
    ["3 Months Premium", 1600],
    ["1 Year Premium", 5000]
  ],
  "Marvel Rivals": [
    ["500 Units", 350],
    ["1,000 Units", 650]
  ]
};

/* ---------- GAMING ACCOUNTS ----------
   Easy to add more: copy one block and change the fields.
   Key = exact game name from DATA
*/
const ACCOUNTS = {
  "Fortnite": [
    /* ===== DEMO ACCOUNT — copy this whole block to add another ===== */
    {
      id: "fn-001",
      title: "Fortnite OG Account #001",
      price: 25000,
      description: "Rare OG skins including Black Knight and Renegade Raider. Fully transferable.",
      features: ["120+ Skins", "Black Knight", "Renegade Raider", "Level 200+", "Many Pickaxes & Emotes"],
      platform: "Epic Games",
      region: "Global",
      image: "https://cdn2.unrealengine.com/en-fn-og-42-10-c1sx-egs-launcher-blade-2560x1440-2560x1440-319ff81b274e.jpg",
      available: true
    }
    /* ===== end demo — paste new accounts below ===== */
  ],

  "PUBG Mobile": [
    {
      id: "pubg-001",
      title: "PUBG Conqueror Account",
      price: 9000,
      description: "Conqueror rank with mythic outfits.",
      features: ["Conqueror Rank", "Mythic Outfits", "Rare Vehicles"],
      platform: "PUBG Mobile",
      region: "Global",
      image: "https://www.independentarabia.com/sites/default/files/thumbnails/image/2020/06/07/208186-2056759375.jpg",
      available: true
    }
  ],

  "Call of Duty": [
    {
      id: "cod-001",
      title: "COD Mobile Legendary Account",
      price: 14000,
      description: "Legendary ranked with mythic weapons.",
      features: ["Legendary Rank", "Mythic Weapons", "Operator Skins"],
      platform: "COD Mobile",
      region: "Global",
      image: "https://vigiato.net/wp-content/uploads/2023/08/modern-warfare-3-mw2-dlc.jpg",
      available: true
    }
  ],

  "Free Fire": [
    {
      id: "ff-001",
      title: "Free Fire Heroic Account",
      price: 5500,
      description: "High rank with popular bundles.",
      features: ["Heroic Rank", "Popular Bundles", "Elite Pass items"],
      platform: "Free Fire",
      region: "Global",
      image: "https://telegrafi.com/media-library/2022-02-garena-free-fire-jpg.jpg?coordinates=150%2C0%2C150%2C0&height=1500&id=57961205&width=2000",
      available: true
    }
  ],

  "Valorant": [
    {
      id: "val-001",
      title: "Valorant Immortal Account",
      price: 18000,
      description: "Immortal rank, all agents unlocked.",
      features: ["Immortal Rank", "All Agents", "20+ Premium Skins", "Asia Server"],
      platform: "Riot",
      region: "Asia",
      image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/8f0df8efd5b986039cd37a4d5f3bf31b815d0c54-3840x2160.jpg",
      available: true
    }
  ],

  "Genshin Impact": [
    {
      id: "gi-001",
      title: "Genshin AR55 Account",
      price: 35000,
      description: "High investment with multiple 5-star characters.",
      features: ["Adventure Rank 55", "Multiple 5-stars", "Spiral Abyss ready"],
      platform: "miHoYo",
      region: "Asia",
      image: "https://www.teyvatavern.com/cdn/shop/collections/genshin-impact-official-merch-945659.jpg?v=1739288877",
      available: true
    }
  ],

  "GTA V Online": [
    {
      id: "gta-001",
      title: "GTA Online Modded Account",
      price: 8000,
      description: "High money and unlocked content.",
      features: ["High Cash", "Unlocked Vehicles", "Properties"],
      platform: "Rockstar",
      region: "Global",
      image: "https://p2.bahamut.com.tw/B/2KU/64/911515c004fa2a8d72009cee861fl845.JPG?v=1647400010929",
      available: true
    }
  ],

  "Minecraft": [
    {
      id: "mc-001",
      title: "Minecraft Java + Bedrock",
      price: 2400,
      description: "Full premium access on both editions.",
      features: ["Java Edition", "Bedrock Edition", "Email changeable"],
      platform: "Microsoft",
      region: "Global",
      image: "https://ethlan.fr/img/jeux/121.jpg",
      available: true
    }
  ],

  "Roblox": [
    {
      id: "rbx-001",
      title: "Roblox Limiteds Account",
      price: 12000,
      description: "Account with limited items.",
      features: ["Multiple Limiteds", "High inventory value"],
      platform: "Roblox",
      region: "Global",
      image: "https://store-images.s-microsoft.com/image/apps.47252.13510798883386282.a1e5df65-8dd7-427c-9da9-506afa37b254.f4132380-deee-4518-8bbd-2a9b540046f3",
      available: true
    }
  ],

  "Discord Nitro": [],
  "Crunchyroll": [],
  "Marvel Rivals": [
    {
      id: "mr-001",
      title: "Marvel Rivals Early Account",
      price: 1500,
      description: "Early progress account.",
      features: ["Early unlocks", "Starter units"],
      platform: "NetEase",
      region: "Global",
      image: "https://www.amd.com/content/dam/amd/en/images/games/marvel-rivals/3032700-marvel-rivals-screen-blk.jpg",
      available: true
    }
  ]
};

/* ---------- HELPERS ---------- */
const fmt = n => "PKR " + Number(n).toLocaleString();
const esc = s => String(s ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

function hasCurrency(gameName) {
  const packs = PACKAGES[gameName];
  return Array.isArray(packs) && packs.length > 0;
}
function hasAccounts(gameName) {
  const list = ACCOUNTS[gameName];
  return Array.isArray(list) && list.length > 0;
}
function getGame(name) {
  return DATA.find(x => x[0].toLowerCase() === String(name || "").toLowerCase()) || DATA[0];
}

/* ---------- UI: MENU / GRID / HOME CAROUSEL ---------- */
function setupMenu() {
  const b = document.querySelector(".menu");
  const n = document.querySelector(".navlinks");
  if (b && n) b.onclick = () => n.classList.toggle("open");
}

function gameCard(p) {
  // Goes to selection page instead of checkout
  return `<a class="game-card" href="select.html?game=${encodeURIComponent(p[0])}">
    <div class="game-img">
      <span class="game-badge">${esc(p[1])}</span>
      <img src="${p[5]}" alt="${esc(p[0])}" loading="lazy">
    </div>
    <div class="game-info">
      <h3>${esc(p[0])}</h3>
      <p>${esc(p[2])}</p>
      <div class="game-meta">
        <span class="from">From <b>${fmt(p[3])}</b></span>
        <span class="mini-cart">⌑</span>
      </div>
    </div>
  </a>`;
}

function renderGrid(el, filter = "", query = "") {
  if (!el) return;
  let arr = DATA.filter(p =>
    (!filter || filter === "All Games" || p[1] === filter) &&
    (!query || p.join(" ").toLowerCase().includes(query.toLowerCase()))
  );
  if (el.dataset.limit) arr = arr.slice(0, +el.dataset.limit);
  el.innerHTML = arr.length
    ? arr.map(gameCard).join("")
    : `<div class="empty">No games match your search.</div>`;
}

function initCatalog() {
  const grid = document.querySelector("#gameGrid");
  if (!grid) return;
  const input = document.querySelector("#catalogSearch");
  if (input) {
    const q = new URLSearchParams(location.search).get("q");
    if (q) input.value = q;
  }
  let filter = new URLSearchParams(location.search).get("category") || "All Games";
  const filters = [...document.querySelectorAll(".filter")];
  filters.forEach(b => b.classList.toggle("active", b.dataset.filter === filter));
  const draw = () => renderGrid(grid, filter, input?.value || "");
  filters.forEach(b => b.onclick = () => {
    filter = b.dataset.filter;
    filters.forEach(x => x.classList.toggle("active", x === b));
    draw();
  });
  input?.addEventListener("input", draw);
  draw();
}

function initHome() {
  const track = document.querySelector("#carouselTrack");
  if (!track) return;
  const picks = ["Fortnite", "Valorant", "Genshin Impact", "GTA V Online", "PUBG Mobile", "Call of Duty", "Free Fire", "Roblox"];
  const slides = picks.map(n => DATA.find(p => p[0] === n)).filter(Boolean);
  track.innerHTML = slides.map((p, i) =>
    `<a class="slide" href="select.html?game=${encodeURIComponent(p[0])}" data-i="${i}">
      <img src="${p[5]}" alt="${esc(p[0])}">
    </a>`
  ).join("");
  const dots = document.querySelector("#dots");
  if (dots) dots.innerHTML = slides.map((_, i) => `<button aria-label="Show slide ${i + 1}"></button>`).join("");
  let center = 0;
  function paint() {
    document.querySelectorAll(".slide").forEach((s, i) => {
      let d = (i - center + slides.length) % slides.length;
      if (d > 4) d -= slides.length;
      const pos = { [-4]: "s0", [-3]: "s1", [-2]: "s2", [-1]: "s3", [0]: "s4", [1]: "s5", [2]: "s6", [3]: "s7" }[d] || "s0";
      s.className = "slide " + pos;
    });
    if (dots) [...dots.children].forEach((d, i) => d.classList.toggle("active", i === center));
  }
  function next() { center = (center + 1) % slides.length; paint(); }
  function prev() { center = (center - 1 + slides.length) % slides.length; paint(); }
  document.querySelector(".carousel-arrow.right")?.addEventListener("click", next);
  document.querySelector(".carousel-arrow.left")?.addEventListener("click", prev);
  if (dots) [...dots.children].forEach((d, i) => d.onclick = () => { center = i; paint(); });
  paint();
  let timer = setInterval(next, 3600);
  track.parentElement.onmouseenter = () => clearInterval(timer);
  track.parentElement.onmouseleave = () => { timer = setInterval(next, 3600); };
}

/* ---------- SELECT PAGE (currency vs account) ---------- */
function initSelect() {
  const root = document.querySelector("#selectRoot");
  if (!root) return;

  const gameName = new URLSearchParams(location.search).get("game");
  const p = getGame(gameName);
  const currencyOk = hasCurrency(p[0]);
  const accountsOk = hasAccounts(p[0]);

  document.title = p[0] + " — Choose product | infixone.pk";

  // Header info
  const art = document.querySelector("#selectArt");
  if (art) { art.src = p[5]; art.alt = p[0]; }
  const titleEl = document.querySelector("#selectTitle");
  if (titleEl) titleEl.textContent = p[0];
  const metaEl = document.querySelector("#selectMeta");
  if (metaEl) metaEl.textContent = p[2];

  const typeBox = document.querySelector("#typeChoice");
  const listBox = document.querySelector("#optionList");
  const proceedBtn = document.querySelector("#proceedSelect");

  let selectedType = null;   // "currency" | "account"
  let selectedPack = null;   // [name, price] or account object
  let selectedAccountId = null;

  // Build type buttons based on what the game offers
  let typeHtml = "";
  if (currencyOk) {
    typeHtml += `<button class="type-choice-btn" data-type="currency">
      <span class="type-icon">💎</span>
      <span class="type-label">In-Game Currency</span>
      <span class="type-sub">${esc(p[4])} packages</span>
    </button>`;
  }
  if (accountsOk) {
    typeHtml += `<button class="type-choice-btn" data-type="account">
      <span class="type-icon">🛡</span>
      <span class="type-label">Gaming Account</span>
      <span class="type-sub">${ACCOUNTS[p[0]].length} listing(s)</span>
    </button>`;
  }
  if (!currencyOk && !accountsOk) {
    typeHtml = `<p class="empty">No products available for this game yet.</p>`;
  }
  typeBox.innerHTML = typeHtml;

  function renderOptions() {
    listBox.innerHTML = "";
    selectedPack = null;
    selectedAccountId = null;
    if (proceedBtn) proceedBtn.disabled = true;

    if (selectedType === "currency") {
      const packs = PACKAGES[p[0]] || [];
      listBox.innerHTML = packs.map((x, i) => `
        <button class="package-btn" data-i="${i}">
          <span>${esc(x[0])}</span>
          <b>${fmt(x[1])}</b>
        </button>`).join("");
      listBox.querySelectorAll(".package-btn").forEach(b => {
        b.onclick = () => {
          listBox.querySelectorAll(".package-btn").forEach(x => x.classList.remove("active"));
          b.classList.add("active");
          selectedPack = packs[+b.dataset.i];
          if (proceedBtn) proceedBtn.disabled = false;
        };
      });
    }

    if (selectedType === "account") {
      const list = (ACCOUNTS[p[0]] || []).filter(a => a.available !== false);
      if (!list.length) {
        listBox.innerHTML = `<p class="empty">No accounts listed right now.</p>`;
        return;
      }
      listBox.innerHTML = list.map(a => `
        <button class="account-option" data-id="${esc(a.id)}">
          <div class="acc-thumb"><img src="${esc(a.image)}" alt="" onerror="this.style.display='none'"></div>
          <div class="acc-body">
            <strong>${esc(a.title)}</strong>
            <span class="acc-meta">${esc(a.platform || "")} · ${esc(a.region || "")}</span>
            <span class="acc-features">${(a.features || []).slice(0, 3).map(esc).join(" · ")}</span>
          </div>
          <div class="acc-price">${fmt(a.price)}</div>
        </button>`).join("");
      listBox.querySelectorAll(".account-option").forEach(b => {
        b.onclick = () => {
          listBox.querySelectorAll(".account-option").forEach(x => x.classList.remove("active"));
          b.classList.add("active");
          selectedAccountId = b.dataset.id;
          selectedPack = list.find(a => a.id === selectedAccountId);
          if (proceedBtn) proceedBtn.disabled = false;
        };
      });
    }
  }

  typeBox.querySelectorAll(".type-choice-btn").forEach(btn => {
    btn.onclick = () => {
      typeBox.querySelectorAll(".type-choice-btn").forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      selectedType = btn.dataset.type;
      renderOptions();
    };
  });

  // Auto-select if only one type available
  if (currencyOk && !accountsOk) {
    typeBox.querySelector('[data-type="currency"]')?.click();
  } else if (accountsOk && !currencyOk) {
    typeBox.querySelector('[data-type="account"]')?.click();
  }

  if (proceedBtn) {
    proceedBtn.onclick = () => {
      if (!selectedType || !selectedPack) return;
      if (selectedType === "currency") {
        // Dedicated currency checkout
        location.href = `checkout.html?game=${encodeURIComponent(p[0])}&type=currency&pack=${encodeURIComponent(selectedPack[0])}`;
      } else {
        // Dedicated account details page
        location.href = `account.html?game=${encodeURIComponent(p[0])}&id=${encodeURIComponent(selectedAccountId)}`;
      }
    };
  }
}

/* ---------- CHECKOUT PAGE ---------- */
function initCheckout() {
  const nameEl = document.querySelector("#summaryGame") || document.querySelector("#orderGame");
  if (!nameEl && !document.querySelector("#receipt")) return;

  const params = new URLSearchParams(location.search);
  const p = getGame(params.get("game"));
  const type = params.get("type") || "currency";
  let packName = params.get("pack");
  let accountId = params.get("id");

  let packLabel, packPrice, typeLabel;

  if (type === "account") {
    const acc = (ACCOUNTS[p[0]] || []).find(a => a.id === accountId) || (ACCOUNTS[p[0]] || [])[0];
    if (!acc) {
      // fallback
      packLabel = "Account";
      packPrice = p[3];
    } else {
      packLabel = acc.title;
      packPrice = acc.price;
      accountId = acc.id;
    }
    typeLabel = "Gaming Account";
  } else {
    const packs = PACKAGES[p[0]] || [];
    let found = packs.find(x => x[0] === packName) || packs[0];
    if (!found) found = ["Package", p[3]];
    packLabel = found[0];
    packPrice = found[1];
    typeLabel = "In-Game Currency";
  }

  // Fill summary fields if present (checkout.html structure)
  const set = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  set("#summaryGame", p[0]);
  set("#orderGame", p[0]);
  set("#summaryMeta", p[2]);
  set("#orderItems", p[2]);

  const art = document.querySelector("#orderArt") || document.querySelector("#summaryArt");
  if (art) { art.src = p[5]; art.onerror = () => art.style.display = "none"; }

  // Build / refresh receipt
  const receiptEl = document.querySelector("#receipt");
  if (receiptEl) {
    const id = "INFX-" + Math.floor(100000 + Math.random() * 900000);
    receiptEl.innerHTML = `
      <div class="receipt-title">ORDER SUMMARY</div>
      <div class="receipt-row"><span>Order ID</span><b>${id}</b></div>
      <div class="receipt-row"><span>Product</span><b>${esc(p[0])}</b></div>
      <div class="receipt-row"><span>Package</span><b>${esc(packLabel)}</b></div>
      <div class="receipt-row"><span>Type</span><b>${esc(typeLabel)}</b></div>
      <div class="receipt-row receipt-total"><span>Total</span><b>${fmt(packPrice)}</b></div>
      <div class="payment-box">
        <h3>SadaPay</h3>
        <p>Pay the exact amount, then send proof on WhatsApp.</p>
        <div class="payment-number">03091847477</div>
        <div class="payment-name">Kashif Ahmed Khan</div>
        <p style="margin-top:10px;font-size:12px;color:var(--muted,#999)">Binance ID: 1123283516 · @Muhammad_Hashimkhan</p>
      </div>
      <button class="wa" id="sendWA">SEND ORDER ON WHATSAPP</button>
      <button class="download" id="downloadReceipt">DOWNLOAD RECEIPT</button>`;

    document.querySelector("#sendWA")?.addEventListener("click", () => {
      const msg = `Hello infixone.pk, I want to order%0A%0AGame: ${encodeURIComponent(p[0])}%0APackage: ${encodeURIComponent(packLabel)}%0AType: ${encodeURIComponent(typeLabel)}%0ATotal: ${encodeURIComponent(fmt(packPrice))}%0AOrder ID: ${id}`;
      window.open(`https://wa.me/923350453387?text=${msg}`, "_blank");
    });
    document.querySelector("#downloadReceipt")?.addEventListener("click", () => {
      const txt = `infixone.pk ORDER\n\nOrder ID: ${id}\nGame: ${p[0]}\nPackage: ${packLabel}\nType: ${typeLabel}\nTotal: ${fmt(packPrice)}\n\nSadaPay: 03091847477\nAccount Name: Kashif Ahmed Khan\nBinance ID: 1123283516`;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([txt], { type: "text/plain" }));
      a.download = "infixone-order.txt";
      a.click();
    });
  }

  // If checkout still has old package list UI, hide type switcher (selection already done)
  document.querySelectorAll(".type-btn, .type-grid").forEach(el => el.style.display = "none");
  const list = document.querySelector("#packageList");
  if (list) {
    list.innerHTML = `<div class="package-btn active" style="pointer-events:none"><span>${esc(packLabel)}</span><b>${fmt(packPrice)}</b></div>`;
  }
}

/* ---------- BOOT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  initHome();
  initCatalog();
  initSelect();
  initCheckout();

  const hs = document.querySelector("#homeSearch");
  if (hs) {
    hs.addEventListener("keydown", e => {
      if (e.key === "Enter" && hs.value.trim()) {
        location.href = "shop.html?q=" + encodeURIComponent(hs.value.trim());
      }
    });
  }
});
