

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, Github, Terminal, Search, Tags, Layers, RefreshCw, CheckCircle2,
  CircleDashed, XCircle, AlertTriangle, FileText, Archive, Sparkles,
} from 'lucide-react';

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="section-label mb-3">{children}</div>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-border bg-card/40 p-6 ${className}`}>{children}</div>
);

const CodeBlock: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="rounded-2xl border border-border bg-background/80 overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/30 text-xs font-mono text-muted-foreground">
      <Terminal size={14} className="text-primary" /> {label}
    </div>
    <pre className="p-4 md:p-5 overflow-x-auto text-xs md:text-[13px] leading-relaxed text-muted-foreground font-mono">{children}</pre>
  </div>
);

const Mono: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <code className="font-mono text-foreground">{children}</code>
);

const ScrapeWizardPage: React.FC = () => {
  const REPO = 'https://github.com/pras-ops/ScrapeWizard';

  React.useEffect(() => {
    document.title = 'ScrapeWizard · Point it at a page, get the data | Prashant Jacob';
  }, []);

  const stack = ['Python 3.9+', 'CLI', 'YAML recipes', 'Playwright (only when needed)', 'CSV · JSON · Excel', 'MIT'];

  const groups = [
    {
      icon: Search,
      title: 'Finds the data',
      items: [
        ['No setup, no AI key', 'The page is analysed locally.'],
        ['Plain HTTP first', 'A browser starts only when a page needs JavaScript to show its data.'],
        ['Data embedded in the page', 'Many JavaScript sites ship their list as JSON inside the page (__NEXT_DATA__, JSON-LD). That is read directly: no browser, and no selectors to break.'],
        ['Tables and frames', 'A table\'s heading row becomes the column names, even with no classes. A list inside a same-site frame is read from the frame.'],
        ['Records in two parts', 'A title row followed by a details row (Hacker News), or a dt followed by its dd (arXiv), is read as one row.'],
      ],
    },
    {
      icon: Tags,
      title: 'Names the fields',
      items: [
        ['Typed, named fields', 'Prices, numbers, dates, links and images are recognised. Each link is named after the text it belongs to (url, author_url, comments_url).'],
        ['Names from the page, not from a model', 'Where class names say nothing, columns are named from itemprop, test markers, where a link goes, or the words after a number ("12 stars today").'],
        ['Selectors that last', 'Test markers (data-testid) are preferred, and class names made up by a build tool (jeApUG) are not used.'],
      ],
    },
    {
      icon: Layers,
      title: 'Goes past the first page',
      items: [
        ['All the pages', 'Follows "next" links, numbered pages, "load more" buttons and infinite scroll.'],
        ['Item pages', '--follow opens each item\'s own page and adds what it holds: labelled rows, embedded structured data, the description.'],
        ['Teach by example', 'If it picks the wrong list, show it a value you can see on the page: --like "A Light in the Attic".'],
        ['Signed-in sites', '--login lets you sign in once in a browser window and reuses the session.'],
      ],
    },
    {
      icon: RefreshCw,
      title: 'Runs again, safely',
      items: [
        ['Remembers each run', 'scrapewizard run reports "12 new, 3 changed, 0 removed since last run".'],
        ['Repairs itself', 'When a site changes and the recipe stops matching, the page is searched again and the repair is checked against the last run\'s data. If it can\'t be checked, it stops instead of guessing.'],
        ['Checks on every run', 'A minimum row count and required fields. run exits with an error when they fail, so a scheduler can alert you.'],
        ['Optional AI', '--ask or --ai, with your own key or a local model. Used once, to write the recipe. Running a recipe never uses AI.'],
      ],
    },
  ];

  const results: [string, 'right' | 'partly' | 'none', string][] = [
    ['GitHub trending', 'right', '12 repositories'],
    ['python.org blogs', 'right', '14 posts'],
    ['arXiv recent papers', 'right', '50 papers, each read from a dt and the dd after it'],
    ['Hacker News jobs', 'right', '30 jobs'],
    ['Lobsters', 'right', '25 stories'],
    ['Project Gutenberg search', 'right', '25 books'],
    ['dev.to', 'right', '17 posts'],
    ['BBC News', 'right', '47 headlines, through the site\'s own test markers'],
    ['Wikipedia, countries by population', 'right', '240 rows, columns named from the headings. Plain HTTP was refused; the browser fallback handled it'],
    ['Real Python', 'right', '18 articles, through the browser fallback'],
    ['scrapethissite.com frames page', 'right', '14 rows, read from the frame'],
    ['quotes.toscrape.com/tableful', 'partly', 'The rows are found, but the quote and its tags alternate in one column'],
    ['PyPI search', 'none', 'The site answers with a bot check'],
    ['Stack Overflow questions', 'none', 'Refused over HTTP and in the browser'],
  ];

  const status = {
    right: { icon: CheckCircle2, label: 'Right', cls: 'text-emerald-400' },
    partly: { icon: CircleDashed, label: 'Partly', cls: 'text-amber-400' },
    none: { icon: XCircle, label: 'Nothing', cls: 'text-red-400' },
  };

  const limits = [
    ['Bot protection', 'Sites that refuse automated browsers (PyPI search, Stack Overflow) are not handled, and the tool does not try to get around them.'],
    ['Lists loaded from an API', 'They are read from the page a browser draws. The API itself is not called directly yet.'],
    ['Embedded data must be real JSON', 'Data written as JavaScript code (unquoted keys, Next.js "app router" streams) falls back to the browser.'],
    ['Class-less tables with alternating records', 'These come out as one column.'],
    ['One main link per row', 'When a site marks some cards\' links differently, a few rows can come out without a url (4 of 47 on BBC News).'],
    ['Self-repair covers the list and its fields', 'Item-page fields are not repaired yet.'],
    ['Not verified live', 'The AI options were tested with a stand-in model, --login with a scripted sign-in, and self-repair by damaging a saved recipe.'],
    ['No site-wide crawler', 'It reads one list, its pages and its items.'],
  ];

  const commands = [
    ['scrapewizard <url>', 'Look at a page, preview the data, save it with a recipe.'],
    ['scrapewizard run RECIPE', 'Run a saved recipe again: reports changes, repairs itself, and exits with an error if its checks fail.'],
    ['scrapewizard doctor', 'Check Python, Playwright, config and LLM connectivity.'],
    ['scrapewizard version', 'Print the installed version.'],
  ];

  const firstRun =
`$ scrapewizard https://books.toscrape.com

