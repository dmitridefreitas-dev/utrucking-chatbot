/**
 * chatbotContext.js — UTrucking knowledge base
 * Update this file and chatbot/api/routes/chat.js when content changes.
 */

export const quickActions = [
  { id: 'storage',   label: 'Summer Storage',    prompt: 'Tell me about summer storage.' },
  { id: 'shipping',  label: 'Shipping options',  prompt: 'What shipping options do you offer?' },
  { id: 'rental',    label: 'Appliance rentals', prompt: 'Tell me about appliance rentals.' },
  { id: 'move',      label: 'Book a move',       prompt: 'How do I book a move?' },
  { id: 'faqs',      label: 'FAQs',              prompt: 'What are the most common questions?' },
  { id: 'contact',   label: 'Contact us',        prompt: 'How do I get in touch?' },
]

// ── Knowledge base ────────────────────────────────────────────────────────────

const kb = {

  identity: `University Trucking (UTrucking) is WashU's ONLY approved vendor for student storage, shipping, and appliance rentals. Founded in 1977 by WashU students and a founding member of WashU's Student Entrepreneurial Program (StEP) in 1999. In 2021 UTrucking formally became an official University vendor. Based in St. Louis, MO. Serves approximately 50% of WashU undergrads.`,

  contact: `Phone: (314) 266-8878 | Email: info@utrucking.com | Hours: Mon–Fri 9am–6pm CT, Sat 10am–3pm | Social: Facebook (facebook.com/utrucking), Instagram (@utrucking), YouTube (@universitytrucking3715)`,

  services: {
    summerStorage: `Summer Storage — $49 registration fee. Includes: delivery of UTrucking kit (5 boxes, tape, bubble wrap) at least 5 days before pickup; door-to-door pickup from dorm or apartment; secure climate-controlled storage all summer; delivery back to dorm or apartment before move-in. Pricing is volume-based (per item), billed as a fixed 4-month term after pickup. $100 insurance automatically included per boxed/bagged item. Additional kits available for $30 each. Students in WashU housing don't need to be present for pickup (Late Access). Must complete Storage Item Return form by 7/31 to schedule fall delivery.`,

    studyAbroadStorage: `Study Abroad Storage — $49. Same service as summer storage but for students going abroad. Secure storage while away with delivery back when you return.`,

    leaveOfAbsenceStorage: `Leave of Absence Storage — $49. Storage for students taking a leave of absence. Pickup from dorm/apartment, stored securely, delivered back when you return.`,

    homeShipping: `Home Shipping — $49 registration. UTrucking kit delivered with boxes, tape, packing materials. Pack your items, they pick it up and ship to your home address. Pricing: $95 flat rate per box. Surcharges of $25+ may apply for overweight (70+ lbs), oversized, or unboxed items. Tracking emailed after pickup. Items must be boxed or bagged.`,

    shipToSchool: `Nationwide Ship to School — $49. For incoming WashU students (especially freshmen). UTrucking sends a kit with boxes and prepaid return labels. Pack the boxes, send them back — UTrucking delivers everything to your dorm room before WashU move-in (August 15–16). Items are in your room before you even arrive.`,

    triState: `Tri-State Area Home Pickups — $49. For WashU families in New York, Connecticut, and New Jersey. UTrucking crew comes to your doorstep on the East Coast, picks up your items, and delivers everything to your dorm room in St. Louis before move-in day. No schlepping required.`,

    applianceRental: `Appliance Rental — starts at $210. Options: Double-Door Mini Fridge + Microwave (most popular), Double-Door Mini Fridge only, Standard Mini Fridge + Microwave, Standard Mini Fridge only, Microwave only. All WashU dorm-approved. Rental is for the full academic year (both semesters). Quality Guarantee: if anything stops working, UTrucking replaces it free. Appliances are professionally cleaned, inspected, and tested. Deposit refunded after return (via Venmo or check).`,

    applianceRentalReturn: `Appliance Rental Return — $1 (to schedule the return pickup). Use this to schedule when UTrucking comes to collect your rented appliance. Indicate the day you're leaving St. Louis — pickup is done via Late Access after you leave.`,

    storageItemReturn: `Storage Item Return — $1 (to schedule fall delivery). Complete this on the website by 7/31 with your fall housing info so UTrucking knows where to deliver your stored items. If you're in WashU housing, they coordinate room access so items are waiting when you arrive.`,

    generalMoving: `General Moving Services — $400. Covers Greater St. Louis area. Includes: 2-person crew, moving truck, and all equipment. They load, transport, and unload. No trip or mileage fees within 30 miles. Optional UTrucking kits available to add. Book online or call/text (314) 266-8878.`,
  },

  lateAccess: `Late Access — WashU partnership that allows UTrucking to access locked dorm rooms after students leave. Students leave labeled items in their room at move-out; UTrucking enters, picks everything up, and stores it. At move-in, UTrucking delivers to the new room before the student arrives. Students don't need to wait around or be present.`,

  washu30: `WashU '30 (Incoming Freshmen) — UTrucking helps freshman avoid the stress of move-in day. WashU's only approved move-in vendor. Services: Nationwide Ship to School (boxes shipped to you, then forwarded to campus), Tri-State Area Home Pickups (crew picks up in NY/CT/NJ and delivers to dorm), Appliance Rentals (fridge + microwave in your room before you arrive). Freshman Move-In dates: August 15–16. Items are in your room before you get there.`,

  pricing: `Pricing overview: Summer Storage registration $49 (includes kit). Storage billed per item per month, fixed 4-month term. Extra kits $30 each. Home Shipping $95/box. Moving Services from $400. Appliance Rentals from $210/year. Storage Item Return / Appliance Return $1 (just to schedule). Use the Pricing Calculator on the Summer Storage page for storage estimates.`,

  faqs: {
    kit: `UTrucking kit includes 5 boxes, tape, and bubble wrap. Delivered at least 5 days before your pickup date. Additional kits are $30 each. Unused, unopened kits can be refunded for $30 each.`,
    labelingItems: `Label each item with your name, service (Storage or Shipping), and item count (e.g., 1 of 6, 2 of 6). Include unboxed items in the count. Kit includes sticker labels for loose items like luggage.`,
    unusedBoxes: `You only pay for boxes you actually store. Leave extra unused boxes with your labeled items at pickup and the team will take them back.`,
    storageFee: `The $49 fee secures your pickup slot and includes the UTrucking kit. After pickup, items are invoiced based on what you actually store, billed as a fixed 4-month term.`,
    fixedTerm: `Summer Storage is a fixed 4-month term regardless of delivery date. Early return in the summer is available but the term stays fixed. No extra charge for early delivery.`,
    earlyReturn: `Flexible delivery available throughout the summer. Just contact UTrucking to schedule an earlier return. Note the storage term is fixed 4 months.`,
    changingPickup: `Pickup date, time, and location can be changed for free anytime by filling out the contact form or calling (314) 266-8878.`,
    largeItems: `Storage has no size or quantity limits. Large/loose items like furniture, lamps, rugs are fine. Shipping requires items to be boxed or bagged.`,
    storageAndShip: `You can store and ship at the same time. Sign up for both services and UTrucking picks everything up at once. Label items by service (Storage vs. Shipping).`,
    fragileItems: `Fragile items (e.g., guitar) stored in protected areas, nothing stacked on top. Pack with bubble wrap. Extra insurance available during registration.`,
    applianceBroken: `If rental appliance stops working — contact UTrucking with your building/room number. They'll replace it free of charge under the Quality Guarantee.`,
    applianceDeposit: `Deposit refunded after appliance return check-in. Choose Venmo (share handle) or check (share mailing address).`,
    applianceSemester: `Rentals are priced for the full academic year. No refunds for early returns. For one semester only, contact UTrucking directly.`,
    homeShippingTracking: `Tracking info emailed after pickup and shipment. Share your order number to confirm the email address on file.`,
    international: `UTrucking generally does not ship internationally. Contact info@utrucking.com for a custom quote.`,
    pricing: `Storage pricing is per item (volume-based). Use the Pricing Calculator on the Summer Storage page for estimates. Items not in the calculator: email info@utrucking.com with a photo or description for a custom quote.`,
  },
}

