import type { Chapter } from '../../types/content';

export const CHAPTER_14_SCOPE_EXCLUSIONS: Chapter = {
  id: '14-scope-and-exclusions',
  number: '14',
  title: 'Scope & Exclusions — Disciplined Boundaries',
  shortTitle: 'Scope & Exclusions',
  subtitle: 'The 16 excluded features, the Feature Admission Rule, and the MVP requirement matrix',
  sourceSections: 'Sections 20, 22 & 23: Things deliberately excluded; MVP; What should NOT be in demo',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 9,
  category: 'Governance & AI',
  sections: [
    {
      id: 'sec-14-1',
      title: 'The Feature Admission Rule',
      evidenceType: 'PROPOSED',
      markdown: `To prevent fatal scope creep and maintain absolute engineering discipline, HarvestFlow subjects every proposed feature to the **Feature Admission Rule**:

> **“A feature needs a problem, an owner, a data source, an operational workflow, and a measurable benefit before it enters HarvestFlow.”**

If any of these five criteria is missing, the feature is rejected. If removing a feature makes the solution clearer without weakening SIH26032 coverage, **it is removed immediately**.`,
      callout: {
        type: 'RULE',
        title: 'Core Filter',
        content: '“If a feature is not required to make this journey more predictable, it does not belong in HarvestFlow.”'
      }
    },
    {
      id: 'sec-14-2',
      title: 'The 16 Deliberately Excluded Features: Why We Don’t Build Them',
      evidenceType: 'OUT OF SCOPE',
      markdown: `These features are not merely “future backlog items”—they are **deliberately excluded** because they introduce bloat, duplicate existing government systems, or fail to address the core coordination problem:`,
      table: {
        headers: ['Feature', 'Why It Looks Attractive', 'Why HarvestFlow Excludes It', 'What HarvestFlow Does Instead'],
        rows: [
          ['AI / Machine Learning', 'Sounds cutting-edge & fits “Smart Automation”', 'Unnecessary complexity; rural data sparse; lacks auditability', 'Deterministic rule-based automation'],
          ['AI Chatbot as Differentiator', 'Conversational AI interface', 'Does not solve physical mandi queues or scale jams', 'Standard SMS alerts & assisted kiosk UI'],
          ['Blockchain / DLT', 'Tamper-proof ledger for transactions', 'Massive compute cost & write latency; centralized govt authority already exists', 'Append-only relational audit logs with digital signatures'],
          ['Facial Recognition', 'Biometric presence verification', 'Fragile in outdoor dust/sunlight; no statutory legal backing', 'Universal Token check-in; govt handles statutory ID'],
          ['Direct Bank Payment Execution', 'Complete end-to-end money transfer', 'Violates public finance laws; creates extreme financial liability', 'Surfaces verified payment milestones from treasury/PFMS'],
          ['Procurement ERP Replacement', 'Total control over entire database', 'States already spent hundreds of crores on e-Uparjan/OPMS; adoption suicide', 'Lightweight coordination layer integrating via APIs'],
          ['Fleet Management / Route Optimization', 'Truck tracking map looks impressive', 'Transport contracting is handled by existing civil supplies logistics vendors', 'Treats transport delay strictly as a capacity constraint'],
          ['Warehouse Management (WMS)', 'Godown and silo bin management', 'CWC, SWC, and FCI already operate dedicated WMS systems', 'Treats storage congestion strictly as a capacity constraint'],
          ['National Macro Forecasting', 'Macro supply-demand heatmaps', 'Macro forecasts do not help a farmer stuck at a local weighbridge', 'Hyper-local centre capacity and queue coordination'],
          ['Crop Disease / Pest Prediction', 'Popular agritech vision feature', 'Completely unrelated to SIH26032 procurement & queue scope', 'Strict scope lock on SIH26032 requirements'],
          ['Market / APMC Price Prediction', 'Speculative price forecasting', 'Govt procurement operates at statutory fixed MSP rates', 'Clear display of approved MSP rates and schedules'],
          ['Unnecessary IoT Sensors', 'Automated weighbridge/moisture telemetry', 'Mandis have legal-metrology stamped scales; custom IoT adds fragile points', 'Operator entry or reading existing digital scale printouts'],
          ['Custom Biometric Hardware', 'Iris/fingerprint scanners at gates', 'Costly, fragile, and duplicates existing state POS infrastructure', 'Token check-in adhering to existing state biometric SOPs'],
          ['Full Offline Farmer Booking', 'Book slots anywhere with no network', 'Causes unresolvable capacity collisions and mandi gridlock', 'Controlled centre-side offline contingency for check-in only'],
          ['Nationwide Deployment Claims', 'Impresses judges with pan-India scale', 'Factually false; state SOPs, crops, and software differ radically', 'Disciplined 5-phase pilot-first adoption model'],
          ['Complex Microservices / Kafka', 'Resume-driven enterprise architecture', 'Adds distributed failure modes without any scale justification', 'Clean, modular web app with relational DB and REST API']
        ]
      }
    },
    {
      id: 'sec-14-3',
      title: 'The MVP Requirement Matrix: Must Have vs. Optional',
      evidenceType: 'PROPOSED',
      markdown: `The Minimum Viable Product (MVP) is strictly locked to what is necessary to prove the complete operational journey:

### 1. Farmer MVP
- **Must Have**: Registration lookup, eligible centre selection, capacity-aware slot booking, booking confirmation, universal token, check-in & queue status, procurement status, payment status, SMS simulation.
- **Optional (If Time Permits)**: Printable token slip, QR code scan, assisted kiosk view, multilingual UI toggle.

### 2. Centre Operator MVP
- **Must Have**: Today’s booking roster, centre open/closed toggle, operational capacity adjustment, token check-in, live queue display, operational stage update, disruption declaration.
- **Optional**: Controlled centre-side offline contingency, digital weighbridge printout parser.

### 3. Supervising Officer MVP
- **Must Have**: District centre overview, stale-status exceptions, capacity overload alerts, disruption visibility, delayed-stage exceptions, payment-status exceptions, immutable audit trail.
- **Optional**: Geospatial mandi map, historical throughput reports.

### 4. Core System MVP
- **Must Have**: Capacity-aware booking engine, concurrent booking protection (ACID locking), deterministic queue state machine, event-driven notification engine, immutable audit logger.`,
      callout: {
        type: 'IMPORTANT',
        title: 'What Should NOT Be in the SIH Demo',
        content: 'Do NOT spend hackathon time demonstrating: ML models, AI prediction, blockchain, Kubernetes, Kafka, advanced forecasting, direct bank integration, nationwide scaling, or facial recognition. The demo must prove ONE complete operational journey flawlessly.'
      }
    }
  ]
};

