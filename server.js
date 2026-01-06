const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 3000;
const BASE = '/omni-context-cli-landing';

const mime = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.ttf': 'font/ttf',
};

http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  
  if (!url.startsWith(BASE)) return res.writeHead(404).end('Not Found');
  if (url === BASE) return res.writeHead(301, { Location: BASE + '/' }).end();
  
  const rel = url.slice(BASE.length) || '/';
  if (rel.includes('..')) return res.writeHead(403).end('Forbidden');
  
  const file = path.join(__dirname, rel === '/' ? 'index.html' : rel);
  
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    return fs.createReadStream(file).pipe(res);
  }
  
  if (fs.existsSync(file) && fs.statSync(file).isDirectory() && !url.endsWith('/'))
    return res.writeHead(301, { Location: url + '/' }).end();
  
  const index = path.join(file, 'index.html');
  if (fs.existsSync(index) && fs.statSync(index).isFile()) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return fs.createReadStream(index).pipe(res);
  }
  
  res.writeHead(404).end('Not Found');
}).listen(PORT, () => console.log(`http://localhost:${PORT}${BASE}/`));
