"use client";

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft, Github, Chrome, Zap, Shield, Copy, Download, CheckCircle,
  Globe, Star, Users, Code, Layers, FileText, ArrowRight, PlayCircle
} from 'lucide-react';

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="section-label mb-3">{children}</div>
);

const TranscriptExtractorPage: React.FC = () => {
  const navigate = useNavigate();
  const REPO = 'https://github.com/pras-ops/udemy-transcript-extractor';
  const CHROME_STORE = 'https://chromewebstore.google.com/detail/transcript-extractor/fjohldgflidaghednclaijiafmchlnbh';

  const features = [
    { icon: Zap, title: "One-Click Extraction", body: "Instantly extract transcripts from any Udemy video without complex setup." },
    { icon: Shield, title: "Privacy First", body: "All data stays on your device. The extension does not rely on any external server processing." },
    { icon: Copy, title: "Multiple Formats", body: "Export transcripts seamlessly as TXT, Markdown, JSON, or RAG-ready formats." },
    { icon: Download, title: "Batch Processing", body: "Automatically collect transcripts from entire courses sequentially in a single click." },
    { icon: CheckCircle, title: "Progress Tracking", body: "Real-time status tracking with section-based completion counting during batch extraction." },
    { icon: Globe, title: "Multi-Platform", body: "Currently supporting Udemy, with support for Coursera, YouTube, and edX coming soon." },
  ];

  const stack = ['React 19', 'TypeScript', 'Chrome APIs', 'Manifest V3', 'Tailwind CSS'];

  return (
    <div className="min-h-screen grain bg-background text-foreground">
      {/* Top bar */}
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
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{ background: 'radial-gradient(60% 60% at 50% 0%, color-mix(in oklch, var(--primary) 16%, transparent), transparent 70%)' }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            <SectionLabel>Chrome Extension · Privacy First</SectionLabel>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
                <FileText size={28} className="text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Transcript Extractor
              </h1>
            </div>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              A powerful Chrome extension that extracts transcripts from <span className="text-foreground">Udemy</span> (with more platforms coming soon). Perfect for students, educators, and creators who want to save time and build <span className="text-foreground">RAG-ready datasets</span> effortlessly.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground">{s}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={CHROME_STORE} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Chrome size={18} /> Add to Chrome
              </a>
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                <Github size={18} /> Source Code
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-xs text-muted-foreground mt-1">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Beta</div>
                <div className="text-xs text-muted-foreground mt-1">Release Status</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1.0.1</div>
                <div className="text-xs text-muted-foreground mt-1">Version</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1+</div>
                <div className="text-xs text-muted-foreground mt-1">Platforms</div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-20">

          {/* How It Works */}
          <section>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Extract in 3 simple steps</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-border bg-card/40 p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Open Course Video</h3>
                <p className="text-sm text-muted-foreground">Navigate to any supported course video page.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Click Extension Icon</h3>
                <p className="text-sm text-muted-foreground">Choose single video or batch extraction mode.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Extract & Export</h3>
                <p className="text-sm text-muted-foreground">Watch transcripts extract automatically and export.</p>
              </div>
            </div>
          </section>

          {/* Key features */}
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

          {/* Platform Support */}
          <section>
            <SectionLabel>Roadmap</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Platform Support</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card/40 p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                  <CheckCircle size={20} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Udemy</h3>
                  <p className="text-sm text-muted-foreground">Currently Supported - Full transcript extraction and batch processing across sections.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6 flex items-start gap-4 opacity-70">
                <div className="p-2 rounded-lg bg-secondary border border-border">
                  <PlayCircle size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Coursera, YouTube, edX</h3>
                  <p className="text-sm text-muted-foreground">Coming Soon - In development based on user demand and technical feasibility.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section>
            <SectionLabel>Use Cases</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Who is it for?</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Users size={18} className="text-primary"/> For Students</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Save time making notes & summaries</li>
                  <li>• Use AI to create personalized study materials</li>
                  <li>• Get better understanding with AI explanations</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Layers size={18} className="text-primary"/> For Researchers</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Collect transcripts for qualitative analysis</li>
                  <li>• Build RAG datasets for LLMs</li>
                  <li>• Batch processing for high volume data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-border bg-card/30 p-8 md:p-12 text-center">
            <Chrome size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to transform your learning?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join students and educators who are already saving time with Transcript Extractor.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={CHROME_STORE} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Chrome size={18} /> Install Extension
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

export default TranscriptExtractorPage;
