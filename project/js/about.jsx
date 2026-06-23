/* =====================================================================
   ABOUT — Erin Pompa
   Same arena vibe as the homepage. Uses primitives from ui.jsx.
   Voice: first person where Erin speaks to you (intro/story/spark),
   third person in the formal bio.
   ===================================================================== */

const CAL_URL = "https://calendar.app.google/cvDWxLCAQ9Lv8SHr8";
const TS_URL = "https://truthspeaks365.com";
const HOME = "index.html";
const openUrl = (url) => () => window.open(url, "_blank", "noopener");

/* ---------- NAV ---------- */
const ABOUT_LINKS = [{ label: "About", href: "About.html" }, { label: "Speaking", href: "Speaking.html" }, { label: "TruthSpeaks 365", href: "https://truthspeaks365.com" }, { label: "Contact", href: "Contact.html" }];
const AboutNav = () => {
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
          {ABOUT_LINKS.map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
              aria-current={l.label === "About" ? "page" : undefined}
              style={{
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em",
                color: l.label === "About" ? "var(--lime)" : "rgba(255,255,255,0.82)", cursor: "pointer", whiteSpace: "nowrap"
              }}>{l.label}</a>
          ))}
          <Button variant="pink" shape="cutout" size="sm" onClick={openUrl("https://calendar.app.google/cvDWxLCAQ9Lv8SHr8")}>Book Erin</Button>
        </nav>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          <Icon name={menuOpen ? "x" : "menu"} size={26} color="var(--white)" />
        </button>
      </header>
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          {ABOUT_LINKS.map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              aria-current={l.label === "About" ? "page" : undefined}
              className={"mobile-menu-link" + (l.label === "About" ? " active" : "")}
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

/* ---------- HERO (bg video) ---------- */
const AboutHero = () => {
  React.useEffect(() => {
    const VID = "hykkXiX7rwc";
    let watchdog = null;
    const start = () => {
      if (!window.YT || !window.YT.Player) return;
      new window.YT.Player("about-yt", {
        videoId: VID,
        playerVars: { autoplay: 1, mute: 1, controls: 0, loop: 1, playlist: VID,
          playsinline: 1, modestbranding: 1, rel: 0, disablekb: 1, fs: 0, iv_load_policy: 3, showinfo: 0 },
        events: {
          onReady: (e) => {
            const p = e.target;
            p.mute(); p.playVideo();
            try { p.getIframe().setAttribute("tabindex", "-1"); } catch (err) {}
            clearInterval(watchdog);
            watchdog = setInterval(() => {
              try {
                const d = p.getDuration();
                if (d > 0 && p.getCurrentTime() >= d - 0.35) p.seekTo(0, true);
              } catch (err) {}
            }, 250);
          },
          onStateChange: (e) => {
            const YT = window.YT.PlayerState;
            if (e.data === YT.ENDED) { e.target.seekTo(0, true); e.target.playVideo(); }
            if (e.data === YT.PAUSED) { e.target.playVideo(); }
          },
        },
      });
    };
    if (window.YT && window.YT.Player) { start(); }
    else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prev && prev(); start(); };
      if (!document.getElementById("yt-iframe-api")) {
        const s = document.createElement("script");
        s.id = "yt-iframe-api"; s.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(s);
      }
    }
    return () => clearInterval(watchdog);
  }, []);
  return (
  <section style={{ background: "var(--ink)", color: "var(--white)", position: "relative",
    minHeight: "82vh", display: "flex", alignItems: "center", paddingTop: 130, paddingBottom: 80, overflow: "hidden" }}>
    <div className="video-bg" aria-hidden="true">
      <div id="about-yt" className="yt-frame"></div>
    </div>
    <div className="video-scrim"></div>
    <div className="spotlight" style={{ opacity: 0.7 }}></div>
    <div className="wrap" style={{ position: "relative", zIndex: 3, width: "100%" }}>
      <div style={{ maxWidth: 860 }}>
        <Reveal><Kicker color="rgba(255,255,255,0.78)" slash="var(--lime)" style={{ marginBottom: 24 }}>About Erin</Kicker></Reveal>
        <Reveal delay={1}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.04em", fontSize: "clamp(56px, 9vw, 132px)", lineHeight: 0.88, margin: "0 0 26px" }}>
            Hi, I'm <br /><HL color="var(--lime)">Erin.</HL>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(19px, 2.2vw, 26px)", fontWeight: 600,
            lineHeight: 1.45, color: "var(--white)", maxWidth: 680, margin: 0 }}>
            Speaker, author, educator, wife, dog mom, spiritual warrior, and <Script color="var(--lime)" style={{ fontSize: "1.5em" }}>perspective shifter.</Script>
          </p>
        </Reveal>
      </div>
    </div>
  </section>
  );
};

