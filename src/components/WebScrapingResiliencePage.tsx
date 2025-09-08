import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Shield, Code, CheckCircle, AlertTriangle, ExternalLink, Github, Twitter, Zap, Sun, Moon, Chrome } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../settings/theme';

const WebScrapingResiliencePage: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
        isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/90 border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goBack}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-purple-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </motion.button>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode} 
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-purple-400 hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-purple-600 hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className={`flex items-center space-x-2 text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Shield size={16} />
                <span>Web Scraping</span>
              </div>
              <div className={`flex items-center space-x-2 text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Clock size={16} />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`prose prose-lg max-w-none ${
            isDarkMode ? 'prose-invert' : ''
          }`}
        >
          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode 
                  ? 'bg-purple-900/30 text-purple-300 border border-purple-700' 
                  : 'bg-purple-100 text-purple-700 border border-purple-200'
              }`}>
                Web Scraping
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode 
                  ? 'bg-orange-900/30 text-orange-300 border border-orange-700' 
                  : 'bg-orange-100 text-orange-700 border border-orange-200'
              }`}>
                System Design
              </span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              How I Stopped Panicking About Broken Web Scrapers and Started Sleeping Through the Night
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
              <span>Published on May 22, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
            
            <div className={`p-4 rounded-lg border-l-4 ${
              isDarkMode ? 'bg-purple-900/20 border-purple-500' : 'bg-purple-50 border-purple-500'
            }`}>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-purple-200' : 'text-purple-800'
              }`}>
                <strong>TL;DR:</strong> Learn the three-layer defense system that transformed my web scraping 
                from constant firefighting to predictable operations. No more 2 AM debugging sessions.
              </p>
            </div>
          </div>

          {/* Article Body */}
          <div className={`space-y-8 text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {/* Introduction */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                The 2 AM Wake-Up Call That Changed Everything
              </h2>
              <p>
                It was 2:17 AM when my phone started blowing up. Our financial transaction system—the one that processed 
                <strong>$3M daily</strong>—had silently failed. A third-party portal changed its login interface, and suddenly, 
                millions of dollars in transactions couldn't be verified.
              </p>
              <p className="mt-4">
                As I frantically tried to debug the issue, with finance directors demanding updates, I realized something: 
                <strong>this wasn't a technical problem—it was a systems thinking problem.</strong>
              </p>
              <p className="mt-4">
                Just weeks earlier, I'd experienced a smaller version of this nightmare when unexpected UI changes broke my Chrome extension days before launch. Educational platforms often update their interfaces, which can disrupt scrapers. To make my Transcript Extractor extension more reliable, I implemented multiple fallbacks to handle these changes seamlessly.
              </p>
              <p className="mt-4">
                These two experiences taught me what separates hobby scraping from production-grade data extraction. 
                It's not about writing perfect code—it's about building systems that expect imperfection.
              </p>
            </section>

            {/* The Turning Point */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                The Turning Point: From Reactive to Proactive
              </h2>
              <p>
                The breakthrough came when I stopped trying to prevent failures and started building systems that expected them. 
                Here's the mindset shift that changed everything:
              </p>
              <div className={`mt-4 p-4 rounded-lg border ${
                isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-300'
              }`}>
                <p className="mb-2"><strong>Old approach:</strong> "How can I make my scraper never break?"</p>
                <p><strong>New approach:</strong> "How can I know immediately when it breaks and fix it fast?"</p>
              </div>
              <p className="mt-4">
                This led me to develop a three-layer defense system that transformed my scraping from constant firefighting 
                to predictable operations.
              </p>
            </section>

            {/* Layer 1: The Resilience Mindset */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Layer 1: The Resilience Mindset
              </h2>
              
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Embrace Multiple Fallback Strategies
              </h3>
              <p>
                Instead of perfect selectors, I now build with intentional redundancy:
              </p>
              <pre className={`p-4 rounded text-sm overflow-x-auto ${
                isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'
              }`}>
{`// Multiple fallbacks prevent total failure
const selectors = [
  'button[aria-label="View Transcript"]', // Newest version
  'button[aria-label="Transcript"]',      // Previous version
  '.transcript-toggle',                   // Class-based fallback
  '[data-purpose="transcript-button"]'    // Data attribute
];

for (const selector of selectors) {
  const element = await page.$(selector);
  if (element) return element;
}
throw new Error('All selectors failed - UI likely changed');`}
              </pre>
              <p className="mt-4">
                This simple change reduced my maintenance time by <strong>80%</strong> because the system could often heal itself 
                when websites changed.
              </p>

              <h3 className={`text-xl font-semibold mb-4 mt-8 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                The Health Check Revolution
              </h3>
              <p>For critical systems, I implemented automated health checks:</p>
              <pre className={`p-4 rounded text-sm overflow-x-auto ${
                isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'
              }`}>
{`# Pseudo-code: Health check concept
def verify_scraper_health():
    critical_steps = [
        {'name': 'login_page', 'selector': '#username', 'timeout': 10},
        {'name': 'dashboard', 'selector': '.welcome-message', 'timeout': 15},
        {'name': 'data_section', 'selector': '.transaction-table', 'timeout': 8}
    ]
    
    for step in critical_steps:
        if not await element_is_visible(step['selector'], step['timeout']):
            alert_team(f"Stuck at: {step['name']}")
            capture_diagnostics()  # Screenshots + logs
            return False
    return True`}
              </pre>
            </section>

            {/* Layer 2: The GitHub Actions Game Changer */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Layer 2: The GitHub Actions Game Changer
              </h2>
              <p>
                The real transformation came when I automated monitoring using GitHub Actions. For less than 30 minutes of setup time, I gained:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-6">
                <li><strong>Automated health checks</strong> every 10 minutes</li>
                <li><strong>Instant alerts</strong> when anything breaks</li>
                <li><strong>Detailed diagnostics</strong> (screenshots, error logs)</li>
                <li><strong>Zero infrastructure costs</strong></li>
                <li><strong>Secure secret management</strong> via GitHub Secrets</li>
              </ul>
              <p className="mt-4">The configuration was surprisingly simple:</p>
                             <pre className={`p-4 rounded text-sm overflow-x-auto ${
                 isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'
               }`}>
{`# .github/workflows/scraper-monitor.yml
name: Scraper Health Check
on:
  schedule:
    - cron: '*/10 * * * *'  # Every 10 minutes for faster detection

jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
      - name: Run health check
        run: node health-check.js
        env:
          SCRAPER_USER: \${{ secrets.SCRAPER_USER }}
          SCRAPER_PASS: \${{ secrets.SCRAPER_PASS }}
      - name: Alert on failure
        if: failure()
        uses: actions/github-script@v6
        # Full config on GitHub`}
               </pre>
            </section>

            {/* The Results */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                The Results That Changed Everything
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className={`p-6 rounded-lg border ${
                  isDarkMode ? 'bg-red-900/20 border-red-700' : 'bg-red-50 border-red-200'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 flex items-center ${
                    isDarkMode ? 'text-red-300' : 'text-red-800'
                  }`}>
                    <AlertTriangle size={24} className="mr-3 text-red-500" />
                    Before (6-month baseline)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>❌ 2-4 production failures monthly</li>
                    <li>❌ 3-12 hour detection time</li>
                    <li>❌ 14+ hours to fix critical issues</li>
                    <li>❌ $22K average monthly incident costs</li>
                  </ul>
                </div>

                <div className={`p-6 rounded-lg border ${
                  isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-50 border-green-200'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 flex items-center ${
                    isDarkMode ? 'text-green-300' : 'text-green-800'
                  }`}>
                    <CheckCircle size={24} className="mr-3 text-green-500" />
                    After (6 months post-implementation)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ 0 undetected production failures</li>
                    <li>✅ &lt;15 minute detection time (average)</li>
                    <li>✅ 1-3 hours to fix issues</li>
                    <li>✅ Automated diagnostics and alerts</li>
                    <li>✅ Peace of mind</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6">
                The financial impact was staggering: <strong>we reduced revenue risk by $450K monthly</strong> based on 
                historical incident costs and opportunity loss calculations.
              </p>
            </section>

            {/* Strategic Insight */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                The Strategic Insight Most People Miss
              </h2>
              <p>
                Here's the counterintuitive truth I discovered: <strong>Sometimes the most sophisticated solution is knowing 
                when not to be sophisticated.</strong>
              </p>
              <p className="mt-4">
                For my Chrome extension, I keep the production code deliberately simple. I also improved transcript quality by switching from line-based to word-based chunking (~55 words per chunk), eliminating orphan chunks and making output more AI-friendly.
              </p>
              <pre className={`p-4 rounded text-sm overflow-x-auto ${
                isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'
              }`}>
{`// Clean, minimal code for Chrome Web Store approval
const selectors = [
  '[data-purpose="transcript-cue"]',
  '.transcript--cue-container',
  '.transcript-cue'
];

export class TranscriptExtractor {
  static async extract() {
    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) return elements;
    }
    throw new Error('No elements found');
  }
}`}
              </pre>
              <p className="mt-4">This intentional simplicity delivers powerful benefits:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-6">
                <li><strong>Easier maintenance → Faster bug fixes</strong></li>
                <li><strong>Better performance → Happier users</strong></li>
                <li><strong>Clear audit trails → Better security</strong></li>
              </ul>
            </section>

            {/* Practical Takeaways */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Your Practical Takeaways
              </h2>
              <ol className="list-decimal list-inside mt-4 space-y-3 ml-6">
                <li><strong>Embrace Multiple Fallbacks</strong>: Never rely on a single selector or approach</li>
                <li><strong>Implement Health Checks</strong>: Validate each critical step before proceeding</li>
                <li><strong>Automate Monitoring</strong>: GitHub Actions provides free, powerful monitoring</li>
                <li><strong>Match Complexity to Criticality</strong>: Simple projects deserve simple solutions</li>
                <li><strong>Expect Failure</strong>: Build systems that assume things will break</li>
              </ol>
            </section>

            {/* What's Next */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                What's Next
              </h2>
              <p>
                In the final article of this series, I'll shift from <em>reactive resilience</em> to <em>proactive survival</em>.
                Instead of fixing scrapers after they fail, I'll show how to <strong>test boundaries, avoid bans, and survive 
                in hostile environments</strong>.
              </p>
              <p className="mt-4">Because the best failure is the one that never happens.</p>
            </section>

            {/* Bottom Line */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                The Bottom Line
              </h2>
              <p>
                The journey from frantic 2 AM debugging to peaceful sleep wasn't about writing better code—it was about 
                building better systems. By implementing resilient architecture and automated monitoring, I transformed web 
                scraping from a constant source of stress into a reliable component of our business infrastructure.
              </p>
              <p className="mt-4">
                The result? No more 2 AM phone calls, no more frantic debugging sessions, and no more explaining to clients 
                why their data isn't available. Just reliable, monitored, professional data extraction that works when you need it.
              </p>
              <p className="mt-4 text-lg font-semibold">
                <strong>The formula is simple: Resilience + Monitoring = Peace of Mind.</strong>
              </p>
            </section>

            {/* Chrome Extension Links */}
            <section>
              <div className={`p-6 rounded-lg border ${
                isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-50 border-blue-200'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-800'
                }`}>
                  Try My Chrome Extension
                </h3>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-blue-200' : 'text-blue-700'
                }`}>
                  Experience the resilience principles in action with my Transcript Extractor Chrome extension. 
                  It demonstrates the multi-fallback approach and robust error handling discussed in this article.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://chromewebstore.google.com/detail/transcript-extractor/fjohldgflidaghednclaijiafmchlnbh" 
                     target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Chrome size={16} className="mr-2" />
                    Add to Chrome
                  </a>
                  <a href="https://github.com/pras-ops/udemy-transcript-extractor" 
                     target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <Github size={16} className="mr-2" />
                    View Source Code
                  </a>
                </div>
              </div>
            </section>

            {/* Social Links */}
            <section>
              <div className={`p-6 rounded-lg border ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'
              }`}>
                <p className="mb-4 italic">
                  Enjoyed this article? I share more technical insights on my blog and social media.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/pras-ops" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/prashant--j" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ExternalLink size={16} className="mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className={`flex items-center space-x-2 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Shield size={16} />
                  <span>Web Scraping</span>
                </div>
                <div className={`flex items-center space-x-2 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Clock size={16} />
                  <span>8 min read</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goBack}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isDarkMode
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
                }`}
              >
                Back to Portfolio
              </motion.button>
            </div>
          </div>
        </motion.article>
      </main>
    </div>
  );
};

export default WebScrapingResiliencePage;
