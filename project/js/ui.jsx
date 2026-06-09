/* =====================================================================
   UI PRIMITIVES — Erin Pompa homepage (dark, performer energy)
   Exported to window at bottom for the other babel files.
   ===================================================================== */

const Icon = ({ name, size = 20, color = "currentColor", style = {} }) => (
  <i data-lucide={name} style={{ width: size, height: size, color, display: "inline-flex", ...style }}></i>
);

// Re-run lucide whenever icons mount
const useLucide = (dep) => {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [dep]);
};

// // SECTION LABEL — small all-caps with the slash prefix
const Kicker = ({ children, color, slash = "var(--pink)", style = {} }) => (
  <div className="kicker" style={{ color: color || "inherit", ...style }}>
    <span className="slash" style={{ color: slash }}>//</span>{children}
  </div>
);

// Highlighter swipe behind a single word
const HL = ({ children, color = "var(--lime)" }) => (
  <span style={{
    backgroundImage: `linear-gradient(transparent 10%, ${color} 10%, ${color} 84%, transparent 84%)`,
    color: "var(--ink)", padding: "0 0.12em",
    WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone"
  }}>{children}</span>
);

// Outlined accent word (for dark bg — colored text, no fill)
const Pop = ({ children, color = "var(--pink)" }) => (
  <span style={{ color }}>{children}</span>
);

const Script = ({ children, color = "var(--lime)", style = {} }) => (
  <span style={{ fontFamily: "var(--font-script)", fontWeight: 600, color, textTransform: "none", ...style }}>{children}</span>
);

// Button — three languages:
//   shape="pill"   (default rounded)  · shape="cutout" (paper-cutout sticker, squared + hard shadow)
//   variant="highlight" (text marked with a highlighter swipe, no box)
// fill variants: pink | lime | white | ink  ·  outline-light | outline-dark
const Button = ({ children, variant = "pink", size = "md", shape = "pill", color, onClick, style = {} }) => {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pad = size === "lg" ? "16px 34px" : size === "sm" ? "10px 20px" : "13px 28px";
  const fs = size === "lg" ? 18 : size === "sm" ? 14 : 16;

  // ---- HIGHLIGHT: highlighter swipe behind the label, no box ----
  if (variant === "highlight") {
    const c = color || "var(--lime)";
    return (
      <button onClick={onClick}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          fontFamily: "var(--font-body)", fontWeight: 800, fontSize: fs, letterSpacing: "0.01em",
          padding: "4px 0", border: "none", background: "transparent", cursor: "pointer",
          display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", ...style
        }}>
        <span style={{
          backgroundImage: `linear-gradient(transparent 14%, ${c} 14%, ${c} ${hover ? 94 : 64}%, transparent ${hover ? 94 : 64}%)`,
          color: "var(--ink)", padding: "1px 0.18em", transition: "background-image .18s cubic-bezier(.2,.8,.2,1)",
          display: "inline-flex", alignItems: "center", gap: 8,
          WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone"
        }}>{children}</span>
      </button>
    );
  }

  const FILL = { pink: hover ? "var(--pink-dark)" : "var(--pink)", lime: hover ? "var(--lime-dark)" : "var(--lime)",
    white: "var(--white)", ink: "var(--ink)" }[variant] || "var(--pink)";
  const fillFg = variant === "ink" ? "var(--white)" : "var(--ink)";

  // ---- CUTOUT: squared paper sticker with a hard offset shadow ----
  if (shape === "cutout") {
    const off = size === "lg" ? 7 : size === "sm" ? 4 : 6;
    const sc = color || "var(--ink)";
    return (
      <button onClick={onClick}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
        onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
        style={{
          fontFamily: "var(--font-body)", fontWeight: 800, fontSize: fs, letterSpacing: "0.01em",
          padding: pad, borderRadius: 6, border: "2.5px solid var(--ink)",
          background: FILL, color: fillFg, cursor: "pointer",
          display: "inline-flex", alignItems: "center", gap: 9, whiteSpace: "nowrap",
          boxShadow: press ? `2px 2px 0 ${sc}` : `${off}px ${off}px 0 ${sc}`,
          transform: press ? `translate(${off - 2}px,${off - 2}px)` : hover ? "translate(-2px,-2px) rotate(-1deg)" : "none",
          transition: "transform .15s cubic-bezier(.2,.8,.2,1), box-shadow .15s, background .15s", ...style
        }}>{children}</button>
    );
  }

  // ---- BLOB: cool misshapen sticker (irregular, hand-cut border radius) ----
  if (shape === "blob") {
    const off = size === "lg" ? 7 : size === "sm" ? 4 : 6;
    const sc = color || "var(--ink)";
    return (
      <button onClick={onClick}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
        onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
        style={{
          fontFamily: "var(--font-body)", fontWeight: 800, fontSize: fs, letterSpacing: "0.01em",
          padding: pad, border: "2.5px solid var(--ink)",
          borderRadius: hover ? "235px 18px 225px 26px / 26px 225px 18px 230px" : "255px 22px 235px 18px / 18px 235px 20px 255px",
          background: FILL, color: fillFg, cursor: "pointer",
          display: "inline-flex", alignItems: "center", gap: 9, whiteSpace: "nowrap",
          boxShadow: press ? `2px 2px 0 ${sc}` : `${off}px ${off}px 0 ${sc}`,
          transform: press ? `translate(${off - 2}px,${off - 2}px)` : hover ? "translate(-2px,-2px) rotate(-1.5deg)" : "none",
          transition: "transform .16s cubic-bezier(.2,.8,.2,1), box-shadow .16s, background .16s, border-radius .25s cubic-bezier(.2,.8,.2,1)", ...style
        }}>{children}</button>
    );
  }

  // ---- PILL (default) ----
  let bg, bd, pfg;
  if (variant === "outline-light") { bg = hover ? "rgba(255,255,255,0.10)" : "transparent"; bd = "rgba(255,255,255,0.55)"; pfg = "var(--white)"; }
  else if (variant === "outline-dark") { bg = hover ? "var(--ink)" : "transparent"; bd = "var(--ink)"; pfg = hover ? "var(--white)" : "var(--ink)"; }
  else { bg = FILL; bd = "transparent"; pfg = fillFg; }
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        fontFamily: "var(--font-body)", fontWeight: 800, fontSize: fs, letterSpacing: "0.01em",
        padding: pad, borderRadius: 999, border: `2px solid ${bd}`,
        background: bg, color: pfg, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 9, whiteSpace: "nowrap",
        transform: press ? "scale(0.96)" : hover ? "translateY(-2px)" : "none",
        transition: "transform .16s cubic-bezier(.2,.8,.2,1), background .16s, border-color .16s", ...style
      }}>{children}</button>
  );
};

