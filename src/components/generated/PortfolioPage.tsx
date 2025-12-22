"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Menu, X, ChevronDown, Code, Database, BarChart3, Brain, Award, Briefcase, GraduationCap, Sparkles, ArrowRight, Download, Eye, Sun, Moon, FileText, BookOpen, Zap, Shield, Copy, Play, CheckCircle, Clock, Target, Server, Globe, Search, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../settings/theme';
import HeroBackground from '../NetworkBackground';

const PortfolioPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certifications' },
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
      const sections = ['hero', 'about', 'projects', 'skills', 'certificates', 'blog', 'contact'];
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

  const technologies = [
    { name: 'Python', icon: Code, category: 'Data & Cloud' },
    { name: 'SQL', icon: Database, category: 'Data & Cloud' },
    { name: 'AWS', icon: Server, category: 'Data & Cloud' },
    { name: 'Tableau', icon: BarChart3, category: 'Visualization' },
    { name: 'React', icon: Code, category: 'Web' },
    { name: 'Machine Learning', icon: Brain, category: 'Applied AI' },
    { name: 'Web Scraping', icon: Globe, category: 'Web Scraping' },
    { name: 'Power BI', icon: BarChart3, category: 'Visualization' },
    { name: 'Docker', icon: Layers, category: 'DevOps' },
    { name: 'Git', icon: Code, category: 'DevOps' }
  ];

  const projects = [
    {
      title: 'Client-Side LLM Preprocessor',
      description: 'JavaScript SDK that reduces LLM API token costs by cleaning and structuring text locally in the browser. Features rule-based cleaning and optional WebGPU-powered local LLM inference for privacy-first preprocessing.',
      demo: 'https://www.npmjs.com/package/client-llm-preprocessor',
      github: 'https://github.com/pras-ops/Local_processing_llm',
      tech: ['JavaScript', 'WebGPU', 'LLM', 'Browser AI'],
      category: 'AI/ML SDK',
      icon: Brain
    },
    {
      title: 'Transcript Extractor',
      description: 'Chrome Extension - Currently supporting Udemy with plans to expand to Coursera, YouTube, edX, and more. Automating transcript collection.',
      demo: 'https://chromewebstore.google.com/detail/transcript-extractor/fjohldgflidaghednclaijiafmchlnbh',
      github: 'https://github.com/pras-ops/udemy-transcript-extractor',
      tech: ['React', 'TypeScript', 'Chrome APIs'],
      category: 'Web Extension',
      icon: FileText
    },
    {
      title: 'Financial Dashboard',
      description: 'Interactive Tableau dashboard analyzing financial complaints by state, issue type, and resolution metrics.',
      demo: 'https://public.tableau.com/app/profile/prashant.jacob/viz/FinancialComplaintsDashboardRWFD_16645087186720/Dashboard',
      github: 'https://github.com/pras-ops/Financial-Complaints-Dashboard-Tableau',
      tech: ['Tableau', 'Data Viz', 'KPIs'],
      category: 'Analytics',
      icon: BarChart3
    },
    {
      title: 'Retail Sales KPI',
      description: 'Comprehensive sales analytics dashboard revealing hidden patterns in retail data to drive strategic decisions.',
      demo: 'https://public.tableau.com/app/profile/prashant.jacob/viz/RetailSalesKPIDashboard_16669251454040/RetailSalesDashboard?publish=yes',
      github: 'https://github.com/pras-ops/Retail-Sales-KPI-Dashboard-Tableau-',
      tech: ['Tableau', 'Sales Analytics', 'BI'],
      category: 'Analytics',
      icon: BarChart3
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#020617] text-slate-100' : 'bg-white text-gray-900'} font-sans selection:bg-sky-500/30`}>

      {/* 3D Network Background */}
      <HeroBackground />

      {/* Overlay Gradient for depth */}
      <div className={`fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent ${isDarkMode ? 'via-[#020617]/50 to-[#020617]' : 'via-white/50 to-white'}`} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isDarkMode ? 'border-white/5 bg-[#020617]/80' : 'border-gray-200 bg-white/80'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full overflow-hidden border border-sky-500/30 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
                <img src="/images/custom_logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className={`font-semibold text-lg tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>Prashant Jacob</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all hover:text-sky-400 ${activeSection === item.id ? 'text-sky-400' : isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}
                >
                  {item.label}
                </button>
              ))}
              <button onClick={toggleDarkMode} className={`p-2 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-sky-400' : 'text-gray-600 hover:text-sky-600'}`}>
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleDarkMode} className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isDarkMode ? 'text-slate-100' : 'text-gray-900'}>
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
            className={`md:hidden border-t ${isDarkMode ? 'border-white/10 bg-[#020617]' : 'border-gray-200 bg-white'}`}
          >
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 hover:text-sky-400 transition-colors ${isDarkMode ? 'text-slate-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {item.label}
              </button>
            ))}
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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">AI & Data Solutions</span>
              <br />
              That Work in the <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Real World</span>
            </h1>

            <p className={`text-xl md:text-2xl max-w-2xl mx-auto font-light ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Prioritizing Privacy, Performance, and Real-World Impact
            </p>

            <div className={`flex items-center justify-center gap-2 text-sm md:text-base ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
              <span>I'm <span className="text-sky-400 font-semibold">Prashant Jacob</span></span>
              <span className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-slate-600' : 'bg-gray-400'}`} />
              <span>Data Engineer & Applied AI Developer</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-8"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full text-white font-medium shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center mx-auto gap-2"
              >
                Explore My Solutions <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Bento Grid Layout Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {/* 1. About Me Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1 glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="relative w-32 h-32 rounded-full p-[2px] bg-gradient-to-br from-sky-400 to-blue-600">
                <div className={`w-full h-full rounded-full overflow-hidden border-4 ${isDarkMode ? 'border-[#020617] bg-slate-900' : 'border-white bg-white'}`}>
                  <img src="/images/custom_logo.png" alt="Profile" className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h3>
                <p className={`text-sm mt-2 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  I build privacy-focused tools and applied AI systems that solve actual problems.
                </p>
              </div>
            </motion.div>

            {/* 2. Privacy First / Core Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3 glass-panel rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield size={120} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Privacy-First Engineering</h3>
              <p className={`text-lg max-w-2xl leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                My work centers on intelligent systems that respect user data. I specialize in on-device processing and efficient data pipelines that reduce reliance on external clouds when possible.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="flex items-center gap-2 text-sm text-sky-400 bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/50">
                  <Shield size={14} /> Data Privacy
                </div>
                <div className="flex items-center gap-2 text-sm text-indigo-400 bg-indigo-950/30 px-3 py-1 rounded-full border border-indigo-900/50">
                  <Zap size={14} /> High Performance
                </div>
              </div>
            </motion.div>

            {/* 3. Skills Bento Grid */}
            <div className="md:col-span-4" id="skills">
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-colors group"
                  >
                    <tech.icon size={28} className={`group-hover:text-sky-400 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
                    <div className="text-center">
                      <div className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-gray-900'}`}>{tech.name}</div>
                      <div className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-600'}`}>{tech.category}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 4. Projects Section */}
            <div className="md:col-span-4 mt-8" id="projects">
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel rounded-2xl p-6 hover:border-sky-500/30 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-lg group-hover:transition-colors ${isDarkMode ? 'bg-slate-800 group-hover:bg-slate-700' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                        <project.icon size={24} className="text-sky-400" />
                      </div>
                      <a href={project.github} target="_blank" rel="noreferrer" className={`transition-colors ${isDarkMode ? 'text-slate-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                        <Github size={20} />
                      </a>
                    </div>

                    <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h4>
                    <p className={`text-sm mb-4 line-clamp-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className={`text-xs font-medium px-2 py-1 rounded ${isDarkMode ? 'text-slate-300 bg-slate-800/50' : 'text-gray-700 bg-gray-200'}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      {project.title === 'Transcript Extractor' ? (
                        <button
                          onClick={() => navigate('/transcript-extractor')}
                          className={`w-full py-2 hover:bg-sky-600 hover:text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-200 text-gray-700'}`}
                        >
                          <Eye size={16} /> View Details
                        </button>
                      ) : project.title === 'Client-Side LLM Preprocessor' ? (
                        <button
                          onClick={() => navigate('/llm-preprocessor')}
                          className={`w-full py-2 hover:bg-sky-600 hover:text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-200 text-gray-700'}`}
                        >
                          <Eye size={16} /> View Details
                        </button>
                      ) : (
                        project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className={`w-full py-2 hover:bg-sky-600 hover:text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 block text-center ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-200 text-gray-700'}`}
                          >
                            <Eye size={16} /> View Demo
                          </a>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 5. Blog Teaser Section */}
            <div className={`md:col-span-4 mt-12 rounded-3xl p-8 border ${isDarkMode ? 'bg-gradient-to-r from-indigo-900/10 to-purple-900/10 border-white/5' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-gray-200'}`} id="blog">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Blog & Notes</h3>
                  <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>Thoughts on Scraping, Engineering, and AI</p>
                </div>
                <button 
                  onClick={() => setShowAllPosts(!showAllPosts)}
                  className={`px-6 py-2 border rounded-full transition-colors text-sm ${isDarkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                >
                  {showAllPosts ? 'Show Less' : 'View All Posts'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  onClick={() => navigate('/blog/web-scraping-resilience')}
                  className="glass-card rounded-xl p-6 cursor-pointer group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-purple-400 mb-3 uppercase tracking-wider">
                    <Shield size={12} /> Web Scraping
                  </div>
                  <h4 className={`text-lg font-bold group-hover:text-purple-400 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    How I Stopped Panicking About Broken Scrapers
                  </h4>
                  <p className={`text-sm mt-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    A three-layer defense system for predictable extraction operations.
                  </p>
                </div>

                <div
                  onClick={() => navigate('/blog/chrome-web-store-review')}
                  className="glass-card rounded-xl p-6 cursor-pointer group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-green-400 mb-3 uppercase tracking-wider">
                    <Zap size={12} /> Chrome Extension
                  </div>
                  <h4 className={`text-lg font-bold group-hover:text-green-400 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    The Waiting Game: Handling Store Reviews
                  </h4>
                  <p className={`text-sm mt-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    How to optimize your extension for faster approval (under 48h).
                  </p>
                </div>

                {showAllPosts && (
                  <div
                    onClick={() => navigate('/blog/strategic-web-scraping')}
                    className="glass-card rounded-xl p-6 cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 text-xs font-medium text-orange-400 mb-3 uppercase tracking-wider">
                      <Target size={12} /> Web Scraping
                    </div>
                    <h4 className={`text-lg font-bold group-hover:text-orange-400 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Strategic Web Scraping: Choosing Approaches
                    </h4>
                    <p className={`text-sm mt-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      How to match the right approach to your target and test limits proactively.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 6. Footer / Check Me Out */}
            <div className="md:col-span-4 mt-8 flex flex-col items-center justify-center py-12 space-y-6" id="contact">
              <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ready to Collaborate?</h3>
              <div className="flex gap-4">
                <a href="mailto:jacobprashant20@gmail.com" className={`p-4 rounded-full text-white hover:bg-sky-600 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-gray-800'}`}>
                  <Mail size={24} />
                </a>
                <a href="https://github.com/pras-ops" target="_blank" rel="noreferrer" className={`p-4 rounded-full text-white hover:bg-gray-100 hover:text-black transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-gray-800'}`}>
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/prashant--j" target="_blank" rel="noreferrer" className={`p-4 rounded-full text-white hover:bg-blue-700 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-gray-800'}`}>
                  <Linkedin size={24} />
                </a>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>© 2024 Prashant Jacob. Built with React & Three.js.</p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;