import fs from 'fs';
import path from 'path';
import https from 'https';

// The URL of your live site
const HOST = 'drhaithamsharshar.com';
const SITE_URL = `https://${HOST}`;

// Read the generated IndexNow key from the file system
const keyPath = path.resolve(process.cwd(), 'scripts', 'indexnow-key.txt');
let KEY = '';

try {
  KEY = fs.readFileSync(keyPath, 'utf8').trim();
} catch (error) {
  console.error('❌ Error: Could not read indexnow-key.txt. Did you generate it?');
  process.exit(1);
}

const keyLocation = `${SITE_URL}/${KEY}.txt`;

// Read sitemap to extract all current URLs
const sitemapPath = path.resolve(process.cwd(), 'dist', 'sitemap.xml');
let sitemapContent = '';

try {
  sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
} catch (error) {
  console.error('❌ Error: Could not read sitemap.xml. You must run this script AFTER the build.');
  process.exit(1);
}

// Extract URLs using regex from standard XML sitemaps
const urlRegex = /<loc>(.*?)<\/loc>/g;
const urlList = [];
let match;
while ((match = urlRegex.exec(sitemapContent)) !== null) {
  urlList.push(match[1]);
}

console.log(`🔍 Found ${urlList.length} URLs in sitemap to notify via IndexNow.`);

// Payload defined by IndexNow Protocol
const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: keyLocation,
  urlList: urlList,
});

// Primary IndexNow endpoint (Microsoft Bing). Bing shares data seamlessly with Yandex and Seznam.
const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
  },
};

console.log(`🚀 Sending ping to IndexNow API...`);

const req = https.request(options, (res) => {
  console.log(`📡 Response Status: ${res.statusCode}`);

  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log('✅ IndexNow Ping Successful! Search engines have been notified of the URL list.');
  } else {
    console.error('⚠️ IndexNow Ping returned unexpected status.');
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  }
});

req.on('error', (error) => {
  console.error('❌ Failed to ping IndexNow API:', error);
});

req.write(payload);
req.end();
