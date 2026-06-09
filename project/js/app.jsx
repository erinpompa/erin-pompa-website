/* =====================================================================
   APP — Erin Pompa homepage composition
   ===================================================================== */

const App = () => {
  // (re)render lucide icons after mount + on any reveal
  React.useEffect(() => {
    const run = () => window.lucide && window.lucide.createIcons();
    run();
    const t = setInterval(run, 600);
    setTimeout(() => clearInterval(t), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <Logos />
      <WhoSheServes />
      <Reel />
      <Reviews />
      <Schools />
      <BookTeaser />
      <BookCTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