Looking at books.toscrape.com ...
Found 20 items. No browser needed.

 title                      │ price
────────────────────────────┼────────
 A Light in the Attic       │ £51.77
 Tipping the Velvet         │ £53.74
 Soumission                 │ £50.10
 Sharp Objects              │ £47.82
 Sapiens: A Brief History … │ £54.23
  ... 15 more
  (+3 more columns in the file: availability, url, image)

This list continues on more pages.
Save?  [Enter] this page   [a] all pages   [q] quit
>

Saved  books.csv   20 rows, 5 columns
       books.recipe.yaml   run again with: scrapewizard run books.recipe.yaml`;

  const recipe =
`name: books
url: https://books.toscrape.com
fetch: http
collection:
  container: article.product_pod
  fields:
    title: {select: ["h3 > a@title"], type: text}
    price: {select: ["p.price_color"], type: money}
    url:   {select: ["div.image_container > a@href", "h3 > a@href"], type: url}
pagination: {type: next_link, select: "li.next > a", max_pages: 3}
checks: {min_records: 30, required: [title, price]}
detail:                       # only with --follow
  follow: url
  fields:
    upc:         {select: ['th:-soup-contains("UPC") + td'], type: text}
    description: {select: ["#product_description + p"], type: text}`;

  const embeddedRecipe =
`collection:
  container: data:props.pageProps.products
  fields:
    title: {select: [name], type: text}
    price: {select: [price.amount], type: number}
    image: {select: [images.0.url], type: image}`;

  const installSnippet =
`git clone https://github.com/pras-ops/ScrapeWizard.git
cd ScrapeWizard
pip install .

# Only for pages that need JavaScript, --login,
# "load more" and infinite scroll
playwright install chromium

