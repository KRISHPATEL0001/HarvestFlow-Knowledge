import type { Chapter } from '../../types/content';

export const CHAPTER_08_OPERATIONAL_LOGIC: Chapter = {
  id: '08-operational-logic',
  number: '08',
  title: 'Operational Logic — Capacity, Queue & Disruption',
  shortTitle: 'Operational Logic',
  subtitle: 'Mathematical capacity formulas, queue state machines, quality branching, and disruption workflows',
  sourceSections: 'Sections 4.1, 6, 10, 11 & 12: Capacity, Queue design, Payment, Quality, Disruption',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 10,
  category: 'Core Architecture',
  sections: [
    {
      id: 'sec-08-1',
      title: 'The Usable Capacity Model & Dynamic Formula',
      evidenceType: 'PROPOSED',
      markdown: `Capacity in HarvestFlow is **not simply the number of farmers**. It represents the usable physical intake volume (in quintals) that a centre can inspect, weigh, bag, and store during an operating window.

The system uses a transparent, two-tier mathematical model:

\`\`\`text
BASELINE CAPACITY + OPERATIONAL ADJUSTMENT = CURRENT USABLE CAPACITY
\`\`\`

### Example Calculation
- **Baseline Capacity**: 400 quintals / day (configured by Supervising Officer based on two 200q weighbridges).
- **Operational Disruption**: -100 quintals (one weighbridge motor failure reported at 10:30 AM).
- **Current Usable Capacity**: \`400 q + (-100 q) = 300 q\`.

Every operational adjustment records:
- **Actor ID** (Operator who logged the change);
- **Exact Timestamp**;
- **Reason Code** (Weighbridge fault, unseasonal rain, labour shortage, storage overflow);
- **Old Usable Value** (400 q);
- **New Usable Value** (300 q).`,
      diagramId: 'capacity-model-interactive',
      callout: {
        type: 'WARNING',
        title: 'Reserve Policy Clarification',
        content: 'The 20% reserve capacity mentioned in previous hackathon examples is NOT a government rule. HarvestFlow makes reserve buffer policy fully configurable per state SOP and validates it locally during the pilot.'
      }
    },
    {
      id: 'sec-08-2',
      title: 'The Queue State Machine',
      evidenceType: 'PROPOSED',
      markdown: `The operational queue is governed by a deterministic, finite state machine:

\`\`\`text
BOOKED ──(Gate Check-in)──► CHECKED_IN ──(Yard Calling)──► WAITING ──(Weighment Start)──► PROCESSING ──(Weighment Done)──► COMPLETED
                                                                                                  │
                                                                                          (Quality Fails)
                                                                                                  ▼
                                                                                               REJECTED
\`\`\`

### State Definitions:
1. **\`BOOKED\`**: Appointment confirmed; arrival window reserved; farmer has not yet reached the centre.
2. **\`CHECKED_IN\`**: Farmer physically arrived at the gate; token scanned/entered; arrival timestamp logged.
3. **\`WAITING\`**: Farmer is in the active physical queue line or tractor staging area.
4. **\`PROCESSING\`**: Vehicle is on the weighbridge or unloading bay; inspection and tare/gross weighment underway.
5. **\`COMPLETED\`**: Produce accepted and offloaded; receipt issued; transaction completed.
6. **\`REJECTED\`**: Crop failed statutory quality standards (moisture, foreign matter, damage).`,
      diagramId: 'queue-state-machine'
    },
    {
      id: 'sec-08-3',
      title: 'Waiting-Time Estimates: Rules & Caveats',
      evidenceType: 'PROPOSED',
      markdown: `Waiting-time estimation is an **optional, convenience feature**—it is NOT the core of queue management.

HarvestFlow enforces strict rules regarding wait estimates:
- **Only display ranges, never exact numbers**: e.g., *“Approximately 30–50 minutes”*.
- **Always show the data freshness timestamp**: e.g., *“Last updated 11:20 AM”*.
- **Suppress estimate when data is sparse**: If fewer than 3 vehicles have been processed in the last 2 hours:
  > *“Wait estimate unavailable — queue information is being updated by centre staff.”*
- **Never guarantee arrival-to-departure duration**.`,
      callout: {
        type: 'RULE',
        title: 'No False Promises',
        content: 'Never promise an exact waiting time to a farmer. Rural mandi throughput is subject to physical variables (truck uncoupling, sack stitching, tarpaulin removal) that cannot be modeled to the minute.'
      }
    },
    {
      id: 'sec-08-4',
      title: 'Quality Inspection as an Operational Branch (Not an Error)',
      evidenceType: 'PROPOSED',
      markdown: `Quality grading must be modeled as a legitimate operational branch, not a system error or crash:

\`\`\`text
Quality Pending ──► Accepted (Proceed to Weighment & Purchase)
       │
       └──► Rejected ──► Retest / Dispute / Corrective Action (Drying / Cleaning)
\`\`\`

When a crop sample is rejected by the mandi grader, the system captures:
- **Result**: REJECTED;
- **Specific Reason Category**: Moisture > 17% (statutory limit 17%), Foreign Matter > 2%, or Damaged Grain;
- **Timestamp & Grader ID**;
- **Next Permitted Action**: If the state SOP permits, the farmer can elect to dry their grain on the mandi drying yard for 24 hours and request a retest, or appeal to the District Quality Inspector.`,
      diagramId: 'quality-branch-diagram',
      whyAccordionId: 'why-quality-as-a-branch'
    },
    {
      id: 'sec-08-5',
      title: 'Verified Payment Visibility Lifecycle',
      evidenceType: 'PROPOSED',
      markdown: `HarvestFlow tracks the payment lifecycle across three verifiable stages:

\`\`\`text
PURCHASE RECORDED ────► PAYMENT SUBMITTED ────► CREDIT CONFIRMED
  (Mandi Receipt)          (State Treasury / PFMS)       (Bank Credit Advice)
\`\`\`

- **Purchase Recorded**: Certified gross/tare weight and MSP total amount logged at the mandi.
- **Payment Submitted**: Bill submitted to treasury/bank partner; verification underway.
- **Payment Credited**: Authoritative credit advice received from RBI e-Kuber or the state cooperative bank.

> **Crucial Rule**: HarvestFlow only displays *“Payment Credited”* when an authoritative bank or treasury record confirms it. Otherwise, it displays *“Payment Submitted / Processing”* with the date and time of the last status inquiry.`,
      diagramId: 'payment-lifecycle-diagram',
      whyAccordionId: 'why-separate-payment-status'
    },
    {
      id: 'sec-08-6',
      title: 'Disruption Handling: Interactive Weighbridge Breakdown Scenario',
      evidenceType: 'PROPOSED',
      markdown: `Disruption management is HarvestFlow’s most powerful practical feature. Here is the exact automated event sequence when a failure occurs:

1. **Disruption Occurs**: At 10:15 AM, electronic weighbridge #2 malfunctions at Demo Centre 104.
2. **Operator Declares Disruption**: Operator selects *“Weighbridge Breakdown”* and logs a -100q capacity reduction.
3. **Usable Capacity Recalculated**: Intake drops from 400q to 300q.
4. **Affected Bookings Identified**: System scans today’s remaining schedule and identifies 4 bookings totaling 110q scheduled for 1:00 PM – 3:00 PM that exceed new capacity.
5. **New Bookings Throttled**: System instantly prevents new slot reservations for today.
6. **Automated Farmer Notification**: Affected farmers receive an instant SMS:
   > *“HarvestFlow Alert: Scale breakdown at Centre 104. Your 1:00 PM slot is affected. Click link or reply 1 for Friday 10 AM, reply 2 for Saturday 10 AM.”*
7. **Officer Exception Raised**: Supervising Officer dashboard displays: *“Centre 104: Weighbridge offline — 4 bookings affected — SMS alerts sent.”*
8. **Repairs Complete & Resumption**: Technician fixes scale at 1:45 PM. Operator clicks *“Resume Normal Operation”*. Capacity is restored to 400q, and waiting times update.`,
      diagramId: 'disruption-flow'
    }
  ]
};