/* ---------- STORY (first person) ---------- */
const Story = () => (
  <section className="section" style={{ background: "var(--white)", color: "var(--ink)" }}>
    <div className="wrap grid-2" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 60, alignItems: "center" }}>
      <div>
        <Reveal><Kicker color="var(--ink)" style={{ marginBottom: 16 }}>How it started</Kicker></Reveal>
        <Reveal delay={1}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.03em", fontSize: "clamp(34px, 4.8vw, 60px)", lineHeight: 0.95, margin: "0 0 24px" }}>
            From dance teacher to speaker to <span style={{ whiteSpace: "nowrap" }}><HL color="var(--lime)">TruthSpeaks 365.</HL></span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-700)", fontWeight: 500, margin: "0 0 18px", maxWidth: 560 }}>
            I spent 15 years as the Dance Director at Rosa L. Parks High School of Fine &amp; Performing Arts in Paterson, NJ, the same school I graduated from. At first, I thought my job was just to teach dance. But I quickly realized my students were wrestling with so much more: resilience, decision-making, relationships, and self-awareness.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-700)", fontWeight: 500, margin: 0, maxWidth: 560 }}>
            I saw how powerful emotional intelligence could be, not just in shaping my students' growth, but in shaping human growth. That realization pushed me beyond the classroom. Now I bring raw, real, relatable conversations into schools and organizations, the kind that strengthen resilience and help students and professionals make choices they're proud of.
          </p>
        </Reveal>
      </div>
      <Reveal delay={1} style={{ position: "relative" }}>
        <div style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "var(--radius-md)", border: "3px solid var(--ink)",
          boxShadow: "12px 12px 0 var(--lime)", overflow: "hidden" }}>
          <img src="uploads/7Q5A9864.webp" alt="Erin hugging a student" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- SPARK (first person, featured) ---------- */
const Spark = () => (
  <section className="section grain" style={{ background: "var(--ink)", color: "var(--white)", position: "relative" }}>
    <div className="wrap">
      <Reveal><Kicker color="rgba(255,255,255,0.78)" slash="var(--lime)" style={{ marginBottom: 26 }}>The spark</Kicker></Reveal>
      <Reveal delay={1}>
        <blockquote style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "-0.03em", fontSize: "clamp(28px, 4.4vw, 60px)", lineHeight: 1.02, margin: "0 0 30px", maxWidth: 1080 }}>
          Two girls left me a note, thanking me for giving them the chance to <HL color="var(--pink)">see themselves on stage.</HL> That moment made it clear: this mission was bigger than me.
        </blockquote>
      </Reveal>
      <Reveal delay={2}>
        <p style={{ fontSize: 20, lineHeight: 1.55, color: "var(--fg-on-dark2)", fontWeight: 500, maxWidth: 760, margin: 0 }}>
          It became the spark for <span style={{ color: "var(--lime)", fontWeight: 800 }}>TruthSpeaks 365</span>, a team of former educators, mental health professionals, leaders, and women from all backgrounds who use the power of storytelling to help young people strengthen resilience and make responsible decisions, without giving in to peer pressure or destructive habits.
        </p>
      </Reveal>
      <Reveal delay={3}>
        <div style={{ marginTop: 34 }}>
          <Button variant="lime" shape="cutout" size="lg" onClick={openUrl(TS_URL)}>Bring TruthSpeaks 365 to you →</Button>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- BIO (third person) ---------- */
