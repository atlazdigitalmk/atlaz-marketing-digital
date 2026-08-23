const fs = require('fs');
const path = require('path');
const https = require('https');

const fontsDir = path.resolve(__dirname, '..', 'identidade', 'fontes');
const filesDir = path.join(fontsDir, 'files');
fs.mkdirSync(filesDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`${res.statusCode} for ${url}`));
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        fs.writeFileSync(dest, Buffer.concat(chunks));
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  const css = fs.readFileSync(path.join(fontsDir, 'fonts.css'), 'utf8');
  const urls = [...new Set([...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g)].map(m => m[1]))];
  console.log(`Encontradas ${urls.length} URLs de fonte únicas.`);

  const urlToLocal = {};
  let i = 0;
  for (const url of urls) {
    i++;
    const filename = `f${i}.woff2`;
    await download(url, path.join(filesDir, filename));
    urlToLocal[url] = `files/${filename}`;
    process.stdout.write('.');
  }
  console.log('\nDownload concluído.');

  let localCss = css;
  for (const [url, local] of Object.entries(urlToLocal)) {
    localCss = localCss.split(url).join(local);
  }
  fs.writeFileSync(path.join(fontsDir, 'fonts.css'), localCss);
  console.log('fonts.css reescrito com caminhos locais.');
})();