// Photo placeholder — stage-shot stand-in
const Photo = ({ label = "Stage photo", ratio = "3 / 4", radius = "var(--radius-lg)", onLight = false, style = {} }) => (
  <div className={"photo" + (onLight ? " on-light" : "")} style={{ aspectRatio: ratio, borderRadius: radius, ...style }}>
    <div className="ph-streak"></div>
    <div className="ph-label">
      <Icon name="camera" size={26} color="rgba(255,255,255,0.5)" />
      {label}
    </div>
  </div>
);

// Reveal-on-scroll wrapper — `in` is React-state-owned so re-renders never strip it
const Reveal = ({ children, delay = 0, as = "div", className = "", style = {}, ...rest }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) { setShown(true); return true; }
      return false;
    };
    if (check()) return;
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    const t = setTimeout(() => setShown(true), 1600); // failsafe — never stay hidden
    return () => { window.removeEventListener("scroll", check); window.removeEventListener("resize", check); clearTimeout(t); };
  }, []);
  const Tag = as;
  const dcls = delay ? ` d${delay}` : "";
  return <Tag ref={ref} className={`reveal${dcls}${shown ? " in" : ""} ${className}`} style={style} {...rest}>{children}</Tag>;
};

// Marquee strip
const Marquee = ({ items, bg = "var(--lime)", color = "var(--ink)" }) => (
  <div className="marquee" style={{ background: bg, overflow: "hidden", padding: "16px 0",
    borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }}>
    <div className="marquee-track">
      {[...items, ...items].map((t, i) => (
        <span key={i} style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "-0.01em", fontSize: 24, color, padding: "0 26px", display: "inline-flex", alignItems: "center", gap: 26 }}>
          {t}<Icon name="asterisk" size={20} color={color === "var(--ink)" ? "var(--pink)" : "var(--ink)"} />
        </span>
      ))}
    </div>
  </div>
);

// Monogram — pink imperfect blob + lime loop + handwritten EP
const Monogram = ({ size = 46 }) => (
  <div style={{ position: "relative", width: size, height: size * 0.92, display: "grid", placeItems: "center", flex: "none" }}>
    <span style={{ position: "absolute", inset: "14%", background: "var(--pink)", borderRadius: "62% 38% 55% 45% / 52% 60% 40% 48%", transform: "rotate(-5deg)" }}></span>
    <span style={{ position: "absolute", inset: 0, border: `${Math.max(2, size * 0.06)}px solid var(--lime)`, borderRadius: "50% 50% 47% 53% / 55% 49% 51% 45%", transform: "rotate(-8deg)" }}></span>
    <span style={{ position: "relative", fontFamily: "var(--font-script)", fontWeight: 700, fontSize: size * 0.66, color: "var(--ink)", lineHeight: 1, transform: "rotate(-3deg)" }}>EP</span>
  </div>
);

const SocialIcon = ({ name, size = 19 }) => {
  const paths = {
    instagram: <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" /></g>,
    linkedin: <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 8h4.5v16H.25V8zm7.25 0h4.32v2.19h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.3c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.9-2.79 3.86V24H7.5V8z" />,
    youtube: <path fill="currentColor" d="M23.5 6.5c-.28-1.05-1.1-1.87-2.15-2.15C19.4 3.9 12 3.9 12 3.9s-7.4 0-9.35.45C1.6 4.63.78 5.45.5 6.5.05 8.45.05 12 .05 12s0 3.55.45 5.5c.28 1.05 1.1 1.87 2.15 2.15 1.95.45 9.35.45 9.35.45s7.4 0 9.35-.45c1.05-.28 1.87-1.1 2.15-2.15.45-1.95.45-5.5.45-5.5s0-3.55-.45-5.5zM9.6 15.5v-7l6.1 3.5-6.1 3.5z" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" style={{ color: "currentColor", display: "block" }}>{paths[name]}</svg>;
};

Object.assign(window, { Icon, useLucide, Kicker, HL, Pop, Script, Button, Photo, Reveal, Marquee, Monogram, SocialIcon });
