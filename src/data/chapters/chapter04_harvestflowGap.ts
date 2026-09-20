import type { Chapter } from '../../types/content';

export const CHAPTER_04_HARVESTFLOW_GAP: Chapter = {
  id: '04-the-harvestflow-gap',
  number: '04',
  title: 'The HarvestFlow Gap — Coordination & Concepts',
  shortTitle: 'The HarvestFlow Gap',
  subtitle: 'The coordination loop, capacity-aware booking, and disambiguating core terminology',
  sourceSections: 'Sections 4, 5 & 21: What HarvestFlow should add; Slot/Token/Check-in/Queue distinctions; What is unique',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 8,
  category: 'Core Architecture',
  sections: [
    {
      id: 'sec-04-1',
      title: 'The Core Coordination Gap',
      evidenceType: 'PROPOSED',
      markdown: `The true value proposition of HarvestFlow is **the Coordination Loop**:

\`\`\`text
CURRENT CAPACITY → SLOT → ARRIVAL → CHECK-IN → QUEUE → OPERATIONAL EVENT → CAPACITY UPDATE → NOTIFICATION → EXCEPTION
\`\`\`

Existing systems excel at transactional records (who is the farmer, how much land do they have, how much did they sell, what was the payment amount). What they lack is **real-time coordination of physical operational state** between the farmer's journey and the centre's handling capacity.

HarvestFlow fills this gap without attempting to replace the underlying transaction engines.`,
      diagramId: 'core-loop'
    },
    {
      id: 'sec-04-2',
      title: 'Disambiguating Core Concepts: Slot vs. Booking vs. Token vs. Check-in vs. Queue',
      evidenceType: 'PROPOSED',
      markdown: `A fatal flaw in many digital procurement proposals is conflating distinct operational concepts into a generic “token” or “ticket”. HarvestFlow strictly separates them:

| Concept | The Question It Answers | System Domain | Operational Meaning |
|---|---|---|---|
| **Slot** | *When should I come?* | Scheduling Layer | An offered arrival time window based on current usable intake capacity. |
| **Booking** | *Is my arrival window confirmed?* | Reservation Layer | A confirmed reservation binding an approved farmer and crop quantity to a slot. |
| **Token** | *What is my visit reference?* | Identity & Access | A universal alphanumeric code (e.g. HF-DEMO-024) issued across SMS/print/app. |
| **Check-in** | *Have I actually arrived?* | Gate Operational Layer | Recording physical arrival at the centre gate. Transitions state from BOOKED to CHECKED_IN. |
| **Queue** | *Where am I in the current process?* | Yard Operational Layer | The active sequence of checked-in farmers waiting for or undergoing weighment. |
| **Procurement Status** | *What happened to my crop?* | Intake Authority | Inspection, weighing, acceptance/rejection, and receipt generation. |
| **Payment Status** | *What happened financially?* | Treasury / Bank Authority | Verified milestones of payment submission, processing, and bank credit. |`,
      callout: {
        type: 'RULE',
        title: 'Non-Negotiable Rule',
        content: 'Do NOT merge these concepts. A booking is NOT a check-in, and a token is NOT a queue position. Conflating them destroys operational accuracy.'
      }
    },
    {
      id: 'sec-04-3',
      title: 'Token as Universal Reference & QR as Optional Convenience',
      evidenceType: 'PROPOSED',
      markdown: `The **Token** is the universal, farmer-facing visit reference.
- It is a short, readable alphanumeric string (e.g. \`HF-DEMO-024\`).
- It can be transmitted via standard SMS to any basic 2G phone.
- It can be spoken over a voice call or read aloud by an operator.
- It can be printed on a physical paper receipt slip at a Gram Panchayat kiosk.

**QR codes are strictly an optional convenience.** While smartphone users and operators can scan a QR code for instantaneous input, **QR is not a core requirement**. A system that requires QR scanning excludes farmers without smartphones or centres with damaged camera lenses.`,
      whyAccordionId: 'why-token'
    },
    {
      id: 'sec-04-4',
      title: '“Farmer Check-in” vs. Identity Verification',
      evidenceType: 'PROPOSED',
      markdown: `HarvestFlow explicitly names the gate arrival event:

> **Farmer Check-in**

We deliberately do **NOT** call check-in “identity verification”.

**Why?**
Statutory identity verification (Aadhaar authentication, biometric fingerprint matching, land title validation) is governed by strict state and central legal acts. HarvestFlow is an operational queue layer, not a statutory identity authority.

Check-in simply answers: **“Has the holder of this token physically arrived at the gate with their crop?”** Statutory verification remains with the authorized government procurement official according to state SOPs.`,
      whyAccordionId: 'why-check-in'
    }
  ]
};

