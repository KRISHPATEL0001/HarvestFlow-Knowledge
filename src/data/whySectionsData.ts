import type { WhyItem } from '../types/content';

export const WHY_ITEMS: WhyItem[] = [
  {
    id: 'why-no-ai',
    question: 'Why No AI / Machine Learning in HarvestFlow?',
    shortSummary: 'SIH26032 is an operational state coordination challenge solved by deterministic rules; AI adds opacity, requires sparse data, and fails to solve the root problem.',
    canonicalReason: 'The foundational problem of crop procurement is obtaining trustworthy operational state, coordinating appointments against usable capacity, preventing overbooking, maintaining queue state, notifying farmers, handling disruptions, and showing verified status. Adding ML does not solve duplicate data entry, nor does it fix stale operational state. Furthermore, centre-specific data in rural mandis is sparse and highly variable. Reliable, deterministic rule-based automation provides 100% transparency, predictability, and auditability without AI hallucinations.',
    whatGoesWrongIfIgnored: 'Introducing ML models creates unpredictable queue prioritization, unexplainable slot allocations that infuriate farmers, black-box eligibility rejections, and fragile dependencies on non-existent historical training data.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '13-ai-ml-decision'
  },
  {
    id: 'why-not-replace-gov-systems',
    question: 'Why Not Replace Existing Government Procurement Systems?',
    shortSummary: 'State systems already legally own farmer registration, land records, MSP weighment, and treasury disbursements; replacing them creates massive adoption friction and financial risk.',
    canonicalReason: 'Publicly documented systems (such as MP e-Uparjan, Telangana OPMS, Chhattisgarh, HP Procurement Portal) already handle farmer registration, MSP purchase recording, e-KYC/Agristack validation, and direct bank transfers. Attempting to replace government ERPs would take years, face bureaucratic resistance, require re-verifying land records, and risk financial liability. HarvestFlow succeeds by acting as a lightweight, non-invasive coordination layer that sits on top and connects existing systems without duplicating their authoritative truth.',
    whatGoesWrongIfIgnored: 'Government departments will reject any solution that demands discarding their existing software infrastructure or migrating authoritative financial and land databases.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '03-existing-government-systems'
  },
  {
    id: 'why-capacity-aware-booking',
    question: 'Why Capacity-Aware Booking Instead of a Standard Slot Calendar?',
    shortSummary: 'A calendar slot with an empty time cell is meaningless if the centre has no physical capacity (scales, staff, storage) to process the crop.',
    canonicalReason: 'Standard appointment calendars assume service duration is uniform. In crop procurement, intake depends on physical volume (quintals), number of functional weighbridges, unloading labour, and storage capacity. Booking must calculate against current usable intake capacity (Baseline Capacity + Operational Adjustment). When a 100-quintal tractor arrives, it consumes far more intake capacity than a 10-quintal bullock cart.',
    whatGoesWrongIfIgnored: 'Centres suffer severe congestion, hours of vehicle gridlock, and overnight farmer waiting because nominal time slots fail to respect actual physical handling limits.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '04-the-harvestflow-gap'
  },
  {
    id: 'why-separate-slot-from-queue',
    question: 'Why Separate Slot from Queue?',
    shortSummary: 'A slot is a planned future arrival window; a queue is the real-time operational sequence of farmers who have physically arrived and checked in.',
    canonicalReason: 'Merging slot and queue conflates intent with reality. A farmer with a 10:00 AM slot might arrive at 9:30 AM, arrive late at 11:00 AM, or not arrive at all. The operational queue must only represent farmers physically present at the centre. Putting all booked farmers into the active queue creates phantom delays and prevents operators from managing physical throughput.',
    whatGoesWrongIfIgnored: 'Farmers monitor an artificial queue filled with no-shows and late arrivals, making wait-time estimates completely fictional and causing massive mistrust.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '04-the-harvestflow-gap'
  },
  {
    id: 'why-token',
    question: 'Why Use a Token as the Universal Reference?',
    shortSummary: 'Tokens are simple, alphanumeric, universally communicable over basic SMS, readable over phone calls, printable on slips, and independent of smartphones.',
    canonicalReason: 'A token (e.g. HF-DEMO-024) provides a lightweight, unambiguous identifier that can be delivered via SMS to a basic feature phone, scribbled on paper at a CSC, printed on a receipt slip, or scanned via QR on a smartphone. It serves as the single anchor for checking in, checking queue position, and tracking status.',
    whatGoesWrongIfIgnored: 'Relying exclusively on digital app passes or QR codes disenfranchises farmers without smartphones or data connectivity.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '05-farmer-journey'
  },
  {
    id: 'why-check-in',
    question: 'Why Require Farmer Check-in (and Why It Is NOT Identity Verification)?',
    shortSummary: 'Check-in signals physical presence at the centre gate; it does not replace statutory government identity/biometric verification.',
    canonicalReason: 'Check-in is an operational milestone: it transitions the farmer from BOOKED to CHECKED_IN, adds them to the live waiting queue, and timestamps arrival. Calling it “identity verification” would be dangerous because statutory identity verification (Aadhaar/biometrics/land records) is governed by state SOPs. HarvestFlow only records physical presence for queue sequencing.',
    whatGoesWrongIfIgnored: 'Operators get confused about their legal role, or the queue fills up with farmers who have not yet reached the centre gate.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '05-farmer-journey'
  },
  {
    id: 'why-sms',
    question: 'Why Prioritize SMS Over Push Notifications and Mobile Apps?',
    shortSummary: 'SMS reaches 100% of Indian mobile subscribers without requiring smartphone ownership, app store downloads, or active 4G/5G mobile internet.',
    canonicalReason: 'While a responsive web app is provided for farmers and operators with smartphones, the vast majority of small and marginal farmers rely on basic feature phones. SMS delivers booking confirmations, disruption alerts, turn notifications, and payment updates reliably even in 2G rural coverage areas.',
    whatGoesWrongIfIgnored: 'Digital divide exclusion: marginal farmers miss critical disruption warnings and schedule changes because they lack smartphones or mobile data packs.',
    evidenceType: 'OFFICIAL',
    relatedChapterId: '09-access-and-reliability'
  },
  {
    id: 'why-not-require-a-smartphone',
    question: 'Why Not Require a Smartphone for Farmers?',
    shortSummary: 'Demanding a smartphone excludes smallholder farmers; inclusive public systems must support multi-channel access.',
    canonicalReason: 'Government procurement serves all eligible farmers, regardless of income or digital literacy. Requiring a smartphone turns a public welfare and price support mechanism into an exclusive club. HarvestFlow mandates that every single farmer action can be performed via SMS, CSC assistance, or centre helpdesks.',
    whatGoesWrongIfIgnored: 'Systemic exclusion of vulnerable farmers, forcing them back into the hands of exploitative private middlemen who purchase crops below MSP.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '09-access-and-reliability'
  },
  {
    id: 'why-not-full-offline-booking',
    question: 'Why Is Full Offline Farmer Booking Deliberately Excluded?',
    shortSummary: 'Booking requires real-time knowledge of available centre capacity; offline booking would inevitably lead to severe overbooking conflicts.',
    canonicalReason: 'If an offline phone or kiosk books slots without verifying live capacity against a central database, multiple farmers will book the same capacity simultaneously. When they all arrive at the mandi, the centre will be overwhelmed. However, HarvestFlow DOES support a controlled centre-side offline contingency for recording check-in timestamps when internet drops temporarily.',
    whatGoesWrongIfIgnored: 'Unresolvable booking collisions where dozens of farmers hold conflicting offline tokens for the same date and time, creating chaos at the mandi gate.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '09-access-and-reliability'
  },
  {
    id: 'why-no-direct-database-access',
    question: 'Why Never Assume Direct Database Access to Government Systems?',
    shortSummary: 'Direct DB access violates government security protocols, bypasses business logic, and creates catastrophic security and data integrity vulnerabilities.',
    canonicalReason: 'No government IT department or state agency allows third-party applications direct read/write access to production SQL databases (e.g. e-Uparjan, OPMS). All interactions must flow through authorized APIs (such as API Setu) or secure batch exchanges. Direct DB queries bypass triggers, validation rules, audit logging, and role-based access controls.',
    whatGoesWrongIfIgnored: 'Immediate rejection by government security auditors (CERT-In, STQC) and total refusal of departmental onboarding.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '10-government-integration'
  },
  {
    id: 'why-not-build-fleet-management',
    question: 'Why Not Build a Fleet Management System?',
    shortSummary: 'Transport logistics is an operational input to centre capacity, not HarvestFlow’s core mission of farmer appointment coordination.',
    canonicalReason: 'State procurement bodies (such as civil supplies corporations) already have transport contractors and GPS tracking systems (e.g. in Telangana OPMS). HarvestFlow only needs to know if transport delays have filled up the mandi yard, which reduces usable capacity. Building route optimization and vehicle tracking would dilute focus and duplicate existing contractor systems.',
    whatGoesWrongIfIgnored: 'Scope creep that transforms a focused queue-management solution into a bloated, unmaintainable transport ERP that fails at both.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '14-scope-and-exclusions'
  },
  {
    id: 'why-not-build-warehouse-management',
    question: 'Why Not Build a Warehouse Management System (WMS)?',
    shortSummary: 'CWC, SWC, and FCI already operate dedicated warehouse management systems; duplicating them is unnecessary and out of scope.',
    canonicalReason: 'Central and State Warehousing Corporations already utilize specialized WMS software for stack management, fumigation, and storage receipts. For HarvestFlow, storage capacity is solely a capacity constraint: if storage is full, intake capacity decreases. Managing warehouse aisles and bin cards is completely outside SIH26032.',
    whatGoesWrongIfIgnored: 'Massive engineering overhead trying to model complex silo and godown logistics while failing to solve the farmer waiting problem.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '14-scope-and-exclusions'
  },
  {
    id: 'why-simple-architecture',
    question: 'Why Simple Architecture Instead of Microservices, Kafka, and Kubernetes?',
    shortSummary: 'Hackathons and pilot deployments need high reliability, low operational complexity, and rapid debugging—not resume-driven infrastructure.',
    canonicalReason: 'SIH26032 requires coordinating appointments and queue state for local centres. A clean, modular web application with a relational database handles hundreds of thousands of transactions effortlessly with sub-second response times. Introducing Kubernetes clusters, Kafka streaming, and distributed microservices introduces network latency, deployment fragility, and operational debt without any demonstrated scale requirement.',
    whatGoesWrongIfIgnored: 'System downtime due to distributed network splits, message broker misconfigurations, and inability for state IT teams to maintain the system after handoff.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '11-architecture'
  },
  {
    id: 'why-track-last-update-time',
    question: 'Why Is Tracking Last Update Time and Stale Status Critical?',
    shortSummary: 'A stale capacity or queue value is worse than no value; displaying outdated data misleads farmers and destroys trust.',
    canonicalReason: 'If an operator forgets to update the system or internet connectivity fails, an app that displays “Normal queue — 10 min wait” when the centre actually shut down 3 hours ago causes farmers to haul produce to a closed mandi. HarvestFlow timestamps every operational update, displays the exact update time, and explicitly flags data as STALE after a configured threshold (e.g. 45 minutes without an update).',
    whatGoesWrongIfIgnored: 'Farmers travel miles based on false “live” status, find the gates locked or weighing scale broken, and completely abandon the digital system.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '06-centre-operator'
  },
  {
    id: 'why-separate-payment-status',
    question: 'Why Separate Payment Visibility from Payment Execution?',
    shortSummary: 'HarvestFlow tracks and surfaces verified payment status; it does NOT initiate, authorize, or execute bank money transfers.',
    canonicalReason: 'Government crop payments are executed through strict treasury workflows, state cooperative banks, PFMS, or RBI e-Kuber following statutory approvals and quality signoffs. HarvestFlow is a coordination layer. Claiming to “make payments faster” or “execute bank transfers” is legally false and introduces immense financial liability. HarvestFlow surfaces verified payment stages to eliminate farmer anxiety without touching bank rails.',
    whatGoesWrongIfIgnored: 'False claims of financial settlement that trigger legal liability, banking regulation violations, and farmer disputes over uncredited funds.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '07-data-ownership'
  },
  {
    id: 'why-quality-as-a-branch',
    question: 'Why Treat Quality Inspection as an Operational Branch Rather Than an Error?',
    shortSummary: 'Crop rejection or grade downgrade is a standard procurement outcome requiring documented reasons, timestamps, and dispute avenues.',
    canonicalReason: 'In traditional procurement systems, quality failure is often an unrecorded verbal rejection by the mandi grader, leaving the farmer stranded. HarvestFlow models Quality as an explicit state branch (`Quality Pending → Accepted / Rejected`). If rejected, the system records reason code, grader ID, timestamp, and next permitted action (e.g. retest, cleaning/drying, or dispute) for complete transparency.',
    whatGoesWrongIfIgnored: 'Farmers face arbitrary rejections without proof, leaving them vulnerable to corrupt grading practices and unable to appeal.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '08-operational-logic'
  },
  {
    id: 'why-pilot-before-scale',
    question: 'Why Pilot Before Scale?',
    shortSummary: 'Procurement workflows, crop standards, and software vary widely across states; national claims without local validation are irresponsible.',
    canonicalReason: 'Procurement is decentralized across states: Madhya Pradesh uses e-Uparjan, Telangana uses OPMS, Chhattisgarh uses cooperative societies with ICCC. Claiming nationwide readiness before validating against a specific state’s procurement SOP, local API availability, and physical centre dynamics guarantees failure. The proven path is: Discovery → Shadow Mode → Assisted Pilot → Integration Pilot → Measured Scale.',
    whatGoesWrongIfIgnored: 'Premature rollout crashes against local administrative resistance, incompatible existing software, and unworkable physical assumptions.',
    evidenceType: 'PROPOSED',
    relatedChapterId: '16-government-adoption'
  }
];
