import {
  Activity,
  AtSign,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  ArrowUpToLine,
  ArrowDown,
  ArrowDownWideNarrow,
  Battery,
  BookOpen,
  Brain,
  Bot,
  Braces,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsDownUp,
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
  Database,
  Download,
  Eye,
  ExternalLink,
  File,
  FileCode,
  FileCode2,
  FileCog,
  FileDiff,
  FileJson,
  FileText,
  Folder,
  FolderOpen,
  GitBranch,
  GitCommitHorizontal,
  Github,
  Ellipsis,
  GripVertical,
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
  Pencil,
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
  Signal,
  Smartphone,
  Square,
  Sparkles,
  Settings2,
  SquareTerminal,
  SunMedium,
  Terminal,
  Trash2,
  TriangleAlert,
  Upload,
  UserRound,
  Wifi,
  Workflow,
  X,
  Zap,
  Mic,
  ChartPie,
  LayoutDashboard,
  HardDrive,
  Inbox,
  Import as ImportIcon,
  Info,
  RotateCw,
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
            <h1>A native workbench<br />for code and agents</h1>
            <p class="hero-lede">
              Your agents. Your workspace. Your control—from prompt to commit, desktop to mobile.
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
                <span class="agent-logo agent-logo-mono" title="OpenAI Codex"><img src="/assets/agents/openai-light.svg" alt="OpenAI Codex" /></span>
                <span class="agent-logo" title="Antigravity"><img src="/assets/agents/antigravity.svg" alt="Antigravity" /></span>
                <span class="agent-logo agent-logo-mono" title="GitHub Copilot"><img src="/assets/agents/copilot.svg" alt="GitHub Copilot" /></span>
                <span class="agent-logo" title="OpenCode"><img src="/assets/agents/opencode.svg" alt="OpenCode" /></span>
                <span class="agent-logo agent-logo-mono" title="Pi"><img src="/assets/agents/pi.svg" alt="Pi" /></span>
                <span class="agent-logo agent-logo-mono" title="Grok"><img src="/assets/agents/grok.svg" alt="Grok" /></span>
                <span class="agent-logo" title="DeepSeek Harness"><img src="/assets/agents/deepseek-harness.svg" alt="DeepSeek Harness" /></span>
                <span class="agent-more" data-hero-more-agents>+16 built-in · more customizable</span>
              </div>
            </div>
          </div>
        </div>

        <div class="desktop-showcase reveal" data-desktop-showcase>
          <div class="showcase-glow" aria-hidden="true"></div>
          <div class="desktop-showcase-tabs" role="tablist" aria-label="Vibex desktop workbench" data-desktop-tablist>
            <button class="desktop-showcase-tab is-active" type="button" role="tab" aria-selected="true" data-desktop-view="agent"><i data-lucide="message-square"></i><span data-desktop-tab="agent">Agent workbench</span></button>
            <button class="desktop-showcase-tab" type="button" role="tab" aria-selected="false" data-desktop-view="files"><i data-lucide="git-branch"></i><span data-desktop-tab="files">Files &amp; Git</span></button>
            <button class="desktop-showcase-tab" type="button" role="tab" aria-selected="false" data-desktop-view="management"><i data-lucide="settings"></i><span data-desktop-tab="management">Config Center</span></button>
          </div>
          <div class="desktop-showcase-viewport" data-desktop-viewport>
            <div class="desktop-showcase-canvas" data-desktop-canvas>
              <div class="desktop-app" aria-label="Vibex desktop workbench">
                <header class="vx-titlebar">
                  <div class="vx-titlebar-side">
                    <button class="vx-icon-btn is-lg" type="button" data-desktop-action="sidebar" aria-label="Collapse sidebar"><i data-lucide="panel-left-close"></i></button>
                    <button class="vx-icon-btn is-disabled" type="button" aria-label="Go back" disabled><i data-lucide="arrow-left"></i></button>
                    <button class="vx-icon-btn is-disabled" type="button" aria-label="Go forward" disabled><i data-lucide="arrow-right"></i></button>
                  </div>
                  <div class="vx-titlebar-main" data-desktop-title-main>
                    <span class="vx-session-title">Refactor agent session timeline</span>
                    <button class="vx-icon-btn is-sm" type="button" aria-label="Session actions"><i data-lucide="ellipsis"></i></button>
                  </div>
                  <div class="vx-titlebar-actions">
                    <button class="vx-icon-btn is-lg" type="button" data-desktop-action="pair" aria-label="Pair mobile"><i data-lucide="smartphone"></i></button>
                    <button class="vx-icon-btn is-lg" type="button" data-desktop-action="settings" aria-label="Open settings"><i data-lucide="settings"></i></button>
                  </div>
                  <div class="vx-win-controls">
                    <button class="vx-win-btn" type="button" aria-label="Minimize"><i data-lucide="minus"></i></button>
                    <button class="vx-win-btn" type="button" aria-label="Maximize"><i data-lucide="square"></i></button>
                    <button class="vx-win-btn is-close" type="button" aria-label="Close"><i data-lucide="x"></i></button>
                  </div>
                </header>
                <div class="vx-body" data-desktop-shell>
                  <aside class="vx-sidebar">
                    <div class="vx-sidebar-actions">
                      <button class="vx-side-btn" type="button" data-desktop-action="new-session"><i data-lucide="plus"></i><span data-i18n="showcase.desktop.newChat">New chat</span></button>
                      <button class="vx-side-btn" type="button" data-desktop-action="management" data-desktop-side="management"><i data-lucide="settings"></i><span data-i18n="showcase.desktop.management">Config Center</span></button>
                      <button class="vx-side-btn" type="button" data-desktop-action="usage" data-desktop-side="usage"><i data-lucide="activity"></i><span data-i18n="showcase.desktop.usage">Usage Statistics</span></button>
                    </div>
                    <div class="vx-sidebar-divider"></div>
                    <div class="vx-projects-head">
                      <span data-i18n="showcase.desktop.projects">Projects</span>
                      <div class="vx-projects-tools">
                        <button class="vx-icon-btn is-xs" type="button" aria-label="More"><i data-lucide="ellipsis"></i></button>
                        <button class="vx-icon-btn is-xs" type="button" aria-label="Collapse all sessions"><i data-lucide="chevrons-right-left"></i></button>
                        <button class="vx-icon-btn is-xs" type="button" aria-label="Locate current session"><i data-lucide="crosshair"></i></button>
                        <button class="vx-icon-btn is-xs" type="button" aria-label="New project"><i data-lucide="plus"></i></button>
                        <button class="vx-icon-btn is-xs" type="button" aria-label="Search sessions"><i data-lucide="search"></i></button>
                      </div>
                    </div>
                    <div class="vx-session-tree">
                      <button class="vx-project-row" type="button">
                        <span class="vx-project-logo"><img src="/assets/vibex-startup-mark.svg" alt="" /></span>
                        <strong>vibex</strong>
                        <span class="vx-count-badge">8</span>
                        <span class="vx-project-hover"><i data-lucide="chevron-down"></i><i data-lucide="ellipsis"></i></span>
                      </button>
                      <div class="vx-session-list">
                        <button class="vx-session-row is-selected" type="button" data-desktop-action="agent">
                          <span class="vx-agent-logo"><img src="/assets/agents/openai-light.svg" alt="" /></span>
                          <span class="vx-session-name">Refactor agent session timeline</span>
                          <span class="vx-session-time">12:41</span>
                        </button>
                        <button class="vx-session-row" type="button" data-desktop-action="agent">
                          <span class="vx-agent-logo"><img src="/assets/agents/claude.svg" alt="" /></span>
                          <span class="vx-session-name">Fix flaky worktree merge test</span>
                          <span class="vx-session-time">Yesterday</span>
                        </button>
                        <button class="vx-session-row" type="button" data-desktop-action="agent">
                          <span class="vx-agent-logo"><img src="/assets/agents/openai-light.svg" alt="" /></span>
                          <span class="vx-session-name">Polish composer empty state</span>
                          <span class="vx-session-time">3 days ago</span>
                        </button>
                        <button class="vx-session-row" type="button" data-desktop-action="agent">
                          <span class="vx-agent-logo"><img src="/assets/agents/antigravity.svg" alt="" /></span>
                          <span class="vx-session-name">Scaffold onboarding walkthrough</span>
                          <span class="vx-session-time">Yesterday</span>
                        </button>
                        <button class="vx-session-row" type="button" data-desktop-action="agent">
                          <span class="vx-agent-logo"><img src="/assets/agents/copilot-light.svg" alt="" /></span>
                          <span class="vx-session-name">Draft release notes for v0.4</span>
                          <span class="vx-session-time">Tuesday</span>
                        </button>
                        <button class="vx-session-row" type="button" data-desktop-action="agent">
                          <span class="vx-agent-logo"><img src="/assets/agents/opencode.svg" alt="" /></span>
                          <span class="vx-session-name">Migrate settings store to TOML</span>
                          <span class="vx-session-time">Monday</span>
                        </button>
                        <button class="vx-session-row" type="button" data-desktop-action="agent">
                          <span class="vx-agent-logo"><img src="/assets/agents/pi-light.svg" alt="" /></span>
                          <span class="vx-session-name">Audit command palette shortcuts</span>
                          <span class="vx-session-time">Last week</span>
                        </button>
                        <button class="vx-session-row" type="button" data-desktop-action="agent">
                          <span class="vx-agent-logo"><img src="/assets/agents/grok-light.svg" alt="" /></span>
                          <span class="vx-session-name">Profile timeline replay cost</span>
                          <span class="vx-session-time">Last week</span>
                        </button>
                      </div>
                    </div>
                  </aside>

                  <main class="vx-center">
                    <section class="vx-panel is-active" data-desktop-panel="agent">
                      <div class="vx-timeline" data-timeline>
                        <div class="vx-user-row" data-replay-slot="user"></div>
                        <div class="vx-turn" data-replay-slot="turn" hidden>
                          <div class="vx-turn-head">
                            <div class="vx-turn-headline">
                              <span class="vx-turn-agent"><img src="/assets/agents/openai-light.svg" alt="" /></span>
                              <button class="vx-turn-toggle" type="button" data-desktop-toggle="turn"><span data-r="time">Worked for 1m 32s</span><i data-lucide="chevron-down"></i></button>
                            </div>
                            <span class="vx-turn-runtime">Agent account · gpt-5.1-codex</span>
                          </div>
                          <div class="vx-turn-body" data-turn-body data-replay-slot="process"></div>
                          <div class="vx-changes-card" data-replay-slot="changes" hidden>
                            <div class="vx-changes-head"><i data-lucide="file"></i><strong><span data-r="files">3</span> files changed</strong><span class="vx-changes-nums"><b class="vx-diff-del" data-r="del">-47</b><b class="vx-diff-add" data-r="add">+128</b></span></div>
                            <button class="vx-changes-row" type="button"><i data-lucide="file-text"></i><code>src/workbench/timeline.rs</code><span class="vx-diff-del">-31</span><span class="vx-diff-add">+86</span></button>
                            <button class="vx-changes-row" type="button"><i data-lucide="file-text"></i><code>src/workbench/worktree.rs</code><span class="vx-diff-del">-9</span><span class="vx-diff-add">+31</span></button>
                            <button class="vx-changes-row" type="button"><i data-lucide="file-text"></i><code>src/core/session.rs</code><span class="vx-diff-del">-7</span><span class="vx-diff-add">+11</span></button>
                            <div class="vx-changes-foot">
                              <button class="vx-review-btn" type="button"><i data-lucide="eye"></i><span>Review</span></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="vx-composer-wrap">
                        <div class="vx-status-strip is-idle" data-status-strip>
                          <span class="vx-strip-logo"><img src="/assets/agents/openai-light.svg" alt="" /></span>
                          <span data-strip-phase>Preparing</span>
                          <span class="vx-strip-seg" data-seg="elapsed"><span class="vx-strip-dot">·</span><span data-elapsed>1s</span></span>
                          <span class="vx-strip-seg" data-seg="tools"><span class="vx-strip-dot">·</span><span data-strip-tools>1 tool call</span></span>
                          <span class="vx-strip-seg" data-seg="diff"><span class="vx-strip-dot">·</span><span class="vx-strip-diff"><b class="vx-diff-add" data-strip-add>+0</b><b class="vx-diff-del" data-strip-del>-0</b></span></span>
                          <span class="vx-strip-seg" data-seg="input"><span class="vx-strip-dot">·</span><span class="vx-strip-io"><i data-lucide="arrow-up"></i><span data-strip-input-n>0</span></span></span>
                          <span class="vx-strip-seg" data-seg="output"><span class="vx-strip-dot">·</span><span class="vx-strip-io"><i data-lucide="arrow-down"></i><span data-strip-output-n>0</span></span></span>
                          <span class="vx-strip-seg" data-seg="cache"><span class="vx-strip-dot">·</span><span data-strip-cache>12%</span></span>
                          <span class="vx-strip-seg" data-seg="rate"><span class="vx-strip-dot">·</span><span data-strip-rate>60.0 t/s</span></span>
                        </div>
                        <div class="vx-composer">
                          <div class="vx-composer-input">
                            <span class="vx-composer-placeholder"><span data-typed-text></span><span class="vx-caret-blink"></span></span>
                            <span class="vx-composer-side">
                              <button class="vx-icon-btn is-sm" type="button" data-desktop-action="expand" aria-label="Expand input"><i data-lucide="maximize-2"></i></button>
                              <button class="vx-icon-btn is-md" type="button" data-desktop-action="terminal" aria-label="Create Composer terminal"><i data-lucide="square-terminal"></i></button>
                            </span>
                          </div>
                          <div class="vx-composer-foot">
                            <div class="vx-composer-left">
                              <button class="vx-icon-btn is-md" type="button" aria-label="Add attachments"><i data-lucide="plus"></i></button>
                              <button class="vx-chip" type="button"><i class="is-effort" data-lucide="brain"></i><span data-i18n="showcase.desktop.chip.standard">Standard</span><i class="vx-chip-caret" data-lucide="chevron-down"></i></button>
                              <button class="vx-chip" type="button"><i class="is-mode" data-lucide="shield-alert"></i><span data-i18n="showcase.desktop.chip.guarded">Guarded</span><i class="vx-chip-caret" data-lucide="chevron-down"></i></button>
                            </div>
                            <div class="vx-composer-right">
                              <button class="vx-token-btn" type="button" aria-label="Token usage"><span class="vx-token-ring"></span></button>
                              <button class="vx-chip" type="button" data-runtime-choice="agent"><img class="vx-chip-logo" src="/assets/agents/openai-light.svg" alt="" /><span data-i18n="showcase.desktop.chip.runtime">Agent account / gpt-5.1-codex</span><i class="vx-chip-caret" data-lucide="chevron-down"></i></button>
                              <button class="vx-send-btn" type="button" data-desktop-action="send" aria-label="Send message"><i data-lucide="arrow-up"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section class="vx-panel" data-desktop-panel="home">
                      <div class="vx-home">
                        <div class="vx-home-mark">
                          <img src="/assets/vibex-mark-tight-light.svg" alt="" />
                          <span>ibex</span>
                        </div>
                        <h1 data-i18n="showcase.desktop.home.slogan">Start something new</h1>
                        <p class="vx-home-sub" data-i18n="showcase.desktop.home.description">Create a fresh session from a project directory or a temporary workspace</p>
                        <div class="vx-home-capsule">
                          <div class="vx-home-agents">
                            <button class="vx-agent-tab is-active" type="button"><img src="/assets/agents/openai-light.svg" alt="" /><span>Codex</span></button>
                            <button class="vx-agent-tab" type="button"><img src="/assets/agents/claude.svg" alt="" /><span>Claude Code</span></button>
                            <button class="vx-agent-tab" type="button"><img src="/assets/agents/gemini.svg" alt="" /><span>Gemini CLI</span></button>
                            <button class="vx-agent-tab" type="button"><img src="/assets/agents/antigravity.svg" alt="" /><span>Antigravity</span></button>
                            <button class="vx-agent-tab" type="button"><img src="/assets/agents/pi-light.svg" alt="" /><span>Pi</span></button>
                            <button class="vx-agent-tab" type="button"><img src="/assets/agents/opencode.svg" alt="" /><span>OpenCode</span></button>
                            <button class="vx-agent-tab" type="button"><img src="/assets/agents/grok-light.svg" alt="" /><span>Grok</span></button>
                          </div>
                          <button class="vx-icon-btn is-sm" type="button" aria-label="Sort agents"><i data-lucide="arrow-down-wide-narrow"></i></button>
                        </div>
                        <div class="vx-home-composer">
                          <div class="vx-home-input"><span class="vx-composer-placeholder"><span data-typed-text></span><span class="vx-caret-blink"></span></span></div>
                          <div class="vx-home-foot">
                            <div class="vx-composer-left">
                              <button class="vx-icon-btn is-md" type="button" aria-label="Add attachments"><i data-lucide="plus"></i></button>
                              <button class="vx-chip" type="button"><i class="is-effort" data-lucide="brain"></i><span data-i18n="showcase.desktop.chip.standard">Standard</span><i class="vx-chip-caret" data-lucide="chevron-down"></i></button>
                              <button class="vx-chip" type="button"><i class="is-mode" data-lucide="shield-alert"></i><span data-i18n="showcase.desktop.chip.guarded">Guarded</span><i class="vx-chip-caret" data-lucide="chevron-down"></i></button>
                            </div>
                            <div class="vx-composer-right">
                              <button class="vx-chip" type="button"><img class="vx-chip-logo" src="/assets/agents/openai-light.svg" alt="" /><span data-i18n="showcase.desktop.chip.runtime">Agent account / gpt-5.1-codex</span><i class="vx-chip-caret" data-lucide="chevron-down"></i></button>
                              <button class="vx-send-btn is-lg" type="button" aria-label="Create session"><i data-lucide="arrow-up"></i></button>
                            </div>
                          </div>
                        </div>
                        <div class="vx-home-wsrow">
                          <button class="vx-ws-btn" type="button" aria-label="Project directory"><i class="is-lg" data-lucide="folder"></i><span>vibex</span><i data-lucide="chevron-down"></i></button>
                          <button class="vx-ws-btn" type="button" aria-label="Workspace location"><i data-lucide="folder"></i><span data-i18n="showcase.desktop.home.local">Local</span><i data-lucide="chevron-down"></i></button>
                          <button class="vx-ws-btn" type="button" aria-label="Base branch"><i data-lucide="git-branch"></i><span>main</span><i data-lucide="chevron-down"></i></button>
                        </div>
                      </div>
                    </section>

                    <section class="vx-panel" data-desktop-panel="management">
                      <div class="vx-mgmt">
                        <div class="vx-mgmt-header"><i data-lucide="settings-2"></i><strong data-i18n="showcase.desktop.mgmt.title">Config Center</strong></div>
                        <div class="vx-mgmt-side">
                          <div class="vx-mgmt-nav">
                            <button class="is-active" type="button" data-mgmt-tab="agents"><i data-lucide="bot"></i><span data-i18n="showcase.desktop.mgmt.tabAgents">Agent</span></button>
                            <button type="button" data-mgmt-tab="mcp"><i data-lucide="network"></i><span data-i18n="showcase.desktop.mgmt.tabMcp">MCP</span></button>
                            <button type="button" data-mgmt-tab="skills"><i data-lucide="book-open"></i><span data-i18n="showcase.desktop.mgmt.tabSkills">Skills</span></button>
                          </div>
                          <div class="vx-mgmt-sidebody" data-mgmt-sidebar="agents">
                            <div class="vx-mgmt-search"><i data-lucide="search"></i><span data-i18n="showcase.desktop.mgmt.searchAgents">Search Agent</span></div>
                            <div class="vx-mgmt-agents">
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="claude">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/claude.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Claude Code</span>
                                  <span class="vx-mgmt-switch is-on"><span></span></span>
                                </span>
                                <small>2 configurations</small>
                              </button>
                              <button class="vx-mgmt-agent is-selected" type="button" data-mgmt-agent="codex">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/openai-light.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Codex</span>
                                  <span class="vx-mgmt-switch is-on"><span></span></span>
                                </span>
                                <small>3 configurations</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="opencode">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/opencode.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">OpenCode</span>
                                  <span class="vx-mgmt-switch is-on"><span></span></span>
                                </span>
                                <small>Not checked</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="antigravity">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/antigravity.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Google Antigravity</span>
                                  <span class="vx-mgmt-switch is-on"><span></span></span>
                                </span>
                                <small>Not checked</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="copilot">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/copilot-light.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">GitHub Copilot</span>
                                  <span class="vx-mgmt-switch is-on"><span></span></span>
                                </span>
                                <small>Not checked</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="gemini">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/gemini.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Gemini CLI</span>
                                  <span class="vx-mgmt-switch is-on"><span></span></span>
                                </span>
                                <small>Not checked</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="grok">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/grok-light.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Grok</span>
                                  <span class="vx-mgmt-switch is-on"><span></span></span>
                                </span>
                                <small>Not checked</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="pi">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/pi-light.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Pi</span>
                                  <span class="vx-mgmt-switch is-on"><span></span></span>
                                </span>
                                <small>Not checked</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="zcode">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/zcode-light.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">ZCode</span>
                                  <span class="vx-mgmt-plus"><i data-lucide="plus"></i></span>
                                </span>
                                <small>Not added</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="cline">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/cline-light.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Cline</span>
                                  <span class="vx-mgmt-plus"><i data-lucide="plus"></i></span>
                                </span>
                                <small>Not added</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="codebuddy-code">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/codebuddy-code.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Codebuddy Code</span>
                                  <span class="vx-mgmt-plus"><i data-lucide="plus"></i></span>
                                </span>
                                <small>Not added</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="cursor">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/cursor-light.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Cursor</span>
                                  <span class="vx-mgmt-plus"><i data-lucide="plus"></i></span>
                                </span>
                                <small>Not added</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="deepseek-harness">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/deepseek-harness.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">DeepSeek Harness</span>
                                  <span class="vx-mgmt-plus"><i data-lucide="plus"></i></span>
                                </span>
                                <small>Not added</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="devin">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/devin-light.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Devin CLI</span>
                                  <span class="vx-mgmt-plus"><i data-lucide="plus"></i></span>
                                </span>
                                <small>Not added</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="hermes">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/hermes-light.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Hermes</span>
                                  <span class="vx-mgmt-plus"><i data-lucide="plus"></i></span>
                                </span>
                                <small>Not added</small>
                              </button>
                              <button class="vx-mgmt-agent" type="button" data-mgmt-agent="kimi">
                                <span class="vx-mgmt-agent-top">
                                  <span class="vx-mgmt-glyph"><img src="/assets/agents/kimi.svg" alt="" /></span>
                                  <span class="vx-mgmt-agent-name">Kimi Code CLI</span>
                                  <span class="vx-mgmt-plus"><i data-lucide="plus"></i></span>
                                </span>
                                <small>Not added</small>
                              </button>
                              <div class="vx-mgmt-add">
                                <span class="vx-mgmt-add-plus"><i data-lucide="plus"></i></span>
                                <span>Add custom ACP Agent</span>
                              </div>
                            </div>
                          </div>
                          <div class="vx-mgmt-sidebody" data-mgmt-sidebar="mcp" hidden>
                            <button class="vx-mgmt-import" type="button"><i data-lucide="import"></i><span data-i18n="showcase.desktop.mgmt.importMcp">Import Existing MCP</span></button>
                            <div class="vx-mgmt-search"><i data-lucide="search"></i><span data-i18n="showcase.desktop.mgmt.searchMcp">Search MCP</span></div>
                            <div class="vx-mgmt-resources">
                              <div class="vx-mgmt-reshead"><span data-i18n="showcase.desktop.mgmt.mcpResources">MCP RESOURCES</span><span class="vx-mgmt-rescount">3</span></div>
                              <div class="vx-mgmt-emptycard"><strong data-i18n="showcase.desktop.mgmt.noMcp">No MCP servers</strong><small data-i18n="showcase.desktop.mgmt.noMcpDesc">Import or add an MCP server.</small></div>
                            </div>
                          </div>
                          <div class="vx-mgmt-sidebody" data-mgmt-sidebar="skills" hidden>
                            <button class="vx-mgmt-import" type="button"><i data-lucide="import"></i><span data-i18n="showcase.desktop.mgmt.importSkills">Import Existing Skills</span></button>
                            <div class="vx-mgmt-search"><i data-lucide="search"></i><span data-i18n="showcase.desktop.mgmt.searchSkills">Search Skills</span></div>
                            <div class="vx-mgmt-resources">
                              <div class="vx-mgmt-reshead"><span data-i18n="showcase.desktop.mgmt.skillsTitle">SKILLS</span><span class="vx-mgmt-rescount">0</span></div>
                              <div class="vx-mgmt-emptycard"><strong data-i18n="showcase.desktop.mgmt.noSkills">No Skills</strong><small data-i18n="showcase.desktop.mgmt.noSkillsDesc">Import or add a reusable Skill.</small></div>
                            </div>
                          </div>
                        </div>
                        <div class="vx-mgmt-handle"><span></span></div>
                        <div class="vx-mgmt-main" data-mgmt-detail>
                          <div class="vx-mgmt-pane is-active" data-mgmt-pane="agents">
                            <div class="vx-mgmt-headrow">
                              <span class="vx-mgmt-glyph is-lg" data-mgmt-logo><img src="/assets/agents/openai-light.svg" alt="" /></span>
                              <div><strong data-mgmt-name>Codex</strong><small data-mgmt-desc>Agent account · gpt-5.1-codex</small></div>
                              <span class="vx-mgmt-pill" data-i18n="showcase.desktop.mgmt.available">Available</span>
                            </div>
                            <div class="vx-mgmt-card">
                              <div class="vx-mgmt-cardhead">
                                <span class="vx-mgmt-iconbox"><i data-lucide="bot"></i></span>
                                <div><strong data-i18n="showcase.desktop.mgmt.installation">Agent installation</strong><small>ACP · managed by Vibex</small></div>
                                <span class="vx-mgmt-ver">v0.4.2</span>
                              </div>
                              <div class="vx-mgmt-actions">
                                <button class="vx-mgmt-btn" type="button"><i data-lucide="search"></i><span data-i18n="showcase.desktop.mgmt.checkUpdates">Check for updates</span></button>
                                <button class="vx-mgmt-btn is-danger" type="button"><i data-lucide="trash-2"></i><span data-i18n="showcase.desktop.mgmt.uninstall">Uninstall</span></button>
                              </div>
                            </div>
                            <div class="vx-mgmt-card">
                              <div class="vx-mgmt-cardhead">
                                <span class="vx-mgmt-iconbox"><i data-lucide="shield-alert"></i></span>
                                <div><strong data-i18n="showcase.desktop.mgmt.nativeCredentials">Native credentials</strong><small data-i18n="showcase.desktop.mgmt.nativeCredentialsDesc">Sign in with authentication methods reported by this Agent.</small></div>
                              </div>
                              <div class="vx-mgmt-status" data-i18n="showcase.desktop.mgmt.signedIn">Signed in · codex</div>
                            </div>
                            <div class="vx-mgmt-card">
                              <div class="vx-mgmt-cardhead">
                                <span class="vx-mgmt-iconbox"><i data-lucide="database"></i></span>
                                <div><strong data-i18n="showcase.desktop.mgmt.providerConfig">Model provider configuration</strong><small>Configure credentials and models for external model services.</small></div>
                                <span class="vx-mgmt-count">3 configurations</span>
                              </div>
                              <div class="vx-mgmt-provider is-selected">
                                <span class="vx-mgmt-grip"><i data-lucide="grip-vertical"></i></span>
                                <span class="vx-mgmt-profile-glyph"><img src="/assets/agents/openai-light.svg" alt="" /></span>
                                <div class="vx-mgmt-profile-name"><strong>OpenAI<span class="vx-mgmt-pill is-default" data-i18n="showcase.desktop.mgmt.default">Default</span></strong><small>api.openai.com · 4 models</small></div>
                                <span class="vx-mgmt-profile-actions"><i data-lucide="pencil"></i><i data-lucide="copy"></i><i data-lucide="activity"></i></span>
                              </div>
                              <div class="vx-mgmt-provider">
                                <span class="vx-mgmt-grip"><i data-lucide="grip-vertical"></i></span>
                                <span class="vx-mgmt-profile-glyph"><i data-lucide="sparkles"></i></span>
                                <div class="vx-mgmt-profile-name"><strong>Azure OpenAI</strong><small>azure.openai.example · 2 models</small></div>
                                <span class="vx-mgmt-profile-actions"><i data-lucide="pencil"></i><i data-lucide="copy"></i><i data-lucide="activity"></i></span>
                              </div>
                              <div class="vx-mgmt-provider">
                                <span class="vx-mgmt-grip"><i data-lucide="grip-vertical"></i></span>
                                <span class="vx-mgmt-profile-glyph"><i data-lucide="globe-2"></i></span>
                                <div class="vx-mgmt-profile-name"><strong>OpenRouter</strong><small>openrouter.ai · 8 models</small></div>
                                <span class="vx-mgmt-profile-actions"><i data-lucide="pencil"></i><i data-lucide="copy"></i><i data-lucide="activity"></i></span>
                              </div>
                              <div class="vx-mgmt-actions">
                                <button class="vx-mgmt-btn" type="button"><img class="vx-img-icon" src="/assets/icons/import.svg" alt="" /><span data-i18n="showcase.desktop.mgmt.importConfig">Import existing config</span></button>
                                <button class="vx-mgmt-btn is-primary" type="button"><i data-lucide="plus"></i><span data-i18n="showcase.desktop.mgmt.addConfig">Add config</span></button>
                              </div>
                            </div>
                          </div>
                          <div class="vx-mgmt-pane" data-mgmt-pane="mcp" hidden>
                            <div class="vx-mgmt-empty">
                              <div class="vx-mgmt-emptybox"><strong data-i18n="showcase.desktop.mgmt.noMcpSelection">No MCP server selected</strong><small data-i18n="showcase.desktop.mgmt.noMcpSelectionDesc">Select or import a server to manage Agent enablement.</small></div>
                            </div>
                          </div>
                          <div class="vx-mgmt-pane" data-mgmt-pane="skills" hidden>
                            <div class="vx-mgmt-empty">
                              <div class="vx-mgmt-emptybox"><strong data-i18n="showcase.desktop.mgmt.noSkillSelection">No Skill selected</strong><small data-i18n="showcase.desktop.mgmt.noSkillSelectionDesc">Select or import a Skill to manage Agent enablement.</small></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section class="vx-panel" data-desktop-panel="usage">
                      <div class="vx-usage">
                        <div class="vx-usage-header">
                          <i data-lucide="activity"></i>
                          <strong data-i18n="showcase.desktop.usage">Usage Statistics</strong>
                          <span class="vx-usage-spacer"></span>
                          <button class="vx-icon-btn is-sm" type="button" aria-label="Refresh"><i data-lucide="rotate-cw"></i></button>
                        </div>
                        <div class="vx-usage-toolbar">
                          <div class="vx-usage-range">
                            <button type="button" data-i18n="showcase.desktop.usage.today">Today</button>
                            <button type="button" data-i18n="showcase.desktop.usage.days7">7 days</button>
                            <button class="is-active" type="button" data-i18n="showcase.desktop.usage.days30">30 days</button>
                            <button type="button" data-i18n="showcase.desktop.usage.all">All</button>
                          </div>
                          <span class="vx-usage-spacer"></span>
                          <button class="vx-usage-filter" type="button"><i data-lucide="bot"></i><span data-i18n="showcase.desktop.usage.agent">Agent</span><i data-lucide="chevron-down"></i></button>
                          <button class="vx-usage-filter" type="button"><i data-lucide="database"></i><span data-i18n="showcase.desktop.usage.provider">Model provider</span><i data-lucide="chevron-down"></i></button>
                          <button class="vx-usage-filter" type="button"><i data-lucide="sparkles"></i><span data-i18n="showcase.desktop.usage.model">Model</span><i data-lucide="chevron-down"></i></button>
                          <button class="vx-usage-filter" type="button"><i data-lucide="folder"></i><span data-i18n="showcase.desktop.usage.project">Project</span><i data-lucide="chevron-down"></i></button>
                          <button class="vx-usage-filter" type="button"><i data-lucide="message-square"></i><span data-i18n="showcase.desktop.usage.session">Session</span><i data-lucide="chevron-down"></i></button>
                        </div>
                        <div class="vx-usage-scroll">
                          <div class="vx-usage-summary">
                            <div class="vx-usage-metric"><span class="vx-usage-mlabel"><i data-lucide="cpu"></i><span data-i18n="showcase.desktop.usage.totalTokens">Total tokens</span></span><strong>18.42M</strong></div>
                            <div class="vx-usage-metric"><span class="vx-usage-mlabel"><i data-lucide="inbox"></i><span data-i18n="showcase.desktop.usage.turns">Turns</span></span><strong>1,284</strong></div>
                            <div class="vx-usage-metric"><span class="vx-usage-mlabel"><i data-lucide="arrow-down"></i><span data-i18n="showcase.desktop.usage.input">Input</span></span><strong>12.96M</strong></div>
                            <div class="vx-usage-metric"><span class="vx-usage-mlabel"><i data-lucide="arrow-up"></i><span data-i18n="showcase.desktop.usage.output">Output</span></span><strong>2.31M</strong></div>
                            <div class="vx-usage-metric"><span class="vx-usage-mlabel"><i data-lucide="hard-drive"></i><span data-i18n="showcase.desktop.usage.cachedRead">Cached read</span></span><strong>3.15M</strong></div>
                            <div class="vx-usage-metric"><span class="vx-usage-mlabel"><i data-lucide="chart-pie"></i><span data-i18n="showcase.desktop.usage.cacheHitRate">Cache hit rate</span></span><strong>62%</strong></div>
                          </div>
                          <div class="vx-usage-trend">
                            <div class="vx-usage-trendhead">
                              <strong data-i18n="showcase.desktop.usage.trend">Usage trend</strong>
                              <div class="vx-usage-seg" data-usage-seg>
                                <button class="is-active" type="button" data-usage-view="bars"><i data-lucide="chart-pie"></i><span data-i18n="showcase.desktop.usage.trendTab">Trend</span></button>
                                <button type="button" data-usage-view="heatmap"><i data-lucide="layout-dashboard"></i><span data-i18n="showcase.desktop.usage.heatmap">Heatmap</span></button>
                                <button type="button" data-usage-view="models"><i data-lucide="chart-pie"></i><span data-i18n="showcase.desktop.usage.models">Models</span></button>
                              </div>
                            </div>
                            <div class="vx-usage-chart" data-usage-page="bars">
                              <svg viewBox="0 0 640 176" preserveAspectRatio="none" aria-hidden="true">
                                <line x1="48" y1="12" x2="640" y2="12" class="vx-chart-grid" />
                                <line x1="48" y1="56" x2="640" y2="56" class="vx-chart-grid" />
                                <line x1="48" y1="100" x2="640" y2="100" class="vx-chart-grid" />
                                <line x1="48" y1="144" x2="640" y2="144" class="vx-chart-grid" />
                                <g class="vx-chart-bars">
                                  <g><rect x="62" y="76" width="16" height="68" fill="#00c950" /><rect x="62" y="52" width="16" height="24" fill="#00a63e" /><rect x="62" y="40" width="16" height="12" fill="#008236" /></g>
                                  <g><rect x="100" y="92" width="16" height="52" fill="#00c950" /><rect x="100" y="70" width="16" height="22" fill="#00a63e" /><rect x="100" y="58" width="16" height="12" fill="#008236" /></g>
                                  <g><rect x="138" y="60" width="16" height="84" fill="#00c950" /><rect x="138" y="34" width="16" height="26" fill="#00a63e" /><rect x="138" y="22" width="16" height="12" fill="#008236" /></g>
                                  <g><rect x="176" y="104" width="16" height="40" fill="#00c950" /><rect x="176" y="86" width="16" height="18" fill="#00a63e" /><rect x="176" y="78" width="16" height="8" fill="#008236" /></g>
                                  <g><rect x="214" y="48" width="16" height="96" fill="#00c950" /><rect x="214" y="22" width="16" height="26" fill="#00a63e" /><rect x="214" y="12" width="16" height="10" fill="#008236" /></g>
                                  <g><rect x="252" y="84" width="16" height="60" fill="#00c950" /><rect x="252" y="62" width="16" height="22" fill="#00a63e" /><rect x="252" y="52" width="16" height="10" fill="#008236" /></g>
                                  <g><rect x="290" y="68" width="16" height="76" fill="#00c950" /><rect x="290" y="44" width="16" height="24" fill="#00a63e" /><rect x="290" y="32" width="16" height="12" fill="#008236" /></g>
                                  <g><rect x="328" y="96" width="16" height="48" fill="#00c950" /><rect x="328" y="76" width="16" height="20" fill="#00a63e" /><rect x="328" y="66" width="16" height="10" fill="#008236" /></g>
                                  <g><rect x="366" y="56" width="16" height="88" fill="#00c950" /><rect x="366" y="30" width="16" height="26" fill="#00a63e" /><rect x="366" y="18" width="16" height="12" fill="#008236" /></g>
                                  <g><rect x="404" y="88" width="16" height="56" fill="#00c950" /><rect x="404" y="66" width="16" height="22" fill="#00a63e" /><rect x="404" y="56" width="16" height="10" fill="#008236" /></g>
                                  <g><rect x="442" y="72" width="16" height="72" fill="#00c950" /><rect x="442" y="48" width="16" height="24" fill="#00a63e" /><rect x="442" y="38" width="16" height="10" fill="#008236" /></g>
                                  <g><rect x="480" y="100" width="16" height="44" fill="#00c950" /><rect x="480" y="82" width="16" height="18" fill="#00a63e" /><rect x="480" y="74" width="16" height="8" fill="#008236" /></g>
                                  <g><rect x="518" y="64" width="16" height="80" fill="#00c950" /><rect x="518" y="40" width="16" height="24" fill="#00a63e" /><rect x="518" y="28" width="16" height="12" fill="#008236" /></g>
                                  <g><rect x="556" y="80" width="16" height="64" fill="#00c950" /><rect x="556" y="58" width="16" height="22" fill="#00a63e" /><rect x="556" y="48" width="16" height="10" fill="#008236" /></g>
                                  <g><rect x="594" y="52" width="16" height="92" fill="#00c950" /><rect x="594" y="28" width="16" height="24" fill="#00a63e" /><rect x="594" y="16" width="16" height="12" fill="#008236" /></g>
                                </g>
                                <g class="vx-chart-axis">
                                  <text x="42" y="16" text-anchor="end">40k</text>
                                  <text x="42" y="60" text-anchor="end">30k</text>
                                  <text x="42" y="104" text-anchor="end">20k</text>
                                  <text x="42" y="148" text-anchor="end">10k</text>
                                </g>
                              </svg>
                              <div class="vx-usage-legend">
                                <button class="is-active" type="button"><span class="vx-usage-dot" style="background:#00c950"></span><span data-i18n="showcase.desktop.usage.total">Total</span></button>
                                <button class="is-active" type="button"><span class="vx-usage-dot" style="background:#00a63e"></span><span data-i18n="showcase.desktop.usage.input">Input</span></button>
                                <button class="is-active" type="button"><span class="vx-usage-dot" style="background:#008236"></span><span data-i18n="showcase.desktop.usage.output">Output</span></button>
                                <button class="is-active" type="button"><span class="vx-usage-dot" style="background:#016630"></span><span data-i18n="showcase.desktop.usage.cache">Cache</span></button>
                              </div>
                            </div>
                            <div class="vx-usage-heatmap" data-usage-page="heatmap" hidden>
                              <div class="vx-usage-heatgrid">
                                <span style="--h:0.15"></span><span style="--h:0.3"></span><span style="--h:0.55"></span><span style="--h:0.2"></span><span style="--h:0.7"></span><span style="--h:0.45"></span><span style="--h:0.85"></span>
                                <span style="--h:0.35"></span><span style="--h:0.6"></span><span style="--h:0.25"></span><span style="--h:0.9"></span><span style="--h:0.5"></span><span style="--h:0.15"></span><span style="--h:0.65"></span>
                                <span style="--h:0.75"></span><span style="--h:0.4"></span><span style="--h:0.95"></span><span style="--h:0.3"></span><span style="--h:0.55"></span><span style="--h:0.8"></span><span style="--h:0.2"></span>
                                <span style="--h:0.5"></span><span style="--h:0.85"></span><span style="--h:0.35"></span><span style="--h:0.6"></span><span style="--h:0.25"></span><span style="--h:0.7"></span><span style="--h:0.45"></span>
                                <span style="--h:0.9"></span><span style="--h:0.2"></span><span style="--h:0.65"></span><span style="--h:0.4"></span><span style="--h:0.8"></span><span style="--h:0.3"></span><span style="--h:0.55"></span>
                              </div>
                            </div>
                            <div class="vx-usage-models" data-usage-page="models" hidden>
                              <div class="vx-usage-modelrow"><span class="vx-usage-modelname">gpt-5.1-codex</span><div class="vx-usage-modelbar"><span style="width:82%"></span></div><b>10,482</b></div>
                              <div class="vx-usage-modelrow"><span class="vx-usage-modelname">claude-sonnet-4.5</span><div class="vx-usage-modelbar"><span style="width:58%"></span></div><b>7,415</b></div>
                              <div class="vx-usage-modelrow"><span class="vx-usage-modelname">gemini-2.5-pro</span><div class="vx-usage-modelbar"><span style="width:34%"></span></div><b>4,330</b></div>
                              <div class="vx-usage-modelrow"><span class="vx-usage-modelname">gpt-5.1</span><div class="vx-usage-modelbar"><span style="width:18%"></span></div><b>2,296</b></div>
                            </div>
                          </div>
                          <div class="vx-usage-dims">
                            <div class="vx-usage-dimtabs">
                              <button class="is-active" type="button" data-i18n="showcase.desktop.usage.time">Time</button>
                              <button type="button" data-i18n="showcase.desktop.usage.agent">Agent</button>
                              <button type="button" data-i18n="showcase.desktop.usage.project">Project</button>
                              <button type="button" data-i18n="showcase.desktop.usage.provider">Model provider</button>
                              <button type="button" data-i18n="showcase.desktop.usage.model">Model</button>
                            </div>
                            <div class="vx-usage-table">
                              <div class="vx-usage-tr is-head">
                                <span class="is-dim" data-i18n="showcase.desktop.usage.time">Time</span>
                                <span class="is-num" data-i18n="showcase.desktop.usage.requests">Requests</span>
                                <span class="is-num" data-i18n="showcase.desktop.usage.total">Total</span>
                                <span class="is-num" data-i18n="showcase.desktop.usage.input">Input</span>
                                <span class="is-num" data-i18n="showcase.desktop.usage.output">Output</span>
                                <span class="is-num" data-i18n="showcase.desktop.usage.cache">Cache</span>
                                <span class="is-num" data-i18n="showcase.desktop.usage.hitRate">Hit rate</span>
                                <span class="is-num" data-i18n="showcase.desktop.usage.lastActivity">Last activity</span>
                                <span class="is-num" data-i18n="showcase.desktop.usage.coverage">Coverage</span>
                              </div>
                              <div class="vx-usage-tr"><span class="is-dim">Aug 5</span><span class="is-num">128</span><span class="is-num">1.24M</span><span class="is-num">0.88M</span><span class="is-num">0.16M</span><span class="is-num">0.20M</span><span class="is-num">61%</span><span class="is-num">2h ago</span><span class="is-num">Reported</span></div>
                              <div class="vx-usage-tr"><span class="is-dim">Aug 6</span><span class="is-num">96</span><span class="is-num">0.98M</span><span class="is-num">0.71M</span><span class="is-num">0.12M</span><span class="is-num">0.15M</span><span class="is-num">58%</span><span class="is-num">5h ago</span><span class="is-num">Reported</span></div>
                              <div class="vx-usage-tr"><span class="is-dim">Aug 7</span><span class="is-num">154</span><span class="is-num">1.62M</span><span class="is-num">1.12M</span><span class="is-num">0.21M</span><span class="is-num">0.29M</span><span class="is-num">64%</span><span class="is-num">Yesterday</span><span class="is-num">Reported</span></div>
                              <div class="vx-usage-tr"><span class="is-dim">Aug 8</span><span class="is-num">72</span><span class="is-num">0.74M</span><span class="is-num">0.52M</span><span class="is-num">0.09M</span><span class="is-num">0.13M</span><span class="is-num">63%</span><span class="is-num">Yesterday</span><span class="is-num">Reported</span></div>
                              <div class="vx-usage-tr"><span class="is-dim">Aug 9</span><span class="is-num">183</span><span class="is-num">1.85M</span><span class="is-num">1.31M</span><span class="is-num">0.24M</span><span class="is-num">0.30M</span><span class="is-num">66%</span><span class="is-num">8h ago</span><span class="is-num">Reported</span></div>
                              <div class="vx-usage-tr"><span class="is-dim">Aug 10</span><span class="is-num">141</span><span class="is-num">1.41M</span><span class="is-num">0.97M</span><span class="is-num">0.19M</span><span class="is-num">0.25M</span><span class="is-num">62%</span><span class="is-num">2h ago</span><span class="is-num">Reported</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </main>

                  <aside class="vx-preview" data-desktop-preview>
                    <div class="vx-preview-head">
                      <strong>Preview</strong>
                      <div class="vx-preview-tools">
                        <button class="vx-icon-btn is-sm" type="button" aria-label="New terminal"><i data-lucide="square-terminal"></i></button>
                        <span class="vx-preview-divider"></span>
                        <button class="vx-icon-btn is-sm" type="button" aria-label="Full screen"><i data-lucide="maximize-2"></i></button>
                        <button class="vx-icon-btn is-sm" type="button" data-desktop-action="preview-close" aria-label="Close preview panel"><i data-lucide="x"></i></button>
                      </div>
                    </div>
                    <div class="vx-preview-tabs">
                      <span class="vx-preview-tab is-active">
                        <i data-lucide="square-terminal"></i>
                        <span>Vibex Shell</span>
                        <button class="vx-tab-close" type="button" aria-label="Close tab"><i data-lucide="x"></i></button>
                      </span>
                      <button class="vx-preview-add" type="button" aria-label="New preview tab"><i data-lucide="plus"></i></button>
                    </div>
                    <div class="vx-preview-term">
                      <div class="vx-term-line"><span class="vx-term-prompt">❯</span><span>pnpm vitest run agent/timeline</span></div>
                      <div class="vx-term-line is-dim">RUN v3.2.1 /workspace/vibex</div>
                      <div class="vx-term-line"><span class="is-pass">✓</span><span>src/agent/timeline.test.ts (24 tests) 6.21s</span></div>
                      <div class="vx-term-line"><span class="is-pass">✓</span><span>src/agent/worktree.test.ts (11 tests) 1.88s</span></div>
                      <div class="vx-term-line is-dim">Test Files 2 passed (2)</div>
                      <div class="vx-term-line is-dim">Tests 35 passed (35)</div>
                      <div class="vx-term-line"><span class="vx-term-prompt">❯</span><span class="vx-term-cursor"></span></div>
                    </div>
                  </aside>

                  <aside class="vx-rail" data-desktop-rail>
                    <div class="vx-rail-head">
                      <strong data-desktop-rail-title>Files</strong>
                      <div class="vx-rail-tools">
                        <div class="vx-file-actions">
                          <button class="vx-file-action" type="button" aria-label="Open workspace with selected tool"><i data-lucide="external-link"></i></button>
                          <button class="vx-file-action is-caret" type="button" aria-label="Open workspace with"><i data-lucide="chevron-down"></i></button>
                        </div>
                        <button class="vx-icon-btn is-md" type="button" data-desktop-action="rail-close" aria-label="Close panel"><i data-lucide="chevrons-right"></i></button>
                      </div>
                    </div>
                    <div class="vx-rail-mode is-files" data-rail-mode="files">
                      <div class="vx-rail-search"><i data-lucide="search"></i><span>Search workspace files</span><span class="vx-search-mode">Name</span></div>
                      <div class="vx-filetree">
                        <div class="vx-file-row is-dir" style="--depth:0"><i data-lucide="chevron-down"></i><i data-lucide="folder"></i><span>apps</span></div>
                        <div class="vx-file-row" style="--depth:1"><i data-lucide="file-code"></i><span>app.rs</span></div>
                        <div class="vx-file-row is-selected" style="--depth:1"><i data-lucide="file-code"></i><span>code_workbench.rs</span></div>
                        <div class="vx-file-row is-dir" style="--depth:0"><i data-lucide="chevron-down"></i><i data-lucide="folder"></i><span>src</span></div>
                        <div class="vx-file-row" style="--depth:1"><i data-lucide="file-code"></i><span>timeline.rs</span></div>
                        <div class="vx-file-row" style="--depth:1"><i data-lucide="book-open"></i><span>README.md</span></div>
                        <div class="vx-file-row is-dir" style="--depth:0"><i data-lucide="chevron-down"></i><i data-lucide="folder"></i><span>crates</span></div>
                        <div class="vx-file-row" style="--depth:1"><i data-lucide="file-json"></i><span>tokens.json</span></div>
                        <div class="vx-file-row" style="--depth:1"><i data-lucide="file-cog"></i><span>Cargo.toml</span></div>
                      </div>
                    </div>
                    <div class="vx-rail-mode is-git" data-rail-mode="git">
                      <div class="vx-git-tabs">
                        <button class="is-active" type="button" data-git-tab="changes">Changes</button>
                        <button type="button" data-git-tab="commits">Commits</button>
                      </div>
                      <div class="vx-git-page is-changes" data-git-page="changes">
                        <div class="vx-git-toolbar">
                          <button class="vx-icon-btn is-xs" type="button" aria-label="Fetch"><i data-lucide="download"></i></button>
                          <button class="vx-icon-btn is-xs" type="button" aria-label="Push"><i data-lucide="upload"></i></button>
                          <button class="vx-icon-btn is-xs" type="button" aria-label="Refresh Git"><i data-lucide="rotate-ccw"></i></button>
                          <span class="vx-toolbar-spacer"></span>
                          <span class="vx-toolbar-divider"></span>
                          <button class="vx-icon-btn is-xs" type="button" aria-label="Expand all changes"><i data-lucide="chevrons-down-up"></i></button>
                        </div>
                        <div class="vx-git-wsrow">
                          <span class="vx-checkbox"></span>
                          <div class="vx-git-wsname"><strong>vibex</strong><span>(4 files)</span></div>
                          <span class="vx-git-nums"><b class="vx-diff-add">+132</b><b class="vx-diff-del">−49</b></span>
                        </div>
                        <div class="vx-git-list">
                          <div class="vx-git-row is-dir" style="--depth:0"><span class="vx-checkbox"></span><i data-lucide="folder"></i><span class="vx-git-name">apps/desktop</span></div>
                          <div class="vx-git-row" style="--depth:1"><span class="vx-checkbox"></span><i data-lucide="file-code"></i><span class="vx-git-name">app.rs</span><span class="vx-git-nums"><b class="vx-diff-add">+4</b><b class="vx-diff-del">−2</b></span><span class="vx-git-badge">M</span></div>
                          <div class="vx-git-row is-dir" style="--depth:0"><span class="vx-checkbox"></span><i data-lucide="folder"></i><span class="vx-git-name">src/workbench</span></div>
                          <div class="vx-git-row is-selected" style="--depth:1"><span class="vx-checkbox is-checked"><i data-lucide="check"></i></span><i data-lucide="file-code"></i><span class="vx-git-name">timeline.rs</span><span class="vx-git-nums"><b class="vx-diff-add">+86</b><b class="vx-diff-del">−31</b></span><span class="vx-git-badge">M</span></div>
                          <div class="vx-git-row" style="--depth:1"><span class="vx-checkbox is-checked"><i data-lucide="check"></i></span><i data-lucide="file-code"></i><span class="vx-git-name">worktree.rs</span><span class="vx-git-nums"><b class="vx-diff-add">+31</b><b class="vx-diff-del">−9</b></span><span class="vx-git-badge">M</span></div>
                          <div class="vx-git-row is-dir" style="--depth:0"><span class="vx-checkbox"></span><i data-lucide="folder"></i><span class="vx-git-name">crates/core</span></div>
                          <div class="vx-git-row" style="--depth:1"><span class="vx-checkbox is-checked"><i data-lucide="check"></i></span><i data-lucide="file-code"></i><span class="vx-git-name">session.rs</span><span class="vx-git-nums"><b class="vx-diff-add">+11</b><b class="vx-diff-del">−7</b></span><span class="vx-git-badge">M</span></div>
                        </div>
                        <div class="vx-commit-box">
                          <div class="vx-commit-row">
                            <button class="vx-commit-type" type="button">feat<i data-lucide="chevron-down"></i></button>
                            <span class="vx-amend"><span class="vx-checkbox"></span>amend</span>
                          </div>
                          <div class="vx-commit-input">feat: rework worktree merge backfill</div>
                          <div class="vx-commit-actions">
                            <button class="vx-commit-btn" type="button"><i data-lucide="rotate-ccw"></i>Rollback</button>
                            <span class="vx-commit-spacer"></span>
                            <button class="vx-commit-btn is-primary" type="button">Commit<span class="vx-commit-count">4</span></button>
                          </div>
                        </div>
                      </div>
                      <div class="vx-git-page is-commits" data-git-page="commits" hidden>
                        <div class="vx-git-filters">
                          <button class="vx-git-filter" type="button"><span>Branch</span><i data-lucide="chevron-down"></i></button>
                          <button class="vx-git-filter" type="button"><span>All Users</span><i data-lucide="chevron-down"></i></button>
                          <button class="vx-git-filter is-date" type="button"><span>Any date</span><i data-lucide="chevron-down"></i></button>
                        </div>
                        <div class="vx-git-history">
                          <div class="vx-history-row"><span class="vx-history-graph"><svg viewBox="0 0 28 64"><path d="M14 0 V64" stroke="#e4e4e7" stroke-width="1.8" fill="none" /></svg><span class="vx-history-node is-main"></span></span><div class="vx-history-card is-selected"><div class="vx-history-subj">feat: rework worktree merge backfill<span class="vx-history-ref">main</span></div><div class="vx-history-meta"><span>2h ago</span><span>peatboy</span><span class="vx-history-hash">a3f9c12</span></div></div></div>
                          <div class="vx-history-row"><span class="vx-history-graph"><svg viewBox="0 0 28 64"><path d="M14 0 V64" stroke="#e4e4e7" stroke-width="1.8" fill="none" /></svg><span class="vx-history-node is-main"></span></span><div class="vx-history-card"><div class="vx-history-subj">fix: guard timeline replay against partial turns</div><div class="vx-history-meta"><span>5h ago</span><span>peatboy</span><span class="vx-history-hash">7b21e04</span></div></div></div>
                          <div class="vx-history-row"><span class="vx-history-graph"><svg viewBox="0 0 28 64"><path d="M14 0 C14 32 26 32 26 32 L26 64" stroke="#51a2ff" stroke-width="1.5" fill="none" /><path d="M14 0 V64" stroke="#e4e4e7" stroke-width="1.8" fill="none" /></svg><span class="vx-history-node is-main"></span><span class="vx-history-node is-lane"></span></span><div class="vx-history-card"><div class="vx-history-subj">chore: bump gpui-component pin<span class="vx-history-ref">codex/runtime</span></div><div class="vx-history-meta"><span>8h ago</span><span>codex</span><span class="vx-history-hash">c91d7f3</span></div></div></div>
                          <div class="vx-history-row"><span class="vx-history-graph"><svg viewBox="0 0 28 64"><path d="M14 0 V64" stroke="#e4e4e7" stroke-width="1.8" fill="none" /></svg><span class="vx-history-node is-main"></span></span><div class="vx-history-card"><div class="vx-history-subj">feat: add composer token ring tooltip</div><div class="vx-history-meta"><span>Yesterday</span><span>peatboy</span><span class="vx-history-hash">02e8b55</span></div></div></div>
                          <div class="vx-history-row"><span class="vx-history-graph"><svg viewBox="0 0 28 64"><path d="M14 0 V64" stroke="#e4e4e7" stroke-width="1.8" fill="none" /></svg><span class="vx-history-node is-main"></span></span><div class="vx-history-card"><div class="vx-history-subj">fix: clamp right rail width on narrow viewports</div><div class="vx-history-meta"><span>Yesterday</span><span>peatboy</span><span class="vx-history-hash">f4a0d19</span></div></div></div>
                          <div class="vx-history-row"><span class="vx-history-graph"><svg viewBox="0 0 28 64"><path d="M14 0 V64" stroke="#e4e4e7" stroke-width="1.8" fill="none" /></svg><span class="vx-history-node is-main"></span></span><div class="vx-history-card"><div class="vx-history-subj">chore: refresh theme tokens</div><div class="vx-history-meta"><span>2 days ago</span><span>peatboy</span><span class="vx-history-hash">88bc3a6</span></div></div></div>
                        </div>
                      </div>
                    </div>
                  </aside>

                  <nav class="vx-activity" aria-label="Workspace tools">
                    <button class="is-active" type="button" data-desktop-rail="files" aria-label="Files"><i data-lucide="folder-open"></i></button>
                    <button type="button" data-desktop-rail="git" aria-label="Git"><i data-lucide="git-branch"></i><span class="vx-activity-badge">4</span></button>
                    <button type="button" data-desktop-action="preview-open" aria-label="New terminal"><i data-lucide="square-terminal"></i></button>
                    <span class="vx-activity-spacer"></span>
                    <button type="button" aria-label="Workspace settings"><i data-lucide="settings-2"></i></button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="desktop-showcase-foot"><span data-desktop-caption>Agent workbench</span><span data-desktop-source>Source-mapped preview · no screenshots</span><i data-lucide="arrow-right"></i></div>
        </div>
      </div>
    </section>

    <section class="mobile-showcase" id="mobile" aria-label="Vibex mobile app preview">
      <div class="section-shell mobile-showcase-shell">
        <div class="mobile-showcase-copy reveal">
          <div class="section-kicker"><span>02</span> Native mobile</div>
          <h2>The same workbench,<br />in your pocket.</h2>
          <p>
            Pair your phone with the desktop runtime and carry sessions, diffs, and approvals with you. The mobile interface is on its way — here's the shape of it.
          </p>
          <span class="mobile-showcase-badge"><i data-lucide="smartphone"></i><span>Mobile UI in development</span></span>
        </div>
        <div class="mobile-showcase-stage reveal">
          <div class="mobile-phone-glow" aria-hidden="true"></div>
          <div class="mobile-phone" role="img">
            <div class="mobile-phone-frame">
              <span class="mobile-phone-island" aria-hidden="true"></span>
              <div class="mobile-phone-screen">
                <span class="mobile-phone-placeholder">Mobile interface preview</span>
              </div>
            </div>
            <div class="mobile-phone-base" aria-hidden="true"></div>
          </div>
          <p class="mobile-phone-caption"><i data-lucide="smartphone"></i><span>Mobile screen preview — coming soon</span></p>
        </div>
      </div>
    </section>

    <section class="intro-section section-shell" id="product">
      <div class="section-kicker reveal"><span>03</span> One focused surface</div>
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
          <div class="section-kicker section-kicker-dark"><span>04</span> Local-first architecture</div>
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
          <div class="phone-frame">
            <span class="phone-speaker" aria-hidden="true"></span>
            <div class="phone-screen">
              <div class="phone-statusbar" aria-hidden="true">
                <span class="phone-statusbar-time" data-phone-time>9:41</span>
                <span class="phone-statusbar-icons"><i data-lucide="signal"></i><i data-lucide="wifi"></i><i data-lucide="battery"></i></span>
              </div>
              <div class="phone-statusbar-spacer" aria-hidden="true"></div>

              <div class="phone-app" data-phone-app>
                <header class="phone-chat-header">
                  <span class="phone-chat-avatar"><i data-lucide="sparkles"></i></span>
                  <div class="phone-chat-peer">
                    <strong data-phone-agent>Vibex · Codex</strong>
                    <span class="phone-chat-presence" data-phone-presence><i data-lucide="loader-circle"></i><em data-phone-presence-text>Refactoring workbench.rs</em></span>
                  </div>
                  <button class="phone-chat-more" type="button" tabindex="-1" aria-hidden="true"><i data-lucide="ellipsis"></i></button>
                </header>

                <div class="phone-timeline">
                  <div class="phone-bubble phone-bubble-user">
                    <p data-phone-user>Bump the test coverage for the session store before the release build.</p>
                    <time data-phone-user-time>09:38</time>
                  </div>

                  <div class="phone-tool-card" data-phone-tool>
                    <div class="phone-tool-head"><i data-lucide="square-terminal"></i><code data-phone-tool-cmd>cargo test -p vibex store</code></div>
                    <div class="phone-tool-lines"><span data-phone-tool-line1>running 12 tests</span><span data-phone-tool-line2>test session_store::persists_timeline ... ok</span></div>
                  </div>

                  <div class="phone-bubble phone-bubble-agent">
                    <p data-phone-agent-text>Done — added 4 tests around timeline persistence. Coverage for the session store is now 91%.</p>
                    <time data-phone-agent-time>09:41</time>
                  </div>

                  <div class="phone-actions">
                    <span class="phone-chip"><i data-lucide="file-diff"></i><span data-phone-chip-diff>3 files changed</span></span>
                    <span class="phone-chip phone-chip-accent"><i data-lucide="check"></i><span data-phone-chip-approve>Approve push</span></span>
                  </div>
                </div>

                <div class="phone-composer" aria-hidden="true">
                  <span data-phone-composer>Reply…</span>
                  <i data-lucide="mic"></i>
                </div>

                <div class="phone-home-indicator" aria-hidden="true"></div>
              </div>
            </div>
          </div>
          <div class="remote-chip chip-direct"><i data-lucide="radio"></i><span>Direct route</span><small>12 ms</small></div>
          <div class="remote-chip chip-secure"><i data-lucide="shield-check"></i><span>Encrypted</span><small>End to end</small></div>
        </div>

        <div class="remote-copy reveal">
          <div class="section-kicker"><span>05</span> Native mobile</div>
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
          <div class="section-kicker"><span>06</span> The whole loop</div>
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
          <div class="section-kicker section-kicker-dark"><span>07</span> Open source</div>
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
        <div class="section-kicker"><span>08</span> Questions</div>
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

function renderIcons() {
  createIcons({
    icons: {
    ArrowRight,
    ArrowUp,
    ArrowUpRight,
    ArrowUpToLine,
    ArrowDownWideNarrow,
    ArrowDown,
    Activity,
    AtSign,
    ArrowLeft,
    Battery,
    BookOpen,
    Brain,
    Bot,
    Braces,
    Check,
    ChevronDown,
    ChevronRight,
    ChevronsDownUp,
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
    Database,
    Download,
    Eye,
    ExternalLink,
    File,
    FileCode,
    FileCode2,
    FileCog,
    FileDiff,
    FileJson,
    FileText,
    Folder,
    FolderOpen,
    GitBranch,
    GitCommitHorizontal,
    Github,
    Ellipsis,
    GripVertical,
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
    Pencil,
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
    Signal,
    Smartphone,
    Square,
    Sparkles,
    Settings2,
    SquareTerminal,
    Trash2,
    SunMedium,
    Terminal,
    TriangleAlert,
    Upload,
    UserRound,
    Wifi,
    Workflow,
    X,
    Zap,
    Mic,
    ChartPie,
    LayoutDashboard,
    HardDrive,
    Inbox,
    "Import": ImportIcon,
    Info,
    RotateCw,
  },
  });
}

renderIcons();

const textBindings = [
  [".skip-link", "accessibility.skip"],
  [".desktop-nav a:nth-child(1)", "nav.product"],
  [".desktop-nav a:nth-child(2)", "nav.how"],
  [".desktop-nav a:nth-child(3)", "nav.remote"],
  [".desktop-nav a:nth-child(4)", "nav.faq"],
  [".nav-actions .button-light", "nav.get"],
  [".final-actions .button-primary", "nav.get"],
  ["[data-desktop-tab=\"agent\"]", "showcase.desktop.agent"],
  ["[data-desktop-tab=\"files\"]", "showcase.desktop.files"],
  ["[data-desktop-tab=\"management\"]", "showcase.desktop.management"],
  ["[data-desktop-source]", "showcase.desktop.source"],
  [".mobile-showcase-copy .section-kicker", "showcase.mobile.kicker"],
  [".mobile-showcase-copy > p", "showcase.mobile.copy"],
  [".mobile-showcase-badge span", "showcase.mobile.badge"],
  [".mobile-phone-placeholder", "showcase.mobile.placeholder"],
  [".mobile-phone-caption span", "showcase.mobile.screen"],
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
  ["[data-phone-agent]", "remote.phone.agent"],
  ["[data-phone-presence-text]", "remote.phone.presence"],
  ["[data-phone-user]", "remote.phone.user"],
  ["[data-phone-agent-text]", "remote.phone.agentText"],
  ["[data-phone-chip-diff]", "remote.phone.chipDiff"],
  ["[data-phone-chip-approve]", "remote.phone.chipApprove"],
  ["[data-phone-composer]", "remote.phone.composer"],
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
  [".mobile-showcase-copy h2", "showcase.mobile.title"],
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
  [".mobile-showcase", "aria-label", "showcase.mobile.aria"],
  [".desktop-app", "aria-label", "showcase.desktop.aria"],
  [".architecture-diagram", "aria-label", "architecture.diagram.label"],
  ["[data-copy-command]", "title", "open.copyCommands"],
  ["[data-copy-command]", "aria-label", "open.copyCommands"],
  [".phone-frame", "aria-label", "remote.aria"],
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
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(currentLanguage, element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-text]").forEach((element) => {
    element.textContent = translate(currentLanguage, element.dataset.i18nText);
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
  if (activeDesktopView) setDesktopView(activeDesktopView, { restore: true });
  // setDesktopView only refreshes the caption, so re-sync the titlebar for
  // the new-session home, which has no view tab of its own.
  const homePanelActive = desktopShowcase?.querySelector('[data-desktop-panel="home"]')?.classList.contains("is-active") ?? false;
  if (homePanelActive) syncSessionTitle(false);
  const activeDesktopRail = desktopShowcase?.querySelector("[data-rail-mode]:not([hidden])")?.dataset.railMode;
  if (activeDesktopRail) setDesktopRail(activeDesktopRail);

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
const DESKTOP_CANVAS_WIDTH = 1280;
const DESKTOP_CANVAS_HEIGHT = 800;

function resizeDesktopShowcase() {
  if (!desktopViewport || !desktopCanvas) return;
  const scale = desktopViewport.clientWidth / DESKTOP_CANVAS_WIDTH;
  desktopCanvas.style.setProperty("--desktop-scale", String(scale));
  desktopViewport.style.height = `${Math.ceil(DESKTOP_CANVAS_HEIGHT * scale)}px`;
}

if (desktopViewport && desktopCanvas) {
  resizeDesktopShowcase();
  new ResizeObserver(resizeDesktopShowcase).observe(desktopViewport);
}

const DESKTOP_VIEWS = ["agent", "files", "management", "usage"];
const RAIL_LABEL_KEYS = {
  files: "showcase.desktop.railFiles",
  git: "showcase.desktop.railGit",
};
const VIEW_LABEL_KEYS = {
  agent: "showcase.desktop.agent",
  files: "showcase.desktop.files",
  management: "showcase.desktop.management",
  usage: "showcase.desktop.usage",
};
// Catalog snapshot mirrors the desktop app's user-visible Agent list
// (vibex_core::is_user_visible_agent), grouped enabled-first like the real
// Config Center, with subtitles showing config counts or check status.
const MANAGEMENT_AGENT_KEYS = {
  codex: { logo: "/assets/agents/openai-light.svg", name: "Codex", desc: "Agent account · gpt-5.1-codex" },
  claude: { logo: "/assets/agents/claude.svg", name: "Claude Code", desc: "Agent account · claude-sonnet-4.5" },
  gemini: { logo: "/assets/agents/gemini.svg", name: "Gemini CLI", desc: "External CLI · gemini-2.5-pro" },
  opencode: { logo: "/assets/agents/opencode.svg", name: "OpenCode", desc: "External CLI · External model" },
  antigravity: { logo: "/assets/agents/antigravity.svg", name: "Google Antigravity", desc: "External CLI · gemini-3-pro" },
  copilot: { logo: "/assets/agents/copilot-light.svg", name: "GitHub Copilot", desc: "External CLI · gpt-5.1-codex" },
  grok: { logo: "/assets/agents/grok-light.svg", name: "Grok", desc: "External CLI · grok-4.1" },
  pi: { logo: "/assets/agents/pi-light.svg", name: "Pi", desc: "External CLI · glm-5.1" },
  zcode: { logo: "/assets/agents/zcode-light.svg", name: "ZCode", desc: "External CLI · glm-5.1" },
  cline: { logo: "/assets/agents/cline-light.svg", name: "Cline", desc: "External CLI · External model" },
  "codebuddy-code": { logo: "/assets/agents/codebuddy-code.svg", name: "Codebuddy Code", desc: "External CLI · External model" },
  cursor: { logo: "/assets/agents/cursor-light.svg", name: "Cursor", desc: "External CLI · composer-2" },
  "deepseek-harness": { logo: "/assets/agents/deepseek-harness.svg", name: "DeepSeek Harness", desc: "External CLI · deepseek-v4" },
  devin: { logo: "/assets/agents/devin-light.svg", name: "Devin CLI", desc: "External CLI · External model" },
  hermes: { logo: "/assets/agents/hermes-light.svg", name: "Hermes", desc: "External CLI · hermes-4.5" },
  kimi: { logo: "/assets/agents/kimi.svg", name: "Kimi Code CLI", desc: "External CLI · kimi-k3" },
};

function setPreviewOpen(open) {
  desktopShowcase?.querySelector("[data-desktop-preview]")?.classList.toggle("is-hidden", !open);
}

function setDesktopRail(railKey) {
  if (!desktopShowcase) return;
  const rail = ["files", "git"].includes(railKey) ? railKey : "files";
  desktopShowcase.querySelectorAll("[data-rail-mode]").forEach((mode) => {
    mode.hidden = mode.dataset.railMode !== rail;
  });
  desktopShowcase.querySelectorAll("[data-desktop-rail]").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.desktopRail === rail);
  });
  const title = desktopShowcase.querySelector("[data-desktop-rail-title]");
  if (title) title.textContent = translate(currentLanguage, RAIL_LABEL_KEYS[rail]);
}

