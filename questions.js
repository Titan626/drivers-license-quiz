/**
 * VIO Mock Quiz — Question Bank
 *
 * To contribute new questions, add objects to the QUESTIONS array below.
 *
 * Schema:
 * {
 *   topic:   "Road Signs" | "Traffic Rules" | "Vehicle Knowledge" | "Highway Code"
 *   q:       "The question text"
 *   sign:    "<svg ...>...</svg>"   // optional — only for road-sign questions
 *   options: ["A", "B", "C", "D"]   // 2–4 options
 *   answer:  0                       // zero-based index of the correct option
 *   explain: "Why this answer is correct."
 * }
 *
 * Notes for contributors:
 * - Keep options similar in length so position alone doesn't hint at the answer.
 * - The app shuffles questions and option order at runtime, so don't rely on order.
 * - For SVG signs, use a 200x200 viewBox and inline colors (no external assets).
 * - Cite the FRSC Highway Code as the source of truth.
 */

window.QUESTIONS = [
  // ===== ROAD SIGNS =====
  {
    topic: "Road Signs",
    q: "This road sign means:",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="60,10 140,10 190,60 190,140 140,190 60,190 10,140 10,60" fill="#d93025" stroke="white" stroke-width="6"/><polygon points="60,10 140,10 190,60 190,140 140,190 60,190 10,140 10,60" fill="none" stroke="#a52714" stroke-width="2"/><text x="100" y="118" font-family="Arial, sans-serif" font-size="42" font-weight="900" fill="white" text-anchor="middle">STOP</text></svg>`,
    options: [
      "Slow down and proceed with caution",
      "Come to a complete stop before proceeding",
      "Stop only if other vehicles are present",
      "Stop for pedestrians only"
    ],
    answer: 1,
    explain: "A STOP sign (red octagon) requires every driver to come to a complete halt at the stop line, check that the way is clear, then proceed."
  },
  {
    topic: "Road Signs",
    q: "Based on its shape and colour, what type of sign is this?",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 190,180 10,180" fill="white" stroke="#d93025" stroke-width="14"/><text x="100" y="150" font-family="Arial, sans-serif" font-size="80" font-weight="900" fill="#1a1a1a" text-anchor="middle">!</text></svg>`,
    options: [
      "A regulatory (prohibitive) sign",
      "An informative / guide sign",
      "A warning sign",
      "A mandatory sign"
    ],
    answer: 2,
    explain: "Warning signs are triangular with a red border (point up). Circular red-bordered signs are regulatory (prohibitive); blue rectangles are informative; blue circles are mandatory."
  },
  {
    topic: "Road Signs",
    q: "This road sign means:",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="85" fill="white" stroke="#d93025" stroke-width="14"/><g transform="translate(45,80)"><rect x="5" y="15" width="100" height="22" rx="4" fill="#444"/><rect x="15" y="5" width="75" height="18" rx="6" fill="#444"/><circle cx="25" cy="40" r="8" fill="#1a1a1a"/><circle cx="85" cy="40" r="8" fill="#1a1a1a"/><rect x="20" y="10" width="25" height="12" rx="2" fill="#a8d5ff"/><rect x="55" y="10" width="25" height="12" rx="2" fill="#a8d5ff"/></g><line x1="35" y1="35" x2="165" y2="165" stroke="#d93025" stroke-width="12" stroke-linecap="round"/></svg>`,
    options: [
      "No overtaking",
      "No entry for motor vehicles",
      "End of restriction",
      "One-way street"
    ],
    answer: 1,
    explain: "A red circle with a vehicle symbol crossed out prohibits motor vehicles from entering that road."
  },
  {
    topic: "Road Signs",
    q: "This road sign means:",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#1967d2" stroke="white" stroke-width="6"/><circle cx="100" cy="100" r="90" fill="none" stroke="#0b4a9e" stroke-width="2"/><path d="M 55 100 L 125 100 L 125 75 L 160 105 L 125 135 L 125 110 L 55 110 Z" fill="white"/></svg>`,
    options: [
      "Right turn prohibited",
      "Warning: sharp right curve ahead",
      "Mandatory — you must turn right",
      "Right of way to vehicles on the right"
    ],
    answer: 2,
    explain: "Blue circular signs give mandatory (compulsory) instructions. A white right-arrow inside one means drivers must turn right."
  },
  {
    topic: "Road Signs",
    q: "This road sign means:",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 190,180 10,180" fill="white" stroke="#d93025" stroke-width="14"/><rect x="92" y="70" width="16" height="60" rx="3" fill="#1a1a1a"/><circle cx="100" cy="150" r="10" fill="#1a1a1a"/></svg>`,
    options: [
      "Other danger ahead — proceed with caution",
      "First aid station",
      "Emergency vehicles only",
      "End of all restrictions"
    ],
    answer: 0,
    explain: "The exclamation-mark warning triangle is a general 'other danger' sign, warning of a hazard not covered by other specific signs."
  },
  {
    topic: "Road Signs",
    q: "This road sign means:",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="92" fill="#1967d2"/><circle cx="100" cy="100" r="92" fill="none" stroke="#d93025" stroke-width="14"/><line x1="38" y1="38" x2="162" y2="162" stroke="#d93025" stroke-width="14" stroke-linecap="round"/></svg>`,
    options: [
      "No stopping (clearway)",
      "No parking",
      "End of parking zone",
      "Parking allowed"
    ],
    answer: 1,
    explain: "A blue circle with a red border and ONE diagonal red line means 'No Parking'. Two diagonal lines crossed (X) would mean 'No Stopping' (clearway)."
  },
  {
    topic: "Road Signs",
    q: "This road sign means:",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="white" stroke="#d93025" stroke-width="16"/><text x="100" y="132" font-family="Arial, sans-serif" font-size="82" font-weight="900" text-anchor="middle" fill="#1a1a1a">50</text></svg>`,
    options: [
      "Minimum speed is 50 km/h",
      "Advisory speed — 50 km/h suggested",
      "Maximum speed 50 km/h",
      "End of 50 km/h zone"
    ],
    answer: 2,
    explain: "A red circle with a number shows the MAXIMUM speed limit in km/h. You must not exceed this speed on that road."
  },
  {
    topic: "Road Signs",
    q: "This road sign means:",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 190,180 10,180" fill="white" stroke="#d93025" stroke-width="14"/><circle cx="95" cy="75" r="10" fill="#1a1a1a"/><rect x="88" y="87" width="14" height="40" rx="3" fill="#1a1a1a"/><rect x="79" y="118" width="10" height="38" rx="2" fill="#1a1a1a" transform="rotate(14 84 137)"/><rect x="101" y="118" width="10" height="38" rx="2" fill="#1a1a1a" transform="rotate(-14 106 137)"/><rect x="103" y="90" width="8" height="28" rx="2" fill="#1a1a1a" transform="rotate(-35 107 104)"/></svg>`,
    options: [
      "Pedestrians prohibited",
      "School zone — stop",
      "Pedestrian crossing ahead",
      "No footpath"
    ],
    answer: 2,
    explain: "A red warning triangle with a walking pedestrian means a pedestrian crossing is ahead. Slow down and be prepared to stop."
  },
  {
    topic: "Road Signs",
    q: "This road sign means:",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="85" fill="white" stroke="#d93025" stroke-width="14"/><path d="M 130 155 L 130 95 A 30 30 0 0 0 70 95 L 70 120" fill="none" stroke="#1a1a1a" stroke-width="10" stroke-linecap="round"/><polygon points="55,120 85,120 70,150" fill="#1a1a1a"/><line x1="40" y1="40" x2="160" y2="160" stroke="#d93025" stroke-width="12" stroke-linecap="round"/></svg>`,
    options: [
      "U-turn permitted",
      "Two-way traffic",
      "No U-turn",
      "Roundabout ahead"
    ],
    answer: 2,
    explain: "A red circle containing a U-shaped arrow with a diagonal red line prohibits making a U-turn at that location."
  },
  {
    topic: "Road Signs",
    q: "This road sign means:",
    sign: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#1967d2" stroke="white" stroke-width="6"/><circle cx="100" cy="100" r="90" fill="none" stroke="#0b4a9e" stroke-width="2"/><circle cx="100" cy="100" r="22" fill="none" stroke="white" stroke-width="3" stroke-dasharray="5 3"/><path d="M 100 42 A 58 58 0 0 0 42 100" fill="none" stroke="white" stroke-width="9" stroke-linecap="round"/><polygon points="30,95 52,110 55,88" fill="white"/><path d="M 58 148 A 58 58 0 0 0 128 165" fill="none" stroke="white" stroke-width="9" stroke-linecap="round"/><polygon points="120,155 142,170 140,148" fill="white"/><path d="M 155 128 A 58 58 0 0 0 155 72" fill="none" stroke="white" stroke-width="9" stroke-linecap="round"/><polygon points="170,78 148,68 158,90" fill="white"/></svg>`,
    options: [
      "Roundabout ahead — give way to traffic already on it",
      "Do not enter",
      "Three-way intersection",
      "End of motorway"
    ],
    answer: 0,
    explain: "A blue circle with three arrows circulating anti-clockwise means 'Roundabout Ahead'. Give way to vehicles already on the roundabout (approaching from your left in Nigeria)."
  },

  // ===== TRAFFIC RULES =====
  {
    topic: "Traffic Rules",
    q: "In Nigeria, you should normally overtake another vehicle on the:",
    options: [
      "Right side",
      "Left side",
      "Either side, depending on space",
      "Only on expressways"
    ],
    answer: 1,
    explain: "Nigeria drives on the right-hand side of the road, so overtaking is done on the LEFT of the vehicle you are passing."
  },
  {
    topic: "Traffic Rules",
    q: "At an uncontrolled intersection (no signs, signals, or officer), who should give way?",
    options: [
      "The driver who arrives later",
      "The driver approaching from the left",
      "The driver approaching from the right",
      "The driver of the smaller vehicle"
    ],
    answer: 1,
    explain: "At an uncontrolled junction, you must give way to traffic approaching from your right. So the driver on the LEFT gives way."
  },
  {
    topic: "Traffic Rules",
    q: "The maximum speed limit for a private car in a built-up (urban) area in Nigeria is:",
    options: [
      "30 km/h",
      "50 km/h",
      "80 km/h",
      "100 km/h"
    ],
    answer: 1,
    explain: "FRSC sets the limit at 50 km/h in built-up areas, 80 km/h on highways, and 100 km/h on expressways for cars."
  },
  {
    topic: "Traffic Rules",
    q: "Using a hand-held mobile phone while driving in Nigeria is:",
    options: [
      "Allowed if you drive slowly",
      "Allowed only for voice calls, not texting",
      "Prohibited — it is a recognised traffic offence (DUP)",
      "Allowed when stopped in traffic"
    ],
    answer: 2,
    explain: "Driving Under the Phone (DUP) is an FRSC offence carrying penalty points and a fine. Only properly installed hands-free systems are permitted."
  },
  {
    topic: "Traffic Rules",
    q: "Who is required to wear a seat belt in a moving vehicle?",
    options: [
      "Only the driver",
      "Only the driver and front passenger",
      "All occupants of the vehicle",
      "Only on expressways"
    ],
    answer: 2,
    explain: "Nigerian law requires ALL occupants — front and back seats — to wear seat belts at all times. Failure to do so is the SBV offence."
  },
  {
    topic: "Traffic Rules",
    q: "A steady amber (yellow) traffic light means:",
    options: [
      "Speed up to clear the intersection",
      "Stop, unless stopping would be unsafe",
      "Go — same as green",
      "The light is about to turn green"
    ],
    answer: 1,
    explain: "Amber means stop. You may only proceed if you are so close that stopping would be dangerous. Amber is NOT a signal to accelerate."
  },
  {
    topic: "Traffic Rules",
    q: "In good weather, the minimum safe following distance behind another vehicle is at least:",
    options: [
      "1 car length",
      "1 second",
      "2 seconds",
      "Half a second"
    ],
    answer: 2,
    explain: "The 2-second rule: watch the vehicle ahead pass a fixed point, then count '1-thousand, 2-thousand'. You shouldn't reach that point before you finish. Double it in rain, triple it on ice."
  },
  {
    topic: "Traffic Rules",
    q: "You should switch on your hazard warning lights when:",
    options: [
      "Parked in a no-parking zone",
      "Your vehicle has broken down or is a temporary obstruction",
      "Driving in heavy rain at normal speed",
      "Overtaking another vehicle"
    ],
    answer: 1,
    explain: "Hazard lights warn other road users that your vehicle is stationary or poses a temporary hazard. Never use them while driving normally."
  },
  {
    topic: "Traffic Rules",
    q: "You approach a zebra crossing and see a pedestrian waiting to cross. You should:",
    options: [
      "Sound your horn to warn them",
      "Speed up to pass before they step onto the crossing",
      "Slow down and stop to let them cross",
      "Continue unless a traffic officer is present"
    ],
    answer: 2,
    explain: "Pedestrians have the right of way at zebra crossings. Slow down, stop if necessary, and allow them to cross safely before moving off."
  },
  {
    topic: "Traffic Rules",
    q: "When driving around a roundabout in Nigeria, traffic moves:",
    options: [
      "Clockwise",
      "Anti-clockwise (counter-clockwise)",
      "In whichever direction is shorter",
      "Either direction"
    ],
    answer: 1,
    explain: "Because Nigeria drives on the right, traffic flows anti-clockwise around roundabouts. Give way to traffic already on the roundabout approaching from your left."
  },

  // ===== VEHICLE KNOWLEDGE =====
  {
    topic: "Vehicle Knowledge",
    q: "If the red oil pressure warning light comes on while you are driving, you should:",
    options: [
      "Continue to your destination and check later",
      "Pull over safely as soon as possible, stop the engine, and check the oil",
      "Drive faster to build pressure",
      "Ignore it if the engine sounds normal"
    ],
    answer: 1,
    explain: "The red oil light means oil pressure is dangerously low. Continuing to drive can destroy the engine in minutes. Stop and check immediately."
  },
  {
    topic: "Vehicle Knowledge",
    q: "The minimum legal tyre tread depth for a car tyre is approximately:",
    options: [
      "0.5 mm",
      "1.5 mm",
      "3 mm",
      "5 mm"
    ],
    answer: 1,
    explain: "Tyres worn below about 1.5 mm of tread are unsafe — they lose grip on wet roads and increase braking distance."
  },
  {
    topic: "Vehicle Knowledge",
    q: "If your brakes suddenly fail while driving, you should:",
    options: [
      "Jump out of the vehicle immediately",
      "Pump the brake pedal, shift to a lower gear, and use the handbrake gradually",
      "Switch off the ignition immediately",
      "Accelerate hard to change gears quickly"
    ],
    answer: 1,
    explain: "Pump the brakes to try to restore pressure, downshift to use engine braking, and apply the handbrake gently (never yank it). Avoid turning off the engine — you lose power steering."
  },
  {
    topic: "Vehicle Knowledge",
    q: "Before starting a long journey, which of these should you check?",
    options: [
      "Only the fuel level",
      "Only tyre pressure",
      "Tyres, oil, water/coolant, fuel, lights and brakes",
      "Only the brake fluid"
    ],
    answer: 2,
    explain: "Pre-trip checks cover fluids (oil, coolant, brake fluid), tyres (pressure + tread), lights, wipers, brakes and fuel — often remembered as POWER or FLOWER checks."
  },
  {
    topic: "Vehicle Knowledge",
    q: "If the engine temperature gauge shows the engine is overheating, you should:",
    options: [
      "Keep driving with the air-conditioning turned off",
      "Pour cold water directly on the hot engine",
      "Pull over safely, switch off the engine, and let it cool before opening the bonnet",
      "Open the radiator cap immediately to release steam"
    ],
    answer: 2,
    explain: "Continuing to drive can warp the cylinder head. Never open a hot radiator cap — the pressurised steam can cause severe burns. Let it cool first."
  },
  {
    topic: "Vehicle Knowledge",
    q: "If the battery/charging warning light stays on while you are driving, it usually means:",
    options: [
      "The battery is fully charged",
      "The alternator or drive belt may be failing — get it checked soon",
      "You need to change the tyres",
      "The fuel tank is almost empty"
    ],
    answer: 1,
    explain: "A lit battery symbol means the charging system is not keeping the battery topped up — usually an alternator or belt issue. The car will eventually stall when the battery drains."
  },
  {
    topic: "Vehicle Knowledge",
    q: "If a front tyre suddenly bursts at high speed, you should:",
    options: [
      "Brake hard and swerve onto the shoulder",
      "Grip the steering wheel firmly, ease off the accelerator, and slow down gradually",
      "Accelerate to maintain control",
      "Pull the handbrake sharply"
    ],
    answer: 1,
    explain: "Hard braking or swerving can cause a rollover. Hold the wheel firmly, release the accelerator, let the car slow naturally, then steer gently to a safe stop."
  },
  {
    topic: "Vehicle Knowledge",
    q: "In heavy rain you should:",
    options: [
      "Drive faster to get through it quickly",
      "Turn on hazard lights while driving at normal speed",
      "Reduce your speed, increase following distance, and use dipped headlights",
      "Switch to full-beam (high-beam) headlights"
    ],
    answer: 2,
    explain: "Wet roads mean longer stopping distances. Slow down, at least double your following distance, and use DIPPED (low-beam) headlights. High-beams reflect off rain and reduce visibility."
  },
  {
    topic: "Vehicle Knowledge",
    q: "The horn should be used:",
    options: [
      "To greet friends on the road",
      "To express frustration with other drivers",
      "To warn other road users of your presence when necessary",
      "Continuously in heavy traffic"
    ],
    answer: 2,
    explain: "The horn is a safety device, used briefly to alert others to danger. It is prohibited in designated silent zones such as near hospitals, schools, and places of worship."
  },
  {
    topic: "Vehicle Knowledge",
    q: "How often should you inspect your spare tyre?",
    options: [
      "Never — spare tyres don't need checking",
      "At least monthly — check pressure, tread, and condition",
      "Only when you have a flat tyre",
      "Every 3 years"
    ],
    answer: 1,
    explain: "A spare tyre is useless if it's flat, cracked, or rotten when you need it. Check pressure, tread and sidewall condition at least once a month."
  },

  // ===== HIGHWAY CODE =====
  {
    topic: "Highway Code",
    q: "FRSC stands for:",
    options: [
      "Federal Road Safety Commission",
      "Federal Road Safety Corps",
      "Federal Republic Safety Council",
      "Federal Roadworthiness and Safety Committee"
    ],
    answer: 1,
    explain: "The Federal Road Safety Corps is Nigeria's lead road-traffic agency, responsible for licensing, the Highway Code, and enforcement."
  },
  {
    topic: "Highway Code",
    q: "The minimum legal age to obtain a Nigerian driver's license is:",
    options: [
      "16 years",
      "17 years",
      "18 years",
      "21 years"
    ],
    answer: 2,
    explain: "You must be at least 18 years old to apply for a full Nigerian driver's license."
  },
  {
    topic: "Highway Code",
    q: "While driving in Nigeria, which documents must you carry in the vehicle?",
    options: [
      "Driver's license only",
      "Driver's license and vehicle license only",
      "Driver's license, vehicle license, insurance certificate, roadworthiness certificate and proof of ownership",
      "Driver's license and insurance only"
    ],
    answer: 2,
    explain: "The 'particulars' required are: Driver's License, Vehicle License, Insurance, Roadworthiness Certificate, and Proof of Ownership (and Hackney Permit if commercial)."
  },
  {
    topic: "Highway Code",
    q: "A Nigerian Class 'A' driver's license permits the holder to ride/drive:",
    options: [
      "Private motor cars",
      "Motorcycles (and tricycles)",
      "Articulated trucks",
      "Agricultural tractors"
    ],
    answer: 1,
    explain: "Class A covers motorcycles. Class B is for private cars, Class C is for cars used for hire/reward, and Class D is for articulated vehicles."
  },
  {
    topic: "Highway Code",
    q: "Driving Under the Influence of alcohol or drugs (DUI) in Nigeria carries:",
    options: [
      "Only a verbal warning",
      "2 penalty points",
      "5 penalty points",
      "10 penalty points — one of the most serious offences"
    ],
    answer: 3,
    explain: "DUI attracts 10 penalty points (the highest band) along with a fine and possible vehicle impoundment or prosecution."
  },
  {
    topic: "Highway Code",
    q: "If you are involved in a road traffic accident, your first legal duty is to:",
    options: [
      "Drive off quickly to avoid trouble",
      "Stop at the scene, render assistance to the injured, and report to FRSC or police",
      "Negotiate a cash settlement on the spot",
      "Move the vehicles immediately no matter what"
    ],
    answer: 1,
    explain: "The law requires you to STOP, help any injured persons, exchange particulars with the other party, and report the accident to the nearest police or FRSC post. Leaving the scene is an offence."
  },
  {
    topic: "Highway Code",
    q: "Which hand signal indicates that you are slowing down or about to stop?",
    options: [
      "Left arm extended straight out horizontally",
      "Left arm out with forearm pointing up (hand raised)",
      "Left arm out with forearm pointing down, palm toward the rear, moved up and down",
      "Left arm rotated in circles"
    ],
    answer: 2,
    explain: "Slowing/stopping: arm out with palm facing rear, moved up and down. A straight arm signals a LEFT turn; arm bent upward signals a RIGHT turn (in left-hand-drive cars used in Nigeria)."
  },
  {
    topic: "Highway Code",
    q: "A Nigerian driver's license is typically issued for a validity period of:",
    options: [
      "6 months or 1 year",
      "1 or 2 years",
      "3 or 5 years",
      "10 years or for life"
    ],
    answer: 2,
    explain: "FRSC issues driver's licenses valid for either 3 years or 5 years. You must renew before expiry — driving with an expired license is an offence (DWL)."
  },
  {
    topic: "Highway Code",
    q: "Driving a motor vehicle on a public road without a valid driver's license (DWL) is:",
    options: [
      "Permitted if you have some driving experience",
      "An offence — penalty points, fine, and possible vehicle impoundment",
      "An offence only on expressways",
      "Permitted only during the day"
    ],
    answer: 1,
    explain: "Driving Without License (DWL) is one of the most serious FRSC offences. It carries heavy penalty points, a substantial fine, and the vehicle can be impounded."
  },
  {
    topic: "Highway Code",
    q: "The penalty for Seat Belt Violation (SBV) in Nigeria is:",
    options: [
      "No penalty — only a warning",
      "2 penalty points and a fine",
      "10 penalty points and imprisonment",
      "Loss of license immediately"
    ],
    answer: 1,
    explain: "SBV attracts 2 penalty points plus a fine. Both the driver and ALL passengers must wear seat belts — it's the driver's responsibility to ensure this."
  }
];
