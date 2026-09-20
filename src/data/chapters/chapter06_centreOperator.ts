import type { Chapter } from '../../types/content';

export const CHAPTER_06_CENTRE_OPERATOR: Chapter = {
  id: '06-centre-operator',
  number: '06',
  title: 'Centre Operator Workflow — The Biggest Adoption Test',
  shortTitle: 'Centre Operator',
  subtitle: 'Zero duplicate entry, minimum operator actions, ripple effects, and stale data handling',
  sourceSections: 'Section 8: Operator workflow — the biggest adoption test',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 8,
  category: 'Core Architecture',
  sections: [
    {
      id: 'sec-06-1',
      title: 'The Operator as the Critical Human in the Loop',
      evidenceType: 'PROPOSED',
      markdown: `The centre operator (mandi clerk, cooperative society secretary, or weighbridge operator) is the ultimate determinant of whether HarvestFlow succeeds or fails in the field.

During peak procurement season, centre staff are already overwhelmed with:
- physically inspecting truckloads of grain;
- managing weighbridge queues and unruly crowds;
- overseeing labour gangs unloading 50-kg gunny bags;
- entering purchase records into state software.

If a new system requires tedious duplicate data entry or complicates their day, **operators will simply abandon it**, and the system will instantly become stale.`,
      callout: {
        type: 'RULE',
        title: 'Non-Negotiable Design Rule',
        content: '“Never ask an operator to re-enter information that an authoritative government system already knows.” HarvestFlow collects ONLY the minimal operational coordination events it needs.'
      }
    },
    {
      id: 'sec-06-2',
      title: 'The 7 Minimum Operator Actions',
      evidenceType: 'PROPOSED',
      markdown: `HarvestFlow reduces the operator interface to exactly seven discrete, high-impact actions:

1. **Open / Close Centre**: Sets daily intake active or inactive with a single toggle.
2. **Adjust Today’s Usable Capacity**: Logs operational reductions (e.g. -100q due to rain or scale issues) with mandatory reason code.
3. **Check Farmer In Using Token**: Fast entry or scan of the alphanumeric token upon physical gate arrival.
4. **Record Required Operational Stage**: Progresses the farmer from \`WAITING\` to \`PROCESSING\` or \`COMPLETED\` (or auto-synced from weighbridge).
5. **Declare Disruption**: Signals equipment breakdown, storage overflow, or weather hazards to trigger automated alert cascades.
6. **Resume Normal Operation**: Clears active disruptions and recalculates restored intake capacity.
7. **Resolve Exceptions**: Handles authorized overrides (e.g. verified emergency deliveries) with logged justification.`,
      table: {
        headers: ['Action', 'Input Required', 'System Effect'],
        rows: [
          ['1. Open / Close', 'Single toggle + opening remarks', 'Activates/freezes daily intake'],
          ['2. Adjust Capacity', 'Quantity delta (-X q) + reason code', 'Recalculates slots; prevents overbooking'],
          ['3. Check-in Token', 'Enter 6-char token or scan QR', 'Logs arrival, enters queue, triggers SMS'],
          ['4. Update Stage', 'Select state (Processing/Complete)', 'Updates live queue display & farmer status'],
          ['5. Declare Disruption', 'Select issue type (Scale/Weather/Labour)', 'Halts intake; dispatches reschedule alerts'],
          ['6. Resume Operation', 'Click resume + restored capacity', 'Restores queue; updates waiting times'],
          ['7. Resolve Exception', 'Token + override reason', 'Authorizes intake outside normal slot']
        ]
      }
    },
    {
      id: 'sec-06-3',
      title: 'One Action → Multiple Digital Effects',
      evidenceType: 'PROPOSED',
      markdown: `To minimize human workload, HarvestFlow is architected so that **a single operator tap cascades into multiple digital outcomes across the entire ecosystem**:

\`\`\`text
CHECK-IN TOKEN
      │
      ├── 1. Records immutable Arrival Timestamp
      ├── 2. Enters farmer into Live Operational Queue
      ├── 3. Dispatches SMS: "Arrival Confirmed — Queue Position #14"
      ├── 4. Updates Supervising Officer Real-Time Dashboard
      └── 5. Generates Cryptographically Signed Audit Event
\`\`\`

The operator enters nothing more than the token code. All downstream status updates, queue sequencing, notifications, and compliance records occur automatically.`,
      diagramId: 'one-action-effects'
    },
    {
      id: 'sec-06-4',
      title: 'Critical Failure Case: When the Operator Does NOT Update',
      evidenceType: 'PROPOSED',
      markdown: `What happens if an operator gets busy, abandons the terminal, or internet connectivity drops?

In many naive systems, the UI continues displaying “Queue: 5 minutes” when the yard is actually in total gridlock. **HarvestFlow treats this as a critical failure case with deterministic stale-data logic:**

1. **Explicit Timestamp**: Every screen displays: *“Last updated at 11:20 AM (38 minutes ago)”*.
2. **Stale Data Flagging**: After a configured inactivity threshold (e.g. 45 minutes without an operational event), the status is visibly flagged as **STALE / UNVERIFIED**.
3. **Wait Estimate Suppression**: The system replaces numerical wait estimates with:
   > *“Wait estimate unavailable — queue information is being updated by centre staff.”*
4. **Officer Escalation**: Stale centres automatically turn yellow/red on the Supervising Officer’s district dashboard with an automated alert: *“Centre 104: No updates for 52 minutes — verify operational status.”*
5. **Assisted Escalation**: District control room can place a direct call to the centre supervisor to ascertain status.`,
      whyAccordionId: 'why-track-last-update-time',
      callout: {
        type: 'WARNING',
        title: 'Core Design Truth',
        content: '“A stale capacity value is worse than no capacity value.” Do not invent live status when no one has updated the system.'
      }
    }
  ]
};

