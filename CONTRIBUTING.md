# Contributing

Thanks for helping improve the VIO Mock Quiz! The most useful contributions are **new questions, corrections, and better explanations**.

## How to add a question

1. Open [`questions.js`](questions.js).
2. Add a new object to the `window.QUESTIONS` array.
3. Preserve existing array order and append new questions. Saved quizzes use array indices; reordering or deleting questions can invalidate progress.
4. Run `node scripts/generate-resource.cjs` to sync the readable resource and About page FAQ/schema. Node is only needed for this optional authoring helper; the deployed app has no build step or dependencies.
5. Open `index.html`, `about-the-test.html` and `vio-driving-test-questions.html` in your browser to verify all three render correctly.
6. Bump `CACHE_VERSION` in `sw.js` so returning users receive the update, then submit a pull request.

## Question schema

```js
{
  topic:   "Road Signs",          // one of: "Road Signs", "Traffic Rules", "Vehicle Knowledge", "Highway Code"
  q:       "This road sign means:",
  sign:    "<svg ...>...</svg>",  // OPTIONAL — a sign or other relevant illustration
  options: [
    "Slow down and proceed with caution",
    "Come to a complete stop before proceeding",
    "Stop only if other vehicles are present",
    "Stop for pedestrians only"
  ],
  answer:  1,                      // zero-based index of the CORRECT option (here: option B)
  explain: "A STOP sign (red octagon) requires every driver to come to a complete halt..."
}
```

### Field rules

- `topic` — must be one of the four existing topics. Don't introduce new ones in a question PR; open a discussion issue first.
- `q` — phrase as a complete sentence. End with `:` if the options complete the sentence, `?` if it's a question.
- `sign` — optional inline SVG or an image pointing to a local `signs/` SVG or `illustrations/` raster image. It may illustrate a sign or a scenario in any topic. Use descriptive alt text. For inline SVG use a `200x200` viewBox and inline colours. No external image URLs. Add new local assets to the service-worker precache list. Generated sign images must be checked against an authoritative reference.
- `sources` — optional array of `{ label, url }` references, rendered as answer-source links on the readable study page. Include a specific authoritative reference for every new question.
- `options` — 2 to 4 strings. Keep them similar in length so position alone doesn't hint at the answer.
- `answer` — zero-based index. The app shuffles options at runtime, so the original position doesn't matter to users — only correctness matters.
- `explain` — explain *why* the correct answer is correct, not just what it is. Reference the FRSC Highway Code where possible.

## Style guidelines

- **Plain English** — short sentences, no jargon unless defined in the explanation.
- **Cite FRSC** — when stating a number (speed limit, penalty points, age), mention the source in the explanation.
- **No trick questions** — the goal is preparing real drivers, not catching them out.
- **No real names or places** that could date the question.
- **British English spelling** (tyre not tire, kilometre not kilometer) to match Nigerian usage.

## Reporting errors

Found a wrong answer or outdated information? Open an issue with:

- The question text (or screenshot)
- What's wrong
- A citation to the FRSC Highway Code or other authoritative source

## Code contributions

The app is intentionally a single-file vanilla JS app with no build step. Please don't introduce frameworks, bundlers, or TypeScript — keep the "open it in a browser, it works" property intact. If you want to refactor, open a discussion issue first.

## Pull request checklist

- [ ] Tested in both light and dark mode
- [ ] Tested on mobile (DevTools device toolbar is fine)
- [ ] No console errors
- [ ] Readable resource regenerated; question count, answers and explanations match the bank
- [ ] Visible About page FAQ matches its JSON-LD (both are generated from one list)
- [ ] Quiz/resume works; existing question indices are preserved
- [ ] Initial HTML, direct topic/question links and offline cache update checked
- [ ] If adding questions: each new question renders correctly and the correct answer is verified
- [ ] If adding images: symbols, arrows, words and road markings match the cited reference and remain clear on mobile