export const CHAPTER_15_VALUABLE: Chapter = {
  id: '15-what-makes-harvestflow-valuable',
  number: '15',
  title: 'What Makes HarvestFlow Valuable — The Coordination Loop',
  shortTitle: 'What Makes It Valuable',
  subtitle: 'Understanding true differentiation through operational coordination without false claims',
  sourceSections: 'Section 21: What is actually unique/valuable',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 6,
  category: 'Strategy & Reference',
  sections: [
    {
      id: 'sec-15-1',
      title: 'What HarvestFlow Does NOT Claim as Novel',
      evidenceType: 'OFFICIAL',
      markdown: `Many student projects fail in front of experienced government evaluators because they claim to have “invented” capabilities that governments have operated for over a decade.

HarvestFlow **explicitly acknowledges that it did NOT invent**:
- Online farmer registration (operated by e-Uparjan, Agristack, etc.);
- Digital tokens (operated by Chhattisgarh, HP, etc.);
- Slot booking (operated by MP e-Uparjan, etc.);
- SMS alerts (operated by Telangana OPMS, etc.);
- Procurement entry (operated by all state civil supplies departments);
- Direct payment tracking (operated by PFMS and state treasuries).

Claiming these capabilities as unique inventions immediately destroys credibility with senior evaluators who may have helped build those very systems.`,
      callout: {
        type: 'RULE',
        title: 'Claim Discipline',
        content: 'Never claim novelty for individual features. The novelty lies in the holistic coordination loop.'
      }
    },
    {
      id: 'sec-15-2',
      title: 'The Real Differentiation: The Coordination Loop',
      evidenceType: 'PROPOSED',
      markdown: `The true, defensible value proposition of HarvestFlow is **the closed-loop coordination of operational state across fragmented actors**:

\`\`\`text
CURRENT USABLE CAPACITY
          │
          ▼
    SLOT BOOKING
          │
          ▼
   FARMER ARRIVAL
          │
          ▼
   GATE CHECK-IN
          │
          ▼
  OPERATIONAL QUEUE
          │
          ▼
  OPERATIONAL EVENT (Weighment / Breakdown)
          │
          ▼
  CAPACITY ADJUSTMENT
          │
          ▼
  EVENT NOTIFICATION (SMS Alert to Farmers)
          │
          ▼
  OFFICER EXCEPTION (Disruption Resolution)
          │
          ▼
  VERIFIED STATUS VISIBILITY
\`\`\`

Existing systems operate in isolated batch siloes: registration happens weeks in advance; slot booking assumes fixed capacity; weighbridges operate independently; and payment happens weeks later in the treasury.

**HarvestFlow links them into a live, responsive operational loop.** When a weighbridge breaks down, the loop immediately shrinks capacity, halts bookings, alerts upcoming farmers, and escalates to the district officer. That operational coordination is the genuine breakthrough.`,
      diagramId: 'core-loop'
    },
    {
      id: 'sec-15-3',
      title: 'Comparison: Existing Systems vs. HarvestFlow',
      evidenceType: 'PROPOSED',
      markdown: `| Operational Dimension | Existing State Systems | With HarvestFlow Coordination Layer |
|---|---|---|
| **Intake Scheduling** | Static calendar slots; assumes 100% nominal capacity | Dynamic capacity-aware slots based on verified usable throughput |
| **Disruption Response** | Manual word-of-mouth; farmers arrive to closed mandis | Instant automated SMS alert cascade & priority rescheduling |
| **Gate Arrival** | Unrecorded; farmers wait in arbitrary physical lines | Universal Token Check-in; deterministic FCFS queue entry |
| **Queue Visibility** | Opacity; anxiety, disputes, and queue-jumping | Live queue position & turn alert SMS (*“2 vehicles ahead”*) |
| **Operator Burden** | Heavy duplicate data entry across physical & digital registers | “One Action → Multiple Effects”; zero duplicate entry of govt data |
| **Data Freshness** | Stale status presented as current | Strict timestamps; data marked STALE after inactivity threshold |
| **Payment Status** | Disconnected from procurement; farmer visits bank repeatedly | Verified lifecycle visibility: *Recorded → Submitted → Credited* |`,
      whyAccordionId: 'why-capacity-aware-booking'
    }
  ]
};
