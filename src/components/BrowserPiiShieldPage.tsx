"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Github, Package, Shield, ShieldCheck, Zap, Brain, Repeat, Plug,
  Eraser, FileJson, ListOrdered, Lock, AlertTriangle, Terminal, Cpu, Gauge,
  Globe, ArrowRight, CheckCircle2
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

const BrowserPiiShieldPage: React.FC = () => {
  const navigate = useNavigate();
  const REPO = 'https://github.com/pras-ops/Local_processing_llm';
  const NPM = 'https://www.npmjs.com/package/browser-pii-shield';

  const features = [
    { icon: Shield, title: 'Privacy-first, zero-leakage', body: 'Cleaning, redaction and restoration run in browser memory via WebGPU. No server-side logs, nothing leaves the device.' },
    { icon: Zap, title: 'Hybrid redaction tiers', body: 'Tier 1 instant regex (emails, phones, SSNs, cards w/ Luhn, IPs, API keys — 0 deps); Tier 2 a local 1B WebLLM model for NER (names, addresses, orgs).' },
    { icon: Repeat, title: 'Reversible mapping', body: 'Maps sensitive data to placeholders like {{EMAIL_1}} and restores them locally — preserving entity identity across a conversation.' },
    { icon: Plug, title: 'One-line fetch proxy', body: 'A drop-in fetch wrapper auto-redacts outgoing prompts and reconstructs originals on incoming JSON/text streams.' },
    { icon: Eraser, title: 'Robust text cleaning', body: 'Strip HTML, URLs, whitespace and line breaks with rules — or run the local LLM for instruction-driven semantic cleanup.' },
    { icon: FileJson, title: 'Structured extraction', body: 'Pull JSON fields with local LLMs, validated by deterministic regex guards to eliminate hallucinations (strict mode throws on mismatch).' },
  ];

  const perfRows = [
    { size: '10 KB', clean: '< 1ms', chunk: '< 1ms', redact: '~1ms' },
    { size: '1 MB', clean: '~4ms', chunk: '< 1ms', redact: '~15ms' },
    { size: '5 MB', clean: '~25ms', chunk: '< 1ms', redact: '~67ms' },
  ];

  const browsers = ['Chrome 113+', 'Edge 113+', 'Safari', 'Firefox'];
  const stack = ['JavaScript', 'WebGPU', 'WebLLM', 'Llama-3.2-1B', 'NPM SDK', 'MIT'];
  const compliance = ['HIPAA', 'GDPR', 'SOC2'];
  const providers = ['OpenAI', 'Anthropic', 'Groq', 'Cohere', 'OpenRouter'];

  const redactSnippet =
`import { Preprocessor } from 'browser-pii-shield';

const pre = new Preprocessor();

const raw = "Hi John, email john.doe@acme.org, card 4111-1111-1111-1111.";
const { redacted, map } = await pre.redact(raw);

// redacted → "Hi John, email {{EMAIL_1}}, card {{CREDIT_CARD_1}}."
// ...send the redacted prompt to any cloud LLM safely...

const restored = pre.restore(cloudResponse, map);
// restored → original values, reconstructed locally`;

  const fetchSnippet =
`import { Preprocessor, createShieldedFetch } from 'browser-pii-shield';

// Drop-in: outgoing prompts auto-redacted, streams auto-restored
globalThis.fetch = createShieldedFetch(new Preprocessor());

await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  body: JSON.stringify({
    messages: [{ role: 'user', content: 'Draft an invoice for john.doe@acme.org' }],
  }),
});`;

  return (
    <div className="min-h-screen grain bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border nav-glass">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="press inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} /> Back to portfolio
          </button>
          <div className="flex items-center gap-2">
            <a href={NPM} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-colors">
              <Package size={16} /> npm
            </a>
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
            <SectionLabel>Privacy SDK · Client-side · MIT</SectionLabel>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
                <Shield size={28} className="text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Browser PII Shield
              </h1>
            </div>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              A privacy-first JavaScript SDK that cleans, chunks and <span className="text-foreground">redacts sensitive
              personal data client-side</span> before prompts reach external cloud LLMs — then safely restores the
              original values locally in the model's response. Sensitive data <span className="text-foreground">never leaves
              the device</span>, so you keep cloud-LLM power without breaking HIPAA / GDPR / SOC2.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {compliance.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                  <ShieldCheck size={13} /> {c}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground">{s}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={NPM} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                <Package size={18} /> npm install browser-pii-shield
              </a>
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                <Github size={18} /> Source
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-20">

          {/* How it works — redact → restore visual */}
          <section>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Redact on the way out, restore on the way back</h2>
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="rounded-2xl border border-border bg-card/40 p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 mb-3">
                  <Lock size={13} /> on your device
                </div>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                  Hi John, my email is <span className="text-foreground">john.doe@acme.org</span>, card <span className="text-foreground">4111-1111-1111-1111</span>.
                </p>
              </div>
              <div className="flex lg:flex-col items-center justify-center gap-1 text-primary">
                <ShieldCheck size={22} />
                <ArrowRight size={20} className="lg:rotate-90" />
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-primary mb-3">
                  <Globe size={13} /> sent to the cloud LLM
                </div>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                  Hi John, my email is <span className="text-primary">{'{{EMAIL_1}}'}</span>, card <span className="text-primary">{'{{CREDIT_CARD_1}}'}</span>.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl leading-relaxed">
              The reversible map stays local. When the response comes back referencing <span className="font-mono text-primary">{'{{EMAIL_1}}'}</span>,
              <code className="text-foreground"> restore()</code> swaps the real value back in — the provider never saw it.
            </p>
          </section>

          {/* Key features */}
          <section>
            <SectionLabel>Key features</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Everything stays on the client</h2>
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

          {/* Redaction tiers */}
          <section>
            <SectionLabel>Redaction tiers</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Fast by default, smart when needed</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={18} className="text-primary" />
                  <h3 className="text-lg font-bold">Tier 1 — Instant rules</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Direct pattern matching with <span className="text-foreground">0 dependencies and no model download</span>.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Emails', 'Phone', 'SSN', 'Credit cards (Luhn)', 'IP', 'API keys'].map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-border">{t}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Brain size={18} className="text-primary" />
                  <h3 className="text-lg font-bold">Tier 2 — Local LLM NER</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  A local 1B WebLLM model performs semantic Named-Entity Recognition for the fuzzy stuff — entirely in-browser.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Names', 'Addresses', 'Organizations'].map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-border">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Quick start */}
          <section>
            <SectionLabel>Quick start</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Two ways in</h2>
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Reversible redaction — no model required.</p>
                <CodeBlock label="redact.js">{redactSnippet}</CodeBlock>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Drop-in shielded <code className="text-foreground font-mono">fetch</code> with streaming.</p>
                <CodeBlock label="proxy.js">{fetchSnippet}</CodeBlock>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="font-mono text-xs uppercase tracking-wider text-primary">Auto-intercepts</span>
              {providers.map((p) => (
                <span key={p} className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-border">{p}</span>
              ))}
            </div>
          </section>

          {/* Format-preserving warning */}
          <section>
            <div className="flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
              <AlertTriangle size={22} className="text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold mb-1">Format-preserving mode leaks structure</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  With <code className="text-foreground font-mono">formatPreserving</code> on, structural details — email domains
                  like <span className="font-mono">@acme.org</span> or IP subnets like <span className="font-mono">192.168.X.X</span> —
                  stay visible to the provider. Leave it off if domains or subnets are themselves sensitive for your org.
                </p>
              </div>
            </div>
          </section>

          {/* Performance */}
          <section>
            <SectionLabel>Performance</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Rules are effectively free</h2>
            <div className="overflow-x-auto rounded-2xl border border-border mb-6">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/40 text-left">
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Input size</th>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Clean (HTML+URLs)</th>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Chunk (1000 char)</th>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Redact (rules)</th>
                  </tr>
                </thead>
                <tbody>
                  {perfRows.map((r) => (
                    <tr key={r.size} className="border-b border-border/60 last:border-0">
                      <td className="px-5 py-4 text-foreground font-medium">{r.size}</td>
                      <td className="px-5 py-4 text-muted-foreground font-mono">{r.clean}</td>
                      <td className="px-5 py-4 text-muted-foreground font-mono">{r.chunk}</td>
                      <td className="px-5 py-4 text-muted-foreground font-mono">{r.redact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Cpu, label: 'Model cache load', value: '2–5 s' },
                { icon: Gauge, label: 'Inference', value: '~15–30 tok/s' },
                { icon: ListOrdered, label: 'VRAM', value: '1.5–3.5 GB' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card/30 p-5">
                  <s.icon size={18} className="text-primary mb-2" />
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label} · Llama-3.2-1B</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-border bg-card/30 p-5">
              <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cleaning noise and summarizing client-side can cut cloud token costs by <span className="text-foreground font-medium">up to 90–99%</span> —
                you transmit only the core insight.
              </p>
            </div>
          </section>

          {/* Browser requirements */}
          <section>
            <SectionLabel>Browser support</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Where the engines run</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="font-bold mb-2">Instant rules</h3>
                <p className="text-sm text-muted-foreground">All modern desktop &amp; mobile browsers.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="font-bold mb-3">LLM / WebGPU engines</h3>
                <div className="flex flex-wrap gap-2">
                  {browsers.map((b) => (
                    <span key={b} className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-border">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-border bg-card/30 p-8 md:p-12 text-center">
            <Shield size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ship cloud-LLM features without shipping the data</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              MIT-licensed, zero-dependency for the rules tier, and a one-line drop-in for the rest.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={NPM} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Package size={18} /> browser-pii-shield
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

export default BrowserPiiShieldPage;
