/* =====================================================================
COACHING — Erin Pompa
Two tabs: Public Speaking Coaching | Digital Downloads
===================================================================== */

const CAL_URL = "https://calendar.app.google/4FLTt7E3PFsGrX6h8";
const STAN_KIT = "https://stan.store/ErinPompa/p/get-booked-the-speaker-pipeline-kit";
const HOME = "index.html";
const openUrl = (url) => () => window.open(url, "_blank", "noopener");

/* ---------- NAV ---------- */
const COACHING_LINKS = [
{ label: "About", href: "about.html" },
{ label: "Speaking", href: "speaking.html" },
{ label: "Coaching", href: "coaching.html" },
{ label: "TruthSpeaks 365", href: "https://truthspeaks365.com" },
{ label: "Contact", href: "contact.html" },
];
const CoachingNav = () => {
const [scrolled, setScrolled] = React.useState(false);
const [menuOpen, setMenuOpen] = React.useState(false);
React.useEffect(() => {
const h = () => setScrolled(window.scrollY > 24);
window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
}, []);
React.useEffect(() => {
document.body.style.overflow = menuOpen ? "hidden" : "";
return () => { document.body.style.overflow = ""; };
}, [menuOpen]);
return (
<>
<header style={{
position: "fixed", top: 0, left: 0, right: 0, zIndex: 80,
display: "flex", alignItems: "center", justifyContent: "space-between",
padding: scrolled ? "12px 40px" : "20px 40px",
background: (scrolled || menuOpen) ? "rgba(15,13,12,0.95)" : "transparent",
backdropFilter: (scrolled || menuOpen) ? "blur(12px)" : "none",
borderBottom: (scrolled || menuOpen) ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
transition: "all .25s cubic-bezier(.2,.8,.2,1)"
}}>
<a href={HOME} style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
<div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
letterSpacing: "-0.03em", fontSize: 20, color: "var(--white)", lineHeight: 1 }}>
Erin <span style={{ color: "var(--pink)" }}>Pompa</span>
</div>
</a>
<nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30 }}>
{COACHING_LINKS.map(l => (
<a key={l.label} href={l.href}
target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
aria-current={l.label === "Coaching" ? "page" : undefined}
style={{
fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em",
color: l.label === "Coaching" ? "var(--lime)" : "rgba(255,255,255,0.82)",
cursor: "pointer", whiteSpace: "nowrap"
}}>{l.label}</a>
))}
<Button variant="pink" shape="cutout" size="sm" onClick={openUrl(CAL_URL)}>Book Erin</Button>
</nav>
<button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
<Icon name={menuOpen ? "x" : "menu"} size={26} color="var(--white)" />
</button>
</header>
{menuOpen && (
<div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
{COACHING_LINKS.map(l => (
<a key={l.label} href={l.href}
target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
aria-current={l.label === "Coaching" ? "page" : undefined}
className={"mobile-menu-link" + (l.label === "Coaching" ? " active" : "")}
onClick={() => setMenuOpen(false)}
>{l.label}</a>
))}
<div style={{ marginTop: 36, paddingTop: 8 }}>
<Button variant="pink" shape="cutout" size="lg"
onClick={() => { window.open(CAL_URL, "_blank", "noopener"); setMenuOpen(false); }}>
Book Erin
</Button>
</div>
</div>
)}
</>
);
};

/* ---------- HERO ---------- */
const CoachingHero = () => (
<section style={{ background: "var(--ink)", color: "var(--white)", position: "relative",
minHeight: "52vh", display: "flex", alignItems: "center", paddingTop: 140, paddingBottom: 80, overflow: "hidden" }}>
<div className="spotlight" style={{ opacity: 0.6 }}></div>
<div className="wrap" style={{ position: "relative", zIndex: 3, width: "100%" }}>
<Reveal><Kicker color="rgba(255,255,255,0.78)" slash="var(--lime)" style={{ marginBottom: 22 }}>Work with Erin</Kicker></Reveal>
<Reveal delay={1}>
<h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
letterSpacing: "-0.04em", fontSize: "clamp(56px, 9vw, 128px)", lineHeight: 0.88, margin: "0 0 24px" }}>
Level up<br /><HL color="var(--lime)">your voice.</HL>
</h1>
</Reveal>
<Reveal delay={2}>
<p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 500,
lineHeight: 1.5, color: "var(--fg-on-dark1)", maxWidth: 580, margin: 0 }}>
Coaching and resources for speakers, educators, and professionals ready to own the room.
</p>
</Reveal>
</div>
</section>
);