# Optional extras
pip install ".[excel]"   # --format xlsx
pip install ".[ai]"      # --ai and --ask`;

  const runSnippet =
`# Get the data on a page
scrapewizard https://books.toscrape.com

# Every page, plus each item's own page, as JSON
scrapewizard https://books.toscrape.com \\
  --all-pages --follow --yes --format json

# Run the saved recipe again later
scrapewizard run books.recipe.yaml

# A site that needs an account
scrapewizard https://example.com/orders --login`;

  return (
    <div className="min-h-screen grain bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border nav-glass">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="press inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} /> Back to portfolio
          </Link>
          <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-colors">
            <Github size={16} /> GitHub
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{ background: 'radial-gradient(60% 60% at 50% 0%, color-mix(in oklch, var(--primary) 16%, transparent), transparent 70%)' }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            <SectionLabel>Python CLI · Web scraping · Open source</SectionLabel>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
                <Search size={28} className="text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                ScrapeWizard
              </h1>
            </div>
            <p className="mt-5 text-xl md:text-2xl font-semibold text-foreground">
              Point it at a page, get the data. <span className="text-primary">No AI key needed.</span>
            </p>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              ScrapeWizard finds the repeating data on a page (product cards, table rows, listings), works out the fields, and saves two
              files in the folder you are in: <span className="text-foreground">the data</span>, and a small readable{' '}
              <span className="text-foreground">recipe</span> you can run again, edit by hand, or schedule.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground">{s}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Github size={18} /> Source code
              </a>
              <a href={`${REPO}/blob/main/docs/learn.md`} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                <FileText size={18} /> How it works inside
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border/50">
              {[
                ['11 of 14', 'Unseen pages read correctly'],
                ['~1 s', 'To find the list on a page'],
                ['202', 'Tests, all offline'],
                ['v1.2.0', 'Version'],
              ].map(([v, l], i) => (
                <div key={l} className="text-center">
                  <div className={`text-2xl font-bold ${i === 0 ? 'text-primary' : ''}`}>{v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-20">

          {/* Demo */}
          <section>
            <SectionLabel>See it run</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">One command, two files</h2>
            <div className="grid lg:grid-cols-2 gap-5 items-start">
              <div className="rounded-2xl border border-border bg-background/80 overflow-hidden">
                <div className="flex gap-1.5 px-4 py-3 border-b border-border bg-secondary/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <img
                  src="/images/scrapewizard/demo.gif"
                  width={792}
                  height={666}
                  loading="lazy"
                  className="w-full h-auto block"
                  alt="ScrapeWizard reads a list of books, saves it with a recipe, runs the recipe again, then reads all ten pages of a JavaScript-drawn site without a browser"
                />
              </div>
              <CodeBlock label="the same first run, as text">{firstRun}</CodeBlock>
            </div>
          </section>

          {/* What it does */}
          <section>
            <SectionLabel>What it does</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">From a URL to clean, named columns</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {groups.map((g) => (
                <Card key={g.title}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <g.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{g.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {g.items.map(([t, d]) => (
                      <li key={t}>
                        <div className="font-semibold text-sm">{t}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{d}</p>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          {/* Recipe */}
          <section>
            <SectionLabel>The recipe</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A small file you can read and edit</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Each field has a list of selectors tried in order, and <Mono>@attr</Mono> reads an attribute instead of the text. When the list
              comes from data embedded in the page, the container starts with <Mono>data:</Mono> and the fields are paths instead of
              selectors. Run memory and any saved sign-in live in a <Mono>.scrapewizard/</Mono> folder beside the recipe.
            </p>
            <div className="grid lg:grid-cols-5 gap-5 items-start">
              <div className="lg:col-span-3"><CodeBlock label="books.recipe.yaml">{recipe}</CodeBlock></div>
              <div className="lg:col-span-2"><CodeBlock label="embedded data">{embeddedRecipe}</CodeBlock></div>
            </div>
          </section>

          {/* How well it works */}
          <section>
            <SectionLabel>How well it works</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">11 of 14 right, 1 partly, 2 not</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Measured on 7 October 2026 against 14 public pages that were <span className="text-foreground">not</span> used while building
              the tool, with no AI and no <Mono>--like</Mono> hint. "Right" means it chose the list a person would want and every row came
              out. Both misses are sites behind bot protection.
            </p>
            <div className="rounded-2xl border border-border overflow-hidden">
              {results.map(([page, s, detail], i) => {
                const S = status[s];
                return (
                  <div key={page} className={`grid grid-cols-1 sm:grid-cols-[minmax(0,240px)_96px_1fr] gap-1 sm:gap-4 px-5 py-3 text-sm ${i % 2 ? 'bg-card/20' : 'bg-card/40'}`}>
                    <span className="font-medium text-foreground">{page}</span>
                    <span className={`inline-flex items-center gap-1.5 font-medium ${S.cls}`}><S.icon size={15} /> {S.label}</span>
                    <span className="text-muted-foreground">{detail}</span>
                  </div>
                );
              })}
            </div>

            <h3 className="text-lg font-bold mt-10 mb-3">Column names, on a site whose classes are all styling</h3>
            <p className="text-sm text-muted-foreground mb-4">GitHub trending, with no AI:</p>
            <div className="grid md:grid-cols-2 gap-5">
              <Card className="!p-5">
                <div className="text-xs font-mono text-muted-foreground mb-2">BEFORE</div>
                <code className="font-mono text-sm text-muted-foreground break-words">title, text, text_2, number, number_2, text_3</code>
              </Card>
              <Card className="!p-5 border-primary/30">
                <div className="text-xs font-mono text-primary mb-2">NOW</div>
                <code className="font-mono text-sm text-foreground break-words">title, description, programming_language, stargazers, forks, stars_today</code>
              </Card>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-3xl">
              Not every column gets a good name. Where the page says nothing about a value, it is still <Mono>text</Mono> or{' '}
              <Mono>number</Mono>. Rename the keys in the recipe, or pass <Mono>--ai</Mono> or <Mono>--ask</Mono> once.
            </p>
          </section>

          {/* Known limits */}
          <section>
            <SectionLabel>Known limits</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What it doesn't do</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {limits.map(([t, d]) => (
                <Card key={t} className="!p-5">
                  <h3 className="font-bold flex items-start gap-2 text-sm"><AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" /> {t}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick start */}
          <section>
            <SectionLabel>Quick start</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Install and run</h2>
            <div className="grid lg:grid-cols-2 gap-5 items-start">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Install from source</p>
                <CodeBlock label="terminal">{installSnippet}</CodeBlock>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Use it</p>
                <CodeBlock label="terminal">{runSnippet}</CodeBlock>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-border overflow-hidden">
              {commands.map(([c, d], i) => (
                <div key={c} className={`grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-1 sm:gap-4 px-5 py-3 text-sm ${i % 2 ? 'bg-card/20' : 'bg-card/40'}`}>
                  <span className="font-mono text-foreground">{c}</span>
                  <span className="text-muted-foreground">{d}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Older parts */}
          <section className="grid md:grid-cols-2 gap-5">
            <Card>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={18} className="text-primary" />
                <h3 className="font-bold">The AI-assisted builder (older, optional)</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <Mono>scrapewizard build --url ...</Mono> is the original guided builder. It needs an LLM key (OpenAI, Anthropic,
                OpenRouter) or a local Ollama model and writes a standalone Playwright script. It still works, but it is no longer the
                main way in.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-2 mb-3">
                <Archive size={18} className="text-primary" />
                <h3 className="font-bold">Where the testing Studio went</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This repository is now scraper-only. The UI/UX testing Studio that briefly lived here is preserved on the{' '}
                <Mono>archive/ui-testing-studio</Mono> branch and is moving to its own repository.
              </p>
            </Card>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-border bg-card/30 p-8 md:p-12 text-center">
            <Search size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Open source under MIT</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              202 tests, all offline: every page they read is served from the test's own machine. The research behind the design is in
              the repo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={REPO} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium border border-primary/20 hover:brightness-110 transition-all">
                <Github size={18} /> View on GitHub
              </a>
              <Link to="/" className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all">
                More projects <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ScrapeWizardPage;
