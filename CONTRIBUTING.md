# Contributing

Thanks for helping improve the VIO Mock Quiz! The most useful contributions are **new questions, corrections, and better explanations**.

## How to add a question

1. Open [`questions.js`](questions.js).
2. Add a new object to the `window.QUESTIONS` array.
3. Open `index.html` in your browser to verify it renders correctly.
4. Submit a pull request.

## Question schema

```js
{
  topic:   "Road Signs",          // one of: "Road Signs", "Traffic Rules", "Vehicle Knowledge", "Highway Code"
  q:       "This road sign means:",
  sign:    "<svg ...>...</svg>",  // OPTIONAL — only for road-sign questions
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
- `sign` — optional inline SVG. Use a `200x200` viewBox and inline colors. No external image URLs.
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
- [ ] If adding questions: each new question renders correctly and the correct answer is verified
- [ ] If adding SVG signs: the sign is recognizable at 110px (mobile size)
