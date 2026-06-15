"use client";

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  ArrowLeft, Brain, Zap, Shield, Lock, DollarSign, 
  Code, Package, Globe, Github, ArrowRight, CheckCircle, 
  AlertTriangle 
} from "lucide-react";

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="section-label mb-3">{children}</div>
);

const LLMPreprocessorPage: React.FC = () => {
  const navigate = useNavigate();
  const REPO = 'https://github.com/pras-ops/Local_processing_llm';
  const NPM_PACKAGE = 'https://www.npmjs.com/package/client-llm-preprocessor';

  const features = [
    { icon: Zap, title: "Rule-Based Cleaning", body: "Instant text cleaning - remove HTML, normalize whitespace, strip URLs. No model, no GPU, no waiting." },
    { icon: Brain, title: "Optional Local LLM", body: "WebGPU-powered semantic extraction and structured data parsing - runs entirely in the browser." },
    { icon: Shield, title: "Privacy-First", body: "No servers, no API keys. All processing happens locally - data never leaves your device." },
    { icon: DollarSign, title: "Token Reduction", body: "Reduce LLM API costs by cleaning and structuring text before sending to paid APIs." },
    { icon: Lock, title: "Modular Design", body: "LLM is optional. Rules and AI are separate. Everything is explicit and opt-in." },
    { icon: Code, title: "Developer-Friendly", body: "JavaScript SDK designed for developers exploring browser-side AI and cost-efficient pipelines." }
  ];

  const stack = ['JavaScript', 'WebGPU', 'Local LLM', 'NPM Package'];

  return (
    <div className="min-h-screen grain bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border nav-glass">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="press inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} /> Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-colors">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-16">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{ background: 'radial-gradient(60% 60% at 50% 0%, color-mix(in oklch, var(--primary) 16%, transparent), transparent 70%)' }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            <SectionLabel>JavaScript SDK · Privacy First</SectionLabel>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
                <Brain size={28} className="text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Client-Side LLM Preprocessor
              </h1>
            </div>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Clean and structure text locally before sending to paid LLM APIs — <span className="text-foreground">reducing costs</span> and keeping user data <span className="text-foreground">private</span>.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground">{s}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={NPM_PACKAGE} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Package size={18} /> View on NPM
              </a>
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                <Github size={18} /> Source Code
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold">NPM</div>
                <div className="text-xs text-muted-foreground mt-1">Package</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Beta</div>
                <div className="text-xs text-muted-foreground mt-1">Status</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">SDK</div>
                <div className="text-xs text-muted-foreground mt-1">Type</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Browser</div>
                <div className="text-xs text-muted-foreground mt-1">Platform</div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-20">
          <section>
            <SectionLabel>Core Idea</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Preprocessing Pipeline</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-border bg-card/40 p-6 text-center">
                <h3 className="font-semibold mb-2">1. Local Cleaning</h3>
                <p className="text-sm text-muted-foreground">Fast, deterministic, no model required.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6 text-center">
                <h3 className="font-semibold mb-2">2. Optional Local LLM</h3>
                <p className="text-sm text-muted-foreground">For semantic tasks like structured extraction using WebGPU.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6 text-center">
                <h3 className="font-semibold mb-2">3. Reduced Output</h3>
                <p className="text-sm text-muted-foreground">Send only cleaned, relevant text to external APIs.</p>
              </div>
            </div>
          </section>

          <section>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Features</h2>
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

          <section>
            <SectionLabel>Status</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Current Limitations</h2>
            <div className="rounded-2xl border border-border bg-card/40 p-6 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <AlertTriangle size={20} className="text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This project is experimental. First local model load can be slow, browser WebGPU support is still evolving, and LLM inference can block the main thread. Not all devices can run local models reliably. These are known constraints!
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card/30 p-8 md:p-12 text-center">
            <Package size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Optimize your AI pipeline</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Explore browser-side preprocessing to save API costs today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={NPM_PACKAGE} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Package size={18} /> View on NPM
              </a>
              <Link to="/" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                More projects <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LLMPreprocessorPage;
