/* @ds-bundle: {"format":3,"namespace":"ErinPompaDesignSystem_9ea37d","components":[],"sourceHashes":{"app/app.jsx":"1f054ca9edd1","app/dashboard.jsx":"64690e740310","app/data.jsx":"4eed3bcc40d8","app/flow_assess.jsx":"4bb8ee37fcf8","app/flow_intro.jsx":"601611bb7aea","app/library.jsx":"8a9ad509e0f2","app/ui.jsx":"c776c5dbc83d","app/views.jsx":"4c43b923d6e8","app/workspace.jsx":"56e17bd0d209","ui_kits/website/app.jsx":"12fb402cfe39","ui_kits/website/sections.jsx":"31987eeaee5b","ui_kits/website/ui.jsx":"26e4f35cddb5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ErinPompaDesignSystem_9ea37d = window.ErinPompaDesignSystem_9ea37d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// app/app.jsx
try { (() => {
/* =====================================================================
   APP SHELL — sidebar, topbar, routing, persistence
   ===================================================================== */

// ---- Sidebar -------------------------------------------------------
const NavItem = ({
  item,
  on,
  onClick
}) => {
  const [hover, setHover] = useState(false);
  const bg = on ? "var(--pink)" : hover ? "var(--ink-800)" : "transparent";
  const fg = on ? "var(--ink)" : "var(--fg-on-dark2)";
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      textAlign: "left",
      cursor: "pointer",
      padding: "10px 12px",
      borderRadius: 12,
      border: "none",
      marginBottom: 2,
      background: bg,
      color: fg,
      fontFamily: "var(--font-body)",
      fontWeight: on ? 800 : 600,
      fontSize: 13.5,
      transition: "color .12s"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 18,
    color: fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      lineHeight: 1.2
    }
  }, item.label));
};
function Sidebar({
  view,
  go,
  profile,
  store
}) {
  useIcons();
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      background: "var(--ink)",
      color: "var(--white)",
      display: "flex",
      flexDirection: "column",
      flex: "none",
      height: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 20px 18px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    onDark: true,
    compact: true
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "6px 12px 20px"
    }
  }, NAV.map(item => /*#__PURE__*/React.createElement(React.Fragment, {
    key: item.id
  }, item.divider && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--ink-700)",
      margin: "12px 10px"
    }
  }), /*#__PURE__*/React.createElement(NavItem, {
    item: item,
    on: view.name === item.id,
    onClick: () => go(item.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderTop: "1px solid var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-800)",
      borderRadius: 14,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 15,
    color: "var(--lime)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 11.5,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--lime)"
    }
  }, "Week 4 of 12")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 3 / 12 * 100,
    color: "var(--lime)",
    height: 7
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--fg-on-dark2)",
      marginTop: 9
    }
  }, "Keep going, ", profile.first, ". You're building something real."))));
}

// ---- Topbar --------------------------------------------------------
function Topbar({
  profile,
  go
}) {
  useIcons();
  const initials = ((profile.first?.[0] || "") + (profile.last?.[0] || "")).toUpperCase();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flex: "none",
      background: "var(--white)",
      borderBottom: "1px solid var(--ink-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      maxWidth: "40%"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17,
    color: "var(--ink-300)",
    style: {
      position: "absolute",
      left: 13,
      top: "50%",
      transform: "translateY(-50%)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search resources, workspace\u2026",
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      padding: "9px 14px 9px 38px",
      border: "2px solid var(--ink-100)",
      borderRadius: 999,
      background: "var(--paper)",
      color: "var(--ink)",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      position: "relative",
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 21,
    color: "var(--ink-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--pink)",
      border: "1.5px solid var(--white)"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("settings"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 999,
      background: "var(--violet)",
      border: "2px solid var(--ink)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 14,
      color: "var(--ink)"
    }
  }, initials || "♥"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left",
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 13.5,
      color: "var(--ink)",
      whiteSpace: "nowrap"
    }
  }, profile.first, " ", profile.last), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--ink-500)"
    }
  }, "Speaker")))));
}

// ---- Root App ------------------------------------------------------
function App() {
  const [store, setStore] = useState(loadStore);
  const [view, setView] = useState({
    name: "dashboard",
    resourceId: null,
    sectionId: null
  });
  const mainRef = useRef(null);

  // persist whenever store changes
  useEffect(() => {
    saveStore(store);
  }, [store]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [view, store]);
  const update = useCallback(patch => setStore(s => ({
    ...s,
    ...patch
  })), []);
  const go = useCallback((name, resourceId = null, sectionId = null) => {
    setView({
      name,
      resourceId,
      sectionId
    });
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, []);
  const phase = store.phase || "onboarding";
  const setPhase = p => update({
    phase: p
  });

  // ---- pre-app flow ----
  if (phase === "onboarding") return /*#__PURE__*/React.createElement(Onboarding, {
    onDone: profile => update({
      profile,
      phase: "welcome"
    })
  });
  if (phase === "welcome") return /*#__PURE__*/React.createElement(Welcome, {
    profile: store.profile,
    onStart: () => setPhase("assessment")
  });
  if (phase === "assessment") return /*#__PURE__*/React.createElement(Assessment, {
    onComplete: result => update({
      assessment: result,
      phase: "results"
    })
  });
  if (phase === "results") return /*#__PURE__*/React.createElement(Results, {
    profile: store.profile,
    result: store.assessment,
    onStart: () => {
      update({
        phase: "app"
      });
    }
  });

  // ---- main app ----
  const profile = store.profile || {};
  const result = store.assessment || {
    presentationScore: 0,
    businessScore: 0,
    challenge: "Getting speaking opportunities",
    goal: "Book my first speaking engagement",
    answers: {}
  };
  const reset = () => {
    localStorage.removeItem(STORE_KEY);
    setStore({});
    setView({
      name: "dashboard"
    });
  };
  let content;
  switch (view.name) {
    case "dashboard":
      content = /*#__PURE__*/React.createElement(Dashboard, {
        profile: profile,
        result: result,
        store: store,
        update: update,
        go: go
      });
      break;
    case "roadmap":
      content = /*#__PURE__*/React.createElement(Roadmap, {
        profile: profile,
        result: result,
        store: store,
        go: go
      });
      break;
    case "workspace":
      content = /*#__PURE__*/React.createElement(Workspace, {
        store: store,
        update: update,
        go: go
      });
      break;
    case "progress":
      content = /*#__PURE__*/React.createElement(Progress, {
        profile: profile,
        result: result,
        store: store
      });
      break;
    case "settings":
      content = /*#__PURE__*/React.createElement(Settings, {
        profile: profile,
        update: update,
        onReset: reset
      });
      break;
    case "resource":
      content = /*#__PURE__*/React.createElement(ResourcePage, {
        resourceId: view.resourceId,
        store: store,
        update: update,
        go: go
      });
      break;
    case "library":
      content = /*#__PURE__*/React.createElement(Library, {
        store: store,
        go: go,
        filterNav: null
      });
      break;
    // section nav items -> filtered library
    case "presentations":
    case "opportunities":
    case "outreach":
    case "materials":
    case "foundations":
      content = /*#__PURE__*/React.createElement(Library, {
        store: store,
        go: go,
        filterNav: view.name
      });
      break;
    default:
      content = /*#__PURE__*/React.createElement(Dashboard, {
        profile: profile,
        result: result,
        store: store,
        update: update,
        go: go
      });
  }
  return /*#__PURE__*/React.createElement(StoreCtx.Provider, {
    value: {
      store,
      update
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    go: go,
    profile: profile,
    store: store
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    profile: profile,
    go: go
  }), /*#__PURE__*/React.createElement("main", {
    ref: mainRef,
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "30px 36px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, content)))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/app.jsx", error: String((e && e.message) || e) }); }

// app/dashboard.jsx
try { (() => {
/* =====================================================================
   DASHBOARD — top scores, next best step, daily tracker, weekly review
   ===================================================================== */

function Dashboard({
  profile,
  result,
  store,
  update,
  go
}) {
  useIcons();
  const roadmap = ROADMAP_BY_CHALLENGE[result.challenge] || DEFAULT_ROADMAP;
  const completed = store.completed || {};
  const completedCount = Object.keys(completed).filter(k => completed[k]).length;
  const nextId = roadmap.find(id => !completed[id]) || roadmap[0];
  const nextRes = findResource(nextId);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: `${profile.city ? profile.city + ", " + profile.state + " · " : ""}Coaching Week 4 of 12`,
    title: `Welcome back, ${profile.first}`,
    sub: "Here's your business at a glance \u2014 and the one thing to do next.",
    right: /*#__PURE__*/React.createElement(Button, {
      variant: "lime",
      icon: "zap",
      onClick: () => go("roadmap")
    }, "My Roadmap")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1.1fr) repeat(3, 1fr)",
      gap: 16,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    value: result.presentationScore,
    color: "var(--violet)",
    size: 78,
    stroke: 9
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 13.5,
      color: "var(--ink)"
    }
  }, "Presentation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--ink-500)"
    }
  }, "Readiness"))), /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    value: result.businessScore,
    color: "var(--pink)",
    size: 78,
    stroke: 9
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 13.5,
      color: "var(--ink)"
    }
  }, "Business"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--ink-500)"
    }
  }, "Readiness"))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "calendar-days",
    value: "4",
    label: "Coaching week",
    color: "var(--sky)"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "circle-check-big",
    value: completedCount,
    label: "Resources done",
    color: "var(--lime-dark)"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 12.5,
      color: "var(--ink-500)",
      marginBottom: 9
    }
  }, "Roadmap progress"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: completedCount / Math.max(roadmap.length, 4) * 100,
    showPct: true,
    color: "var(--pink)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 22,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink)",
      padding: "22px 26px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 20,
    color: "var(--lime)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--white)"
    }
  }, "My Next Best Step")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    bg: "var(--pink-soft)",
    fg: "var(--coral-dark)",
    border: "var(--pink)",
    style: {
      marginBottom: 14
    }
  }, "Recommended"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 30,
      letterSpacing: "-.02em",
      color: "var(--ink)",
      margin: "0 0 12px",
      lineHeight: 1.05
    }
  }, nextRes ? nextRes.title : roadmapStepLabel(nextId)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      background: "var(--paper-2)",
      borderRadius: 14,
      padding: "14px 16px",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lightbulb",
    size: 18,
    color: "var(--violet-dark)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "var(--ink)",
      margin: 0,
      lineHeight: 1.5
    }
  }, "You told us ", /*#__PURE__*/React.createElement("strong", null, result.challenge.toLowerCase()), " is one of your biggest challenges. This is the fastest way to move that number.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    iconRight: "arrow-right",
    onClick: () => nextRes ? go("resource", nextId) : go("roadmap")
  }, "Start Resource"))), /*#__PURE__*/React.createElement(Card, {
    pad: 26,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--violet-dark)",
    style: {
      marginBottom: 14
    }
  }, "This Week"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      flex: 1
    }
  }, ASSIGNMENTS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.title,
    onClick: () => go("resource", a.resource),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: "var(--lime-soft)",
      display: "grid",
      placeItems: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "square-check-big",
    size: 18,
    color: "var(--lime-dark)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--ink)"
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-500)"
    }
  }, a.due)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--ink-300)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 18,
      borderTop: "1px solid var(--ink-100)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    full: true,
    icon: "calendar",
    onClick: () => go("roadmap")
  }, "View coaching journey")))), /*#__PURE__*/React.createElement(DailyTracker, {
    store: store,
    update: update
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(WeeklyReview, {
    store: store,
    update: update
  })));
}

// ---- Daily Activity Tracker ---------------------------------------
function DailyTracker({
  store,
  update
}) {
  const today = new Date().getDay(); // 0 Sun .. 6 Sat
  const defaultDay = today >= 1 && today <= 5 ? DAYS[today - 1] : "Mon";
  const [day, setDay] = useState(defaultDay);
  const daily = store.daily || {};
  const dayData = daily[day] || {};
  const [draft, setDraft] = useState(dayData);
  useEffect(() => {
    setDraft(daily[day] || {});
  }, [day]);
  const [saved, setSaved] = useState(false);
  const setVal = (id, v) => {
    setDraft(d => ({
      ...d,
      [id]: v
    }));
    setSaved(false);
  };
  const save = () => {
    update({
      daily: {
        ...daily,
        [day]: draft
      }
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };
  return /*#__PURE__*/React.createElement(Card, {
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: "var(--sky-soft)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 20,
    color: "var(--sky-dark)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--ink)",
      margin: 0,
      letterSpacing: "-.01em"
    }
  }, "Daily Activity Tracker"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-500)"
    }
  }, "Small daily reps build a booked calendar."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, DAYS.map(d => {
    const hasData = daily[d] && Object.values(daily[d]).some(v => v);
    const on = d === day;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: () => setDay(d),
      style: {
        position: "relative",
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: 13,
        padding: "8px 14px",
        borderRadius: 10,
        cursor: "pointer",
        border: `2px solid ${on ? "var(--ink)" : "var(--ink-100)"}`,
        background: on ? "var(--ink)" : "var(--white)",
        color: on ? "var(--white)" : "var(--ink)"
      }
    }, d, hasData && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -3,
        right: -3,
        width: 9,
        height: 9,
        borderRadius: 999,
        background: "var(--lime)",
        border: "1.5px solid var(--white)"
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 13
    }
  }, DAILY_METRICS.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      background: "var(--paper-2)",
      borderRadius: 13,
      padding: "13px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 16,
    color: "var(--ink-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12.5,
      color: "var(--ink)"
    }
  }, m.label)), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: draft[m.id] || "",
    onChange: e => setVal(m.id, e.target.value),
    placeholder: "0",
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      padding: "6px 10px",
      border: "2px solid var(--ink-100)",
      borderRadius: 9,
      background: "var(--white)",
      color: "var(--ink)",
      outline: "none"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "md",
    icon: saved ? "check" : "save",
    onClick: save
  }, saved ? "Saved!" : "Save Daily Activity"), saved && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Caveat', cursive",
      fontSize: 22,
      color: "var(--lime-dark)",
      fontWeight: 700
    }
  }, "go hard for you!")));
}

