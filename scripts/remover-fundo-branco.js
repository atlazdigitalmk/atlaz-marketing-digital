const { Jimp } = require('jimp');
const path = require('path');

const blackInkFiles = [
  'logo-lockup-black.png',
  'logo-badge-retangular-black.png',
  'logo-horizontal-divisor-black.png',
  'logo-badge-circular-black.png',
  'logo-circular-horizontal-black.png',
  'logo-lockup-linhas-black.png',
];

const whiteInkFiles = [
  'logo-lockup-white.png',
  'logo-badge-retangular-white.png',
  'logo-horizontal-divisor-white.png',
  'logo-badge-circular-white.png',
  'logo-circular-horizontal-white.png',
  'logo-lockup-linhas-white.png',
];

const dir = path.resolve(__dirname, '..', 'identidade', 'variacoes');

async function stripBackground(file, mode) {
  const filePath = path.join(dir, file);
  const image = await Jimp.read(filePath);
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const brightness = (r + g + b) / 3;
    if (mode === 'white-bg') {
      // remove near-white background, keep dark ink opaque
      if (brightness > 245) this.bitmap.data[idx + 3] = 0;
      else if (brightness > 200) this.bitmap.data[idx + 3] = Math.round(((245 - brightness) / 45) * 255);
    } else {
      // remove near-black background, keep light ink opaque
      if (brightness < 10) this.bitmap.data[idx + 3] = 0;
      else if (brightness < 55) this.bitmap.data[idx + 3] = Math.round(((brightness - 10) / 45) * 255);
    }
  });
  await image.write(filePath);
  console.log('OK', file);
}

(async () => {
  for (const file of blackInkFiles) await stripBackground(file, 'white-bg');
  for (const file of whiteInkFiles) await stripBackground(file, 'black-bg');
})();
