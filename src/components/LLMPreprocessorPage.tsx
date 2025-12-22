"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Brain, Zap, Shield, Lock, DollarSign, Code, Moon, Sun, ExternalLink, Github, Package, Star, Users, Globe, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";
import { useTheme } from "../settings/theme";

export default function LLMPreprocessorPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate('/');
  };
  
  const features = [{
    icon: Zap,
    title: "Rule-Based Cleaning",
    desc: "Instant text cleaning - remove HTML, normalize whitespace, strip URLs. No model, no GPU, no waiting."
  }, {
    icon: Brain,
    title: "Optional Local LLM",
    desc: "WebGPU-powered semantic extraction and structured data parsing - runs entirely in the browser"
  }, {
    icon: Shield,
    title: "Privacy-First",
    desc: "No servers, no API keys. All processing happens locally - data never leaves your device"
  }, {
    icon: DollarSign,
    title: "Token Reduction",
    desc: "Reduce LLM API costs by cleaning and structuring text before sending to paid APIs"
  }, {
    icon: Lock,
    title: "Modular Design",
    desc: "LLM is optional. Rules and AI are separate. Everything is explicit and opt-in"
  }, {
    icon: Code,
    title: "Developer-Friendly",
    desc: "JavaScript SDK designed for developers exploring browser-side AI and cost-efficient pipelines"
  }] as any[];
  
  const techStack = [{
    name: "JavaScript",
    icon: "📜",
    desc: "Core SDK language"
  }, {
    name: "WebGPU",
    icon: "⚡",
    desc: "GPU acceleration"
  }, {
    name: "Local LLM",
    icon: "🧠",
    desc: "Browser inference"
  }, {
    name: "NPM Package",
    icon: "📦",
    desc: "Easy integration"
  }] as any[];

  const stats = [{
    icon: Package,
    value: "NPM",
    label: "Package"
  }, {
    icon: AlertTriangle,
    value: "Beta",
    label: "Status"
  }, {
    icon: Code,
    value: "SDK",
    label: "Type"
  }, {
    icon: Globe,
    value: "Browser",
    label: "Platform"
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
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 sm:p-3 rounded-full shadow-lg border hover:shadow-xl transition-all duration-300"
        style={{
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          borderColor: isDarkMode ? '#4b5563' : '#e5e7eb'
        }}
      >
        {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
      </button>
      
      {/* Back Button */}
      <button 
        onClick={goBack}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 p-2 sm:p-3 rounded-full shadow-lg border hover:shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2"
        style={{
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          borderColor: isDarkMode ? '#4b5563' : '#e5e7eb'
        }}
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }} />
        <span className="text-xs sm:text-sm font-medium hidden sm:inline" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>Back to Portfolio</span>
      </button>

      {/* Hero Section */}
      <section 
        className="relative py-20 transition-colors duration-300"
        style={{
          background: isDarkMode 
            ? 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #1e3a8a 100%)'
            : 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #e0e7ff 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300"
            style={{
              color: isDarkMode ? '#f9fafb' : '#111827'
            }}
          >
            <span>Client-Side</span>
            <span className="text-blue-600"> LLM Preprocessor</span>
            <div 
              className="text-2xl md:text-3xl font-normal mt-2 transition-colors duration-300"
              style={{
                color: isDarkMode ? '#d1d5db' : '#4b5563'
              }}
            >
              <span>🛡️ Reduce Token Costs, Keep Data Private</span>
            </div>
          </h1>
          
          <p 
            className="text-xl mb-8 max-w-3xl mx-auto transition-colors duration-300"
            style={{
              color: isDarkMode ? '#d1d5db' : '#4b5563'
            }}
          >
            JavaScript SDK that performs text preprocessing directly in the browser. Clean and structure text locally before sending to paid LLM APIs — reducing costs and keeping user data private.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://www.npmjs.com/package/client-llm-preprocessor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Package className="w-5 h-5 mr-2" />
              <span>View on NPM</span>
            </a>
            <a 
              href="https://github.com/pras-ops/Local_processing_llm"
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
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">What Is This?</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Client-Side LLM Preprocessor is an experimental JavaScript SDK that performs text preprocessing directly in the browser, combining fast rule-based cleaning (no AI, instant) with optional local LLM inference (WebGPU) for semantic extraction. The goal is simple: reduce noisy input and token costs before sending text to paid LLM APIs, while keeping user data private.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
            <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
              <strong>Note:</strong> This project is not a replacement for cloud LLMs — it's designed to work <em>before</em> them.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">Why This Exists</span>
          </h2>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p className="text-lg">
              While working on projects that relied heavily on LLM APIs, a recurring issue became obvious:
            </p>
            
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Large amounts of input text were noisy or redundant (HTML, logs, duplicated content, messy user input)</li>
              <li>That noise translated directly into higher token usage</li>
              <li>Costs added up quickly, even when the actual task was simple</li>
            </ul>

            <p className="text-lg mt-6">
              Instead of sending raw text straight to an API, this project explores a different approach:
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mt-4">
              <p className="text-lg font-semibold text-gray-900 dark:text-white italic">
                "What if preprocessing happened locally, on the user's device, before any API call?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Idea */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">Core Idea</span>
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">1. Clean and normalize text locally</h3>
              <p className="text-gray-600 dark:text-gray-300">Fast, deterministic, no model required</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">2. Optionally use a small local LLM</h3>
              <p className="text-gray-600 dark:text-gray-300">For semantic tasks like structured extraction</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">3. Send only cleaned, reduced, relevant text</h3>
              <p className="text-gray-600 dark:text-gray-300">To external LLM APIs</p>
            </div>
          </div>

          <div className="mt-8 bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">This reduces:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Token usage
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Cost
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Unnecessary data transfer
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Privacy exposure
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">Key Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">Tech Stack</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
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

      {/* Example Workflow */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">Example Workflow</span>
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Raw User Text</p>
            </div>
            <div className="text-center text-2xl text-blue-600">↓</div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Rule-Based Cleaning (instant)</p>
            </div>
            <div className="text-center text-2xl text-blue-600">↓</div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Optional Local LLM Extraction (WebGPU)</p>
            </div>
            <div className="text-center text-2xl text-blue-600">↓</div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Clean, Structured Output</p>
            </div>
            <div className="text-center text-2xl text-blue-600">↓</div>
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 text-center border-2 border-blue-500">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Send to Paid LLM API (fewer tokens, lower cost)</p>
            </div>
          </div>
        </div>
      </section>

      {/* When This Makes Sense */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">When This Makes Sense</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Token cost matters",
              "Input text is messy or repetitive",
              "Privacy is a concern",
              "You want to preprocess data before server-side AI",
              "You're building tools for power users",
              "Internal apps or regulated environments"
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Limitations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">Current Limitations</span>
          </h2>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4 font-medium">
              This project is intentionally honest about tradeoffs:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• First local model load can be slow</li>
              <li>• Performance varies widely by device and GPU</li>
              <li>• Browser WebGPU support is still evolving</li>
              <li>• LLM inference can block the main thread</li>
              <li>• Not all devices can run local models reliably</li>
            </ul>
            <p className="text-center text-gray-700 dark:text-gray-300 mt-4 font-medium">
              These are known constraints, not hidden issues.
            </p>
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Project Status</h2>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-xl mb-4">⚠️ <strong>Experimental / Early Stage</strong></p>
            <p className="text-lg mb-4">
              API is stable enough for testing and experimentation. Performance and ergonomics are still evolving.
            </p>
            <p className="text-lg">
              Feedback and real-world usage are strongly encouraged.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

