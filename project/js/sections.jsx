/* =====================================================================
   SECTIONS — Erin Pompa homepage
   Flow: Hero · Who she's served (logos) · What people are saying ·
         Who she serves (Youth/Adults) · The Book · TruthSpeaks 365 ·
         Stay in the room · Book Erin · Footer
   ===================================================================== */

const go = (msg) => () => alert(msg + "\n\n(Placeholder — wire to real booking / link.)");
const CAL_URL = "https://calendar.app.google/cvDWxLCAQ9Lv8SHr8";
const BOOK_URL = "https://webforms.pipedrive.com/f/clTep0VNxXRyL9v4qQAQH1MknN1K5SsbuThJFHcYabdZNS63Ki18JRtYVXQpC4UtRF";
const TS_URL = "https://truthspeaks365.com";
const openUrl = (url) => () => window.open(url, "_blank", "noopener");

/* ---------- NAV ---------- */
const NAV_LINKS = [
  { label: "About", href: "About.html" },
  { label: "Speaking", href: "Speaking.html" },
  { label: "TruthSpeaks 365", href: "https://truthspeaks365.com" },
  { label: "Contact", href: "Contact.html" },
];
const Nav = () => {
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
        <div style={{ display: "flex", alignItems: "center", gap: 11, cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.03em", fontSize: 20, color: "var(--white)", lineHeight: 1 }}>
            Erin <span style={{ color: "var(--pink)" }}>Pompa</span>
          </div>
        </div>
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener" style={{
              fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em",
              color: "rgba(255,255,255,0.82)", cursor: "pointer", whiteSpace: "nowrap"
            }}>{l.label}</a>
          ))}
          <Button variant="pink" shape="cutout" size="sm" onClick={openUrl("https://calendar.app.google/cvDWxLCAQ9Lv8SHr8")}>Book Erin</Button>
        </nav>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          <Icon name={menuOpen ? "x" : "menu"} size={26} color="var(--white)" />
        </button>
      </header>
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className="mobile-menu-link"
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
const Hero = () => {
  React.useEffect(() => {
    const VID = "guzhd-UOMiY";
    let watchdog = null;
    const start = () => {
      if (!window.YT || !window.YT.Player) return;
      new window.YT.Player("hero-yt", {
        videoId: VID,
        playerVars: { autoplay: 1, mute: 1, controls: 0, loop: 1, playlist: VID,
          playsinline: 1, modestbranding: 1, rel: 0, disablekb: 1, fs: 0, iv_load_policy: 3, showinfo: 0 },
        events: {
          onReady: (e) => {
            const p = e.target;
            p.mute(); p.playVideo();
            // Seamless loop: restart just before the end so YouTube's end card never shows.
            clearInterval(watchdog);
            watchdog = setInterval(() => {
              try {
                const d = p.getDuration();
                if (d > 0 && p.getCurrentTime() >= d - 0.35) p.seekTo(0, true);
              } catch (err) {}
            }, 250);
          },
          onStateChange: (e) => {
            // Backup: if it ever ends or pauses, force it back into a playing loop.
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
    minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 120, paddingBottom: 96, overflow: "hidden" }}>
    {/* full-bleed background video (YouTube IFrame API) */}
    <div className="video-bg">
      <div id="hero-yt" className="yt-frame"></div>
    </div>
    <div className="video-scrim"></div>
    <div className="spotlight" style={{ opacity: 0.75 }}></div>
    <div className="wrap" style={{ position: "relative", zIndex: 3, width: "100%" }}>
      <div style={{ maxWidth: 820 }}>
        <Reveal>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.045em", fontSize: "clamp(68px, 10vw, 150px)", lineHeight: 0.86, margin: 0 }}>
            Erin<br/>Pompa
          </h1>
        </Reveal>
        <Reveal delay={1}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", margin: "26px 0 24px" }}>
            {["Speaker", "Author", "Educator"].map((t, i) => (
              <React.Fragment key={t}>
                {i > 0 && <span style={{ color: "var(--pink)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 26 }}>/</span>}
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase",
                  letterSpacing: "0.02em", fontSize: "clamp(18px, 2.4vw, 28px)", color: "var(--white)" }}>{t}</span>
              </React.Fragment>
            ))}
          </div>
        </Reveal>
        <Reveal delay={2}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.03em", fontSize: "clamp(30px, 4.6vw, 58px)", lineHeight: 0.98, margin: "0 0 20px" }}>
            The <HL color="var(--lime)">shift</HL> starts here.
          </div>
        </Reveal>
        <Reveal delay={3}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(17px, 1.9vw, 20px)", fontWeight: 500,
            lineHeight: 1.55, color: "var(--fg-on-dark1)", maxWidth: 560, margin: "0 0 34px" }}>
            I'll help you embrace the power of a <Script color="var(--lime)" style={{ fontSize: "1.45em" }}>perspective shift.</Script>
          </p>
        </Reveal>
        <Reveal delay={4}>
          <Button variant="pink" shape="blob" size="lg" onClick={openUrl(CAL_URL)}>Book me to speak →</Button>
        </Reveal>
      </div>
    </div>
  </section>
  );
};

/* ---------- WHO SHE'S SERVED (logos) ----------
   To add a new logo: drop the image in uploads/logos/ and add one line below
   ({ f: "file-name.png", n: "Display name" }). The marquee reflows on its own. */
const LOGOS = [
  { f: "4-h-Logo.png", n: "4-H" },
  { f: "abraham-logo.png", n: "Abraham" },
  { f: "Absurbypark-Logo.png", n: "Asbury Park" },
  { f: "ASAP-logo.png", n: "ASAP" },
  { f: "BayonneLogo.png", n: "Bayonne" },
  { f: "BergenSchools-logo.png", n: "Bergen Schools" },
  { f: "Boys-and-girls-club-logo.png", n: "Boys & Girls Club" },
  { f: "Brick-schools-logo.png", n: "Brick Schools" },
  { f: "CASL-logo.png", n: "CASL" },
  { f: "CGTI-Logo.png", n: "CGTI" },
  { f: "Charter-high-school-logo.png", n: "Charter High School" },
  { f: "Clearview-schools-logo.png", n: "Clearview Schools" },
  { f: "coalition-logo.png", n: "Coalition" },
  { f: "Cranford-high-school-logo.png", n: "Cranford High School" },
  { f: "CT-Logo.png", n: "CT" },
  { f: "deal-high-school-logo.png", n: "Deal High School" },
  { f: "Deptford-logo.png", n: "Deptford" },
  { f: "east-brunswick-logo.png", n: "East Brunswick" },
  { f: "Edison-logo.png", n: "Edison" },
  { f: "ELKS-logo.png", n: "Elks" },
  { f: "empower-logo.png", n: "Empower" },
  { f: "Girls-inc-logo.png", n: "Girls Inc." },
  { f: "Glassboro-logo.png", n: "Glassboro" },
  { f: "HOSA-logo.png", n: "HOSA" },
  { f: "John-p-logo.png", n: "John P." },
  { f: "Kawameh-logo.png", n: "Kawameh" },
  { f: "Krieva-logo.png", n: "Krieva" },
  { f: "LMTI-logo.png", n: "LMTI" },
  { f: "logo.png", n: "Partner" },
  { f: "logobranch-logo.png", n: "Branch" },
  { f: "Maple-MD-Logo.png", n: "Maple MD" },
  { f: "MASC-Logo.png", n: "MASC" },
  { f: "Michigan-Stuco-logo.png", n: "Michigan StuCo" },
  { f: "middlesex-college-logo.png", n: "Middlesex College" },
  { f: "Milestone-logo.png", n: "Milestone" },
  { f: "NA4SA-Logo.png", n: "NA4SA" },
  { f: "NH-College-logo.png", n: "NH College" },
  { f: "NHASC-Logo.png", n: "NHASC" },
  { f: "NJAC-LOGO.png", n: "NJAC" },
  { f: "NJCDC-Logo.png", n: "NJCDC" },
  { f: "NM-FFA.png", n: "NM FFA" },
  { f: "North-Arlington-HS-logo.png", n: "North Arlington HS" },
  { f: "North-Highschool-logo.png", n: "North High School" },
  { f: "OASC-logo.png", n: "OASC" },
  { f: "Passaic-logo.png", n: "Passaic" },
  { f: "Passaic-schools-logo.png", n: "Passaic Schools" },
  { f: "Paulsboro-logo.png", n: "Paulsboro" },
  { f: "Penns-grove-logo.png", n: "Penns Grove" },
  { f: "PPS-Logo.png", n: "PPS" },
  { f: "Preferred-logo.png", n: "Preferred" },
  { f: "Prevention-logo.png", n: "Prevention" },
  { f: "Prth-logo.png", n: "PRTH" },
  { f: "River-Dell-logo.png", n: "River Dell" },
  { f: "Rose-Hulman-Logo.png", n: "Rose-Hulman" },
  { f: "RYLA-Logo.png", n: "RYLA" },
  { f: "SCSCA-logo.png", n: "SCSCA" },
  { f: "seeds-of-change-logo.png", n: "Seeds of Change" },
  { f: "Shepard-logo.png", n: "Shepard" },
  { f: "Shore-regional-logo.png", n: "Shore Regional" },
  { f: "Snowball-logo.png", n: "Snowball" },
  { f: "Sussex-tech-logo.png", n: "Sussex Tech" },
  { f: "Tenafly-logo.png", n: "Tenafly" },
  { f: "the-bridge-logo.jpg", n: "The Bridge" },
  { f: "Trenton-logo.png", n: "Trenton" },
  { f: "Umes-logo.png", n: "UMES" },
  { f: "Veterans-elementary-logo.png", n: "Veterans Elementary" },
  { f: "Veterans-Md-logo.png", n: "Veterans MD" },
  { f: "VT-hosa-logo.png", n: "VT HOSA" },
  { f: "waldwick-logo.jpg", n: "Waldwick" },
  { f: "Westfield-schools-logo.png", n: "Westfield Schools" },
  { f: "Willingboro-logo.png", n: "Willingboro" },
  { f: "Winslow-logo.png", n: "Winslow" },
  { f: "Woodbridge-Logo.png", n: "Woodbridge" },
  { f: "York-college-logo.png", n: "York College" },
  { f: "young-leaders-in-action-logo.png", n: "Young Leaders in Action" },
];
const Logos = () => {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="section" style={{ background: "var(--white)", color: "var(--ink)", paddingTop: 72, paddingBottom: 72, overflow: "hidden" }}>
      <div className="wrap">
        <Reveal><Kicker color="var(--ink)" style={{ marginBottom: 14 }}>Where I serve</Kicker></Reveal>
        <Reveal delay={1}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.03em", fontSize: "clamp(26px, 3.1vw, 40px)", lineHeight: 1.06, margin: "0 0 36px" }}>
            Schools. Student organizations. <HL color="var(--lime)">Staff.</HL>
          </h2>
        </Reveal>
      </div>
      <Reveal delay={2}>
        <div className="logo-marquee" role="list" aria-label="Schools and organizations Erin has worked with">
          <div className="logo-marquee-track">
            {row.map((l, i) => (
              <div className="logo-tile" role="listitem" key={i}>
                <img src={"uploads/logos/" + l.f} alt={l.n} decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

/* ---------- THE REEL ---------- */
const REEL_ID = "1r6YKJvwogc";
const Reel = () => {
  const [playing, setPlaying] = React.useState(false);
  React.useEffect(() => {
    if (!playing) return;
    const start = () => {
      if (!window.YT || !window.YT.Player) return;
      new window.YT.Player("reel-yt", {
        videoId: REEL_ID,
        playerVars: { autoplay: 1, rel: 0, modestbranding: 1, playsinline: 1, controls: 1, fs: 1 },
        events: { onReady: (e) => { try { e.target.unMute(); e.target.setVolume(100); e.target.playVideo(); } catch (err) {} } },
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
  }, [playing]);
  return (
  <section id="reel" className="section" style={{ background: "var(--white)", color: "var(--ink)" }}>
    <div className="wrap">
      <Reveal><Kicker color="var(--ink)" style={{ marginBottom: 14 }}>The reel</Kicker></Reveal>
      <Reveal delay={1}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "-0.03em", fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 0.95, margin: "0 0 32px" }}>
          See me <HL color="var(--pink)">in the room.</HL>
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--radius-lg)", border: "3px solid var(--ink)",
          boxShadow: "12px 12px 0 var(--pink)", overflow: "hidden", display: "grid", placeItems: "center",
          background: "linear-gradient(160deg, var(--ink-800), var(--ink-900))" }}>
          {playing ? (
            <div id="reel-yt" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}></div>
          ) : (
            <button onClick={() => setPlaying(true)} aria-label="Play Erin's speaking reel" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, cursor: "pointer", padding: 0,
              backgroundImage: `linear-gradient(rgba(11,9,8,0.28), rgba(11,9,8,0.40)), url(uploads/7Q5A9814.webp)`,
              backgroundSize: "cover", backgroundPosition: "center 38%", display: "grid", placeItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                <div style={{ width: 86, height: 86, borderRadius: 999, background: "var(--pink)", border: "3px solid var(--ink)",
                  display: "grid", placeItems: "center", boxShadow: "5px 5px 0 var(--ink)" }}>
                  <Icon name="play" size={36} color="var(--ink)" />
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>Watch the reel</span>
              </div>
            </button>
          )}
        </div>
      </Reveal>
    </div>
  </section>
  );
};

/* ---------- WHAT PEOPLE ARE SAYING (reviews) ---------- */
const REVIEWS = [
  { q: "Erin captivated an audience of over 250 of our members. She even outranked the food in our participant surveys, which is truly a first. Her message of resilience and of making healthy, positive decisions is exactly what our future health professionals need. We would love to have her back as a permanent fixture at our conferences.", who: "Jessica Enright", role: "Program Coordinator · VT HOSA Future Health Professionals" },
  { q: "Meeting Erin and her team was such a pleasure. We brought her to a conference and an auditorium-style workshop for high schoolers, and each time was a huge success. She connects with teens and builds a rapport that has them truly participating and thinking deeply about the issues she speaks about. On a personal level, her ideas and delivery were so useful for my own life, not just with the students I work with, but with my own child. She brings the house down with her incredible energy.", who: "Agnieszka Kajrukszto", role: "Program Director · Children's Aid and Family Services, NJ" },
  { q: "Erin was an amazing presenter and a fabulous professional to work with. She was the keynote speaker at the ASAP NJ Conference, and from our first conversation her energy was beaming. She met with us several times beforehand, asked clarifying questions, and took the time to truly know her audience. During the presentation she was approachable, lively, and brilliant. I knew she would be a hit, but she was a perfect 10. She literally inflated the room with life and light. Any school or business would be lucky to have Erin as a presenter.", who: "Toni Anthony", role: "ASAP NJ Conference Coordinator · Cranford High School SAC" },
];
const Reviews = () => (
  <section id="reviews" className="section grain" style={{ background: "var(--ink)", color: "var(--white)", position: "relative" }}>
    <div className="wrap">
      <Reveal><Kicker color="rgba(255,255,255,0.78)" slash="var(--lime)" style={{ marginBottom: 16 }}>What people are saying</Kicker></Reveal>
      <Reveal delay={1}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "-0.03em", fontSize: "clamp(38px, 6vw, 84px)", lineHeight: 0.92, margin: "0 0 48px" }}>
          Don't just take <HL color="var(--pink)">my word</HL> for it.
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <div style={{ background: "var(--surface-dark)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "var(--radius-lg)", padding: "40px 42px", marginBottom: 22 }}>
          <Icon name="quote" size={34} color="var(--pink)" />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(20px, 2.3vw, 29px)", lineHeight: 1.42, fontWeight: 600, color: "var(--white)", margin: "16px 0 24px" }}>
            Erin is an <HL color="var(--pink)">absolutely wonderful speaker.</HL> The way she connected so quickly with our students was impressive. I first had her speak to our high school students, and her story is <HL color="var(--pink)">relatable and powerful.</HL> Our students were so moved that I needed her to come speak at our middle school too. I've never received so many thank-you's from staff for bringing her in. <HL color="var(--pink)">Powerful words from a powerful woman.</HL> Thank you, Erin!
          </p>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 17, color: "var(--lime)", letterSpacing: "0.02em" }}>Beverly Gross</div>
          <div style={{ fontSize: 14, color: "var(--fg-on-dark2)", marginTop: 2 }}>SAC · Asbury Park School District</div>
        </div>
      </Reveal>
      <div className="cards-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
        {REVIEWS.map((t, i) => (
          <Reveal key={i} delay={i + 1}>
            <div style={{ background: "var(--surface-dark)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-lg)", padding: "30px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
              <Icon name="quote" size={28} color="var(--lime)" />
              <p style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 500, color: "var(--white)", margin: "14px 0 20px", flex: 1 }}>{t.q}</p>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 16, color: "var(--lime)", letterSpacing: "0.02em" }}>{t.who}</div>
              <div style={{ fontSize: 13.5, color: "var(--fg-on-dark2)", marginTop: 2 }}>{t.role}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={2}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 46 }}>
          <Button variant="pink" shape="cutout" size="lg" onClick={() => window.open("https://www.google.com/maps/place/Erin+Pompa/@46.423669,-129.9427085,9175429m/data=!3m1!1e3!4m8!3m7!1s0x623732a14bbe4d0b:0xd4e23bac9a126c98!8m2!3d46.423669!4d-129.9427086!9m1!1b1!16s%2Fg%2F11pd0_14z4?entry=ttu", "_blank")}>Read more reviews →</Button>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- WHO SHE SERVES (Youth / Adults) ---------- */
const AUDIENCES = [
  { key: "youth", label: "Youth", hl: "var(--sky)", href: "Speaking.html#youth",
    line: (<>Empowering young people to build resilience, lead with confidence, and make healthy, responsible choices through the power of a <Script color="var(--lime)" style={{ fontSize: "1.32em" }}>perspective shift.</Script></>),
    formats: ["Keynotes", "Assemblies", "Workshops"], cta: "Click here" },
  { key: "adults", label: "Adults", hl: "var(--pink)", href: "Speaking.html#adults",
    line: (<>Helping teachers, advisors, counselors, student assistant coordinators, and all who serve youth reclaim their purpose, restore their spirit, and pour back into themselves so they can keep pouring into our students through the power of a <Script color="var(--lime)" style={{ fontSize: "1.32em" }}>perspective shift.</Script></>),
    formats: ["Staff in-service", "PD trainings"], cta: "Click here" },
];
const AudienceCard = ({ label, hl, line, formats, cta, delay, href }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Reveal delay={delay}>
      <button onClick={() => { if (href) window.location.href = href; }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ textAlign: "left", width: "100%", cursor: "pointer", background: hl, border: "none",
          borderRadius: "var(--radius-lg)", padding: "36px 34px",
          transform: hover ? "translateY(-5px) rotate(-0.6deg)" : "none", transition: "transform .18s cubic-bezier(.2,.8,.2,1)",
          display: "flex", flexDirection: "column", gap: 16 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em",
          fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 0.9, color: "var(--ink)" }}>{label}</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.5, fontWeight: 600, color: "var(--ink)" }}>{line}</span>
        {formats && formats.length > 0 && (
          <span style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {formats.map(f => (
              <span key={f} style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.04em",
                textTransform: "uppercase", color: "var(--ink)", background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 999, padding: "5px 12px", whiteSpace: "nowrap" }}>{f}</span>
            ))}
          </span>
        )}
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 16, color: "var(--ink)", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "underline", textUnderlineOffset: 4 }}>
          {cta} <Icon name="arrow-right" size={18} />
        </span>
      </button>
    </Reveal>
  );
};
const WhoSheServes = () => (
  <section id="audiences" className="section grain" style={{ background: "var(--ink)", color: "var(--white)", position: "relative" }}>
    <div className="wrap">
      <div style={{ textAlign: "center", marginBottom: 46 }}>
        <Reveal>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.03em", fontSize: "clamp(38px, 5.5vw, 64px)", lineHeight: 0.95, margin: 0 }}>
            Two rooms. <HL color="var(--lime)">One mission.</HL>
          </h2>
        </Reveal>
      </div>
      <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
        {AUDIENCES.map((a, i) => <AudienceCard key={a.key} {...a} delay={i + 1} />)}
      </div>
    </div>
  </section>
);

