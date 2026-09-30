"use client";

import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, Moon, Sun, Shield, Wand2, FileText, Wrench, Bookmark, AlertTriangle, Mail, Bell,
  KeyRound, EyeOff, Cpu, ListChecks, Brain, Sparkles, Lock, CheckCircle, CircleDashed, Chrome, X,
  ChevronLeft, ChevronRight, ExternalLink,
} from "lucide-react";
import { useTheme } from "../settings/theme";

const PRIVACY_URL = "/privacy/folioflight.html";

const screenshots = [
  { src: "/images/folioflight/screenshot-1.png", caption: "Forms fill themselves: you review, then click Submit" },
  { src: "/images/folioflight/screenshot-2.png", caption: "Every application on one board, with the resume version sent" },
  { src: "/images/folioflight/screenshot-3.png", caption: "Email suggests updates: you confirm every change" },
  { src: "/images/folioflight/screenshot-4.png", caption: "What needs you today" },
  { src: "/images/folioflight/screenshot-5.png", caption: "What's working: responses per resume version" },
];

const features = [
  { icon: Wand2, title: "Automatic autofill", desc: "Workday, Greenhouse, Lever, Ashby, iCIMS, SmartRecruiters and 80+ job sites fill themselves: once per step, never while you type, never clicks Submit or Next." },
  { icon: FileText, title: "Resume versions", desc: "Named versions (“Backend v3”) uploaded with their original file names. The best match per posting is suggested, with missing keywords shown." },
  { icon: Wrench, title: "Fix and remember", desc: "Right-click any field → “fix this field…”. Pick a profile item, a saved answer or type your own. It's remembered by question, across companies." },
  { icon: Bookmark, title: "Saved job postings", desc: "Description, posted date and salary are saved with the card, so you still have the ad when it disappears before the interview." },
  { icon: AlertTriangle, title: "Before-you-apply warnings", desc: "Already applied, similar role at the same company recently, too many roles at one company, stale or reposted posting, no salary." },
  { icon: Mail, title: "Email tracking", desc: "Open a job email in Gmail or Outlook: “Move Acme to Rejected?” One click to apply. Nothing changes until you confirm." },
  { icon: Bell, title: "Follow-ups", desc: "Badge count and an optional daily reminder for applications with no news. Copy-ready email from your template. You send it." },
  { icon: KeyRound, title: "Site accounts", desc: "Which Workday / iCIMS / Taleo tenants you created accounts on, and with which email. Passwords are never read." },
  { icon: EyeOff, title: "LinkedIn quiet mode", desc: "On by default: nothing runs on linkedin.com. LinkedIn applications are tracked from the confirmation email instead." },
];

const pipeline = [
  { icon: ListChecks, title: "1 · Rules", desc: "Your saved fixes, a field catalog of regex rules and your saved answers go first. They're fast, explainable and handle most fields." },
  { icon: Cpu, title: "2 · Local embeddings", desc: "A 23 MB sentence-embedding model (transformers.js, WASM bundled) in the service worker matches unusual questions to your data." },
  { icon: Brain, title: "3 · Gemini Nano", desc: "Chrome's built-in model, if the device has it, is limited by a JSON schema to choosing among your own options." },
];

const privacyPoints = [
  "Profile, resumes, answers and history stay in your browser",
  "No Folioflight server, no account, no analytics",
  "It never submits, never sends email, never invents answers",
  "No remote code: the build fails if a CDN address gets into the package",
];

const stack = ["TypeScript", "React", "Chrome MV3", "transformers.js", "Chrome Prompt API", "pdf.js", "IndexedDB", "Playwright", "Vite"];

