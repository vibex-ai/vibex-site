import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  ChevronDown,
  CircleCheck,
  Clipboard,
  Code2,
  Copy,
  Cpu,
  FileCode2,
  FileDiff,
  GitBranch,
  Github,
  Globe2,
  Layers3,
  Laptop,
  LockKeyhole,
  Menu,
  MessageSquare,
  Monitor,
  Network,
  PanelRight,
  Play,
  Plug,
  Radio,
  ScanLine,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
  createIcons,
} from "lucide";
import "./styles.css";
import {
  getInitialLanguage,
  storeLanguage,
  translate,
} from "./i18n.js";

const githubUrl = "https://github.com/vibex-ai/vibex";
let currentLanguage = getInitialLanguage();

document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

document.querySelector("#app").innerHTML = `
  <header class="site-header" data-header>
    <div class="nav-shell">
      <a class="wordmark" href="#top" aria-label="Vibex home">
        <span class="brand-mark"><img src="/assets/vibex-startup-mark.svg" alt="" /></span>
        <span>ibex</span>
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="#product">Product</a>
        <a href="#architecture">How it works</a>
        <a href="#remote">Remote</a>
        <a href="#faq">FAQ</a>
      </nav>

      <div class="nav-actions">
        <div class="language-switcher" role="group" aria-label="Language" data-language-switcher>
          <i data-lucide="globe-2"></i>
          <button type="button" data-language="en">EN</button>
          <button type="button" data-language="zh">中文</button>
        </div>
        <a class="github-link" href="${githubUrl}" target="_blank" rel="noreferrer">
          <i data-lucide="github"></i>
          <span>GitHub</span>
        </a>
        <a class="button button-small button-light" href="${githubUrl}/releases" target="_blank" rel="noreferrer">
          Get Vibex
          <i data-lucide="arrow-up-right"></i>
        </a>
      </div>

      <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false" data-menu-button>
        <i class="menu-open-icon" data-lucide="menu"></i>
        <i class="menu-close-icon" data-lucide="x"></i>
      </button>
    </div>

    <div class="mobile-nav" data-mobile-nav>
      <a href="#product">Product</a>
      <a href="#architecture">How it works</a>
      <a href="#remote">Remote</a>
      <a href="#faq">FAQ</a>
      <a href="${githubUrl}" target="_blank" rel="noreferrer">GitHub <i data-lucide="arrow-up-right"></i></a>
      <div class="mobile-language">
        <span><i data-lucide="globe-2"></i> Language</span>
        <div class="language-switcher" role="group" aria-label="Language" data-language-switcher>
          <button type="button" data-language="en">EN</button>
          <button type="button" data-language="zh">中文</button>
        </div>
      </div>
    </div>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="hero-layout">
          <div class="hero-copy reveal">
            <h1>A native workbench<br />for code and agents.</h1>
            <p class="hero-lede">
              Run AI agents beside your files, terminal, Git, and previews while your machine stays in charge.
            </p>
          </div>

          <div class="hero-actions reveal">
            <a class="button button-primary" href="${githubUrl}/releases" target="_blank" rel="noreferrer">
              Get Vibex
              <i data-lucide="arrow-right"></i>
            </a>
            <a class="text-link" href="${githubUrl}" target="_blank" rel="noreferrer">
              <i data-lucide="github"></i>
              View source
              <i data-lucide="arrow-up-right"></i>
            </a>
          </div>
        </div>

        <div class="product-stage reveal" data-hero-stage>
          <div class="stage-topbar">
            <div class="window-dots"><span></span><span></span><span></span></div>
            <div class="stage-title"><img src="/assets/vibex-mark.svg" alt="" /> vibex / agent-session-core</div>
            <div class="stage-status"><span></span> Local runtime ready</div>
          </div>
          <div class="stage-image-wrap">
            <img src="/assets/workbench.png" alt="Vibex native desktop workbench showing an agent timeline, terminal, and workspace rail" />
          </div>
          <div class="stage-badge stage-badge-agent"><i data-lucide="bot"></i> Agent working</div>
          <div class="stage-badge stage-badge-local"><i data-lucide="shield-check"></i> Local authority</div>
        </div>
      </div>
    </section>

    <section class="signal-strip" aria-label="Product capabilities">
      <div class="signal-track">
        <span><i data-lucide="bot"></i> Agent sessions</span>
        <span><i data-lucide="file-code-2"></i> Files and previews</span>
        <span><i data-lucide="git-branch"></i> Git workflow</span>
        <span><i data-lucide="terminal"></i> Native terminal</span>
        <span><i data-lucide="smartphone"></i> Mobile handoff</span>
        <span><i data-lucide="lock-keyhole"></i> Encrypted relay</span>
      </div>
    </section>

    <section class="intro-section section-shell" id="product">
      <div class="section-kicker reveal"><span>01</span> One focused surface</div>
      <div class="intro-heading reveal">
        <h2>Direct the work.<br /><em>Keep the context.</em></h2>
        <p>
          Vibex brings the whole coding loop into one native workspace, so agents can work with real context and you can inspect every change without switching tools.
        </p>
      </div>

      <div class="showcase reveal" data-showcase>
        <div class="showcase-tabs" role="tablist" aria-label="Vibex product views">
          <button class="showcase-tab is-active" type="button" role="tab" aria-selected="true" data-view="agent">
            <span>01</span><i data-lucide="message-square"></i> Agent timeline
          </button>
          <button class="showcase-tab" type="button" role="tab" aria-selected="false" data-view="git">
            <span>02</span><i data-lucide="file-diff"></i> Git and diff
          </button>
          <button class="showcase-tab" type="button" role="tab" aria-selected="false" data-view="providers">
            <span>03</span><i data-lucide="plug"></i> Agent control
          </button>
        </div>

        <div class="showcase-media">
          <img data-showcase-image src="/assets/workbench.png" alt="Vibex agent workbench" />
          <div class="image-scanline" aria-hidden="true"></div>
        </div>

        <div class="showcase-caption" aria-live="polite">
          <div class="caption-index" data-caption-index>01 / 03</div>
          <div>
            <h3 data-caption-title>Stay above the loop.</h3>
            <p data-caption-copy>Plans, tool calls, approvals, and results live in a structured timeline you can actually scan.</p>
          </div>
          <div class="caption-tags" data-caption-tags>
            <span>Typed events</span><span>Explicit approvals</span><span>Full history</span>
          </div>
        </div>
      </div>
    </section>

    <section class="feature-band">
      <div class="section-shell">
        <div class="feature-grid">
          <article class="feature-card reveal">
            <div class="feature-number">01</div>
            <div class="feature-icon"><i data-lucide="cpu"></i></div>
            <h3>Native by design</h3>
            <p>A Rust-first GPUI desktop app built for fast startup, durable sessions, and long-running work.</p>
            <div class="feature-foot">Rust · GPUI · SQLite</div>
          </article>
          <article class="feature-card reveal">
            <div class="feature-number">02</div>
            <div class="feature-icon feature-icon-coral"><i data-lucide="workflow"></i></div>
            <h3>Your agents, together</h3>
            <p>Use Codex, Claude Code, and ACP-compatible agents from one consistent, provider-neutral workspace.</p>
            <div class="feature-foot">Codex · Claude · ACP</div>
          </article>
          <article class="feature-card reveal">
            <div class="feature-number">03</div>
            <div class="feature-icon feature-icon-blue"><i data-lucide="panel-right"></i></div>
            <h3>Context within reach</h3>
            <p>Files, diffs, terminal state, previews, permissions, and agent output stay connected to the task.</p>
            <div class="feature-foot">Files · Git · Terminal</div>
          </article>
        </div>
      </div>
    </section>

    <section class="architecture-section" id="architecture">
      <div class="section-shell architecture-shell">
        <div class="architecture-copy reveal">
          <div class="section-kicker section-kicker-dark"><span>02</span> Local-first architecture</div>
          <h2>One runtime.<br />No hidden middleman.</h2>
          <p>
            Your desktop is the sole authority for sessions, files, Git, terminals, providers, and permissions. Vibex adds a better control surface, not another cloud that owns your work.
          </p>
          <ul class="check-list">
            <li><i data-lucide="check"></i> Workspace state stays on your machine</li>
            <li><i data-lucide="check"></i> Provider credentials remain under your control</li>
            <li><i data-lucide="check"></i> Every privileged action can require approval</li>
          </ul>
          <a class="inline-link-dark" href="${githubUrl}#readme" target="_blank" rel="noreferrer">Read the architecture <i data-lucide="arrow-up-right"></i></a>
        </div>

        <div class="architecture-diagram reveal" aria-label="Vibex local-first architecture diagram">
          <div class="diagram-label">YOUR MACHINE</div>
          <div class="diagram-core">
            <div class="core-head"><img src="/assets/vibex-mark.svg" alt="" /><span>Vibex desktop runtime</span><i data-lucide="circle-check"></i></div>
            <div class="core-grid">
              <span><i data-lucide="bot"></i> Agents</span>
              <span><i data-lucide="file-code-2"></i> Files</span>
              <span><i data-lucide="git-branch"></i> Git</span>
              <span><i data-lucide="terminal"></i> Terminal</span>
            </div>
          </div>
          <div class="diagram-connection">
            <span class="pulse-dot"></span>
            <div></div>
            <span>typed + encrypted</span>
            <div></div>
            <span class="pulse-dot"></span>
          </div>
          <div class="diagram-clients">
            <div class="client-node"><i data-lucide="smartphone"></i><span>Native mobile</span><small>Remote client</small></div>
            <div class="client-node"><i data-lucide="server"></i><span>Optional relay</span><small>Zero-knowledge</small></div>
          </div>
          <div class="diagram-note"><i data-lucide="lock-keyhole"></i> The relay forwards encrypted frames. It never becomes a second state authority.</div>
        </div>
      </div>
    </section>

    <section class="remote-section" id="remote">
      <div class="remote-grid-pattern" aria-hidden="true"></div>
      <div class="section-shell remote-shell">
        <div class="phone-scene reveal">
          <div class="phone-shadow"></div>
          <div class="phone-frame">
            <div class="phone-speaker"></div>
            <img src="/assets/mobile-session.png" alt="Vibex Remote session list on a mobile device" />
          </div>
          <div class="remote-chip chip-direct"><i data-lucide="radio"></i><span>Direct route</span><small>12 ms</small></div>
          <div class="remote-chip chip-secure"><i data-lucide="shield-check"></i><span>Encrypted</span><small>End to end</small></div>
        </div>

        <div class="remote-copy reveal">
          <div class="section-kicker"><span>03</span> Native mobile</div>
          <h2>Your agent is still working. You don't have to be.</h2>
          <p>
            Pair your phone once, then review progress, answer permission requests, and continue the conversation away from your desk. The desktop still owns the work.
          </p>
          <div class="remote-points">
            <div><i data-lucide="scan-line"></i><span><strong>Pair in seconds</strong>One-time QR offer with scoped device permissions.</span></div>
            <div><i data-lucide="network"></i><span><strong>Best route wins</strong>Connect directly or through your self-hosted relay.</span></div>
            <div><i data-lucide="lock-keyhole"></i><span><strong>Private by construction</strong>Relay traffic stays end-to-end encrypted.</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="workflow-section">
      <div class="section-shell">
        <div class="workflow-heading reveal">
          <div class="section-kicker"><span>04</span> The whole loop</div>
          <h2>From prompt to<br />reviewed change.</h2>
        </div>
        <div class="workflow-steps reveal">
          <div class="workflow-line" aria-hidden="true"><span></span></div>
          <article>
            <span>01</span><i data-lucide="message-square"></i><h3>Direct</h3><p>Give the agent a task with the actual workspace in view.</p>
          </article>
          <article>
            <span>02</span><i data-lucide="zap"></i><h3>Observe</h3><p>Follow plans, tool calls, terminal output, and approvals live.</p>
          </article>
          <article>
            <span>03</span><i data-lucide="file-diff"></i><h3>Review</h3><p>Inspect changed files and diffs beside the conversation.</p>
          </article>
          <article>
            <span>04</span><i data-lucide="git-branch"></i><h3>Ship</h3><p>Commit with the full context of how the work was produced.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="open-section">
      <div class="section-shell open-shell">
        <div class="open-copy reveal">
          <div class="section-kicker section-kicker-dark"><span>05</span> Open source</div>
          <h2>Inspect the tool that inspects your code.</h2>
          <p>Vibex is licensed under AGPL-3.0-or-later. Read the source, build it yourself, or help shape what comes next.</p>
          <div class="open-actions">
            <a class="button button-dark" href="${githubUrl}" target="_blank" rel="noreferrer"><i data-lucide="github"></i> Open GitHub <i data-lucide="arrow-up-right"></i></a>
            <span>Rust-first · Local-first · Community-built</span>
          </div>
        </div>
        <div class="code-panel reveal">
          <div class="code-panel-head"><span>Build from source</span><span>bash</span></div>
          <pre><code><span class="prompt">$</span> git clone https://github.com/vibex-ai/vibex
<span class="prompt">$</span> cd vibex
<span class="prompt">$</span> pnpm install --frozen-lockfile
<span class="prompt">$</span> pnpm dev:desktop</code></pre>
          <button class="copy-button" type="button" data-copy-command title="Copy build commands" aria-label="Copy build commands"><i data-lucide="copy"></i></button>
          <div class="code-status"><span></span> Rust 1.97 · Node 22 · pnpm 11</div>
        </div>
      </div>
    </section>

    <section class="faq-section section-shell" id="faq">
      <div class="faq-heading reveal">
        <div class="section-kicker"><span>06</span> Questions</div>
        <h2>The important details.</h2>
      </div>
      <div class="faq-list reveal">
        <details>
          <summary><span>Is Vibex another code editor?</span><i data-lucide="chevron-down"></i></summary>
          <p>Vibex is an AI coding workbench. It coordinates agent sessions with your files, Git, terminal, previews, and permissions, while still letting you open the project in your preferred editor.</p>
        </details>
        <details>
          <summary><span>Does my code live in Vibex's cloud?</span><i data-lucide="chevron-down"></i></summary>
          <p>No. The native desktop runtime remains the authority for workspace data and execution. Agents still contact the providers you configure, under their own policies.</p>
        </details>
        <details>
          <summary><span>Which agents can I use?</span><i data-lucide="chevron-down"></i></summary>
          <p>Vibex includes integrations for Codex and Claude Code, plus support for agents that speak the Agent Client Protocol (ACP). Provider and model profiles stay configurable.</p>
        </details>
        <details>
          <summary><span>How does mobile access work?</span><i data-lucide="chevron-down"></i></summary>
          <p>The native mobile client pairs with your desktop and renders the same typed session timeline. It can connect directly or through an optional end-to-end encrypted relay.</p>
        </details>
        <details>
          <summary><span>Which platforms are supported?</span><i data-lucide="chevron-down"></i></summary>
          <p>The project includes a native desktop application plus native Android and iOS clients. Check the latest release notes for current packaged builds and platform requirements.</p>
        </details>
      </div>
    </section>

    <section class="final-cta">
      <div class="final-grid" aria-hidden="true"></div>
      <div class="section-shell final-inner reveal">
        <img src="/assets/vibex-mark.svg" alt="" />
        <h2>Build at the speed of thought.<br /><span>Keep your hands on the wheel.</span></h2>
        <div class="final-actions">
          <a class="button button-primary" href="${githubUrl}/releases" target="_blank" rel="noreferrer">Get Vibex <i data-lucide="arrow-right"></i></a>
          <a class="text-link" href="${githubUrl}" target="_blank" rel="noreferrer"><i data-lucide="github"></i> Star on GitHub <i data-lucide="arrow-up-right"></i></a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-main section-shell">
      <div class="footer-brand">
        <a class="wordmark" href="#top"><span class="brand-mark"><img src="/assets/vibex-startup-mark.svg" alt="" /></span><span>ibex</span></a>
        <p>The local-first AI coding workbench.</p>
      </div>
      <div class="footer-links">
        <div><span>Product</span><a href="#product">Workbench</a><a href="#remote">Mobile</a><a href="${githubUrl}/releases" target="_blank" rel="noreferrer">Releases</a></div>
        <div><span>Resources</span><a href="${githubUrl}#readme" target="_blank" rel="noreferrer">Documentation</a><a href="${githubUrl}" target="_blank" rel="noreferrer">GitHub</a><a href="${githubUrl}/issues" target="_blank" rel="noreferrer">Issues</a></div>
        <div><span>Project</span><a href="${githubUrl}/blob/main/LICENSE" target="_blank" rel="noreferrer">License</a><a href="${githubUrl}/commits/main" target="_blank" rel="noreferrer">Changelog</a><a href="${githubUrl}/graphs/contributors" target="_blank" rel="noreferrer">Contributors</a></div>
      </div>
    </div>
    <div class="footer-bottom section-shell">
      <span>© <span data-year></span> Vibex contributors</span>
      <span>AGPL-3.0-or-later</span>
      <a href="#top">Back to top <i data-lucide="arrow-up-right"></i></a>
    </div>
  </footer>

  <div class="toast" role="status" aria-live="polite" data-toast><i data-lucide="check"></i> Commands copied</div>
`;

