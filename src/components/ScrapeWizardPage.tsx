

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Github, Package, Shield, ShieldCheck, Zap, Brain, Repeat, Plug,
  Eraser, FileJson, ListOrdered, Lock, AlertTriangle, Terminal, Cpu, Gauge,
  Globe, ArrowRight, CheckCircle2, MonitorPlay, Code2, Layers, SearchCode, Database
} from 'lucide-react';

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="section-label mb-3">{children}</div>
);

const CodeBlock: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="rounded-2xl border border-border bg-background/80 overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/30 text-xs font-mono text-muted-foreground">
      <Terminal size={14} className="text-primary" /> {label}
    </div>
    <pre className="p-4 md:p-5 overflow-x-auto text-xs md:text-[13px] leading-relaxed text-muted-foreground font-mono">{children}</pre>
  </div>
);

const ScrapeWizardPage: React.FC = () => {
  const navigate = useNavigate();
  const REPO = 'https://github.com/pras-ops/ScrapeWizard';

  const features = [
    { icon: MonitorPlay, title: 'ScrapeWizard Studio', body: 'A premium, local-first web dashboard built with FastAPI and React to monitor execution queues, visualize run histories step-by-step, and review accessibility violations.' },
    { icon: Layers, title: 'Multi-Tier Offline Self-Healing', body: 'Locate mutated elements automatically using 5 deterministic similarity tiers (attributes, structure, geometry) with zero LLM/API calls, saving time and costs.' },
    { icon: Gauge, title: 'High-Fidelity Flow Recorder', body: 'Launches an interactive headed browser to capture user interactions, multi-page flows, and element fingerprints while automatically masking passwords.' },
    { icon: ShieldCheck, title: 'Isolated Sandbox Quality Checks', body: 'Execute flows in clean Playwright contexts to automatically collect visual screen diffs, console warnings, network error signals, and accessibility violations.' },
    { icon: FileJson, title: 'Zero Lock-in Pytest Export', body: 'Export flows directly to standalone Python scripts. The generated files are completely independent and run in any standard CI environment.' },
    { icon: Lock, title: 'Keyring Security', body: 'Securely stores LLM provider API keys (OpenAI, Anthropic, OpenRouter, and Ollama) using the native system keyring.' },
  ];

  const stack = ['Python', 'FastAPI', 'Playwright', 'React', 'Pytest', 'Axe-Core'];

  const installSnippet =
`# 1. Install ScrapeWizard and its dependencies
pip install scrapewizard

# 2. Install Playwright browser engines
playwright install chromium

# Note: On Linux/CI systems, you may also need:
playwright install-deps`;

  const runSnippet =
`# 1. Record an interaction flow interactively
scrapewizard record --url "https://books.toscrape.com" --output login_flow.json

# 2. Run Quality Checks & Sandbox headless
scrapewizard test login_flow.json

# 3. Launch the Web Studio Dashboard locally
scrapewizard start --port 8000`;

  return (
    <div className="min-h-screen grain bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border nav-glass">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="press inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} /> Back to portfolio
          </button>
          <div className="flex items-center gap-2">
            <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-colors">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{ background: 'radial-gradient(60% 60% at 50% 0%, color-mix(in oklch, var(--primary) 16%, transparent), transparent 70%)' }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            <SectionLabel>AI-Powered CLI · Web Scraping · E2E Testing</SectionLabel>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
                <Brain size={28} className="text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                ScrapeWizard
              </h1>
            </div>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              An AI-powered CLI that analyzes websites and generates real Playwright web scrapers with <span className="text-foreground">built-in data quality checks</span>. It offers two core products in one engine: a <span className="text-foreground">Scraper Studio</span> for building data pipelines, and a <span className="text-foreground">UI/UX Test Automation</span> suite that auto-checks for accessibility, visual regressions, and network failures.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground">{s}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                <Github size={18} /> Source Code
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-20">

          {/* Dual products */}
          <section>
            <SectionLabel>Core Use Cases</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Two Products, One Unified Engine</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="text-primary" size={18} />
                  <h3 className="text-lg font-bold">Product A: Scraper Studio</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build high-performance data pipelines that export target pages to <span className="text-foreground">CSV, Excel (XLSX), or JSON</span> with zero-click configuration.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MonitorPlay className="text-primary" size={18} />
                  <h3 className="text-lg font-bold">Product B: UI/UX Test Automation</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Record workflows once to generate standard Playwright + pytest suites. Run them headless in CI with checks for <span className="text-foreground">a11y, visual regressions, console, and network errors</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Key features */}
          <section>
            <SectionLabel>Key features</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Intelligent automation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-border bg-card/40 p-6">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Self-Healing Hierarchy */}
          <section>
            <SectionLabel>Self-Healing Engine</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The 6-Tier Self-Healing Hierarchy</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              When a web element mutates (e.g., classes renamed, layout shifted, attributes altered), the ScrapeWizard engine steps through a deterministic hierarchy to re-identify the element <span className="text-foreground">offline</span> before resorting to LLM calls:
            </p>
            
            <div className="space-y-3">
              {[
                { tier: 'Tier 0', name: 'Direct Match', desc: 'Evaluates the primary recorded selector.' },
                { tier: 'Tier 1', name: 'Selector Ladder', desc: 'Tries fallback CSS selectors recorded during fingerprinting.' },
                { tier: 'Tier 2', name: 'Attribute & Text Score', desc: 'Computes similarity score of attribute overlap and normalized inner text.' },
                { tier: 'Tier 3', name: 'Structural Matching', desc: 'Evaluates parent/sibling tag relationships and sibling offsets.' },
                { tier: 'Tier 4', name: 'Geometry & Visuals', desc: 'Compares relative viewport coordinates (x/y percentages) and dimensions.' },
                { tier: 'Tier 5', name: 'History & Navigation', desc: 'Checks past successful element resolutions from historical runs.' },
                { tier: 'Tier 6', name: 'LLM Recovery', desc: 'Opt-in API call if all offline tiers fail. Verifies proposed selector by re-running.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-secondary/20">
                  <div className="font-mono text-primary text-sm font-bold min-w-[60px]">{item.tier}</div>
                  <div>
                    <div className="font-bold text-sm mb-1">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick start */}
          <section>
            <SectionLabel>Quick start</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Get up and running</h2>
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Installation & Setup</p>
                <CodeBlock label="terminal">{installSnippet}</CodeBlock>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Record, Test, and Launch</p>
                <CodeBlock label="terminal">{runSnippet}</CodeBlock>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-border bg-card/30 p-8 md:p-12 text-center">
            <SearchCode size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Build resilient scrapers and tests today</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Generate real Playwright scripts directly from browser interactions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Github size={18} /> View on GitHub
              </a>
              <button onClick={() => navigate('/')} className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                More projects <ArrowRight size={18} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ScrapeWizardPage;
