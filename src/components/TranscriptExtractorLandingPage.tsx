"use client";

import * as React from "react";
import { useState } from "react";
import { Play, Download, CheckCircle, Zap, Shield, Copy, Moon, Sun, ExternalLink, FileText } from "lucide-react";

export interface TranscriptExtractorLandingPageProps {
  className?: string;
}

export default function TranscriptExtractorLandingPage({
  className = ""
}: TranscriptExtractorLandingPageProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  const features = [{
    icon: Zap,
    title: "Instant Extraction",
    desc: "Extract transcripts in real-time with a single click"
  }, {
    icon: Shield,
    title: "Privacy First",
    desc: "All processing happens locally in your browser"
  }, {
    icon: Copy,
    title: "Multiple Formats",
    desc: "Export as TXT, JSON, or CSV files"
  }] as any[];
  
  const techStack = [{
    name: "JavaScript",
    icon: "🟨"
  }, {
    name: "Chrome APIs",
    icon: "🔧"
  }, {
    name: "HTML5",
    icon: "🌐"
  }, {
    name: "CSS3",
    icon: "🎨"
  }] as any[];
  
  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${className}`}>
      {/* Theme Toggle */}
      <button onClick={toggleDarkMode} className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
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
            {features.map(feature => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    <span>{feature.title}</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span>{feature.desc}</span>
                  </p>
                </div>
              );
            })}
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
            {techStack.map(tech => (
              <div key={tech.name} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  <span>{tech.name}</span>
                </h3>
              </div>
            ))}
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
  );
}