/* ---------- TABS ---------- */
const TABS = ["Public Speaking Coaching", "Digital Downloads"];

const CoachingTabs = () => {
const [active, setActive] = React.useState(0);
return (
<section className="section" style={{ background: "var(--white)", color: "var(--ink)" }}>
<div className="wrap">
{/* Tab bar */}
<div style={{ display: "flex", gap: 0, borderBottom: "2.5px solid var(--ink)", marginBottom: 56 }}>
{TABS.map((t, i) => (
<button key={t} onClick={() => setActive(i)} style={{
fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(14px, 1.6vw, 17px)",
letterSpacing: "0.02em", padding: "14px 28px", border: "none", cursor: "pointer",
background: active === i ? "var(--ink)" : "transparent",
color: active === i ? "var(--white)" : "var(--ink-500)",
borderTopLeftRadius: 8, borderTopRightRadius: 8,
transition: "all .18s ease",
borderBottom: active === i ? "2.5px solid var(--ink)" : "2.5px solid transparent",
marginBottom: -2.5
}}>{t}</button>
))}
</div>

{/* Tab 1: Coaching */}
{active === 0 && (
<div>
  {/* HEADLINE */}
  <Reveal>
    <Kicker color="var(--ink)" style={{ marginBottom: 16 }}>Group coaching · Sept – Dec 2026</Kicker>
  </Reveal>
  <Reveal delay={1}>
    <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
      letterSpacing: "-0.03em", fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 0.92, margin: "0 0 28px" }}>
      Your story deserves<br /><HL color="var(--lime)">a stage.</HL>
    </h2>
  </Reveal>
  <Reveal delay={2}>
    <p style={{ fontSize: 20, lineHeight: 1.65, color: "var(--ink-700)", fontWeight: 500, maxWidth: 680, margin: "0 0 16px" }}>
      The Keynote Collective is a 4-month group coaching program for women who are ready to write their keynote, nail their delivery, and build a speaking business that creates real impact.
    </p>
    <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-600)", fontWeight: 500, maxWidth: 680, margin: "0 0 52px" }}>
      You leave with a full, performance-ready keynote — and the tools and systems to build a speaking business around it.
    </p>
  </Reveal>

  {/* THIS IS FOR YOU IF */}
  <Reveal delay={2}>
    <div style={{ background: "var(--ink)", borderRadius: "var(--radius-lg)", padding: "36px 40px",
      border: "2.5px solid var(--ink)", boxShadow: "8px 8px 0 var(--lime)", marginBottom: 60 }}>
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.16em",
        textTransform: "uppercase", color: "var(--lime)", marginBottom: 22 }}>This is for you if...</div>
      {[
        "You have a story that changed you — and you know it can change other people too",
        "You're done watching other women on stages that should have your name on them",
        "You want to build a speaking business, not just give a speech",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < 2 ? 18 : 0 }}>
          <Icon name="arrow-right" size={20} color="var(--pink)" style={{ flex: "none", marginTop: 3 }} />
          <span style={{ fontSize: 17, color: "var(--white)", fontWeight: 500, lineHeight: 1.55 }}>{item}</span>
        </div>
      ))}
    </div>
  </Reveal>

  {/* WHAT YOU WALK AWAY WITH */}
  <Reveal delay={2}>
    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
      letterSpacing: "-0.02em", fontSize: "clamp(24px, 3.2vw, 38px)", lineHeight: 1, margin: "0 0 28px" }}>
      What you walk away with
    </h3>
  </Reveal>
  <Reveal delay={2}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 64 }}>
      {[
        { icon: "mic-2", title: "A performance-ready keynote", body: "Written, refined, and rehearsed. You deliver it in front of the group at the end of the program." },
        { icon: "briefcase", title: "A speaker business foundation", body: "The systems, templates, and strategy to get booked, get paid, and run your business like a pro." },
        { icon: "users", title: "A community behind you", body: "A small cohort of driven women who get it — and will cheer you on long after the program ends." },
      ].map((card, i) => (
        <div key={i} style={{ background: "var(--lime)", color: "var(--ink)", borderRadius: "var(--radius-lg)",
          padding: "28px 24px", border: "2px solid var(--ink)", boxShadow: "5px 5px 0 var(--ink)" }}>
          <Icon name={card.icon} size={28} color="var(--ink)" style={{ marginBottom: 14 }} />
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{card.title}</div>
          <div style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(15,13,12,0.72)" }}>{card.body}</div>
        </div>
      ))}
    </div>
  </Reveal>

  {/* 4-MONTH BREAKDOWN */}
  <Reveal delay={2}>
    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
      letterSpacing: "-0.02em", fontSize: "clamp(24px, 3.2vw, 38px)", lineHeight: 1, margin: "0 0 10px" }}>
      The 4-month breakdown
    </h3>
    <p style={{ fontSize: 17, color: "var(--ink-600)", fontWeight: 500, margin: "0 0 30px" }}>
      8 live group sessions, 2 per month — September through December.
    </p>
  </Reveal>
  <Reveal delay={2}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 64 }}>
      {[
        { month: "Month 1", label: "Know Your Message", sessions: [
          "Audience, goals & signature framework",
          "Story development & story framework",
        ]},
        { month: "Month 2", label: "Build Your Keynote", sessions: [
          "Vignette stories & keynote structure",
          "Writing the keynote & audience engagement",
        ]},
        { month: "Month 3", label: "Write & Refine", sessions: [
          "Keynote editing & refinement",
          "Performance coaching — intro & section 1",
        ]},
        { month: "Month 4", label: "Own the Stage", sessions: [
          "Performance coaching — sections 2 & 3",
          "Final keynote run-through with slides",
        ]},
      ].map((block, i) => (
        <div key={i} style={{ borderRadius: "var(--radius-lg)", padding: "26px 24px",
          border: "2px solid var(--ink)", background: "var(--white)" }}>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--pink)", marginBottom: 8 }}>{block.month}</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.02em", fontSize: 21, lineHeight: 1, marginBottom: 18 }}>{block.label}</div>
          {block.sessions.map((s, j) => (
            <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: j < 1 ? 12 : 0 }}>
              <Icon name="check" size={16} color="var(--lime)" style={{ flex: "none", marginTop: 3 }} />
              <span style={{ fontSize: 14.5, color: "var(--ink-700)", lineHeight: 1.5 }}>{s}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </Reveal>

  {/* SPEAKER HUB */}
  <Reveal delay={2}>
    <div style={{ background: "var(--ink)", borderRadius: "var(--radius-lg)", padding: "44px 40px",
      border: "2.5px solid var(--ink)", boxShadow: "10px 10px 0 var(--pink)", marginBottom: 60 }}>
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.14em",
        textTransform: "uppercase", color: "var(--lime)", marginBottom: 14 }}>Bonus: included with enrollment</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
        letterSpacing: "-0.03em", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 0.93,
        color: "var(--white)", margin: "0 0 18px" }}>
        6 months of <HL color="var(--lime)">Speaker Hub</HL> access
      </h3>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-on-dark2)", fontWeight: 500, maxWidth: 560, margin: "0 0 32px" }}>
        The Speaker Hub is your async resource library — everything you need to run a speaking business, all in one place. Think of it as the business side of being a speaker, laid out step by step. You get 6 full months of access starting day one.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
        {[
          { icon: "mic", label: "Engage Your Audience", items: "Audience engagement techniques, movement & reflection activities, emotional connection" },
          { icon: "layout", label: "Build Your Materials", items: "Creating a slide deck, speaker one-sheet, proposal, speaker agreements" },
          { icon: "send", label: "Get Booked", items: "Speaker pipeline, CRM guide, outreach cadence, pitch email templates, pricing" },
          { icon: "heart", label: "Serve Your Clients", items: "Pre-event runway, client onboarding workflow, post-event workflow" },
          { icon: "camera", label: "Build Your Brand", items: "Capturing speaker reel footage, building social proof" },
        ].map((cat, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "18px 18px",
            border: "1px solid rgba(255,255,255,0.12)" }}>
            <Icon name={cat.icon} size={20} color="var(--lime)" style={{ marginBottom: 10 }} />
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 14, color: "var(--white)", marginBottom: 6 }}>{cat.label}</div>
            <div style={{ fontSize: 13, color: "var(--fg-on-dark2)", lineHeight: 1.5 }}>{cat.items}</div>
          </div>
        ))}
      </div>
    </div>
  </Reveal>

  {/* PROGRAM DETAILS */}
  <Reveal delay={2}>
    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
      letterSpacing: "-0.02em", fontSize: "clamp(24px, 3.2vw, 38px)", lineHeight: 1, margin: "0 0 24px" }}>
      Program details
    </h3>
  </Reveal>
  <Reveal delay={2}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 16, marginBottom: 48 }}>
      {[
        { icon: "calendar", label: "Dates", value: "September – December 2026" },
        { icon: "video", label: "Format", value: "8 live group sessions, 2x/month" },
        { icon: "users", label: "Cohort", value: "10-12 women — intimate group" },
        { icon: "dollar-sign", label: "Investment", value: "$4,000" },
        { icon: "star", label: "Bonus", value: "6 months Speaker Hub access included" },
      ].map((d, i) => (
        <div key={i} style={{ borderRadius: "var(--radius-lg)", padding: "24px 20px",
          border: "2px solid var(--ink-200)", background: "#fafaf9", textAlign: "center" }}>
          <Icon name={d.icon} size={22} color="var(--pink)" style={{ marginBottom: 10 }} />
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--ink-500)", marginBottom: 6 }}>{d.label}</div>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--ink)", lineHeight: 1.4 }}>{d.value}</div>
        </div>
      ))}
    </div>
  </Reveal>

  <Reveal delay={3}>
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
      <Button variant="pink" shape="blob" size="lg" onClick={openUrl(CAL_URL)}>
        Apply now — let's talk →
      </Button>
      <p style={{ fontSize: 15, color: "var(--ink-500)", fontWeight: 500, margin: 0 }}>
        Spots are limited. Book a call and let's see if it's a fit.
      </p>
    </div>
  </Reveal>