// ---- Weekly Review -------------------------------------------------
function WeeklyReview({
  store,
  update
}) {
  const wk = store.weekly || {};
  const [draft, setDraft] = useState(wk);
  const [saved, setSaved] = useState(false);
  const setVal = (id, v) => {
    setDraft(d => ({
      ...d,
      [id]: v
    }));
    setSaved(false);
  };
  const save = () => {
    update({
      weekly: draft
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };
  useIcons();
  return /*#__PURE__*/React.createElement(Card, {
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: "var(--yellow-soft)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard-check",
    size: 20,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--ink)",
      margin: 0,
      letterSpacing: "-.01em"
    }
  }, "Weekly Review"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-500)"
    }
  }, "Every Friday \u2014 name your win, name your block."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 13,
      marginBottom: 14
    }
  }, WEEKLY_METRICS.filter(m => m.type !== "text").map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12.5,
      color: "var(--ink)",
      marginBottom: 6
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, m.type === "money" && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--ink-500)",
      fontSize: 16
    }
  }, "$"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: draft[m.id] || "",
    onChange: e => setVal(m.id, e.target.value),
    placeholder: "0",
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      padding: m.type === "money" ? "10px 12px 10px 24px" : "10px 12px",
      border: "2px solid var(--ink-100)",
      borderRadius: 11,
      background: "var(--paper-2)",
      color: "var(--ink)",
      outline: "none"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 13,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(TextArea, {
    label: "Biggest win",
    rows: 2,
    value: draft.win,
    onChange: v => setVal("win", v),
    placeholder: "What worked? Celebrate it."
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "Biggest challenge",
    rows: 2,
    value: draft.challenge,
    onChange: v => setVal("challenge", v),
    placeholder: "What got in the way?"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "md",
    icon: saved ? "check" : "save",
    onClick: save
  }, saved ? "Saved!" : "Save Weekly Review"));
}
Object.assign(window, {
  Dashboard,
  DailyTracker,
  WeeklyReview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/dashboard.jsx", error: String((e && e.message) || e) }); }

// app/data.jsx
try { (() => {
/* =====================================================================
   DATA — TruthSpeaks 365 Speaker Success Hub
   All static content: assessment, nav, resource library, workspace, roadmap.
   ===================================================================== */

// ---- Assessment ----------------------------------------------------
const ASSESS_OPTIONS = [{
  key: "A",
  label: "I need significant help",
  score: 1,
  color: "var(--coral)"
}, {
  key: "B",
  label: "I am developing this skill",
  score: 2,
  color: "var(--yellow)"
}, {
  key: "C",
  label: "I am confident in this area",
  score: 3,
  color: "var(--lime)"
}];
const PRESENTATION_Q = [{
  id: "engage",
  label: "Audience Engagement",
  hint: "Keeping a room leaning in, start to finish."
}, {
  id: "movement",
  label: "Movement & Reflection Activities",
  hint: "Getting people out of their seats and into the work."
}, {
  id: "emotion",
  label: "Emotional Connection",
  hint: "Taking a room on a journey they feel."
}, {
  id: "precall",
  label: "Pre-Event Calls",
  hint: "Aligning with the client before you ever take the stage."
}];
const BUSINESS_Q = [{
  id: "pipeline",
  label: "Speaker Pipeline",
  hint: "A steady list of organizations to pitch."
}, {
  id: "crm",
  label: "CRM Setup",
  hint: "A system that tracks every lead and conversation."
}, {
  id: "cadence",
  label: "Speaker Outreach Cadence",
  hint: "A repeatable rhythm for reaching out."
}, {
  id: "pitch",
  label: "Pitch Email Templates",
  hint: "Emails that actually get replies."
}, {
  id: "onboarding",
  label: "Client Onboarding Workflow",
  hint: "A smooth start once a client says yes."
}, {
  id: "postevent",
  label: "Post-Event Workflow",
  hint: "Turning one event into the next one."
}, {
  id: "deck",
  label: "Slide Deck Creation",
  hint: "Decks that support your story, not steal it."
}, {
  id: "onesheet",
  label: "Speaker One Sheet",
  hint: "The one page that books you."
}, {
  id: "proposal",
  label: "Proposal Creation",
  hint: "Proposals that close at your rate."
}, {
  id: "agreements",
  label: "Speaker Agreements",
  hint: "Contracts that protect you and your fee."
}, {
  id: "reel",
  label: "Speaker Reel",
  hint: "Footage that proves you can hold a room."
}, {
  id: "pricing",
  label: "Pricing",
  hint: "Knowing your number and asking for it."
}, {
  id: "social",
  label: "Social Proof",
  hint: "Testimonials and credibility that sell for you."
}];
const CHALLENGES = ["Getting speaking opportunities", "Staying organized", "Outreach", "Pricing", "Creating professional materials", "Building credibility", "Improving audience engagement"];
const GOALS = ["Book my first speaking engagement", "Book more speaking engagements", "Build my speaker business systems", "Improve audience engagement", "Increase speaking revenue"];

// ---- Left navigation ----------------------------------------------
const NAV = [{
  id: "dashboard",
  label: "Dashboard",
  icon: "layout-dashboard"
}, {
  id: "roadmap",
  label: "My Roadmap",
  icon: "route"
}, {
  id: "presentations",
  label: "Improve My Presentations",
  icon: "mic-vocal",
  section: "S1"
}, {
  id: "opportunities",
  label: "Get More Speaking Opportunities",
  icon: "calendar-search",
  section: "S2"
}, {
  id: "outreach",
  label: "Improve My Outreach",
  icon: "send",
  section: "S3"
}, {
  id: "materials",
  label: "Professional Speaker Materials",
  icon: "folder-open",
  section: "S4"
}, {
  id: "foundations",
  label: "Business Foundations",
  icon: "building-2",
  section: "S5"
}, {
  id: "workspace",
  label: "My Workspace",
  icon: "briefcase",
  divider: true
}, {
  id: "progress",
  label: "My Progress",
  icon: "trending-up"
}, {
  id: "settings",
  label: "Settings",
  icon: "settings"
}];

// ---- Resource library ---------------------------------------------
const RESOURCE_SECTIONS = [{
  id: "S1",
  nav: "presentations",
  title: "Improve My Presentations",
  color: "var(--violet)",
  icon: "mic-vocal",
  blurb: "Build talks that move a room — no talking heads, no reading from slides.",
  resources: [{
    id: "r-engage",
    title: "Audience Engagement Techniques",
    mins: 18,
    tag: "Presentations"
  }, {
    id: "r-movement",
    title: "Movement & Reflection Activities",
    mins: 15,
    tag: "Presentations"
  }, {
    id: "r-emotion",
    title: "Emotional Connection Techniques",
    mins: 20,
    tag: "Presentations"
  }]
}, {
  id: "S2",
  nav: "opportunities",
  title: "Get More Speaking Opportunities",
  color: "var(--pink)",
  icon: "calendar-search",
  blurb: "Build the pipeline that keeps you booked.",
  resources: [{
    id: "r-pipeline",
    title: "Building Your First Speaker Pipeline",
    mins: 25,
    tag: "Pipeline"
  }, {
    id: "r-tools",
    title: "Trello vs Pipedrive Setup",
    mins: 16,
    tag: "Systems"
  }, {
    id: "r-cadence",
    title: "Speaker Outreach Cadence",
    mins: 14,
    tag: "Outreach"
  }]
}, {
  id: "S3",
  nav: "outreach",
  title: "Improve My Outreach",
  color: "var(--sky)",
  icon: "send",
  blurb: "Reach out with a rhythm that gets replies.",
  resources: [{
    id: "r-pitch",
    title: "Pitch Email Templates",
    mins: 12,
    tag: "Outreach"
  }, {
    id: "r-clientonb",
    title: "Client Onboarding Workflow",
    mins: 18,
    tag: "Workflow"
  }, {
    id: "r-postevent",
    title: "Post-Event Workflow",
    mins: 15,
    tag: "Workflow"
  }]
}, {
  id: "S4",
  nav: "materials",
  title: "Professional Speaker Materials",
  color: "var(--coral)",
  icon: "folder-open",
  blurb: "The assets that book you at your rate.",
  resources: [{
    id: "r-deck",
    title: "Creating a Slide Deck",
    mins: 22,
    tag: "Materials"
  }, {
    id: "r-onesheet",
    title: "Building a Speaker One Sheet",
    mins: 20,
    tag: "Materials"
  }, {
    id: "r-proposal",
    title: "Building a Proposal",
    mins: 24,
    tag: "Materials"
  }, {
    id: "r-reel",
    title: "Capturing Speaker Reel Footage",
    mins: 17,
    tag: "Materials"
  }]
}, {
  id: "S5",
  nav: "foundations",
  title: "Business Foundations",
  color: "var(--yellow)",
  icon: "building-2",
  blurb: "The fundamentals that make it a real business.",
  resources: [{
    id: "r-pricing",
    title: "Pricing Overview",
    mins: 19,
    tag: "Foundations"
  }, {
    id: "r-agreements",
    title: "Speaker Agreements Overview",
    mins: 16,
    tag: "Foundations"
  }, {
    id: "r-social",
    title: "Building Social Proof",
    mins: 14,
    tag: "Foundations"
  }]
}];

// flat lookup
const ALL_RESOURCES = RESOURCE_SECTIONS.flatMap(s => s.resources.map(r => ({
  ...r,
  sectionId: s.id,
  sectionTitle: s.title,
  color: s.color
})));
const findResource = id => ALL_RESOURCES.find(r => r.id === id);

// Per-resource page content (worksheet fields tailored per resource where it matters)
const RESOURCE_CONTENT = {
  "r-pipeline": {
    overview: "Your pipeline is the single most important asset in your speaking business. It's the living list of organizations, conferences, and decision-makers you're actively pursuing. No pipeline, no bookings — it's that simple.",
    worksheet: [{
      id: "targets",
      label: "List 10 organizations you'd love to speak for",
      type: "area",
      ph: "One per line — schools, conferences, associations, companies…"
    }, {
      id: "who",
      label: "Who is the decision-maker at your top target?",
      type: "text",
      ph: "Name + role"
    }, {
      id: "why",
      label: "Why are YOU the right speaker for them?",
      type: "area",
      ph: "Tie your story to their audience…"
    }],
    examples: ["A regional women's leadership conference seeking a keynote on resilience.", "A school district booking assembly speakers for grades 6–12.", "A corporate ERG planning a Women's History Month event."],
    reflection: ["What's stopping you from adding 5 names today?", "Which target scares you a little? Start there."],
    action: "Add 10 organizations to your pipeline this week. Just the names. We'll build from there."
  },
  "r-cadence": {
    overview: "Outreach without a cadence is just hoping. A cadence is a repeatable rhythm — touch, wait, follow up, wait, follow up — so no warm lead ever falls through the cracks.",
    worksheet: [{
      id: "rhythm",
      label: "Draft your weekly outreach rhythm",
      type: "area",
      ph: "e.g. Mon: 5 new emails · Wed: follow-ups · Fri: review…"
    }, {
      id: "followups",
      label: "How many follow-ups before you move on?",
      type: "text",
      ph: "3 is a good start"
    }],
    examples: ["Day 1: intro email. Day 4: short follow-up. Day 9: value-add. Day 16: break-up email."],
    reflection: ["Where do you usually give up too early?"],
    action: "Set 3 recurring calendar blocks this week for outreach."
  },
  "r-pitch": {
    overview: "A great pitch email is short, specific, and about THEM. It proves you understand their audience and makes saying yes easy.",
    worksheet: [{
      id: "subject",
      label: "Write a subject line that gets opened",
      type: "text",
      ph: "Speaker for your Women's Leadership Summit?"
    }, {
      id: "body",
      label: "Draft your pitch body (under 120 words)",
      type: "area",
      ph: "Hi [name] — I loved that your event focuses on…"
    }],
    examples: ["Lead with their event, not your bio. One clear ask. One link to your one-sheet."],
    reflection: ["Does your first line mention them or you? Fix it so it's them."],
    action: "Send 3 personalized pitches before Friday."
  },
  "r-onesheet": {
    overview: "Your one sheet is the single page that books you. Photo, signature talk, bio, social proof, and a clear way to reach you. Decision-makers skim — make it skimmable.",
    worksheet: [{
      id: "title",
      label: "Your signature talk title",
      type: "text",
      ph: "Use Your Story to Change the Room"
    }, {
      id: "bio",
      label: "Your 60-word speaker bio",
      type: "area",
      ph: "Write it in third person…"
    }, {
      id: "takeaways",
      label: "3 audience takeaways",
      type: "area",
      ph: "After this talk, your audience will…"
    }],
    examples: ["Headshot top-left, talk title huge, 3 bullet takeaways, 2 testimonials, contact footer."],
    reflection: ["If a planner saw only your one sheet, would they book you?"],
    action: "Draft all three fields above — this becomes your real one sheet in My Workspace."
  },
  "r-pricing": {
    overview: "Pricing is a decision, not a guess. Know your number, know what's included, and ask for it without flinching. Underpricing helps no one — least of all the audiences who need you.",
    worksheet: [{
      id: "rate",
      label: "Your target keynote fee",
      type: "text",
      ph: "$2,500"
    }, {
      id: "includes",
      label: "What's included at that fee?",
      type: "area",
      ph: "Keynote, pre-event call, Q&A, travel terms…"
    }, {
      id: "floor",
      label: "Your walk-away number",
      type: "text",
      ph: "The lowest yes you'll accept"
    }],
    examples: ["Keynote: $3,500 · Half-day workshop: $5,000 · Virtual: $1,500."],
    reflection: ["What story are you telling yourself about what you're 'allowed' to charge?"],
    action: "Commit to one keynote number and say it out loud three times."
  }
};
// fallback content for resources without bespoke copy
const DEFAULT_CONTENT = {
  overview: "A focused, practical resource to move this part of your speaker business forward. Work through it at your own pace — everything you type saves to My Workspace.",
  worksheet: [{
    id: "notes",
    label: "What's your current reality here?",
    type: "area",
    ph: "Be honest — this is just for you."
  }, {
    id: "first",
    label: "What's the very first step you'll take?",
    type: "text",
    ph: "One small, specific action"
  }],
  examples: ["See My Workspace for examples you can adapt to your own voice and story."],
  reflection: ["What would 'done' look like for this?", "What's been getting in your way?"],
  action: "Complete the worksheet above and mark this resource complete."
};
const contentFor = id => RESOURCE_CONTENT[id] || DEFAULT_CONTENT;

// ---- Workspace vault ----------------------------------------------
const WORKSPACE_SECTIONS = [{
  id: "onesheet",
  title: "My One Sheet",
  icon: "file-text",
  color: "var(--pink)",
  fields: [{
    id: "ws_title",
    label: "Signature Talk Title",
    type: "text"
  }, {
    id: "ws_bio",
    label: "Speaker Bio",
    type: "area"
  }, {
    id: "ws_takeaways",
    label: "Audience Takeaways",
    type: "area"
  }]
}, {
  id: "proposal",
  title: "My Proposal",
  icon: "file-signature",
  color: "var(--violet)",
  fields: [{
    id: "pr_scope",
    label: "Engagement Scope",
    type: "area"
  }, {
    id: "pr_invest",
    label: "Investment & Terms",
    type: "area"
  }]
}, {
  id: "pricing",
  title: "My Pricing Workbook",
  icon: "tag",
  color: "var(--yellow)",
  fields: [{
    id: "pw_keynote",
    label: "Keynote Fee",
    type: "text"
  }, {
    id: "pw_workshop",
    label: "Workshop Fee",
    type: "text"
  }, {
    id: "pw_virtual",
    label: "Virtual Fee",
    type: "text"
  }]
}, {
  id: "pipeline",
  title: "My Pipeline",
  icon: "list-checks",
  color: "var(--sky)",
  fields: [{
    id: "pl_targets",
    label: "Target Organizations",
    type: "area"
  }]
}, {
  id: "templates",
  title: "My Outreach Templates",
  icon: "mail",
  color: "var(--coral)",
  fields: [{
    id: "ot_pitch",
    label: "Pitch Email",
    type: "area"
  }, {
    id: "ot_followup",
    label: "Follow-Up Email",
    type: "area"
  }]
}, {
  id: "testimonials",
  title: "My Testimonials",
  icon: "quote",
  color: "var(--lime)",
  fields: [{
    id: "tm_list",
    label: "Collected Testimonials",
    type: "area"
  }]
}, {
  id: "reel",
  title: "My Speaker Reel Notes",
  icon: "video",
  color: "var(--violet)",
  fields: [{
    id: "rl_notes",
    label: "Reel Footage Plan",
    type: "area"
  }]
}, {
  id: "journal",
  title: "My Reflection Journal",
  icon: "notebook-pen",
  color: "var(--pink)",
  fields: [{
    id: "jr_entries",
    label: "Journal Entries",
    type: "area"
  }]
}];

// ---- Daily / weekly trackers --------------------------------------
const DAILY_METRICS = [{
  id: "minutes",
  label: "Minutes on pipeline",
  icon: "timer",
  unit: "min"
}, {
  id: "orgs",
  label: "Organizations researched",
  icon: "search",
  unit: ""
}, {
  id: "emails",
  label: "Outreach emails sent",
  icon: "send",
  unit: ""
}, {
  id: "followups",
  label: "Follow-ups sent",
  icon: "reply",
  unit: ""
}, {
  id: "meetings",
  label: "Meetings booked",
  icon: "calendar-check",
  unit: ""
}, {
  id: "proposals",
  label: "Proposals sent",
  icon: "file-output",
  unit: ""
}, {
  id: "talks",
  label: "Presentations delivered",
  icon: "presentation",
  unit: ""
}];
const WEEKLY_METRICS = [{
  id: "hours",
  label: "Hours spent on pipeline",
  type: "num"
}, {
  id: "meetings",
  label: "Meetings booked",
  type: "num"
}, {
  id: "proposals",
  label: "Proposals sent",
  type: "num"
}, {
  id: "revenue",
  label: "Revenue generated",
  type: "money"
}, {
  id: "win",
  label: "Biggest win",
  type: "text"
}, {
  id: "challenge",
  label: "Biggest challenge",
  type: "text"
}];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// ---- Roadmap (personalized) ---------------------------------------
// maps biggest challenge -> ordered roadmap of resource ids
const ROADMAP_BY_CHALLENGE = {
  "Getting speaking opportunities": ["r-pipeline", "r-cadence", "r-pitch", "r-crm"],
  "Outreach": ["r-cadence", "r-pitch", "r-pipeline", "r-clientonb"],
  "Staying organized": ["r-tools", "r-pipeline", "r-cadence", "r-postevent"],
  "Pricing": ["r-pricing", "r-proposal", "r-agreements", "r-onesheet"],
  "Creating professional materials": ["r-onesheet", "r-deck", "r-proposal", "r-reel"],
  "Building credibility": ["r-social", "r-onesheet", "r-reel", "r-pitch"],
  "Improving audience engagement": ["r-engage", "r-emotion", "r-movement", "r-deck"]
};
const DEFAULT_ROADMAP = ["r-pipeline", "r-cadence", "r-pitch", "r-crm"];
// some roadmap ids (e.g. r-crm) may not be in library; give them labels
const ROADMAP_LABELS = {
  "r-crm": "CRM Setup",
  "r-pipeline": "Building Your First Speaker Pipeline",
  "r-cadence": "Speaker Outreach Cadence",
  "r-pitch": "Pitch Email Templates"
};
const roadmapStepLabel = id => findResource(id) ? findResource(id).title : ROADMAP_LABELS[id] || id;

// ---- Coaching journey ---------------------------------------------
const TOTAL_WEEKS = 12;
const COACHING_WEEKS = [{
  wk: 1,
  title: "Find Your Story",
  done: true
}, {
  wk: 2,
  title: "Shape the Signature Talk",
  done: true
}, {
  wk: 3,
  title: "Audience Engagement",
  done: true
}, {
  wk: 4,
  title: "Build Your Pipeline",
  done: false,
  current: true
}, {
  wk: 5,
  title: "Outreach Cadence",
  done: false
}, {
  wk: 6,
  title: "Pitch & Follow-Up",
  done: false
}, {
  wk: 7,
  title: "Your One Sheet",
  done: false
}, {
  wk: 8,
  title: "Proposals & Pricing",
  done: false
}, {
  wk: 9,
  title: "Speaker Reel",
  done: false
}, {
  wk: 10,
  title: "Social Proof",
  done: false
}, {
  wk: 11,
  title: "Systems & CRM",
  done: false
}, {
  wk: 12,
  title: "Launch & Sustain",
  done: false
}];
const UPCOMING_CALLS = [{
  title: "Group Coaching: Pipeline Lab",
  when: "Tue, Jun 9 · 1:00 PM CT",
  icon: "users"
}, {
  title: "1:1 with Erin",
  when: "Thu, Jun 11 · 10:30 AM CT",
  icon: "user"
}];
const ASSIGNMENTS = [{
  title: "Add 10 orgs to your pipeline",
  due: "Due Fri",
  resource: "r-pipeline"
}, {
  title: "Draft your outreach cadence",
  due: "Due Mon",
  resource: "r-cadence"
}];
Object.assign(window, {
  ASSESS_OPTIONS,
  PRESENTATION_Q,
  BUSINESS_Q,
  CHALLENGES,
  GOALS,
  NAV,
  RESOURCE_SECTIONS,
  ALL_RESOURCES,
  findResource,
  contentFor,
  WORKSPACE_SECTIONS,
  DAILY_METRICS,
  WEEKLY_METRICS,
  DAYS,
  ROADMAP_BY_CHALLENGE,
  DEFAULT_ROADMAP,
  roadmapStepLabel,
  TOTAL_WEEKS,
  COACHING_WEEKS,
  UPCOMING_CALLS,
  ASSIGNMENTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/data.jsx", error: String((e && e.message) || e) }); }

// app/flow_assess.jsx
try { (() => {
/* =====================================================================
   FLOW — Assessment + Results
   ===================================================================== */

function Assessment({
  onComplete
}) {
  // build ordered pages: intro of two groups handled as one long scored list split into screens
  const groups = [{
    key: "presentation",
    title: "Your Presentations",
    sub: "How a room experiences you on stage.",
    color: "var(--violet)",
    qs: PRESENTATION_Q
  }, {
    key: "business",
    title: "Your Speaker Business",
    sub: "The systems that get you booked and paid.",
    color: "var(--pink)",
    qs: BUSINESS_Q
  }];
  // steps: 0..(groups) for scored groups, then final challenge, then final goal
  const steps = [...groups.map(g => ({
    type: "group",
    g
  })), {
    type: "challenge"
  }, {
    type: "goal"
  }];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({}); // id -> score key
  const [challenge, setChallenge] = useState(null);
  const [goal, setGoal] = useState(null);
  const cur = steps[step];
  useIcons();
  const groupComplete = cur.type === "group" && cur.g.qs.every(q => answers[q.id]);
  const canNext = cur.type === "group" ? groupComplete : cur.type === "challenge" ? !!challenge : !!goal;
  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      document.getElementById("assess-scroll")?.scrollTo(0, 0);
    } else {
      // compute scores
      const avg = qs => {
        const vals = qs.map(q => ASSESS_OPTIONS.find(o => o.key === answers[q.id])?.score || 0);
        return Math.round(vals.reduce((a, b) => a + b, 0) / (qs.length * 3) * 100);
      };
      onComplete({
        answers,
        challenge,
        goal,
        presentationScore: avg(PRESENTATION_Q),
        businessScore: avg(BUSINESS_Q)
      });
    }
  };
  const back = () => step > 0 && setStep(step - 1);
  return /*#__PURE__*/React.createElement("div", {
    id: "assess-scroll",
    style: {
      minHeight: "100%",
      background: "var(--paper)",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 5,
      background: "rgba(251,247,240,.9)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--ink-100)",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    compact: true
  }), /*#__PURE__*/React.createElement(StepDots, {
    total: steps.length,
    active: step
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, step + 1, " / ", steps.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 740,
      margin: "0 auto",
      padding: "36px 24px 120px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: cur.type === "group" ? cur.g.color : "var(--violet-dark)",
    style: {
      marginBottom: 12
    }
  }, "Speaker Success Assessment"), cur.type === "group" && /*#__PURE__*/React.createElement(GroupStep, {
    g: cur.g,
    answers: answers,
    setAnswers: setAnswers
  }), cur.type === "challenge" && /*#__PURE__*/React.createElement(ChoiceStep, {
    title: "What is your biggest challenge right now?",
    sub: "Pick the one that's loudest.",
    options: CHALLENGES,
    value: challenge,
    onChange: setChallenge,
    color: "var(--coral)"
  }), cur.type === "goal" && /*#__PURE__*/React.createElement(ChoiceStep, {
    title: "What is your primary goal for the next 90 days?",
    sub: "We'll build your roadmap around it.",
    options: GOALS,
    value: goal,
    onChange: setGoal,
    color: "var(--lime)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "var(--white)",
      borderTop: "1px solid var(--ink-100)",
      padding: "14px 24px",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 740,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: back,
    disabled: step === 0,
    icon: "arrow-left"
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: next,
    disabled: !canNext,
    iconRight: step === steps.length - 1 ? "sparkles" : "arrow-right"
  }, step === steps.length - 1 ? "See My Results" : "Continue"))));
}
const GroupStep = ({
  g,
  answers,
  setAnswers
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 32,
    letterSpacing: "-.02em",
    color: "var(--ink)",
    margin: "0 0 6px"
  }
}, g.title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 16,
    color: "var(--ink-500)",
    margin: "0 0 26px"
  }
}, g.sub), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  }
}, g.qs.map(q => /*#__PURE__*/React.createElement("div", {
  key: q.id,
  style: {
    background: "var(--white)",
    border: "1px solid var(--ink-100)",
    borderRadius: 18,
    padding: "18px 20px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 18,
    color: "var(--ink)",
    letterSpacing: "-.01em"
  }
}, q.label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "var(--ink-500)",
    margin: "3px 0 14px"
  }
}, q.hint), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 9
  }
}, ASSESS_OPTIONS.map(o => {
  const on = answers[q.id] === o.key;
  return /*#__PURE__*/React.createElement("button", {
    key: o.key,
    onClick: () => setAnswers(s => ({
      ...s,
      [q.id]: o.key
    })),
    style: {
      textAlign: "left",
      cursor: "pointer",
      borderRadius: 13,
      padding: "12px 13px",
      border: `2px solid ${on ? "var(--ink)" : "var(--ink-100)"}`,
      background: on ? o.color : "var(--white)",
      boxShadow: on ? "3px 3px 0 var(--ink)" : "none",
      transition: "all .13s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 15,
      color: "var(--ink)",
      marginBottom: 4
    }
  }, o.key), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: on ? 700 : 500,
      fontSize: 12.5,
      color: "var(--ink)",
      lineHeight: 1.25
    }
  }, o.label));
}))))));
const ChoiceStep = ({
  title,
  sub,
  options,
  value,
  onChange,
  color
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 32,
    letterSpacing: "-.02em",
    color: "var(--ink)",
    margin: "0 0 6px",
    lineHeight: 1.08
  }
}, title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 16,
    color: "var(--ink-500)",
    margin: "0 0 24px"
  }
}, sub), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 11
  }
}, options.map(o => {
  const on = value === o;
  return /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => onChange(o),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      textAlign: "left",
      cursor: "pointer",
      borderRadius: 15,
      padding: "16px 18px",
      border: `2px solid ${on ? "var(--ink)" : "var(--ink-100)"}`,
      background: on ? color : "var(--white)",
      boxShadow: on ? "4px 4px 0 var(--ink)" : "none",
      transition: "all .13s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 999,
      border: `2px solid var(--ink)`,
      background: on ? "var(--ink)" : "transparent",
      display: "grid",
      placeItems: "center",
      flex: "none"
    }
  }, on && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    color: "var(--white)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 16.5,
      color: "var(--ink)"
    }
  }, o));
})));

