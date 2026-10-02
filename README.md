# VIO Mock Quiz — Nigerian Driver's License Practice Test

A free, open-source, independent Nigerian driving practice app covering FRSC Highway Code topics. It is not affiliated with or endorsed by FRSC or VIO; the question bank is not an official examination paper.

**🚗 Live demo: [viomocktest.netlify.app](https://viomocktest.netlify.app/)**

![license](https://img.shields.io/badge/license-MIT-blue.svg) ![no build](https://img.shields.io/badge/build-none-green.svg) ![PWA](https://img.shields.io/badge/PWA-installable-success.svg)

- **Zero runtime dependencies** — static HTML/CSS and vanilla JavaScript. No build step.
- **Mobile-friendly** — works on any phone or laptop browser, installable as a PWA.
- **Practice settings** — a shared countdown allowing 60 seconds per question and a 70% practice pass threshold. These are app settings, not confirmed nationwide VIO rules.
- **Three modes** — 20-question quick test, 40-question full test, or untimed Flashcards (Study mode).
- **120 community-written practice questions** covering FRSC Highway Code topics, 30 each across Road Signs, Traffic Rules, Vehicle Knowledge, and Highway Code.
- **Road-sign study** — existing local SVG signs plus ten generated sign illustrations checked against FRSC’s published chart, and a chevron road-marking diagram.
- **Smart features** — timer with warning states, question + option shuffle, light/dark mode, keyboard shortcuts, localStorage progress save, review-wrong-answers mode, best-score tracking, and offline support.

## Features

- **Timed quiz** with visible countdown; auto-submits when time runs out.
- **Flashcards / Study mode** — browse all 120 questions with answers + explanations visible. Filter by topic. No timer, no score.
- **Question shuffle** — different question set and option order every attempt.
- **Topic-balanced 20Q mode** — five questions from each of the four topics (Road Signs, Traffic Rules, Vehicle Knowledge, Highway Code).
- **Practice target verdict** at 70% threshold, with topic-level breakdown.
- **Review wrong answers only** after the test, with explanations.
- **Resume in progress** — refresh the page and pick up where you left off.
- **Best scores** stored per mode in your browser.
- **Light/Dark mode** with `prefers-color-scheme` autodetection.
- **PWA installable** — add to your phone's home screen, works offline.
- **Full keyboard support**.

## Readable study resource

[`vio-driving-test-questions.html`](vio-driving-test-questions.html) contains all 120 questions, options, correct answers, explanations, sign images, topic anchors and source notes in the initial HTML. It works without JavaScript and links back to the interactive quiz. The homepage focuses on the original quiz container, with an “About the test” link underneath. [`about-the-test.html`](about-the-test.html) holds the introduction, study-resource link and visible FAQ that matches its structured data.

`questions.js` remains the question source of truth. After editing questions or the About page FAQ in `scripts/generate-resource.cjs`, run the optional, dependency-free authoring helper:

```bash
node scripts/generate-resource.cjs
```

Commit the generated HTML alongside source changes. Deployment still serves committed static files with no build step. Preserve question order: browser-saved sessions refer to original array indices. Bump `CACHE_VERSION` in `sw.js` for every release.

The October 2026 expansions add 40 source-checked questions and eleven generated illustrations. [Question and answer inventory](docs/question-expansion.md) records sources, duplicate review and image requirements; [generation prompts](docs/image-generation-prompts.json) records the first batch of built-in imagegen prompts. The [101–120 inventory](docs/question-expansion-101-120.md) and [second prompt set](docs/image-generation-prompts-101-120.json) cover the latest 20 additions and five sign images.

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

This is an **independent practice test only**, not an official FRSC or VIO service. Confirm actual assessment requirements with your driving school or VIO office. Always refer to the official [FRSC Highway Code](https://frsc.gov.ng/) for authoritative information. Question content is community-contributed and may contain errors — open an issue or PR if you spot one.

## Acknowledgments

- Nigerian road sign SVGs sourced from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:SVG_road_signs_in_Nigeria) (public domain under Nigerian copyright law — government works).
- Question content paraphrased from the Federal Road Safety Corps (FRSC) Highway Code.
- [Inter](https://rsms.me/inter/) font by Rasmus Andersson.

## License

[MIT](LICENSE) — use it however you like.

Built with ❤️ by [Iyanu](https://github.com/Titan626).
