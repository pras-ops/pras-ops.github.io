import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Zap, Code, CheckCircle, AlertTriangle, ExternalLink, Sun, Moon, Chrome, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../settings/theme';

const BlogPostPage: React.FC = () => {
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
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
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
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className={`flex items-center space-x-2 text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <BookOpen size={16} />
                <span>Chrome Extensions</span>
              </div>
              <div className={`flex items-center space-x-2 text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Clock size={16} />
                <span>5 min read</span>
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
                  ? 'bg-blue-900/30 text-blue-300 border border-blue-700' 
                  : 'bg-blue-100 text-blue-700 border border-blue-200'
              }`}>
                Chrome Extensions
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode 
                  ? 'bg-green-900/30 text-green-300 border border-green-700' 
                  : 'bg-green-100 text-green-700 border border-green-200'
              }`}>
                Development Tips
              </span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              The Waiting Game — How to Handle Chrome Web Store Review Limbo (and Maybe Speed It Up)
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
              <span>Published on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            
            <div className={`p-4 rounded-lg border-l-4 ${
              isDarkMode ? 'bg-blue-900/20 border-blue-500' : 'bg-blue-50 border-blue-500'
            }`}>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-blue-200' : 'text-blue-800'
              }`}>
                <strong>TL;DR:</strong> My Chrome extension was approved in under 48 hours. 
                The secret? Clean architecture and minimal permissions. Here's how to optimize yours for speed.
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
                The Anxiety of the Black Box
              </h2>
              <p>
                You hit "submit" on your Chrome extension. The excitement is real. For many developers, 
                the next step is a nervous wait that can stretch for weeks, staring at an <strong>"In Review"</strong> status.
              </p>
              <p className="mt-4">
                <strong>But my extension, <em>Transcript Extractor</em>, was approved in less than 48 hours.</strong>
              </p>
              <p className="mt-4">
                The difference wasn't luck. It was <strong>architecture</strong>. The choices you make in your code 
                directly control how much <strong>trust</strong> you build with Chrome's reviewers before they even look at your submission.
              </p>
            </section>

            {/* Why Reviews Take Time */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Why Reviews Take Time: It's Not Personal, It's Process
              </h2>
              <p>
                Google's review system is a two-layer filter:
              </p>
              <ol className="list-decimal list-inside mt-4 space-y-3 ml-6">
                <li>
                  <strong>The Robot Guard</strong>: Automated scans immediately check for red flags like malware, 
                  dangerously broad permissions, and obfuscated code.
                </li>
                <li>
                  <strong>The Human Bouncer</strong>: If anything looks suspicious, your extension gets pushed to manual review. 
                  This is where delays compound—sometimes stretching into <strong>three weeks or more</strong>.
                </li>
              </ol>
              <p className="mt-4">
                Your goal? Get past the robot so cleanly that the human bouncer barely glances your way.
              </p>
            </section>

            {/* Architecture Matters */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Architecture Matters: My "Easy Button" vs. The "Hard Pass"
              </h2>
              <p>
                When I built <em>Transcript Extractor</em>, I optimized not just for developer comfort but for <strong>review speed</strong>. 
                The difference is staggering.
              </p>
              
              <div className="mt-6 space-y-6">
                <div className={`p-6 rounded-lg border ${
                  isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-50 border-green-200'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 flex items-center ${
                    isDarkMode ? 'text-green-300' : 'text-green-800'
                  }`}>
                    <CheckCircle size={24} className="mr-3 text-green-500" />
                    🟢 The "Easy Button" (What I Used: Vite + React + TypeScript)
                  </h3>
                  <p className="mb-4">My <code>manifest.json</code> was simple and transparent:</p>
                  <pre className={`p-4 rounded text-sm overflow-x-auto ${
                    isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'
                  }`}>
{`{
  "manifest_version": 3,
  "name": "Transcript Extractor",
  "version": "1.0",
  "permissions": ["activeTab", "scripting", "storage"],
  "action": {
    "default_popup": "popup.html"
  }
}`}
                  </pre>
                  <p className="mt-4"><strong>Why this worked:</strong></p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-6">
                    <li><strong>No Obfuscation</strong>: Vite produces clean, auditable bundles. Minification is fine; obfuscation is prohibited.</li>
                    <li><strong>Minimal Permissions</strong>: I used only what I could justify. Broad permissions like <code>&lt;all_urls&gt;</code> are instant red flags.</li>
                    <li><strong>Small Bundle</strong>: The entire build was ~50KB. Smaller surface area = fewer questions.</li>
                  </ul>
                  <p className="mt-4 text-green-600 font-medium text-lg"><strong>Result? Approved in under 48 hours.</strong></p>
                </div>

                <div className={`p-6 rounded-lg border ${
                  isDarkMode ? 'bg-red-900/20 border-red-700' : 'bg-red-50 border-red-200'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 flex items-center ${
                    isDarkMode ? 'text-red-300' : 'text-red-800'
                  }`}>
                    <AlertTriangle size={24} className="mr-3 text-red-500" />
                    🔴 The "Hard Pass" (The Classic Mistake)
                  </h3>
                  <p className="mb-4">Here's the kind of manifest that invites delays:</p>
                  <pre className={`p-4 rounded text-sm overflow-x-auto ${
                    isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'
                  }`}>
{`{
  "manifest_version": 3,
  "name": "A Suspicious Extension",
  "version": "1.0",
  "permissions": ["tabs", "storage", "webRequest", "<all_urls>"],
  "background": {"service_worker": "background.js"},
  "content_scripts": [{"matches": ["<all_urls>"], "js": ["bundle.js"]}]
}`}
                  </pre>
                  <p className="mt-4"><strong>Why this gets flagged:</strong></p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-6">
                    <li><strong><code>&lt;all_urls&gt;</code> Permission</strong>: Requests access to every site a user visits, triggering mandatory manual review.</li>
                    <li><strong>Obfuscated Bundle</strong>: Tools like <code>javascript-obfuscator</code> violate Chrome's policies. Reviewers reject code they can't audit.</li>
                    <li><strong>No Justification</strong>: Permissions must map directly to visible features. Vague requests imply hidden functionality.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Real-World Pitfalls */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Real-World Pitfalls and How I Avoided Them
              </h2>
              <p>
                While my submission sailed through, many developers face avoidable delays. During my research, 
                I consistently saw these patterns cause rejections and long waits:
              </p>
              <div className="mt-6 space-y-4">
                <div className={`p-4 rounded-lg border ${
                  isDarkMode ? 'bg-yellow-900/20 border-yellow-700' : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <p><strong>The PostHog Team</strong>: Their extension was rejected for using a base64 blob to create a worker. 
                  The rejection stated the code was "hard to understand during review".</p>
                </div>
                <div className={`p-4 rounded-lg border ${
                  isDarkMode ? 'bg-yellow-900/20 border-yellow-700' : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <p><strong>Stack Overflow Case</strong>: A developer reported rejections for broad permissions:</p>
                  <blockquote className={`mt-3 p-4 italic border-l-4 ${
                    isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-gray-100'
                  }`}>
                    "Your product violates the 'Use of Permissions' section. Request the narrowest permissions necessary"
                  </blockquote>
                </div>
                <div className={`p-4 rounded-lg border ${
                  isDarkMode ? 'bg-yellow-900/20 border-yellow-700' : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <p><strong>Obfuscation Backfires</strong>: Many teams added <code>javascript-obfuscator</code> to protect IP, 
                  only to be rejected for "deliberately concealed code".</p>
                </div>
              </div>
            </section>

            {/* Pre-Submission Audit */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Your Pre-Submission Audit: The 5-Minute Checklist
              </h2>
              <p>Before submitting, run this audit:</p>
              <ol className="list-decimal list-inside mt-4 space-y-3 ml-6">
                <li><strong>Permissions</strong>: Justify each permission in one sentence. If you can't, cut it.</li>
                <li><strong>Privacy Policy</strong>: Required if you handle user data. Use a generator if needed.</li>
                <li><strong>Code Readability</strong>: Minify for size, but avoid obfuscation.</li>
                <li><strong>Listing Accuracy</strong>: Ensure your store description matches your extension's actual behavior.</li>
              </ol>
            </section>

            {/* During the Wait */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                During the Wait: What to Actually Do
              </h2>
              <ul className="list-disc list-inside space-y-3 ml-6">
                <li><strong>Don't panic-update</strong>. Resubmitting resets your place in line.</li>
                <li><strong>Do use the time</strong>. Write documentation, plan launch tweets, or record demo videos.</li>
              </ul>
            </section>

            {/* If You Get Rejected */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                If You Get Rejected
              </h2>
              <p>Don't despair. Decode and fix:</p>
              <ol className="list-decimal list-inside mt-4 space-y-3 ml-6">
                <li><strong>Read the rejection email carefully</strong>. It cites specific policies.</li>
                <li><strong>Fix the exact issue</strong>—don't argue. For example:</li>
              </ol>
              <div className="mt-4 space-y-3 ml-12">
                <p>• <strong>Broad Permissions</strong>: Switch from <code>&lt;all_urls&gt;</code> to <code>activeTab</code>.</p>
                <p>• <strong>Obfuscated Code</strong>: Remove obfuscation tools; submit minified-only bundles.</p>
                <p>• <strong>Privacy Policy</strong>: Add a clear policy linked in your dashboard.</p>
              </div>
              <p className="mt-4"><strong>Resubmit with a polite note:</strong></p>
              <blockquote className={`mt-3 p-4 italic border-l-4 ${
                isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-gray-100'
              }`}>
                "Reduced permission scope from <code>&lt;all_urls&gt;</code> to <code>activeTab</code>. 
                Extension now only runs on user-initiated actions."
              </blockquote>
            </section>

            {/* Bottom Line */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                The Bottom Line
              </h2>
              <p>
                The Chrome Web Store waiting game isn't random. You're being judged by your extension's 
                <strong> architecture and transparency</strong>. Build cleanly, justify everything, and you'll turn a lottery into a predictable process.
              </p>
              <p className="mt-4">
                Your code isn't just functionality—it's your <strong>application for trust</strong>. Make it easy to approve.
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
                  Experience the clean architecture principles in action with my Transcript Extractor Chrome extension. 
                  It demonstrates the minimal permissions and transparent code structure discussed in this article.
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

            {/* References */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                References
              </h2>
              <ol className="list-decimal list-inside space-y-3 ml-6 text-base">
                <li><a href="https://developer.chrome.com/docs/webstore/review-process" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-flex items-center">Chrome Web Store Review Process <ExternalLink size={16} className="ml-1" /></a></li>
                <li><a href="https://groups.google.com/a/chromium.org/g/chromium-extensions/c/mwXypiQ7R4U" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-flex items-center">Google Groups Discussion on Pending Reviews <ExternalLink size={16} className="ml-1" /></a></li>
                <li><a href="https://developer.chrome.com/docs/extensions/whats-new" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-flex items-center">Chrome Extensions Blog: What's New <ExternalLink size={16} className="ml-1" /></a></li>
                <li><a href="https://developer.chrome.com/docs/webstore/program_policies" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-flex items-center">Chrome Web Store Policy Updates <ExternalLink size={16} className="ml-1" /></a></li>
                <li><a href="https://blog.ploeh.dk/2023/03/20/on-trust-in-software-development/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-flex items-center">On Trust in Software Development <ExternalLink size={16} className="ml-1" /></a></li>
              </ol>
            </section>
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className={`flex items-center space-x-2 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <BookOpen size={16} />
                  <span>Chrome Extensions</span>
                </div>
                <div className={`flex items-center space-x-2 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goBack}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isDarkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
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

export default BlogPostPage;
