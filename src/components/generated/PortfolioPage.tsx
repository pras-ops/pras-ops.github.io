"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Menu, X, ChevronDown, Code, Database, BarChart3, Brain, Award, Briefcase, GraduationCap, Sparkles, ArrowRight, Download, Eye, Sun, Moon, FileText, BookOpen, Zap, Shield, Copy, Play, CheckCircle } from 'lucide-react';
const PortfolioPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showTranscriptModal, setShowTranscriptModal] = useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const navItems = [{
    id: 'about',
    label: 'About Me'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'skills',
    label: 'Skills'
  }, {
    id: 'certificates',
    label: 'Certifications'
  }, {
    id: 'blog',
    label: 'Blog/Notes'
  }, {
    id: 'contact',
    label: 'Contact'
  }] as any[];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  // Initialize theme on component mount
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme = isDarkMode;
    
    if (savedTheme) {
      initialTheme = savedTheme === 'dark';
    } else {
      initialTheme = prefersDark;
    }
    
    setIsDarkMode(initialTheme);
    
    // Apply theme to document
    if (initialTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'certificates', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
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
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save theme preference
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Apply theme to document
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  const technologies = [{
    name: 'Python',
    icon: Code,
    category: 'Programming'
  }, {
    name: 'SQL',
    icon: Database,
    category: 'Database'
  }, {
    name: 'Tableau',
    icon: BarChart3,
    category: 'Visualization'
  }, {
    name: 'Power BI',
    icon: BarChart3,
    category: 'Visualization'
  }, {
    name: 'Excel',
    icon: BarChart3,
    category: 'Analysis'
  }, {
    name: 'NoSQL',
    icon: Database,
    category: 'Database'
  }, {
    name: 'Matlab',
    icon: Brain,
    category: 'Analysis'
  }, {
    name: 'Informatica',
    icon: Database,
    category: 'ETL'
  }, {
    name: 'Alteryx',
    icon: Code,
    category: 'ETL'
  }, {
    name: 'HTML',
    icon: Code,
    category: 'Web'
  }] as any[];
  const projects = [{
    title: 'Transcript Extractor Suite',
    description: 'A fully functional Chrome extension that extracts and manages course transcripts from Udemy (future support for Coursera, YouTube, and more). Built with React, TypeScript, and Chrome APIs.',
    demo: '#',
    github: 'https://github.com/pras-ops/transcript-extractor-suite',
    tech: ['React', 'TypeScript', 'Chrome APIs', 'JavaScript'],
    category: 'Chrome Extension'
  }, {
    title: 'Financial Complaint KPI Dashboard',
    description: 'Interactive Tableau dashboard analyzing financial complaints by state, issue type, and resolution metrics with focus on disputed rates and cost-free resolutions.',
    demo: 'https://public.tableau.com/app/profile/prashant.jacob/viz/FinancialComplaintsDashboardRWFD_16645087186720/Dashboard',
    github: 'https://github.com/pras-ops/Financial-Complaints-Dashboard-Tableau',
    tech: ['Tableau', 'Data Visualization', 'KPI Analysis'],
    category: 'Dashboard'
  }, {
    title: 'Retail Sales KPI Dashboard',
    description: 'Comprehensive sales analytics dashboard revealing hidden patterns in retail data to drive strategic business decisions and optimize sales performance.',
    demo: 'https://public.tableau.com/app/profile/prashant.jacob/viz/RetailSalesKPIDashboard_16669251454040/RetailSalesDashboard?publish=yes',
    github: 'https://github.com/pras-ops/Retail-Sales-KPI-Dashboard-Tableau-',
    tech: ['Tableau', 'Sales Analytics', 'Business Intelligence'],
    category: 'Dashboard'
  }] as any[];
  const certificates = ['IIIT Pune - Cloud Computing Program', 'IIIT Pune - Soft Computing with MATLAB', 'IIIT Pune - Digital System Design', 'IIT Bhilai - Digital Electronics & FPGA'];
  const blogPosts = [{
    title: 'Data Visualization Best Practices',
    excerpt: 'Essential principles for creating impactful dashboards that drive business decisions.',
    date: '2024-01-15',
    readTime: '5 min read'
  }, {
    title: 'SQL Optimization Techniques',
    excerpt: 'Advanced strategies for improving query performance in large datasets.',
    date: '2024-01-10',
    readTime: '8 min read'
  }, {
    title: 'Machine Learning in Business Analytics',
    excerpt: 'Practical applications of ML algorithms in solving real-world business problems.',
    date: '2024-01-05',
    readTime: '12 min read'
  }] as any[];
  const themeClasses = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const cardClasses = isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-400' : 'bg-white border-gray-200 hover:border-blue-300';
  return <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-gray-800/30 via-gray-900 to-gray-800/50' : 'bg-gradient-to-br from-blue-50/30 via-white to-gray-50/50'}`} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwNzhENCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPgo8L2c+CjwvZz4KPHN2Zz4=')] opacity-40" />
      </div>

      {/* Navigation Container with Hover */}
      <div className="fixed top-0 left-0 right-0 z-50 group">
        {/* Top hover area for navigation */}
        <div className="absolute top-0 left-0 right-0 h-8 z-40">
          <div className="h-full w-full"></div>
        </div>

        {/* Navigation */}
        <nav className={`w-full backdrop-blur-xl border-b transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible ${isDarkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'}`}>
        {/* Hover trigger area */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-transparent group-hover:h-0 transition-all duration-300"></div>
        
        {/* Subtle indicator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600/30 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Always visible subtle indicator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600/20 rounded-b-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="flex items-center">
                             <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-sm">
                 <img 
                   src="/images/prashant-jacob-logo.jpeg" 
                   alt="Prashant Jacob Logo" 
                   className="w-full h-full object-cover"
                 />
               </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${activeSection === item.id ? 'text-blue-600' : isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.label}
                  {activeSection === item.id && <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600" />}
                </button>)}
              
              {/* Theme Toggle */}
              <button onClick={toggleTheme} className={`p-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleTheme} className={`p-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className={`p-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} className={`md:hidden py-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`block w-full text-left px-4 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}>
                  {item.label}
                </button>)}
            </motion.div>}
        </div>
      </nav>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 1,
            delay: 0.2
          }} className="mb-8">
                             <div className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                 <img 
                   src="/images/prashant-jacob-logo.jpeg" 
                   alt="Prashant Jacob Logo" 
                   className="w-full h-full object-cover"
                 />
               </div>
            </motion.div>
            
            {/* Main Hook - Biggest */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Building AI & Data Solutions</span>
              <br />
              <span className="text-blue-600">That Work in the Real World</span>
            </h1>
            
            {/* Clarifier - Medium */}
            <p className={`text-xl sm:text-2xl lg:text-3xl font-medium mb-8 max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Prioritizing Privacy, Performance, and Real-World Impact
            </p>
            
            {/* Identity - Smaller, Supporting */}
            <div className={`text-lg sm:text-xl lg:text-2xl font-medium mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              I'm <span className="text-blue-600 font-semibold">Prashant Jacob</span> — Data Engineer & Applied AI Developer
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} onClick={() => scrollToSection('projects')} className="group px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{
                  scale: 1.05
                }} 
                whileTap={{
                  scale: 0.95
                }} 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Prashant-Jacob-Resume.pdf';
                  link.download = 'Prashant-Jacob-Resume.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className={`px-8 py-4 border-2 rounded-full font-medium transition-all duration-300 flex items-center ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'}`}>
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
          <ChevronDown size={24} />
        </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                About Me
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I am a developer and engineer who builds practical, privacy-focused tools that solve real-world problems. My passion lies in creating technology that is both powerful and ethical, with a strong belief that users should remain in control of their data and their digital experiences.
                </p>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  My work is centered on applied AI and open-source development. I specialize in building systems that leverage machine learning intelligently, often prioritizing on-device processing over cloud-based solutions to ensure user privacy, reduce latency, and create seamless offline experiences.
                </p>
                

              </div>

              <div className={`rounded-2xl p-8 shadow-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                <h3 className={`text-2xl font-semibold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Core Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className={`rounded-lg p-4 border-l-4 border-blue-500 ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                      <h4 className={`font-semibold mb-2 flex items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        <Code className="w-5 h-5 mr-2 text-blue-600" />
                        Languages
                      </h4>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Kotlin, Python, JavaScript, SQL, Java</p>
                    </div>
                    
                    <div className={`rounded-lg p-4 border-l-4 border-green-500 ${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                      <h4 className={`font-semibold mb-2 flex items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        <Database className="w-5 h-5 mr-2 text-green-600" />
                        Mobile
                      </h4>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Android (Jetpack Compose), TensorFlow Lite</p>
                    </div>
                    
                    <div className={`rounded-lg p-4 border-l-4 border-purple-500 ${isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                      <h4 className={`font-semibold mb-2 flex items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                        Web
                      </h4>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>React, Chrome Extensions API, Node.js</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className={`rounded-lg p-4 border-l-4 border-orange-500 ${isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                      <h4 className={`font-semibold mb-2 flex items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        <Brain className="w-5 h-5 mr-2 text-orange-600" />
                        Data & Cloud
                      </h4>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>AWS, GCP, Tableau, Power BI, Looker, Alteryx</p>
                    </div>
                    
                    <div className={`rounded-lg p-4 border-l-4 border-indigo-500 ${isDarkMode ? 'bg-indigo-900/20' : 'bg-indigo-50'}`}>
                      <h4 className={`font-semibold mb-2 flex items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        <Briefcase className="w-5 h-5 mr-2 text-indigo-600" />
                        DevOps & Tools
                      </h4>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Git, Docker, CI/CD, Apache Airflow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
              <p className={`text-lg mt-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                A showcase of data-driven solutions that demonstrate my expertise in analytics, 
                visualization, and business intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} whileHover={{
              y: -5
            }} className="group relative">
                  <div className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-400' : 'bg-white border-gray-200 hover:border-blue-300'}`}>
                    {/* Project Header */}
                    <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                      <BarChart3 size={64} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`mb-4 leading-relaxed text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => <span key={i} className={`px-2 py-1 rounded-md text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                            {tech}
                          </span>)}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        {project.title === 'Transcript Extractor Suite' ? (
                          <>
                            <button 
                              onClick={() => setShowTranscriptModal(true)}
                              className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium"
                            >
                              <Eye size={16} className="mr-2" />
                              View Details
                            </button>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium border ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 border-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'}`}>
                              <Github size={16} className="mr-2" />
                              Code
                            </a>
                          </>
                        ) : (
                          <>
                            {project.demo && project.demo !== '#' && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium">
                                <Eye size={16} className="mr-2" />
                                Live Demo
                              </a>}
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium border ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 border-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'}`}>
                              <Github size={16} className="mr-2" />
                              Code
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Skills & Technologies
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => <motion.div key={tech.name} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} whileHover={{
              scale: 1.05,
              y: -5
            }} className="group relative">
                  <div className={`rounded-xl p-6 border transition-all duration-300 text-center shadow-sm hover:shadow-md ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-400' : 'bg-white border-gray-200 hover:border-blue-300'}`}>
                    <tech.icon size={32} className="text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{tech.name}</h3>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{tech.category}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificates" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Certifications
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} whileHover={{
              scale: 1.02,
              y: -3
            }} className="group relative">
                  <div className={`rounded-xl p-6 border transition-all duration-300 text-center shadow-sm hover:shadow-md ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-400' : 'bg-white border-gray-200 hover:border-blue-300'}`}>
                    <Award className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className={`font-medium leading-relaxed text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {cert}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog/Notes Section */}
      <section id="blog" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Blog & Notes
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
              <p className={`text-lg mt-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Insights, tutorials, and thoughts on data analytics, visualization, and industry trends.
              </p>
            </div>

            {/* Blog posts temporarily hidden */}
            <div className="text-center py-12">
              <div className={`rounded-2xl p-8 border-2 border-dashed ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-gray-50 border-gray-300'}`}>
                <BookOpen size={48} className={`mx-auto mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Blog & Notes Coming Soon</p>
                <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Insights and tutorials will be published here soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="mb-16">
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's Connect
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
              <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My inbox is always open. Whether you have a question, want to discuss a project, 
                or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <motion.a whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} href="mailto:jacobprashant20@gmail.com" className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                <Mail size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                Send Message
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} href="https://github.com/pras-ops" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 font-medium border-2 ${isDarkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 border-gray-600 hover:border-blue-400' : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-blue-600'}`}>
                <Github size={20} className="mr-3" />
                GitHub
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} href="https://linkedin.com/in/prashant--j" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 font-medium border-2 ${isDarkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 border-gray-600 hover:border-blue-400' : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-blue-600'}`}>
                <Linkedin size={20} className="mr-3" />
                LinkedIn
              </motion.a>
            </div>

            {/* Resume Download */}
            <motion.div whileHover={{
            scale: 1.02
          }} className={`rounded-2xl p-8 border shadow-sm ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <FileText size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Download Resume</h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Get a comprehensive overview of my experience, skills, and achievements.
              </p>
              <motion.button 
                whileHover={{
                  scale: 1.05
                }} 
                whileTap={{
                  scale: 0.95
                }} 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Prashant-Jacob-Resume.pdf';
                  link.download = 'Prashant-Jacob-Resume.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium">
                <Download size={20} className="mr-2" />
                Download PDF
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-8 px-4 sm:px-6 lg:px-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                © 2024 Prashant Jacob. Crafted with passion for data and precision.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/pras-ops" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-400 hover:text-blue-600'}`}>
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/prashant--j" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-400 hover:text-blue-600'}`}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:jacobprashant20@gmail.com" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-400 hover:text-blue-600'}`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Transcript Extractor Modal */}
      {showTranscriptModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              onClick={() => setShowTranscriptModal(false)}
            />
            
            {/* Modal content */}
            <div className="inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={() => setShowTranscriptModal(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                {/* Modal content - Transcript Extractor Landing Page */}
                <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                  {/* Theme Toggle */}
                  <button onClick={toggleTheme} className="fixed top-6 right-16 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
                  </button>

                  {/* Hero Section */}
                  <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
                    <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        <span>Transcript</span>
                        <span className="text-blue-600"> Extractor</span>
                        <div className="text-2xl md:text-3xl font-normal mt-2 text-gray-600 dark:text-gray-300">
                          <span>Chrome Extension</span>
                        </div>
                      </h1>
                      
                      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        <span>Automating Transcript Collection with Privacy & Practicality</span>
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                          <Play className="w-5 h-5 mr-2" />
                          <span>View Demo</span>
                        </button>
                        <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold opacity-75 cursor-not-allowed">
                          <Download className="w-5 h-5 mr-2" />
                          <span>Download Extension</span>
                          <span className="ml-2 text-sm opacity-60">(Coming Soon)</span>
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* Project Overview */}
                  <section className="py-16 px-6 bg-white dark:bg-gray-900">
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl font-bold text-center mb-8">
                        <span className="text-blue-600">Project Overview</span>
                      </h2>
                      
                      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                        <span>A fully functional Chrome extension that extracts and manages course transcripts from Udemy (future support for Coursera, YouTube, and more). Built with React, TypeScript, and Chrome APIs.</span>
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
                          <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            <span>100%</span>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            <span>Core Functionality Complete</span>
                          </p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center">
                          <FileText className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            <span>17</span>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            <span>Learning Docs Created</span>
                          </p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center">
                          <Zap className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            <span>V3</span>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            <span>Production Ready (Manifest V3)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Key Features */}
                  <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="text-blue-600">Key Features</span>
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                            <Zap className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            <span>Instant Extraction</span>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            <span>Extract transcripts in real-time with a single click</span>
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                            <Shield className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            <span>Privacy First</span>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            <span>All processing happens locally in your browser</span>
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                            <Copy className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            <span>Multiple Formats</span>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            <span>Export as TXT, JSON, or CSV files</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Technical Stack */}
                  <section className="py-16 px-6 bg-white dark:bg-gray-900">
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="text-blue-600">Technical Stack</span>
                      </h2>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                          <div className="text-3xl mb-3">🟨</div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            <span>JavaScript</span>
                          </h3>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                          <div className="text-3xl mb-3">🔧</div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            <span>Chrome APIs</span>
                          </h3>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                          <div className="text-3xl mb-3">🌐</div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            <span>HTML5</span>
                          </h3>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                          <div className="text-3xl mb-3">🎨</div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            <span>CSS3</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Current Status */}
                  <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="text-blue-600">Current Status & Next Steps</span>
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 bg-white dark:bg-gray-700 rounded-lg p-4">
                          <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            <span>Fully functional & production-ready</span>
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 bg-white dark:bg-gray-700 rounded-lg p-4">
                          <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            <span>Next: UI polishing, more docs, user testing, new platform support</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* CTA */}
                  <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-3xl font-bold mb-4">
                        <span>Want to see how it works?</span>
                      </h2>
                      <p className="text-xl mb-8 text-blue-100">
                        <span>Discover other projects and get in touch to discuss opportunities.</span>
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          <span>View My Work</span>
                        </button>
                        <button 
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/Prashant-Jacob-Resume.pdf';
                            link.download = 'Prashant-Jacob-Resume.pdf';
                            link.target = '_blank';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                          className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                          <FileText className="w-5 h-5 mr-2" />
                          <span>Download Resume</span>
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>;
};
export default PortfolioPage;