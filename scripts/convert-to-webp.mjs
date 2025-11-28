#!/usr/bin/env node
/**
 * Script to convert images to WebP format
 * Usage: node scripts/convert-to-webp.mjs
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public', 'img');

const imagesToConvert = [
  {
    input: join(publicDir, 'hero', 'foulla-picture.png'),
    output: join(publicDir, 'hero', 'foulla-picture.webp'),
    quality: 85,
  },
  {
    input: join(publicDir, 'profile', 'profile_pic_sm.jpeg'),
    output: join(publicDir, 'profile', 'profile_pic_sm.webp'),
    quality: 85,
  },
];

async function convertToWebP() {
  console.log('🖼️  Converting images to WebP format...\n');

  for (const { input, output, quality } of imagesToConvert) {
    if (!existsSync(input)) {
      console.log(`⚠️  Skipping ${input} (file not found)`);
      continue;
    }

    try {
      const info = await sharp(input)
        .webp({ quality })
        .toFile(output);

      const inputStats = await sharp(input).metadata();
      const inputSize = inputStats.size || 0;
      const savings = ((inputSize - info.size) / inputSize * 100).toFixed(1);

      console.log(`✅ ${input}`);
      console.log(`   → ${output}`);
      console.log(`   ${(inputSize / 1024).toFixed(1)}KB → ${(info.size / 1024).toFixed(1)}KB (${savings}% smaller)\n`);
    } catch (error) {
      console.error(`❌ Error converting ${input}:`, error.message);
    }
  }

  console.log('✨ Image conversion complete!');
}

convertToWebP().catch(console.error);