// ---- Results -------------------------------------------------------
function Results({
  profile,
  result,
  onStart
}) {
  useIcons();
  const roadmap = ROADMAP_BY_CHALLENGE[result.challenge] || DEFAULT_ROADMAP;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--paper)",
      overflowY: "auto",
      padding: "36px 24px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--violet-dark)",
    style: {
      marginBottom: 12
    }
  }, "Your Assessment Results"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 42,
      letterSpacing: "-.02em",
      color: "var(--ink)",
      margin: 0,
      lineHeight: 1.04
    }
  }, "Here's where you're ", /*#__PURE__*/React.createElement(HL, {
    color: "var(--lime)"
  }, "starting"), ", ", profile.first, "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16.5,
      color: "var(--ink-500)",
      margin: "12px auto 0",
      maxWidth: 560
    }
  }, "This isn't about the grade. It's a map to guide your next step. Let's get to work and share your message.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 28,
    style: {
      textAlign: "center"
    },
    accent: "var(--violet)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    value: result.presentationScore,
    color: "var(--violet)",
    size: 140,
    big: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 19,
      color: "var(--ink)"
    }
  }, "Presentation Readiness"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--ink-500)",
      marginTop: 4
    }
  }, "How ready you are to move a room.")), /*#__PURE__*/React.createElement(Card, {
    pad: 28,
    style: {
      textAlign: "center"
    },
    accent: "var(--pink)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    value: result.businessScore,
    color: "var(--pink)",
    size: 140,
    big: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 19,
      color: "var(--ink)"
    }
  }, "Business Readiness"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--ink-500)",
      marginTop: 4
    }
  }, "How ready your business is to book you."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 22
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--coral-dark)",
    style: {
      marginBottom: 8
    }
  }, "Biggest Challenge"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      color: "var(--ink)",
      letterSpacing: "-.01em"
    }
  }, result.challenge)), /*#__PURE__*/React.createElement(Card, {
    pad: 22
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--lime-dark)",
    style: {
      marginBottom: 8
    }
  }, "90-Day Goal"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      color: "var(--ink)",
      letterSpacing: "-.01em"
    }
  }, result.goal))), /*#__PURE__*/React.createElement(Card, {
    pad: 30,
    style: {
      background: "var(--ink)",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--lime)",
    style: {
      marginBottom: 18
    }
  }, "Your Personalized Roadmap"), /*#__PURE__*/React.createElement(RoadmapList, {
    steps: roadmap
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    onClick: onStart
  }, "Start My Roadmap")))));
}
const RoadmapList = ({
  steps
}) => {
  const labels = ["You Are Here", "Next", "Then", "Then"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, steps.slice(0, 4).map((id, i) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 999,
      flex: "none",
      display: "grid",
      placeItems: "center",
      background: i === 0 ? "var(--lime)" : "transparent",
      border: `2px solid ${i === 0 ? "var(--ink)" : "var(--fg-on-dark2)"}`,
      color: i === 0 ? "var(--ink)" : "var(--fg-on-dark2)",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 15
    }
  }, i === 0 ? /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18,
    color: "var(--ink)"
  }) : i + 1), i < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      flex: 1,
      minHeight: 22,
      background: "var(--ink-700)",
      margin: "4px 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < 3 ? 22 : 0,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: i === 0 ? "var(--lime)" : "var(--fg-on-dark2)",
      marginBottom: 3
    }
  }, labels[i]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--white)",
      letterSpacing: "-.01em"
    }
  }, roadmapStepLabel(id))))));
};
Object.assign(window, {
  Assessment,
  GroupStep,
  ChoiceStep,
  Results,
  RoadmapList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/flow_assess.jsx", error: String((e && e.message) || e) }); }

// app/flow_intro.jsx
try { (() => {
/* =====================================================================
   FLOW — Onboarding · Welcome · Assessment · Results
   ===================================================================== */

// progress dots
const StepDots = ({
  total,
  active,
  color = "var(--pink)"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 7
  }
}, Array.from({
  length: total
}).map((_, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    width: i === active ? 26 : 8,
    height: 8,
    borderRadius: 999,
    background: i <= active ? color : "var(--ink-100)",
    transition: "all .3s"
  }
})));

// ---- Onboarding (collect profile) ---------------------------------
function Onboarding({
  onDone
}) {
  const [f, setF] = useState({
    first: "",
    last: "",
    email: "",
    city: "",
    state: ""
  });
  const set = k => v => setF(s => ({
    ...s,
    [k]: v
  }));
  const ok = f.first && f.last && f.email;
  useIcons();
  return /*#__PURE__*/React.createElement(AuthShell, null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--violet-dark)",
    style: {
      marginBottom: 14
    }
  }, "Welcome to the Hub"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 38,
      letterSpacing: "-.02em",
      color: "var(--ink)",
      margin: "0 0 8px",
      lineHeight: 1.04
    }
  }, "Let's set up your ", /*#__PURE__*/React.createElement(HL, {
    color: "var(--lime)"
  }, "space"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--ink-500)",
      margin: "0 0 26px"
    }
  }, "This is your private speaker business workspace. Start with the basics."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name",
    value: f.first,
    onChange: set("first"),
    placeholder: "Jane"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Last name",
    value: f.last,
    onChange: set("last"),
    placeholder: "Rivera"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    value: f.email,
    onChange: set("email"),
    placeholder: "jane@email.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "City",
    value: f.city,
    onChange: set("city"),
    placeholder: "Austin"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "State",
    value: f.state,
    onChange: set("state"),
    placeholder: "TX"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true,
    disabled: !ok,
    iconRight: "arrow-right",
    onClick: () => onDone(f)
  }, "Create my Hub"), !ok && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-500)",
      textAlign: "center",
      marginTop: 12
    }
  }, "Name and email get you started.")));
}