createIcons({
  icons: {
    ArrowRight,
    ArrowUpRight,
    Bot,
    Braces,
    Check,
    ChevronDown,
    CircleCheck,
    Clipboard,
    Code2,
    Copy,
    Cpu,
    FileCode2,
    FileDiff,
    GitBranch,
    Github,
    Globe2,
    Layers3,
    Laptop,
    LockKeyhole,
    Menu,
    MessageSquare,
    Monitor,
    Network,
    PanelRight,
    Play,
    Plug,
    Radio,
    ScanLine,
    Server,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Terminal,
    Workflow,
    X,
    Zap,
  },
});

const textBindings = [
  [".skip-link", "accessibility.skip"],
  [".desktop-nav a:nth-child(1)", "nav.product"],
  [".desktop-nav a:nth-child(2)", "nav.how"],
  [".desktop-nav a:nth-child(3)", "nav.remote"],
  [".desktop-nav a:nth-child(4)", "nav.faq"],
  [".nav-actions .button-light", "nav.get"],
  [".hero-actions .button-primary", "nav.get"],
  [".final-actions .button-primary", "nav.get"],
  [".mobile-nav a:nth-child(1)", "nav.product"],
  [".mobile-nav a:nth-child(2)", "nav.how"],
  [".mobile-nav a:nth-child(3)", "nav.remote"],
  [".mobile-nav a:nth-child(4)", "nav.faq"],
  [".hero .eyebrow", "hero.eyebrow"],
  [".hero-lede", "hero.lede"],
  [".hero-actions .text-link", "hero.source"],
  [".hero-meta div:nth-child(2)", "hero.meta.local"],
  [".hero-meta div:nth-child(3)", "hero.meta.devices"],
  [".stage-status", "stage.ready"],
  [".stage-badge-agent", "stage.working"],
  [".stage-badge-local", "stage.authority"],
  [".signal-track span:nth-child(1)", "signals.sessions"],
  [".signal-track span:nth-child(2)", "signals.files"],
  [".signal-track span:nth-child(3)", "signals.git"],
  [".signal-track span:nth-child(4)", "signals.terminal"],
  [".signal-track span:nth-child(5)", "signals.mobile"],
  [".signal-track span:nth-child(6)", "signals.relay"],
  [".intro-section .section-kicker", "intro.kicker"],
  [".intro-heading p", "intro.copy"],
  [".showcase-tab:nth-child(1)", "showcase.agent"],
  [".showcase-tab:nth-child(2)", "showcase.git"],
  [".showcase-tab:nth-child(3)", "showcase.providers"],
  [".feature-card:nth-child(1) h3", "features.native.title"],
  [".feature-card:nth-child(1) p", "features.native.copy"],
  [".feature-card:nth-child(2) h3", "features.agents.title"],
  [".feature-card:nth-child(2) p", "features.agents.copy"],
  [".feature-card:nth-child(3) h3", "features.context.title"],
  [".feature-card:nth-child(3) p", "features.context.copy"],
  [".architecture-copy .section-kicker", "architecture.kicker"],
  [".architecture-copy > p", "architecture.copy"],
  [".check-list li:nth-child(1)", "architecture.check.workspace"],
  [".check-list li:nth-child(2)", "architecture.check.credentials"],
  [".check-list li:nth-child(3)", "architecture.check.approval"],
  [".inline-link-dark", "architecture.link"],
  [".diagram-label", "architecture.machine"],
  [".core-head span", "architecture.runtime"],
  [".core-grid span:nth-child(1)", "architecture.agents"],
  [".core-grid span:nth-child(2)", "architecture.files"],
  [".core-grid span:nth-child(3)", "architecture.git"],
  [".core-grid span:nth-child(4)", "architecture.terminal"],
  [".diagram-connection > span:nth-of-type(2)", "architecture.connection"],
  [".client-node:nth-child(1) span", "architecture.mobile"],
  [".client-node:nth-child(1) small", "architecture.remoteClient"],
  [".client-node:nth-child(2) span", "architecture.relay"],
  [".client-node:nth-child(2) small", "architecture.zeroKnowledge"],
  [".diagram-note", "architecture.note"],
  [".remote-chip.chip-direct span", "remote.direct"],
  [".remote-chip.chip-secure span", "remote.encrypted"],
  [".remote-chip.chip-secure small", "remote.endToEnd"],
  [".remote-copy .section-kicker", "remote.kicker"],
  [".remote-copy > p", "remote.copy"],
  [".remote-points > div:nth-child(1) strong", "remote.pair.title"],
  [".remote-points > div:nth-child(1) span", "remote.pair.copy"],
  [".remote-points > div:nth-child(2) strong", "remote.route.title"],
  [".remote-points > div:nth-child(2) span", "remote.route.copy"],
  [".remote-points > div:nth-child(3) strong", "remote.private.title"],
  [".remote-points > div:nth-child(3) span", "remote.private.copy"],
  [".workflow-heading .section-kicker", "workflow.kicker"],
  [".workflow-steps article:nth-of-type(1) h3", "workflow.direct.title"],
  [".workflow-steps article:nth-of-type(1) p", "workflow.direct.copy"],
  [".workflow-steps article:nth-of-type(2) h3", "workflow.observe.title"],
  [".workflow-steps article:nth-of-type(2) p", "workflow.observe.copy"],
  [".workflow-steps article:nth-of-type(3) h3", "workflow.review.title"],
  [".workflow-steps article:nth-of-type(3) p", "workflow.review.copy"],
  [".workflow-steps article:nth-of-type(4) h3", "workflow.ship.title"],
  [".workflow-steps article:nth-of-type(4) p", "workflow.ship.copy"],
  [".open-copy .section-kicker", "open.kicker"],
  [".open-copy > p", "open.copy"],
  [".open-copy .open-actions .button-dark", "open.github"],
  [".open-actions > span", "open.principles"],
  [".code-panel-head span:first-child", "open.build"],
  [".faq-heading .section-kicker", "faq.kicker"],
  [".faq-list details:nth-child(1) summary span", "faq.editor.q"],
  [".faq-list details:nth-child(1) p", "faq.editor.a"],
  [".faq-list details:nth-child(2) summary span", "faq.cloud.q"],
  [".faq-list details:nth-child(2) p", "faq.cloud.a"],
  [".faq-list details:nth-child(3) summary span", "faq.agents.q"],
  [".faq-list details:nth-child(3) p", "faq.agents.a"],
  [".faq-list details:nth-child(4) summary span", "faq.mobile.q"],
  [".faq-list details:nth-child(4) p", "faq.mobile.a"],
  [".faq-list details:nth-child(5) summary span", "faq.platforms.q"],
  [".faq-list details:nth-child(5) p", "faq.platforms.a"],
  [".final-actions .text-link", "cta.star"],
  [".footer-brand p", "footer.tagline"],
  [".footer-links > div:nth-child(1) > span", "footer.product"],
  [".footer-links > div:nth-child(1) a:nth-of-type(1)", "footer.workbench"],
  [".footer-links > div:nth-child(1) a:nth-of-type(2)", "footer.mobile"],
  [".footer-links > div:nth-child(1) a:nth-of-type(3)", "footer.releases"],
  [".footer-links > div:nth-child(2) > span", "footer.resources"],
  [".footer-links > div:nth-child(2) a:nth-of-type(1)", "footer.documentation"],
  [".footer-links > div:nth-child(2) a:nth-of-type(3)", "footer.issues"],
  [".footer-links > div:nth-child(3) > span", "footer.project"],
  [".footer-links > div:nth-child(3) a:nth-of-type(1)", "footer.license"],
  [".footer-links > div:nth-child(3) a:nth-of-type(2)", "footer.changelog"],
  [".footer-links > div:nth-child(3) a:nth-of-type(3)", "footer.contributors"],
  [".footer-bottom > a", "footer.back"],
];