export const CHAPTER_05_FARMER_JOURNEY: Chapter = {
  id: '05-farmer-journey',
  number: '05',
  title: 'The Farmer Journey — 10 Operational Stages',
  shortTitle: 'Farmer Journey',
  subtitle: 'An end-to-end walkthrough from registration verification to confirmed bank credit',
  sourceSections: 'Sections 5, 6, 7 & 24: Farmer Journey & Ideal Demonstration',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 9,
  category: 'Core Architecture',
  sections: [
    {
      id: 'sec-05-1',
      title: 'The 10-Stage End-to-End Operational Lifecycle',
      evidenceType: 'PROPOSED',
      markdown: `The farmer’s interaction with HarvestFlow follows a structured 10-stage lifecycle designed for predictability, transparency, and minimal stress:

\`\`\`text
1. REGISTRATION LOOKUP → 2. CENTRE SELECTION → 3. CAPACITY-AWARE SLOT → 4. TOKEN ISSUANCE → 5. ARRIVAL AT GATE → 6. FARMER CHECK-IN → 7. OPERATIONAL QUEUE → 8. PROCUREMENT INTAKE → 9. PAYMENT VISIBILITY → 10. JOURNEY COMPLETION
\`\`\`

Each stage has a clear operational trigger, a designated actor, and a multi-channel notification event.`,
      diagramId: 'farmer-journey-stepper'
    },
    {
      id: 'sec-05-2',
      title: 'Step-by-Step Stage Breakdown',
      evidenceType: 'PROPOSED',
      markdown: `### Stage 1: Registration / Reference Lookup
- **Action**: Farmer or assisted kiosk operator enters their government registration ID (e.g. e-Uparjan ID / Agristack Farmer ID).
- **System Response**: HarvestFlow verifies approved status, verified crop (e.g. Paddy Common), and sanctioned quantity quota (e.g. 80 quintals) via government API or cached authorized roster.

### Stage 2: Eligible Centre Selection
- **Action**: Farmer selects their preferred procurement centre from the authorized list mapped to their village/tehsil.
- **System Response**: System displays centre status, current intake health, and operational capacity.

### Stage 3: Capacity-Aware Slot Booking
- **Action**: Farmer specifies the quantity to be delivered (e.g. 50 quintals) and chooses an available arrival window.
- **System Response**: HarvestFlow checks current usable intake capacity for that day/time. If capacity is available, it reserves the quota and locks against concurrent booking conflicts.

### Stage 4: Universal Token Issuance
- **Action**: Booking confirmed.
- **Output**: Instant generation of universal Token (e.g. \`HF-DEMO-024\`). Dispatched immediately via SMS with centre address, date, arrival window, and helpline. Optional printable slip or QR view.

### Stage 5: Arrival at Centre Gate
- **Action**: Farmer arrives at the centre during their designated arrival window.
- **Resilience**: If a disruption occurred earlier, the farmer already received an advance SMS reschedule notice, preventing a wasted journey.

### Stage 6: Farmer Check-in
- **Action**: Gate operator enters or scans Token \`HF-DEMO-024\`.
- **System Response**: Status updates from \`BOOKED\` to \`CHECKED_IN\`. Timestamp recorded. Farmer added to the live waiting queue.

### Stage 7: Operational Queue Progression
- **Action**: Farmer waits in the yard or nearby rest area.
- **Transparency**: Farmer checks live queue position via SMS query, mobile web view, or physical display board. When 2 vehicles remain ahead, an automated SMS alert is dispatched: *“Your turn is approaching at Weighbridge 2.”*

### Stage 8: Procurement Intake & Weighment
- **Action**: Vehicle moves to weighbridge. Quality inspection and tare/gross weighment recorded by authorized staff in the government portal.
- **State Transition**: Status updates to \`PROCESSING\` and then \`COMPLETED\`.

### Stage 9: Verified Payment Status Tracking
- **Action**: Purchase record submitted to state treasury / PFMS.
- **Status Updates**: HarvestFlow tracks verified status feeds:
  - \`Purchase Recorded\` (certified weight & amount);
  - \`Payment Submitted\` (sent to treasury/bank);
  - \`Payment Credited\` (confirmed by authoritative bank credit advice).

### Stage 10: Journey Completion & Audit Archival
- **Output**: Complete journey archived with full audit trail (timestamps, operator IDs, weight, and disbursement reference).`,
      table: {
        headers: ['Stage', 'State Transition', 'Farmer Notification Channel', 'Data Authority'],
        rows: [
          ['1. Lookup', 'None', 'Web / Assisted Kiosk', 'Govt Registration Portal'],
          ['2. Centre Selection', 'None', 'Web / Assisted Kiosk', 'Govt Mandi Mapping'],
          ['3. Slot Booking', 'PENDING → BOOKED', 'SMS / Web Confirmation', 'HarvestFlow Engine'],
          ['4. Token Generation', 'BOOKED', 'SMS / Print / QR', 'HarvestFlow Token Layer'],
          ['5. Arrival', 'BOOKED', 'In-person / SMS update', 'Farmer'],
          ['6. Check-in', 'BOOKED → CHECKED_IN', 'SMS: “Check-in Confirmed”', 'Centre Operator'],
          ['7. Queue Wait', 'CHECKED_IN → WAITING', 'SMS: “Turn Approaching”', 'HarvestFlow Queue Engine'],
          ['8. Intake & Weighing', 'WAITING → PROCESSING → COMPLETED', 'SMS: “Procurement Recorded”', 'Govt Procurement System'],
          ['9. Payment Tracking', 'SUBMITTED → CREDITED', 'SMS: “Payment Credited”', 'Govt Treasury / Bank'],
          ['10. Completion', 'ARCHIVED', 'Digital / Print Receipt', 'HarvestFlow Audit Trail']
        ]
      }
    },
    {
      id: 'sec-05-3',
      title: 'Multi-Channel Inclusion: No Smartphone Required',
      evidenceType: 'OFFICIAL',
      markdown: `Every single stage of the farmer journey is fully accessible across three tiers:
1. **Tier 1 (Basic Feature Phone)**: 100% functionality via standard SMS and toll-free IVR/helpline.
2. **Tier 2 (Assisted Kiosk / CSC / Panchayat)**: Village operators perform booking, check status, and hand over a printed paper token.
3. **Tier 3 (Smartphone / Web App)**: Optional self-service responsive web app with bilingual interface and visual queue status.

No farmer is ever turned away or disadvantaged because they do not own a smartphone or have mobile data.`,
      whyAccordionId: 'why-not-require-a-smartphone'
    }
  ]
};
