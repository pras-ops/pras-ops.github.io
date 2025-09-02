"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Play, Download, CheckCircle, Zap, Shield, Copy, Moon, Sun, ExternalLink, FileText, Github, Chrome, Star, Users, Code, Globe, Lock, ArrowLeft } from "lucide-react";
import { useTheme } from "../settings/theme";

export default function TranscriptExtractorPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  
  // Debug logging
  console.log('TranscriptExtractorPage - Theme state:', { isDarkMode, documentClass: document.documentElement.classList.contains('dark') });
  
  // Ensure theme is applied when component mounts
  React.useEffect(() => {
    console.log('TranscriptExtractorPage - Component mounted, theme:', isDarkMode);
    console.log('Document class list:', document.documentElement.classList.toString());
    
    // Force apply theme to ensure consistency
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode-active');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode-active');
    }
  }, [isDarkMode]);
  
  const goBack = () => {
    navigate('/');
  };
  
  const features = [{
    icon: Zap,
    title: "One-Click Extraction",
    desc: "Instantly extract transcripts from any Udemy video"
  }, {
    icon: Shield,
    title: "Privacy First",
    desc: "All data stays on your device - no server processing"
  }, {
    icon: Copy,
    title: "Multiple Formats",
    desc: "Export as TXT, Markdown, JSON, or RAG format"
  }, {
    icon: Download,
    title: "Batch Processing",
    desc: "Collect transcripts from entire courses automatically"
  }, {
    icon: CheckCircle,
    title: "Progress Tracking",
    desc: "Real-time status with section-based counting"
  }, {
    icon: Globe,
    title: "Multi-Platform",
    desc: "Support for Udemy, Coursera, YouTube, and more"
  }] as any[];
  
  const techStack = [{
    name: "React 19",
    icon: "⚛️",
    desc: "Modern UI framework"
  }, {
    name: "TypeScript",
    icon: "🔷",
    desc: "Type-safe development"
  }, {
    name: "Chrome APIs",
    icon: "🔧",
    desc: "Manifest V3 compliant"
  }, {
    name: "Tailwind CSS",
    icon: "🎨",
    desc: "Responsive design"
  }] as any[];

  const stats = [{
    icon: Star,
    value: "4",
    label: "GitHub Stars"
  }, {
    icon: Users,
    value: "Beta",
    label: "Release Status"
  }, {
    icon: Code,
    value: "1.0.1",
    label: "Version"
  }, {
    icon: Globe,
    value: "1+",
    label: "Platforms Supported"
  }] as any[];
  
  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: isDarkMode ? '#111827' : '#ffffff',
        color: isDarkMode ? '#f9fafb' : '#111827'
      }}
    >
      {/* Theme Toggle */}
      <button 
        onClick={toggleDarkMode} 
        className="fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg border hover:shadow-xl transition-all duration-300"
        style={{
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          borderColor: isDarkMode ? '#4b5563' : '#e5e7eb'
        }}
      >
        {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
      </button>
      
      {/* Back Button */}
      <button 
        onClick={goBack}
        className="fixed top-6 left-6 z-50 p-3 rounded-full shadow-lg border hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        style={{
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          borderColor: isDarkMode ? '#4b5563' : '#e5e7eb'
        }}
      >
        <ArrowLeft className="w-5 h-5" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }} />
        <span className="text-sm font-medium" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>Back to Portfolio</span>
      </button>

      {/* Hero Section */}
      <section 
        className="relative py-20 px-6 transition-colors duration-300"
        style={{
          background: isDarkMode 
            ? 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #1e3a8a 100%)'
            : 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #e0e7ff 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300"
            style={{
              color: isDarkMode ? '#f9fafb' : '#111827'
            }}
          >
            <span>Transcript</span>
            <span className="text-blue-600"> Extractor</span>
            <div 
              className="text-2xl md:text-3xl font-normal mt-2 transition-colors duration-300"
              style={{
                color: isDarkMode ? '#d1d5db' : '#4b5563'
              }}
            >
              <span>Chrome Extension</span>
            </div>
          </h1>
          
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto transition-colors duration-300"
            style={{
              color: isDarkMode ? '#d1d5db' : '#4b5563'
            }}
          >
            <span>Currently Supporting Udemy - Expanding to More Platforms Soon</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://chromewebstore.google.com/detail/transcript-extractor/fjohldgflidaghednclaijiafmchlnbh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Chrome className="w-5 h-5 mr-2" />
              <span>Add to Chrome</span>
            </a>
            <a 
              href="https://github.com/pras-ops/udemy-transcript-extractor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-3">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">Project Overview</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            <span>A powerful Chrome extension that currently extracts transcripts from Udemy, with plans to support Coursera, YouTube, edX, and more educational platforms. Perfect for students, educators, and creators who want to save time and work smarter with educational content.</span>
          </p>

          {/* How It Works */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Open Course Video</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Navigate to any Udemy course video</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Click Extension Icon</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Choose single video or batch mode</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Extract & Export</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Watch transcripts extract automatically</p>
              </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">Technical Stack</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map(tech => (
              <div key={tech.name} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">Platform Support</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Udemy</h3>
              <p className="text-gray-600 dark:text-gray-300">Currently Supported - Full transcript extraction + batch processing</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Coursera</h3>
              <p className="text-gray-600 dark:text-gray-300">Coming Soon - Full transcript support</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">YouTube</h3>
              <p className="text-gray-600 dark:text-gray-300">Coming Soon - Educational video support</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">edX</h3>
                <p className="text-gray-600 dark:text-gray-300">Coming Soon - Course transcript extraction</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              More platforms will be added based on user demand and technical feasibility
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">Why Choose Transcript Extractor?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">For Students</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Save time making notes & summaries</li>
                <li>• Use AI to create study materials</li>
                <li>• Better understanding with AI explanations</li>
                <li>• Focus on learning, not transcription</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">For Educators</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Create accessible resources</li>
                <li>• Use AI to generate additional materials</li>
                <li>• Content analysis and optimization</li>
                <li>• Improve student engagement</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">For Content Creators</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Repurpose educational content</li>
                <li>• AI-assisted writing and expansion</li>
                <li>• SEO optimization with transcripts</li>
                <li>• Create blog posts and articles</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">For Researchers</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Collect transcripts for analysis</li>
                <li>• AI-powered content insights</li>
                <li>• Batch processing capabilities</li>
                <li>• Multiple export formats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join students and educators who are already saving time with Transcript Extractor on Udemy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chromewebstore.google.com/detail/transcript-extractor/fjohldgflidaghednclaijiafmchlnbh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <Chrome className="w-5 h-5 mr-2" />
              <span>Install Extension</span>
            </a>
            <a 
              href="https://github.com/pras-ops/udemy-transcript-extractor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
