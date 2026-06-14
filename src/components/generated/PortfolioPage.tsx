"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Menu, X, ChevronDown, Code, Database, BarChart3, Brain, ArrowRight, Eye, Shield, Target, Server, Globe, Layers, FileText, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroBackground from '../NetworkBackground';
import TiltCard from '../TiltCard';

const PortfolioPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  // Scroll Parallax and Fallback Progress Bar Setup
  const progressBarRef = useRef<HTMLDivElement>(null);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

  useEffect(() => {
    if (typeof window !== 'undefined' && progressBarRef.current && !window.CSS?.supports?.('animation-timeline', 'scroll()')) {
      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const progress = window.scrollY / totalHeight;
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${progress})`;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillGroups = [
    { label: 'Data & Cloud',   items: ['Python', 'SQL', 'AWS', 'Docker', 'Git'] },
    { label: 'Applied AI',     items: ['Machine Learning', 'LLM / WebGPU', 'Browser AI'] },
    { label: 'Web & Extensions', items: ['React', 'TypeScript', 'Chrome APIs', 'Web Scraping'] },
    { label: 'Visualization',  items: ['Tableau', 'Power BI'] },
  ];

  const projects = [
    {
      title: 'Browser PII Shield',
      description: 'A privacy-first JavaScript SDK that redacts sensitive PII (emails, SSNs, credit cards, names) entirely client-side before prompts reach cloud LLMs — then restores the originals locally in the response. Reversible placeholder mapping, a one-line shielded fetch proxy, and hybrid regex + local-WebGPU-LLM redaction keep data on-device for HIPAA / GDPR / SOC2.',
      demo: 'https://www.npmjs.com/package/browser-pii-shield',
      github: 'https://github.com/pras-ops/Local_processing_llm',
      route: '/browser-pii-shield',
      tech: ['JavaScript', 'WebGPU', 'WebLLM', 'NPM SDK'],
      category: 'Privacy SDK',
      icon: Shield
    },
    {
      title: 'CAG — Feedback-Learning Retrieval',
      description: 'A lightweight layer over a retrieval system that learns which retrieved chunks actually produce good outcomes — boosting what helps and decaying what goes stale. Built on per-document Beta counters updated from verifier, behavioral and LLM-judge feedback, with explicit safeguards against noisy and sycophantic signals.',
      demo: '',
      github: 'https://github.com/pras-ops/rag-feedback-loop',
      route: '/cag',
      tech: ['Python', 'FastAPI', 'Sentence-Transformers', 'Bandit · RRF'],
      category: 'Applied AI · Research',
      icon: Layers
    },
    {
      title: 'Transcript Extractor',
      description: 'A privacy-first Chrome extension (Manifest V3) that pulls course transcripts in one click and exports them as TXT, Markdown, JSON, or RAG-ready format. Handles batch extraction across whole courses with live progress tracking — Udemy today, with Coursera, YouTube and edX next.',
      demo: 'https://chromewebstore.google.com/detail/transcript-extractor/fjohldgflidaghednclaijiafmchlnbh',
      github: 'https://github.com/pras-ops/udemy-transcript-extractor',
      route: '/transcript-extractor',
      tech: ['React 19', 'TypeScript', 'Chrome APIs', 'Manifest V3'],
      category: 'Web Extension',
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen grain bg-background text-foreground font-sans">
      {/* Scroll Progress Bar */}
      <div ref={progressBarRef} className="scroll-progress-bar" aria-hidden="true" />

      {/* 3D Network Background */}
      <HeroBackground />

      {/* Overlay Gradient for depth */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg grid place-items-center font-mono font-bold bg-primary/10 border border-primary/30 text-primary">
                PJ
              </div>
              <span className="font-semibold text-lg tracking-tight text-foreground">Prashant Jacob</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium transition-all hover:text-primary nav-link text-muted-foreground"
                  data-active={activeSection === item.id}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="press px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium border border-primary/20"
              >
                Get in touch
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 hover:text-primary transition-colors text-muted-foreground hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 py-3">
              <button 
                onClick={() => scrollToSection('contact')}
                className="press w-full px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center border border-primary/20"
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="relative z-10 pt-20">

        {/* Hero Section */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-mono text-muted-foreground mx-auto">
              <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-emerald-400" /> Available for opportunities
            </div>

            <motion.div style={{ opacity: heroOpacity, y: heroY }} className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-foreground">
                Building <span className="text-primary">AI & Data Solutions</span>
                <br />
                That Work in the <span className="text-white">Real World</span>
              </h1>

              <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-muted-foreground">
                Prioritizing Privacy, Performance, and Real-World Impact
              </p>

              <div className="flex items-center justify-center gap-2 text-sm md:text-base text-muted-foreground">
                <span>I'm <span className="text-primary font-semibold">Prashant Jacob</span></span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>Data Engineer & Applied AI Developer</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="press px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:brightness-110 transition-all flex items-center gap-2 border border-primary/20"
                >
                  Explore my work <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="press px-8 py-3 rounded-full font-medium border border-border hover:border-primary/50 transition-all text-foreground bg-transparent"
                >
                  Get in touch
                </button>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
            <ChevronDown size={20} className="scroll-cue text-muted-foreground" />
          </div>
        </section>

        {/* Bento Grid Layout Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {/* 1. About Me Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <TiltCard className="h-full w-full glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center space-y-4">
                <div className="relative w-32 h-32 rounded-full p-[2px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-lg shadow-primary/20">
                  <div className="w-full h-full rounded-full grid place-items-center bg-background border-4 border-background">
                    <span className="font-mono font-extrabold text-4xl text-primary tracking-tighter select-none">PJ</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">About Me</h3>
                  <p className="text-sm mt-2 leading-relaxed text-muted-foreground">
                    I build privacy-focused tools and applied AI systems that solve actual problems.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* 2. Privacy First / Core Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3"
            >
              <TiltCard className="h-full w-full glass-panel rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Shield size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Privacy-First Engineering</h3>
                <p className="text-lg max-w-2xl leading-relaxed text-slate-300">
                  My work centers on intelligent systems that respect user data. I specialize in on-device processing and efficient data pipelines that reduce reliance on external clouds when possible.
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="flex items-center gap-2 text-sm text-primary bg-amber-950/30 px-3 py-1 rounded-full border border-amber-900/50">
                    <Shield size={14} /> Data Privacy
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary bg-amber-950/30 px-3 py-1 rounded-full border border-amber-900/50">
                    <Zap size={14} /> High Performance
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* 3. Skills Section */}
            <div className="md:col-span-4" id="skills">
              <h3 className="text-2xl font-bold mb-6 text-white">Skills & Technologies</h3>
              <div className="space-y-6">
                {skillGroups.map((g, groupIndex) => (
                  <motion.div
                    key={g.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: groupIndex * 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className="grid md:grid-cols-[180px_1fr] gap-4 items-start border-t border-border pt-6"
                  >
                    <div className="section-label">{g.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map(i => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-sm hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 4. Projects Section */}
            <div className="md:col-span-4 mt-8" id="projects">
              <h3 className="text-2xl font-bold mb-6 text-white">Featured Projects</h3>
              
              <div className="space-y-6">
                {/* Featured Project - Big Horizontal Card */}
                {projects.filter(p => p.title === 'Browser PII Shield').map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full glass-panel rounded-3xl p-8 border border-border bg-card/40 flex flex-col lg:flex-row gap-8 items-center hover:border-primary/30 transition-all">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-slate-800">
                            <project.icon size={24} className="text-primary" />
                          </div>
                          <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary">FEATURED SOLUTION</span>
                        </div>
                        <h4 className="text-2xl font-extrabold text-white">{project.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(t => (
                            <span key={t} className="text-xs font-medium px-2 py-1 rounded text-slate-300 bg-secondary border border-border">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 pt-2">
                          <button
                            onClick={() => navigate('/browser-pii-shield')}
                            className="press px-6 py-2.5 bg-primary text-primary-foreground hover:brightness-110 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 border border-primary/20"
                          >
                            <Eye size={16} /> View Details
                          </button>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="press px-6 py-2.5 rounded-lg border border-border hover:border-primary/50 text-foreground bg-transparent text-sm font-medium transition-all flex items-center gap-2"
                          >
                            <Github size={16} /> Codebase
                          </a>
                        </div>
                      </div>
                      <div className="w-full lg:w-[420px] shrink-0">
                        {/* Terminal Mock */}
                        <div className="rounded-xl border border-border bg-background/95 font-mono text-xs overflow-hidden shadow-2xl">
                          <div className="flex gap-1.5 px-3 py-2.5 border-b border-border bg-secondary/30">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"/>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70"/>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70"/>
                          </div>
                          <pre className="p-4 leading-relaxed text-muted-foreground">
                            <span className="text-primary">$</span> npm i browser-pii-shield<br/>
                            <span className="text-emerald-400">✓</span> ready<br/>
                            import {'{ Preprocessor }'} from 'browser-pii-shield'<br/>
                            const {'{ redacted }'} = await pre.redact(text) <span className="text-muted-foreground/60">{'// PII → {{EMAIL_1}}'}</span>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Other Projects - 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projects.filter(p => p.title !== 'Browser PII Shield').map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="flex"
                    >
                      <TiltCard className="w-full glass-panel rounded-2xl p-6 hover:border-primary/30 transition-all group flex flex-col justify-between bg-card/40 border border-border">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-lg bg-slate-800">
                              <project.icon size={24} className="text-primary" />
                            </div>
                            <a href={project.github} target="_blank" rel="noreferrer" className="transition-colors text-muted-foreground hover:text-foreground">
                              <Github size={20} />
                            </a>
                          </div>

                          <h4 className="text-lg font-bold mb-2 text-white">{project.title}</h4>
                          <p className="text-sm mb-4 line-clamp-3 text-muted-foreground">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map(t => (
                              <span key={t} className="text-xs font-medium px-2 py-1 rounded text-slate-300 bg-secondary border border-border">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto pt-2">
                          {project.route ? (
                            <button
                              onClick={() => navigate(project.route)}
                              className="press w-full py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 text-foreground border border-border"
                            >
                              <Eye size={16} /> View Details
                            </button>
                          ) : project.demo ? (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="press w-full py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 text-foreground text-center border border-border"
                            >
                              <Eye size={16} /> View Demo
                            </a>
                          ) : (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="press w-full py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 text-foreground text-center border border-border"
                            >
                              <Github size={16} /> View Code
                            </a>
                          )}
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Blog Teaser Section */}
            <div className="md:col-span-4 mt-12 rounded-3xl p-8 border border-border bg-card/20" id="blog">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Blog & Notes</h3>
                  <p className="text-muted-foreground">Thoughts on Scraping, Engineering, and AI</p>
                </div>
                <button 
                  onClick={() => setShowAllPosts(!showAllPosts)}
                  className="px-6 py-2 border rounded-full transition-colors text-sm border-border text-slate-300 hover:bg-secondary press"
                >
                  {showAllPosts ? 'Show Less' : 'View All Posts'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TiltCard
                  onClick={() => navigate('/blog/web-scraping-resilience')}
                  className="glass-card rounded-xl p-6 cursor-pointer group h-full"
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-mono">
                    <Shield size={12} className="text-primary/70" /> Web Scraping · 5 min read
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors text-white flex items-center justify-between">
                    <span>How I Stopped Panicking About Broken Scrapers</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-primary shrink-0 ml-2" />
                  </h4>
                  <p className="text-sm mt-2 text-muted-foreground">
                    A three-layer defense system for predictable extraction operations.
                  </p>
                </TiltCard>

                <TiltCard
                  onClick={() => navigate('/blog/chrome-web-store-review')}
                  className="glass-card rounded-xl p-6 cursor-pointer group h-full"
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-mono">
                    <Zap size={12} className="text-primary/70" /> Chrome Extension · 4 min read
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors text-white flex items-center justify-between">
                    <span>The Waiting Game: Handling Store Reviews</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-primary shrink-0 ml-2" />
                  </h4>
                  <p className="text-sm mt-2 text-muted-foreground">
                    How to optimize your extension for faster approval (under 48h).
                  </p>
                </TiltCard>

                {showAllPosts && (
                  <TiltCard
                    onClick={() => navigate('/blog/strategic-web-scraping')}
                    className="glass-card rounded-xl p-6 cursor-pointer group h-full"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-mono">
                      <Target size={12} className="text-primary/70" /> Web Scraping · 6 min read
                    </div>
                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors text-white flex items-center justify-between">
                      <span>Strategic Web Scraping: Choosing Approaches</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-primary shrink-0 ml-2" />
                    </h4>
                    <p className="text-sm mt-2 text-muted-foreground">
                      How to match the right approach to your target and test limits proactively.
                    </p>
                  </TiltCard>
                )}
              </div>
            </div>

            {/* 6. Footer / Check Me Out */}
            <div className="md:col-span-4 mt-8 flex flex-col items-center justify-center py-12 space-y-6" id="contact">
              <h3 className="text-3xl font-bold text-white">Ready to Collaborate?</h3>
              <a href="mailto:jacobprashant20@gmail.com" className="text-3xl md:text-5xl font-bold hover:text-primary transition-colors font-sans text-center px-4">
                jacobprashant20@gmail.com
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/pras-ops" target="_blank" rel="noreferrer" className="press p-4 rounded-full text-white hover:bg-slate-700 bg-slate-800 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/prashant--j" target="_blank" rel="noreferrer" className="press p-4 rounded-full text-white hover:bg-blue-700 bg-slate-800 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">© 2026 Prashant Jacob. Built with React & Three.js.</p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;