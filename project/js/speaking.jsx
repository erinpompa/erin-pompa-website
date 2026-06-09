/* =====================================================================
   SPEAKING — Erin Pompa
   One page, two views: For Youth / For Educators & Adults.
   Same arena vibe. Uses primitives from ui.jsx.
   ===================================================================== */

const CAL_URL = "https://calendar.app.google/cvDWxLCAQ9Lv8SHr8";
const HOME = "Erin Pompa.html";
const openUrl = (url) => () => window.open(url, "_blank", "noopener");

/* ---------- NAV ---------- */
const SpeakingNav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 80,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: scrolled ? "12px 40px" : "20px 40px",
      background: scrolled ? "rgba(15,13,12,0.78)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      transition: "all .25s cubic-bezier(.2,.8,.2,1)"
    }}>
      <a href={HOME} style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "-0.03em", fontSize: 20, color: "var(--white)", lineHeight: 1 }}>
          Erin <span style={{ color: "var(--pink)" }}>Pompa</span>
        </div>
      </a>
      <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <a href="About.html" style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em", color: "rgba(255,255,255,0.82)", whiteSpace: "nowrap" }}>About</a>
        <a href="Speaking.html" style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em", color: "var(--lime)", whiteSpace: "nowrap" }}>Speaking</a>
        <a href="https://truthspeaks365.com" target="_blank" rel="noopener" style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em", color: "rgba(255,255,255,0.82)", whiteSpace: "nowrap" }}>TruthSpeaks 365</a>
        <a href="Contact.html" style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em", color: "rgba(255,255,255,0.82)", whiteSpace: "nowrap" }}>Contact</a>
        <Button variant="pink" shape="cutout" size="sm" onClick={openUrl("https://calendar.app.google/cvDWxLCAQ9Lv8SHr8")}>Book Erin</Button>
      </nav>
    </header>
  );
};

/* ---------- HERO ---------- */
const SpeakingHero = () => (
  <section style={{ background: "var(--ink)", color: "var(--white)", position: "relative",
    paddingTop: 150, paddingBottom: 70, overflow: "hidden" }}>
    <div className="spotlight" style={{ opacity: 0.6 }}></div>
    <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
      <Reveal><Kicker color="rgba(255,255,255,0.78)" slash="var(--lime)" style={{ marginBottom: 24 }}>Speaking</Kicker></Reveal>
      <Reveal delay={1}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "-0.04em", fontSize: "clamp(40px, 6.6vw, 96px)", lineHeight: 0.92, margin: "0 0 26px" }}>
          Every miracle starts with a <HL color="var(--lime)">shift in perspective.</HL>
        </h1>
      </Reveal>
      <Reveal delay={2}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 500,
          lineHeight: 1.5, color: "var(--fg-on-dark2)", maxWidth: 700, margin: 0 }}>
          From student leadership conferences and school auditoriums to professional development days, in-service days, and staff trainings, Erin brings raw, real, and relatable conversations that will spark <Script color="var(--lime)" style={{ fontSize: "1.3em" }}>perspective shifts</Script> that last.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ---------- DATA ---------- */
