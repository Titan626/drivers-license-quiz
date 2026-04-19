# VIO Mock Quiz — Nigerian Driver's License Practice Test

A free, open-source practice test for the Nigerian Vehicle Inspection Officer (VIO) driver's license exam, based on the FRSC Highway Code.

- **Zero dependencies** — single HTML file + one JS file. No build step.
- **Mobile-friendly** — works on any phone or laptop browser.
- **Realistic** — 60 seconds per question (matches actual VIO pace), 70% pass mark.
- **Two modes** — 20-question quick test (~20 min) or 40-question full test (~40 min).
- **Smart features** — timer with warning states, question + option shuffle, light/dark mode, keyboard shortcuts, localStorage progress save, review-wrong-answers mode, best-score tracking.

## Features

- **Timed quiz** with visible countdown; auto-submits when time runs out.
- **Question shuffle** — different question set and option order every attempt.
- **Topic-balanced 20Q mode** — five questions from each of the four topics (Road Signs, Traffic Rules, Vehicle Knowledge, Highway Code).
- **Pass/Fail verdict** at 70% threshold, with topic-level breakdown.
- **Review wrong answers only** after the test, with explanations.
- **Resume in progress** — refresh the page and pick up where you left off.
- **Best scores** stored per mode in your browser.
- **Light/Dark mode** with `prefers-color-scheme` autodetection.
- **Full keyboard support**.

## Run locally

Just open `index.html` in any browser. No install, no server.

```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

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
| `Escape` | Exit review mode |

## Tech stack

- HTML5 + vanilla JavaScript (no framework, no build tools)
- CSS custom properties (Linear-inspired design tokens)
- [Inter](https://rsms.me/inter/) font, loaded from CDN
- `localStorage` for persistence

## Contributing

Want to add or improve questions? See [CONTRIBUTING.md](CONTRIBUTING.md). All questions live in `questions.js` with a documented schema — you only need to edit one file to contribute.

## Disclaimer

This is a **practice test only**. Always refer to the official [FRSC Highway Code](https://frsc.gov.ng/) for authoritative information. Question content is community-contributed and may contain errors — open an issue or PR if you spot one.

## License

[MIT](LICENSE) — use it however you like.
