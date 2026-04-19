// FocusPad Demo Screen Recorder
// Run with Claude Code: cd ~/Desktop/focuspad-site && npx playwright install chromium && node record-demos.js
// Requires: npm install playwright

const { chromium } = require('playwright');
const path = require('path');

const DEMOS_DIR = path.join(__dirname, 'demos');

async function recordPhoneDemo() {
  console.log('🎬 Recording phone demo...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: DEMOS_DIR, size: { width: 1920, height: 1080 } }
  });
  const page = await context.newPage();

  await page.goto('https://focuspad-site.vercel.app/phone-demo.html');
  await page.waitForTimeout(3000); // Let page fully load + show home screens

  // Step 1: Click "tap to dock" notification on left phone
  try {
    await page.click('text=tap to dock', { timeout: 5000 });
  } catch {
    // Fallback: click the notification banner area on the left phone
    await page.mouse.click(350, 700);
  }
  console.log('  → Clicked dock notification');

  await page.waitForTimeout(3000); // Connecting animation → lock screen

  // Step 2: Click TikTok on the RIGHT phone (restricted side)
  // TikTok is in the app grid - find it by text label on the right half of screen
  try {
    const tiktokElements = await page.$$('text=TikTok');
    for (const el of tiktokElements) {
      const box = await el.boundingBox();
      if (box && box.x > 900) { // Right phone is on the right half
        await el.click();
        console.log('  → Clicked TikTok');
        break;
      }
    }
  } catch {
    await page.mouse.click(1350, 420); // Fallback position
  }

  await page.waitForTimeout(5000); // Hold on restriction screen

  await context.close();
  await browser.close();

  // Rename the video file
  const fs = require('fs');
  const files = fs.readdirSync(DEMOS_DIR).filter(f => f.endsWith('.webm'));
  const latest = files.sort().pop();
  if (latest) {
    fs.renameSync(path.join(DEMOS_DIR, latest), path.join(DEMOS_DIR, 'phone-demo.webm'));
    console.log('  ✅ Saved phone-demo.webm');
  }
}

async function recordTeacherDashboard() {
  console.log('🎬 Recording teacher dashboard...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: DEMOS_DIR, size: { width: 1920, height: 1080 } }
  });
  const page = await context.newPage();

  await page.goto('https://focuspad-site.vercel.app/teacher-dashboard.html');
  await page.waitForTimeout(3000); // Show the grid (28 green, 2 red)

  // Step 1: Click "Student Docked Phone" button — Marcus flips green
  try {
    await page.click('text=Student Docked Phone', { timeout: 5000 });
  } catch {
    await page.click('button:has-text("Docked")', { timeout: 3000 });
  }
  console.log('  → Docked Marcus');
  await page.waitForTimeout(3000); // Show Marcus turning green

  // Step 2: Click Emily's red tile (she's the remaining red one)
  // Emily W is at index 22 — find the red tile
  try {
    await page.click('text=Emily W', { timeout: 5000 });
  } catch {
    // Find any remaining red-bordered tile
    const tiles = await page.$$('div[style*="rgb(229, 57, 53)"]');
    if (tiles.length > 0) await tiles[0].click();
  }
  console.log('  → Clicked Emily');
  await page.waitForTimeout(1000);

  // Step 3: Click "Absent" in the popup
  try {
    await page.click('text=Absent', { timeout: 3000 });
  } catch {
    await page.click('button:has-text("Absent")', { timeout: 3000 });
  }
  console.log('  → Marked absent');
  await page.waitForTimeout(3000); // Show 100% compliance

  // Step 4: Click "Release All — Free Time"
  try {
    await page.click('text=Release All', { timeout: 5000 });
  } catch {
    await page.click('button:has-text("Release")', { timeout: 3000 });
  }
  console.log('  → Released all');
  await page.waitForTimeout(3000); // Show gray grid

  await context.close();
  await browser.close();

  const fs = require('fs');
  const files = fs.readdirSync(DEMOS_DIR).filter(f => f.endsWith('.webm') && f !== 'phone-demo.webm');
  const latest = files.sort().pop();
  if (latest) {
    fs.renameSync(path.join(DEMOS_DIR, latest), path.join(DEMOS_DIR, 'teacher-dashboard.webm'));
    console.log('  ✅ Saved teacher-dashboard.webm');
  }
}

async function recordDeanDashboard() {
  console.log('🎬 Recording dean dashboard...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: DEMOS_DIR, size: { width: 1920, height: 1080 } }
  });
  const page = await context.newPage();

  await page.goto('https://focuspad-site.vercel.app/dean-dashboard.html');
  await page.waitForTimeout(3000); // Show 8-classroom overview

  // Step 1: Hover over Thompson's card (the red/low compliance one)
  try {
    await page.hover('text=Thompson', { timeout: 5000 });
  } catch {
    await page.hover('text=Mr. Thompson', { timeout: 3000 });
  }
  console.log('  → Hovering Thompson');
  await page.waitForTimeout(3000);

  // Step 2: Click "Daily Report" tab
  try {
    await page.click('text=Daily Report', { timeout: 5000 });
  } catch {
    await page.click('text=Daily', { timeout: 3000 });
  }
  console.log('  → Clicked Daily Report');
  await page.waitForTimeout(2000);

  // Step 3: Click Thompson in the daily report list
  try {
    await page.click('text=Thompson', { timeout: 5000 });
  } catch (e) {
    console.log('  → Thompson click fallback');
  }
  console.log('  → Clicked Thompson in report');
  await page.waitForTimeout(5000); // Hold on 72% data

  await context.close();
  await browser.close();

  const fs = require('fs');
  const files = fs.readdirSync(DEMOS_DIR).filter(f => f.endsWith('.webm') && f !== 'phone-demo.webm' && f !== 'teacher-dashboard.webm');
  const latest = files.sort().pop();
  if (latest) {
    fs.renameSync(path.join(DEMOS_DIR, latest), path.join(DEMOS_DIR, 'dean-dashboard.webm'));
    console.log('  ✅ Saved dean-dashboard.webm');
  }
}

async function convertToMp4() {
  const { execSync } = require('child_process');
  const fs = require('fs');
  const demos = ['phone-demo', 'teacher-dashboard', 'dean-dashboard'];
  
  for (const name of demos) {
    const webm = path.join(DEMOS_DIR, `${name}.webm`);
    const mp4 = path.join(DEMOS_DIR, `${name}.mp4`);
    if (fs.existsSync(webm)) {
      try {
        execSync(`ffmpeg -y -i "${webm}" -c:v libx264 -pix_fmt yuv420p "${mp4}"`, { stdio: 'pipe' });
        console.log(`  ✅ Converted ${name}.mp4`);
      } catch {
        console.log(`  ⚠️ ffmpeg not found — ${name}.webm is ready, convert manually or use in CapCut as-is`);
      }
    }
  }
}

async function main() {
  const fs = require('fs');
  if (!fs.existsSync(DEMOS_DIR)) fs.mkdirSync(DEMOS_DIR, { recursive: true });
  
  await recordPhoneDemo();
  await recordTeacherDashboard();
  await recordDeanDashboard();
  
  console.log('\n🎬 Converting to MP4...');
  await convertToMp4();
  
  console.log('\n✅ All demos recorded! Files in ./demos/');
}

main().catch(console.error);
