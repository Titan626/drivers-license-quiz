// Optional authoring helper, using only Node's standard library.
// The generated HTML is committed; hosting still needs no build step.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'questions.js'), 'utf8'), sandbox);
const questions = sandbox.window.QUESTIONS;
const questionCount = questions.length;
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const origin = 'https://viomocktest.netlify.app';
const resource = 'vio-driving-test-questions.html';
const topics = [
  ['Road Signs', 'road-signs', 'Recognise warning, mandatory, prohibitory and information signs. Look at each sign before reading its answer.'],
  ['Traffic Rules', 'traffic-rules', 'Review priority, overtaking, speed limits, traffic lights and safe following distances.'],
  ['Vehicle Knowledge', 'vehicle-knowledge', 'Study vehicle checks, warning lights, safe responses to breakdowns and passenger protection.'],
  ['Highway Code', 'highway-code', 'Review licence classes, road-user responsibilities and the Highway Code topics in this practice bank.']
];
const faq = [
  ['Is this an official VIO test?', 'No. VIO Mock Quiz is a free, independent practice app. It is not affiliated with or endorsed by FRSC or VIO, and its questions are not an official examination paper.'],
  ['How many questions are in this mock test?', `This app has ${questionCount} practice questions across four topics. Quick mode selects 20 questions and Full mode selects 40. These counts describe this app, not a confirmed nationwide VIO test format.`],
  ['What are the timer and pass threshold?', 'Quick mode allows 20 minutes and Full mode allows 40 minutes: 60 seconds per question in one shared countdown. The practice pass threshold is 70%. These are app settings, not a claim about the official VIO pass mark or timing.'],
  ['Is the driving-school CBT the same as the VIO driving test?', 'FRSC’s April 2024 service level agreements describe a driving-school computer-based test (CBT), with a 60% pass mark, and a separate subsequent driving test with VIO. The CBT threshold should not be presented as a nationwide VIO test rule. Confirm your assessment format with your driving school or VIO office.'],
  ['Can I study the questions without taking a timed quiz?', `Yes. Flashcards show the answers and explanations without a timer. You can also read all ${questionCount} questions and answers on the linked study page, including road sign images and topic navigation.`],
  ['Can I use this app offline or without an account?', 'No account is needed. After a successful first online load and offline cache installation, the quiz and question resource can work offline. Quiz progress, best scores and theme preferences are stored in your browser.']
];
const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', url: `${origin}/about-the-test.html`, name: 'About the VIO practice test', mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) };
let about = fs.readFileSync(path.join(root, 'about-the-test.html'), 'utf8');
about = about.replace(/with \d+ practice questions/g, `with ${questionCount} practice questions`)
  .replace(/Read all \d+ VIO questions/g, `Read all ${questionCount} VIO questions`);