const AUDIENCES = {
  youth: {
    key: "youth", tab: "For Youth", color: "var(--sky)",
    heading: "Built for the students in the room.",
    intro: (<>Empowering young people to build resilience, lead with confidence, and make healthy, responsible choices through the power of a <Script color="var(--lime)" style={{ fontSize: "1.3em" }}>perspective shift.</Script></>),
    ways: ["Keynotes", "Assemblies", "Workshops", "One-day programs"],
    talk: {
      badge: "Signature talk", duration: null,
      title: "Awakening Your Warrior Spirit",
      subtitle: "A keynote/assembly for students ready to face their challenges head-on.",
      body: "Students will hear a powerful story about overcoming perfectionism, self-doubt, and people-pleasing. Through raw storytelling and the simple PAG framework (a perspective shift through acceptance and gratitude), they'll walk away with real tools for navigating tough times, changing negative self-talk, and living with gratitude and acceptance. The goal: to inspire personal growth and a mindset that faces challenges with confidence.",
      objLabel: "Students will be able to",
      objectives: [
        "Navigate challenging times by applying resilience and determination in their own lives",
        "Apply the PAG framework to gain positive coping mechanisms for dealing with hard situations",
        "Recognize and change negative self-talk to foster a more positive mindset",
        "Understand the transformative power of gratitude and acceptance in daily life",
        "Feel motivated to pursue personal growth and proactive well-being",
      ],
      formats: ["Keynote", "Assembly", "Workshop"],
    },
  },
  adults: {
    key: "adults", tab: "For Educators & Adults", color: "var(--pink)",
    heading: "For those who pour into others.",
    intro: (<>Helping student assistant coordinators and all who serve youth reclaim their purpose, restore their spirit, and pour back into themselves so they can keep pouring into our students through the power of a <Script color="var(--lime)" style={{ fontSize: "1.3em" }}>perspective shift.</Script></>),
    ways: ["Staff dev days", "Conferences"],
    talk: {
      badge: null, duration: null,
      title: "Awakening Your Warrior Spirit: Building Resilience for Those Who Serve",
      subtitle: "A session for the people who give the most.",
      body: "This session invites adults who serve young people to focus on their own well-being as the foundation for supporting others. Through stories, reflection, and simple practical tools, participants will explore how to navigate personal and professional challenges while reconnecting with their purpose. Rooted in gratitude and acceptance, this session restores emotional balance and renews the capacity to show up with intention.",
      objLabel: "Participants will be able to",
      objectives: [
        "Reflect on their well-being and identify personal strategies to maintain emotional balance throughout the year",
        "Understand how working through everyday stress enhances their effectiveness in the work they do",
        "Apply actionable frameworks like gratitude and acceptance to manage challenges and restore purpose",
        "Recognize that caring for themselves is the foundation for showing up fully for the young people they serve",
      ],
      formats: ["Staff dev day", "Conference", "Part 1 of 2"],
    },
  },
};

/* ---------- TAGS ---------- */
const FUNKY = ["var(--pink)", "var(--lime)", "var(--violet)", "var(--sky)", "var(--yellow)", "var(--coral)"];
const Chip = ({ children, color, i = 0 }) => (
  <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13, letterSpacing: "0.05em",
    textTransform: "uppercase", color: "var(--ink)", background: color, border: "2.5px solid var(--ink)",
    borderRadius: 999, padding: "8px 18px", whiteSpace: "nowrap", display: "inline-block",
    boxShadow: "3px 3px 0 var(--ink)", transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}>{children}</span>
);

