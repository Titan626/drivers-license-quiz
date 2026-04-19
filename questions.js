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
    sign: `<img src="signs/NG_road_sign_B02a.svg" alt="Nigerian STOP sign — yellow-bordered octagon">`,
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
    sign: `<img src="signs/NG_road_sign_A32.svg" alt="Generic warning triangle — other danger">`,
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
    sign: `<img src="signs/NG_road_sign_C02.svg" alt="No motor vehicles">`,
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
    sign: `<img src="signs/NG_road_sign_D01c.svg" alt="Mandatory turn right — blue circle with right arrow">`,
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
    sign: `<img src="signs/NG_road_sign_A32.svg" alt="Other danger warning triangle">`,
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
    sign: `<img src="signs/NG_road_sign_C19.svg" alt="No parking sign">`,
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
    sign: `<img src="signs/NG_road_sign_A12.svg" alt="Pedestrian crossing warning sign">`,
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
    sign: `<img src="signs/NG_road_sign_C12.svg" alt="No U-turn sign">`,
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
    sign: `<img src="signs/NG_road_sign_A22.svg" alt="Roundabout ahead warning sign">`,
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
    q: "How long should you drive continuously before taking a rest break, per the FRSC Highway Code?",
    options: [
      "8 hours, then a 5-minute break",
      "4 hours, then a 15-minute break",
      "12 hours, then a 30-minute break",
      "Only when you feel tired"
    ],
    answer: 1,
    explain: "The FRSC Highway Code (Section B.I) requires a 15-minute break after every 4 hours of driving. No single driver should drive more than 10 hours in 24 hours, and journeys exceeding 10 hours require a co-driver."
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
    explain: "Per the FRSC Highway Code (Section C.II), Class A covers motorcycles. Class B and C are for vehicles under 3 tonnes; Class D is for vehicles other than motorcycles/taxis/buses excluding articulated; Class G is for articulated vehicles; Class F is for agricultural machines."
  },
  {
    topic: "Highway Code",
    q: "The maximum legal blood alcohol concentration (BAC) for drivers in Nigeria is:",
    options: [
      "Zero — no alcohol allowed",
      "0.05% (0.5 g per litre of blood)",
      "0.10% (1.0 g per litre of blood)",
      "There is no specified legal limit"
    ],
    answer: 1,
    explain: "Per S.10(4)(K) of the FRSC Act 2007, the maximum BAC is 0.5 g per litre of blood (0.05%). Even below this limit, alcohol affects vision, judgement and coordination — DO NOT DRINK AND DRIVE."
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
    q: "Per the FRSC Act, a Nigerian driver's licence is issued for a validity period of:",
    options: [
      "6 months",
      "1 year",
      "3 years (subject to renewal)",
      "Lifetime"
    ],
    answer: 2,
    explain: "Per the FRSC Act 2007, the validity period for drivers' licences shall be 3 years, subject to renewal at expiration. Driving with an expired licence is an offence (DWL)."
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
    q: "Under the FRSC Act, who is responsible for ensuring that all occupants of a vehicle wear seat belts?",
    options: [
      "Each passenger individually",
      "The driver of the vehicle",
      "Only the front-seat passenger",
      "Only required on expressways"
    ],
    answer: 1,
    explain: "Per S.10(4)(ee) of the FRSC Act 2007, the driver must fasten their own seatbelt AND ensure that everyone in the vehicle belts up. Seat Belt Violation (SBV) is a recognised offence."
  },

  // ===== ROAD SIGNS (SET 3 — sourced from Highway Code Section B) =====
  {
    topic: "Road Signs",
    q: "This warning sign means:",
    sign: `<img src="signs/NG_road_sign_A13a.svg" alt="School / children crossing warning sign">`,
    options: [
      "School / children crossing ahead — slow down",
      "No children allowed on this road",
      "Playground entrance",
      "End of school zone"
    ],
    answer: 0,
    explain: "Per Highway Code Section B.II (Warning Signs), a red triangle with adult and child figures warns of a school or area where children are likely to cross. Slow down and be ready to stop."
  },
  {
    topic: "Road Signs",
    q: "This warning sign means:",
    sign: `<img src="signs/NG_road_sign_A11.svg" alt="Falling rocks warning sign">`,
    options: [
      "Loose chippings on road",
      "Falling rocks ahead",
      "End of paved road",
      "Speed bumps ahead"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.II (Warning Signs), this triangle warns of falling rocks from a hillside or cliff. Reduce speed and watch for debris on the carriageway."
  },
  {
    topic: "Road Signs",
    q: "This warning sign means:",
    sign: `<img src="signs/NG_road_sign_A09.svg" alt="Slippery road warning sign">`,
    options: [
      "Slippery road surface — drive with caution",
      "Car repair garage ahead",
      "End of dual carriageway",
      "Vehicle washing area"
    ],
    answer: 0,
    explain: "Per Highway Code Section B.II, the slippery-surface warning triangle (car with skid marks) tells you the road may be slippery — wet, oily, or covered in loose material. Reduce speed and avoid sudden braking."
  },
  {
    topic: "Road Signs",
    q: "This warning sign means:",
    sign: `<img src="signs/NG_road_sign_A04b.svg" alt="Narrow bridge warning sign">`,
    options: [
      "Road widens ahead",
      "Tunnel ahead",
      "Narrow bridge ahead",
      "Two-way traffic ahead"
    ],
    answer: 2,
    explain: "Per Highway Code Section B.II, the narrow-bridge warning triangle (two arcs curving inward) tells you the road narrows for a bridge. Slow down — only one vehicle may be able to cross at a time."
  },
  {
    topic: "Road Signs",
    q: "This warning sign means:",
    sign: `<img src="signs/NG_road_sign_A18a.svg" alt="Cross-road intersection warning sign">`,
    options: [
      "Road closed",
      "End of restriction",
      "Cross-road ahead",
      "First aid post"
    ],
    answer: 2,
    explain: "Per Highway Code Section B.II, a red triangle containing a black X warns of a cross-road ahead. Slow down and check both sides for traffic on the intersecting road."
  },
  {
    topic: "Road Signs",
    q: "This mandatory sign means:",
    sign: `<img src="signs/NG_road_sign_D02a.svg" alt="Pass on the left — mandatory sign">`,
    options: [
      "Turn left ahead",
      "Pass to the left of the obstruction or divider",
      "Two-way traffic",
      "Left bend ahead"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.III (Mandatory Signs), a blue circle with a down-left arrow means you MUST pass to the LEFT of the traffic island, obstruction or divider ahead."
  },
  {
    topic: "Road Signs",
    q: "This sign means:",
    sign: `<img src="signs/NG_road_sign_D01a.svg" alt="One-way traffic sign">`,
    options: [
      "Two-way traffic",
      "One-way traffic in the direction of the arrow",
      "Diversion ahead",
      "No entry"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.III, a blue rectangular sign with a single white arrow indicates a one-way street — traffic flows only in the direction shown."
  },
  {
    topic: "Road Signs",
    q: "This mandatory sign means:",
    sign: `<img src="signs/NG_road_sign_D04.svg" alt="Compulsory cycle track sign">`,
    options: [
      "No cycling allowed",
      "Compulsory cycle track — cyclists must use it",
      "Cycle hire station",
      "Children playing"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.III, a blue circle with a bicycle indicates a compulsory cycle track. Where this sign is shown, cyclists must use the designated cycle path."
  },
  {
    topic: "Road Signs",
    q: "This sign means:",
    sign: `<img src="signs/NG_road_sign_F1a.svg" alt="Hospital information sign">`,
    options: [
      "Pharmacy",
      "Hospital / first-aid station",
      "Fuel station",
      "Police checkpoint"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.IV (Information Signs), the hospital sign indicates a hospital or first-aid station nearby. Drive carefully and avoid sounding the horn within the silent zone around it."
  },

  // ===== TRAFFIC RULES (SET 3 — sourced from Highway Code Section B & A) =====
  {
    topic: "Traffic Rules",
    q: "When driving (without trafficators), an arm extended straight out horizontally to the left side of the vehicle means:",
    options: [
      "I am about to slow down or stop",
      "I want to turn left",
      "I want to turn right",
      "I am going straight on"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.VI (Hand Signals), a left arm extended straight out horizontally signals a LEFT turn. Use this when your trafficators have failed."
  },
  {
    topic: "Traffic Rules",
    q: "When driving, a left arm extended out with the forearm bent upwards (pointing skywards) signals:",
    options: [
      "Slowing down or stopping",
      "Left turn",
      "Right turn",
      "Hazard ahead"
    ],
    answer: 2,
    explain: "Per Highway Code Section B.VI (Hand Signals), an arm extended with forearm pointing UP signals a RIGHT turn (the driver effectively 'points' right by raising the forearm)."
  },
  {
    topic: "Traffic Rules",
    q: "Use of the horn is prohibited near which of the following?",
    options: [
      "Open expressways",
      "Hospitals, schools and places of worship (silent zones)",
      "Roundabouts",
      "Petrol stations"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.II (Categories of Road Users — The Motorist), the horn must be used only to warn other road users of your presence. It is prohibited in designated silent zones — hospitals, schools, and places of worship."
  },
  {
    topic: "Traffic Rules",
    q: "Which of the following is NOT permitted on a Nigerian expressway?",
    options: [
      "Vehicles travelling at 90 km/h",
      "Pedestrians, animals, and learner drivers",
      "Buses with passengers",
      "Articulated vehicles"
    ],
    answer: 1,
    explain: "Per Highway Code Section A.X (Expressway Driving), pedestrians, hawkers, animals, pedal cycles, learner drivers, and motorcycles below a specified capacity are prohibited on expressways. Stopping, loading, and unloading are also banned."
  },
  {
    topic: "Traffic Rules",
    q: "The maximum speed limit for a motorcycle in a built-up area in Nigeria is:",
    options: [
      "30 km/h",
      "50 km/h",
      "80 km/h",
      "100 km/h"
    ],
    answer: 1,
    explain: "Per Highway Code Section A.IX (Speed Limits), motorcycles are limited to 50 km/h in built-up areas. Motorcycles under 50cc are not allowed on highways or expressways at all."
  },
  {
    topic: "Traffic Rules",
    q: "The maximum speed limit for a tanker or articulated trailer on a Nigerian expressway is:",
    options: [
      "50 km/h",
      "60 km/h",
      "80 km/h",
      "100 km/h"
    ],
    answer: 1,
    explain: "Per Highway Code Section A.IX speed-limit table, tankers and trailers may travel at up to 60 km/h on expressways (50 km/h on highways, 45 km/h in built-up areas)."
  },
  {
    topic: "Traffic Rules",
    q: "You approach an unmanned level crossing and the red lights start flashing. You should:",
    options: [
      "Speed up to clear the crossing before the train arrives",
      "Stop and wait — do not cross until the lights stop flashing",
      "Sound your horn and proceed",
      "Reverse to the previous junction"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.VII (Rail crossing), at an unmanned level crossing the flashing red lights mean a train is approaching. Stop and wait — the lights will go off when it is safe to cross."
  },
  {
    topic: "Traffic Rules",
    q: "At a typical highway speed of 80 km/h, the approximate overall stopping distance for a car in good conditions is:",
    options: [
      "About 22 metres",
      "About 46 metres",
      "About 72 metres",
      "About 120 metres"
    ],
    answer: 2,
    explain: "Per Highway Code Section A.XI (Stopping Distance) table, at 80 km/h the overall stopping distance is approximately 72 metres (22 m thinking + 50 m braking). Wet roads and poor brakes increase this significantly."
  },
  {
    topic: "Traffic Rules",
    q: "When may you legitimately overtake a vehicle on its right (in Nigeria)?",
    options: [
      "Whenever you are in a hurry",
      "When the driver in front has signalled a left turn, or in slow-moving queued traffic",
      "Only on expressways",
      "Never under any circumstance"
    ],
    answer: 1,
    explain: "Per Highway Code Section A.VIII (Overtaking Rules), the general rule is to overtake on the LEFT. Overtaking on the right is permitted when the driver ahead is signalling a left turn, when you are turning right at a junction, or in slow queueing traffic."
  },
  {
    topic: "Traffic Rules",
    q: "When you are being overtaken by another vehicle, you should:",
    options: [
      "Accelerate to prevent the overtake",
      "Slow down if necessary to help the overtaking vehicle pass safely",
      "Swerve into the overtaking lane",
      "Sound your horn continuously"
    ],
    answer: 1,
    explain: "Per Highway Code Section A.VIII (On Being Overtaken), do NOT accelerate when being overtaken. Slow down if necessary so the overtaking driver can pass and return to their lane safely."
  },

  // ===== VEHICLE KNOWLEDGE (SET 3 — sourced from Highway Code Section E & F) =====
  {
    topic: "Vehicle Knowledge",
    q: "The pre-takeoff vehicle check mnemonic 'WOFT' stands for:",
    options: [
      "Wheels, Oil, Fuel, Tyres",
      "Water, Oil, Fan belt, Tyres",
      "Wipers, Oil, Fluid, Throttle",
      "Wheels, Outer body, Fuel, Tools"
    ],
    answer: 1,
    explain: "Per Highway Code Section F.I (First Parade), WOFT means Water (radiator), Oil (engine sump), Fan belt (tension and cuts), and Tyres (cuts, pressure, tread). Check these before every journey."
  },
  {
    topic: "Vehicle Knowledge",
    q: "A petrol or diesel fire (a 'Class B' fire) is best extinguished using:",
    options: [
      "A jet of water",
      "Liquid foam, dry chemical powder, or CO₂",
      "Sweeping it with a broom",
      "A fan to blow it out"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.IV (Vehicle Fire Prevention), Class B fires (flammable liquids like petrol and grease) require liquid foam, dry chemical powder, or CO₂. NEVER use water on a petrol fire — it spreads the fuel."
  },
  {
    topic: "Vehicle Knowledge",
    q: "Per FRSC requirements, a private car must carry a fire extinguisher of at least:",
    options: [
      "1 unit of 1 kg",
      "1 unit of 6 kg",
      "2 units of 9 kg",
      "Fire extinguisher is optional for cars"
    ],
    answer: 0,
    explain: "Per Highway Code Section E (Vehicle Checklist), private cars and taxis require 1 unit of 1 kg fire extinguisher. Articulated vehicles need 2 units of 9 kg, and lorries / luxury buses need 2 units of 6 kg."
  },
  {
    topic: "Vehicle Knowledge",
    q: "The Automatic Transmission Fluid (ATF) level should be checked specifically for:",
    options: [
      "Brake hydraulic system",
      "Power steering",
      "Windscreen washer",
      "Engine cooling"
    ],
    answer: 1,
    explain: "Per Highway Code Section F.II (Second Parade — Steering Mechanism), the ATF level is checked for vehicles with power steering. Low ATF can cause heavy or jerky steering."
  },
  {
    topic: "Vehicle Knowledge",
    q: "A commercial vehicle in Nigeria must undergo routine inspection for road-worthiness:",
    options: [
      "Once every 5 years",
      "Every 6 months",
      "Only when sold to a new owner",
      "Annually"
    ],
    answer: 1,
    explain: "Per Highway Code Section D.III (Routine Inspection for Road Worthiness), commercial vehicles must be inspected every 6 months. Other vehicles older than 4 years from manufacture date are inspected annually."
  },
  {
    topic: "Vehicle Knowledge",
    q: "Under-inflated tyres are dangerous because they:",
    options: [
      "Save fuel and have no risks",
      "Can suddenly burst, peel, or tear at the sides",
      "Improve cornering grip",
      "Self-inflate as you drive"
    ],
    answer: 1,
    explain: "Per Highway Code Section E (Tyre Pressure), under-inflated tyres flex excessively, overheat, and can cause sudden blow-outs. Over-inflation wears the tread centre rapidly. Check pressure regularly against the manufacturer's specification."
  },
  {
    topic: "Vehicle Knowledge",
    q: "A standard vehicle first-aid kit should contain:",
    options: [
      "Only paracetamol tablets",
      "Bandages, plasters, gloves, scissors, antiseptic, and basic medication",
      "A torchlight only",
      "Fire-extinguisher chemicals"
    ],
    answer: 1,
    explain: "Per Highway Code Section E (Vehicle Checklist — First Aid Kits), the kit should include scissors, safety pins, iodine, cotton wool, plasters, splints, bandages, disposable gloves, antiseptic, antibiotic ointment, and basic medication. Check expiry dates regularly."
  },
  {
    topic: "Vehicle Knowledge",
    q: "An unconscious but breathing crash victim should be placed in:",
    options: [
      "A sitting position against a wall",
      "The recovery position (on their side)",
      "Flat on their back with no support",
      "Upside down to drain blood from the head"
    ],
    answer: 1,
    explain: "Per Highway Code Section A.V (The Recovery Position), an unconscious but breathing victim is placed on their side. This stops them choking on their own blood, vomit, or tongue and keeps the airway open until medical help arrives."
  },
  {
    topic: "Vehicle Knowledge",
    q: "Children aged 0–12 months should:",
    options: [
      "Always ride in the front seat",
      "Not ride in the front of the vehicle; use a rear-facing child restraint",
      "Be held on an adult's lap",
      "Wear an adult seat belt"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.V (The Child), children 0–12 months should NOT ride in the front. If carried in the front for any reason, they must be in a rear-facing child restraint. Never carry a child on your lap."
  },
  {
    topic: "Vehicle Knowledge",
    q: "If your engine stalls on a railway level crossing, the FIRST thing you should do is:",
    options: [
      "Stay in the vehicle and try to restart the engine",
      "Get all passengers out and away from the crossing immediately",
      "Push the vehicle backwards",
      "Sound your horn to warn the train"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.VII (Stopping on a Crossing), step ONE is to get passengers out and clear of the crossing. Then try to push the vehicle off the tracks if there is time, and contact the signalman."
  },

  // ===== HIGHWAY CODE (SET 3 — sourced from Highway Code Sections C, A, I) =====
  {
    topic: "Highway Code",
    q: "A Nigerian Class 'B' driver's licence permits the holder to drive:",
    options: [
      "Motorcycles only",
      "Private motor vehicles of less than 3 tonnes (other than motorcycle, taxi, or omnibus)",
      "Articulated vehicles",
      "Earth-moving vehicles"
    ],
    answer: 1,
    explain: "Per Highway Code Section C.II (Classes of Driver's Licence), Class B covers private motor vehicles under 3 tonnes (excluding motorcycle, taxi, stage carriage, and omnibus). It is the standard private-car licence."
  },
  {
    topic: "Highway Code",
    q: "Articulated vehicles (trucks and trailers) require a driver's licence of which class?",
    options: [
      "Class A",
      "Class D",
      "Class F",
      "Class G"
    ],
    answer: 3,
    explain: "Per Highway Code Section C.II, articulated vehicles require a Class G licence. (Class F is for agricultural machines/tractors; Class H is for earth-moving vehicles.)"
  },
  {
    topic: "Highway Code",
    q: "The terminal age (upper age limit) for driving in Nigeria is:",
    options: [
      "60 years",
      "65 years",
      "70 years",
      "There is no upper limit"
    ],
    answer: 2,
    explain: "Per Highway Code Section C.III, the minimum age for driving is 18 years and the terminal age is 70 years."
  },
  {
    topic: "Highway Code",
    q: "A 'cloverleaf' interchange is designed to:",
    options: [
      "Replace traffic lights at busy intersections",
      "Allow turning movements off or onto an expressway from four directions using loop ramps, eliminating left turns",
      "Provide parking on expressways",
      "Connect rural roads with railways"
    ],
    answer: 1,
    explain: "Per Highway Code Section A.II (Interchanges), a cloverleaf interchange uses loop-type ramps to allow turning in all four directions without any left turns crossing oncoming traffic, eliminating traffic conflicts."
  },
  {
    topic: "Highway Code",
    q: "A 'trumpet' interchange is typically used to:",
    options: [
      "Decorate motorway entrances",
      "Provide expressway access at a 'T' intersection",
      "Allow U-turns at 50 km/h",
      "Connect three expressways"
    ],
    answer: 1,
    explain: "Per Highway Code Section A.II (Interchanges), a trumpet interchange provides access to an expressway at a T-shaped intersection — typically where a side road terminates at a main expressway."
  },
  {
    topic: "Highway Code",
    q: "According to FRSC research, what proportion of road traffic crashes are caused by human factors?",
    options: [
      "About 30%",
      "About 50%",
      "About 90%",
      "Less than 10%"
    ],
    answer: 2,
    explain: "Per Highway Code Section I (Causes of Road Crashes), human factors account for about 90% of crashes — with driver action or inaction making up roughly 80% of that. Mechanical factors are about 10%."
  },
  {
    topic: "Highway Code",
    q: "Penalty points on a driver's licence become 'endorsed' once the cumulative total reaches:",
    options: [
      "5 points",
      "10 points",
      "21 points",
      "50 points"
    ],
    answer: 2,
    explain: "Per Highway Code Section C.VI (and S.10(5)(c) FRSC Act 2007), 21 cumulative penalty points lead to an endorsement. After five such endorsements, the driver's licence is suspended."
  },
  {
    topic: "Highway Code",
    q: "What is the maximum number of hours a single driver should drive in a 24-hour period?",
    options: [
      "6 hours",
      "10 hours",
      "16 hours",
      "There is no limit"
    ],
    answer: 1,
    explain: "Per Highway Code Section A.F (Driving Hours), a single driver should not drive more than 10 hours in 24 hours. Take a 15-minute break after every 4 hours, and have a co-driver for journeys exceeding 10 hours."
  },
  {
    topic: "Highway Code",
    q: "A tourist driving in Nigeria must obtain a Nigerian driving permit within how many days of arrival?",
    options: [
      "5 days",
      "15 days",
      "30 days",
      "90 days"
    ],
    answer: 1,
    explain: "Per Highway Code Section G (Requirements for a Tourist), a tourist must obtain a permit to drive in Nigeria within 15 days of arrival, in addition to carrying their international driving permit and home country licence."
  },
  {
    topic: "Highway Code",
    q: "A tourist's foreign-plated vehicle must be re-registered with Nigerian number plates within how many days of stay?",
    options: [
      "30 days",
      "60 days",
      "90 days",
      "180 days"
    ],
    answer: 2,
    explain: "Per Highway Code Section G, a tourist's vehicle may carry the number plate of its country of origin only for the first 90 days of stay. Within 90 days the vehicle must be re-registered with a Nigerian number plate."
  },
  {
    topic: "Road Signs",
    q: "This warning sign means:",
    sign: `<img src="signs/NG_road_sign_A16.svg" alt="Road works warning sign">`,
    options: [
      "Pedestrians working — no entry",
      "Road works ahead — slow down and follow temporary signs",
      "Car repair workshop",
      "End of road"
    ],
    answer: 1,
    explain: "Per Highway Code Section B.II (Warning Signs), the road-works warning triangle (worker with shovel) tells you there are construction or repair works ahead. Slow down, watch for workers, and follow any temporary signs or flag-person directions."
  }
];