/* ---------- BANNER ---------- */
const Banner = () => (
  <section style={{ background: "var(--lime)", color: "var(--ink)", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)", padding: "clamp(52px, 7vw, 90px) 0" }}>
    <div className="wrap" style={{ textAlign: "center" }}>
      <Reveal>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(44px, 8.5vw, 116px)", lineHeight: 0.88 }}>
          The shift<br/>starts here.
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- THE BOOK ---------- */
const BookTeaser = () => (
  <section id="thebook" className="section grain" style={{ background: "var(--ink)", color: "var(--white)", position: "relative", overflow: "hidden" }}>
    <div className="wrap grid-2" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "center", position: "relative", zIndex: 2 }}>
      <Reveal style={{ position: "relative" }}>
        <div style={{ position: "relative", aspectRatio: "3 / 4", borderRadius: "var(--radius-md)", overflow: "hidden", transform: "rotate(-3deg)", border: "3px solid var(--ink)", boxShadow: "12px 12px 0 var(--lime)" }}>
          <img src="uploads/IMG_4461.JPG" alt="Erin Pompa speaking" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.7 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(22,20,19,0.25), rgba(22,20,19,0.72))" }}></div>
        </div>
        <div style={{ position: "absolute", top: -14, right: -10, transform: "rotate(7deg)",
          background: "var(--pink)", color: "var(--ink)", borderRadius: 6, padding: "8px 18px", border: "2px solid var(--ink)",
          fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: "4px 4px 0 var(--ink)" }}>
          Coming 2027
        </div>
      </Reveal>
      <div>
        <Reveal><Kicker color="rgba(255,255,255,0.78)" slash="var(--lime)" style={{ marginBottom: 18 }}>The book</Kicker></Reveal>
        <Reveal delay={1}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "-0.03em", fontSize: "clamp(40px, 6vw, 78px)", lineHeight: 0.92, margin: "0 0 22px" }}>
            I'm writing<br/>it <Pop color="var(--lime)">down.</Pop>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p style={{ fontSize: 20, lineHeight: 1.5, color: "var(--fg-on-dark2)", fontWeight: 500, maxWidth: 500, margin: "0 0 30px" }}>
            The message beyond the stage. My book drops in 2027. <Script color="var(--lime)" style={{ fontSize: "1.4em" }}>coming soon.</Script>
          </p>
        </Reveal>
        <Reveal delay={3}>
          <Button variant="lime" shape="cutout" size="lg" onClick={openUrl(BOOK_URL)}>Notify me →</Button>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ---------- TRUTHSPEAKS 365 ---------- */