export const CHAPTER_09_ACCESS_RELIABILITY: Chapter = {
  id: '09-access-and-reliability',
  number: '09',
  title: 'Access & Reliability — Inclusion & Offline Realities',
  shortTitle: 'Access & Reliability',
  subtitle: 'Multichannel inclusion, GIGW 3.0 accessibility, and why full offline booking is impossible',
  sourceSections: 'Sections 14 & 15: Assisted access and inclusion; Offline operation',
  primaryEvidence: 'OFFICIAL',
  readingMinutes: 7,
  category: 'Core Architecture',
  sections: [
    {
      id: 'sec-09-1',
      title: 'Inclusion Principle: The Anti-Exclusion Mandate',
      evidenceType: 'OFFICIAL',
      markdown: `A public agricultural procurement system that serves only tech-savvy smartphone owners is a public policy failure.

HarvestFlow explicitly mandates that **no farmer shall ever be forced into**:

\`\`\`text
ENGLISH + SMARTPHONE + MOBILE APP + CONTINUOUS INTERNET
\`\`\`

Any system requiring these four elements disenfranchises millions of marginal farmers, women farmers, and elderly cultivators, forcing them to sell their harvest to exploitative middlemen at 20–30% below MSP.`,
      callout: {
        type: 'IMPORTANT',
        title: 'Public Welfare Obligation',
        content: 'MSP procurement is a statutory price support program. Digital systems must increase farmer access, not create technical barriers to government entitlement.'
      }
    },
    {
      id: 'sec-09-2',
      title: 'The Multi-Channel Access Matrix',
      evidenceType: 'PROPOSED',
      markdown: `HarvestFlow guarantees equitable access across four distinct channels:

| Channel | Target User | Capabilities Supported | Hardware Required |
|---|---|---|---|
| **SMS Gateway** | 100% of mobile farmers | Booking confirmations, disruption alerts, turn notifications, payment status | Any 2G basic feature phone |
| **Assisted Access (CSC / Panchayat)** | Digitally illiterate farmers | Booking assistance, reference lookup, paper token printouts | Panchayat PC / CSC VLE terminal |
| **Centre Helpdesk** | Walk-in farmers | Gate check-in, token reprint, operational status queries | Mandi operator tablet / PC |
| **Responsive Web App** | Smartphone users / operators | Full self-service booking, interactive queue visualizer, multilingual UI | Any smartphone / tablet with browser |`,
      whyAccordionId: 'why-sms'
    },
    {
      id: 'sec-09-3',
      title: 'GIGW 3.0 & Accessibility Standards',
      evidenceType: 'OFFICIAL',
      markdown: `All digital interfaces of HarvestFlow are architected in compliance with the **Guidelines for Indian Government Websites and Apps (GIGW 3.0)**:
- **WCAG 2.1 Level AA Compliance**: High-contrast color palettes (minimum 4.5:1 text contrast), scalable typography, and full screen-reader support.
- **Keyboard Navigation**: All interactive elements (booking, tabs, accordions, search) operable via \`Tab\`, \`Enter\`, and arrow keys without mouse dependency.
- **Bilingual & Local Language Support**: UI labels and SMS templates designed for regional language localization (Hindi, Telugu, etc.).
- **Reduced Motion Support**: Respects user OS settings for \`prefers-reduced-motion\`.`,
      callout: {
        type: 'RULE',
        title: 'Compliance Guideline',
        content: 'Reference: GIGW 3.0 (https://guidelines.india.gov.in/) covering usability, accessibility, cybersecurity, and lifecycle expectations.'
      }
    },
    {
      id: 'sec-09-4',
      title: 'Why Full Offline Farmer Booking Is Deliberately Excluded',
      evidenceType: 'PROPOSED',
      markdown: `A common hackathon suggestion is: *“Let farmers book slots completely offline via an app or SMS without internet.”*

HarvestFlow **deliberately excludes full offline farmer booking**.

### The Hard Mathematical Reason:
Booking a slot requires reserving a slice of finite physical capacity (e.g. 50 quintals out of 300 quintals available).
If multiple offline devices book slots without communicating with a centralized database:
- Device A books 50q for Thursday 10 AM.
- Device B books 100q for Thursday 10 AM.
- Device C books 200q for Thursday 10 AM.
- When they all arrive at the mandi on Thursday, the centre faces **350 quintals of crop on 100 quintals of remaining capacity**, causing catastrophic vehicle gridlock and farmer fury.

> **Current usable capacity is mandatory to prevent double-booking collisions.**`,
      whyAccordionId: 'why-not-full-offline-booking'
    },
    {
      id: 'sec-09-5',
      title: 'The Controlled Centre-Side Offline Contingency',
      evidenceType: 'PROPOSED',
      markdown: `While offline *booking* is impossible, HarvestFlow **does support a controlled centre-side offline contingency** for gate operations during temporary broadband outages:

- **What It Does**: If the centre loses internet connection, the operator’s device switches to local caching mode. The operator can still enter or scan tokens to record **arrival timestamps**, **operator IDs**, and **check-in events** locally.
- **Reconnection Sync**: Once connectivity resumes, local check-in records are automatically synchronized with the central server with a designated \`offline_sync\` flag.
- **Conflict Handling**: If an offline check-in conflicts with a server-side cancellation, it is flagged for manual review by the supervising officer.

> **Crucial Rule**: Offline mode never independently becomes the authoritative government procurement or payment system. It is strictly a temporary contingency for capturing arrival events.`,
      callout: {
        type: 'NOTE',
        title: 'Resilience Architecture',
        content: 'Local caching is implemented via client-side IndexedDB / local storage with cryptographic event hashing to prevent backdated tampering.'
      }
    }
  ]
};