export const CHAPTER_07_DATA_OWNERSHIP: Chapter = {
  id: '07-data-ownership',
  number: '07',
  title: 'Data Ownership & Source of Truth',
  shortTitle: 'Data Ownership',
  subtitle: 'The 14-domain authority matrix and conflict handling without silent overwrites',
  sourceSections: 'Section 9: Source of truth',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 7,
  category: 'Core Architecture',
  sections: [
    {
      id: 'sec-07-1',
      title: 'The Core Governance Principle',
      evidenceType: 'PROPOSED',
      markdown: `Before writing a single line of application code, system boundaries and data ownership must be strictly defined:

> **HarvestFlow should own coordination, not government procurement or financial truth.**

HarvestFlow never attempts to act as the primary database for land ownership, farmer identity, MSP purchase amounts, or bank disbursements. Those domains are legally and statutorily owned by state and central government departments.

HarvestFlow owns the **operational coordination layer**: appointments, check-ins, queue sequence, notification logs, and operational audit events.`,
      whyAccordionId: 'why-not-replace-gov-systems'
    },
    {
      id: 'sec-07-2',
      title: 'The 14-Domain Authority Matrix',
      evidenceType: 'PROPOSED',
      markdown: `The following interactive matrix defines the single authoritative source of truth for every major information domain across the procurement lifecycle:`,
      diagramId: 'source-of-truth-table',
      table: {
        headers: ['Information Domain', 'Authoritative Source of Truth', 'HarvestFlow Role'],
        rows: [
          ['Farmer Registration', 'Existing Authorized Government System (e.g. e-Uparjan / Agristack)', 'Read-only consumer / verification'],
          ['Farmer Eligibility & Land Quota', 'Government / Agency Statutory Rules', 'Enforces quota limit during booking'],
          ['Procurement Policy & MSP Rates', 'Department of Consumer Affairs (DoCA) / State Cabinet', 'Display official rates and guidelines'],
          ['Slot Availability & Booking', 'HarvestFlow Coordination Engine', 'Authoritative owner of appointments'],
          ['Farmer Check-in Event', 'HarvestFlow Operational Layer (Centre Gate)', 'Authoritative owner of arrival logs'],
          ['Live Yard Queue', 'HarvestFlow Operational Layer', 'Authoritative owner of sequence'],
          ['Capacity Signal & Adjustments', 'Authorized Centre / Department Workflow', 'Manages usable capacity calculation'],
          ['Crop Quality Result', 'Authorized Mandi Quality Inspector / Grader', 'Surfaces result & permitted dispute paths'],
          ['Accepted Net Weight', 'Authoritative Procurement System (Certified Weighbridge)', 'Reads certified weight for audit'],
          ['Official Purchase Record', 'Existing Government Procurement ERP (e.g. OPMS)', 'Reads transaction ID & receipt reference'],
          ['Payment Disbursement Instruction', 'Authorized Government Treasury / PFMS', 'Tracks submission status'],
          ['Bank Credit Confirmation', 'Authoritative Bank / RBI e-Kuber / PFMS Record', 'Surfaces verified credit to farmer'],
          ['Notification Delivery Logs', 'HarvestFlow Notification Service / Telecom Gateway', 'Authoritative owner of delivery status'],
          ['Operational Audit Trail', 'HarvestFlow Immutable Audit Log', 'Authoritative owner of coordination audit']
        ]
      }
    },
    {
      id: 'sec-07-3',
      title: 'Conflict Handling Protocol: No Silent Overwrites',
      evidenceType: 'PROPOSED',
      markdown: `What happens when HarvestFlow’s operational record and the government ERP disagree? (For example: HarvestFlow recorded 50 quintals at the gate, but the ERP receipt shows 48.5 quintals due to moisture refraction).

HarvestFlow enforces a strict **Conflict Handling Protocol**:
1. **Never Silently Overwrite**: The system must never overwrite an authoritative government value with a local estimate, nor silently erase a local operational event.
2. **Identify Both Sources**: The record explicitly displays:
   - *Government Authoritative Value*: 48.50 q (e-Uparjan Receipt #UP-9021)
   - *Gate Operational Recorded Value*: 50.00 q (HarvestFlow Check-in Token HF-DEMO-024)
3. **Capture Timestamps & Actors**: Both values retain their respective update timestamps and operator IDs.
4. **Flag as Reconciled Difference**: The difference (1.50 q) is categorized under standard operational rules (e.g. *Moisture deduction applied by mandi grader*).
5. **Route to Authorized Resolver**: If the conflict is outside allowable tolerances, an exception is automatically routed to the Supervising Officer for formal reconciliation.`,
      callout: {
        type: 'RULE',
        title: 'Data Integrity Mandate',
        content: 'In any discrepancy regarding financial payout or accepted crop weight, the statutory government system is the final legal authority. HarvestFlow provides audit transparency, not financial arbitration.'
      }
    }
  ]
};
