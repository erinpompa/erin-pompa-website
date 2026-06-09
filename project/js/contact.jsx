/* =====================================================================
   LET'S CONNECT (Contact) — Erin Pompa
   Split hero, reason selector, inquiry form. Uses primitives from ui.jsx.
   ===================================================================== */

const CAL_URL = "https://calendar.app.google/cvDWxLCAQ9Lv8SHr8";
const BOOK_URL = "https://webforms.pipedrive.com/f/clTep0VNxXRyL9v4qQAQH1MknN1K5SsbuThJFHcYabdZNS63Ki18JRtYVXQpC4UtRF";
const HOME = "Erin Pompa.html";
const openUrl = (url) => () => window.open(url, "_blank", "noopener");

/* ---------- NAV ---------- */
const NAV = [
  { label: "About", href: "About.html" },
  { label: "Speaking", href: "Speaking.html" },
  { label: "TruthSpeaks 365", href: "https://truthspeaks365.com" },
  { label: "Contact", href: "Contact.html" },
];
const ContactNav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: scrolled ? "12px 40px" : "18px 40px",
      background: scrolled ? "rgba(15,13,12,0.92)" : "rgba(15,13,12,0.6)",
      backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)",
      transition: "all .25s cubic-bezier(.2,.8,.2,1)"
    }}>
      <a href={HOME} style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "-0.03em", fontSize: 20, color: "var(--white)", lineHeight: 1 }}>
          Erin <span style={{ color: "var(--pink)" }}>Pompa</span>
        </div>
      </a>
      <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30 }}>
        {NAV.map(l => (
          <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener" style={{
            fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em",
            color: l.label === "Contact" ? "var(--lime)" : "rgba(255,255,255,0.82)", whiteSpace: "nowrap"
          }}>{l.label}</a>
        ))}
        <Button variant="pink" shape="cutout" size="sm" onClick={openUrl(CAL_URL)}>Book Erin</Button>
      </nav>
    </header>
  );
};

/* ---------- HERO (split) ---------- */
const ContactHero = () => (
  <section className="contact-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "82vh", paddingTop: 70 }}>
    <div style={{ background: "var(--ink)", color: "var(--white)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "80px 64px" }}>
      <Reveal><Kicker color="var(--pink)" slash="var(--pink)" style={{ marginBottom: 22 }}>Contact</Kicker></Reveal>
      <Reveal delay={1}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.04em", textTransform: "none",
          fontSize: "clamp(48px, 6vw, 92px)", lineHeight: 0.92, margin: "0 0 22px" }}>
          Let's start<br/>the <span style={{ color: "var(--lime)" }}>shift.</span>
        </h1>
      </Reveal>
      <Reveal delay={2}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(17px, 1.7vw, 20px)", lineHeight: 1.6,
          color: "var(--fg-on-dark2)", maxWidth: 440, margin: 0 }}>
          Whether you're ready to book or just want to learn more, Erin would love to hear from you.
        </p>
      </Reveal>
    </div>
    <div style={{ background: "var(--ink)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "48px 40px" }}>
      <img src="uploads/FullSizeRender.jpg" alt="Erin Pompa" style={{ width: "100%", maxWidth: 380, borderRadius: "var(--radius-lg)", display: "block", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }} />
    </div>
  </section>
);

/* ---------- REASONS ---------- */
const REASONS = [
  { key: "youth", color: "var(--sky)", icon: "🎤", title: "Youth Talk", desc: "Book a presentation for schools, student leadership, anything involving our youth.", href: CAL_URL, formTitle: "Booking Inquiry", events: ["Student Leadership Conference", "School Assembly", "Adult Presentation"] },
  { key: "adults", color: "var(--pink)", icon: "🏫", title: "Adult Presentation", desc: "Book staff development days and conferences.", href: CAL_URL, formTitle: "Booking Inquiry", events: ["Student Leadership Conference", "School Assembly", "Adult Presentation"] },
  { key: "book", color: "var(--violet)", icon: "📖", title: "Book Coming Soon", desc: "My book is dropping in 2027 and you do not want to miss it. Click below to be a part of the journey.", href: BOOK_URL, formTitle: "Be the First to Know", events: ["Book launch list", "Other"] },
  { key: "connect", color: "var(--lime)", icon: "🤎", title: "Just Connect", desc: "Just want to say hello? Send me a DM on Instagram.", href: "https://www.instagram.com/erinpspeaks/", formTitle: "Say Hello", events: ["General Question", "Collaboration", "Other"] },
];

const ReasonCard = ({ r, active, onClick }) => {
  const [hover, setHover] = React.useState(false);
  const lift = active || hover;
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      textAlign: "center", cursor: "pointer", background: active ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.035)",
      border: `2.5px solid ${active ? r.color : "rgba(255,255,255,0.12)"}`, borderRadius: 22, padding: "30px 22px",
      boxShadow: lift ? `7px 7px 0 ${r.color}` : "none",
      transform: lift ? "translate(-2px,-3px) rotate(-0.7deg)" : "none",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 0, height: "100%",
      transition: "all .18s cubic-bezier(.2,.8,.2,1)" }}>
      <span style={{ width: 56, height: 56, borderRadius: 16, background: r.color, border: "2.5px solid var(--ink)",
        display: "grid", placeItems: "center", fontSize: 26, marginBottom: 16, transform: "rotate(-4deg)", boxShadow: "3px 3px 0 var(--ink)" }}>{r.icon}</span>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--white)", marginBottom: 8, letterSpacing: "-0.01em" }}>{r.title}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.45, color: "rgba(255,255,255,0.5)", marginBottom: 18 }}>{r.desc}</span>
      <span style={{ marginTop: "auto", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase",
        color: active ? "var(--ink)" : r.color, background: active ? r.color : "transparent",
        border: `2px solid ${r.color}`, borderRadius: 999, padding: "6px 14px",
        display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>Click here →</span>
    </button>
  );
};

