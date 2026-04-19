# VIO Mock Quiz — Nigerian Driver's License Practice Test

A free, open-source practice test for the Nigerian Vehicle Inspection Officer (VIO) driver's license exam, based on the FRSC Highway Code.

**🚗 Live demo: [viomocktest.netlify.app](https://viomocktest.netlify.app/)**

![license](https://img.shields.io/badge/license-MIT-blue.svg) ![no build](https://img.shields.io/badge/build-none-green.svg) ![PWA](https://img.shields.io/badge/PWA-installable-success.svg)

- **Zero dependencies** — single HTML file + one JS file. No build step.
- **Mobile-friendly** — works on any phone or laptop browser, installable as a PWA.
- **Realistic** — 60 seconds per question (matches actual VIO pace), 70% pass mark.
- **Three modes** — 20-question quick test, 40-question full test, or untimed Flashcards (Study mode).
- **80 questions** sourced directly from the FRSC Highway Code, balanced across Road Signs, Traffic Rules, Vehicle Knowledge, and Highway Code.
- **Authentic road signs** — 19 of 20 road-sign questions use the official Nigerian sign designs (yellow/red, FRSC-issued) sourced from Wikimedia Commons.
- **Smart features** — timer with warning states, question + option shuffle, light/dark mode, keyboard shortcuts, localStorage progress save, review-wrong-answers mode, best-score tracking, and offline support.

## Features

- **Timed quiz** with visible countdown; auto-submits when time runs out.
- **Flashcards / Study mode** — browse all 80 questions with answers + explanations visible. Filter by topic. No timer, no score.
- **Question shuffle** — different question set and option order every attempt.
- **Topic-balanced 20Q mode** — five questions from each of the four topics (Road Signs, Traffic Rules, Vehicle Knowledge, Highway Code).
- **Pass/Fail verdict** at 70% threshold, with topic-level breakdown.
- **Review wrong answers only** after the test, with explanations.
- **Resume in progress** — refresh the page and pick up where you left off.
- **Best scores** stored per mode in your browser.
- **Light/Dark mode** with `prefers-color-scheme` autodetection.
- **PWA installable** — add to your phone's home screen, works offline.
- **Full keyboard support**.

## Run locally

Just open `index.html` in any browser. No install, no server.

```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

> Note: the offline service worker only activates over `http(s)://`, not `file://`. To test PWA install/offline locally, run any static server in the project folder, e.g. `python3 -m http.server 8000` then open `http://localhost:8000`.

## Install on your phone

Once deployed (or running on a local server), the app is a Progressive Web App. To install:

- **Android (Chrome)**: open the site → menu → **Install app** (or "Add to Home screen").
- **iOS (Safari)**: open the site → Share button → **Add to Home Screen**.

After install, the app launches full-screen with a green status bar, runs offline, and behaves like a native app.

## Deploy to Netlify

Easiest path:

1. Drag the project folder onto [Netlify Drop](https://app.netlify.com/drop). Done.

Or via Git:

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Build command: *(none)*. Publish directory: `.` (already set in `netlify.toml`).

## Keyboard shortcuts

| Key | Action |
|---|---|
| `A` / `B` / `C` / `D` or `1`–`4` | Pick option |
| `←` / `→` | Previous / next question |
| `Enter` | Advance after answering, or start/retake |
| `Escape` | Exit review or study mode |
| `S` (start screen) | Open Study / Flashcards |
| `1`–`5` (study mode) | Switch topic chip (1 = All) |

## Tech stack

- HTML5 + vanilla JavaScript (no framework, no build tools)
- CSS custom properties (Linear-inspired design tokens)
- [Inter](https://rsms.me/inter/) font, loaded from CDN
- `localStorage` for persistence

## Contributing

Want to add or improve questions? See [CONTRIBUTING.md](CONTRIBUTING.md). All questions live in `questions.js` with a documented schema — you only need to edit one file to contribute.

## Disclaimer

This is a **practice test only**. Always refer to the official [FRSC Highway Code](https://frsc.gov.ng/) for authoritative information. Question content is community-contributed and may contain errors — open an issue or PR if you spot one.

## Acknowledgments

- Nigerian road sign SVGs sourced from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:SVG_road_signs_in_Nigeria) (public domain under Nigerian copyright law — government works).
- Question content paraphrased from the Federal Road Safety Corps (FRSC) Highway Code.
- [Inter](https://rsms.me/inter/) font by Rasmus Andersson.

## License

[MIT](LICENSE) — use it however you like.

Built with ❤️ by [Iyanu](https://github.com/Titan626).