// ── Links ─────────────────────────────────────────────────────────────────────

const LINKS = {
  allServices:      '[All Services](https://utrucking.com/collections/all-services)',
  summerStorage:    '[Summer Storage](https://utrucking.com/products/summer-storage)',
  studyAbroad:      '[Study Abroad Storage](https://utrucking.com/products/study-abroad-storage)',
  leaveStorage:     '[Leave of Absence Storage](https://utrucking.com/products/leave-of-absence-storage)',
  homeShipping:     '[Home Shipping](https://utrucking.com/products/home-shipping)',
  shipToSchool:     '[Nationwide Ship to School](https://utrucking.com/products/ship-to-school)',
  triState:         '[Tri-State Area Home Pickups](https://utrucking.com/products/tri-state-area-home-pickups)',
  shipping:         '[Shipping Services](https://utrucking.com/collections/all-services?service=shipping)',
  applianceRental:  '[Appliance Rental](https://utrucking.com/products/appliance-rental)',
  applianceReturn:  '[Appliance Rental Return](https://utrucking.com/products/appliance-rental-return)',
  storageReturn:    '[Storage Item Return](https://utrucking.com/products/storage-item-return)',
  bookMove:         '[Book a Move](https://utrucking.com/products/moves)',
  lateAccess:       '[Late Access](https://utrucking.com/pages/late-access)',
  washu30:          '[WashU \'30 Move-In](https://utrucking.com/pages/washu-30)',
  ourStory:         '[Our Story](https://utrucking.com/pages/our-story)',
  team:             '[Meet the Team](https://utrucking.com/pages/about-us)',
  workWithUs:       '[Work With Us](https://utrucking.com/pages/work-with-us)',
  faqs:             '[FAQs](https://utrucking.com/pages/faq)',
  contact:          '[Contact](https://utrucking.com/pages/contact)',
  contactForm:      '[Contact Form](https://form.jotform.com/260783934988074)',
}

