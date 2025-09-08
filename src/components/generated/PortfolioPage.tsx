"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Menu, X, ChevronDown, Code, Database, BarChart3, Brain, Award, Briefcase, GraduationCap, Sparkles, ArrowRight, Download, Eye, Sun, Moon, FileText, BookOpen, Zap, Shield, Copy, Play, CheckCircle, Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../settings/theme';

const PortfolioPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
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
    toggleDarkMode();
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
    title: 'Transcript Extractor',
    description: 'Chrome Extension - Currently supporting Udemy with plans to expand to Coursera, YouTube, edX, and more educational platforms. Automating transcript collection with privacy & practicality.',
    demo: 'https://chromewebstore.google.com/detail/transcript-extractor/fjohldgflidaghednclaijiafmchlnbh',
    github: 'https://github.com/pras-ops/udemy-transcript-extractor',
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
  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-gray-800/30 via-gray-900 to-gray-800/50' : 'bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30'}`} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwNzhENCIgZmlsbC1vcGFjaXR5PSIwLjAyIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPgo8L2c+CjwvZz4KPHN2Zz4=')] opacity-30" />
      </div>

      {/* Navigation Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Navigation */}
        <nav className={`w-full backdrop-blur-xl border-b transition-all duration-300 ${isDarkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/90 border-gray-200/60'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="flex items-center flex-shrink-0">
                             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-sm">
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
            <div className="md:hidden flex items-center space-x-1 flex-shrink-0">
              <button onClick={toggleTheme} className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'}`}>
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
              <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>Building AI & Data Solutions</span>
              <br />
              <span className="text-blue-600">That Work in the Real World</span>
            </h1>
            
            {/* Clarifier - Medium - Improved contrast for light mode */}
            <p className={`text-xl sm:text-2xl lg:text-3xl font-medium mb-8 max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Prioritizing Privacy, Performance, and Real-World Impact
            </p>
            
            {/* Identity - Smaller, Supporting - Better contrast */}
            <div className={`text-lg sm:text-xl lg:text-2xl font-medium mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
        }} className={isDarkMode ? 'text-gray-500' : 'text-gray-500'}>
          <ChevronDown size={24} />
        </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
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
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                About Me
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I am a developer and engineer who builds practical, privacy-focused tools that solve real-world problems. My passion lies in creating technology that is both powerful and ethical, with a strong belief that users should remain in control of their data and their digital experiences.
                </p>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  My work is centered on applied AI and open-source development. I specialize in building systems that leverage machine learning intelligently, often prioritizing on-device processing over cloud-based solutions to ensure user privacy, reduce latency, and create seamless offline experiences.
                </p>
                

              </div>

              <div className={`rounded-2xl p-8 shadow-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-xl'}`}>
                <h3 className={`text-2xl font-semibold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Core Competencies</h3>
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
      <section id="projects" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
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
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                        <p className={`text-lg mt-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                  <div className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-400' : 'bg-white border-gray-200 hover:border-blue-300'}`}>
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
                      <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {project.title}
                      </h3>
                      <p className={`mb-4 leading-relaxed text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                                                 {project.title === 'Transcript Extractor' ? (
                           <>
                             <button 
                               onClick={() => navigate('/transcript-extractor')}
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
      <section id="skills" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
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
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
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
                  <div className={`rounded-xl p-6 border transition-all duration-300 text-center shadow-lg hover:shadow-xl ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-400' : 'bg-white border-gray-200 hover:border-blue-300'}`}>
                    <tech.icon size={32} className="text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{tech.name}</h3>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tech.category}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificates" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
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
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
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
                  <div className={`rounded-xl p-6 border transition-all duration-300 text-center shadow-lg hover:shadow-xl ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-400' : 'bg-white border-gray-200 hover:border-blue-300'}`}>
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
      <section id="blog" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
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
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Blog & Notes
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
              <p className={`text-lg mt-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Insights, tutorials, and thoughts on development, Chrome extensions, web scraping, and industry trends.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                             {/* Chrome Web Store Review Article */}
               <motion.article 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className={`rounded-xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                   isDarkMode 
                     ? 'bg-gray-800 border-gray-700 hover:border-blue-400' 
                     : 'bg-white border-gray-200 hover:border-blue-300'
                 }`}
               >
                 <div className="flex items-center gap-2 mb-4">
                   <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                     isDarkMode 
                       ? 'bg-blue-900/30 text-blue-300 border border-blue-700' 
                       : 'bg-blue-100 text-blue-700 border border-blue-200'
                   }`}>
                     Chrome Extensions
                   </span>
                   <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                     isDarkMode 
                       ? 'bg-green-900/30 text-green-300 border border-green-700' 
                       : 'bg-green-100 text-green-700 border border-green-200'
                   }`}>
                     Development Tips
                   </span>
                 </div>
                 
                 <h3 className={`text-lg font-bold mb-3 line-clamp-2 ${
                   isDarkMode ? 'text-white' : 'text-gray-800'
                 }`}>
                   The Waiting Game — How to Handle Chrome Web Store Review Limbo (and Maybe Speed It Up)
                 </h3>
                 
                 <p className={`text-sm mb-4 line-clamp-3 ${
                   isDarkMode ? 'text-gray-300' : 'text-gray-700'
                 }`}>
                   Learn how to optimize your Chrome extension architecture for faster approval. 
                   My extension was approved in under 48 hours using these strategies.
                 </p>
                 
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center space-x-4 text-xs text-gray-500">
                     <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                     <span>•</span>
                     <span>5 min read</span>
                   </div>
                   <Zap className={`w-4 h-4 ${
                     isDarkMode ? 'text-blue-400' : 'text-blue-600'
                   }`} />
                 </div>
                 
                 <motion.button
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => navigate('/blog/chrome-web-store-review')}
                   className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                     isDarkMode
                       ? 'bg-blue-600 hover:bg-blue-700 text-white'
                       : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                   }`}
                 >
                   Read Full Article
                 </motion.button>
               </motion.article>

               {/* Web Scraping Resilience Article */}
               <motion.article 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className={`rounded-xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                   isDarkMode 
                     ? 'bg-gray-800 border-gray-700 hover:border-blue-400' 
                     : 'bg-white border-gray-200 hover:border-blue-300'
                 }`}
               >
                 <div className="flex items-center gap-2 mb-4">
                   <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                     isDarkMode 
                       ? 'bg-purple-900/30 text-purple-300 border border-purple-700' 
                       : 'bg-purple-100 text-purple-700 border border-purple-200'
                   }`}>
                     Web Scraping
                   </span>
                   <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                     isDarkMode 
                       ? 'bg-orange-900/30 text-orange-300 border border-orange-700' 
                       : 'bg-orange-100 text-orange-700 border border-orange-200'
                   }`}>
                     System Design
                   </span>
                 </div>
                 
                 <h3 className={`text-lg font-bold mb-3 line-clamp-2 ${
                   isDarkMode ? 'text-white' : 'text-gray-800'
                 }`}>
                   How I Stopped Panicking About Broken Web Scrapers and Started Sleeping Through the Night
                 </h3>
                 
                 <p className={`text-sm mb-4 line-clamp-3 ${
                   isDarkMode ? 'text-gray-300' : 'text-gray-700'
                 }`}>
                   Learn the three-layer defense system that transformed my web scraping from constant firefighting 
                   to predictable operations. No more 2 AM debugging sessions.
                 </p>
                 
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center space-x-4 text-xs text-gray-500">
                     <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                     <span>•</span>
                     <span>8 min read</span>
                   </div>
                   <Shield className={`w-4 h-4 ${
                     isDarkMode ? 'text-purple-400' : 'text-purple-600'
                   }`} />
                 </div>
                 
                 <motion.button
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => navigate('/blog/web-scraping-resilience')}
                   className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                     isDarkMode
                       ? 'bg-purple-600 hover:bg-purple-700 text-white'
                       : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
                   }`}
                 >
                   Read Full Article
                 </motion.button>
               </motion.article>

              {/* Strategic Web Scraping Article */}
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`rounded-xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-green-400' 
                    : 'bg-white border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    isDarkMode 
                      ? 'bg-purple-900/30 text-purple-300 border border-purple-700' 
                      : 'bg-purple-100 text-purple-700 border border-purple-200'
                  }`}>
                    Web Scraping
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    isDarkMode 
                      ? 'bg-green-900/30 text-green-300 border border-green-700' 
                      : 'bg-green-100 text-green-700 border border-green-200'
                  }`}>
                    Strategy
                  </span>
                </div>
                
                <h3 className={`text-lg font-bold mb-3 line-clamp-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Strategic Web Scraping: Choosing Approaches and Testing Limits
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  After losing three LinkedIn accounts to aggressive backend automation, I learned that successful web scraping isn't about technical prowess alone—it's about strategic thinking and proactive testing.
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>May 22</span>
                    <span>•</span>
                    <span>8 min read</span>
                  </div>
                  <Target className={`w-4 h-4 ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`} />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/blog/strategic-web-scraping')}
                  className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDarkMode
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-green-100 hover:bg-green-200 text-green-700'
                  }`}
                >
                  Read Full Article
                </motion.button>
              </motion.article>

              {/* Another Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`rounded-xl p-6 border-2 border-dashed transition-all duration-300 hover:border-blue-400 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-600 hover:bg-gray-800' 
                    : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                }`}
              >
                <div className="text-center py-8">
                  <Sparkles size={32} className={`mx-auto mb-4 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Stay Tuned
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    More content is in the works
                  </p>
                </div>
              </motion.div>
              </div>

            {/* View All Blog Posts Button */}
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                }`}
              >
                <BookOpen size={16} className="mr-2" />
                View All Blog Posts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
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
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Let's Connect
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
              <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
          }} className={`rounded-2xl p-8 border shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-xl'}`}>
              <FileText size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Download Resume</h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
      <footer className={`relative py-8 px-4 sm:px-6 lg:px-8 border-t ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                © 2024 Prashant Jacob. Crafted with passion for data and precision.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/pras-ops" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'}`}>
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/prashant--j" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'}`}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:jacobprashant20@gmail.com" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'}`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;