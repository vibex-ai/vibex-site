import {
  Activity,
  AtSign,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Bot,
  Braces,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsRight,
  ChevronsRightLeft,
  CircleDot,
  CircleCheck,
  Clock3,
  Clipboard,
  Code2,
  Copy,
  Cpu,
  Crosshair,
  Download,
  Eye,
  FileCode2,
  FileDiff,
  FileText,
  Folder,
  FolderOpen,
  GitBranch,
  GitCommitHorizontal,
  Github,
  Ellipsis,
  KeyRound,
  Globe2,
  Layers3,
  LoaderCircle,
  Laptop,
  LockKeyhole,
  Maximize2,
  Menu,
  Minus,
  MessageSquare,
  Monitor,
  Network,
  PanelRight,
  PanelLeft,
  PanelLeftClose,
  PanelRightClose,
  Paperclip,
  Play,
  Plug,
  Plus,
  RefreshCw,
  Radio,
  RotateCcw,
  ScanLine,
  ScanSearch,
  Server,
  Search,
  Settings,
  ShieldCheck,
  ShieldAlert,
  Smartphone,
  Square,
  Sparkles,
  Settings2,
  SquareTerminal,
  SunMedium,
  Terminal,
  TriangleAlert,
  UserRound,
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
        <a class="github-link" href="${githubUrl}" target="_blank" rel="noreferrer">
          <i data-lucide="github"></i>
          <span>GitHub</span>
        </a>
        <div class="language-switcher" data-language-switcher>
          <button class="language-trigger" type="button" aria-haspopup="listbox" aria-expanded="false" data-language-trigger>
            <span data-language-current>English</span>
            <i data-lucide="chevron-down"></i>
          </button>
          <div class="language-menu" role="listbox">
            <button type="button" role="option" data-language="en">
              <span data-language-name="en">English</span>
              <i data-language-check data-lucide="check"></i>
            </button>
            <button type="button" role="option" data-language="zh">
              <span data-language-name="zh">简体中文</span>
              <i data-language-check data-lucide="check"></i>
            </button>
          </div>
        </div>
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
        <span>Language</span>
        <div class="language-switcher" data-language-switcher>
          <button class="language-trigger" type="button" aria-haspopup="listbox" aria-expanded="false" data-language-trigger>
            <span data-language-current>English</span>
            <i data-lucide="chevron-down"></i>
          </button>
          <div class="language-menu" role="listbox">
            <button type="button" role="option" data-language="en">
              <span data-language-name="en">English</span>
              <i data-language-check data-lucide="check"></i>
            </button>
            <button type="button" role="option" data-language="zh">
              <span data-language-name="zh">简体中文</span>
              <i data-language-check data-lucide="check"></i>
            </button>
          </div>
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

          <div class="hero-side reveal">
            <p class="hero-download-lede" data-hero-download-lede>
              Download Vibex and bring your agents into one local-first workbench.
            </p>
            <div class="hero-actions">
              <div class="hero-buttons">
                <a class="button button-primary" href="${githubUrl}/releases/latest" target="_blank" rel="noreferrer">
                  <i data-lucide="download"></i>
                  <span data-hero-download>Download for Linux</span>
                  <i data-lucide="arrow-right"></i>
                </a>
                <a class="button hero-github" href="${githubUrl}" target="_blank" rel="noreferrer">
                  <i data-lucide="github"></i>
                  <span data-hero-github>View on GitHub</span>
                </a>
              </div>
              <a class="hero-download-options" href="${githubUrl}/releases" target="_blank" rel="noreferrer" data-hero-download-options>
                All download options
              </a>
            </div>
            <div class="agent-support" aria-label="Supported agents">
              <span class="agent-support-label" data-hero-supports>Supports</span>
              <div class="agent-list">
                <span class="agent-logo" title="Claude Code"><img src="/assets/agents/claude.svg" alt="Claude Code" /></span>
                <span class="agent-logo agent-logo-mono" title="OpenAI Codex"><img src="/assets/agents/openai.svg" alt="OpenAI Codex" /></span>
                <span class="agent-logo" title="Gemini CLI"><img src="/assets/agents/gemini.svg" alt="Gemini CLI" /></span>
                <span class="agent-logo agent-logo-mono" title="GitHub Copilot"><img src="/assets/agents/copilot.svg" alt="GitHub Copilot" /></span>
                <span class="agent-logo" title="OpenCode"><img src="/assets/agents/opencode.svg" alt="OpenCode" /></span>
                <span class="agent-logo" title="Qwen Code"><img src="/assets/agents/qwen.svg" alt="Qwen Code" /></span>
                <span class="agent-more" data-hero-more-agents>+28 more</span>
              </div>
            </div>
          </div>
        </div>

        <div class="desktop-showcase reveal" data-desktop-showcase>
          <div class="showcase-glow" aria-hidden="true"></div>
          <div class="desktop-showcase-tabs" role="tablist" aria-label="Vibex desktop workbench" data-desktop-tablist>
            <button class="desktop-showcase-tab is-active" type="button" role="tab" aria-selected="true" data-desktop-view="agent"><i data-lucide="message-square"></i><span data-desktop-tab="agent">Agent workbench</span></button>
            <button class="desktop-showcase-tab" type="button" role="tab" aria-selected="false" data-desktop-view="preview"><i data-lucide="code-2"></i><span data-desktop-tab="preview">Preview</span></button>
            <button class="desktop-showcase-tab" type="button" role="tab" aria-selected="false" data-desktop-view="files"><i data-lucide="folder-open"></i><span data-desktop-tab="files">Files &amp; Git</span></button>
            <button class="desktop-showcase-tab" type="button" role="tab" aria-selected="false" data-desktop-view="management"><i data-lucide="settings"></i><span data-desktop-tab="management">Config Center</span></button>
          </div>
          <div class="desktop-showcase-viewport" data-desktop-viewport>
            <div class="desktop-showcase-canvas" data-desktop-canvas>
              <div class="desktop-app" aria-label="Vibex desktop workbench">
                <header class="desktop-titlebar">
                  <div class="desktop-titlebar-left">
                    <button class="desktop-icon-button" type="button" data-desktop-action="sidebar" aria-label="Toggle sidebar"><i data-lucide="panel-left-close"></i></button>
                    <button class="desktop-icon-button is-disabled" type="button" aria-label="Go back"><i data-lucide="arrow-left"></i></button>
                    <button class="desktop-icon-button is-disabled" type="button" aria-label="Go forward"><i data-lucide="arrow-right"></i></button>
                  </div>
                  <div class="desktop-title-context"><strong>Design the product surface</strong><span><b>vibex</b><i data-lucide="git-branch"></i>codex/agent-session-core</span></div>
                  <div class="desktop-titlebar-right"><button class="desktop-icon-button" type="button" aria-label="More session actions"><i data-lucide="ellipsis"></i></button><button class="desktop-icon-button" type="button" data-desktop-action="pair" aria-label="Pair mobile"><i data-lucide="smartphone"></i></button><button class="desktop-icon-button" type="button" data-desktop-action="settings" aria-label="Open settings"><i data-lucide="settings"></i></button><span class="desktop-runtime-dot" aria-label="Local runtime ready"></span><span class="desktop-window-controls"><button class="desktop-icon-button" type="button" aria-label="Minimize"><i data-lucide="minus"></i></button><button class="desktop-icon-button" type="button" aria-label="Maximize"><i data-lucide="square"></i></button><button class="desktop-icon-button" type="button" aria-label="Close"><i data-lucide="x"></i></button></span></div>
                </header>
                <div class="desktop-shell is-right-rail-collapsed" data-desktop-shell>
                  <aside class="desktop-sidebar">
                    <div class="desktop-sidebar-actions"><button class="desktop-sidebar-button" type="button" data-desktop-action="new-session"><i data-lucide="plus"></i><span>New chat</span></button><button class="desktop-sidebar-button" type="button" data-desktop-action="management"><i data-lucide="settings"></i><span>Config Center</span></button><button class="desktop-sidebar-button" type="button" data-desktop-action="usage"><i data-lucide="activity"></i><span>Usage Statistics</span></button></div>
                    <div class="desktop-sidebar-divider"></div>
                    <div class="desktop-project-heading"><span>Projects</span><div><button class="desktop-icon-button" type="button" aria-label="More projects"><i data-lucide="ellipsis"></i></button><button class="desktop-icon-button" type="button" aria-label="Collapse projects"><i data-lucide="chevrons-right-left"></i></button><button class="desktop-icon-button" type="button" aria-label="Locate current session"><i data-lucide="crosshair"></i></button><button class="desktop-icon-button" type="button" aria-label="New project"><i data-lucide="plus"></i></button><button class="desktop-icon-button" type="button" aria-label="Search sessions"><i data-lucide="search"></i></button></div></div>
                    <div class="desktop-project-row"><i data-lucide="folder"></i><strong>vibex</strong><span>2</span></div>
                    <div class="desktop-workspace-row"><span class="desktop-status-dot"></span><div><strong>codex/agent-session-core</strong><small>Current Checkout</small></div><i data-lucide="chevron-down"></i></div>
                    <div class="desktop-session-list"><button class="desktop-session-row is-selected" type="button" data-desktop-action="agent"><span class="desktop-agent-glyph"><i data-lucide="sparkles"></i></span><span><strong>Design the product surface</strong><small>just now</small></span><i data-lucide="ellipsis"></i></button><button class="desktop-session-row" type="button" data-desktop-action="agent"><span class="desktop-agent-glyph is-muted"><i data-lucide="message-square"></i></span><span><strong>Review desktop layout</strong><small>12 min ago</small></span><i data-lucide="ellipsis"></i></button></div>
                  </aside>
                  <main class="desktop-main">
                    <div class="desktop-panel-stack">
                      <section class="desktop-panel desktop-panel-agent is-active" data-desktop-panel="agent">
                        <div class="desktop-timeline"><button class="desktop-continue-button" type="button" data-desktop-action="continue">Continue</button><div class="desktop-user-bubble"><div class="desktop-bubble-meta"><span>You</span><time>just now</time></div><p>Trace the active desktop shell and refine the product surface.</p></div><div class="desktop-turn-divider"><span><i data-lucide="loader-circle"></i> Working for 18s</span><i data-lucide="chevron-down"></i></div><div class="desktop-change-card"><div class="desktop-change-summary"><span><i data-lucide="file-diff"></i><strong>2 files updated</strong></span><em><b>-26</b> <b>+74</b></em></div><div class="desktop-change-row"><i data-lucide="file-text"></i><code>src/workbench.rs</code><span><b>-12</b> <b>+35</b></span></div><div class="desktop-change-row"><i data-lucide="file-text"></i><code>src/runtime.rs</code><span><b>-14</b> <b>+39</b></span></div><div class="desktop-change-actions"><button type="button"><i data-lucide="rotate-ccw"></i>Undo</button><button type="button"><i data-lucide="eye"></i>Review</button></div></div><div class="desktop-agent-block"><div class="desktop-agent-meta"><span class="desktop-agent-avatar"><i data-lucide="sparkles"></i></span><strong>Codex</strong><span>Agent response</span></div><p>I am tracing the current title bar, session sidebar, timeline, Composer, and right-side workspace surfaces before changing the presentation.</p><div class="desktop-inline-actions"><button type="button"><i data-lucide="copy"></i>Copy</button><button type="button"><i data-lucide="git-branch"></i>Fork</button></div></div><button class="desktop-tool-row" type="button" data-desktop-toggle="tool"><span><i data-lucide="square-terminal"></i><code>cargo test -p vibex-desktop</code></span><span class="desktop-tool-status">completed</span><i data-lucide="chevron-right"></i></button><button class="desktop-tool-row" type="button"><span><i data-lucide="file-text"></i><code>edit src/workbench.rs</code></span><span class="desktop-diff-add">+24</span><span class="desktop-diff-remove">-8</span><i data-lucide="chevron-right"></i></button></div>
                        <div class="desktop-composer">
                          <div class="desktop-composer-input">
                            <span>Ask Vibex to inspect, edit, test, or explain this workspace...</span>
                            <span class="desktop-composer-input-actions"><button class="desktop-icon-button" type="button" data-desktop-action="expand" aria-label="Expand input"><i data-lucide="maximize-2"></i></button><button class="desktop-icon-button" type="button" data-desktop-action="terminal" aria-label="Open terminal"><i data-lucide="square-terminal"></i></button></span>
                          </div>
                          <div class="desktop-composer-footer"><div class="desktop-composer-runtime"><button class="desktop-icon-button" type="button" aria-label="Add attachments"><i data-lucide="plus"></i></button><button class="desktop-runtime-choice is-active" type="button" data-runtime-choice="agent"><i data-lucide="sparkles"></i><span>Local runtime</span><i data-lucide="chevron-down"></i></button><button class="desktop-runtime-choice" type="button" data-runtime-choice="profile"><i data-lucide="shield-check"></i><span>Workspace access</span><i data-lucide="chevron-down"></i></button><button class="desktop-runtime-choice" type="button" data-runtime-choice="effort"><i data-lucide="brain"></i><span>Balanced</span><i data-lucide="chevron-down"></i></button><button class="desktop-runtime-choice" type="button" data-runtime-choice="mode"><i data-lucide="shield-alert"></i><span>Guarded</span><i data-lucide="chevron-down"></i></button></div><div class="desktop-composer-end"><button class="desktop-usage-button" type="button" aria-label="Open usage statistics"><i data-lucide="circle-dot"></i></button><button class="desktop-composer-select" type="button">Codex runtime <i data-lucide="chevron-down"></i></button><button class="desktop-send-button" type="button" data-desktop-action="send" aria-label="Send message"><i data-lucide="arrow-up"></i></button></div></div>
                        </div>
                      </section>

                      <section class="desktop-panel desktop-panel-preview" data-desktop-panel="preview">
                        <div class="desktop-panel-toolbar"><div><i data-lucide="code-2"></i><strong>Preview</strong><span>apps/desktop/src/app.rs</span></div><div><button class="desktop-icon-button" type="button" aria-label="Refresh preview"><i data-lucide="refresh-cw"></i></button><button class="desktop-icon-button" type="button" aria-label="Open preview"><i data-lucide="panel-right"></i></button></div></div>
                        <div class="desktop-editor"><div class="desktop-editor-tabs"><span class="is-active">app.rs</span><span>code_workbench.rs</span><span>locale.rs</span></div><div class="desktop-code"><span><b>01</b><em>pub struct</em> VibexWorkbench {</span><span><b>02</b>    focus_handle: FocusHandle,</span><span><b>03</b>    selected_session_id: Option&lt;VibexSessionId&gt;,</span><span><b>04</b>    timeline: TimelineModel,</span><span><b>05</b>    composer_input: Entity&lt;InputState&gt;,</span><span class="desktop-code-highlight"><b>06</b>    preview_visible: bool,</span><span><b>07</b>    right_rail_mode: RightRailMode,</span><span><b>08</b>}</span><span><b>09</b></span><span><b>10</b><em>fn render_shell</em>(&amp;mut self) -&gt; AnyElement {</span><span><b>11</b>    <i>/* title bar + workspace shell */</i></span></div></div>
                        <div class="desktop-preview-status"><span class="desktop-status-dot"></span><span>Local runtime ready</span><span>Rust · GPUI</span><span>Unsaved changes</span></div>
                      </section>

                      <section class="desktop-panel desktop-panel-files" data-desktop-panel="files">
                        <div class="desktop-panel-toolbar"><div><i data-lucide="folder-open"></i><strong>Files &amp; Git</strong><span>codex/agent-session-core</span></div><div><button class="desktop-icon-button" type="button" aria-label="Refresh files"><i data-lucide="refresh-cw"></i></button><button class="desktop-icon-button" type="button" aria-label="Commit changes"><i data-lucide="git-commit-horizontal"></i></button></div></div>
                        <div class="desktop-files-layout"><div class="desktop-file-tree"><div class="desktop-file-tree-heading"><span>Changes</span><strong>5</strong></div><button class="desktop-file-row is-folder" type="button"><i data-lucide="chevron-down"></i><i data-lucide="folder"></i><span>apps</span></button><button class="desktop-file-row is-folder" type="button"><i data-lucide="chevron-down"></i><i data-lucide="folder"></i><span>desktop</span></button><button class="desktop-file-row is-selected" type="button"><i data-lucide="file-text"></i><span>src/app.rs</span><em>M</em></button><button class="desktop-file-row" type="button"><i data-lucide="file-text"></i><span>src/code_workbench.rs</span><em>M</em></button><button class="desktop-file-row is-folder" type="button"><i data-lucide="chevron-right"></i><i data-lucide="folder"></i><span>crates</span></button><button class="desktop-file-row" type="button"><i data-lucide="file-text"></i><span>src/locale.rs</span><em>A</em></button></div><div class="desktop-diff-preview"><div class="desktop-diff-heading"><code>apps/desktop/src/app.rs</code><span>unstaged</span></div><pre><span class="desktop-diff-context">@@ render_shell</span><span class="desktop-diff-remove">- preview_overlay_open: bool,</span><span class="desktop-diff-add">+ right_rail_overlay_open: bool,</span><span class="desktop-diff-add">+ code_preview_visible: bool,</span><span>  sidebar_width: f32,</span><span class="desktop-diff-remove">- self.render_old_panel()</span><span class="desktop-diff-add">+ self.render_right_rail_panel()</span></pre></div></div>
                        <div class="desktop-files-footer"><span><i data-lucide="git-branch"></i>codex/agent-session-core</span><span>3 added · 2 modified</span></div>
                      </section>

                      <section class="desktop-panel desktop-panel-management" data-desktop-panel="management">
                        <div class="desktop-panel-toolbar"><div><i data-lucide="settings"></i><strong>Config Center</strong><span>Agent runtimes and provider profiles</span></div><button class="desktop-refresh-button" type="button"><i data-lucide="refresh-cw"></i>Refresh probe</button></div>
                        <div class="desktop-management-layout"><nav class="desktop-settings-nav"><button class="is-active" type="button">General</button><button type="button">Agents</button><button type="button">Providers</button><button type="button">Appearance</button><button type="button">Session</button></nav><div class="desktop-settings-content"><div class="desktop-settings-heading"><div><strong>Agent runtimes</strong><span>Choose which local runtime starts new sessions.</span></div><button class="desktop-icon-button" type="button" aria-label="Search settings"><i data-lucide="scan-search"></i></button></div><div class="desktop-runtime-card is-selected"><span class="desktop-runtime-logo"><i data-lucide="sparkles"></i></span><div><strong>Codex</strong><small>codex · configured</small></div><span class="desktop-ready-pill">ready</span><i data-lucide="chevron-right"></i></div><div class="desktop-runtime-card"><span class="desktop-runtime-logo is-claude"><i data-lucide="bot"></i></span><div><strong>Claude Code</strong><small>claude · configured</small></div><span class="desktop-ready-pill">ready</span><i data-lucide="chevron-right"></i></div><div class="desktop-runtime-card is-muted"><span class="desktop-runtime-logo"><i data-lucide="plug"></i></span><div><strong>ACP</strong><small>acp · disabled</small></div><span class="desktop-disabled-pill">disabled</span><i data-lucide="chevron-right"></i></div></div></div>
                      </section>
                    </div>
                  </main>

                  <aside class="desktop-right-rail"><div class="desktop-right-rail-heading"><strong data-desktop-rail-title>Files</strong><button class="desktop-icon-button" type="button" data-desktop-action="right-rail-close" aria-label="Close right panel"><i data-lucide="chevrons-right"></i></button></div><div class="desktop-right-rail-body"><div class="desktop-rail-summary"><span class="desktop-status-dot"></span><div><strong>Current Checkout</strong><small>/workspace/vibex</small></div></div><div class="desktop-rail-item"><i data-lucide="file-text"></i><span>src/workbench.rs</span><em>M</em></div><div class="desktop-rail-item"><i data-lucide="square-terminal"></i><span>Terminal 1</span><em class="is-running">run</em></div><div class="desktop-rail-item"><i data-lucide="git-branch"></i><span>feature/workbench-shell</span><em>2</em></div></div><div class="desktop-right-rail-agent"><i data-lucide="sparkles"></i><span>Agent working</span></div></aside>
                  <aside class="desktop-activity-rail" aria-label="Workspace tools"><button class="is-active" type="button" data-desktop-rail="files" aria-label="Files"><i data-lucide="folder-open"></i></button><button type="button" data-desktop-rail="git" aria-label="Git"><i data-lucide="git-branch"></i><span>2</span></button><button type="button" data-desktop-rail="terminal" aria-label="New terminal"><i data-lucide="square-terminal"></i></button><span class="desktop-activity-rail-spacer"></span><button type="button" aria-label="Workspace settings"><i data-lucide="settings-2"></i></button></aside>
                </div>
              </div>
            </div>
          </div>
          <div class="desktop-showcase-foot"><span data-desktop-caption>Agent workbench</span><span data-desktop-source>Source-mapped preview · no screenshots</span><i data-lucide="arrow-right"></i></div>
        </div>
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
      <div class="final-glow" aria-hidden="true"></div>
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
    Activity,
    AtSign,
    ArrowLeft,
    Brain,
    Bot,
    Braces,
    Check,
    ChevronDown,
    ChevronRight,
    ChevronsRight,
    ChevronsRightLeft,
    CircleDot,
    CircleCheck,
    Clock3,
    Clipboard,
    Code2,
    Copy,
    Cpu,
    Crosshair,
    Download,
    Eye,
    FileCode2,
    FileDiff,
    FileText,
    Folder,
    FolderOpen,
    GitBranch,
    GitCommitHorizontal,
    Github,
    Ellipsis,
    KeyRound,
    Globe2,
    Layers3,
    LoaderCircle,
    Laptop,
    LockKeyhole,
    Maximize2,
    Menu,
    Minus,
    MessageSquare,
    Monitor,
    Network,
    PanelRight,
    PanelLeft,
    PanelLeftClose,
    PanelRightClose,
    Paperclip,
    Play,
    Plug,
    Plus,
    RefreshCw,
    Radio,
    RotateCcw,
    ScanLine,
    ScanSearch,
    Server,
    Search,
    Settings,
    ShieldCheck,
    ShieldAlert,
    Smartphone,
    Square,
    Sparkles,
    Settings2,
    SquareTerminal,
    SunMedium,
    Terminal,
    TriangleAlert,
    UserRound,
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
  [".final-actions .button-primary", "nav.get"],
  ["[data-desktop-tab=\"agent\"]", "showcase.desktop.agent"],
  ["[data-desktop-tab=\"preview\"]", "showcase.desktop.preview"],
  ["[data-desktop-tab=\"files\"]", "showcase.desktop.files"],
  ["[data-desktop-tab=\"management\"]", "showcase.desktop.management"],
  ["[data-desktop-source]", "showcase.desktop.source"],
  [".mobile-nav a:nth-child(1)", "nav.product"],
  [".mobile-nav a:nth-child(2)", "nav.how"],
  [".mobile-nav a:nth-child(3)", "nav.remote"],
  [".mobile-nav a:nth-child(4)", "nav.faq"],
  [".hero .eyebrow", "hero.eyebrow"],
  [".hero-lede", "hero.lede"],
  [".hero-meta div:nth-child(2)", "hero.meta.local"],
  [".hero-meta div:nth-child(3)", "hero.meta.devices"],
  [".intro-section .section-kicker", "intro.kicker"],
  [".intro-heading p", "intro.copy"],
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
  ["[data-desktop-tablist]", "aria-label", "showcase.desktop.aria"],
  [".desktop-app", "aria-label", "showcase.desktop.aria"],
  [".architecture-diagram", "aria-label", "architecture.diagram.label"],
  ["[data-copy-command]", "title", "open.copyCommands"],
  ["[data-copy-command]", "aria-label", "open.copyCommands"],
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
    const trigger = switcher.querySelector("[data-language-trigger]");
    const currentLabel = translate(currentLanguage, currentLanguage === "zh" ? "language.name.chinese" : "language.name.english");
    trigger?.querySelector("[data-language-current]")?.replaceChildren(document.createTextNode(currentLabel));
    trigger?.setAttribute("aria-label", translate(currentLanguage, "language.label"));
    switcher.querySelectorAll("[data-language]").forEach((option) => {
      const language = option.dataset.language;
      const selected = language === currentLanguage;
      const label = translate(currentLanguage, language === "zh" ? "language.name.chinese" : "language.name.english");
      option.classList.toggle("is-selected", selected);
      option.setAttribute("aria-selected", String(selected));
      option.setAttribute("aria-label", label);
      option.querySelector("[data-language-name]")?.replaceChildren(document.createTextNode(label));
    });
  });
  setBindingText(".mobile-language > span", "language.label");
  setBindingText("[data-hero-download-lede]", "hero.downloadLead");
  setBindingText("[data-hero-download]", "hero.download");
  setBindingText("[data-hero-github]", "hero.github");
  setBindingText("[data-hero-download-options]", "hero.downloadOptions");
  setBindingText("[data-hero-supports]", "hero.supports");
  setBindingText("[data-hero-more-agents]", "hero.moreAgents");

  const activeDesktopView = desktopShowcase?.querySelector("[data-desktop-view].is-active")?.dataset.desktopView;
  if (activeDesktopView) setDesktopView(activeDesktopView);
  const activeDesktopRail = desktopShowcase?.querySelector("[data-desktop-rail].is-active")?.dataset.desktopRail;
  if (activeDesktopRail) setDesktopRail(activeDesktopRail, { open: false });

  setOwnText("[data-toast]", toast?.dataset.toastKey === "failed" ? translate(currentLanguage, "toast.failed") : translate(currentLanguage, "toast.copied"));
  const copyright = document.querySelector(".footer-bottom > span:first-child");
  if (copyright) copyright.innerHTML = `© <span data-year>${new Date().getFullYear()}</span> ${translate(currentLanguage, "footer.copyright")}`;
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