// ── Fallback replies (used when API is unavailable) ───────────────────────────

export function getFallbackReply(userInput, history = []) {
  const q = (userInput || '').toLowerCase().trim()

  if (/^(hi|hey|hello|howdy|sup|yo)\b/.test(q)) {
    return `Hey! I'm the UTrucking assistant. Ask me about summer storage, shipping, appliance rentals, or moving services. You can also call us at (314) 266-8878 or visit ${LINKS.allServices}.`
  }

  if (/thank|thanks|ty|appreciate/.test(q)) {
    return `Happy to help! Feel free to ask anything else — or reach us at ${LINKS.contact} anytime.`
  }

  if (/contact|reach|call|email|phone|get in touch|hours/.test(q)) {
    return `Phone: (314) 266-8878 | Email: info@utrucking.com | Hours: Mon–Fri 9am–6pm CT, Sat 10am–3pm. ${LINKS.contact}`
  }

  if (/summer storage|store.*summer|pickup.*summer|summer.*pickup/.test(q)) {
    return `Summer Storage starts at $49 (includes UTrucking kit: 5 boxes, tape, bubble wrap). We pick up from your dorm, store everything, and deliver back before move-in. Pricing is volume-based, fixed 4-month term. ${LINKS.summerStorage}`
  }

  if (/study abroad|abroad/.test(q)) {
    return `Study Abroad Storage is $49. Same service as summer storage — we hold your items while you're abroad and deliver back when you return. ${LINKS.studyAbroad}`
  }

  if (/leave of absence|loa/.test(q)) {
    return `Leave of Absence Storage is $49. We store your items while you're on leave and deliver back when you return. ${LINKS.leaveStorage}`
  }

  if (/home ship|ship.*home/.test(q)) {
    return `Home Shipping: $49 registration, then $95/box flat rate. We deliver a kit, you pack, we ship to your home. Tracking provided. ${LINKS.homeShipping}`
  }

  if (/ship to school|nationwide ship|freshman.*ship|ship.*freshman/.test(q)) {
    return `Nationwide Ship to School ($49): We send you boxes + prepaid labels, you pack and send back, we deliver to your WashU dorm room before move-in (Aug 15–16). ${LINKS.shipToSchool}`
  }

  if (/tri.?state|new york|new jersey|connecticut|east coast|home pickup/.test(q)) {
    return `Tri-State Area Home Pickups ($49): Our crew comes to your NY/CT/NJ home, picks up your items, and delivers to your WashU dorm before move-in. ${LINKS.triState}`
  }

  if (/ship|shipping/.test(q)) {
    return `We offer Home Shipping ($95/box), Nationwide Ship to School, and Tri-State Area Home Pickups. All from $49 registration. ${LINKS.shipping}`
  }

  if (/fridge|microwave|appliance|rental/.test(q)) {
    return `Appliance Rentals from $210/year. Options: Double-Door Mini Fridge + Microwave (most popular), Standard Mini Fridge, Microwave only. Full year, WashU dorm-approved, Quality Guarantee. ${LINKS.applianceRental}`
  }

  if (/return.*appliance|appliance.*return/.test(q)) {
    return `To return your rental appliance, complete the Appliance Rental Return (just $1) to schedule pickup. We'll coordinate access after you leave. ${LINKS.applianceReturn}`
  }

  if (/return.*storage|storage.*return|fall delivery|deliver.*back/.test(q)) {
    return `Complete the Storage Item Return (just $1) by 7/31 with your fall housing so we know where to deliver your items. WashU housing students get items in their room before they arrive. ${LINKS.storageReturn}`
  }

  if (/mov|moving|local move|book.*move|greater st\. louis/.test(q)) {
    return `General Moving Services: $400 for Greater St. Louis. 2-person crew, truck, all equipment. No trip/mileage fees within 30 miles. ${LINKS.bookMove}`
  }

  if (/late access|locked room|don't need to be|present/.test(q)) {
    return `Through our WashU partnership, students can leave items in their locked dorm room. We access it after you leave and store everything safely. At move-in, items are in your new room before you arrive. ${LINKS.lateAccess}`
  }

  if (/washu.?30|freshman|class of 2030|incoming|move.in.*august|august.*move/.test(q)) {
    return `Incoming WashU Class of '30: we ship your items to campus before Aug 15–16 move-in so everything is in your room when you arrive. We're WashU's only approved move-in vendor. ${LINKS.washu30} | ${LINKS.shipToSchool} | ${LINKS.triState} | ${LINKS.applianceRental}`
  }

  if (/price|cost|how much|pricing|fee|calculator/.test(q)) {
    return `Summer Storage: $49 registration + volume-based monthly rate (4-month term). Extra kit: $30. Home Shipping: $95/box. Moving: from $400. Appliance Rental: from $210/year. Use the Pricing Calculator on the ${LINKS.summerStorage} page for a detailed estimate.`
  }

  if (/kit|box|boxes|packing|bubble wrap|tape/.test(q)) {
    return `Our UTrucking kit includes 5 boxes, tape, and bubble wrap — delivered at least 5 days before your pickup. Additional kits are $30 each. Unused kits can be refunded. ${LINKS.summerStorage}`
  }

  if (/label|tag|how.*label/.test(q)) {
    return `Label each item with your name, service (Storage or Shipping), and item count (e.g., 1 of 6). The kit includes sticker labels for loose items like luggage.`
  }

  if (/faq|question|how does|how do|when|can i/.test(q)) {
    return `Check our full FAQ for answers on storage, shipping, rentals, Late Access, pricing, and more. ${LINKS.faqs}`
  }

  if (/who|about|story|founded|history|approved|vendor/.test(q)) {
    return `UTrucking has been WashU's only approved vendor for student moving and storage since 1977. Founded by WashU students, we've served nearly 50 years on campus. ${LINKS.ourStory}`
  }

  if (/work|job|employ|hire|join/.test(q)) {
    return `Interested in working with UTrucking? ${LINKS.workWithUs}`
  }

  if (/team|staff|people/.test(q)) {
    return `Meet the UTrucking team: ${LINKS.team}`
  }

  if (/all service|what.*offer|what.*do|services/.test(q)) {
    return `We offer Summer Storage, Study Abroad Storage, Leave of Absence Storage, Home Shipping, Ship to School, Tri-State Home Pickups, Appliance Rentals, and Greater St. Louis Moving. ${LINKS.allServices}`
  }

  const fallbacks = [
    `Ask me about summer storage, shipping, appliance rentals, or moving services. Or call us at (314) 266-8878. ${LINKS.allServices}`,
    `Not sure where to start? ${LINKS.allServices} has everything in one place. Or reach us at info@utrucking.com.`,
    `Try asking about a specific service — storage, shipping, rentals, or a move. ${LINKS.faqs} may also have your answer.`,
    `We're here to help! Call (314) 266-8878 Mon–Fri 9am–6pm CT, Sat 10am–3pm, or email info@utrucking.com. ${LINKS.contact}`,
  ]
  return fallbacks[Math.floor(Date.now() / 1000) % fallbacks.length]
}