function setGitTab(tabKey) {
  if (!desktopShowcase) return;
  const tab = ["changes", "commits"].includes(tabKey) ? tabKey : "changes";
  desktopShowcase.querySelectorAll("[data-git-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.gitTab === tab);
  });
  desktopShowcase.querySelectorAll("[data-git-page]").forEach((page) => {
    page.hidden = page.dataset.gitPage !== tab;
  });
}

function setMgmtTab(tabKey) {
  if (!desktopShowcase) return;
  const tab = ["agents", "mcp", "skills"].includes(tabKey) ? tabKey : "agents";
  desktopShowcase.querySelectorAll("[data-mgmt-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mgmtTab === tab);
  });
  desktopShowcase.querySelectorAll("[data-mgmt-pane]").forEach((pane) => {
    pane.hidden = pane.dataset.mgmtPane !== tab;
  });
  // Each section carries its own context sidebar in the app (Agent list /
  // MCP resources / Skills), so swap the sidebar together with the pane.
  desktopShowcase.querySelectorAll("[data-mgmt-sidebar]").forEach((sidebar) => {
    sidebar.hidden = sidebar.dataset.mgmtSidebar !== tab;
  });
}

function selectMgmtAgent(agentKey) {
  if (!desktopShowcase) return;
  const meta = MANAGEMENT_AGENT_KEYS[agentKey] ?? MANAGEMENT_AGENT_KEYS.codex;
  desktopShowcase.querySelectorAll("[data-mgmt-agent]").forEach((row) => {
    row.classList.toggle("is-selected", row.dataset.mgmtAgent === agentKey);
  });
  const logo = desktopShowcase.querySelector("[data-mgmt-logo] img");
  if (logo) logo.src = meta.logo;
  const name = desktopShowcase.querySelector("[data-mgmt-name]");
  if (name) name.textContent = meta.name;
  const desc = desktopShowcase.querySelector("[data-mgmt-desc]");
  if (desc) desc.textContent = meta.desc;
}