const CREDENTIALS = [
  "Master's in Dance Education, NYU",
  "15 years Dance Director, Rosa L. Parks",
  "Adjunct Professor, Berkeley College",
  "Adjunct Professor, Bergen Community College",
  "Youth Mental Health First Aid certified",
  "DCR Microaggressions trained",
];
const RECOGNITION = [
  "Toastmasters Area & District 83 Table Topics Champion, 2022 and 2023",
  "Mental Health & Leadership Bid, Paterson Public Schools, 2023-24",
  "Partner with Partners in Prevention & the NJ4S Grant",
  "Opening keynote, 2025 ASAP NJ Conference",
  "Showcase speaker, 1 of 4, 2025 National Conference of Student Activities",
  "Keynote, New Hampshire & Montana state student leadership conferences, 2025",
  "Returning keynote, Michigan state student leadership conference, 2026",
];
// Stats bar — edit these numbers to update the page.
const STATS = [
  { num: "18,988+", label: "Students reached" },
  { num: "162", label: "Schools & organizations impacted" },
  { num: "∞", label: "Perspective shifts" },
];
// Rolls a number up from 0 to its total when scrolled into view.
const CountUp = ({ value, style }) => {
  const ref = React.useRef(null);
  const started = React.useRef(false);
  const m = String(value).match(/^(\D*)([\d,]+)(.*)$/);
  const numeric = !!m;
  const prefix = numeric ? m[1] : "";
  const target = numeric ? parseInt(m[2].replace(/,/g, ""), 10) : 0;
  const suffix = numeric ? m[3] : "";
  const [display, setDisplay] = React.useState(numeric ? "0" : value);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setDisplay(numeric ? target.toLocaleString("en-US") : value); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800, t0 = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / dur);
            if (numeric) {
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(target * eased).toLocaleString("en-US"));
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(target.toLocaleString("en-US"));
            } else {
              // roll random scrambling digits, then land on the symbol (∞)
              if (p < 1) {
                const digits = Math.random() > 0.5 ? 4 : 3;
                let r = "";
                for (let i = 0; i < digits; i++) r += Math.floor(Math.random() * 10);
                setDisplay(r);
                requestAnimationFrame(tick);
              } else {
                setDisplay(value);
              }
            }
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, [numeric, target, value]);
  return (
    <div ref={ref} style={{ ...style, fontVariantNumeric: "tabular-nums" }}>
      {numeric ? prefix + display + suffix : display}
    </div>
  );
};
const Bio = () => (
  <section className="section" style={{ background: "var(--white)", color: "var(--ink)" }}>
    <div className="wrap">
      <div style={{ marginBottom: 44 }}>
        <Reveal><Kicker color="var(--ink)" style={{ marginBottom: 14 }}>The bio</Kicker></Reveal>
        <Reveal delay={1}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.03em", fontSize: "clamp(38px, 5.4vw, 70px)", lineHeight: 0.92, margin: "0 0 8px" }}>
            Erin <span style={{ color: "var(--pink)" }}>Pompa</span>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 15, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-500)" }}>
            Speaker · Author · Educator · Founder of TruthSpeaks 365
          </div>
        </Reveal>
      </div>

      <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 48, alignItems: "start" }}>
        <div>
          {[
            "A New Jersey native, Erin has dedicated more than 20 years to education, helping students and educators shift limiting beliefs, build resilience, and strengthen mental well-being.",
            "She holds a Master's degree in Dance Education from New York University and spent 15 years as the Dance Director at Rosa L. Parks School of Fine & Performing Arts. Erin also served as an adjunct professor at Berkeley College, where she taught The Art of Creativity. Her background in education, the arts, and curriculum design lets her create high-energy presentations that are both meaningful and memorable.",
            "Certified in Youth Mental Health First Aid and trained in DCR Recognizing and Responding to Microaggressions, she pairs these credentials with lived experience and classroom expertise to connect deeply with diverse student populations and educational communities.",
            "Through TruthSpeaks 365, Erin leads a team of exceptional speakers, including former educators, mental health professionals, and community leaders. Together they use courageous storytelling and interactive experiences to help students build resilience, develop self-awareness, and make choices they are proud of.",
            "Erin serves both youth and adult audiences. As the founder of TruthSpeaks 365, she is on a mission to ensure every student, and every human who works with youth, experiences real, courageous conversations that create lasting change.",
          ].map((p, i) => (
            <Reveal key={i} delay={1}>
              <p style={{ fontSize: 18, lineHeight: 1.62, color: "var(--ink-700)", fontWeight: 500, margin: "0 0 18px", maxWidth: 640 }}>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, position: "sticky", top: 96 }}>
            <div style={{ background: "var(--ink)", color: "var(--white)", border: "2.5px solid var(--ink)", borderRadius: "var(--radius-lg)", padding: "28px 26px", boxShadow: "8px 8px 0 var(--lime)" }}>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 16 }}>Credentials & training</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {CREDENTIALS.map(c => (
                  <li key={c} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 15.5, lineHeight: 1.4, color: "var(--white)", fontWeight: 500 }}>
                    <Icon name="check" size={18} color="var(--lime)" style={{ flex: "none", marginTop: 2 }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={1}>
        <div style={{ marginTop: 56 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: "clamp(24px, 3vw, 34px)", marginBottom: 24 }}>
            <HL color="var(--lime)">Reach.</HL>
          </div>
          <div style={{ background: "var(--ink)", borderRadius: "var(--radius-lg)", padding: "34px 30px", marginBottom: 0,
            display: "flex", justifyContent: "space-around", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{ textAlign: "center", flex: "1 1 150px" }}>
                <CountUp value={s.num} style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.9,
                  fontSize: "clamp(40px, 6vw, 68px)", color: i % 2 === 0 ? "var(--pink)" : "var(--lime)" }} />
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-on-dark2)", marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- CTA ---------- */
const AboutCTA = () => (
  <section className="section grain" style={{ background: "var(--ink)", color: "var(--white)", position: "relative", overflow: "hidden", textAlign: "center" }}>
    <div className="spotlight" style={{ opacity: 0.7 }}></div>
    <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
      <Reveal><Kicker color="rgba(255,255,255,0.78)" slash="var(--lime)" style={{ marginBottom: 24, justifyContent: "center" }}>Let's work together</Kicker></Reveal>
      <Reveal delay={1}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "-0.03em", fontSize: "clamp(34px, 5.6vw, 80px)", lineHeight: 0.95, margin: "0 auto 30px", maxWidth: 1000 }}>
          Interested in booking me or a <HL color="var(--pink)">TruthSpeaks 365</HL> speaker?
        </h2>
      </Reveal>
      <Reveal delay={3}>
        <Button variant="pink" shape="blob" size="lg" onClick={openUrl(CAL_URL)}>Let's talk →</Button>
      </Reveal>
    </div>
  </section>
);

/* ---------- FOOTER ---------- */
const AboutFooter = () => (
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
        {[{ n: "instagram", h: "https://www.instagram.com/erinpspeaks/", l: "Instagram" }, { n: "linkedin", h: "https://www.linkedin.com/in/erinpompa/", l: "LinkedIn" }, { n: "youtube", h: "https://www.youtube.com/@ErinPompa-gg3ds", l: "YouTube" }].map(s => (
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
const AboutApp = () => {
  React.useEffect(() => {
    const run = () => window.lucide && window.lucide.createIcons();
    run();
    const t = setInterval(run, 600);
    setTimeout(() => clearInterval(t), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div>
      <AboutNav />
      <AboutHero />
      <Story />
      <Spark />
      <Bio />
      <AboutCTA />
      <AboutFooter />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AboutApp />);
