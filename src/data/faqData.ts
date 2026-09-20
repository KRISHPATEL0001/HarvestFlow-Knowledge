import type { FaqItem } from '../types/content';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-already-solved',
    question: 'Isn’t this already solved by state procurement systems?',
    category: 'System Scope',
    evidenceType: 'OFFICIAL',
    shortAnswer: 'No. Existing state systems manage registration, slot calendars, and purchase records, but typically do not synchronize live physical queue state with dynamic centre disruptions.',
    detailedAnswer: 'Our deep research into MP e-Uparjan, Telangana OPMS, Chhattisgarh, and Himachal Pradesh shows extensive software for registration, token generation, and MSP payment tracking. However, these systems often lack dynamic synchronization between actual intake capacity, live physical queue state, and sudden operational disruptions (such as weighbridge failures or storage jams). HarvestFlow fills this specific coordination gap without replacing the state ERPs.',
    relatedChapterId: '03-existing-government-systems',
    dangerAlert: 'DANGEROUS CLAIM TO AVOID: Never say “The government has no software” or “No system does this.” Always acknowledge existing systems and specify HarvestFlow’s role as an operational coordination layer.'
  },
  {
    id: 'faq-why-harvestflow',
    question: 'Why do we need HarvestFlow if farmer registration already exists?',
    category: 'System Scope',
    evidenceType: 'PROPOSED',
    shortAnswer: 'Registration verifies who can sell; HarvestFlow coordinates when they should arrive based on usable capacity and what happens in the physical queue.',
    detailedAnswer: 'Farmer registration is a one-time administrative action that verifies land records, Aadhaar, and crop sowing. But registration does not prevent 200 farmers from arriving at the same gate on Monday morning with 1,500 quintals of grain when the centre can only process 400 quintals. HarvestFlow translates approved farmer records into capacity-aware appointments, manages the physical queue, and communicates live changes.',
    relatedChapterId: '04-the-harvestflow-gap'
  },
  {
    id: 'faq-why-no-ai',
    question: 'Why isn’t AI used? The hackathon theme is Smart Automation.',
    category: 'Architecture & Tech',
    evidenceType: 'PROPOSED',
    shortAnswer: 'Smart Automation means reliable, rule-based automation of a real workflow. AI is unnecessary, adds opacity, and fails to solve the root coordination problem.',
    detailedAnswer: 'SIH26032 requires dependable operational coordination: capacity calculation, queue state transitions, event notifications, and disruption handling. These are 100% deterministic problems. Adding machine learning does not solve duplicate data entry or stale centre updates, and rural centre data is too sparse for trustworthy training. Deterministic automation ensures 100% transparency, predictability, and auditability.',
    relatedChapterId: '13-ai-ml-decision',
    dangerAlert: 'DANGEROUS CLAIM TO AVOID: Never claim “We use AI to predict queue wait times or prioritize farmers.” That violates our architectural principles and jury credibility.'
  },
  {
    id: 'faq-weighing-machine-break',
    question: 'What happens if the weighing machine breaks down at the centre?',
    category: 'Operational Logic',
    evidenceType: 'PROPOSED',
    shortAnswer: 'The operator logs an operational adjustment; usable capacity is automatically reduced, affected future bookings are flagged, and farmers receive instant SMS alerts.',
    detailedAnswer: 'When a scale fails, the operator logs the disruption with a reason code and new capacity (e.g. baseline 400q reduced by 100q to 300q). HarvestFlow immediately: (1) locks remaining capacity to prevent new bookings, (2) identifies bookings exceeding the new limit, (3) dispatches SMS notifications offering priority reschedule options, (4) creates an exception on the supervising officer’s dashboard, and (5) restores capacity once repaired.',
    relatedChapterId: '08-operational-logic'
  },
  {
    id: 'faq-internet-down',
    question: 'What happens if the internet goes down at the procurement centre?',
    category: 'Architecture & Tech',
    evidenceType: 'PROPOSED',
    shortAnswer: 'Centres switch to a controlled offline contingency to record token check-ins locally; offline booking creation is strictly blocked.',
    detailedAnswer: 'HarvestFlow provides a controlled centre-side offline contingency. Operators can still scan tokens or enter token numbers to log arrival timestamps locally with operator credentials. Once connectivity resumes, these logs sync to the central server. However, farmers cannot create new bookings offline because booking requires real-time knowledge of remaining capacity to prevent double-booking collisions.',
    relatedChapterId: '09-access-and-reliability'
  },
  {
    id: 'faq-operator-no-update',
    question: 'What happens if the centre operator forgets or refuses to update the system?',
    category: 'Operational Logic',
    evidenceType: 'PROPOSED',
    shortAnswer: 'The system displays the last update timestamp, marks the queue as STALE after a configured threshold, and alerts the supervising officer.',
    detailedAnswer: 'A stale status is worse than no status. If no operational updates occur within a configured window (e.g. 45 minutes), HarvestFlow: (1) displays “Wait estimate unavailable — queue information is being updated,” (2) visually flags the centre as STALE on public views, (3) raises an urgent escalation alert on the district officer’s dashboard, and (4) prompts an automated check-in reminder to the centre.',
    relatedChapterId: '06-centre-operator'
  },
  {
    id: 'faq-how-real-time',
    question: 'How do you know the queue is truly “real-time”?',
    category: 'Operational Logic',
    evidenceType: 'PROPOSED',
    shortAnswer: 'Real-time in HarvestFlow means event-driven operational state reflecting actual recorded events, always qualified by last update timestamps.',
    detailedAnswer: 'We do not claim magical real-time sensing. In HarvestFlow, “real-time” means event-driven state transitions: when an operator checks in a token, it immediately moves to WAITING; when weighing starts, it moves to PROCESSING. Every screen clearly displays “Last updated at [time]”. If updates lapse, data is labeled STALE. We never fabricate live data.',
    relatedChapterId: '06-centre-operator',
    dangerAlert: 'DANGEROUS CLAIM TO AVOID: Never claim “We provide millisecond IoT real-time queues” unless physical sensors are actually installed and calibrated.'
  },
  {
    id: 'faq-gov-has-api',
    question: 'What if the government already has an established procurement API?',
    category: 'Government & Data',
    evidenceType: 'OFFICIAL',
    shortAnswer: 'HarvestFlow integrates directly via the approved API (e.g. through API Setu), reading approved farmer records and posting coordination events.',
    detailedAnswer: 'This is the ideal scenario. HarvestFlow queries the government API for approved farmer registration, land quota, and eligible crops. When the farmer books a slot, HarvestFlow manages the queue locally and pushes milestone events (check-in, completion) back to the government system through standard REST/JSON contracts.',
    relatedChapterId: '10-government-integration'
  },
  {
    id: 'faq-gov-no-api',
    question: 'What if the government department does not have an active API?',
    category: 'Government & Data',
    evidenceType: 'PROPOSED',
    shortAnswer: 'HarvestFlow supports approved batch file exchange (CSV/Excel) or operates in a coordination-only mode where authoritative data remains in the state portal.',
    detailedAnswer: 'If no API exists, HarvestFlow never attempts to scrape portals or connect directly to SQL databases. Instead, it utilizes authorized daily batch data exchanges (e.g. CSV roster of approved farmers) or operates purely in coordination mode: farmers enter their government registration number, and HarvestFlow manages the appointment and queue independently.',
    relatedChapterId: '10-government-integration'
  },
  {
    id: 'faq-data-ownership',
    question: 'Who owns the farmer and procurement data?',
    category: 'Government & Data',
    evidenceType: 'PROPOSED',
    shortAnswer: 'The government owns all authoritative farmer, land, crop, and financial data; HarvestFlow owns only operational appointment and queue coordination data.',
    detailedAnswer: 'HarvestFlow maintains strict data sovereignty. Registration, land eligibility, MSP policy, certified weighment, and payment instructions remain 100% owned by the government. HarvestFlow owns the appointment booking records, check-in timestamps, operational queue sequence, and notification delivery logs. If a conflict occurs, government authoritative data takes legal precedence.',
    relatedChapterId: '07-data-ownership'
  },
  {
    id: 'faq-payment-status-ownership',
    question: 'Who owns payment status, and does HarvestFlow execute payments?',
    category: 'Government & Data',
    evidenceType: 'PROPOSED',
    shortAnswer: 'The state treasury / PFMS / banking partner owns payment status; HarvestFlow NEVER executes payments, only tracks and surfaces verified status.',
    detailedAnswer: 'HarvestFlow does not touch banking rails or disburse public funds. It tracks the payment lifecycle (Purchase recorded → Payment submitted → Credit confirmed) by consuming status feeds from the state treasury or PFMS. It only displays “Payment credited” when confirmed by an authoritative bank/treasury record.',
    relatedChapterId: '07-data-ownership',
    dangerAlert: 'DANGEROUS CLAIM TO AVOID: Never say “HarvestFlow speeds up bank payments” or “We process farmer MSP transfers.” We provide visibility, not execution.'
  },
  {
    id: 'faq-no-smartphone',
    question: 'Can a farmer use the system without a smartphone or internet?',
    category: 'System Scope',
    evidenceType: 'OFFICIAL',
    shortAnswer: 'Yes, 100%. The system is designed for complete SMS-based operation and assisted access via Common Service Centres (CSCs) and Gram Panchayats.',
    detailedAnswer: 'A farmer can register their booking via an assisted kiosk (CSC / Panchayat / Mandi helpdesk), receive their universal Token via a basic SMS on a 2G feature phone, arrive at the centre, present their SMS or printed slip, and receive turn alerts and payment updates via SMS. Smartphones and the web app are completely optional convenience channels.',
    relatedChapterId: '09-access-and-reliability'
  },
  {
    id: 'faq-replacing-euparjan',
    question: 'Is HarvestFlow replacing e-Uparjan or Telangana OPMS?',
    category: 'System Scope',
    evidenceType: 'PROPOSED',
    shortAnswer: 'No. HarvestFlow is an operational coordination layer that integrates with and complements e-Uparjan, OPMS, and similar state systems.',
    detailedAnswer: 'Replacing state systems is politically unfeasible and architecturally wasteful. HarvestFlow sits alongside existing state software as an operational layer, managing the physical yard: scheduling arrivals against capacity, tracking the live gate queue, and routing disruption notifications.',
    relatedChapterId: '03-existing-government-systems'
  },
  {
    id: 'faq-capacity-aware-work',
    question: 'How does capacity-aware booking work in practice?',
    category: 'Operational Logic',
    evidenceType: 'PROPOSED',
    shortAnswer: 'Slots are dynamically throttled based on Baseline Capacity (configured intake) minus Operational Adjustments (disruptions/constraints).',
    detailedAnswer: 'Centres have a configured Baseline Capacity (e.g. 400 quintals per day, divided across hourly intake windows). When a farmer books, their declared crop quantity is deducted from the slot’s available quintal quota. If an operational adjustment occurs (-100 quintals), available slots automatically shrink. This prevents overbooking physical intake capacity.',
    relatedChapterId: '08-operational-logic'
  },
  {
    id: 'faq-normal-slot-calendar',
    question: 'Why not simply use a normal slot calendar like Calendly or Google Calendar?',
    category: 'Operational Logic',
    evidenceType: 'PROPOSED',
    shortAnswer: 'Calendars book time slots for individuals; mandis process variable physical bulk volume (quintals) subject to equipment and transport constraints.',
    detailedAnswer: 'A standard calendar allocates 15 minutes per person. In agriculture, one farmer brings 15 quintals on a cart, while another brings 250 quintals on two tractor-trailers. Time-only booking leads to massive bottlenecks. HarvestFlow calculates appointments against physical volume throughput, certified weighing capacity, and operational disruptions.',
    relatedChapterId: '04-the-harvestflow-gap'
  },
  {
    id: 'faq-what-makes-different',
    question: 'What makes HarvestFlow different if existing systems already have tokens?',
    category: 'System Scope',
    evidenceType: 'PROPOSED',
    shortAnswer: 'The closed-loop coordination: connecting usable centre capacity, live queue states, instant disruption propagation, and verified cross-system visibility.',
    detailedAnswer: 'Existing tokens are often static queue tickets or simple date passes that ignore real-time mandi congestion. HarvestFlow connects the entire loop: CURRENT CAPACITY → SLOT → ARRIVAL → CHECK-IN → QUEUE → EVENT → NOTIFICATION → EXCEPTION. When a breakdown happens, the system dynamically recalculates and communicates changes immediately.',
    relatedChapterId: '15-what-makes-harvestflow-valuable'
  },
  {
    id: 'faq-nationwide-deployment',
    question: 'Can HarvestFlow be deployed nationwide immediately?',
    category: 'Government & Data',
    evidenceType: 'PROPOSED',
    shortAnswer: 'No. Immediate nationwide deployment is an unrealistic claim. HarvestFlow follows a disciplined 5-phase pilot-first adoption strategy.',
    detailedAnswer: 'Every state has distinct procurement SOPs, differing commodities (paddy vs wheat vs pulses), and unique software ecosystems. HarvestFlow requires Phase 0 (Discovery) in one district with one agency before proceeding to Shadow Mode, Assisted Pilot, Integration Pilot, and measured expansion.',
    relatedChapterId: '16-government-adoption',
    dangerAlert: 'DANGEROUS CLAIM TO AVOID: Never promise “Our app can launch across all Indian states next month.” Such claims immediately undermine credibility.'
  },
  {
    id: 'faq-why-no-microservices',
    question: 'Why not use microservices, Kafka, and Kubernetes for this project?',
    category: 'Architecture & Tech',
    evidenceType: 'PROPOSED',
    shortAnswer: 'Because they add distributed failure points and operational complexity without solving any user problem for the SIH solution.',
    detailedAnswer: 'SIH26032 requires dependable appointment coordination and queue state for local centres. A clean, modular web application with a relational database handles hundreds of thousands of transactions with sub-second latency and zero distributed systems overhead. Introducing Kafka and Kubernetes creates operational debt that rural state IT teams cannot easily maintain.',
    relatedChapterId: '11-architecture'
  },
  {
    id: 'faq-capacity-change-after-booking',
    question: 'What happens when centre capacity changes after a farmer has already booked?',
    category: 'Operational Logic',
    evidenceType: 'PROPOSED',
    shortAnswer: 'Affected bookings are identified in reverse chronological order; farmers receive priority reschedule alerts or expedited queue slots.',
    detailedAnswer: 'If capacity is reduced, HarvestFlow identifies the bookings scheduled within the affected window. The system locks new bookings, notifies affected farmers via SMS with an explanation and priority reschedule options, and surfaces the event as an exception on the supervising officer’s dashboard.',
    relatedChapterId: '08-operational-logic'
  },
  {
    id: 'faq-quality-rejection',
    question: 'How does HarvestFlow handle crop quality rejection at the centre?',
    category: 'Operational Logic',
    evidenceType: 'PROPOSED',
    shortAnswer: 'Rejection is treated as an operational state branch with mandatory reason codes, grader identification, and documented dispute options.',
    detailedAnswer: 'Quality is modeled as `Quality Pending → Accepted / Rejected`. If rejected, the operator records the specific reason code (e.g. moisture > 17%, foreign matter, damaged grain), timestamp, and inspector ID. The system generates an instant SMS receipt to the farmer outlining permitted next steps (e.g. re-drying/cleaning, retest request, or formal dispute).',
    relatedChapterId: '08-operational-logic'
  },
  {
    id: 'faq-proven-claims',
    question: 'Which claims in HarvestFlow are actually proven vs proposed hypotheses?',
    category: 'Jury Tough Questions',
    evidenceType: 'RESEARCH',
    shortAnswer: 'Existing state portal capabilities and farmer waiting constraints are proven facts; our specific coordination loop and wait-time reductions are proposed pilot hypotheses.',
    detailedAnswer: 'Proven: MP e-Uparjan, Telangana OPMS, and Chhattisgarh demonstrate digital tokens, registration, and payment tracking. Proven: Field research confirms mandi waiting times and weighbridge bottlenecks. Proposed: HarvestFlow’s capacity-aware coordination layer, disruption handling algorithms, and multi-channel notification architecture. Pilot Hypotheses: Anticipated reductions in total visit time and congestion, which must be measured in a live pilot.',
    relatedChapterId: '18-evidence'
  }
];
