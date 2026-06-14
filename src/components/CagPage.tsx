"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Github, Layers, Database, Cpu, GitBranch, ShieldCheck, FlaskConical,
  CheckCircle2, AlertTriangle, XCircle, CircleDot, Sparkles, ArrowRight, Terminal
} from 'lucide-react';

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="section-label mb-3">{children}</div>
);

const fitTone: Record<string, string> = {
  Strongest: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
  Strong: 'text-primary bg-primary/10 border-primary/30',
  Avoid: 'text-red-300 bg-red-500/10 border-red-500/30',
};

const statusTone: Record<string, string> = {
  Adopted: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
  Rejected: 'text-red-300 bg-red-500/10 border-red-500/30',
  Optional: 'text-amber-200 bg-amber-500/10 border-amber-500/30',
};

const CagPage: React.FC = () => {
  const navigate = useNavigate();
  const REPO = 'https://github.com/pras-ops/rag-feedback-loop';

  const whereItFits = [
    { useCase: 'Coding agents (retrieve fix patterns / snippets)', fit: 'Strongest', why: 'Hard verifier (tests pass/fail) + controlled corpus → clean, objective feedback' },
    { useCase: 'Enterprise RAG over trusted docs', fit: 'Strong', why: 'Controlled source; the main enemy is staleness, handled by decay + behavioral signal' },
    { useCase: 'Internal tools / agents over controlled data', fit: 'Strong', why: 'Same logic — trusted source, recurring queries' },
    { useCase: 'Open web / public user-generated content', fit: 'Avoid', why: 'Adversarial + unverifiable feedback → the >50% identifiability wall' },
  ];

  const modules = [
    { mod: 'cag/store.py', resp: 'Candidate dataclass (α/β, A/B, fooled/verified, recent_outcomes) + in-memory CandidateStore' },
    { mod: 'cag/store_sqlite.py', resp: 'Persistent store: durable, lazy decay, atomic increments, pending retrieve↔feedback bridge, schema migration' },
    { mod: 'cag/retriever.py', resp: 'Hybrid retrieval (SentenceTransformer + custom BM25, RRF-fused), Thompson-sampling exploration, rarity bonus, ε-greedy, robust exploitation' },
    { mod: 'cag/feedback.py', resp: 'Outcome aggregation y, soft κ-weighted update, liar counter, robust estimators, optional ADT denoising' },
    { mod: 'cag/judge.py', resp: 'LLM faithfulness judge (Gemini) with a token-overlap fallback when offline' },
    { mod: 'cag/ingest.py', resp: 'Document chunking + embedding into candidates' },
    { mod: 'cag/api.py', resp: 'FastAPI service: POST /retrieve, POST /feedback, GET /health' },
  ];

  const robustness = [
    { m: 'Behavioral cap (positive s_behave ≤ 0.75)', s: 'Adopted', n: 'Asymmetric: trusts rejections fully, caps sycophantic "accepts"' },
    { m: 'Verifier anchor (gt_override)', s: 'Adopted', n: 'The one sycophancy-proof signal dominates when present' },
    { m: 'Liar counter (fooled/verified → trust_score)', s: 'Adopted', n: 'Detects "accepted-but-verifier-failed"; lowest collateral damage to good docs' },
    { m: 'Trimmed mean (drop top 30%)', s: 'Rejected', n: 'Strong on contaminated data but biased down on clean data — craters good docs' },
    { m: 'Median-of-Means', s: 'Rejected', n: 'Block-averaging pre-mixes uniform contamination → ≈ the plain mean' },
    { m: 'ADT loss-downweighting', s: 'Optional', n: 'Helps random noise; does not help sycophancy (the lie is low-loss)' },
  ];

  const validated = [
    'Persistence layer: durability across reconnect, lazy-decay math, atomic concurrent increments (8 threads × 200, zero lost updates), and the pending bridge.',
    'API atomic path: /feedback routes through store.increment(), not a Python read-modify-write.',
    'Robustness ablation (20-seed, mean±std): supports the liar counter, rejects trimmed-mean / MoM.',
    'End-to-end mechanism runs on a real corpus with a real Gemini judge.',
  ];

  const notValidated = [
    '"CAG beats a static retriever on real data" — UNPROVEN. The current Gate A harness is methodologically circular: it trains counters on the gold retrieval label and scores Recall@1 on that same label, so improvement is partly memorizing a signal that can\'t exist in production. Recall@2 (static 1.00 vs CAG 0.69) even shows exploration evicting correct chunks.',
    'Decay / freshness value-prop — UNPROVEN. γ = 1.0 (decay off) in every simulation so far; the staleness scenario that would justify it hasn\'t been run.',
    'Real-traffic behavior (degeneracy / popularity-bias amplification): exploration is implemented but not yet monitored.',
  ];

  const limitations = [
    'Not a truth detector — it tracks usefulness and freshness, not correctness.',
    'Verifier-bounded — robustness rises and falls with how often a verifier (s_gt) is available.',
    'The >50% wall — if a majority of feedback for an item is dishonest, no statistic on the feedback alone recovers truth.',
    'Exploration cost — improves discovery but can evict correct results from a small top-k.',
    'Not novel research — a clean implementation of established ideas (online learning-to-rank with bandit feedback, Beta-Bernoulli reliability, recsys denoising).',
  ];

  const nextSteps = [
    'Fix Gate A — decouple the train signal from the eval label, use a gold-answer metric (EM/F1), evaluate at top_k=1, run ≥10 seeds with CIs.',
    'Prove decay on a staleness scenario (γ < 1.0).',
    'Degeneracy monitoring (retrieval concentration / coverage) before any real deployment.',
    'Package as a pip-installable layer over an existing retriever interface.',
  ];

  const stack = ['Python 3.10+', 'FastAPI', 'Sentence-Transformers', 'SQLite', 'Thompson Sampling', 'RRF Hybrid', 'Gemini Judge'];

  const architecture =
`              ┌──────────────┐   text query    ┌──────────────────────────┐
  documents → │  ingest.py   │ ──────────────► │       retriever.py        │
              │ chunk+embed  │                 │  hybrid RRF (vec + BM25)  │
              └──────────────┘                 │  + Beta exploration       │
                                               │  + C_robust exploitation  │
                                               └────────────┬──────────────┘
                                                            │ top-k + credit r(i)
                        feedback (y)                        ▼
  ┌──────────────┐  ┌──────────────────┐         ┌────────────────────────┐
  │   judge.py   │─►│   feedback.py    │ ──────►  │  store.py / store_      │
  │ (faithfulness│  │ outcome y, κ,    │ counters│  sqlite.py (persistent, │
  │  + fallback) │  │ liar counter,    │ update  │  atomic, lazy decay,    │
  └──────────────┘  │ robust estimators│         │  pending bridge)        │
                    └──────────────────┘         └────────────────────────┘`;

  return (
    <div className="min-h-screen grain bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border nav-glass">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="press inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} /> Back to portfolio
          </button>
          <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-colors">
            <Github size={16} /> GitHub
          </a>
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
            <SectionLabel>Applied AI · Research · Experimental</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
              CAG
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-primary font-medium">
              A feedback-learning retrieval layer
            </p>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              CAG sits on top of a retrieval system and, over repeated use, learns which retrieved
              items actually produce good outcomes — boosting what helps and decaying what goes stale.
              It's built around per-document Beta counters updated from feedback signals (verifier,
              user behavior, LLM judge, thumbs), with explicit safeguards against noisy and sycophantic
              feedback.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                <Github size={18} /> View on GitHub
              </a>
              <button onClick={() => navigate('/')} className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                <ArrowLeft size={18} /> Back
              </button>
            </div>

            {/* Honesty banner */}
            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
              <FlaskConical size={20} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Research / experimental.</span> The
                persistence layer and the core mechanism are tested. The headline product claim —{' '}
                <em className="text-foreground/90">that feedback learning beats a static retriever on real data</em> —
                is <span className="text-primary font-medium">not yet validated</span>. See the validation status below.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-20">

          {/* What it is / is not */}
          <section className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border bg-card/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={18} className="text-primary" />
                <h2 className="text-lg font-bold">What it is</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A usefulness-and-freshness tracker for closed-loop retrieval systems.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <XCircle size={18} className="text-red-300" />
                <h2 className="text-lg font-bold">What it is not</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A truth detector. It's sharpest when a <span className="text-foreground">verifier</span> (tests,
                a DB check) supplies part of the feedback — and is explicitly not designed to defend against
                adversarial or unverifiable feedback at scale.
              </p>
            </div>
          </section>

          {/* Where it fits */}
          <section>
            <SectionLabel>Where it fits</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Two properties decide whether CAG helps</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              <span className="text-foreground">Trustworthy feedback</span> (a verifier, or a controlled/trusted source)
              and <span className="text-foreground">repetition</span> (similar queries recur enough for the counters to converge).
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/40 text-left">
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Use case</th>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Fit</th>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {whereItFits.map((row) => (
                    <tr key={row.useCase} className="border-b border-border/60 last:border-0">
                      <td className="px-5 py-4 text-foreground">{row.useCase}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${fitTone[row.fit]}`}>{row.fit}</span>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Architecture */}
          <section>
            <SectionLabel>Architecture</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Retrieve → observe → learn</h2>
            <div className="rounded-2xl border border-border bg-background/80 overflow-hidden mb-8">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/30 text-xs font-mono text-muted-foreground">
                <Terminal size={14} className="text-primary" /> data flow
              </div>
              <pre className="p-4 md:p-6 overflow-x-auto text-[11px] md:text-xs leading-relaxed text-muted-foreground font-mono">{architecture}</pre>
            </div>
            <div className="grid gap-3">
              {modules.map((m) => (
                <div key={m.mod} className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-5 rounded-xl border border-border bg-card/30 p-4">
                  <code className="text-sm text-primary font-mono">{m.mod}</code>
                  <span className="text-sm text-muted-foreground">{m.resp}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">The mechanism, in four moves</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: GitBranch, title: 'Ranking', body: 'Each candidate blends exploitation — w_sim·sim + w_c·C_robust + w_p·P — with exploration scaled by similarity: w_explore·sim·(ThompsonSample(α,β) + rarity). Exploration is multiplied by sim so it never surfaces wholly irrelevant docs.' },
                { icon: ShieldCheck, title: 'Outcome', body: 'Feedback signals aggregate into y ∈ [0,1]. A verifier (s_gt) overrides when present — it can\'t be faked; otherwise a weighted mean of s_behave (0.45), s_gt (0.30), s_judge (0.15), s_expl (0.10), renormalized over present signals.' },
                { icon: Cpu, title: 'Update', body: 'Decisiveness κ = 2·|y−0.5|; credit share r(i) from similarity. α += κ·r·y, β += κ·r·(1−y), with a permanent A/B at 0.25 rate. Ambiguous outcomes (y≈0.5) barely move the counters; decisive ones move them fully.' },
                { icon: Database, title: 'Decay', body: 'x ← 1 + (x−1)·γ^Δt pulls stale counters back toward the prior — computed lazily from last_updated, so there\'s no cron sweep.' },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-card/40 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <c.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{c.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Robustness */}
          <section>
            <SectionLabel>Robustness &amp; denoising</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Safeguards against bad feedback</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Naive learning from implicit feedback can degrade — a known result. These mechanisms were chosen
              from a 20-seed ablation. They <span className="text-foreground">mitigate</span> sycophancy; they don't solve it.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/40 text-left">
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Mechanism</th>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Status</th>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {robustness.map((row) => (
                    <tr key={row.m} className="border-b border-border/60 last:border-0">
                      <td className="px-5 py-4 text-foreground">{row.m}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusTone[row.s]}`}>{row.s}</span>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{row.n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
              <span className="text-foreground font-medium">Honest bound:</span> effectiveness is capped by verifier coverage.
              Above ~50% contamination, no estimator on the feedback values alone can recover truth (information-theoretic).
            </p>
          </section>

          {/* Validation status */}
          <section>
            <SectionLabel>Validation status</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What the tests actually establish — and what they don't</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.04] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} className="text-emerald-400" />
                  <h3 className="text-lg font-bold">Validated</h3>
                </div>
                <ul className="space-y-3">
                  {validated.map((v) => (
                    <li key={v} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <CircleDot size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle size={20} className="text-primary" />
                  <h3 className="text-lg font-bold">Not yet validated <span className="text-muted-foreground font-normal text-sm">(the important part)</span></h3>
                </div>
                <ul className="space-y-3">
                  {notValidated.map((v) => (
                    <li key={v} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <CircleDot size={15} className="text-primary shrink-0 mt-0.5" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section>
            <SectionLabel>Limitations &amp; scope</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Know where it breaks</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {limitations.map((l) => (
                <div key={l} className="flex gap-3 rounded-xl border border-border bg-card/30 p-4">
                  <XCircle size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{l}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Next steps */}
          <section>
            <SectionLabel>Next steps</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The path to a real result</h2>
            <ol className="space-y-3">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-4 rounded-xl border border-border bg-card/30 p-4">
                  <span className="font-mono text-primary font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{s}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-border bg-card/30 p-8 md:p-12 text-center">
            <Layers size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Read the code, kick the tyres</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              The mechanism, the persistence layer, and the robustness ablation are all on GitHub —
              along with an honest roadmap for the experiment that decides whether the core idea adds value.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Github size={18} /> rag-feedback-loop
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

export default CagPage;
