// Generates public/og.png (1200×630) from an SVG using the hero gradient.
// Run with: node scripts/generate-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const out = fileURLToPath(new URL("../public/og.png", import.meta.url));
const W = 1200;
const H = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2b0607"/>
      <stop offset="0.55" stop-color="#8a1d0c"/>
      <stop offset="1" stop-color="#ec5a2a"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g font-family="Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif" fill="#fff">
    <text x="88" y="318" font-size="96" font-weight="600" letter-spacing="-3">Oscar Romero</text>
    <text x="90" y="392" font-size="38" font-weight="400" fill-opacity="0.85">Full-Stack Developer · Puerto Rico</text>
  </g>
  <text x="90" y="560" font-family="'JetBrains Mono', Menlo, monospace" font-size="22" fill="#fff" fill-opacity="0.6">oromerodev.netlify.app</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log(`Wrote ${out}`);