function setDesktopView(viewKey, { restore = false } = {}) {
  if (!desktopShowcase) return;
  const view = DESKTOP_VIEWS.includes(viewKey) ? viewKey : "agent";
  desktopShowcase.querySelectorAll("[data-desktop-view]").forEach((tab) => {
    const active = tab.dataset.desktopView === view;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  // "Agent workbench" and "Files & Git" share the timeline; the new-session
  // home opens only through the "New chat" action.
  const panelView = view === "management" ? "management" : view === "usage" ? "usage" : "agent";
  const agentWasActive = Boolean(
    desktopShowcase?.querySelector('[data-desktop-panel="agent"].is-active'),
  );
  setActivePanel(panelView);
  if (panelView === "agent") {
    // Entering the session view (tab click, session row, or app boot) plays
    // one full edit → send → agent turn. Returning to an already-active
    // session view (e.g. via the Files & Git tab) leaves the replay alone.
    if (!restore && !(agentWasActive && view === "files")) startTimelineReplay();
  } else {
    replayStop();
  }
  // The real app swaps the whole center surface for Config Center / Usage
  // Statistics: no preview dock, no right rail, no activity bar. The new-
  // session home does the same.
  const fullpage = panelView !== "agent";
  syncSessionTitle(panelView === "agent");
  desktopShowcase.querySelectorAll("[data-desktop-side]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.desktopSide === view);
  });
  if (!restore) {
    setDesktopRail(view === "files" ? "git" : "files");
    const shell = desktopShowcase.querySelector("[data-desktop-shell]");
    shell?.classList.toggle("is-fullpage", fullpage);
    setPreviewOpen(!fullpage);
  }
  const caption = desktopShowcase.querySelector("[data-desktop-caption]");
  if (caption) caption.textContent = translate(currentLanguage, VIEW_LABEL_KEYS[view]);
}

function setActivePanel(panelKey) {
  if (!desktopShowcase) return;
  desktopShowcase.querySelectorAll("[data-desktop-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.desktopPanel === panelKey);
  });
}

