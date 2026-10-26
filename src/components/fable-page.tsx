import { useEffect, useState } from "react";
import { Check, Compass, Copy, Globe, Lightbulb, Menu, Palette, X } from "lucide-react";

const CA = "ErvP5HMiy5Hbt7oHYWmyrvZVXHNm5TcubZnMuyBUpump";
const PAIR = "FKXiBnodFHGgwqY7sv6qt8arhLDWf47qZUvhLgbR71Pu";
const CHART = `https://dexscreener.com/solana/${PAIR}?embed=1&loadChartSettings=0&trades=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=15`;

const NAV = [
  { href: "#story", label: "Story" },
  { href: "#vision", label: "Vision" },
  { href: "#pillars", label: "Pillars" },
  { href: "#chart", label: "Chart" },
  { href: "#join", label: "Join" },
];

const SOCIALS = [
  { href: "https://x.com/fableonanalos", label: "X" },
  { href: "https://www.tiktok.com/@fableonanalos", label: "TikTok" },
  { href: "https://www.instagram.com/fableonanalos", label: "Instagram" },
];

const STEPS = [
  {
    n: "01",
    title: "Ideas",
    text: "Every project begins with a concept. Creativity deserves room to become something meaningful.",
    icon: Lightbulb,
  },
  {
    n: "02",
    title: "Identity",
    text: "A clear identity helps people understand what a project represents, and what it refuses to be.",
    icon: Palette,
  },
  {
    n: "03",
    title: "Strategy",
    text: "Direction beats noise. Thoughtful planning makes purpose easier to communicate and grow.",
    icon: Compass,
  },
  {
    n: "04",
    title: "Community",
    text: "People bring a project to life through consistent conversation, collaboration, and shared purpose.",
    icon: Globe,
  },
];

const ENCOURAGE = [
  ["Project identity", "Recognizable branding and communication that says what the work actually is."],
  ["Creative thinking", "Space to explore ideas before they are flattened into a launch."],
  ["Strategic development", "Positioning, messaging, and growth approached with intent."],
  ["Community building", "Participation that is real, not a spike of attention."],
  ["Collaboration", "Creators exchanging ideas and learning from one another’s journeys."],
];

const AUDIENCE = [
  ["New creators", "People developing an idea and looking for a recognizable identity."],
  ["Project builders", "Creators strengthening what they have already started."],
  ["Community builders", "People gathering others around a shared vision."],
  ["ANALOS creators", "Builders contributing inside the ecosystem where FABLE begins."],
  ["Creators beyond ANALOS", "Anyone, in any ecosystem, who cares about identity, strategy, and community."],
];

const PRINCIPLES = [
  ["Creativity", "Fresh ideas and original thinking are welcome here."],
  ["Clarity", "A project should be able to say what it is for."],
  ["Consistency", "Continued effort matters more than a single announcement."],
  ["Collaboration", "Creators learn faster when they build in the open, together."],
  ["Community", "Meaningful connections form around a shared vision."],
  ["Growth", "Learning, adaptation, and progress are part of the work."],
];

type Market = {
  priceUsd: number | null;
  marketCap: number | null;
  volume: number | null;
  change: number | null;
};