const Schools = () => (
  <section id="schools" className="section" style={{ background: "var(--white)", color: "var(--ink)" }}>
    <div className="wrap">
      <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }}>
        <div>
          <Reveal><Kicker color="var(--ink)" style={{ marginBottom: 14 }}>TruthSpeaks 365</Kicker></Reveal>
          <Reveal delay={1}>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 17, color: "var(--ink-500)", marginBottom: 16 }}>
              On a mission to elevate female voices.
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
              letterSpacing: "-0.03em", fontSize: "clamp(38px, 5.4vw, 64px)", lineHeight: 0.92, margin: "0 0 10px" }}>
              More women.<br/>More <HL color="var(--lime)">voices.</HL>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(18px, 2.4vw, 24px)", letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 20 }}>
              Using our stories to impact youth.
            </div>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--ink-700)", fontWeight: 500, maxWidth: 480, margin: "0 0 28px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.4em", letterSpacing: "-0.01em" }}><HL color="var(--lime)">TruthSpeaks 365</HL></span> empowers young people to build resilience, lead with confidence, and make healthy, responsible choices.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Button variant="white" shape="cutout" size="lg" onClick={openUrl(TS_URL)}>Bring us to your school →</Button>
          </Reveal>
        </div>
        <Reveal delay={2}>
          <div style={{ background: "var(--ink)", color: "var(--white)", borderRadius: "var(--radius-lg)", padding: "44px 38px", border: "2.5px solid var(--ink)", boxShadow: "10px 10px 0 var(--pink)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(72px, 12vw, 128px)", lineHeight: 0.9, color: "var(--pink)", letterSpacing: "-0.04em" }}>70%</div>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--fg-on-dark2)", fontWeight: 500, margin: "14px 0 0" }}>
              of professional speakers are men. That's exactly the gap we're here to close. One keynote, one assembly, one training, one student, one adult. At a time.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ---------- STAY IN THE ROOM (newsletter) ---------- */