function syncSessionTitle(visible) {
  desktopShowcase?.querySelector("[data-desktop-title-main]")?.classList.toggle("is-title-hidden", !visible);
}

desktopShowcase?.querySelectorAll("[data-desktop-view]").forEach((tab) => {
  tab.addEventListener("click", () => {
    setDesktopView(tab.dataset.desktopView);
    markShowcaseInteraction();
  });
});

desktopShowcase?.querySelectorAll("[data-runtime-choice]").forEach((choice) => {
  choice.addEventListener("click", () => {
    desktopShowcase.querySelectorAll("[data-runtime-choice]").forEach((item) => item.classList.remove("is-active"));
    choice.classList.add("is-active");
    markShowcaseInteraction();
  });
});

desktopShowcase?.querySelectorAll("[data-desktop-rail]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const shell = desktopShowcase.querySelector("[data-desktop-shell]");
    const alreadyActive = tab.classList.contains("is-active");
    if (alreadyActive) {
      // Toggling the active rail button flips between collapsed and open,
      // matching the app's rail behaviour.
      shell?.classList.toggle("is-rail-collapsed");
    } else {
      shell?.classList.remove("is-rail-collapsed");
      setDesktopRail(tab.dataset.desktopRail);
    }
    markShowcaseInteraction();
  });
});

