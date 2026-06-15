import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Shield, Code, CheckCircle, AlertTriangle, ExternalLink, Github, Twitter, Zap, Chrome, Target, TestTube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StrategicScrapingPage: React.FC = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen grain bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border nav-glass">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={goBack} className="press inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={18} /> Back to portfolio
            </button>
            
            <div className="flex items-center space-x-4">
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Target size={16} />
                <span>Web Scraping</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock size={16} />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
        >
          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                Web Scraping
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                Strategy
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Strategic Web Scraping: Choosing Approaches and Testing Limits
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
              <span>Published on May 22, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
            
            <div className="p-4 rounded-lg border bg-secondary/50 border-border">
              <p className="text-lg leading-relaxed text-foreground">
                <strong>TL;DR:</strong> After losing three LinkedIn accounts to aggressive backend automation, I learned the hard way that successful web scraping isn't about technical prowess alone—it's about strategic thinking. The key is matching the right approach to your specific target and implementing proactive testing to avoid catastrophic failures.
              </p>
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            {/* The Right Tool for the Right Job */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                The Right Tool for the Right Job: A Strategic Framework
              </h2>
              <p>
                Why does Transcript Extractor use an extension-based approach? Because Udemy, Coursera, and similar platforms rely on authenticated, session-sensitive browsing, and we needed maximum reliability and minimal account risk. This extension taught me: always start with your user's risk profile and platform tolerance. For future EdTech tools, I'll use the same strategic lens.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">
                Why We Chose an Extension for Transcript Extractor:
              </h3>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-6">
                <li>✅ <strong>User session preservation</strong> - Maintains authenticated sessions naturally</li>
                <li>✅ <strong>No account bans from automation</strong> - Appears as legitimate user activity</li>
                <li>✅ <strong>Seamless UI interaction</strong> - Handles complex navigation and dynamic content</li>
                <li>✅ <strong>Direct feedback from real users</strong> - Built based on actual educational workflows</li>
              </ul>
            </section>

            {/* Two Fundamental Approaches */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Two Fundamental Approaches
              </h2>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">
                1. Backend Automation: The Scalable Workhorse
              </h3>
              <p>Use when: Scraping tolerant targets at scale (e-commerce, news sites, public data)</p>
              <pre className="p-4 rounded text-sm overflow-x-auto bg-card border-border">
{`# Backend automation with safety features
from playwright.sync_api import sync_playwright
import random
import time

class SafeBackendScraper:
    def __init__(self):
        self.request_count = 0
        self.session_start = time.time()
    
    def scrape_safely(self, url):
        if self.request_count > 50 or time.time() - self.session_start > 3600:
            self.rotate_session()
        
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto(url)
            
            # Respectful delay
            time.sleep(random.uniform(2, 5))
            
            content = page.content()
            browser.close()
            
            self.request_count += 1
            return content
    
    def rotate_session(self):
        self.request_count = 0
        self.session_start = time.time()
        time.sleep(random.uniform(60, 300))  # Extended break`}
              </pre>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">
                2. Extension-Based: The Surgical Approach
              </h3>
              <p>Use when: Targeting sensitive platforms (LinkedIn, Udemy, HR portals)</p>
              <pre className="p-4 rounded text-sm overflow-x-auto bg-card border-border">
{`// Extension-based scraping with human emulation
class HumanizedScraper {
    constructor() {
        this.requestCount = 0;
        this.sessionStart = Date.now();
    }

    async safeInteraction(action) {
        if (this.requestCount > 30) {
            await this.takeExtendedBreak();
            this.resetSession();
        }

        await this.randomDelay(2000, 6000);
        
        try {
            const result = await action();
            this.requestCount++;
            return result;
        } catch (error) {
            console.error('Action failed:', error);
            await this.takeExtendedBreak();
            throw error;
        }
    }

    async takeExtendedBreak() {
        const breakTime = Math.floor(Math.random() * 600000) + 300000;
        await this.delay(breakTime);
    }

    resetSession() {
        this.requestCount = 0;
        this.sessionStart = Date.now();
    }
}`}
              </pre>
            </section>

            {/* Proactive Testing */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Proactive Testing: Finding Limits Before They Find You
              </h2>
              <p>
                Reactive scraping waits for failure. Proactive testing anticipates it.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">
                Rate Limit Testing
              </h3>
              <pre className="p-4 rounded text-sm overflow-x-auto bg-card border-border">
{`# Proactive rate limit testing
class RateLimitTester:
    def __init__(self, target_url):
        self.target_url = target_url
    
    def discover_limits(self):
        test_delays = [5, 3, 2, 1, 0.5, 0.2]  # Seconds between requests
        limits = {}
        
        for delay in test_delays:
            success_rate = self.test_delay_pattern(delay)
            limits[delay] = success_rate
            
            if success_rate < 0.8:  # 80% success threshold
                return limits
        
        return limits
    
    def test_delay_pattern(self, delay):
        successes = 0
        for i in range(10):  # Test with 10 requests
            try:
                response = self.make_request()
                if response.status_code == 200:
                    successes += 1
                time.sleep(delay)
            except:
                pass
        return successes / 10`}
              </pre>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">
                Element Stability Testing
              </h3>
              <pre className="p-4 rounded text-sm overflow-x-auto bg-card border-border">
{`# Testing element consistency
def test_element_stability(url, selectors, test_runs=5):
    stability_report = {}
    
    for selector in selectors:
        found_count = 0
        for run in range(test_runs):
            content = fetch_page_content(url)
            if check_element_exists(content, selector):
                found_count += 1
            time.sleep(1)  # Brief delay between tests
        
        stability_report[selector] = found_count / test_runs
    
    return stability_report`}
              </pre>
            </section>

            {/* Decision Framework */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                When to Use Which Approach: Decision Framework
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 rounded-lg border bg-card/40 border-border">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Choose Backend Automation When:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Scale:</strong> 1000+ targets</li>
                    <li>• <strong>Target:</strong> Data-tolerant platforms (news, e-commerce, public data)</li>
                    <li>• <strong>Authentication:</strong> Not required or simple</li>
                    <li>• <strong>Risk:</strong> Low (using disposable infrastructure)</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg border bg-primary/10 border-primary/20">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Choose Extension-Based When:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Scale:</strong> 10-500 targets</li>
                    <li>• <strong>Target:</strong> Session-sensitive platforms (LinkedIn, Udemy, HR portals)</li>
                    <li>• <strong>Authentication:</strong> Complex login required</li>
                    <li>• <strong>Risk:</strong> High (using valuable accounts)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Implementing Proactive Testing */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Implementing Proactive Testing
              </h2>
              
              <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">
                Continuous Testing Setup
              </h3>
              <pre className="p-4 rounded text-sm overflow-x-auto bg-card border-border">
{`# GitHub Actions for automated testing
name: Weekly Limit Testing
on:
  schedule:
    - cron: '0 2 * * 1'  # Every Monday at 2 AM

jobs:
  test-limits:
    runs-on: ubuntu-latest
    steps:
      - name: Run limit tests
        run: python -m limit_tester --target example.com
        env:
          TEST_ACCOUNT: \${{ secrets.TEST_ACCOUNT }}`}
              </pre>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">
                Monitoring Dashboard Concept
              </h3>
              <pre className="p-4 rounded text-sm overflow-x-auto bg-card border-border">
{`// Simple monitoring dashboard
class ScrapingMonitor {
    constructor() {
        this.metrics = {
            successRate: 0,
            errorRate: 0,
            captchaCount: 0
        };
    }

    updateMetrics(requestResult) {
        // Update metrics based on request outcome
        if (requestResult.success) {
            this.metrics.successRate = this.calculateSuccessRate();
        } else if (requestResult.captcha) {
            this.metrics.captchaCount++;
        }
        
        this.checkForAnomalies();
    }

    checkForAnomalies() {
        if (this.metrics.captchaCount > 3) {
            this.triggerAlert('Multiple CAPTCHAs detected');
        }
    }
}`}
              </pre>
            </section>

            {/* Key Takeaways */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Key Takeaways
              </h2>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-6">
                <li><strong>Match Approach to Target:</strong> Use backend automation for scale, extensions for stealth</li>
                <li><strong>Test Proactively:</strong> Implement systematic testing before full deployment</li>
                <li><strong>Monitor Continuously:</strong> Track success rates, errors, and warning signs</li>
                <li><strong>Respect Limits:</strong> Build in safety margins based on test results</li>
                <li><strong>Have Fallbacks:</strong> Always prepare alternative approaches for when primary methods fail</li>
              </ul>
            </section>

            {/* Implementation Checklist */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Implementation Checklist
              </h2>
              <ol className="list-decimal list-inside mt-4 space-y-2 ml-6">
                <li>Research target platform limits and patterns</li>
                <li>Conduct preliminary boundary testing</li>
                <li>Choose appropriate scraping approach</li>
                <li>Implement safety measures and monitoring</li>
                <li>Establish alert systems for anomalies</li>
                <li>Document limits and failure patterns</li>
                <li>Prepare fallback strategies</li>
              </ol>
            </section>

            {/* Try Transcript Extractor */}
            <section>
              <div className="p-6 rounded-lg border bg-card/40 border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Try Transcript Extractor Free
                </h3>
                <p className="mb-4 text-foreground">
                  Experience these strategic principles in action with my Chrome extension designed specifically for educational content:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://chromewebstore.google.com/detail/transcript-extractor/fjohldgflidaghednclaijiafmchlnbh" 
                     target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 bg-primary text-foreground rounded-lg hover:brightness-110 transition-colors">
                    <Chrome size={16} className="mr-2" />
                    Get Transcript Extractor on Chrome Web Store
                  </a>
                </div>
              </div>
            </section>

            {/* Bottom Line */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                The Bottom Line
              </h2>
              <p>
                The most successful scraping operations don't just extract data—they build systems that understand and respect platform boundaries while delivering reliable results. By choosing the right approach and implementing proactive testing, you can avoid the costly mistakes that come from hitting limits you didn't know existed.
              </p>
              <p className="mt-4">
                Remember: Sustainable scraping is about working with platforms, not against them. Test your boundaries, respect the limits you discover, and always have a plan for when things change.
              </p>
            </section>

            {/* Series Links */}
            <section>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  This article completes our three-part series on web scraping strategy. Missed the previous articles?
                </h3>
                <div className="space-y-2">
                  <p>• <a href="https://prashant-j.com/blog/chrome-web-store-review" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Article 1: The Chrome Web Store Waiting Game</a></p>
                  <p>• <a href="https://prashant-j.com/blog/web-scraping-resilience" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Article 2: Sleeping Through the Night</a></p>
                </div>
              </div>
            </section>

            {/* Social Links */}
            <section>
              <div className="p-6 rounded-lg border border-border">
                <p className="mb-4 italic">
                  Connect with me:
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/pras-ops" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 bg-secondary text-foreground border border-border rounded-lg hover:bg-secondary/80 transition-colors">
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/prashant--j" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 bg-primary text-foreground rounded-lg hover:brightness-110 transition-colors">
                    <ExternalLink size={16} className="mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Target size={16} />
                  <span>Web Scraping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>8 min read</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goBack}
                className="px-6 py-3 rounded-lg text-sm font-medium transition-colors bg-primary hover:brightness-110 text-foreground"
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

export default StrategicScrapingPage;
