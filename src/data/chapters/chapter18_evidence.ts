import type { Chapter } from '../../types/content';

export const CHAPTER_18_EVIDENCE: Chapter = {
  id: '18-evidence',
  number: '18',
  title: 'Evidence & Claim Discipline — Hierarchy & Badges',
  shortTitle: 'Evidence & Badges',
  subtitle: 'The 8 evidence badges, the 7-level precedence hierarchy, and claim discipline rules',
  sourceSections: 'Sections 27, 28 & 29: Evidence register; Evidence rules; Most important research limitation',
  primaryEvidence: 'OFFICIAL',
  readingMinutes: 8,
  category: 'Strategy & Reference',
  sections: [
    {
      id: 'sec-18-1',
      title: 'The 8 Evidence Badges: System of Epistemic Integrity',
      evidenceType: 'OFFICIAL',
      markdown: `In HarvestFlow, every statement, claim, and feature must carry an explicit **Evidence Badge** to prevent exaggeration and maintain absolute intellectual honesty:

1. **\`OFFICIAL\`**: Grounded directly in published government portals, gazettes, tender documents, or ministerial reviews (e.g. e-Uparjan, GIGW 3.0, API Setu).
2. **\`RESEARCH\`**: Documented in peer-reviewed academic studies, institutional research papers, or agritech field reports.
3. **\`FIELD REPORT\`**: Documented real-world conditions reported by farmers, mandi workers, or news field coverage.
4. **\`CURRENT PROTOTYPE\`**: Actually implemented and working in the current team prototype codebase.
5. **\`PROPOSED\`**: A deliberate architectural design decision formulated by Team Digital Dynamos.
6. **\`PILOT HYPOTHESIS\`**: A specific operational outcome or assumption that requires empirical validation during the pilot.
7. **\`ILLUSTRATIVE\`**: Example mock data, scenarios, or calculations used solely for educational demonstration.
8. **\`OUT OF SCOPE\`**: Deliberately evaluated and excluded from the system.`,
      table: {
        headers: ['Badge Name', 'Evidence Weight', 'Acceptable Usage in Presentations'],
        rows: [
          ['OFFICIAL', 'Highest Statutory Truth', 'Cite official portal/gazette source directly'],
          ['RESEARCH', 'High Empirical Grounding', 'Cite academic/institutional study authors'],
          ['FIELD REPORT', 'Contextual Observation', 'Frame as qualitative user feedback'],
          ['CURRENT PROTOTYPE', 'Verified Engineering', 'Demonstrate live in prototype view'],
          ['PROPOSED', 'System Architecture Design', 'Present as HarvestFlow proposed design decision'],
          ['PILOT HYPOTHESIS', 'Unvalidated Assumption', 'State clearly as a hypothesis to test during pilot'],
          ['ILLUSTRATIVE', 'Educational Demonstration', 'Label as demo/simulation data; never present as real'],
          ['OUT OF SCOPE', 'Deliberate Exclusion', 'Explain why it was evaluated and rejected']
        ]
      }
    },
    {
      id: 'sec-18-2',
      title: 'The 7-Level Evidence Precedence Hierarchy',
      evidenceType: 'PROPOSED',
      markdown: `When different information sources conflict, HarvestFlow strictly applies the following **Evidence Precedence Hierarchy**:

\`\`\`text
1. OFFICIAL SIH26032 SCOPE (Ministry of Consumer Affairs / DoCA Mandate)
      ▼
2. PILOT-SPECIFIC OFFICIAL EVIDENCE (Target State Procurement SOP & Rules)
      ▼
3. CURRENT OFFICIAL GOVERNMENT SYSTEM DOCUMENTATION (e-Uparjan, OPMS, GIGW)
      ▼
4. VALIDATED FIELD / ACADEMIC RESEARCH (Ground-level studies & constraints)
      ▼
5. APPROVED HARVESTFLOW DESIGN DECISIONS (Team Digital Dynamos Architecture)
      ▼
6. CURRENT PROTOTYPE IMPLEMENTATION (Working software code)
      ▼
7. ILLUSTRATIVE EXAMPLES (Simulated mock data & demonstrations)
\`\`\`

A lower-level source (such as a prototype feature or an illustrative slide) can **never override** an official government mandate or statutory state rule.`,
      callout: {
        type: 'RULE',
        title: 'Four Core Claim Discipline Rules',
        content: '1. NEVER turn PROPOSED into CURRENT.\n2. NEVER turn ILLUSTRATIVE into FACT.\n3. NEVER turn ONE STATE’S WORKFLOW into an INDIA-WIDE RULE.\n4. NEVER turn a PILOT HYPOTHESIS into a PROVEN FACT.'
      }
    },
    {
      id: 'sec-18-3',
      title: 'The Single Mandatory Unfinished Research',
      evidenceType: 'PILOT HYPOTHESIS',
      markdown: `Our generic analytical research across MP, Telangana, Chhattisgarh, HP, and national reviews is complete and sufficient for:
- Understanding the root problem of SIH26032;
- Challenging unnecessary technology (AI, blockchain, microservices);
- Designing the core coordination loop;
- Formulating a realistic MVP.

### No more broad, generic research is necessary right now.

However, **one specific category of research is still mandatory before claiming the solution is deployment-ready**:

> **Pilot-Specific Official Evidence.**

Once the team selects the specific pilot state, crop, and agency (e.g. Telangana Civil Supplies Corporation for Kharif Paddy in Suryapet District), the team must obtain that specific authority’s:
1. Formal procurement Standard Operating Procedure (SOP);
2. Exact token and slot scheduling rules;
3. Farmer registration and land validation API documentation;
4. Physical weighbridge and moisture testing protocols;
5. Payment sanction and treasury clearing timelines;
6. Mandatory local language requirements.

This is not research for the sake of research—it is the **essential validation of the exact physical and legal environment in which HarvestFlow will operate.**`,
      callout: {
        type: 'IMPORTANT',
        title: 'Pilot Readiness Gate',
        content: 'Without pilot-specific official evidence, any claim that HarvestFlow is “ready for deployment” in that state is ungrounded.'
      }
    }
  ]
};

