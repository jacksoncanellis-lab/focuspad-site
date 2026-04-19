# FocusPad — Master Agent Context

## Read memory.md before every task. When I correct you or you learn something new, update the relevant section in memory.md.

## What FocusPad Is
FocusPad is a hardware-software platform that automatically locks student phones during class and gives administrators real-time compliance data. Every desk has a small NFC pad. Student places phone on pad, app reads the NFC tag, phone locks automatically via Apple FamilyControls (iOS) or Device Admin (Android). Teacher sees a real-time dashboard showing every desk green or red. Deans see building-wide compliance. Phones unlock automatically when the bell rings.

## The Founder
Jackson Canellis. High school senior at Carl Sandburg High School in Orland Park, Illinois. Heading to UNC Chapel Hill fall 2026. Solo founder. Looking for a technical co-founder.

## Key Assets Already Built
- Live website: focuspad-site.vercel.app
- Interactive demo: focuspad-site.vercel.app/demo.html
- Comprehensive strategy document (25 sections covering market research, competitive analysis, technical architecture, financial model, go-to-market, fundraising strategy)
- Technical architecture document (NFC, BLE, MQTT, iOS Screen Time API, Android Device Admin, Raspberry Pi hub)
- Principal meeting completed: Dr. Smith at Carl Sandburg HS, 48 minutes, shaped product design
- Pitch deck and video script for INNOSpark competition (deadline April 4, 2026)

## Brand
- Primary color: #1B7A4A (green)
- Slogan: "Phones Off. Minds On."
- Logo: green version is primary
- Tone: professional but not corporate, conversational but credible

## Technical Stack (for the product build)
- Backend: Firebase (real-time database, free tier)
- Teacher dashboard: React web app, deployed on Vercel
- Android app: Kotlin, NFC reader, Device Admin API for phone locking
- iOS app: Swift, CoreNFC, FamilyControls API (requires Apple entitlement approval)
- Hardware prototype: NFC sticker tags (NTAG216) for initial testing, eventually custom ESP32 pads
- Real-time communication: MQTT broker, WebSocket for dashboard updates

## Current Priorities (in order)
1. INNOSpark pitch video and deck — deadline April 4, 2026
2. Build backend + teacher dashboard (April 5-12)
3. Build Android app (April 12-20)
4. Incorporate Delaware C-Corp, apply for Apple Developer entitlements
5. Build iOS app (timeline depends on Apple approval)
6. Mr. Connelly meeting (tech department head at Sandburg)
7. Letter of intent from Dr. Smith

## Key Market Stats
- 49.5 million students in ~100,000 US public schools
- 35+ states have passed phone restriction legislation
- 26 states have mandatory bell-to-bell bans
- California deadline: July 1, 2026
- Top 9 states with mandates = 21M students = $544M annual market
- Full legislation-driven market = 43M students = $1.24B annually
- Schools already spending millions: LAUSD $5.2M on Yondr, Houston $800K, NY allocating $16M
- 97% of students still use phones at school despite policies
- 72% of high school teachers say phone distraction is a major problem
- 90% of teachers support device restrictions

## Competitors and Why They Fail
- Yondr pouches: $25-30/student, creates lines, students break in with magnets, zero data, LAUSD pouches fell apart in weeks
- Phone cubbies: 100% teacher enforcement, no verification, no consistency, no admin oversight
- Honor system: 56% of teens still check phones even under bell-to-bell bans

## FocusPad's Key Differentiator
Dean/admin oversight dashboard. No other solution gives principals or deans real-time visibility into teacher compliance with phone policy across every classroom. This transforms FocusPad from a phone tool into an operational oversight platform.

## Financial Model
- Hardware: $30/pad one-time (60% margin)
- Software: $25/student/year (95% margin)
- Typical 1,500-student school: ~$40K/year after hardware
- Unit economics: $36,300 annual gross profit per school
- 760 schools = $28.5M ARR = ~$200M exit at 7x

## Writing Style Preferences
- Conversational, not corporate
- No jargon unless talking to technical people
- When writing pitch/marketing content: direct, confident, data-backed
- When writing code: clean, well-commented, standard frameworks