const htmlBindings = [
  [".hero h1", "hero.title"],
  [".intro-heading h2", "intro.title"],
  [".architecture-copy h2", "architecture.title"],
  [".remote-copy h2", "remote.title"],
  [".workflow-heading h2", "workflow.title"],
  [".open-copy h2", "open.title"],
  [".faq-heading h2", "faq.title"],
  [".final-inner h2", "cta.title"],
];

const attrBindings = [
  [".skip-link", "aria-label", "accessibility.skip"],
  [".wordmark", "aria-label", "accessibility.home"],
  [".desktop-nav", "aria-label", "nav.primary"],
  [".signal-strip", "aria-label", "signals.label"],
  [".showcase-tabs", "aria-label", "showcase.label"],
  [".architecture-diagram", "aria-label", "architecture.diagram.label"],
  ["[data-copy-command]", "title", "open.copyCommands"],
  ["[data-copy-command]", "aria-label", "open.copyCommands"],
  [".stage-image-wrap img", "alt", "stage.alt"],
  [".phone-frame img", "alt", "remote.imageAlt"],
];

function setOwnText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    const textNode = [...element.childNodes].find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );
    if (textNode) {
      textNode.textContent = ` ${value}`;
    } else {
      element.append(document.createTextNode(value));
    }
  });
}