</div>
)}

{/* Tab 2: Digital Downloads */}
{active === 1 && (
<div>
<Reveal>
<Kicker color="var(--ink)" style={{ marginBottom: 16 }}>Digital downloads</Kicker>
</Reveal>
<Reveal delay={1}>
<h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
letterSpacing: "-0.03em", fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 0.93, margin: "0 0 48px" }}>
Tools to get you <HL color="var(--lime)">booked.</HL>
</h2>
</Reveal>

{/* Pipeline Kit card */}
<Reveal delay={1}>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center",
background: "var(--ink)", borderRadius: "var(--radius-lg)", padding: "44px 40px",
border: "2.5px solid var(--ink)", boxShadow: "10px 10px 0 var(--lime)" }}>
<div>
<div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.16em",
textTransform: "uppercase", color: "var(--lime)", marginBottom: 14 }}>Speaker resource</div>
<h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
letterSpacing: "-0.03em", fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 0.95,
color: "var(--white)", margin: "0 0 18px" }}>
Get Booked: The <HL color="var(--pink)">Speaker Pipeline Kit</HL>
</h3>
<p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--fg-on-dark2)", fontWeight: 500, margin: "0 0 28px", maxWidth: 420 }}>
Everything you need to land speaking gigs — from crafting your pitch to building your pipeline. Built from Erin's real booking system.
</p>
<Button variant="lime" shape="cutout" size="lg" onClick={openUrl(STAN_KIT)}>
Get it now →
</Button>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
{[
"Outreach templates that actually get replies",
"How to price yourself with confidence",
"Building a pitch that books you",
"Tracking your pipeline like a pro",
"Erin's personal system, straight to you",
].map((item, i) => (
<div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
<Icon name="check-circle-2" size={20} color="var(--lime)" style={{ flex: "none", marginTop: 2 }} />
<span style={{ fontSize: 16, color: "var(--white)", fontWeight: 500, lineHeight: 1.4 }}>{item}</span>
</div>
))}
</div>
</div>
</Reveal>
</div>
)}
</div>
</section>
);
};