function money(value: number | null, digits = 2) {
  if (value == null || !Number.isFinite(value)) return "—";
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(digits)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(digits)}K`;
  if (value >= 1) return `$${value.toFixed(digits)}`;
  return `$${value.toPrecision(3)}`;
}

function price(value: number | null) {
  if (value == null || !Number.isFinite(value)) return "—";
  if (value >= 1) return `$${value.toFixed(4)}`;
  return `$${value.toPrecision(4)}`;
}

export function FablePage() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [market, setMarket] = useState<Market | null>(null);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CA}`);
        if (!response.ok) return;
        const data = (await response.json()) as {
          pairs?: Array<{
            priceUsd?: string;
            marketCap?: number;
            fdv?: number;
            volume?: { h24?: number };
            priceChange?: { h24?: number };
          }>;
        };
        const pair = data.pairs?.[0];
        if (!pair || !alive) return;
        const nextPrice = pair.priceUsd ? Number(pair.priceUsd) : null;
        setMarket({
          priceUsd: nextPrice != null && Number.isFinite(nextPrice) ? nextPrice : null,
          marketCap: pair.marketCap ?? pair.fdv ?? null,
          volume: pair.volume?.h24 ?? null,
          change: pair.priceChange?.h24 ?? null,
        });
      } catch {
        /* Chart embed still stands if the ticker request fails. */
      }
    }

    void load();
    const timer = window.setInterval(() => void load(), 20000);
    return () => {
      alive = false;
      window.clearInterval(timer);
    };
  }, []);

  async function copyCa() {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  const change = market?.change ?? null;

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <img src="/brand/mark.png" alt="" />
            <span className="wordmark">FABLE</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary only-desk" href="#chart">
            Live chart
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open ? (
          <nav className="nav-panel" aria-label="Mobile">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        <div className="hero-frame">
          <img
            className="hero-img"
            src="/brand/hero.png"
            alt="FABLE banner: a hooded figure before an open book, floating islands, and the line Build Beyond the Launch"
          />
        </div>

        <section className="section" id="story">
          <div className="wrap rise">
            <p className="kicker">Fable on Analos</p>
            <h1 className="display">Every idea deserves the chance to become something greater.</h1>
            <p className="path" aria-label="Ideas to identity to strategy to community">
              <span>Ideas</span>
              <span aria-hidden="true">→</span>
              <span>Identity</span>
              <span aria-hidden="true">→</span>
              <span>Strategy</span>
              <span aria-hidden="true">→</span>
              <span>Community</span>
            </p>
            <p className="lede">
              FABLE is a creator-focused project for people turning a spark into a recognizable identity,
              a clearer strategy, and a community that grows with the vision. Rooted in the ANALOS
              ecosystem. Open to ideas everywhere.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#vision">
                Read the vision
              </a>
              <a className="btn btn-ghost" href="#chart">
                View the chart
              </a>
            </div>
          </div>

          <div className="wrap">
            <ol className="cells">
              {STEPS.map((step) => (
                <li key={step.n} className="cell">
                  <step.icon size={18} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section-follow">
          <div className="wrap split">
            <div>
              <p className="kicker">01 — About</p>
              <h2 className="h2">A launch introduces an idea. Building is what follows.</h2>
            </div>
            <div className="stack">
              <p>
                Every great project starts with an idea, but a recognizable one takes more than
                inspiration. It takes identity, strategy, consistency, and people who believe in the
                vision.
              </p>
              <p>
                FABLE encourages creators to develop concepts, establish identities, improve how they
                communicate, and connect with others who share the ambition. The foundation is ANALOS.
                The same challenges show up far beyond it.
              </p>
              <p>
                We believe in building with purpose, creating with vision, and growing together.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="vision">
          <div className="wrap split">
            <div>
              <p className="kicker">02 — Vision</p>
              <h2 className="h2">More ideas. Stronger identities. Smarter strategies. Growing communities.</h2>
              <p>
                A world where creators can turn ideas into recognizable projects, say clearly what they
                stand for, and gather people around the work. Roots in ANALOS. Not limited to one
                ecosystem.
              </p>
            </div>
            <div>
              <p className="kicker">03 — Mission</p>
              <h2 className="h2">Encourage the culture, not only the beginning.</h2>
              <p>
                Building is more than launching a token or catching attention. It needs a purpose,
                consistent communication, thoughtful planning, and people who connect with it. FABLE
                exists to push better ideas, clearer identities, stronger strategies, and more connected
                communities — inside ANALOS and past its edges.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="pillars">
          <div className="wrap">
            <p className="kicker">04 — What Fable stands for</p>
            <h2 className="h2">Four principles. One journey.</h2>
            <p className="lede">
              Ideas create possibilities. Identity creates recognition. Strategy provides direction.
              Community brings people together.
            </p>
            <div className="rows">
              {ENCOURAGE.map(([title, text]) => (
                <div className="row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="roots">
          <div className="wrap">
            <p className="kicker">Built on Analos, beyond boundaries</p>
            <blockquote className="quote">
              Our roots are in ANALOS. Our mindset is built around creativity. Our vision reaches
              beyond boundaries.
            </blockquote>
            <p className="lede">
              ANALOS is where FABLE begins, and it stays part of the identity. Creativity is not
              confined to one chain of conversations. Creators everywhere are naming themselves,
              sharpening strategy, and growing communities. FABLE holds both: the ecosystem it comes
              from, and the wider habit of building with intention.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="kicker">Who it is for</p>
            <h2 className="h2">Different ideas. Different journeys. One spirit of building.</h2>
            <div className="rows">
              {AUDIENCE.map(([title, text]) => (
                <div className="row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap split">
            <div>
              <p className="kicker">The philosophy</p>
              <h2 className="h2">Launching a project and building one are not the same thing.</h2>
            </div>
            <div className="stack">
              <p>
                A name identifies a project. A clear identity helps people understand it. Visibility
                attracts attention. Meaningful communication helps people connect with the purpose.
              </p>
              <p>
                That is why FABLE focuses on the journey after the beginning. Think about what you are
                building, why, and how to develop it with more clarity.
              </p>
              <p>Build with intention. Communicate with clarity. Develop with strategy. Grow with purpose.</p>
            </div>
          </div>
          <div className="wrap">
            <div className="principles">
              {PRINCIPLES.map(([title, text]) => (
                <div className="principle" key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap split">
            <div>
              <p className="kicker">The road ahead</p>
              <h2 className="h2">One step at a time, from the beginning of the journey.</h2>
            </div>
            <div className="stack">
              <p>
                Identities develop. Strategies evolve. Communities grow through consistent effort. As
                FABLE grows, the aim is creative initiatives, collaboration, and conversations about how
                projects actually develop.
              </p>
              <p>
                One idea can begin a project. A clear identity can make it recognizable. A thoughtful
                strategy can guide it. A community can help it grow.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="chart">
          <div className="wrap">
            <p className="kicker">$FABLE · Solana</p>
            <h2 className="h2">Live chart</h2>
            <p className="lede">Contract address for FABLE on ANALOS. Confirm it before you trade.</p>
            <div className="panel chart-block">
              <div className="stats">
                <div className="stat">
                  <em>Price</em>
                  <b>{price(market?.priceUsd ?? null)}</b>
                </div>
                <div className="stat">
                  <em>Market cap</em>
                  <b>{money(market?.marketCap ?? null)}</b>
                </div>
                <div className="stat">
                  <em>24h volume</em>
                  <b>{money(market?.volume ?? null)}</b>
                </div>
                <div className="stat">
                  <em>24h change</em>
                  <b className={change == null ? undefined : change >= 0 ? "up" : "down"}>
                    {change == null ? "—" : `${change > 0 ? "+" : ""}${change.toFixed(2)}%`}
                  </b>
                </div>
              </div>
              <iframe
                className="chart-frame"
                title="FABLE live chart on DexScreener"
                src={CHART}
                loading="lazy"
              />
              <div className="ca">
                <code>{CA}</code>
                <button type="button" className="btn btn-ghost" onClick={() => void copyCa()}>
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy CA"}
                </button>
              </div>
            </div>
            <p className="sr-only" aria-live="polite">
              {copied ? "Contract address copied" : ""}
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={`https://pump.fun/coin/${CA}`} target="_blank" rel="noreferrer">
                Pump.fun
              </a>
              <a
                className="btn btn-ghost"
                href={`https://dexscreener.com/solana/${PAIR}`}
                target="_blank"
                rel="noreferrer"
              >
                DexScreener
              </a>
              <a
                className="btn btn-ghost"
                href={`https://solscan.io/token/${CA}`}
                target="_blank"
                rel="noreferrer"
              >
                Solscan
              </a>
            </div>
            <p className="note">Market figures refresh from DexScreener. Not financial advice.</p>
          </div>
        </section>

        <section className="section" id="join">
          <div className="wrap rise rise-late">
            <p className="kicker">Join the journey</p>
            <h2 className="display">Build with purpose. Grow together.</h2>
            <p className="lede">
              Every creator starts somewhere — a name, an idea, a vision waiting to be developed.
              Follow FABLE, meet the community, and stay with a culture that values creativity,
              identity, strategy, and growth. Whether you are building inside ANALOS or somewhere else.
            </p>
            <div className="socials">
              {SOCIALS.map((item) => (
                <a key={item.label} className="btn btn-ghost" href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div>
            <span className="wordmark">FABLE</span>
            <p className="foot-line">Ideas → Identity → Strategy → Community</p>
          </div>
          <p className="foot-line flat">Built on ANALOS. Open to ideas everywhere.</p>
        </div>
      </footer>
    </>
  );
}