// shell for full-screen flow steps
const AuthShell = ({
  children,
  wide
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    minHeight: "100%",
    background: "var(--paper)",
    display: "grid",
    placeItems: "center",
    padding: "40px 20px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    maxWidth: wide ? 760 : 520
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 26
  }
}, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--white)",
    border: "1px solid var(--ink-100)",
    borderRadius: 26,
    padding: "40px 40px 36px",
    boxShadow: "0 30px 70px rgba(22,20,19,.12)"
  }
}, children)));

// ---- Welcome -------------------------------------------------------
function Welcome({
  profile,
  onStart
}) {
  useIcons();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--ink)",
      color: "var(--white)",
      display: "grid",
      placeItems: "center",
      padding: "40px 20px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "12%",
      left: "10%",
      transform: "rotate(-12deg)",
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    text: "you belong here",
    bg: "var(--lime)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "14%",
      right: "9%",
      transform: "rotate(8deg)",
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    text: "representation matters",
    bg: "var(--pink)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 660,
      textAlign: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    onDark: true
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--lime)",
    style: {
      marginBottom: 18
    }
  }, "We're so glad you're here"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 56,
      letterSpacing: "-.03em",
      lineHeight: 1,
      margin: "0 0 24px",
      textTransform: "uppercase"
    }
  }, "Hello, ", profile.first || "friend"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 19,
      lineHeight: 1.6,
      color: "var(--fg-on-dark2)",
      margin: "0 auto 18px",
      maxWidth: 560
    }
  }, "We are so proud of you for using your voice, your story, and your message to impact the world."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.6,
      color: "var(--fg-on-dark2)",
      margin: "0 auto 18px",
      maxWidth: 560
    }
  }, "Did you know the professional speaking industry remains heavily male-dominated? No matter how challenging this journey may feel, your voice matters, your story matters, and representation matters."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "var(--white)",
      margin: "0 0 36px",
      letterSpacing: "-.01em"
    }
  }, "We believe in you. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lime)"
    }
  }, "Let's get to work.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    onClick: onStart
  }, "Start My Assessment")));
}
const Sticker = ({
  text,
  bg
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "'Caveat', cursive",
    fontWeight: 700,
    fontSize: 26,
    background: bg,
    color: "var(--ink)",
    border: "2px solid var(--ink)",
    borderRadius: 999,
    padding: "5px 20px",
    boxShadow: "3px 3px 0 rgba(0,0,0,.35)",
    display: "inline-block",
    whiteSpace: "nowrap"
  }
}, text);
Object.assign(window, {
  StepDots,
  Onboarding,
  AuthShell,
  Welcome,
  Sticker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/flow_intro.jsx", error: String((e && e.message) || e) }); }

// app/library.jsx
try { (() => {
/* =====================================================================
   LIBRARY — Resource sections, cards, and the interactive resource page
   ===================================================================== */

function Library({
  store,
  go,
  filterNav
}) {
  useIcons();
  const completed = store.completed || {};
  const sections = filterNav ? RESOURCE_SECTIONS.filter(s => s.nav === filterNav) : RESOURCE_SECTIONS;
  const single = sections.length === 1 ? sections[0] : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: single ? "Resource Library" : "Resource Library",
    title: single ? single.title : "Resource Library",
    sub: single ? single.blurb : "Everything you need to build your speaking business — work through it at your own pace."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 34
    }
  }, sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id
  }, !single && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: s.color,
      display: "grid",
      placeItems: "center",
      border: "2px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 21,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "-.01em",
      color: "var(--ink)",
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "var(--ink-500)"
    }
  }, s.blurb))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: 16
    }
  }, s.resources.map(r => /*#__PURE__*/React.createElement(ResourceCard, {
    key: r.id,
    r: r,
    color: s.color,
    done: !!completed[r.id],
    onOpen: () => go("resource", r.id)
  })))))));
}
const ResourceCard = ({
  r,
  color,
  done,
  onOpen
}) => /*#__PURE__*/React.createElement(Card, {
  hover: true,
  pad: 0,
  onClick: onOpen,
  style: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 8,
    background: color
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 20,
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement(Tag, {
  bg: "var(--paper-2)",
  fg: "var(--ink-500)"
}, r.tag), done ? /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 11.5,
    color: "var(--lime-dark)"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "circle-check-big",
  size: 15,
  color: "var(--lime-dark)"
}), " Done") : /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 12,
    color: "var(--ink-300)"
  }
}, r.mins, " min")), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 19,
    letterSpacing: "-.01em",
    color: "var(--ink)",
    margin: "0 0 16px",
    lineHeight: 1.12,
    flex: 1
  }
}, r.title), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 13.5,
    color: "var(--ink)"
  }
}, done ? "Review" : "Start", " ", /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 15
}))));