const NEWSLETTER_URL = "https://webforms.pipedrive.com/f/73Jq23GyM550x1HvCG3KMmddPksYnyYjlpDks1UPBY442WcNIYJxi2QkOTDe1XN8KD";
const Newsletter = () => {
  return (
    <section className="section" style={{ background: "var(--pink)", color: "var(--ink)", paddingTop: 80, paddingBottom: 80,
      borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }}>
      <div className="wrap grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <Reveal><Kicker color="var(--ink)" slash="var(--white)" style={{ marginBottom: 16 }}>Stay in the room</Kicker></Reveal>
          <Reveal delay={1}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
              letterSpacing: "-0.03em", fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 0.92, margin: 0 }}>
              Notes from the <span style={{ background: "var(--white)", padding: "0 0.1em", borderRadius: 4 }}>Front Row.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={2}>
          <div>
            <p style={{ fontSize: 18, lineHeight: 1.5, fontWeight: 600, margin: "0 0 18px", maxWidth: 440 }}>
              Real talk for adults who refuse to stop growing. Reframe, reflect, and catch where I am next.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="ink" shape="cutout" size="lg" color="var(--white)" onClick={openUrl(NEWSLETTER_URL)}>
                Sign up now
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ---------- BOOK ERIN (CTA) ---------- */
const BookCTA = () => (
  <section className="section grain" style={{ background: "var(--ink)", color: "var(--white)", position: "relative", overflow: "hidden", textAlign: "center" }}>
    <div className="spotlight" style={{ opacity: 0.7 }}></div>
    <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
      <Reveal><Kicker color="rgba(255,255,255,0.78)" slash="var(--lime)" style={{ marginBottom: 24, justifyContent: "center" }}>Let's work together</Kicker></Reveal>
      <Reveal delay={1}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "-0.04em", fontSize: "clamp(48px, 9vw, 128px)", lineHeight: 0.86, margin: "0 0 28px" }}>
          Ready to <HL color="var(--pink)">shift</HL><br/>the room?
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p style={{ fontSize: 21, lineHeight: 1.5, color: "var(--fg-on-dark2)", fontWeight: 500, maxWidth: 560, margin: "0 auto 36px" }}>
          Schools, conferences, staff trainings.
        </p>
      </Reveal>
      <Reveal delay={3}>
        <Button variant="pink" shape="blob" size="lg" onClick={openUrl(CAL_URL)}>Schedule your free call now →</Button>
      </Reveal>
    </div>
  </section>
);

/* ---------- FOOTER ---------- */
const Footer = () => (
  <footer style={{ background: "#0f0d0c", color: "var(--white)", padding: "56px 40px 40px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: 26 }}>
            Erin <span style={{ color: "var(--pink)" }}>Pompa</span>
          </div>
          <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 23, color: "var(--lime)", marginTop: 2 }}>the shift starts here.</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {[{ n: "instagram", h: "https://www.instagram.com/erinpspeaks/" }, { n: "linkedin", h: "https://www.linkedin.com/in/erinpompa/" }, { n: "youtube", h: "https://www.youtube.com/@ErinPompa-gg3ds" }].map(s => (
          <a key={s.h} href={s.h} target="_blank" rel="noopener" style={{ width: 46, height: 46, borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.25)", display: "grid", placeItems: "center", textDecoration: "none", color: "var(--white)" }}><SocialIcon name={s.n} size={19} /></a>
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

Object.assign(window, { Nav, Hero, Logos, Reel, Reviews, WhoSheServes, Banner, BookTeaser, Schools, Newsletter, BookCTA, Footer });