/* ---------- TALK CARD ---------- */
const TalkCard = ({ talk, color }) => (
  <div style={{ background: "var(--surface-dark)", border: "2px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius-xl)",
    boxShadow: `12px 12px 0 ${color}`, overflow: "hidden" }}>
    <div style={{ padding: "38px 40px 44px", color: "var(--white)" }}>
      {(talk.badge || talk.duration) && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 18 }}>
          {talk.badge && (
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12.5, letterSpacing: "0.08em",
              textTransform: "uppercase", color: "var(--ink)", background: color, borderRadius: 999, padding: "7px 16px",
              display: "inline-block", whiteSpace: "nowrap" }}>{talk.badge}</span>
          )}
          {talk.duration && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--lime)" }}>
              <Icon name="clock" size={16} /> {talk.duration}
            </span>
          )}
        </div>
      )}
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
        letterSpacing: "-0.03em", fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 0.96, margin: "0 0 14px", color: "var(--white)" }}>{talk.title}</h3>
      <p style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: "clamp(22px, 2.6vw, 30px)", color: "var(--lime)", margin: 0, lineHeight: 1 }}>{talk.subtitle}</p>

      <div style={{ height: 1, background: "rgba(255,255,255,0.12)", margin: "28px 0" }}></div>

      <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--fg-on-dark2)", fontWeight: 500, margin: "0 0 30px", maxWidth: 760 }}>{talk.body}</p>

      <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>{talk.objLabel}</div>
      <ul style={{ listStyle: "none", margin: "0 0 34px", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
        {talk.objectives.map((o, i) => (
          <li key={i} style={{ display: "flex", gap: 13, alignItems: "flex-start", fontSize: 17, lineHeight: 1.5, color: "var(--white)", fontWeight: 500 }}>
            <span style={{ flex: "none", width: 26, height: 26, borderRadius: 999, background: color, display: "grid", placeItems: "center", marginTop: 1 }}>
              <Icon name="check" size={15} color="var(--ink)" />
            </span>
            {o}
          </li>
        ))}
      </ul>

      <Button variant="pink" shape="blob" size="lg" onClick={openUrl("https://calendar.app.google/cvDWxLCAQ9Lv8SHr8")}>Book this talk ↗</Button>
    </div>
  </div>
);

/* ---------- AUDIENCE VIEW ---------- */
const AudienceView = ({ data }) => (
  <div className="wrap" style={{ paddingBottom: 20 }}>
    <Reveal>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
        letterSpacing: "-0.03em", fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 0.95, margin: "0 0 20px", maxWidth: 900 }}>
        {data.heading}
      </h2>
    </Reveal>
    <Reveal delay={1}>
      <p style={{ fontSize: "clamp(18px, 2vw, 21px)", lineHeight: 1.55, color: "rgba(255,255,255,0.82)", fontWeight: 500, maxWidth: 720, margin: "0 0 26px" }}>
        {data.intro}
      </p>
    </Reveal>
    <Reveal delay={2}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 48 }}>
        {data.ways.map((w, i) => <Chip key={w} color={FUNKY[i % FUNKY.length]} i={i}>{w}</Chip>)}
      </div>
    </Reveal>
    <Reveal delay={2}>
      <TalkCard talk={data.talk} color={data.color} />
    </Reveal>
  </div>
);

/* ---------- TABS + CONTENT ---------- */
const SpeakingBody = () => {
  const initialTab = (typeof window !== "undefined" && window.location.hash.replace("#", "") === "adults") ? "adults" : "youth";
  const [tab, setTab] = React.useState(initialTab);
  const data = AUDIENCES[tab];
  React.useEffect(() => {
    const id = setTimeout(() => window.lucide && window.lucide.createIcons(), 60);
    return () => clearTimeout(id);
  }, [tab]);
  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--white)", paddingTop: 56 }}>
      <div className="wrap" style={{ marginBottom: 48 }}>
        <div style={{ display: "inline-flex", flexWrap: "wrap", gap: 6, background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: 6 }}>
          {Object.values(AUDIENCES).map(a => {
            const active = a.key === tab;
            return (
              <button key={a.key} onClick={() => setTab(a.key)}
                style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 15, letterSpacing: "0.02em",
                  padding: "12px 26px", borderRadius: 999, border: "none", cursor: "pointer", whiteSpace: "nowrap",
                  background: active ? "var(--lime)" : "transparent", color: active ? "var(--ink)" : "rgba(255,255,255,0.7)",
                  transition: "all .16s cubic-bezier(.2,.8,.2,1)" }}>
                {a.tab}
              </button>
            );
          })}
        </div>
      </div>
      <AudienceView key={tab} data={data} />
    </section>
  );
};

/* ---------- FOOTER ---------- */
const SpeakingFooter = () => (
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
    <div style={{ maxWidth: 1240, margin: "36px auto 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
      fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
      <span>© 2026 Erin Pompa · TruthSpeaks 365</span>
      <span>Speaker · Author · Educator</span>
    </div>
  </footer>
);

/* ---------- APP ---------- */
const SpeakingApp = () => {
  React.useEffect(() => {
    const run = () => window.lucide && window.lucide.createIcons();
    run();
    const t = setInterval(run, 500);
    setTimeout(() => clearInterval(t), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div>
      <SpeakingNav />
      <SpeakingHero />
      <SpeakingBody />
      <SpeakingFooter />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<SpeakingApp />);