export const CHAPTER_19_FINAL_RULES: Chapter = {
  id: '19-final-design-rules',
  number: '19',
  title: 'Final Design Rules — The 20 Commandments of HarvestFlow',
  shortTitle: 'Final Design Rules',
  subtitle: 'The non-negotiable architectural constraints and quality filters governing the project',
  sourceSections: 'Section 30: Final design rules & Section 31',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 8,
  category: 'Strategy & Reference',
  sections: [
    {
      id: 'sec-19-1',
      title: 'The 20 Non-Negotiable Design Rules',
      evidenceType: 'PROPOSED',
      markdown: `Every member of Team Digital Dynamos must internalize these twenty design rules. Any proposed code change, architecture diagram, or presentation slide that violates any of these rules must be rejected:

1. **Solve SIH26032, not “agriculture” generally.** We are not building farm management, soil testing, or disease detection.
2. **Automation does not require AI.** Smart automation means deterministic, reliable rule execution.
3. **Do not duplicate government procurement truth.** Registration, land records, and payments belong to the government.
4. **Do not claim existing systems are inadequate without evidence.** Respect existing software (e-Uparjan, OPMS).
5. **Do not claim HarvestFlow is unique because it has a chatbot.** A chatbot does not coordinate physical mandis.
6. **Do not make operators perform duplicate data entry.** “One Action → Multiple Digital Effects.”
7. **Do not make smartphones mandatory.** Basic 2G SMS and assisted access must provide 100% functionality.
8. **Do not fake real-time information.** Always display update timestamps; flag stale data after thresholds.
9. **Do not guarantee waiting times.** Provide realistic ranges only when recent operational data supports it.
10. **Do not claim payment execution.** We track verified status; we do not disburse public treasury funds.
11. **Do not hard-code one state\'s workflow as universal.** Every state has distinct procurement SOPs.
12. **Do not over-engineer the architecture.** Simple maintainable web app + relational DB + REST API.
13. **Do not add a feature without a real operational reason.** The Feature Admission Rule is absolute.
14. **Every important status must have an owner.** Explicit accountability for every data field.
15. **Every manual change must have actor + timestamp + reason.** 100% immutable audit logging.
16. **Every integration must have a failure/fallback path.** Live API → Batch Exchange → Coordination Only.
17. **Every major claim must have evidence or be labelled a hypothesis.** Epistemic integrity with badges.
18. **Pilot before scale.** Earn the right to expand by measuring impact at 1–2 centres first.
19. **Measure before claiming impact.** Never invent percentage waiting time reductions.
20. **If removing a feature makes the solution clearer without weakening SIH26032 coverage, remove it.**`,
      callout: {
        type: 'RULE',
        title: 'The Master Filter',
        content: '“If a feature is not required to make this journey more predictable, it does not belong in HarvestFlow.”'
      }
    }
  ]
};

