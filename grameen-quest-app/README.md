# Grameen Quest - Advanced Prototype

This is an **advanced prototype** (not just MVP, not full production) for a gamified rural education web platform for **Class 6 to 12**.

## What is included
- Class-wise learning tracks for 6 to 12
- Subject practice quizzes by class
- XP, levels, coins, streaks, and badges
- Daily mission system with claimable rewards
- Weekly challenge round (5-question mode)
- Parent/Teacher snapshot panel
- Export student progress PDF report
- Installable web app behavior (PWA) + offline cache
- Mobile-friendly responsive layout

## Tech stack
- HTML, CSS, Vanilla JavaScript
- LocalStorage (prototype data persistence)
- Service Worker for offline support

## Run locally
For full PWA behavior, run on a local server.

### Option 1: VS Code Live Server
1. Install Live Server extension.
2. Open `index.html` with Live Server.

### Option 2: Node
```bash
npx serve .
```

## Deploy quickly

### Netlify (fastest)
1. Open [Netlify](https://app.netlify.com)
2. Drag and drop this project folder.
3. Deployment completes in seconds.

### Vercel
1. Push this folder to GitHub.
2. Open [Vercel](https://vercel.com/new)
3. Import repo and deploy with default settings.

## Why this fits your request
- Better than MVP: includes multiple functional modules, gamification loops, teacher/parent visibility, challenge and mission systems.
- Not full project: no backend auth, no database, no admin panel, no full syllabus engine.

## Next upgrade path (when you are ready)
1. Add Firebase authentication + cloud database.
2. Add real syllabus-aligned question banks per board/state.
3. Add teacher login, class roster, and assignment publishing.
4. Add bilingual audio lessons and analytics dashboard.