// ---- Resource page (interactive) ----------------------------------
function ResourcePage({
  resourceId,
  store,
  update,
  go
}) {
  useIcons();
  const r = findResource(resourceId);
  const content = contentFor(resourceId);
  const wsKey = `res_${resourceId}`;
  const data = store[wsKey] || {};
  const [draft, setDraft] = useState(data);
  const [saved, setSaved] = useState(false);
  const done = !!(store.completed || {})[resourceId];
  useEffect(() => {
    setDraft(store[wsKey] || {});
  }, [resourceId]);
  if (!r) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40
    }
  }, "Resource not found. ", /*#__PURE__*/React.createElement("a", {
    onClick: () => go("dashboard"),
    style: {
      color: "var(--link)",
      cursor: "pointer"
    }
  }, "Back to dashboard"));
  const setVal = (id, v) => {
    setDraft(d => ({
      ...d,
      [id]: v
    }));
    setSaved(false);
  };
  const save = () => {
    update({
      [wsKey]: draft
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };
  const toggleDone = () => {
    const c = {
      ...(store.completed || {})
    };
    c[resourceId] = !c[resourceId];
    update({
      [wsKey]: draft,
      completed: c
    });
  };
  // self-assessment from earlier answers
  const selfMap = {
    "r-pipeline": "pipeline",
    "r-cadence": "cadence",
    "r-pitch": "pitch",
    "r-onesheet": "onesheet",
    "r-pricing": "pricing"
  };
  const selfId = selfMap[resourceId];
  const selfAnswer = selfId && store.assessment ? ASSESS_OPTIONS.find(o => o.key === store.assessment.answers[selfId]) : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("library", null, r.sectionId),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--ink-500)",
      marginBottom: 18,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Back to ", r.sectionTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 20,
      marginBottom: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    bg: r.color,
    style: {
      marginBottom: 12
    }
  }, r.tag), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 36,
      letterSpacing: "-.02em",
      color: "var(--ink)",
      margin: 0,
      lineHeight: 1.04
    }
  }, r.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: done ? "lime" : "outline",
    size: "md",
    icon: done ? "circle-check-big" : "circle",
    onClick: toggleDone
  }, done ? "Completed" : "Mark Complete"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 300px",
      gap: 26,
      marginTop: 22,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Section, {
    icon: "book-open",
    title: "Quick Overview",
    color: "var(--violet)"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.62,
      color: "var(--ink)",
      margin: 0
    }
  }, content.overview)), selfAnswer && /*#__PURE__*/React.createElement(Section, {
    icon: "gauge",
    title: "Self Assessment",
    color: "var(--sky)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "var(--paper-2)",
      borderRadius: 13,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: selfAnswer.color,
      border: "2px solid var(--ink)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 13,
      flex: "none"
    }
  }, selfAnswer.key), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, "From your assessment, you said:"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15.5,
      color: "var(--ink)"
    }
  }, "\"", selfAnswer.label, "\"")))), /*#__PURE__*/React.createElement(Section, {
    icon: "pencil-line",
    title: "Interactive Worksheet",
    color: "var(--pink)",
    badge: "Saves to My Workspace"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, content.worksheet.map(w => w.type === "area" ? /*#__PURE__*/React.createElement(TextArea, {
    key: w.id,
    label: w.label,
    value: draft[w.id],
    onChange: v => setVal(w.id, v),
    placeholder: w.ph,
    rows: 4
  }) : /*#__PURE__*/React.createElement(Field, {
    key: w.id,
    label: w.label,
    value: draft[w.id],
    onChange: v => setVal(w.id, v),
    placeholder: w.ph
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "md",
    icon: saved ? "check" : "save",
    onClick: save
  }, saved ? "Saved!" : "Save Progress"), saved && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Caveat', cursive",
      fontSize: 21,
      color: "var(--lime-dark)",
      fontWeight: 700
    }
  }, "look at you go!"))), /*#__PURE__*/React.createElement(Section, {
    icon: "sparkles",
    title: "Examples",
    color: "var(--yellow)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, content.examples.map((ex, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "corner-down-right",
    size: 17,
    color: "var(--ink-300)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--ink)",
      margin: 0
    }
  }, ex))))), /*#__PURE__*/React.createElement(Section, {
    icon: "message-circle-question",
    title: "Reflection Questions",
    color: "var(--violet)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, content.reflection.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--ink)",
      letterSpacing: "-.01em",
      lineHeight: 1.3
    }
  }, q))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      position: "sticky",
      top: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 22,
    style: {
      background: "var(--ink)",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--lime)",
    style: {
      marginBottom: 12
    }
  }, "Your Action Item"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "var(--white)",
      margin: "0 0 18px",
      fontWeight: 500
    }
  }, content.action), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    full: true,
    icon: done ? "circle-check-big" : "circle",
    onClick: toggleDone
  }, done ? "Completed" : "Mark Complete")), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 13,
      color: "var(--ink)",
      marginBottom: 12
    }
  }, "In this resource"), ["Quick Overview", "Self Assessment", "Worksheet", "Examples", "Reflection", "Action Item"].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "5px 0",
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "var(--ink-500)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dot",
    size: 18,
    color: "var(--ink-300)"
  }), " ", s))))));
}
const Section = ({
  icon,
  title,
  color,
  badge,
  children
}) => /*#__PURE__*/React.createElement(Card, {
  pad: 24
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 11,
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 34,
    height: 34,
    borderRadius: 10,
    background: color,
    display: "grid",
    placeItems: "center",
    flex: "none"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: icon,
  size: 18,
  color: "var(--ink)"
})), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 19,
    letterSpacing: "-.01em",
    color: "var(--ink)",
    margin: 0,
    flex: 1
  }
}, title), badge && /*#__PURE__*/React.createElement(Tag, {
  bg: "var(--lime-soft)",
  fg: "var(--lime-dark)"
}, badge)), children);
Object.assign(window, {
  Library,
  ResourceCard,
  ResourcePage,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/library.jsx", error: String((e && e.message) || e) }); }

// app/ui.jsx
try { (() => {
/* =====================================================================
   UI PRIMITIVES — Speaker Success Hub
   Shared components + the useStored persistence hook.
   ===================================================================== */

const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

// ---- persistence ---------------------------------------------------
const STORE_KEY = "ts365_hub_v1";
function loadStore() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch (e) {
    return {};
  }
}
function saveStore(obj) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(obj));
  } catch (e) {}
}
// global store context
const StoreCtx = React.createContext(null);
function useStore() {
  return React.useContext(StoreCtx);
}

// ---- icons ---------------------------------------------------------
const Icon = ({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  style = {}
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": name,
  style: {
    width: size,
    height: size,
    color,
    display: "inline-flex",
    flex: "none",
    "--lucide-stroke": strokeWidth,
    ...style
  }
});
// re-render icons after mount
function useIcons(dep) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

// ---- buttons -------------------------------------------------------
const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled,
  full,
  icon,
  iconRight,
  style = {}
}) => {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizes = {
    sm: {
      p: "8px 16px",
      fs: 14
    },
    md: {
      p: "12px 22px",
      fs: 15
    },
    lg: {
      p: "15px 30px",
      fs: 17
    }
  }[size];
  const V = {
    primary: {
      bg: hover ? "var(--pink-dark)" : "var(--pink)",
      fg: "var(--ink)",
      bd: "var(--ink)",
      sticker: true
    },
    lime: {
      bg: hover ? "var(--lime-dark)" : "var(--lime)",
      fg: "var(--ink)",
      bd: "var(--ink)",
      sticker: true
    },
    dark: {
      bg: hover ? "var(--ink-800)" : "var(--ink)",
      fg: "var(--white)",
      bd: "var(--ink)"
    },
    ghost: {
      bg: hover ? "var(--ink-100)" : "transparent",
      fg: "var(--ink)",
      bd: "transparent"
    },
    outline: {
      bg: hover ? "var(--paper-2)" : "var(--white)",
      fg: "var(--ink)",
      bd: "var(--ink-100)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: sizes.fs,
      padding: sizes.p,
      background: V.bg,
      color: V.fg,
      border: `2px solid ${V.bd}`,
      borderRadius: 999,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: full ? "100%" : "auto",
      whiteSpace: "nowrap",
      boxShadow: V.sticker ? press ? "1px 1px 0 var(--ink)" : "4px 4px 0 var(--ink)" : "none",
      transform: V.sticker && press ? "translate(3px,3px)" : "none",
      transition: "transform .13s cubic-bezier(.2,.8,.2,1), box-shadow .13s, background .13s",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: sizes.fs + 3
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: sizes.fs + 3
  }));
};

// ---- card ----------------------------------------------------------
const Card = ({
  children,
  pad = 24,
  style = {},
  hover: hoverable,
  onClick,
  accent
}) => {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => hoverable && setH(true),
    onMouseLeave: () => hoverable && setH(false),
    style: {
      background: "var(--white)",
      borderRadius: 20,
      padding: pad,
      border: "1px solid var(--ink-100)",
      boxShadow: h ? "0 18px 44px rgba(22,20,19,.13)" : "0 2px 10px rgba(22,20,19,.05)",
      transform: h ? "translateY(-3px)" : "none",
      transition: "transform .18s cubic-bezier(.2,.8,.2,1), box-shadow .18s",
      cursor: onClick ? "pointer" : "default",
      borderTop: accent ? `4px solid ${accent}` : undefined,
      ...style
    }
  }, children);
};

// ---- eyebrow / labels ---------------------------------------------
const Eyebrow = ({
  children,
  color = "var(--ink-500)",
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color,
    ...style
  }
}, children);
const HL = ({
  children,
  color = "var(--lime)"
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    backgroundImage: `linear-gradient(transparent 10%, ${color} 10%, ${color} 88%, transparent 88%)`,
    padding: "0 .08em",
    WebkitBoxDecorationBreak: "clone",
    boxDecorationBreak: "clone"
  }
}, children);
const Tag = ({
  children,
  bg = "var(--lime-soft)",
  fg = "var(--ink)",
  border,
  style = {}
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 11.5,
    textTransform: "uppercase",
    letterSpacing: ".05em",
    background: bg,
    color: fg,
    borderRadius: 999,
    padding: "5px 12px",
    border: border ? `1.5px solid ${border}` : "none",
    display: "inline-block",
    ...style
  }
}, children);

// ---- form fields ---------------------------------------------------
const Field = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  hint
}) => {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13.5,
      color: "var(--ink)",
      marginBottom: 7
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value || "",
    placeholder: placeholder,
    onChange: e => onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: 15.5,
      padding: "12px 15px",
      border: `2px solid ${focus ? "var(--pink)" : value ? "var(--ink-300)" : "var(--ink-100)"}`,
      borderRadius: 13,
      background: "var(--white)",
      color: "var(--ink)",
      outline: "none",
      transition: "border .14s"
    }
  }), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-500)",
      marginTop: 5
    }
  }, hint));
};
const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  hint
}) => {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13.5,
      color: "var(--ink)",
      marginBottom: 7
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    value: value || "",
    placeholder: placeholder,
    rows: rows,
    onChange: e => onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: 15.5,
      lineHeight: 1.5,
      padding: "12px 15px",
      border: `2px solid ${focus ? "var(--pink)" : value ? "var(--ink-300)" : "var(--ink-100)"}`,
      borderRadius: 13,
      background: "var(--white)",
      color: "var(--ink)",
      outline: "none",
      resize: "vertical",
      transition: "border .14s"
    }
  }), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-500)",
      marginTop: 5
    }
  }, hint));
};

// ---- score ring (gamified gauge) ----------------------------------
const ScoreRing = ({
  value,
  size = 120,
  stroke = 12,
  color = "var(--pink)",
  label,
  big
}) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - value / 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--ink-100)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeDasharray: c,
    strokeDashoffset: off,
    strokeLinecap: "round",
    style: {
      transition: "stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: big ? size * 0.3 : size * 0.26,
      color: "var(--ink)",
      lineHeight: 1,
      letterSpacing: "-.02em"
    }
  }, Math.round(value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.5em"
    }
  }, "%")), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 10.5,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      color: "var(--ink-500)",
      marginTop: 3
    }
  }, label))));
};

