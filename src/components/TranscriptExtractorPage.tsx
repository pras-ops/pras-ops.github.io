

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Github, Chrome, ArrowRight, FileText, Layers, Wand2, BookOpen, Highlighter, StickyNote,
  Camera, PlayCircle, ListTree, Tags, Quote, Sparkles, Search, Download, Lock, AlertTriangle, CheckCircle,
  Cpu, Monitor, HardDrive, Keyboard,
} from 'lucide-react';

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="section-label mb-3">{children}</div>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-border bg-card/40 p-6 ${className}`}>{children}</div>
);

const TranscriptExtractorPage: React.FC = () => {

  const REPO = 'https://github.com/pras-ops/udemy-transcript-extractor';
  const RELEASES = `${REPO}/releases`;
  const CHROME_STORE = 'https://chromewebstore.google.com/detail/transcript-extractor/fjohldgflidaghednclaijiafmchlnbh';

  const problems = [
    'Raw captions are unreadable as notes: no paragraphs, filler words everywhere, one line every two seconds.',
    'Writing down a five-word insight means pausing, alt-tabbing to a notes app, typing, and then hunting for your place again.',
    'Diagrams and code on screen never make it into the transcript at all.',
    'A month later you remember a concept but not which of forty lectures it was in.',
    'Udemy ignores #t= in its URLs, so a timestamp in your notes is a number you scrub for by hand.',
  ];

  const loop = ['Watch', 'Capture or note', 'Read as prose', 'Mark a passage', 'Jump back', 'Search every course', 'Export'];

  const groups = [
    {
      label: 'Extract',
      items: [
        { icon: FileText, title: 'One click, any lecture', body: 'Dedicated extractors for Udemy, Coursera and YouTube, plus a generic one that reads captions from standard HTML5 players: Panopto, Kaltura, Echo360, Canvas Studio, Moodle, edX and more.' },
        { icon: Layers, title: 'A whole course', body: 'Lectures build up as you work through a course. "Next lecture & extract" steps through the curriculum for you.' },
        { icon: Wand2, title: 'Cleanup that matters', body: 'Filler words removed, rolling and duplicate lines collapsed, scrambled cues put back in order, and technical terms fixed ("numb pie" → NumPy).' },
      ],
    },
    {
      label: 'Study',
      items: [
        { icon: BookOpen, title: 'A reader, not a caption dump', body: 'Transcripts grouped into paragraphs, with a toggle back to one line per caption.' },
        { icon: Highlighter, title: 'Highlight and annotate', body: 'Mark a passage and it saves the moment it was said. Attach your own note so the quote and your thought stay together.' },
        { icon: StickyNote, title: 'Notes while watching', body: 'Alt+Shift+N opens a note box over the video. It pauses, records the moment and saves. No alt-tab.' },
        { icon: Camera, title: 'Screenshots while watching', body: "Alt+Shift+S captures the frame on screen, for the diagrams and code a transcript can't show." },
        { icon: PlayCircle, title: 'Jump back to the video', body: "Every timestamp, in the reader, highlights, notes or search results, moves the lecture's own player to that moment." },
      ],
    },
    {
      label: 'Understand',
      items: [
        { icon: ListTree, title: 'Chapters', body: 'Topic boundaries found with TextTiling over embedding similarity.' },
        { icon: Tags, title: 'Key concepts', body: 'KeyBERT-style keyphrases, with MMR for variety.' },
        { icon: Quote, title: 'Stated definitions', body: 'Definitions the lecturer actually said, matched with Hearst patterns ("X is a Y").' },
        { icon: Sparkles, title: 'Key moments', body: "The lecturer's own most representative sentences." },
      ],
    },
  ];

  const exportsList = [
    ['Study notes (.md)', 'Obsidian, Notion, Logseq, with your highlights and notes included'],
    ['Markdown / Organised (.md)', 'Readable notes with timestamps and headings'],
    ['Obsidian (.md)', 'Vault-ready, with frontmatter'],
    ['Plain text (.txt)', 'Anywhere'],
    ['Retrieval chunks (.json)', 'Vector stores and NotebookLM, pre-chunked with context headers'],
    ['JSON (.json)', 'Your own scripts'],
    ['SubRip (.srt) / WebVTT (.vtt)', 'Video editors, players, re-upload'],
    ['CSV (.csv)', 'Excel, Google Sheets'],
    ['Anki (.csv)', 'Cloze cards built from stated definitions'],
  ];

  const principles = [
    ['Simple over clever', 'A small amount of code that works beats a general mechanism.'],
    ['Local-first', 'If a feature needs a server, it is the wrong feature.'],
    ['Selection over generation', 'Never invent something the lecturer did not say.'],
    ['Degrade honestly', 'A feature that cannot work is not offered, rather than failing when pressed.'],
  ];

  const limitations = [
    ['No backup or restore yet', "The library lives in one browser profile's IndexedDB. This is next on the roadmap."],
    ['One machine', 'No sync, by design. Your notes stay where you made them.'],
    ['DRM blocks frame capture', 'Protected players return a black frame. The extension detects this and says capture is unavailable.'],
    ['Tier-two AI is often absent', "OCR and prose summaries need Chrome's on-device model."],
    ["Extractors depend on other sites' markup", 'A site redesign can break extraction. That is the fragile part and always will be.'],
  ];

  const stack = ['React 19', 'TypeScript', 'Manifest V3', 'Model2Vec', 'BM25 + RRF', 'IndexedDB', 'Vite', 'Vitest'];

  return (
    <div className="min-h-screen grain bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border nav-glass">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="press inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} /> Back to portfolio
          </Link>
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
            <SectionLabel>Chrome Extension · Local-first · MIT</SectionLabel>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
                <FileText size={28} className="text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Transcript Extractor
              </h1>
            </div>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Turns video lectures into notes you can <span className="text-foreground">search, mark up and take elsewhere</span>, entirely on your own machine.
              No account, no server, no telemetry. The extension makes <span className="text-foreground">no network requests at all</span> while it runs.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground">{s}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Github size={18} /> Source code
              </a>
              <a href={RELEASES} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                <Download size={18} /> Download release
              </a>
              <a href={CHROME_STORE} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                <Chrome size={18} /> Chrome Web Store
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">v4.3.0 is coming to the Chrome Web Store soon. Until then, load the release zip unpacked.</p>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border/50">
              {[
                ['v4.3.0', 'Version'],
                ['543', 'Tests in 24 files'],
                ['10', 'Export formats'],
                ['0', 'Network requests'],
              ].map(([v, l], i) => (
                <div key={l} className="text-center">
                  <div className={`text-2xl font-bold ${i === 3 ? 'text-primary' : ''}`}>{v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-20">

          {/* Problem */}
          <section>
            <SectionLabel>The problem</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Watching a lecture and keeping notes fight each other</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {problems.map((p) => (
                <Card key={p} className="flex gap-3 !p-5">
                  <AlertTriangle size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              {loop.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-foreground">{step}</span>
                  {i < loop.length - 1 && <ArrowRight size={14} className="text-muted-foreground" />}
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* Features */}
          {groups.map((g) => (
            <section key={g.label}>
              <SectionLabel>{g.label}</SectionLabel>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.items.map((f) => (
                  <Card key={f.title}>
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
                      <f.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                  </Card>
                ))}
              </div>
              {g.label === 'Understand' && (
                <p className="mt-4 text-sm text-muted-foreground">All derived from the transcript by selection and statistics, so nothing is invented.</p>
              )}
            </section>
          ))}

          {/* Search */}
          <section>
            <SectionLabel>Search</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Every course at once, by meaning</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <Card>
                <Search size={20} className="text-primary mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Keyword search (BM25) works immediately. Meaning-based search with Model2Vec embeddings loads behind it and upgrades the
                  results, fused with Reciprocal Rank Fusion.
                </p>
              </Card>
              <Card>
                <Quote size={20} className="text-primary mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  It returns passages with timestamps, not a generated answer, so it can't tell you something that was never said.
                </p>
              </Card>
            </div>
          </section>

          {/* Export */}
          <section>
            <SectionLabel>Export</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Take it anywhere</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Study notes include the transcript with your highlights marked <code className="font-mono text-foreground">==inline==</code>, your notes
              at their moments, and text read from your screenshots. Export one lecture, or a whole course as one document.
            </p>
            <div className="rounded-2xl border border-border overflow-hidden">
              {exportsList.map(([f, use], i) => (
                <div key={f} className={`grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-1 sm:gap-4 px-5 py-3 text-sm ${i % 2 ? 'bg-card/20' : 'bg-card/40'}`}>
                  <span className="font-mono text-foreground">{f}</span>
                  <span className="text-muted-foreground">{use}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why no LLM */}
          <section>
            <SectionLabel>Design decision</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why there is no language model in here</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Version 3 shipped WebLLM, a real language model running in the browser. It worked, but it couldn't be published: a
              multi-gigabyte download, WebGPU required, <code className="font-mono text-foreground">wasm-unsafe-eval</code> in the CSP, a
              compiled <code className="font-mono text-foreground">.wasm</code> library fetched from a CDN at runtime (which Manifest V3
              forbids), and four high-severity dependency vulnerabilities. For 4.2.0, instead of looking for a smaller model, the question
              became what the model was actually for. The answer was split into two tiers.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <Card className="border-primary/30">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu size={20} className="text-primary" />
                  <h3 className="text-lg font-bold">Tier one: statistics, on every machine</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Search uses Model2Vec potion-base-8M static embeddings, which are a lookup table rather than a model. Embedding a token is an
                  array index, not a forward pass: no inference runtime, no WASM, no GPU, and the same speed on a ten-year-old laptop. The
                  table (~30 MB) ships inside the package. Chapters, concepts, definitions and summaries all work by selection, not
                  generation, so none of it can hallucinate.
                </p>
              </Card>
              <Card>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={20} className="text-primary" />
                  <h3 className="text-lg font-bold">Tier two: Chrome's on-device model, optional</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Only prose summaries and reading text from a captured frame need generation. They use Chrome's built-in Gemini Nano
                  through the Summarizer and Prompt APIs. The extension doesn't ship or download a model, nothing leaves your machine, and
                  support is checked first, never assumed. Where it's missing, those two features aren't offered and everything else still
                  works.
                </p>
              </Card>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="font-mono text-foreground">npm run check:store</span> enforces the no-remote-code rule on every build, so it
              can't quietly regress.
            </p>
          </section>

          {/* Architecture */}
          <section>
            <SectionLabel>Architecture</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Four contexts, each with one job</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <Card>
                <div className="flex items-center gap-2 mb-3">
                  <Monitor size={20} className="text-primary" />
                  <h3 className="font-bold">The service worker exists for one reason</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Capturing a frame needs <code className="font-mono text-foreground">chrome.tabs.captureVisibleTab</code>, which content scripts
                  can't call. Its <code className="font-mono text-foreground">activeTab</code> grant only comes from a user action. A keypress on
                  the page doesn't count, but a <code className="font-mono text-foreground">chrome.commands</code> shortcut does. Notes don't
                  need that, so Alt+Shift+N is a plain listener on the page.
                </p>
              </Card>
              <Card>
                <div className="flex items-center gap-2 mb-3">
                  <HardDrive size={20} className="text-primary" />
                  <h3 className="font-bold">Notes queue, then drain</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A content script's IndexedDB belongs to the site, not the extension, so writing there would file your note in Udemy's
                  storage. Notes queue in <code className="font-mono text-foreground">chrome.storage</code> and the dashboard drains them when
                  it opens. They survive closing the tab, the browser or the machine.
                </p>
              </Card>
            </div>
          </section>

          {/* Shortcuts + platforms */}
          <section className="grid md:grid-cols-2 gap-5">
            <Card>
              <SectionLabel>While watching</SectionLabel>
              <div className="space-y-3">
                {[['Alt+Shift+N', 'Write a note against the current moment'], ['Alt+Shift+S', 'Capture the frame on screen']].map(([k, d]) => (
                  <div key={k} className="flex items-center gap-3">
                    <kbd className="font-mono text-xs px-2 py-1 rounded-md bg-secondary border border-border text-foreground inline-flex items-center gap-1">
                      <Keyboard size={12} /> {k}
                    </kbd>
                    <span className="text-sm text-muted-foreground">{d}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Both pause the video, record the moment, and resume.</p>
            </Card>
            <Card>
              <SectionLabel>Platforms</SectionLabel>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                <span className="text-foreground">Dedicated extractors:</span> Udemy, Coursera, YouTube.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground">Everything else:</span> a generic extractor reads caption data through the browser's TextTrack
                API, <code className="font-mono text-foreground">&lt;track&gt;</code> elements and the caption files the player loads, rather than
                scraping a site's markup. If captions are behind a protected endpoint, it says so instead of failing silently.
              </p>
            </Card>
          </section>

          {/* Privacy */}
          <section>
            <SectionLabel>Privacy</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Everything runs on your machine, and the build enforces it</h2>
            <Card>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'No network calls at runtime: the search model ships inside the package',
                  'No telemetry, analytics, crash reporting or remote configuration',
                  'No account, ever',
                  'Host permissions limited to the three supported platforms. The build fails if an all-URLs permission appears.',
                  "CSP is script-src 'self', with no wasm-unsafe-eval",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-sm">
                    <Lock size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          {/* Principles + limitations */}
          <section className="grid md:grid-cols-2 gap-5">
            <Card>
              <SectionLabel>Philosophy</SectionLabel>
              <div className="space-y-4">
                {principles.map(([t, d]) => (
                  <div key={t}>
                    <h3 className="font-bold flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> {t}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <SectionLabel>Known limitations</SectionLabel>
              <div className="space-y-4">
                {limitations.map(([t, d]) => (
                  <div key={t}>
                    <h3 className="font-bold flex items-center gap-2"><AlertTriangle size={16} className="text-amber-400" /> {t}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Status / next */}
          <section>
            <SectionLabel>Status</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">v4.3.0: 543 tests, all store checks passing</h2>
            <p className="text-muted-foreground mb-6">Typecheck, lint and all eight Chrome Web Store compliance checks pass. Next up:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ['Backup and restore', 'A JSON dump of the library and a way to load it back.'],
                ['Clear extraction errors', 'When a redesign breaks a selector, say so instead of returning nothing.'],
                ['Real captured fixtures', 'Recorded pages for the extractor tests.'],
                ['Onboarding', 'Tell new users the dashboard exists.'],
                ['More platforms', 'LinkedIn Learning, Khan Academy, on request.'],
              ].map(([t, d]) => (
                <Card key={t} className="!p-5">
                  <h3 className="font-bold mb-1">{t}</h3>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-border bg-card/30 p-8 md:p-12 text-center">
            <FileText size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Open source under MIT</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Fork it, run <span className="font-mono text-foreground">npm run verify</span>, and open a pull request. Platform extractors, export
              formats and clearer failures are the most useful places to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Github size={18} /> Star on GitHub
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
