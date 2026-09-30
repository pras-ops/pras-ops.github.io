// Runs after `vite build`. GitHub Pages only serves a client-side route like /folioflight through
// 404.html, so the page loads in a browser but answers HTTP 404, which link checkers (the Chrome Web
// Store homepage check, search engines) treat as missing. Writing dist/<route>.html for every route
// in src/App.tsx makes Pages answer 200; the React app then renders the route as usual.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');

// Page titles and descriptions for link previews; routes not listed keep the site defaults.
const meta = {
  '/folioflight': {
    title: 'Folioflight · Private job-application autofill & tracker',
    description: 'A Chrome extension that fills job applications from your profile, records which resume version you sent, and updates your board from email. Everything runs locally.',
  },
  '/transcript-extractor': {
    title: 'Transcript Extractor · Lecture transcripts to study notes',
    description: 'A local-first Chrome extension that turns video lectures into searchable, annotated study notes. No account, no server, no network requests.',
  },
};

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const routes = [...app.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== '/' && !p.includes(':'));
for (const route of routes) {
  let page = html;
  const m = meta[route];
  if (m) {
    page = page
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(m.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(m.description)}$2`);
  }
  const out = new URL(`../dist${route}.html`, import.meta.url);
  mkdirSync(dirname(out.pathname.replace(/^\/([A-Za-z]:)/, '$1')), { recursive: true });
  writeFileSync(out, page);
}
console.log(`route pages: ${routes.map((r) => `${r}.html`).join(', ')}`);