desktopShowcase?.querySelectorAll("[data-git-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    setGitTab(button.dataset.gitTab);
    markShowcaseInteraction();
  });
});

desktopShowcase?.querySelectorAll("[data-mgmt-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    setMgmtTab(button.dataset.mgmtTab);
    markShowcaseInteraction();
  });
});

desktopShowcase?.querySelectorAll("[data-usage-seg] [data-usage-view], .vx-usage-range [data-usage-view]").forEach((button) => {
  button.addEventListener("click", () => {
    setUsageView(button.dataset.usageView);
    markShowcaseInteraction();
  });
});

function setUsageView(viewKey) {
  if (!desktopShowcase) return;
  const view = ["bars", "heatmap", "models"].includes(viewKey) ? viewKey : "bars";
  desktopShowcase.querySelectorAll("[data-usage-seg] [data-usage-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.usageView === view);
  });
  desktopShowcase.querySelectorAll("[data-usage-page]").forEach((page) => {
    page.hidden = page.dataset.usagePage !== view;
  });
}

desktopShowcase?.querySelectorAll("[data-mgmt-agent]").forEach((row) => {
  row.addEventListener("click", () => {
    selectMgmtAgent(row.dataset.mgmtAgent);
    markShowcaseInteraction();
  });
});

desktopShowcase?.querySelectorAll("[data-desktop-action]").forEach((action) => {
  action.addEventListener("click", () => {
    const kind = action.dataset.desktopAction;
    if (kind === "sidebar") {
      desktopShowcase.querySelector("[data-desktop-shell]")?.classList.toggle("is-sidebar-collapsed");
      return;
    }
    if (kind === "rail-close") {
      desktopShowcase.querySelector("[data-desktop-shell]")?.classList.add("is-rail-collapsed");
      return;
    }
    if (kind === "management" || kind === "settings") {
      setDesktopView("management");
      return;
    }
    if (kind === "usage") {
      setDesktopView("usage");
      return;
    }
    if (kind === "agent") {
      setDesktopView("agent");
      desktopShowcase.querySelectorAll(".vx-session-row").forEach((row) => row.classList.toggle("is-selected", row === action));
      return;
    }
    if (kind === "new-session") {
      replayStop();
      desktopShowcase.querySelectorAll("[data-desktop-view]").forEach((tab) => {
        const active = tab.dataset.desktopView === "agent";
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      setActivePanel("home");
      // The new-session home owns the whole surface: no preview dock, no
      // right rail, no activity bar.
      const shell = desktopShowcase.querySelector("[data-desktop-shell]");
      shell?.classList.add("is-fullpage");
      setPreviewOpen(false);
      syncSessionTitle(false);
      desktopShowcase.querySelectorAll("[data-desktop-side]").forEach((button) => {
        button.classList.remove("is-selected");
      });
      const caption = desktopShowcase.querySelector("[data-desktop-caption]");
      if (caption) caption.textContent = translate(currentLanguage, "showcase.desktop.agent");
      return;
    }
    if (kind === "preview-open") {
      const shell = desktopShowcase.querySelector("[data-desktop-shell]");
      shell?.classList.remove("is-fullpage");
      shell?.classList.remove("is-rail-collapsed");
      setPreviewOpen(true);
      return;
    }
    if (kind === "preview-close") {
      setPreviewOpen(false);
      return;
    }
    if (kind === "terminal") {
      const preview = desktopShowcase.querySelector("[data-desktop-preview]");
      const open = preview?.classList.contains("is-hidden") ?? false;
      desktopShowcase.querySelector("[data-desktop-shell]")?.classList.remove("is-fullpage");
      setPreviewOpen(open);
      return;
    }
    if (kind === "send") {
      const composer = desktopShowcase.querySelector(".vx-composer");
      composer?.classList.add("is-sent");
      window.setTimeout(() => composer?.classList.remove("is-sent"), 700);
      // The send button is decorative; the replay owns the timeline flow.
      return;
    }
    if (kind === "expand") {
      desktopShowcase.querySelector(".vx-composer")?.classList.toggle("is-expanded");
      return;
    }
    if (kind === "pair") {
      action.classList.add("is-pairing");
      window.setTimeout(() => action.classList.remove("is-pairing"), 1200);
      return;
    }
  });
  action.addEventListener("click", markShowcaseInteraction);
});

// Toggles are delegated because the replay rebuilds the timeline DOM.
desktopShowcase?.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-desktop-toggle]");
  if (!toggle) return;
  const expanded = toggle.getAttribute("aria-expanded") !== "false";
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.classList.toggle("is-collapsed", expanded);
  const target = toggle.dataset.desktopToggle;
  if (target === "turn") {
    toggle.closest(".vx-turn")?.querySelector("[data-turn-body]")?.classList.toggle("is-collapsed", expanded);
  }
  if (target === "tool") {
    toggle.closest(".vx-command-card")?.querySelector("[data-command-output]")?.classList.toggle("is-collapsed", expanded);
  }
  markShowcaseInteraction();
});