// ---- progress bar --------------------------------------------------
const ProgressBar = ({
  value,
  color = "var(--lime)",
  height = 10,
  showPct
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    height,
    background: "var(--ink-100)",
    borderRadius: 999,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: `${Math.max(0, Math.min(100, value))}%`,
    height: "100%",
    background: color,
    borderRadius: 999,
    transition: "width .9s cubic-bezier(.2,.8,.2,1)"
  }
})), showPct && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 13,
    color: "var(--ink)",
    minWidth: 38,
    textAlign: "right"
  }
}, Math.round(value), "%"));

// ---- monogram + logo ----------------------------------------------
const Monogram = ({
  size = 44
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    width: size,
    height: size * 0.92,
    display: "grid",
    placeItems: "center",
    flex: "none"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    inset: "14%",
    background: "var(--pink)",
    border: "2px solid var(--ink)",
    borderRadius: "62% 38% 55% 45% / 52% 60% 40% 48%",
    transform: "rotate(-5deg)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    inset: 0,
    border: `${Math.max(2, size * 0.07)}px solid var(--lime)`,
    borderRadius: "50% 50% 47% 53% / 55% 49% 51% 45%",
    transform: "rotate(-8deg)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: "4%",
    right: "16%",
    width: size * 0.3,
    height: Math.max(2, size * 0.07),
    background: "var(--lime)",
    borderRadius: 999,
    transform: "rotate(36deg)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: "relative",
    fontFamily: "'Caveat', cursive",
    fontWeight: 700,
    fontSize: size * 0.7,
    color: "var(--ink)",
    lineHeight: 1,
    transform: "rotate(-3deg)"
  }
}, "EP"));
const Logo = ({
  onDark,
  compact
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 11
  }
}, /*#__PURE__*/React.createElement(Monogram, {
  size: compact ? 38 : 44
}), /*#__PURE__*/React.createElement("div", {
  style: {
    lineHeight: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: compact ? 15 : 16.5,
    letterSpacing: "-.02em",
    textTransform: "uppercase",
    color: onDark ? "var(--white)" : "var(--ink)"
  }
}, "TruthSpeaks ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--pink)"
  }
}, "365")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 10.5,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: onDark ? "var(--fg-on-dark2)" : "var(--ink-500)",
    marginTop: 3
  }
}, "Speaker Success Hub")));

// ---- small stat ----------------------------------------------------
const Stat = ({
  icon,
  value,
  label,
  color = "var(--pink)"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 13
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 44,
    height: 44,
    borderRadius: 13,
    background: "var(--paper-2)",
    display: "grid",
    placeItems: "center",
    flex: "none"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: icon,
  size: 22,
  color: color
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 24,
    color: "var(--ink)",
    lineHeight: 1,
    letterSpacing: "-.02em"
  }
}, value), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 12.5,
    color: "var(--ink-500)",
    marginTop: 3
  }
}, label)));

// ---- page header ---------------------------------------------------
const PageHead = ({
  eyebrow,
  title,
  sub,
  right
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 26,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
  color: "var(--violet-dark)",
  style: {
    marginBottom: 9
  }
}, eyebrow), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 34,
    letterSpacing: "-.02em",
    color: "var(--ink)",
    margin: 0,
    lineHeight: 1.05
  }
}, title), sub && /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 16,
    color: "var(--ink-500)",
    margin: "8px 0 0",
    maxWidth: 620
  }
}, sub)), right);
Object.assign(window, {
  STORE_KEY,
  loadStore,
  saveStore,
  StoreCtx,
  useStore,
  Icon,
  useIcons,
  Button,
  Card,
  Eyebrow,
  HL,
  Tag,
  Field,
  TextArea,
  ScoreRing,
  ProgressBar,
  Monogram,
  Logo,
  Stat,
  PageHead,
  useState,
  useEffect,
  useRef,
  useCallback
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/ui.jsx", error: String((e && e.message) || e) }); }

// app/views.jsx
try { (() => {
/* =====================================================================
   ROADMAP / COACHING JOURNEY · PROGRESS · SETTINGS
   ===================================================================== */

function Roadmap({
  profile,
  result,
  store,
  go
}) {
  useIcons();
  const completed = store.completed || {};
  const steps = ROADMAP_BY_CHALLENGE[result.challenge] || DEFAULT_ROADMAP;
  const doneWeeks = COACHING_WEEKS.filter(w => w.done).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Your 90-day path",
    title: "My Roadmap",
    sub: "Where you are, what's next, and the coaching journey around it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "var(--ink)",
      margin: 0,
      letterSpacing: "-.01em"
    }
  }, "Resource Path"), /*#__PURE__*/React.createElement(Tag, {
    bg: "var(--pink-soft)",
    fg: "var(--coral-dark)",
    border: "var(--pink)"
  }, result.challenge)), /*#__PURE__*/React.createElement("div", null, steps.map((id, i) => {
    const isDone = completed[id];
    const isCurrent = !isDone && steps.slice(0, i).every(s => completed[s]);
    const res = findResource(id);
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        display: "flex",
        gap: 16,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 999,
        flex: "none",
        display: "grid",
        placeItems: "center",
        background: isDone ? "var(--lime)" : isCurrent ? "var(--pink)" : "var(--white)",
        border: `2px solid ${isDone || isCurrent ? "var(--ink)" : "var(--ink-100)"}`,
        color: "var(--ink)",
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: 15
      }
    }, isDone ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 19,
      color: "var(--ink)"
    }) : isCurrent ? /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 18,
      color: "var(--ink)"
    }) : i + 1), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        flex: 1,
        minHeight: 26,
        background: isDone ? "var(--lime)" : "var(--ink-100)",
        margin: "4px 0"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: i < steps.length - 1 ? 22 : 0,
        paddingTop: 6,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: 11,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        color: isCurrent ? "var(--coral-dark)" : isDone ? "var(--lime-dark)" : "var(--ink-300)",
        marginBottom: 3
      }
    }, isCurrent ? "You are here" : isDone ? "Complete" : i === 0 ? "Start" : "Upcoming"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 19,
        color: "var(--ink)",
        letterSpacing: "-.01em"
      }
    }, roadmapStepLabel(id)), res && /*#__PURE__*/React.createElement(Button, {
      variant: isCurrent ? "primary" : "outline",
      size: "sm",
      iconRight: "arrow-right",
      onClick: () => go("resource", id)
    }, isDone ? "Review" : "Open"))));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 26
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--violet-dark)",
    style: {
      marginBottom: 14
    }
  }, "Coaching Journey"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 40,
      color: "var(--ink)",
      letterSpacing: "-.02em"
    }
  }, "Week ", doneWeeks + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--ink-500)"
    }
  }, "of ", TOTAL_WEEKS)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: doneWeeks / TOTAL_WEEKS * 100,
    color: "var(--lime)",
    showPct: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, COACHING_WEEKS.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.wk,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 999,
      flex: "none",
      display: "grid",
      placeItems: "center",
      background: w.done ? "var(--lime)" : w.current ? "var(--pink)" : "var(--paper-2)",
      border: w.current ? "2px solid var(--ink)" : "none"
    }
  }, w.done ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    color: "var(--ink)"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 11,
      color: w.current ? "var(--ink)" : "var(--ink-300)"
    }
  }, w.wk)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: w.current ? 800 : 600,
      fontSize: 14,
      color: w.current ? "var(--ink)" : w.done ? "var(--ink-500)" : "var(--ink-300)"
    }
  }, w.title), w.current && /*#__PURE__*/React.createElement(Tag, {
    bg: "var(--pink)",
    style: {
      marginLeft: "auto"
    }
  }, "Now"))))), /*#__PURE__*/React.createElement(Card, {
    pad: 26
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--sky-dark)",
    style: {
      marginBottom: 14
    }
  }, "Upcoming Calls"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, UPCOMING_CALLS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "var(--sky-soft)",
      display: "grid",
      placeItems: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 19,
    color: "var(--sky-dark)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--ink)"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-500)"
    }
  }, c.when))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    full: true,
    icon: "video"
  }, "Join next call"))))), /*#__PURE__*/React.createElement(Card, {
    pad: 26,
    style: {
      marginTop: 22,
      background: "var(--ink)",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--white)",
      letterSpacing: "-.01em"
    }
  }, "After 90 days: you keep your Hub."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "var(--fg-on-dark2)",
      margin: "6px 0 0",
      maxWidth: 540
    }
  }, "When coaching is complete, you still have access to your Speaker Success Hub for the remainder of your six-month access period. Need more? Book a strategy session with Erin.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    icon: "calendar-heart"
  }, "Book a Strategy Session")));
}

// ---- Progress ------------------------------------------------------
function Progress({
  profile,
  result,
  store
}) {
  useIcons();
  const completed = store.completed || {};
  const total = ALL_RESOURCES.length;
  const done = ALL_RESOURCES.filter(r => completed[r.id]).length;
  const daily = store.daily || {};
  const dailyTotals = DAILY_METRICS.reduce((acc, m) => {
    acc[m.id] = DAYS.reduce((s, d) => s + (Number(daily[d]?.[m.id]) || 0), 0);
    return acc;
  }, {});
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Proof you're moving",
    title: "My Progress",
    sub: "The numbers don't lie \u2014 look how far you've come."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 26,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    value: result.presentationScore,
    color: "var(--violet)",
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      color: "var(--ink)"
    }
  }, "Presentation")), /*#__PURE__*/React.createElement(Card, {
    pad: 26,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    value: result.businessScore,
    color: "var(--pink)",
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      color: "var(--ink)"
    }
  }, "Business")), /*#__PURE__*/React.createElement(Card, {
    pad: 26,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(ScoreRing, {
    value: done / total * 100,
    color: "var(--lime-dark)",
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      color: "var(--ink)"
    }
  }, "Resources (", done, "/", total, ")"))), /*#__PURE__*/React.createElement(Card, {
    pad: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--ink)",
      margin: "0 0 18px",
      letterSpacing: "-.01em"
    }
  }, "This week's activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
      gap: 16
    }
  }, DAILY_METRICS.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      background: "var(--paper-2)",
      borderRadius: 14,
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 19,
    color: "var(--ink-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 28,
      color: "var(--ink)",
      letterSpacing: "-.02em",
      marginTop: 8
    }
  }, dailyTotals[m.id]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--ink-500)"
    }
  }, m.label))))));
}

// ---- Settings ------------------------------------------------------
function Settings({
  profile,
  update,
  onReset
}) {
  useIcons();
  const [f, setF] = useState(profile);
  const set = k => v => setF(s => ({
    ...s,
    [k]: v
  }));
  const [saved, setSaved] = useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Your account",
    title: "Settings"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--ink)",
      margin: "0 0 18px",
      letterSpacing: "-.01em"
    }
  }, "Profile"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name",
    value: f.first,
    onChange: set("first")
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Last name",
    value: f.last,
    onChange: set("last")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    value: f.email,
    onChange: set("email")
  })), /*#__PURE__*/React.createElement(Field, {
    label: "City",
    value: f.city,
    onChange: set("city")
  }), /*#__PURE__*/React.createElement(Field, {
    label: "State",
    value: f.state,
    onChange: set("state")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    icon: saved ? "check" : "save",
    onClick: () => {
      update({
        profile: f
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 1800);
    }
  }, saved ? "Saved!" : "Save profile"))), /*#__PURE__*/React.createElement(Card, {
    pad: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--ink)",
      margin: "0 0 8px",
      letterSpacing: "-.01em"
    }
  }, "Start over"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "var(--ink-500)",
      margin: "0 0 18px"
    }
  }, "Reset the demo \u2014 clears your profile, assessment, and all saved work."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "rotate-ccw",
    onClick: onReset,
    style: {
      borderColor: "var(--coral)",
      color: "var(--coral-dark)"
    }
  }, "Reset everything"))));
}
Object.assign(window, {
  Roadmap,
  Progress,
  Settings
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/views.jsx", error: String((e && e.message) || e) }); }

// app/workspace.jsx
try { (() => {
/* =====================================================================
   WORKSPACE · EXPORT CENTER
   ===================================================================== */

function Workspace({
  store,
  update,
  go
}) {
  useIcons();
  const [open, setOpen] = useState(WORKSPACE_SECTIONS[0].id);
  const [showExport, setShowExport] = useState(false);

  // pull any saved resource worksheet content into a "recently saved" feel
  const filled = fields => fields.filter(f => store[f.id]).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Private & auto-saved",
    title: "My Workspace",
    sub: "Your speaker business vault. Everything you build in a resource saves here \u2014 return anytime, nothing is lost.",
    right: /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      icon: "download",
      onClick: () => setShowExport(true)
    }, "Export Center")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 24,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, WORKSPACE_SECTIONS.map(s => {
    const on = open === s.id;
    const n = filled(s.fields);
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setOpen(s.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        textAlign: "left",
        cursor: "pointer",
        padding: "12px 14px",
        borderRadius: 14,
        border: `2px solid ${on ? "var(--ink)" : "transparent"}`,
        background: on ? "var(--white)" : "transparent",
        boxShadow: on ? "0 4px 14px rgba(22,20,19,.07)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 10,
        background: s.color,
        display: "grid",
        placeItems: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 17,
      color: "var(--ink)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 13.5,
        color: "var(--ink)"
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: n ? "var(--lime-dark)" : "var(--ink-300)"
      }
    }, n ? `${n} saved` : "Empty")));
  })), /*#__PURE__*/React.createElement("div", null, WORKSPACE_SECTIONS.filter(s => s.id === open).map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.id,
    pad: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 13,
      background: s.color,
      display: "grid",
      placeItems: "center",
      border: "2px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: "-.01em",
      color: "var(--ink)",
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, "Auto-saves as you type."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, s.fields.map(f => f.type === "area" ? /*#__PURE__*/React.createElement(TextArea, {
    key: f.id,
    label: f.label,
    value: store[f.id],
    onChange: v => update({
      [f.id]: v
    }),
    rows: 5,
    placeholder: "Start typing \u2014 it saves automatically."
  }) : /*#__PURE__*/React.createElement(Field, {
    key: f.id,
    label: f.label,
    value: store[f.id],
    onChange: v => update({
      [f.id]: v
    }),
    placeholder: "Start typing \u2014 it saves automatically."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 18,
      color: "var(--lime-dark)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cloud-check",
    size: 17,
    color: "var(--lime-dark)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13
    }
  }, "Saved to your vault")))))), showExport && /*#__PURE__*/React.createElement(ExportCenter, {
    onClose: () => setShowExport(false)
  }));
}