export default function FolioflightPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [shot, setShot] = useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Folioflight · Private job-application autofill | Prashant Jacob";
  }, []);

  React.useEffect(() => {
    if (shot === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShot(null);
      if (e.key === "ArrowRight") setShot((s) => (s === null ? s : (s + 1) % screenshots.length));
      if (e.key === "ArrowLeft") setShot((s) => (s === null ? s : (s + screenshots.length - 1) % screenshots.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shot]);

  const muted = isDarkMode ? "text-slate-400" : "text-gray-600";
  const heading = isDarkMode ? "text-white" : "text-gray-900";
  const card = isDarkMode ? "bg-slate-900/60 border-white/10" : "bg-white border-gray-200";
  const chip = isDarkMode ? "bg-slate-800/70 text-slate-300 border-white/10" : "bg-gray-100 text-gray-700 border-gray-200";
  const floatBtn = isDarkMode ? "bg-slate-900/90 border-white/10 text-slate-300" : "bg-white/90 border-gray-200 text-gray-600";

  const Section = ({ title, kicker, children, alt }: { title: string; kicker?: string; children: React.ReactNode; alt?: boolean }) => (
    <section className={`py-16 sm:py-20 ${alt ? (isDarkMode ? "bg-slate-900/40" : "bg-gray-50") : ""}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {kicker && <p className="text-sm font-semibold tracking-wide uppercase text-sky-500 mb-2">{kicker}</p>}
        <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${heading}`}>{title}</h2>
        {children}
      </div>
    </section>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-[#020617] text-slate-100" : "bg-white text-gray-900"} font-sans`}>
      <button onClick={() => navigate("/")} className={`fixed top-4 left-4 sm:top-6 sm:left-6 z-40 p-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg border backdrop-blur flex items-center gap-2 hover:text-sky-500 transition-colors ${floatBtn}`}>
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">Back to Portfolio</span>
      </button>
      <button onClick={toggleDarkMode} aria-label="Toggle theme" className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-40 p-2.5 rounded-full shadow-lg border backdrop-blur transition-colors ${floatBtn}`}>
        {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4" />}
      </button>

      {/* Hero */}
      <section className={`relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 ${isDarkMode ? "bg-gradient-to-b from-sky-950/40 via-[#020617] to-[#020617]" : "bg-gradient-to-b from-sky-50 via-white to-white"}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.img
            src="/images/folioflight/icon-128.png" alt="Folioflight logo" width={96} height={96}
            className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 drop-shadow-xl"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          />
          <h1 className={`text-4xl sm:text-6xl font-bold tracking-tight mb-4 ${heading}`}>Folioflight</h1>
          <p className="text-lg sm:text-2xl font-medium text-sky-500 mb-5">Private job-application autofill &amp; tracker</p>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-8 ${muted}`}>
            A Chrome extension that fills job forms from your profile, records which resume version you sent, and keeps your board
            up to date from your email. Everything runs locally. The small AI models only <em>match</em> your own data to questions.
            They never write answers, never submit and never scan your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <span className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border cursor-default ${chip}`}>
              <Chrome className="w-5 h-5" /> Chrome Web Store · coming soon
            </span>
            <a href={PRIVACY_URL} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-500 transition-colors">
              <Shield className="w-5 h-5" /> Privacy policy
            </a>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["v0.3.0", "Manifest V3", "100% local", "80+ job sites", "133 e2e checks"].map((t) => (
              <span key={t} className={`text-xs sm:text-sm px-3 py-1 rounded-full border ${chip}`}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => setShot(0)} className={`block w-full rounded-2xl overflow-hidden border shadow-2xl ${isDarkMode ? "border-white/10 shadow-sky-950/50" : "border-gray-200"}`}>
            <img src={screenshots[0].src} alt={screenshots[0].caption} className="w-full h-auto" />
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
            {screenshots.slice(1).map((s, i) => (
              <button key={s.src} onClick={() => setShot(i + 1)} className={`group text-left rounded-xl overflow-hidden border ${card}`}>
                <img src={s.src} alt={s.caption} loading="lazy" className="w-full h-auto group-hover:opacity-90 transition-opacity" />
                <span className={`block px-3 py-2 text-xs leading-snug ${muted}`}>{s.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section kicker="Why" title="Why this shape" alt>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { big: "819 → 5", text: "Auto-apply bots are expensive and get poor results. One test sent 819 applications and got 5 interviews." },
            { big: "LinkedIn", text: "LinkedIn fingerprints and punishes automation, so the extension stays off LinkedIn by default." },
            { big: "~30%", text: "Free autofill tools miss about 30% of Workday fields. Folioflight fills React state correctly and learns your fixes." },
          ].map((c) => (
            <div key={c.big} className={`rounded-xl border p-6 ${card}`}>
              <div className="text-3xl font-bold text-sky-500 mb-2">{c.big}</div>
              <p className={`text-sm leading-relaxed ${muted}`}>{c.text}</p>
            </div>
          ))}
        </div>
        <p className={`mt-6 max-w-3xl ${muted}`}>
          So it keeps you in the loop and makes each step fast. It fills, suggests and records. You decide and you click Submit.
        </p>
      </Section>

      <Section kicker="Features" title="What it does">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={`rounded-xl border p-6 transition-colors hover:border-sky-500/50 ${card}`}>
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${isDarkMode ? "bg-sky-500/10" : "bg-sky-50"}`}>
                <Icon className="w-5 h-5 text-sky-500" />
              </div>
              <h3 className={`font-semibold mb-2 ${heading}`}>{title}</h3>
              <p className={`text-sm leading-relaxed ${muted}`}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Local AI" title="AI that chooses, never writes" alt>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pipeline.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className={`relative rounded-xl border p-6 ${card}`}>
              <Icon className="w-6 h-6 text-sky-500 mb-3" />
              <h3 className={`font-semibold mb-2 ${heading}`}>{title}</h3>
              <p className={`text-sm leading-relaxed ${muted}`}>{desc}</p>
              {i < pipeline.length - 1 && (
                <ChevronRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-6 h-6 text-sky-500/60" />
              )}
            </div>
          ))}
        </div>
        <p className={`mt-6 max-w-3xl flex gap-2 ${muted}`}>
          <Sparkles className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
          Each step runs only if the one before it isn't sure. Nothing is sent to a cloud model. The answer always comes from
          your profile, your saved answers or a fix you taught it.
        </p>
      </Section>

      <Section kicker="Privacy" title="Private by design">
        <div className={`rounded-2xl border p-6 sm:p-8 ${card}`}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {privacyPoints.map((p) => (
              <li key={p} className="flex gap-3">
                <Lock className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span className={isDarkMode ? "text-slate-300" : "text-gray-700"}>{p}</span>
              </li>
            ))}
          </ul>
          <p className={`text-sm mb-6 ${muted}`}>
            The only network requests: the matching model, downloaded once from Hugging Face, and public job-posting data from
            Greenhouse, Lever, Ashby and Workday. The request contains only the job's ID.
          </p>
          <a href={PRIVACY_URL} className="inline-flex items-center gap-2 font-semibold text-sky-500 hover:text-sky-400">
            Read the full privacy policy <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Section>

      <Section kicker="Engineering" title="Tested, and honest about what isn't" alt>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className={`rounded-xl border p-6 ${card}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${heading}`}><CheckCircle className="w-5 h-5 text-emerald-500" /> Verified</h3>
            <ul className={`text-sm space-y-2 ${muted}`}>
              <li>100+ unit tests, including a set of ~200 emails and word-matching traps</li>
              <li>133 end-to-end checks in real Chromium with the extension loaded (Playwright)</li>
              <li>Correct React app state on Workday and Greenhouse mocks, resume auto-pick, photo upload</li>
              <li>Fix-and-remember reused on the next visit; Submit → Applied; LinkedIn left untouched</li>
              <li>Gmail message-list selectors checked on a real account</li>
            </ul>
          </div>
          <div className={`rounded-xl border p-6 ${card}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${heading}`}><CircleDashed className="w-5 h-5 text-amber-500" /> Not yet verified</h3>
            <ul className={`text-sm space-y-2 ${muted}`}>
              <li>Live employer tenants (tested against mocks of the real ATS widgets)</li>
              <li>The real Outlook DOM</li>
              <li>Chrome's built-in Gemini Nano in the test browser. It falls back to the embedding model.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((t) => (
            <span key={t} className={`text-sm px-3 py-1.5 rounded-lg border ${chip}`}>{t}</span>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${heading}`}>Fill once, fix once.</h2>
          <p className={`mb-8 ${muted}`}>Folioflight is heading to the Chrome Web Store. Want to talk about it, or about building something similar?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate("/")} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-500 transition-colors">
              <ArrowLeft className="w-5 h-5" /> More projects
            </button>
            <a href={PRIVACY_URL} className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border hover:border-sky-500 transition-colors ${chip}`}>
              <Shield className="w-5 h-5" /> Privacy policy
            </a>
          </div>
        </div>
      </section>

      {/* Screenshot viewer */}
      <AnimatePresence>
        {shot !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/85 flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShot(null)}
          >
            <button aria-label="Close" className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"><X className="w-5 h-5" /></button>
            <img src={screenshots[shot].src} alt={screenshots[shot].caption} className="max-w-full max-h-[80vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
            <div className="mt-4 flex items-center gap-4 text-white" onClick={(e) => e.stopPropagation()}>
              <button aria-label="Previous" onClick={() => setShot((shot + screenshots.length - 1) % screenshots.length)} className="p-2 rounded-full bg-white/10 hover:bg-white/20"><ChevronLeft className="w-5 h-5" /></button>
              <span className="text-sm text-center">{screenshots[shot].caption} · {shot + 1}/{screenshots.length}</span>
              <button aria-label="Next" onClick={() => setShot((shot + 1) % screenshots.length)} className="p-2 rounded-full bg-white/10 hover:bg-white/20"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
