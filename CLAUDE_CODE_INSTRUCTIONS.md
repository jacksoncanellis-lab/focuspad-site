# Instructions for Claude Code

## Record Demo Videos

Run these commands to record all 3 FocusPad demo screen recordings:

```bash
cd ~/Desktop/focuspad-site
npm install playwright
npx playwright install chromium
node record-demos.js
```

This will create 3 video files in `./demos/`:
- `phone-demo.webm` (or .mp4 if ffmpeg available)
- `teacher-dashboard.webm`  
- `dean-dashboard.webm`

The script opens each demo page on focuspad-site.vercel.app, clicks through the interactions with proper timing, and records the screen.

### What each recording captures:

**Phone demo:** Shows both phones → clicks "tap to dock" → connecting animation → lock screen → clicks TikTok → restriction screen

**Teacher dashboard:** Shows 30-desk grid → clicks "Student Docked Phone" (Marcus turns green) → clicks Emily's red tile → marks absent → clicks "Release All — Free Time" → grid goes gray

**Dean dashboard:** Shows 8-classroom overview → hovers Thompson (red card) → clicks "Daily Report" tab → clicks Thompson → shows 72% day breakdown

### If the automated clicks miss:

The demo UIs are React-based and element positions can vary. If Claude Code sees click failures in the console output, it should:
1. Open the URL in a visible browser (`headless: false` in the script)
2. Inspect the actual element selectors
3. Adjust the click targets in record-demos.js

### After recording:

Move the demo files into the capcut-project folder so everything is together for video editing.