// ---- Export Center -------------------------------------------------
function ExportCenter({
  onClose
}) {
  useIcons();
  const items = ["My One Sheet", "My Proposal", "My Pricing Workbook", "My Pipeline", "Speaker Business Notes", "Entire Workspace"];
  const formats = [{
    id: "pdf",
    label: "PDF",
    icon: "file-text"
  }, {
    id: "word",
    label: "Word",
    icon: "file-type"
  }, {
    id: "csv",
    label: "CSV",
    icon: "table"
  }, {
    id: "zip",
    label: "ZIP",
    icon: "folder-archive"
  }];
  const [sel, setSel] = useState("Entire Workspace");
  const [fmt, setFmt] = useState("pdf");
  const [exported, setExported] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "rgba(22,20,19,.55)",
      backdropFilter: "blur(5px)",
      display: "grid",
      placeItems: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--paper)",
      borderRadius: 26,
      border: "1px solid var(--ink-100)",
      width: "100%",
      maxWidth: 600,
      boxShadow: "0 40px 90px rgba(0,0,0,.4)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink)",
      padding: "22px 26px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 22,
    color: "var(--lime)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--white)"
    }
  }, "Export Center")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22,
    color: "var(--fg-on-dark2)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "var(--ink-500)",
      margin: "0 0 20px"
    }
  }, "Leave coaching with a complete speaker business toolkit you built yourself. Choose what to export."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 12.5,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      color: "var(--ink-500)",
      marginBottom: 10
    }
  }, "What to export"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 9,
      marginBottom: 22
    }
  }, items.map(it => {
    const on = sel === it;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => setSel(it),
      style: {
        textAlign: "left",
        cursor: "pointer",
        padding: "12px 14px",
        borderRadius: 12,
        border: `2px solid ${on ? "var(--ink)" : "var(--ink-100)"}`,
        background: on ? "var(--lime-soft)" : "var(--white)",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 13.5,
        color: "var(--ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, it, on && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15,
      color: "var(--lime-dark)"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 12.5,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      color: "var(--ink-500)",
      marginBottom: 10
    }
  }, "Format"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      marginBottom: 24
    }
  }, formats.map(fo => {
    const on = fmt === fo.id;
    return /*#__PURE__*/React.createElement("button", {
      key: fo.id,
      onClick: () => setFmt(fo.id),
      style: {
        flex: 1,
        cursor: "pointer",
        padding: "13px 10px",
        borderRadius: 12,
        border: `2px solid ${on ? "var(--ink)" : "var(--ink-100)"}`,
        background: on ? "var(--ink)" : "var(--white)",
        color: on ? "var(--white)" : "var(--ink)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: fo.icon,
      size: 20,
      color: on ? "var(--lime)" : "var(--ink-500)"
    }), fo.label);
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true,
    icon: exported ? "check" : "download",
    onClick: () => {
      setExported(true);
      setTimeout(() => setExported(false), 2200);
    }
  }, exported ? "Exported!" : `Export ${sel} as ${fmt.toUpperCase()}`), exported && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 12,
      fontFamily: "'Caveat', cursive",
      fontSize: 22,
      color: "var(--lime-dark)",
      fontWeight: 700
    }
  }, "that's YOUR toolkit, baby."))));
}
Object.assign(window, {
  Workspace,
  ExportCenter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/workspace.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* =====================================================================
   APP — Erin Pompa website kit
   Stitches sections into an interactive click-through marketing site.
   ===================================================================== */

const BookingCTA = ({
  onBook
}) => /*#__PURE__*/React.createElement("section", {
  id: "sec-speaking",
  style: {
    background: "var(--lime)",
    padding: "80px 40px",
    borderTop: "2px solid var(--ink)",
    borderBottom: "2px solid var(--ink)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820,
    margin: "0 auto",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "-0.03em",
    fontSize: 56,
    lineHeight: 1,
    color: "var(--ink)",
    margin: "0 0 20px"
  }
}, "Ready to own the room?"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 20,
    lineHeight: 1.5,
    color: "var(--ink)",
    margin: "0 0 32px",
    fontWeight: 500
  }
}, "Book a free call. We'll talk about your story, your stage, and the plan to get you booked and paid. Go now."), /*#__PURE__*/React.createElement(Button, {
  variant: "dark",
  size: "lg",
  onClick: onBook
}, "Book your free call \u2192")));
const BookingModal = ({
  open,
  onClose
}) => {
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    focus: "Keynote coaching"
  });
  React.useEffect(() => {
    if (open) {
      setStep(0);
      setForm({
        name: "",
        email: "",
        focus: "Keynote coaching"
      });
    }
  }, [open]);
  if (!open) return null;
  const field = (label, key, ph, type = "text") => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13,
      color: "var(--ink)",
      display: "block",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: form[key],
    placeholder: ph,
    onChange: e => setForm({
      ...form,
      [key]: e.target.value
    }),
    onFocus: e => e.target.style.borderColor = "var(--pink)",
    onBlur: e => e.target.style.borderColor = form[key] ? "var(--ink)" : "var(--ink-100)",
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      padding: "13px 16px",
      border: `2px solid ${form[key] ? "var(--ink)" : "var(--ink-100)"}`,
      borderRadius: "var(--radius-md)",
      background: "var(--white)",
      color: "var(--ink)",
      outline: "none"
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(22,20,19,.55)",
      backdropFilter: "blur(4px)",
      display: "grid",
      placeItems: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--paper)",
      borderRadius: "var(--radius-xl)",
      border: "2px solid var(--ink)",
      boxShadow: "10px 10px 0 var(--pink)",
      width: "100%",
      maxWidth: 460,
      padding: 36,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      cursor: "pointer",
      width: 36,
      height: 36,
      borderRadius: 999,
      display: "grid",
      placeItems: "center",
      border: "2px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18,
    color: "var(--ink)"
  })), step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 10
    }
  }, "Let's talk"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
      fontSize: 30,
      color: "var(--ink)",
      margin: "0 0 20px"
    }
  }, "Book your free call"), field("Your name", "name", "First & last"), field("Email", "email", "you@email.com", "email"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13,
      color: "var(--ink)",
      display: "block",
      marginBottom: 8
    }
  }, "What's this about?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["Keynote coaching", "Get booked & paid", "Speak at schools"].map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setForm({
      ...form,
      focus: o
    }),
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13,
      padding: "8px 14px",
      borderRadius: 999,
      cursor: "pointer",
      border: "2px solid var(--ink)",
      background: form.focus === o ? "var(--pink)" : "var(--white)",
      color: "var(--ink)"
    }
  }, o)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: "100%",
      justifyContent: "center"
    },
    onClick: () => {
      if (form.name && form.email) setStep(1);
    }
  }, "Send it \u2192")) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "12px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 999,
      background: "var(--lime)",
      border: "2px solid var(--ink)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 20px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
      fontSize: 28,
      color: "var(--ink)",
      margin: "0 0 12px"
    }
  }, "You're in, ", form.name.split(" ")[0] || "baby", "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.5,
      color: "var(--ink-500)",
      margin: "0 0 24px"
    }
  }, "I'll be in touch at ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, form.email), " about ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, form.focus.toLowerCase()), ". Go hard for you. \uD83D\uDC9B"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "md",
    onClick: onClose
  }, "Done"))));
};
function App() {
  const [modal, setModal] = React.useState(false);
  const scrollTo = key => {
    const map = {
      Speaking: "sec-speaking",
      Coaching: "sec-coaching",
      Schools: "sec-coaching",
      About: "sec-about",
      top: "kit-top"
    };
    const el = document.getElementById(map[key] || "kit-top");
    if (el) el.scrollIntoView ? document.getElementById("kit-scroll").scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth"
    }) : null;
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "kit-top"
  }), /*#__PURE__*/React.createElement(NavBar, {
    onBook: () => setModal(true),
    onNav: scrollTo
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: () => setModal(true)
  }), /*#__PURE__*/React.createElement(Marquee, {
    items: ["Get booked", "Get paid", "Own the room", "Use your story", "No talking heads"]
  }), /*#__PURE__*/React.createElement(Mission, null), /*#__PURE__*/React.createElement(Programs, {
    onBook: () => setModal(true)
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(BookingCTA, {
    onBook: () => setModal(true)
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(BookingModal, {
    open: modal,
    onClose: () => setModal(false)
  }));
}
Object.assign(window, {
  BookingCTA,
  BookingModal,
  App
});
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* =====================================================================
   SECTIONS — Erin Pompa website kit
   Nav, Hero, Marquee, Mission, Programs, About, Testimonial, CTA, Footer
   ===================================================================== */

const NAV_LINKS = ["Speaking", "Coaching", "Schools", "About"];
const NavBar = ({
  onBook,
  onNav
}) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.querySelector("#kit-scroll") || window;
    const el = document.querySelector("#kit-scroll");
    const handler = () => setScrolled((el ? el.scrollTop : window.scrollY) > 20);
    root.addEventListener("scroll", handler);
    return () => root.removeEventListener("scroll", handler);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: "16px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(251,247,240,.86)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--ink-100)" : "1px solid transparent",
      transition: "all .2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav("top"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    size: 46
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "-0.04em",
      fontSize: 24,
      color: "var(--ink)",
      lineHeight: 1
    }
  }, "Erin ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pink)"
    }
  }, "Pompa"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNav(l),
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--ink)",
      cursor: "pointer",
      textDecoration: "none"
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onBook
  }, "Book a call")));
};
const Marquee = ({
  items,
  bg = "var(--lime)",
  color = "var(--ink)"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: bg,
    borderTop: "2px solid var(--ink)",
    borderBottom: "2px solid var(--ink)",
    overflow: "hidden",
    padding: "14px 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 0,
    whiteSpace: "nowrap",
    animation: "kit-marquee 26s linear infinite",
    width: "max-content"
  }
}, [...items, ...items].map((t, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "-0.02em",
    fontSize: 22,
    color,
    padding: "0 28px",
    display: "inline-flex",
    alignItems: "center",
    gap: 28
  }
}, t, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--pink)"
  }
}, "\u2726")))));
const Hero = ({
  onBook
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink)",
    color: "var(--white)",
    padding: "64px 40px 80px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
  color: "var(--lime)",
  style: {
    marginBottom: 22
  }
}, "For women with a story to tell"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "-0.03em",
    fontSize: 72,
    lineHeight: 0.98,
    margin: "0 0 24px"
  }
}, "Use your story", /*#__PURE__*/React.createElement("br", null), "to ", /*#__PURE__*/React.createElement(HL, {
  color: "var(--pink)"
}, "change"), /*#__PURE__*/React.createElement("br", null), "the room."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 20,
    lineHeight: 1.5,
    color: "var(--fg-on-dark2)",
    maxWidth: 460,
    margin: "0 0 32px"
  }
}, "I help women build presentations that move a room \u2014 no talking heads, no reading from slides \u2014 and the business that gets you booked and paid. ", /*#__PURE__*/React.createElement(Script, {
  color: "var(--lime)",
  style: {
    fontSize: "1.35em"
  }
}, "You hear me?")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  size: "lg",
  onClick: onBook
}, "Book a call \u2192"), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  size: "lg",
  style: {
    borderColor: "var(--white)",
    color: "var(--white)"
  }
}, "Watch a talk"))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(Photo, {
  label: "Erin on stage",
  ratio: "4 / 5",
  bg: "var(--violet)"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    bottom: -18,
    left: -18,
    transform: "rotate(-4deg)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-script)",
    fontWeight: 700,
    fontSize: 26,
    background: "var(--lime)",
    color: "var(--ink)",
    border: "2px solid var(--ink)",
    borderRadius: 999,
    padding: "6px 20px",
    display: "inline-block"
  }
}, "level up, baby!")))));
const Mission = () => /*#__PURE__*/React.createElement("section", {
  id: "sec-about",
  style: {
    background: "var(--paper)",
    padding: "80px 40px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 108,
    lineHeight: 1,
    color: "var(--pink)",
    letterSpacing: "-0.04em"
  }
}, "70%"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.02em",
    fontSize: 40,
    lineHeight: 1.1,
    color: "var(--ink)",
    margin: "12px 0 18px"
  }
}, "of professional speakers are men.", /*#__PURE__*/React.createElement("br", null), "That's exactly ", /*#__PURE__*/React.createElement(HL, null, "why this matters.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 20,
    lineHeight: 1.55,
    color: "var(--ink-500)",
    maxWidth: 620,
    margin: "0 auto"
  }
}, "The world needs more female voices at the front of the room. Yours is one of them. Nobody wants to say this out loud \u2014 so I will.")));
const PROGRAMS = [{
  tag: "1:1 Coaching",
  icon: "mic",
  title: "Write your keynote",
  body: "We craft the talk that takes a room on a journey toward self-discovery — start to finish.",
  color: "var(--violet)"
}, {
  tag: "Most loved",
  icon: "trending-up",
  title: "The business of speaking",
  body: "Your pipeline, how to get clients, how to get booked, and how to get paid for your message.",
  color: "var(--pink)",
  feat: true
}, {
  tag: "TruthSpeaks 365",
  icon: "graduation-cap",
  title: "Speak to students",
  body: "Train with a powerful story and a framework that supports young people, grades 6–12.",
  color: "var(--sky)"
}];
const Programs = ({
  onBook
}) => /*#__PURE__*/React.createElement("section", {
  id: "sec-coaching",
  style: {
    background: "var(--paper-2)",
    padding: "80px 40px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1180,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center",
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  style: {
    marginBottom: 14
  }
}, "Work with me"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.02em",
    fontSize: 44,
    color: "var(--ink)",
    margin: 0
  }
}, "Pick your path")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 24
  }
}, PROGRAMS.map(p => /*#__PURE__*/React.createElement(ProgramCard, _extends({
  key: p.title
}, p, {
  onBook: onBook
}))))));
const ProgramCard = ({
  tag,
  icon,
  title,
  body,
  color,
  feat,
  onBook
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: feat ? "var(--ink)" : "var(--white)",
      borderRadius: "var(--radius-lg)",
      padding: 28,
      border: feat ? "2px solid var(--ink)" : "1px solid var(--ink-100)",
      boxShadow: feat ? hover ? "10px 10px 0 var(--pink)" : "6px 6px 0 var(--pink)" : hover ? "var(--shadow-lg)" : "var(--shadow-md)",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "all .18s cubic-bezier(.2,.8,.2,1)",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: color,
      display: "grid",
      placeItems: "center",
      border: "2px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement(Tag, {
    bg: color,
    style: {
      alignSelf: "flex-start"
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: "-0.02em",
      color: feat ? "var(--white)" : "var(--ink)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.5,
      color: feat ? "var(--fg-on-dark2)" : "var(--ink-500)",
      margin: 0,
      flex: 1
    }
  }, body), /*#__PURE__*/React.createElement("a", {
    onClick: onBook,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 15,
      color: feat ? "var(--lime)" : "var(--link)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, "Get started ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })));
};
const About = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--paper)",
    padding: "80px 40px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement(Photo, {
  label: "Erin at her kitchen table",
  ratio: "1 / 1",
  bg: "var(--yellow)",
  radius: "var(--radius-xl)"
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
  style: {
    marginBottom: 16
  }
}, "Who is this lady?"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.02em",
    fontSize: 40,
    lineHeight: 1.08,
    color: "var(--ink)",
    margin: "0 0 20px"
  }
}, "I was a mess.", /*#__PURE__*/React.createElement("br", null), "And I'm ", /*#__PURE__*/React.createElement(HL, {
  color: "var(--pink)"
}, "still here.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 18,
    lineHeight: 1.55,
    color: "var(--ink-500)",
    margin: "0 0 16px"
  }
}, "Fifteen years a teacher. A woman in recovery. A high achiever on the outside, quietly drowning on the inside \u2014 until I found another way through. Now I help women turn that exact story into the thing that changes lives, including their own."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 18,
    lineHeight: 1.55,
    color: "var(--ink-500)",
    margin: 0
  }
}, "We're only as sick as our secrets, ", /*#__PURE__*/React.createElement(Script, {
  color: "var(--violet-dark)",
  style: {
    fontSize: "1.3em"
  }
}, "baby.")))));
const Testimonial = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink)",
    color: "var(--white)",
    padding: "88px 40px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 880,
    margin: "0 auto",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "quote",
  size: 44,
  color: "var(--lime)"
}), /*#__PURE__*/React.createElement("blockquote", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.02em",
    fontSize: 38,
    lineHeight: 1.12,
    margin: "18px 0 28px"
  }
}, "I promise you I am not going to leave you bored. Give it a chance, and you might just experience a ", /*#__PURE__*/React.createElement(HL, {
  color: "var(--pink)"
}, "change in you.")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 16,
    color: "var(--lime)"
  }
}, "ERIN POMPA"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 15,
    color: "var(--fg-on-dark2)"
  }
}, "Founder, TruthSpeaks 365")));
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  style: {
    background: "var(--paper-2)",
    padding: "56px 40px 40px",
    borderTop: "2px solid var(--ink)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 32
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 14
  }
}, /*#__PURE__*/React.createElement(Monogram, {
  size: 56
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "-0.04em",
    fontSize: 28,
    color: "var(--ink)"
  }
}, "Erin ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--pink)"
  }
}, "Pompa")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-script)",
    fontWeight: 600,
    fontSize: 24,
    color: "var(--violet-dark)",
    marginTop: 2
  }
}, "use your story, baby."))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14
  }
}, ["camera", "play", "mail"].map(i => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    width: 44,
    height: 44,
    borderRadius: 999,
    border: "2px solid var(--ink)",
    display: "grid",
    placeItems: "center",
    cursor: "pointer"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: i,
  size: 20,
  color: "var(--ink)"
}))))), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1180,
    margin: "32px auto 0",
    fontFamily: "var(--font-body)",
    fontSize: 13,
    color: "var(--ink-500)"
  }
}, "\xA9 2026 TruthSpeaks 365 \xB7 Diversifying the front of the room."));
Object.assign(window, {
  NavBar,
  Marquee,
  Hero,
  Mission,
  Programs,
  ProgramCard,
  About,
  Testimonial,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ui.jsx
try { (() => {
/* =====================================================================
   UI PRIMITIVES — Erin Pompa website kit
   Shared building blocks. Exported to window at the bottom.
   ===================================================================== */

const Icon = ({
  name,
  size = 20,
  color = "currentColor",
  style = {}
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": name,
  style: {
    width: size,
    height: size,
    color,
    display: "inline-flex",
    ...style
  }
});

// Eyebrow / kicker label
const Eyebrow = ({
  children,
  color = "var(--violet-dark)",
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color,
    ...style
  }
}, children);

// Highlighter-swipe word
const HL = ({
  children,
  color = "var(--lime)"
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    backgroundImage: `linear-gradient(transparent 8%, ${color} 8%, ${color} 86%, transparent 86%)`,
    padding: "0 0.1em",
    WebkitBoxDecorationBreak: "clone",
    boxDecorationBreak: "clone"
  }
}, children);

// Handwritten accent
const Script = ({
  children,
  color = "var(--pink)",
  style = {}
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-script)",
    fontWeight: 600,
    color,
    textTransform: "none",
    ...style
  }
}, children);

// Button
//  Playful CTA variants (primary | lime) = hand-drawn: handwriting font +
//  imperfect "not-perfect" outline + sticker shadow. Used sparingly for the
//  moments that matter (Book a call, Start coaching).
//  Utility variants (dark | ghost | light) = clean uppercase display for hierarchy.
const HAND_RADII = ["255px 18px 225px 22px / 22px 225px 18px 255px", "18px 235px 20px 225px / 220px 16px 235px 18px", "235px 20px 220px 18px / 18px 225px 22px 235px"];
const Button = ({
  children,
  variant = "primary",
  onClick,
  size = "md",
  style = {}
}) => {
  const [press, setPress] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const handDrawn = variant === "primary" || variant === "lime";
  const variants = {
    primary: {
      bg: hover ? "var(--pink-dark)" : "var(--pink)",
      fg: "var(--ink)",
      border: "var(--ink)",
      shadow: true
    },
    lime: {
      bg: hover ? "var(--lime-dark)" : "var(--lime)",
      fg: "var(--ink)",
      border: "var(--ink)",
      shadow: true
    },
    dark: {
      bg: "var(--ink)",
      fg: "var(--white)",
      border: "var(--ink)",
      shadow: false
    },
    light: {
      bg: "var(--white)",
      fg: "var(--ink)",
      border: "var(--ink)",
      shadow: false
    },
    ghost: {
      bg: hover ? "var(--ink)" : "transparent",
      fg: hover ? "var(--white)" : "var(--ink)",
      border: "var(--ink)",
      shadow: false
    }
  };
  const v = variants[variant] || variants.primary;

  // sizing differs between the two button languages
  const pads = handDrawn ? size === "lg" ? "12px 34px" : size === "sm" ? "7px 20px" : "10px 28px" : size === "lg" ? "16px 32px" : size === "sm" ? "9px 18px" : "13px 26px";
  const fs = handDrawn ? size === "lg" ? 30 : size === "sm" ? 22 : 26 : size === "lg" ? 18 : size === "sm" ? 14 : 16;
  const baseShadow = v.shadow ? "5px 5px 0 var(--ink)" : "none";
  const radius = handDrawn ? variant === "lime" ? HAND_RADII[1] : HAND_RADII[0] : "999px";
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: handDrawn ? "var(--font-script)" : "var(--font-display)",
      fontWeight: handDrawn ? 700 : 800,
      textTransform: handDrawn ? "none" : "uppercase",
      letterSpacing: handDrawn ? 0 : "0.02em",
      fontSize: fs,
      padding: pads,
      lineHeight: 1,
      background: v.bg,
      color: v.fg,
      border: `${handDrawn ? 2.5 : 2}px solid ${v.border}`,
      borderRadius: radius,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      whiteSpace: "nowrap",
      boxShadow: v.shadow ? press ? "1px 1px 0 var(--ink)" : baseShadow : "none",
      transform: v.shadow && press ? "translate(4px,4px)" : "translate(0,0)",
      transition: "transform .14s cubic-bezier(.2,.8,.2,1), box-shadow .14s, background .14s",
      ...style
    }
  }, children);
};