// ---------------------------------------------------------------------------
// Home composer keeps its typing loop; the session timeline is driven by a
// replay engine that mirrors the app's typed event log: edit → send →
// thinking → tool calls → permission → form → file edits → answer, with the
// status strip reporting live generation metrics.
// ---------------------------------------------------------------------------
const homeTypedNodes = [
  ...(desktopShowcase?.querySelectorAll('[data-desktop-panel="home"] [data-typed-text]') ?? []),
];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const typingPhrases = [
  "Tighten the worktree merge handoff",
  "Add regression coverage for timeline replays",
  "Type / for commands, @ for workspace files, $ for skills",
];
let typingIndex = 0;
let charIndex = 0;
let deleting = false;

function tickTyping() {
  if (homeTypedNodes.length === 0) return;
  const phrase = typingPhrases[typingIndex];
  const apply = (text) => homeTypedNodes.forEach((node) => { node.textContent = text; });
  if (!deleting) {
    charIndex += 1;
    apply(phrase.slice(0, charIndex));
    if (charIndex >= phrase.length) {
      deleting = true;
      window.setTimeout(tickTyping, 2600);
      return;
    }
  } else {
    charIndex -= 1;
    apply(phrase.slice(0, charIndex));
    if (charIndex <= 0) {
      deleting = false;
      typingIndex = (typingIndex + 1) % typingPhrases.length;
      window.setTimeout(tickTyping, 700);
      return;
    }
  }
  window.setTimeout(tickTyping, deleting ? 22 : 52);
}