function setBindingText(selector, key) {
  setOwnText(selector, translate(currentLanguage, key));
}

function applyLanguage(language, { persist = true } = {}) {
  currentLanguage = language === "zh" ? "zh" : "en";
  if (persist) storeLanguage(currentLanguage);

  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = translate(currentLanguage, "meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", translate(currentLanguage, "meta.description"));
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", translate(currentLanguage, "meta.title"));
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", translate(currentLanguage, "meta.ogDescription"));
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", currentLanguage === "zh" ? "zh_CN" : "en_US");

  textBindings.forEach(([selector, key]) => setBindingText(selector, key));
  htmlBindings.forEach(([selector, key]) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = translate(currentLanguage, key);
  });
  attrBindings.forEach(([selector, attribute, key]) => {
    document.querySelectorAll(selector).forEach((element) => element.setAttribute(attribute, translate(currentLanguage, key)));
  });

  const menuOpen = menuButton?.getAttribute("aria-expanded") === "true";
  menuButton?.setAttribute("aria-label", translate(currentLanguage, menuOpen ? "nav.close" : "nav.open"));
  document.querySelectorAll("[data-language-switcher]").forEach((switcher) => {
    switcher.setAttribute("aria-label", translate(currentLanguage, "language.label"));
  });
  setBindingText(".mobile-language > span", "language.label");
  document.querySelectorAll("[data-language]").forEach((button) => {
    const selected = button.dataset.language === currentLanguage;
    button.setAttribute("aria-pressed", String(selected));
    const label = translate(currentLanguage, button.dataset.language === "zh" ? "language.chinese" : "language.english");
    button.setAttribute("title", label);
    button.setAttribute("aria-label", label);
  });

  const activeView = document.querySelector("[data-view].is-active")?.dataset.view ?? "agent";
  updateShowcaseCopy(activeView, false);
  setOwnText("[data-toast]", toast?.dataset.toastKey === "failed" ? translate(currentLanguage, "toast.failed") : translate(currentLanguage, "toast.copied"));
  const copyright = document.querySelector(".footer-bottom > span:first-child");
  if (copyright) copyright.innerHTML = `© <span data-year>${new Date().getFullYear()}</span> ${translate(currentLanguage, "footer.copyright")}`;
}