export const CHAPTER_20_QUICK_REFERENCE: Chapter = {
  id: '20-team-quick-reference',
  number: '20',
  title: 'Team Quick Reference & Jury Cheatsheet',
  shortTitle: 'Team Quick Reference',
  subtitle: '30-second pitches, 2-minute walkthroughs, ideal demo flows, dangerous claims, and jury Q&As',
  sourceSections: 'Sections 0, 24, 30 & 31: Executive Decision; Ideal Demonstration; Final Definition',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 9,
  category: 'Strategy & Reference',
  sections: [
    {
      id: 'sec-20-1',
      title: 'The 30-Second Elevator Pitch',
      evidenceType: 'PROPOSED',
      markdown: `> *“HarvestFlow is a government-compatible coordination layer for crop procurement centres. While state governments already have excellent systems for farmer registration and payment disbursement, farmers still face 24-to-48-hour mandi queues because arrivals are not coordinated with actual centre capacity.*
>
> *HarvestFlow schedules arrivals against usable intake capacity, manages gate check-in and live queues, dispatches instant SMS alerts during equipment disruptions, and tracks verified payment milestones—without replacing the government’s existing authoritative software.”*`
    },
    {
      id: 'sec-20-2',
      title: 'The 2-Minute Structured Explanation',
      evidenceType: 'PROPOSED',
      markdown: `1. **The Problem**: In crop procurement, the visible symptom is overnight tractor queues. The deeper problem is an operational mismatch: farmers arrive without knowing if the centre has the physical capacity (weighbridges, staff, storage) to receive them.
2. **What Exists Today**: States like MP (e-Uparjan) and Telangana (OPMS) already have digital registration and payment tracking. We do not claim government has no software.
3. **What HarvestFlow Adds**: HarvestFlow provides the missing operational coordination loop:
   - **Capacity-Aware Booking**: Calculates slots based on usable quintals, not empty calendar cells;
   - **Farmer Check-in**: Separates future bookings from physical gate presence;
   - **Operational Queue**: Sequences vehicles deterministically on a first-checked-in, first-served basis;
   - **Disruption Cascades**: When a weighbridge breaks, usable capacity shrinks, and affected farmers are alerted instantly via SMS before leaving home;
   - **Status Visibility**: Reflects verified purchase and bank payment milestones.
4. **What We Deliberately Exclude**: No AI/ML, no blockchain, no payment execution, no ERP replacement. Pure deterministic automation that respects government data sovereignty.
5. **The Adoption Path**: Phase 0 Discovery → Phase 1 Shadow Mode → Phase 2 Assisted Pilot → Phase 3 Integration Pilot → Measured Scale.`
    },
    {
      id: 'sec-20-3',
      title: 'The 8-Step Ideal Hackathon Demonstration Flow',
      evidenceType: 'PROPOSED',
      markdown: `In the hackathon presentation or prototype review, follow this exact 8-step narrative showing **one farmer’s journey**:

1. **Step 1 — Capacity-Aware Booking**: Farmer enters approved registration ID (\`UP-9021\`), crop (Paddy Common), and quantity (50 quintals). System checks Demo Centre 104 and reserves Thursday 10:00 AM – 12:00 PM slot.
2. **Step 2 — Confirmation & Token**: Farmer receives instant confirmation with universal **Token HF-DEMO-024** via SMS.
3. **Step 3 — Centre Disruption Occurs**: At 8:30 AM Thursday, operator declares a weighbridge breakdown (-100q capacity adjustment).
4. **Step 4 — Automated Alert & Reschedule**: HarvestFlow locks remaining capacity, identifies affected slots, and sends an instant SMS offering priority reschedule options.
5. **Step 5 — Farmer Arrival & Check-in**: Farmer arrives at revised time. Operator enters Token \`HF-DEMO-024\`. Status changes from \`BOOKED\` to \`CHECKED_IN\`.
6. **Step 6 — Operational Queue Progression**: Farmer sees live queue position (#4). Automated SMS arrives when 2 vehicles remain ahead: *“Move to Weighbridge 1.”*
7. **Step 7 — Procurement Intake**: Weighment completed. Operator logs completion in ERP.
8. **Step 8 — Verified Payment Status**: Farmer tracking view updates to \`Purchase Recorded\` → \`Payment Submitted\` → \`Payment Credited\` with bank transaction reference.

> **Result**: Proves the complete SIH26032 journey in 4 minutes without unnecessary technology theatre.`,
      diagramId: 'core-loop'
    },
    {
      id: 'sec-20-4',
      title: 'Dangerous Claims to NEVER Make in Front of a Jury',
      evidenceType: 'PROPOSED',
      markdown: `| Dangerous Claim (NEVER SAY) | Why It Destroys Credibility | What You MUST Say Instead |
|---|---|---|
| *“Government has no software for this.”* | Factually false; MP e-Uparjan and Telangana OPMS have operated for over a decade. | *“Existing state systems manage registration and payments; HarvestFlow adds physical queue and capacity coordination.”* |
| *“We use AI / ML to optimize queues.”* | Unauditable black box; rural data is too sparse; violates government transparency. | *“We use deterministic, rule-based automation: capacity formulas and FCFS queue state machines.”* |
| *“Our app processes payments faster.”* | HarvestFlow does not touch banking rails or disburse treasury funds. | *“We provide verified status visibility across payment milestones without executing financial transactions.”* |
| *“This can be deployed nationwide tomorrow.”* | Ignores vast differences in state procurement SOPs, crops, and APIs. | *“We follow a disciplined 5-phase pilot strategy: Discovery → Shadow Mode → Pilot → Measured Scale.”* |
| *“Farmers need smartphones to scan QR codes.”* | Excludes marginal and smallholder farmers who lack smartphones. | *“Universal alphanumeric Token works 100% via basic 2G SMS and assisted Panchayat kiosks.”* |
| *“We built our own blockchain ledger.”* | Massive compute waste; government already has legal centralized authority. | *“We maintain immutable relational audit logs with cryptographic event signatures.”* |`,
      callout: {
        type: 'WARNING',
        title: 'Jury Warning',
        content: 'Senior evaluators from the Ministry of Consumer Affairs or NIC know government procurement inside and out. Making any of the dangerous claims above will immediately disqualify our proposal.'
      }
    }
  ]
};