const ReasonSelector = ({ reason, setReason }) => (
  <section style={{ background: "var(--ink)", padding: "72px 40px 80px" }}>
    <div className="wrap">
      <Reveal>
        <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13,
          letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: "0 0 30px" }}>What brings you here?</p>
      </Reveal>
      <Reveal delay={1}>
        <div className="reason-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(188px, 1fr))", gap: 16, maxWidth: 1140, margin: "0 auto" }}>
          {REASONS.map(r => <ReasonCard key={r.key} r={r} active={reason.key === r.key} onClick={() => { if (r.href) { window.open(r.href, "_blank", "noopener"); return; } setReason(r); const el = document.querySelector(".form-section"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" }); }} />)}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- FORM ---------- */
const Field = ({ label, children }) => (
  <div style={{ marginBottom: 20 }}>
    <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-500)", marginBottom: 9 }}>{label}</label>
    {children}
  </div>
);
const inputStyle = {
  width: "100%", padding: "14px 18px", borderRadius: 12, border: "2px solid var(--ink-100)",
  background: "var(--white)", fontFamily: "var(--font-body)", fontSize: 15.5, fontWeight: 500, color: "var(--ink)", outline: "none",
};
const BUDGETS = ["Under $1,000", "$1,000 to $2,500", "$2,500 to $5,000", "$5,000 to $10,000", "$10,000+", "Not sure yet"];

// Embeds the live Pipedrive web form (loads Pipedrive's loader once).
const PipedriveForm = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const s = document.createElement("script");
    s.src = "https://webforms.pipedrive.com/f/loader";
    s.async = true;
    ref.current.appendChild(s);
  }, []);
  return (
    <div ref={ref} className="pipedriveWebForms"
      data-pd-webforms="https://webforms.pipedrive.com/f/5VHAyVaet9cKyRiWZHLN5a52kbhNegelVa5jTU3wtewsWAron9v6LW6ur5qy6lGMsH"></div>
  );
};

const ContactForm = ({ reason }) => {
  const [sent, setSent] = React.useState(false);
  const [focus, setFocus] = React.useState("");
  const fs = (name) => ({ ...inputStyle, borderColor: focus === name ? "var(--pink)" : "var(--ink-100)" });
  return (
    <section className="form-section" style={{ background: "var(--white)", color: "var(--ink)", padding: "80px 40px",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
      {/* form */}
      <div>
        <Reveal><Kicker color="var(--pink)" slash="var(--pink)" style={{ marginBottom: 28 }}>{reason.formTitle}</Kicker></Reveal>
        <Reveal delay={1}>
          <PipedriveForm />
        </Reveal>
      </div>

      {/* info */}
      <div style={{ paddingTop: 6 }}>
        <Reveal delay={1}>
          <div style={{ background: "var(--ink)", color: "var(--white)", borderRadius: 20, padding: "30px 30px", marginBottom: 22 }}>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 12 }}>A note from Erin</div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-on-dark2)", margin: 0 }}>
              Every message that comes through here is handled personally by me or my incredible assistant Shay, who has been holding things down for two years strong while I'm on the road and managing TruthSpeaks 365. <strong style={{ color: "var(--white)" }}>Responses may take a few days but we promise to get back to you.</strong>
            </p>
          </div>
        </Reveal>
        <Reveal delay={2}>
          <a href="mailto:erin@erinpompa.com" style={{ background: "var(--lime)", borderRadius: 20, padding: "26px 30px", marginBottom: 22,
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, textDecoration: "none" }}>
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", marginBottom: 5 }}>Reach us directly</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.01em" }}>erin@erinpompa.com</div>
            </div>
            <Icon name="mail" size={26} color="var(--ink)" />
          </a>
        </Reveal>
        <Reveal delay={2}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[{ l: "Instagram", n: "instagram", bg: "var(--pink)", fg: "var(--white)", h: "https://www.instagram.com/erinpspeaks/" },
              { l: "LinkedIn", n: "linkedin", bg: "var(--sky)", fg: "var(--ink)", h: "https://www.linkedin.com/in/erinpompa/" },
              { l: "YouTube", n: "youtube", bg: "var(--violet)", fg: "var(--white)", h: "https://www.youtube.com/@ErinPompa-gg3ds" }].map(s => (
              <a key={s.l} href={s.h} target="_blank" rel="noopener" style={{ background: s.bg, border: "2px solid var(--ink)", borderRadius: 999, padding: "11px 22px",
                fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 14, color: s.fg, textDecoration: "none",
                boxShadow: "3px 3px 0 var(--ink)", display: "inline-flex", alignItems: "center", gap: 9 }}>
                {s.n === "instagram" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={s.fg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <rect x="2" y="2" width="20" height="20" rx="5.5"></rect>
                    <circle cx="12" cy="12" r="4.2"></circle>
                    <circle cx="17.6" cy="6.4" r="1.2" fill={s.fg} stroke="none"></circle>
                  </svg>
                ) : s.n === "linkedin" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={s.fg} style={{ flexShrink: 0 }}>
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V9.96H5.67V18h2.67zM7 8.79a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.41c0-2.36-1.26-3.46-2.94-3.46-1.36 0-1.96.75-2.3 1.27V9.96h-2.67V18h2.67v-4.49c0-.24.02-.47.09-.64.18-.47.61-.96 1.32-.96.93 0 1.3.71 1.3 1.75V18h2.73z"></path>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={s.fg} style={{ flexShrink: 0 }}>
                    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"></path>
                  </svg>
                )}
                {s.l}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ---------- FOOTER ---------- */
const ContactFooter = () => (
  <footer style={{ background: "#0f0d0c", color: "var(--white)", padding: "56px 40px 40px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
      <a href={HOME} style={{ textDecoration: "none" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: 26, color: "var(--white)" }}>
          Erin <span style={{ color: "var(--pink)" }}>Pompa</span>
        </div>
        <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 23, color: "var(--lime)", marginTop: 2 }}>the shift starts here.</div>
      </a>
      <div style={{ display: "flex", gap: 12 }}>
        {[{ n: "instagram", h: "https://www.instagram.com/erinpspeaks/" }, { n: "linkedin", h: "https://www.linkedin.com/in/erinpompa/" }, { n: "youtube", h: "https://www.youtube.com/@ErinPompa-gg3ds" }].map(s => (
          <a key={s.h} href={s.h} target="_blank" rel="noopener" style={{ width: 46, height: 46, borderRadius: 999, border: "1px solid rgba(255,255,255,0.25)", display: "grid", placeItems: "center", textDecoration: "none", color: "var(--white)" }}><SocialIcon name={s.n} size={19} /></a>
        ))}
      </div>
    </div>
    <div style={{ maxWidth: 1240, margin: "36px auto 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
      <span>© 2026 Erin Pompa · TruthSpeaks 365</span>
      <span>Speaker · Author · Educator</span>
    </div>
  </footer>
);

/* ---------- APP ---------- */
const ContactApp = () => {
  const [reason, setReason] = React.useState(REASONS[0]);
  React.useEffect(() => {
    const run = () => window.lucide && window.lucide.createIcons();
    run();
    const t = setInterval(run, 500); setTimeout(() => clearInterval(t), 5000);
    return () => clearInterval(t);
  }, []);
  React.useEffect(() => { const id = setTimeout(() => window.lucide && window.lucide.createIcons(), 60); return () => clearTimeout(id); }, [reason]);
  return (
    <div>
      <ContactNav />
      <ContactHero />
      <ReasonSelector reason={reason} setReason={setReason} />
      <ContactForm reason={reason} />
      <ContactFooter />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
