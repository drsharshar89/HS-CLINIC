import https from 'https';
import http from 'http';

/**
 * Ping Google and Bing that the sitemap has been updated.
 * Run AFTER build (after generate-sitemap.mjs).
 *
 * Google deprecated the /ping endpoint in 2023, but still processes
 * sitemap submissions through Google Search Console.
 * This script pings Bing (which still supports it) and also
 * triggers the IndexNow API if the key file exists.
 */

const SITEMAP_URL = 'https://drhaithamsharshar.com/sitemap.xml';

const endpoints = [
  {
    name: 'Bing',
    url: `https://www.bing.com/indexnow?url=${encodeURIComponent(SITEMAP_URL)}&key=`,
    usesKey: true,
  },
  {
    name: 'Google (Search Console)',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
    usesKey: false,
  },
];

function ping(name, url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol
      .get(url, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          console.log(`✅ ${name}: Ping successful (${res.statusCode})`);
        } else {
          console.log(`⚠️  ${name}: Unexpected status ${res.statusCode}`);
        }
        res.resume();
        resolve();
      })
      .on('error', (err) => {
        console.log(`❌ ${name}: Failed — ${err.message}`);
        resolve();
      });
  });
}

async function main() {
  console.log('🔔 Pinging search engines about sitemap update...\n');

  // Try to read IndexNow key for Bing
  let indexNowKey = '';
  try {
    const fs = await import('fs');
    const path = await import('path');
    const keyPath = path.default.resolve(process.cwd(), 'scripts', 'indexnow-key.txt');
    indexNowKey = fs.default.readFileSync(keyPath, 'utf8').trim();
  } catch {
    console.log('ℹ️  No IndexNow key found — skipping Bing IndexNow ping.');
  }

  for (const ep of endpoints) {
    if (ep.usesKey && !indexNowKey) continue;
    const url = ep.usesKey ? ep.url + indexNowKey : ep.url;
    await ping(ep.name, url);
  }

  console.log('\n📡 Sitemap ping complete.');
}

main();