const desktopShowcase = document.querySelector("[data-desktop-showcase]");
const desktopViewport = desktopShowcase?.querySelector("[data-desktop-viewport]");
const desktopCanvas = desktopShowcase?.querySelector("[data-desktop-canvas]");
const DESKTOP_CANVAS_WIDTH = 1220;
const DESKTOP_CANVAS_HEIGHT = 690;

function resizeDesktopShowcase() {
  if (!desktopViewport || !desktopCanvas) return;
  const scale = Math.min(1, desktopViewport.clientWidth / DESKTOP_CANVAS_WIDTH);
  desktopCanvas.style.setProperty("--desktop-scale", String(scale));
  desktopViewport.style.height = `${Math.ceil(DESKTOP_CANVAS_HEIGHT * scale)}px`;
}

if (desktopViewport && desktopCanvas) {
  resizeDesktopShowcase();
  new ResizeObserver(resizeDesktopShowcase).observe(desktopViewport);
}

function setDesktopView(viewKey) {
  if (!desktopShowcase) return;
  const view = ["agent", "preview", "files", "management"].includes(viewKey) ? viewKey : "agent";
  desktopShowcase.querySelectorAll("[data-desktop-view]").forEach((tab) => {
    const active = tab.dataset.desktopView === view;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  desktopShowcase.querySelectorAll("[data-desktop-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.desktopPanel === view);
  });
  const caption = desktopShowcase.querySelector("[data-desktop-caption]");
  const labels = {
    agent: "showcase.desktop.agent",
    preview: "showcase.desktop.preview",
    files: "showcase.desktop.files",
    management: "showcase.desktop.management",
  };
  if (caption) caption.textContent = translate(currentLanguage, labels[view]);
}

function setDesktopRail(railKey, { open = true } = {}) {
  if (!desktopShowcase) return;
  const rail = ["files", "git", "terminal"].includes(railKey) ? railKey : "files";
  desktopShowcase.querySelector("[data-desktop-shell]")?.classList.toggle("is-right-rail-open", open);
  desktopShowcase.querySelectorAll("[data-desktop-rail]").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.desktopRail === rail);
  });
  const title = desktopShowcase.querySelector("[data-desktop-rail-title]");
  const labels = {
    files: "showcase.desktop.railFiles",
    git: "showcase.desktop.railGit",
    terminal: "showcase.desktop.railTerminal",
  };
  if (title) title.textContent = translate(currentLanguage, labels[rail]);
}