const replaceBlock = (name, content) => {
  const pattern = new RegExp(`<!-- GENERATED ${name} START -->[\\s\\S]*?<!-- GENERATED ${name} END -->`);
  if (!pattern.test(about)) throw new Error(`Missing ${name} markers`);
  about = about.replace(pattern, `<!-- GENERATED ${name} START -->\n${content}\n    <!-- GENERATED ${name} END -->`);
};
replaceBlock('FAQ SCHEMA', `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`);
replaceBlock('FAQ HTML', faq.map(([title, text]) => `    <article class="faq-item"><h3>${escape(title)}</h3><p>${escape(text)}</p></article>`).join('\n') + `\n    <p><a href="vio-driving-test-questions.html">Read all ${questionCount} VIO driving practice questions and answers →</a></p>`);
fs.writeFileSync(path.join(root, 'about-the-test.html'), about);
const sections = topics.map(([topic, id, intro]) => {
  const entries = questions.map((q, index) => ({ q, index })).filter(({ q }) => q.topic === topic);
  return `<section id="${id}" aria-labelledby="${id}-title">
      <div class="section-heading"><h2 id="${id}-title">${escape(topic)}</h2><span>${entries.length} questions</span></div>
      <p class="topic-intro">${escape(intro)}</p>
${entries.map(({ q, index }) => {
    if (!q.options[q.answer] || !q.explain) throw new Error(`Invalid question ${index + 1}`);
    // q.sign is trusted, repository-owned markup, as in the quiz renderer.
    let source = '';
    if (q.q.includes('historical licence-validity')) source = '<p class="question-source">Sources: <a href="https://frsc.gov.ng/about-us/who-we-are/">FRSC statutory overview</a>; <a href="https://www.nigeriadriverslicence.frsc.gov.ng/faq">current FRSC licence validity options</a>.</p>';
    if (q.q.includes('0–12 months')) source = '<p class="question-source">Safety source: <a href="https://www.nhtsa.gov/vehicle-safety/air-bags">NHTSA airbag and child-restraint guidance</a>.</p>';
    if (q.sources) source += '<p class="question-source">Sources: ' + q.sources.map(ref => `<a href="${escape(ref.url)}">${escape(ref.label)}</a>`).join('; ') + '.</p>';
    return `      <article class="question" id="question-${index + 1}">
        <p class="question-meta"><a href="#question-${index + 1}" aria-label="Link to question ${index + 1}">Question ${index + 1}</a> · ${escape(topic)}</p>
        <h3>${escape(q.q)}</h3>
        ${q.sign ? `<div class="sign-wrap">${q.sign}</div>` : ''}
        <ol class="answer-options" type="A">${q.options.map(option => `<li>${escape(option)}</li>`).join('')}</ol>
        <p class="answer"><strong>Answer: ${String.fromCharCode(65 + q.answer)}.</strong> ${escape(q.options[q.answer])}</p>
        <p class="explanation"><strong>Why:</strong> ${escape(q.explain)}</p>
        ${source}
      </article>`;
  }).join('\n')}
      <p class="section-end"><a href="#topics">Back to topics ↑</a> · <a href="./#practice">Try a practice quiz →</a></p>
    </section>`;
}).join('\n');
const pageSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  '@id': `${origin}/${resource}#page`, url: `${origin}/${resource}`,
  name: `VIO Driving Test Questions and Answers — ${questionCount} Practice Questions`,
  description: `An independent Nigerian driving study resource with ${questionCount} practice questions, answers, explanations and road sign images.`,
  inLanguage: 'en-NG', isAccessibleForFree: true,
  hasPart: topics.map(([name, id]) => ({ '@type': 'WebPageElement', name, url: `${origin}/${resource}#${id}` }))
};
fs.writeFileSync(path.join(root, resource), `<!DOCTYPE html>
<!-- Generated by scripts/generate-resource.cjs from questions.js. Edit the source, then regenerate. -->
<html lang="en-NG">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>VIO Driving Test Questions and Answers — ${questionCount} Practice Questions</title>
  <meta name="description" content="Study ${questionCount} Nigerian VIO driving practice questions and answers, with road sign images, explanations and sources. Independent study resource; no signup or timer.">
  <link rel="canonical" href="${origin}/${resource}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="VIO Mock Quiz">
  <meta property="og:title" content="VIO Driving Test Questions and Answers — ${questionCount} Practice Questions">
  <meta property="og:description" content="Read ${questionCount} independent Nigerian driving practice questions, answers and explanations by topic.">
  <meta property="og:url" content="${origin}/${resource}">
  <meta property="og:image" content="${origin}/icon-512.png">
  <meta name="twitter:card" content="summary">
  <meta name="theme-color" content="#008751">
  <link rel="icon" href="icon.svg" type="image/svg+xml">
  <link rel="manifest" href="manifest.json">
  <link rel="stylesheet" href="resource.css">
  <script type="application/ld+json">${JSON.stringify(pageSchema)}</script>
  <script src="resource.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to questions</a>
  <div class="wrap">
    <header class="site-header">
      <a class="brand" href="./"><img src="icon.svg" alt="" width="24" height="24">VIO Mock Quiz</a>
      <button class="icon-btn" id="themeToggle" type="button" aria-label="Toggle theme" title="Toggle theme" hidden>
          <svg id="themeIcon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
        </button>
    </header>
    <main id="content">
      <div class="intro">
        <p class="eyebrow">Independent Nigerian driving study</p>
        <h1>VIO driving test questions and answers</h1>
        <p>Read all ${questionCount} questions from our practice bank, with the correct answers, road sign images and explanations. Use the topics below to focus your revision, then test what you have learned in the <a href="./#practice">interactive mock quiz</a>.</p>
        <p class="notice">This is an independent study resource, not an official VIO examination paper. It is not affiliated with or endorsed by FRSC or VIO. Our quiz’s 20/40 questions, 60 seconds per question and 70% pass threshold are practice settings. Confirm actual assessment requirements with your driving school or VIO office.</p>
      </div>
      <nav id="topics" aria-label="Question topics">
        <h2>Choose a topic</h2>
        <div class="topic-links">${topics.map(([name, id]) => `<a href="#${id}">${escape(name)} <span>${questions.filter(q => q.topic === name).length}</span></a>`).join('')}</div>
        <p><a href="#sources">Sources and content notes ↓</a> · <a href="./#practice">Take a timed practice quiz →</a></p>
      </nav>
      ${sections}
      <section id="sources" aria-labelledby="sources-title">
        <h2 id="sources-title">Sources and content notes</h2>
        <p>The question bank contains community-written explanations of FRSC Highway Code topics. The 20 questions added in October 2026 include individual answer sources. It is a study aid and may contain errors; the linked official sources take priority. The bank has not been verified as a current official examination paper.</p>
        <ul class="source-list">
          <li><a href="https://frsc.gov.ng/publications/">FRSC publications</a> — official road safety materials for further study. Highway Code section references in the explanations come from the existing question bank.</li>
          <li><a href="https://frsc.gov.ng/wp-content/uploads/2024/05/SLAs-TO-PEBEC.pdf">FRSC service level agreements, April 2024 (PDF)</a> — page 3 describes the VIO driving test; page 19 describes a separate driving-school CBT with a 60% pass mark. That CBT threshold does not establish a nationwide VIO test threshold.</li>
          <li><a href="https://www.nigeriadriverslicence.frsc.gov.ng/faq">FRSC driver’s licence FAQ</a> — current application guidance includes three- and five-year validity options. The three-year question above refers specifically to the historical FRSC Act 2007 provision.</li>
          <li><a href="https://frsc.gov.ng/about-us/who-we-are/">FRSC statutory overview</a> — describes the historical three-year validity provision.</li>
          <li><a href="https://www.nhtsa.gov/vehicle-safety/air-bags">NHTSA airbag safety</a> — child-restraint safety guidance: never place a rear-facing restraint in front of an active passenger airbag. This is safety guidance, not a statement of Nigerian licensing law.</li>
          <li><a href="https://commons.wikimedia.org/wiki/Category:SVG_road_signs_in_Nigeria">Wikimedia Commons: Nigerian road sign SVGs</a> — source of the existing local SVG signs. Six additional raster study illustrations were generated and checked against the FRSC MI-III Compendium 2025 sign chart (page 4) and chevron rule (§1.7, page 6).</li>
        </ul>
        <p>Additional answer references: <a href="https://frsc.gov.ng/wp-content/uploads/2025/04/MI-III-COMPENDIUM-2025.pdf">FRSC MI-III Compendium 2025</a>, <a href="https://frsc.gov.ng/wp-content/uploads/2025/04/RC-COMPENDIUM-2025.pdf">FRSC RC Compendium 2025</a>, <a href="https://frsc.gov.ng/wp-content/uploads/2025/04/PMI-COMPENDIUM-2025.pdf">FRSC PMI Compendium 2025</a>, <a href="https://www.nhtsa.gov/vehicle-safety/tires">NHTSA tyre maintenance</a> and <a href="https://www.nhtsa.gov/winter-driving-tips">ABS guidance</a>, and <a href="https://www.ontario.ca/document/official-mto-drivers-handbook/changing-positions">Ontario Ministry of Transportation blind-spot guidance</a>. International sources support general driving safety, not Nigerian licensing-law claims.</p>
        <p>Application and safety sources above checked on 2 October 2026. Confirm current requirements before applying. To report a content error, <a href="https://github.com/Titan626/drivers-license-quiz/issues">open an issue with the question and an authoritative source</a>.</p>
        <p><a href="./#practice">Practise with the quiz →</a> · <a href="#topics">Back to topics ↑</a></p>
      </section>
    </main>
    <footer>Independent practice app · <a href="./">VIO Mock Quiz</a> · Built by <a href="https://github.com/Titan626">Iyanu</a></footer>
  </div>
</body>
</html>
`.replace(/[ \t]+$/gm, ''));
console.log(`Generated ${resource}: ${questions.length} questions. Synced About page FAQ and schema.`);