const views = {
  agent: {
    src: "/assets/workbench.png",
    altKey: "showcase.agent.alt",
    index: "01 / 03",
    titleKey: "showcase.agent.title",
    copyKey: "showcase.agent.copy",
    tagsKey: "showcase.agent.tags",
  },
  git: {
    src: "/assets/git-diff.png",
    altKey: "showcase.git.alt",
    index: "02 / 03",
    titleKey: "showcase.git.title",
    copyKey: "showcase.git.copy",
    tagsKey: "showcase.git.tags",
  },
  providers: {
    src: "/assets/providers.png",
    altKey: "showcase.providers.alt",
    index: "03 / 03",
    titleKey: "showcase.providers.title",
    copyKey: "showcase.providers.copy",
    tagsKey: "showcase.providers.tags",
  },
};

function getViewCopy(view) {
  return {
    alt: translate(currentLanguage, view.altKey),
    title: translate(currentLanguage, view.titleKey),
    copy: translate(currentLanguage, view.copyKey),
    tags: translate(currentLanguage, view.tagsKey),
  };
}

function updateShowcaseCopy(viewKey, animate = true) {
  const view = views[viewKey];
  if (!view) return;
  const copy = getViewCopy(view);
  const update = () => {
    showcaseImage.src = view.src;
    showcaseImage.alt = copy.alt;
    document.querySelector("[data-caption-index]").textContent = view.index;
    document.querySelector("[data-caption-title]").textContent = copy.title;
    document.querySelector("[data-caption-copy]").textContent = copy.copy;
    document.querySelector("[data-caption-tags]").innerHTML = copy.tags.map((tag) => `<span>${tag}</span>`).join("");
    showcase.classList.remove("is-changing");
  };

  if (animate) {
    showcase.classList.add("is-changing");
    window.setTimeout(update, 180);
  } else {
    update();
  }
}

const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", translate(currentLanguage, open ? "nav.close" : "nav.open"));
  menuButton.classList.toggle("is-open", open);
  mobileNav.classList.toggle("is-open", open);
}

menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

const header = document.querySelector("[data-header]");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const showcaseImage = document.querySelector("[data-showcase-image]");
const showcase = document.querySelector("[data-showcase]");

document.querySelectorAll("[data-view]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const view = views[tab.dataset.view];
    if (!view || tab.classList.contains("is-active")) return;

    document.querySelectorAll("[data-view]").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });

    updateShowcaseCopy(tab.dataset.view);
  });
});

const copyButton = document.querySelector("[data-copy-command]");
const toast = document.querySelector("[data-toast]");
const command = `git clone https://github.com/vibex-ai/vibex
cd vibex
pnpm install --frozen-lockfile
pnpm dev:desktop`;

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(command);
    toast.dataset.toastKey = "copied";
    setOwnText("[data-toast]", translate(currentLanguage, "toast.copied"));
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
  } catch {
    toast.dataset.toastKey = "failed";
    setOwnText("[data-toast]", translate(currentLanguage, "toast.failed"));
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 2500);
  }
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
toast.dataset.toastKey = "copied";

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

applyLanguage(currentLanguage, { persist: false });