if (!prefersReducedMotion) {
  window.setTimeout(tickTyping, 1200);
}

// --- Session timeline replay -------------------------------------------------

const REPLAY_SCRIPT = {
  oldMessage: "Trace the runtime handoff for worktree merges.",
  message:
    "Trace the runtime handoff for worktree merges and tighten the timeline rendering.",
  reasoningPreview: "Trace where worktree merges hand off between the runtime and the UI.",
  reasoningFull:
    "Trace where worktree merges hand off between the runtime and the UI. The merge path lives in WorktreeBridge: requests are queued on the runtime side, then the timeline consumes typed events from the session log. Check the backfill ordering first, then the replay path.",
  answer:
    "The merge handoff now runs through a single WorktreeBridge path, and the timeline renders each turn from a typed event log so replays stay deterministic.",
  command: "cargo test -p vibex worktree",
};

const timelineEl = desktopShowcase?.querySelector("[data-timeline]");
const statusStrip = desktopShowcase?.querySelector("[data-status-strip]");
const agentTypedNode = desktopShowcase?.querySelector('[data-desktop-panel="agent"] [data-typed-text]');
const agentComposer = desktopShowcase?.querySelector('[data-desktop-panel="agent"] .vx-composer');

let replayGeneration = 0;
const replay = { timers: [], clock: null, running: false, refs: null, metrics: null };

function replayStop() {
  replay.timers.forEach((id) => window.clearTimeout(id));
  replay.timers = [];
  if (replay.clock) {
    window.clearInterval(replay.clock);
    replay.clock = null;
  }
  replay.running = false;
}

function replayAfter(ms, fn) {
  replay.timers.push(window.setTimeout(fn, ms));
}

function replaySleep(ms) {
  return new Promise((resolve) => {
    replay.timers.push(window.setTimeout(resolve, ms));
  });
}

function fmtClock(ms) {
  const total = Math.max(1, Math.round(ms / 1000));
  const minutes = Math.floor(total / 60);
  return minutes > 0 ? `${minutes}m ${total % 60}s` : `${total}s`;
}

function fmtTokens(value) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}m`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}k`;
  return String(Math.round(value));
}

function typeInto(node, text, duration, alive = () => true) {
  return new Promise((resolve) => {
    const start = performance.now();
    const step = () => {
      if (!alive()) {
        resolve();
        return;
      }
      const progress = Math.min(1, (performance.now() - start) / duration);
      const value = text.slice(0, Math.round(text.length * progress));
      if (typeof node.value === "string") node.value = value;
      else node.textContent = value;
      if (progress < 1) window.requestAnimationFrame(step);
      else resolve();
    };
    window.requestAnimationFrame(step);
  });
}

function blockHtml(kind, args) {
  switch (kind) {
    case "user-actions":
      return `
        <div class="vx-user-actions">
          <span>12:41</span>
          <button class="vx-user-action" type="button"><i data-lucide="copy"></i><span>Copy</span></button>
          <button class="vx-user-action" type="button" data-r="edit"><i data-lucide="pencil"></i><span>Edit</span></button>
        </div>`;
    case "editor":
      return `
        <div class="vx-user-editor">
          <textarea rows="2" spellcheck="false"></textarea>
          <div class="vx-permission-actions">
            <button class="vx-btn is-outline" type="button">Discard</button>
            <button class="vx-btn is-primary" type="button"><i data-lucide="check"></i>Save</button>
          </div>
        </div>`;
    case "reasoning": {
      const [preview, full, streaming] = args;
      return `
        <div class="vx-reasoning${streaming ? " is-streaming" : ""}" data-r="reason" data-preview="${preview}" data-full="${full}">
          <span class="vx-reasoning-body">${preview}</span>
          ${streaming ? "" : '<i data-lucide="chevron-right"></i>'}
        </div>`;
    }
    case "activity": {
      const [icon, text] = args;
      return `<div class="vx-activity-line"><i data-lucide="${icon}"></i><span>${text}</span></div>`;
    }
    case "command": {
      const [badge] = args;
      return `
        <div class="vx-command-card">
          <button class="vx-command-head" type="button" data-desktop-toggle="tool" aria-expanded="true">
            <i data-lucide="square-terminal"></i>
            <code>${REPLAY_SCRIPT.command}</code>
            <i class="vx-caret" data-lucide="chevron-down"></i>
            <span class="vx-badge is-running" data-r="badge">${badge}</span>
          </button>
        </div>`;
    }
    case "command-output":
      return `
        <div class="vx-command-output" data-command-output>
          <div class="vx-detail-row"><span>Working directory</span><code>/workspace/vibex</code></div>
          <div class="vx-detail-box">$ ${REPLAY_SCRIPT.command}</div>
          <div class="vx-detail-block">
            <span class="vx-detail-label">Output</span>
            <div class="vx-detail-box is-log">
              <div>running 35 tests</div>
              <div><span class="is-pass">test</span> worktree::merge_backfill ... ok</div>
              <div><span class="is-pass">test</span> worktree::runtime_handoff ... ok</div>
              <div class="is-dim">test result: ok. 35 passed; 0 failed; finished in 8.42s</div>
            </div>
          </div>
          <div class="vx-detail-exit is-pass">Exit code: 0</div>
        </div>`;
    case "permission":
      return `
        <div class="vx-permission-card" data-r="permission">
          <div class="vx-permission-head">
            <i data-lucide="shield-alert"></i>
            <span class="vx-permission-title">Command execution</span>
            <span class="vx-permission-status">Waiting for confirmation</span>
          </div>
          <div class="vx-permission-body">
            <span>Confirm whether the Agent may run this command.</span>
            <code>${REPLAY_SCRIPT.command}</code>
            <div class="vx-permission-actions">
              <button class="vx-btn is-outline" type="button">Always allow for session</button>
              <button class="vx-btn is-danger" type="button"><i data-lucide="x"></i>Deny</button>
              <button class="vx-btn is-primary" type="button"><i data-lucide="check"></i>Approve</button>
            </div>
          </div>
        </div>`;
    case "form":
      return `
        <div class="vx-form-card" data-r="form">
          <div class="vx-form-title"><i data-lucide="info"></i><span>Worktree settings</span></div>
          <div class="vx-form-fields">
            <div class="vx-form-field">
              <label>Merge strategy <em>*</em></label>
              <div class="vx-form-choices">
                <button class="vx-form-choice" type="button"><i data-lucide="check"></i>Rebase</button>
                <button class="vx-form-choice" type="button">Squash</button>
              </div>
            </div>
            <div class="vx-form-field">
              <label>Summary <em>*</em></label>
              <div class="vx-form-input">Worktree merge handoff — typed event log</div>
            </div>
          </div>
          <div class="vx-form-actions">
            <button class="vx-btn is-outline" type="button"><i data-lucide="x"></i>Decline</button>
            <button class="vx-btn is-primary" type="button" data-r="form-submit"><i data-lucide="check"></i>Submit</button>
          </div>
        </div>`;
    case "fileop":
      return `
        <div class="vx-fileop-card">
          <i data-lucide="file-text"></i>
          <strong>Editing timeline.rs</strong>
          <i class="vx-caret" data-lucide="chevron-down"></i>
          <span class="vx-diff-del">-31</span>
          <span class="vx-diff-add">+86</span>
          <span class="vx-fileop-open"><i data-lucide="folder-open"></i></span>
        </div>`;
    case "answer":
      return `
        <div class="vx-answer" data-r="answer">
          <p data-r="answer-text"></p>
          <div class="vx-answer-foot" hidden>
            <span class="vx-answer-meta">
              <img src="/assets/agents/openai-light.svg" alt="" />
              <span>Agent account · gpt-5.1-codex</span>
              <i data-lucide="clock-3"></i>
              <span data-r="answer-time">16s</span>
            </span>
            <span class="vx-answer-actions">
              <span><i data-lucide="copy"></i></span>
              <span><i data-lucide="arrow-up-to-line"></i></span>
              <span><i data-lucide="git-branch"></i></span>
            </span>
          </div>
        </div>`;
    default:
      return "";
  }
}

function renderStrip() {
  const m = replay.metrics;
  if (!statusStrip || !m) return;
  const query = (selector) => statusStrip.querySelector(selector);
  query("[data-strip-phase]").textContent = m.phase;
  query("[data-elapsed]").textContent = fmtClock(Date.now() - m.start);
  const tools = query("[data-strip-tools]");
  tools.textContent = `${m.tools} tool call${m.tools === 1 ? "" : "s"}`;
  query('[data-seg="tools"]').hidden = m.tools === 0;
  query("[data-strip-add]").textContent = `+${m.add}`;
  query("[data-strip-del]").textContent = `-${m.del}`;
  query('[data-seg="diff"]').hidden = m.add === 0 && m.del === 0;
  query("[data-strip-input-n]").textContent = fmtTokens(m.inTok);
  query('[data-seg="input"]').hidden = m.inTok < 1;
  query("[data-strip-output-n]").textContent = fmtTokens(m.outTok);
  query('[data-seg="output"]').hidden = m.outTok < 1;
  query("[data-strip-cache]").textContent = `${Math.round(m.cache)}%`;
  query('[data-seg="cache"]').hidden = !m.cacheShown;
  query("[data-strip-rate]").textContent = `${m.tps.toFixed(1)} t/s`;
  query('[data-seg="rate"]').hidden = !m.generating;
}