// Tag / pill
const Tag = ({
  children,
  bg = "var(--lime)",
  fg = "var(--ink)",
  style = {}
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    background: bg,
    color: fg,
    borderRadius: 999,
    padding: "6px 14px",
    display: "inline-block",
    ...style
  }
}, children);

// Photo placeholder — stands in for real photography of Erin
const Photo = ({
  label = "Photo of Erin",
  ratio = "3 / 4",
  bg = "var(--violet)",
  radius = "var(--radius-lg)",
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: ratio,
    background: bg,
    borderRadius: radius,
    position: "relative",
    overflow: "hidden",
    border: "2px solid var(--ink)",
    display: "grid",
    placeItems: "center",
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "repeating-linear-gradient(45deg, rgba(22,20,19,.06) 0 14px, transparent 14px 28px)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    textAlign: "center",
    color: "var(--ink)",
    opacity: .65
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "image",
  size: 28
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 13,
    marginTop: 6
  }
}, label)));

// Monogram — pink imperfect blob + green hand-drawn loop + capital handwritten EP
const Monogram = ({
  size = 52
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    width: size,
    height: size * 0.92,
    display: "grid",
    placeItems: "center",
    flex: "none"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    inset: "14%",
    background: "var(--pink)",
    border: "2px solid var(--ink)",
    borderRadius: "62% 38% 55% 45% / 52% 60% 40% 48%",
    transform: "rotate(-5deg)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    inset: 0,
    border: `${Math.max(2, size * 0.07)}px solid var(--lime)`,
    borderRadius: "50% 50% 47% 53% / 55% 49% 51% 45%",
    transform: "rotate(-8deg)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: "4%",
    right: "16%",
    width: size * 0.3,
    height: Math.max(2, size * 0.07),
    background: "var(--lime)",
    borderRadius: 999,
    transform: "rotate(36deg)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: "relative",
    fontFamily: "'Caveat', var(--font-script)",
    fontWeight: 700,
    fontSize: size * 0.7,
    color: "var(--ink)",
    lineHeight: 1,
    transform: "rotate(-3deg)"
  }
}, "EP"));
Object.assign(window, {
  Icon,
  Eyebrow,
  HL,
  Script,
  Button,
  Tag,
  Photo,
  Monogram
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ui.jsx", error: String((e && e.message) || e) }); }

})();