/* ---------- CTA ---------- */
const CoachingCTA = () => (
<section className="section grain" style={{ background: "var(--ink)", color: "var(--white)", position: "relative", overflow: "hidden", textAlign: "center" }}>
<div className="spotlight" style={{ opacity: 0.7 }}></div>
<div className="wrap" style={{ position: "relative", zIndex: 2 }}>
<Reveal><Kicker color="rgba(255,255,255,0.78)" slash="var(--lime)" style={{ marginBottom: 24, justifyContent: "center" }}>Ready to level up?</Kicker></Reveal>
<Reveal delay={1}>
<h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
letterSpacing: "-0.04em", fontSize: "clamp(40px, 7vw, 100px)", lineHeight: 0.88, margin: "0 0 28px" }}>
Let's <HL color="var(--pink)">build</HL><br/>your voice.
</h2>
</Reveal>
<Reveal delay={2}>
<Button variant="pink" shape="blob" size="lg" onClick={openUrl(CAL_URL)}>Schedule a free call →</Button>
</Reveal>
</div>
</section>
);

/* ---------- FOOTER ---------- */
const CoachingFooter = () => (
<footer style={{ background: "#0f0d0c", color: "var(--white)", padding: "56px 40px 40px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
<div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
<a href={HOME} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
<div>
<div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: 26, color: "var(--white)" }}>
Erin <span style={{ color: "var(--pink)" }}>Pompa</span>
</div>
<div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 23, color: "var(--lime)", marginTop: 2 }}>the shift starts here.</div>
</div>
</a>
<div style={{ display: "flex", gap: 12 }}>
{[{ n: "instagram", h: "https://www.instagram.com/erinpspeaks/", l: "Instagram" }, { n: "facebook", h: "https://www.facebook.com/erinpspeaks", l: "Facebook" }, { n: "linkedin", h: "https://www.linkedin.com/in/erinpompa/", l: "LinkedIn" }, { n: "youtube", h: "https://www.youtube.com/@ErinPompa-gg3ds", l: "YouTube" }].map(s => (
<a key={s.h} href={s.h} target="_blank" rel="noopener" aria-label={"Erin on " + s.l} style={{ width: 46, height: 46, borderRadius: 999, border: "1px solid rgba(255,255,255,0.25)", display: "grid", placeItems: "center", textDecoration: "none", color: "var(--white)" }}><SocialIcon name={s.n} size={19} /></a>
))}
</div>
</div>
<div style={{ maxWidth: 1240, margin: "36px auto 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
<span>© 2026 Erin Pompa · TruthSpeaks 365</span>
<span>Speaker · Author · Educator</span>
</div>
</footer>
);

/* ---------- APP ---------- */
const CoachingApp = () => {
React.useEffect(() => {
const run = () => window.lucide && window.lucide.createIcons();
run();
const t = setInterval(run, 600);
setTimeout(() => clearInterval(t), 4000);
return () => clearInterval(t);
}, []);
return (
<div>
<CoachingNav />
<CoachingHero />
<CoachingTabs />
<CoachingCTA />
<CoachingFooter />
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")).render(<CoachingApp />);