function scrollTimeline() {
  if (timelineEl) timelineEl.scrollTop = timelineEl.scrollHeight;
}

function replayStartTicker() {
  replay.clock = window.setInterval(() => {
    const m = replay.metrics;
    if (!m || statusStrip.classList.contains("is-idle")) return;
    const label = fmtClock(Date.now() - m.start);
    if (m.timeEl) m.timeEl.textContent = `Worked for ${label}`;
    const elapsedEl = statusStrip.querySelector("[data-elapsed]");
    if (elapsedEl) elapsedEl.textContent = label;
    if (m.phase !== "Generating" && m.phase !== "Finalizing") {
      m.inTok = Math.min(12300, m.inTok + (12300 - m.inTok) * 0.08 + 40 + Math.random() * 80);
      m.outTok = Math.min(1400, m.outTok + (900 - m.outTok) * 0.05 + 20 + Math.random() * 40);
    }
    if (m.generating) {
      m.outTok += (4500 - m.outTok) * 0.09 + 60 + Math.random() * 90;
      m.tps = Math.min(86.9, m.tps + 2.2 + Math.random() * 1.6);
      m.cache += (38 - m.cache) * 0.06;
    }
    renderStrip();
  }, 450);
}

async function runReplay(gen) {
  const alive = () => gen === replayGeneration;
  const { processSlot, userSlot, turnSlot, changesSlot } = replay.refs;
  const m = replay.metrics;
  const append = (html) => {
    processSlot.insertAdjacentHTML("beforeend", html);
    processSlot.lastElementChild?.classList.add("vx-reveal");
    renderIcons();
    scrollTimeline();
  };

  // Edit the previous prompt in place, then send it.
  userSlot.classList.add("is-editing");
  await replaySleep(800); if (!alive()) return;
  userSlot.querySelector(".vx-user-bubble").outerHTML = blockHtml("editor");
  renderIcons();
  const area = userSlot.querySelector("textarea");
  typeInto(area, REPLAY_SCRIPT.message, 1500, alive);
  await replaySleep(1900); if (!alive()) return;
  userSlot.classList.remove("is-editing");
  userSlot.innerHTML = `<div class="vx-user-bubble">${REPLAY_SCRIPT.message}</div>`;
  agentComposer?.classList.add("is-sent");
  replayAfter(700, () => agentComposer?.classList.remove("is-sent"));
  if (agentTypedNode) agentTypedNode.textContent = "";
  turnSlot.hidden = false;
  turnSlot.classList.add("vx-reveal");
  statusStrip.classList.remove("is-idle");
  m.start = Date.now();
  renderStrip();
  scrollTimeline();

  // Thinking: reasoning streams with the app's shimmer label.
  m.phase = "Thinking"; renderStrip();
  await replaySleep(500); if (!alive()) return;
  append(blockHtml("reasoning", [REPLAY_SCRIPT.reasoningPreview, REPLAY_SCRIPT.reasoningFull, true]));
  await replaySleep(2600); if (!alive()) return;

  // Tool activity lines.
  m.phase = "Calling tool"; m.tools = 1; renderStrip();
  append(blockHtml("activity", ["search", "Searching workspace files · worktree merge handoff"]));
  await replaySleep(800); if (!alive()) return;
  m.tools = 2; renderStrip();
  append(blockHtml("activity", ["file-code", "Reading src/workbench/worktree.rs"]));
  await replaySleep(900); if (!alive()) return;

  // Command runs, but first waits for approval like the app's linked
  // command/permission card pair.
  m.tools = 3; m.phase = "Waiting for approval"; renderStrip();
  append(blockHtml("command", ["Waiting for confirmation"]));
  append(blockHtml("permission"));
  await replaySleep(2200); if (!alive()) return;
  const permission = processSlot.querySelector('[data-r="permission"]');
  permission.classList.add("is-approved");
  permission.querySelector(".vx-permission-status").textContent = "Approved";
  permission.querySelector(".vx-permission-actions")?.remove();
  m.phase = "Calling tool"; renderStrip();
  await replaySleep(600); if (!alive()) return;

  const commandCard = processSlot.querySelector(".vx-command-card");
  const badge = commandCard.querySelector('[data-r="badge"]');
  badge.textContent = "Running";
  commandCard.insertAdjacentHTML("beforeend", blockHtml("command-output"));
  renderIcons();
  scrollTimeline();
  m.cacheShown = true; renderStrip();
  await replaySleep(1800); if (!alive()) return;
  badge.textContent = "Completed";
  badge.classList.remove("is-running");
  await replaySleep(500); if (!alive()) return;

  // File edit lands; the strip diff starts counting.
  m.tools = 4; m.add = 86; m.del = 31; renderStrip();
  append(blockHtml("fileop"));
  await replaySleep(1200); if (!alive()) return;

  // Settle the reasoning preview, then the form card is filled and submitted.
  const reason = processSlot.querySelector('[data-r="reason"]');
  reason.classList.remove("is-streaming");
  reason.insertAdjacentHTML("beforeend", '<i data-lucide="chevron-right"></i>');
  renderIcons();
  append(blockHtml("form"));
  await replaySleep(1300); if (!alive()) return;
  processSlot.querySelector('[data-r="form"] .vx-form-choice')?.classList.add("is-selected");
  await replaySleep(900); if (!alive()) return;
  processSlot.querySelector('[data-r="form"]').outerHTML = blockHtml("activity", ["check", "Worktree settings · Resolved"]);
  renderIcons();
  scrollTimeline();

  // Answer streams in, then metadata and the changes card. This maps to the
  // app's Generating phase: t/s climbs and output tokens accumulate.
  m.phase = "Generating"; m.generating = true; renderStrip();
  append(blockHtml("answer"));
  const answerText = processSlot.querySelector('[data-r="answer-text"]');
  await typeInto(answerText, REPLAY_SCRIPT.answer, 2700, alive);
  if (!alive()) return;
  answerText.innerHTML = REPLAY_SCRIPT.answer.replace("WorktreeBridge", "<code>WorktreeBridge</code>");
  const foot = processSlot.querySelector('[data-r="answer"] .vx-answer-foot');
  foot.hidden = false;
  processSlot.querySelector('[data-r="answer-time"]').textContent = fmtClock(Date.now() - m.start);
  scrollTimeline();
  await replaySleep(500); if (!alive()) return;
  changesSlot.hidden = false;
  changesSlot.classList.add("vx-reveal");
  scrollTimeline();
  const rows = [...changesSlot.querySelectorAll(".vx-changes-row")];
  for (const row of rows) {
    row.hidden = false;
    scrollTimeline();
    await replaySleep(380); if (!alive()) return;
  }

  // Turn complete — the app drops the status strip once nothing is running.
  m.inTok = 12300; m.outTok = 4500; m.cache = 38; m.generating = false; renderStrip();
  if (replay.refs.timeEl) replay.refs.timeEl.textContent = `Worked for ${fmtClock(Date.now() - m.start)}`;
  processSlot.querySelector('[data-r="answer-time"]').textContent = fmtClock(Date.now() - m.start);
  await replaySleep(700); if (!alive()) return;
  statusStrip.classList.add("is-idle");
  replayStop();
}

function buildFinalState() {
  const { processSlot, userSlot, turnSlot, changesSlot } = replay.refs;
  userSlot.innerHTML = `<div class="vx-user-bubble">${REPLAY_SCRIPT.message}</div>`;
  turnSlot.hidden = false;
  processSlot.insertAdjacentHTML("beforeend", blockHtml("reasoning", [REPLAY_SCRIPT.reasoningPreview, REPLAY_SCRIPT.reasoningFull, false]));
  processSlot.insertAdjacentHTML("beforeend", blockHtml("activity", ["search", "Searching workspace files · worktree merge handoff"]));
  processSlot.insertAdjacentHTML("beforeend", blockHtml("activity", ["file-code", "Reading src/workbench/worktree.rs"]));
  processSlot.insertAdjacentHTML("beforeend", blockHtml("command", ["Completed"]));
  processSlot.insertAdjacentHTML("beforeend", blockHtml("command-output"));
  processSlot.insertAdjacentHTML("beforeend", blockHtml("permission"));
  const permission = processSlot.querySelector('[data-r="permission"]');
  permission.classList.add("is-approved");
  permission.querySelector(".vx-permission-status").textContent = "Approved";
  permission.querySelector(".vx-permission-actions")?.remove();
  processSlot.insertAdjacentHTML("beforeend", blockHtml("activity", ["check", "Worktree settings · Resolved"]));
  processSlot.insertAdjacentHTML("beforeend", blockHtml("fileop"));
  processSlot.insertAdjacentHTML("beforeend", blockHtml("answer"));
  const answerText = processSlot.querySelector('[data-r="answer-text"]');
  answerText.innerHTML = REPLAY_SCRIPT.answer.replace("WorktreeBridge", "<code>WorktreeBridge</code>");
  processSlot.querySelector('[data-r="answer"] .vx-answer-foot').hidden = false;
  changesSlot.hidden = false;
  changesSlot.querySelectorAll(".vx-changes-row").forEach((row) => { row.hidden = false; });
  renderIcons();
  statusStrip.classList.add("is-idle");
}

function startTimelineReplay() {
  if (!timelineEl) return;
  replayGeneration += 1;
  const gen = replayGeneration;
  replayStop();

  const userSlot = timelineEl.querySelector('[data-replay-slot="user"]');
  const turnSlot = timelineEl.querySelector('[data-replay-slot="turn"]');
  const processSlot = timelineEl.querySelector('[data-replay-slot="process"]');
  const changesSlot = timelineEl.querySelector('[data-replay-slot="changes"]');
  const timeEl = timelineEl.querySelector('[data-r="time"]');

  userSlot.innerHTML = `
    <div class="vx-user-bubble">${REPLAY_SCRIPT.oldMessage}</div>
    ${blockHtml("user-actions")}`;
  turnSlot.hidden = true;
  turnSlot.classList.remove("vx-reveal");
  processSlot.innerHTML = "";
  changesSlot.hidden = true;
  changesSlot.classList.remove("vx-reveal");
  changesSlot.querySelectorAll(".vx-changes-row").forEach((row) => { row.hidden = true; });
  if (agentTypedNode) agentTypedNode.textContent = "";
  agentComposer?.classList.remove("is-sent", "is-expanded");

  replay.refs = { userSlot, turnSlot, processSlot, changesSlot, timeEl };
  replay.metrics = {
    phase: "Preparing",
    tools: 0,
    add: 0,
    del: 0,
    inTok: 0,
    outTok: 0,
    cache: 12,
    cacheShown: false,
    tps: 58,
    generating: false,
    start: Date.now(),
    timeEl,
  };
  renderStrip();
  timelineEl.classList.add("is-scrollable");
  timelineEl.scrollTop = 0;

  if (prefersReducedMotion) {
    buildFinalState();
    return;
  }

  replay.running = true;
  replayStartTicker();
  runReplay(gen);
}

// Reasoning rows expand to their full text on click, like the app's
// expandable thinking stream.
timelineEl?.addEventListener("click", (event) => {
  const reason = event.target.closest('[data-r="reason"]');
  if (!reason || reason.classList.contains("is-streaming")) return;
  const body = reason.querySelector(".vx-reasoning-body");
  const open = reason.classList.toggle("is-open");
  body.textContent = open ? reason.dataset.full : reason.dataset.preview;
});

// Auto-rotate showcase scenes like a product demo reel; pauses while hovered
// or shortly after any manual interaction.
let rotateTimer = null;
let lastInteraction = 0;

function markShowcaseInteraction() {
  lastInteraction = Date.now();
}

function startShowcaseRotation() {
  if (!desktopShowcase || prefersReducedMotion || rotateTimer) return;
  rotateTimer = window.setInterval(() => {
    // Don't yank the user away mid-replay: the session flow takes ~18s.
    if (replay.running) return;
    if (desktopShowcase.matches(":hover") || Date.now() - lastInteraction < 12000) return;
    const active = desktopShowcase.querySelector("[data-desktop-view].is-active")?.dataset.desktopView ?? "agent";
    const next = DESKTOP_VIEWS[(DESKTOP_VIEWS.indexOf(active) + 1) % DESKTOP_VIEWS.length];
    setDesktopView(next);
  }, 8000);
}

startShowcaseRotation();

// The agent workbench is the default view: kick off the first session replay.
startTimelineReplay();

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

const phoneClock = document.querySelector("[data-phone-time]");
function updatePhoneClock() {
  if (!phoneClock) return;
  const now = new Date();
  phoneClock.textContent = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
}
updatePhoneClock();
window.setInterval(updatePhoneClock, 30_000);

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
