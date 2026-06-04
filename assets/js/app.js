/* ============================================================
   PUMPKIN PORTFOLIO — interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- piece data ---------- */
  const IMG = "assets/images/";
  const HERO = IMG + "hero/";
  const pieces = [
    {
      id: "prime",
      client: "Steakhouse · River North",
      title: "Prime & Provisions",
      hero: HERO + "prime.jpg",
      desc:
        "A downtown steakhouse wordmark in full Trajan capitals, anchored by the signature ampersand medallion. Carved on a pale foam pumpkin so the letters read crisp by day and the ampersand burns gold against the dining room at night.",
      tags: ["Trajan caps", "Ampersand medallion", "Wordmark"],
      stages: [
        { l: "In the dining room", img: "hero/prime.jpg" },
        { l: "At the host stand", img: "prime-story-lit.jpg" },
      ],
      note:
        "Set just inside the door at Prime & Provisions — the carved ampersand medallion glowing over the host stand.",
    },
    {
      id: "cf104",
      client: "Monogram crest",
      title: "CF · 104",
      hero: HERO + "cf104.jpg",
      desc:
        "Interlocking C and F inside a crest ring with a dotted ·104· at the base. The thin ring and tight serifs are the hard part — leave too much and it won't read, cut too much and it caves.",
      tags: ["Monogram", "Crest ring", "Fine serifs"],
      stages: [
        { l: "Stencil", img: "cf104-stencil.jpg" },
        { l: "Carved", img: "cf104-carved.jpg" },
        { l: "Lit on the table", img: "hero/cf104.jpg" },
      ],
      note:
        "Stencil to finished glow: the printed crest pinned to the rind, the daylight carve, and the pumpkin lit beside a lantern in the dining room.",
    },
    {
      id: "tavernwelcome",
      pair: true,
      client: "Tavern · Gold Coast",
      title: "Tavern on Rush × Welcome Back",
      wide: HERO + "tavern-welcome-wide.jpg",
      desc:
        "A two-pumpkin display for the Gold Coast tavern: an oval brass-style nameplate beside a Chicago-flag tribute — four six-pointed stars cut clean through so they reflect across the marble.",
      tags: ["Two-pumpkin display", "Oval nameplate", "Chicago flag"],
      stages: [
        { l: "The display", img: "hero/tavern-welcome-wide.jpg" },
        { l: "Tavern on Rush", img: "hero/tavern.jpg" },
        { l: "Welcome Back · Chicago", img: "hero/welcome.jpg" },
      ],
      note:
        "Shown as a pair on the bar — the brass-plate nameplate and the Chicago-flag pumpkin side by side.",
    },
    {
      id: "otoole",
      client: "Pub · Streeterville",
      title: "Timothy O'Toole's Pub",
      hero: HERO + "otoole.jpg",
      desc:
        "A classic pub roundel — the TO monogram ringed by 'Timothy O'Toole's Pub · Chicago' and a row of stars. Carved twice in different years: once on a real pumpkin, and again on a Hide & Eeek foam blank that glows beside a skeleton without ever caving in.",
      tags: ["Roundel", "Micro-type", "Real + foam"],
      stages: [
        { l: "Stencil", img: "otoole-stencil.jpg" },
        { l: "Carved", img: "otoole-carved.jpg" },
        { l: "Lit behind the bar", img: "hero/otoole.jpg" },
        { l: "Foam version, another year", img: "hero/otoole-foam.jpg" },
      ],
      note:
        "Two takes on the same pub roundel — the original carved on a real pumpkin, and a later foam version (lit beside a skeleton) that holds its edge for the whole season.",
    },
    {
      id: "randolph",
      client: "Apartments · The Loop",
      title: "Randolph Tower City Apartments",
      hero: HERO + "randolph.jpg",
      desc:
        "The building's elegant 'R' lifted straight from the Randolph Tower wordmark — a single tall serif with a long swept tail, carved in relief so the letter reads pale and confident against the orange even before the light goes in.",
      tags: ["Single initial", "Relief carve", "Wordmark"],
      stages: [{ l: "Carved in relief", img: "hero/randolph.jpg" }],
      note:
        "The Randolph Tower City Apartments monogram — one letter, all about the tail; the swept terminal is what makes the R read as theirs.",
    },
    {
      id: "venteux",
      client: "Brasserie · Loop",
      title: "Venteux",
      hero: HERO + "venteux.jpg",
      desc:
        "A French brasserie wordmark over 'Chicago' with the script tagline 'A Breath of French Air'. Mixed weights mean each line is shaved to a different depth, so the name and tagline glow in layers above the raw bar.",
      tags: ["Wordmark", "Script tagline", "Layered depth"],
      stages: [
        { l: "Stencil", img: "venteux-stencil.jpg" },
        { l: "Carved", img: "venteux-carved.jpg" },
        { l: "Lit at the raw bar", img: "hero/venteux.jpg" },
      ],
      note:
        "Photographed above the Fruit de Mer display — the carved name echoing the menu chalked on the glass behind it.",
    },
    {
      id: "veuve",
      client: "Champagne · Maison",
      title: "Veuve Clicquot",
      hero: HERO + "veuve.jpg",
      desc:
        "The maison's full signature on a pale pumpkin — the VCP anchor crest, the 'Veuve Clicquot' script, and 'Reims France' in spaced caps below. Carved as shallow relief so the gold letters catch the light like an embossed label, lit or not.",
      tags: ["Script", "Crest", "Relief carve"],
      stages: [{ l: "The carved label", img: "hero/veuve.jpg" }],
      note:
        "Veuve Clicquot's label rebuilt in relief — crest, script and 'Reims France' caps — so the whole thing reads like a pressed champagne label.",
    },
    {
      id: "lesnomades",
      client: "French restaurant · Streeterville",
      title: "Les Nomades",
      hero: HERO + "lesnomades.jpg",
      desc:
        "A former high-end French room in Streeterville. The name is hand-lettered freehand across a deep-ribbed pumpkin and lit amber-red on the carving bench — then carried out to sit in a stone garden planter at the restaurant's entrance.",
      tags: ["Hand-lettered", "Freehand", "On location"],
      stages: [
        { l: "Lit on the workbench", img: "hero/lesnomades.jpg" },
        { l: "Planted at the door", img: "hero/lesnomades-field.jpg" },
      ],
      note:
        "Les Nomades — the now-closed Streeterville French room; shown glowing on the carving bench, then planted in a stone pot at the restaurant's garden entrance.",
    },
    {
      id: "claseazul",
      client: "Tequila · Maison",
      title: "Clase Azul",
      hero: HERO + "clase-azul.jpg",
      desc:
        "The tequila house's hand-painted blossom mark and CLASE AZUL wordmark — carved into a pumpkin first painted that unmistakable cobalt blue. A rare piece where the blank gets a coat of paint before the Dremel ever touches it.",
      tags: ["Painted blue", "Blossom mark", "Wordmark"],
      stages: [{ l: "Painted & carved", img: "hero/clase-azul.jpg" }],
      note:
        "Painted Clase Azul blue first, then carved — the cobalt blossom and wordmark that make the bottle, and now the pumpkin, instantly recognizable.",
    },
    {
      id: "mjordan",
      client: "Steakhouse · InterContinental",
      title: "Michael Jordan's Steakhouse",
      hero: HERO + "mjordan.jpg",
      desc:
        "The athlete-turned-restaurant signature, cut to keep that hand-signed energy intact — every loop and tail of the autograph carved as one continuous line so it reads instantly, even before it's lit.",
      tags: ["Signature mark", "Continuous line", "Wordmark"],
      stages: [{ l: "Lit", img: "hero/mjordan.jpg" }],
      note:
        "The Michael Jordan's Steakhouse signature — the hardest kind of logo to carve, because everyone already knows exactly what it should look like.",
    },
    {
      id: "kinmont",
      pair: true,
      badge: "Restaurant set · 3 pumpkins",
      client: "Seafood · West Loop",
      title: "Kinmont · Field & Stream · Werewolves of London",
      wide: HERO + "kinmont-wide.jpg",
      desc:
        "A full set for the seafood restaurant: the clean KINMONT wordmark, a Field & Stream tribute — the magazine that ran through the room's hunting-and-fishing theme, carved as a backlit angler silhouette — and a Werewolves of London pumpkin for the bar's Halloween cocktail, a pig's-blood pour glowing red from the lid.",
      tags: ["Restaurant set", "Wordmark", "Cocktail tie-in"],
      stages: [
        { l: "The display", img: "hero/kinmont-wide.jpg" },
        { l: "Kinmont · Field & Stream", img: "hero/kinmont.jpg" },
        { l: "Werewolves of London", img: "hero/werewolves.jpg" },
      ],
      note:
        "Three carves for one room — the Kinmont wordmark, the Field & Stream angler nodding to the restaurant's theme, and a Werewolves of London pumpkin glowing pig's-blood red for the bar's Halloween cocktail.",
    },
    {
      id: "zombies",
      client: "SNES classic",
      title: "Zombies Ate My Neighbors",
      hero: HERO + "zombies.jpg",
      desc:
        "A just-for-fun carve of the cult 16-bit title screen — the dripping horror-movie lettering rebuilt by hand and lit so it glows like a B-movie marquee. Proof the same tools that cut a brasserie crest can cut pure nostalgia.",
      tags: ["Video game", "Display lettering", "Just for fun"],
      stages: [{ l: "Lit", img: "hero/zombies.jpg" }],
      note:
        "A personal favorite — the Zombies Ate My Neighbors logo, carved freehand from the SNES title screen.",
    },
    {
      id: "emotiona",
      client: "Musical artist",
      title: "Emotiona",
      hero: HERO + "emotiona.jpg",
      desc:
        "A solo musical artist's wordmark in clean spaced capitals, carved on a ghost-white pumpkin so the letters glow soft orange through the pale skin — a cooler, quieter take on the usual amber jack-o'-lantern.",
      tags: ["Artist mark", "Spaced caps", "White pumpkin"],
      stages: [{ l: "Lit", img: "hero/emotiona.jpg" }],
      note:
        "For the solo artist Emotiona — carved on a white pumpkin so the lit letters read like a soft neon sign rather than a jack-o'-lantern.",
    },
    {
      id: "lenington",
      client: "Personal · Indiana state park",
      title: "Lenington",
      hero: HERO + "lenington.jpg",
      desc:
        "A family name carved for my parents' cabin in an Indiana state park — set out on the deck rail beside a lantern and an autumn wreath. No client brief, no logo sheet, just the one piece that gets to come home.",
      tags: ["Family name", "Personal", "On location"],
      stages: [{ l: "On the cabin deck", img: "hero/lenington.jpg" }],
      note:
        "Carved for my parents' cabin in an Indiana state park — glowing on the deck rail between a lantern and a fall wreath.",
    },
    {
      id: "applebees",
      client: "Six-store set · For Mom",
      title: "Applebee's ×6",
      hero: HERO + "applebees.jpg",
      desc:
        "A batch of six matching Applebee's pumpkins — one for each store my Mom oversaw at the time. The apple-and-wordmark relief-carved into all six, stacked in a pyramid by the office window by day and glowing on a stand by night.",
      tags: ["Batch of six", "Relief carve", "For Mom"],
      stages: [{ l: "The set of six", img: "hero/applebees.jpg" }],
      note:
        "Six identical Applebee's carves — one per store my Mom managed — shown stacked by the window and again lit at night.",
    },
    {
      id: "indyscalp",
      client: "Scalp micropigmentation · Indianapolis",
      title: "Indy Scalp Design",
      hero: HERO + "indyscalp.jpg",
      desc:
        "My brother's scalp-micropigmentation studio, carved on a white pumpkin to match the brand. The hardest part is the ring: hundreds of tiny stippled dots echoing the SMP technique itself — each one poked by hand so it reads as a halftone halo around the wordmark.",
      tags: ["Stippled ring", "White pumpkin", "Family"],
      stages: [{ l: "Lit", img: "hero/indyscalp.jpg" }],
      note:
        "For my brother's business, Indy Scalp Design — the dotted ring is carved as hundreds of individual points, a nod to the scalp-micropigmentation work itself.",
    },
  ];

  /* terrace16 lives in the full-bleed feature band, but keep its
     lightbox data here so the band is clickable too. */
  const featurePiece = {
    id: "terrace16",
    client: "Rooftop lounge · Wrigley Building",
    title: "Terrace 16",
    desc:
      "The rooftop lounge's wordmark above a hand-drawn Chicago skyline — traced from the gold-leaf mural that hangs in the Terrace 16 lobby, then cut window by window so the carving mirrors both the painting and the real towers behind it.",
    stages: [
      { l: "On the terrace", img: "hero/terrace16.jpg" },
      { l: "The wider view", img: "hero/terrace16-wide.jpg" },
      { l: "The mural it's based on", img: "hero/terrace16-mural.jpg" },
    ],
    note:
      "The carve is based on the gold-leaf skyline mural in the Terrace 16 lobby — Tribune Tower, the Wrigley clock tower and Marina City — then photographed on the rooftop against the real thing.",
  };
  const lookup = {};
  pieces.concat(featurePiece).forEach((p) => (lookup[p.id] = p));

  /* ---------- render gallery ---------- */
  const piecesEl = document.getElementById("pieces");
  const total = String(pieces.length).padStart(2, "0");
  let singleCount = 0;
  pieces.forEach((p, i) => {
    const idx = `${String(i + 1).padStart(2, "0")} / ${total}`;
    const tags = p.tags
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");
    const el = document.createElement("article");

    if (p.pair) {
      el.className = "piece-pair reveal";
      el.innerHTML = `
      <div class="pair-media" data-id="${p.id}">
        <img src="${p.wide}" alt="${p.title}, lit display" loading="lazy" />
        <div class="ember-ring"></div>
        <span class="pair-badge">${p.badge || "Two-pumpkin display"}</span>
        <button class="expand" aria-label="Open ${p.title}">⤢</button>
      </div>
      <div class="pair-info">
        <span class="idx">${idx}</span>
        <span class="client">${p.client}</span>
        <h3>${p.title}</h3>
        <p class="desc">${p.desc}</p>
        <div class="piece-tags">${tags}</div>
        <a class="piece-link" data-id="${p.id}" href="#">See it lit →</a>
      </div>`;
    } else {
      el.className = "piece reveal" + (singleCount % 2 ? " flip" : "");
      singleCount++;
      el.innerHTML = `
      <div class="piece-media" data-id="${p.id}">
        <img src="${p.hero}" alt="${p.title} carved pumpkin, lit" loading="lazy" />
        <div class="ember-ring"></div>
        <span class="lightcue">Hover to light</span>
        <button class="expand" aria-label="Open ${p.title}">⤢</button>
      </div>
      <div class="piece-info">
        <span class="idx">${idx}</span>
        <span class="client">${p.client}</span>
        <h3>${p.title}</h3>
        <p class="desc">${p.desc}</p>
        <div class="piece-tags">${tags}</div>
        <a class="piece-link" data-id="${p.id}" href="#">See it lit →</a>
      </div>`;
    }
    piecesEl.appendChild(el);
  });

  /* ---------- nav scrolled ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- hero ignite + torch ---------- */
  const hero = document.querySelector(".hero");
  const igniteBtn = document.getElementById("ignite");
  const torch = document.getElementById("torch");

  function ignite() {
    hero.classList.remove("lit");
    // force reflow so re-igniting replays
    void hero.offsetWidth;
    hero.classList.add("lit");
  }
  // auto-ignite shortly after load
  setTimeout(ignite, 600);
  if (igniteBtn) igniteBtn.addEventListener("click", ignite);

  if (torch) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      torch.style.setProperty("--mx", x + "%");
      torch.style.setProperty("--my", y + "%");
    });
  }

  /* ensure the hero video actually plays (some browsers need a nudge) */
  const heroVid = document.getElementById("heroVid");
  if (heroVid) {
    const tryPlay = () => heroVid.play().catch(() => {});
    tryPlay();
    heroVid.addEventListener("canplay", tryPlay, { once: true });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) tryPlay();
    });
  }

  /* ---------- day / night lamp (removed) ---------- */

  /* ---------- before / after slider ---------- */
  const ba = document.getElementById("ba");
  if (ba) {
    const after = ba.querySelector(".ba-after");
    const handle = document.getElementById("baHandle");
    let dragging = false;

    function setPos(clientX) {
      const r = ba.getBoundingClientRect();
      let pct = ((clientX - r.left) / r.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      handle.style.left = pct + "%";
    }
    const start = (e) => {
      dragging = true;
      setPos(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const move = (e) => {
      if (!dragging) return;
      setPos(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const end = () => (dragging = false);

    ba.addEventListener("mousedown", start);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    ba.addEventListener("touchstart", start, { passive: true });
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", end);
  }

  /* ---------- lightbox ---------- */
  const lb = document.getElementById("lightbox");
  const lbClient = document.getElementById("lbClient");
  const lbTitle = document.getElementById("lbTitle");
  const lbStages = document.getElementById("lbStages");
  const lbNote = document.getElementById("lbNote");
  const lbClose = document.getElementById("lbClose");

  function openLightbox(id) {
    const p = lookup[id];
    if (!p) return;
    lbClient.textContent = p.client;
    lbTitle.textContent = p.title;
    lbNote.textContent = p.note;
    lbStages.style.gridTemplateColumns = `repeat(${p.stages.length}, 1fr)`;
    lbStages.innerHTML = p.stages
      .map(
        (s) => `
      <div class="lb-stage">
        <img src="${IMG + s.img}" alt="${p.title} — ${s.l}" />
        <div class="cap"><b>${s.l}</b></div>
      </div>`
      )
      .join("");
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const media = e.target.closest(".piece-media, .pair-media");
    const link = e.target.closest(".piece-link");
    const feat = e.target.closest("[data-lightbox]");
    if (media) openLightbox(media.getAttribute("data-id"));
    if (link) {
      e.preventDefault();
      openLightbox(link.getAttribute("data-id"));
    }
    if (feat && !media && !link) openLightbox(feat.getAttribute("data-lightbox"));
  });
  lbClose.addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /* ---------- scroll reveals ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