desktopShowcase?.querySelectorAll("[data-desktop-view]").forEach((tab) => {
  tab.addEventListener("click", () => setDesktopView(tab.dataset.desktopView));
});

desktopShowcase?.querySelectorAll("[data-runtime-choice]").forEach((choice) => {
  choice.addEventListener("click", () => {
    desktopShowcase.querySelectorAll("[data-runtime-choice]").forEach((item) => item.classList.remove("is-active"));
    choice.classList.add("is-active");
  });
});

desktopShowcase?.querySelectorAll("[data-desktop-rail]").forEach((tab) => {
  tab.addEventListener("click", () => setDesktopRail(tab.dataset.desktopRail));
});

desktopShowcase?.querySelectorAll("[data-desktop-action]").forEach((action) => {
  action.addEventListener("click", () => {
    const kind = action.dataset.desktopAction;
    if (kind === "sidebar") {
      desktopShowcase.querySelector("[data-desktop-shell]")?.classList.toggle("is-sidebar-collapsed");
      return;
    }
    if (kind === "right-rail-close") {
      desktopShowcase.querySelector("[data-desktop-shell]")?.classList.remove("is-right-rail-open");
      return;
    }
    if (kind === "management" || kind === "settings") {
      setDesktopView("management");
      return;
    }
    if (kind === "preview") {
      setDesktopView("preview");
      return;
    }
    if (kind === "agent" || kind === "new-session") {
      setDesktopView("agent");
      desktopShowcase.querySelectorAll(".desktop-session-row").forEach((row) => row.classList.toggle("is-selected", row === action));
      return;
    }
    if (kind === "send") {
      const composer = desktopShowcase.querySelector(".desktop-composer");
      composer?.classList.add("is-sent");
      window.setTimeout(() => composer?.classList.remove("is-sent"), 700);
      return;
    }
    if (kind === "expand") {
      desktopShowcase.querySelector(".desktop-composer")?.classList.toggle("is-expanded");
      return;
    }
    if (kind === "terminal") {
      const composer = desktopShowcase.querySelector(".desktop-composer");
      composer?.classList.add("is-terminal");
      window.setTimeout(() => composer?.classList.remove("is-terminal"), 700);
      return;
    }
    if (kind === "continue") {
      action.classList.add("is-activated");
      window.setTimeout(() => action.classList.remove("is-activated"), 700);
    }
  });
});

desktopShowcase?.querySelectorAll("[data-desktop-toggle]").forEach((toggle) => {
  toggle.addEventListener("click", () => toggle.classList.toggle("is-expanded"));
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

const languageSwitchers = [...document.querySelectorAll("[data-language-switcher]")];
const closeLanguageMenus = () => {
  languageSwitchers.forEach((switcher) => {
    switcher.classList.remove("is-open");
    switcher.querySelector("[data-language-trigger]")?.setAttribute("aria-expanded", "false");
  });
};

languageSwitchers.forEach((switcher) => {
  const trigger = switcher.querySelector("[data-language-trigger]");
  trigger?.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = !switcher.classList.contains("is-open");
    closeLanguageMenus();
    switcher.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", String(open));
  });

  switcher.querySelectorAll("[data-language]").forEach((option) => {
    option.addEventListener("click", () => {
      applyLanguage(option.dataset.language);
      closeLanguageMenus();
    });
  });
});

document.addEventListener("click", closeLanguageMenus);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLanguageMenus();
});

applyLanguage(currentLanguage, { persist: false });
