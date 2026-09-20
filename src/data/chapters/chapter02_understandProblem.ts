import type { Chapter } from '../../types/content';

export const CHAPTER_02_UNDERSTAND_PROBLEM: Chapter = {
  id: '02-understand-the-problem',
  number: '02',
  title: 'Understand the Problem — Root Causes & Journey',
  shortTitle: 'The Problem',
  subtitle: 'Deconstructing symptoms versus root causes across the procurement lifecycle',
  sourceSections: 'Section 2: What the problem really is',
  primaryEvidence: 'RESEARCH',
  readingMinutes: 7,
  category: 'Problem & Systems',
  sections: [
    {
      id: 'sec-02-1',
      title: 'Visible Symptoms vs. The Deeper Problem',
      evidenceType: 'FIELD REPORT',
      markdown: `Every harvest season, media reports document massive tractor queues outside mandis, farmers sleeping on bags of paddy in sub-zero or rainy conditions, and distress sales to local moneylenders.

The **visible symptoms** are:
- Extreme waiting times (up to 48–72 hours outside the mandi yard);
- Uncertain procurement schedules and sudden unannounced closures;
- Unclear queue position causing anxiety, disputes, and queue-jumping;
- Repeated journeys due to gate turnaways or undocumented rejections;
- Total opacity regarding procurement acceptance weight;
- Prolonged uncertainty regarding when MSP bank payments will clear.

The **deeper systemic problem** is:
> **The farmer's planned arrival is not reliably coordinated with the centre's actual operational state.**`,
      callout: {
        type: 'HYPOTHESIS',
        title: 'Pilot Validation Note',
        content: 'These root causes are research hypotheses to validate at the selected pilot centre, not universal claims about every single procurement centre across India.'
      }
    },
    {
      id: 'sec-02-2',
      title: 'The 6-Stage Problem Journey: Failures at Every Transition',
      evidenceType: 'RESEARCH',
      markdown: `A systems view reveals that procurement consists of six sequential operational phases:

\`\`\`text
PLAN → ARRIVE → QUEUE → PROCESS → COMPLETE → TRACK
\`\`\`

A breakdown can occur at **every single transition**:

1. **PLAN → ARRIVE Failure**: The farmer leaves home based on an arbitrary assumption or word-of-mouth without knowing if the centre is open or capable of receiving their crop volume.
2. **ARRIVE → QUEUE Failure**: The farmer reaches the gate, but there is no structured intake sequence. Farmers who arrived later with smaller carts may enter ahead of larger loads, or the yard fills up completely.
3. **QUEUE → PROCESS Failure**: The line halts abruptly because a weighbridge breaks down, labour runs out, or storage godowns are full. No one communicates why the queue stopped.
4. **PROCESS → COMPLETE Failure**: Crop is inspected or weighed, but disputes arise over moisture deductions or quality grading without documented receipts or clear escalation paths.
5. **COMPLETE → TRACK Failure**: The farmer returns home with an informal slip, unsure when the purchase record will enter the treasury system or when funds will reach their bank account.`,
      diagramId: 'problem-journey'
    },
    {
      id: 'sec-02-3',
      title: 'Detailed Root Cause Analysis (A through G)',
      evidenceType: 'RESEARCH',
      markdown: `### A. Arrival Mismatch
Farmers arrive without dependable information about when the centre can actually receive them. Without appointment throttling, hundreds of farmers converge on the same morning.

### B. Capacity Mismatch
Nominal capacity differs significantly from **usable capacity**. A mandi that claims to handle 500 quintals per day may only handle 200 quintals when one electronic scale fails, labourers are absent, or bagging materials run out.

### C. Queue Mismatch
A **booking** is not a **check-in**, and a **check-in** is not the same as **being processed**. Existing portals often conflate a date reservation with physical presence.

### D. Information Mismatch
Different disparate systems own registration, land records, procurement intake, and treasury payments. While government administrators see disconnected databases, the farmer experiences them as **one single stressful journey**.

### E. Operator Workload
Centre operators and mandi secretaries are overwhelmed during procurement peaks. Any system requiring duplicate data entry quickly becomes neglected, leading to stale and misleading records.

### F. Disruption Mismatch
Equipment failure, unseasonal rainfall, power cuts, or transport shortages invalidate previously issued schedules. Without automated event triggers, farmers continue hauling grain to a crippled facility.

### G. Payment Visibility Mismatch
Procurement completion and payment completion are distinct events separated by administrative verification, fund sanctions, and bank clearing. Opacity between these stages fuels farmer distrust.`,
      table: {
        headers: ['Mismatch Type', 'Operational Cause', 'Farmer Consequence'],
        rows: [
          ['Arrival Mismatch', 'Unthrottled gate entry', 'Overnight waiting outside mandi'],
          ['Capacity Mismatch', 'Ignoring equipment/labour limits', 'Yard gridlock & vehicle jams'],
          ['Queue Mismatch', 'Conflating booking with presence', 'Phantom queues & queue-jumping'],
          ['Information Mismatch', 'Fragmented government silos', 'Confusion over which office to consult'],
          ['Operator Workload', 'Cumbersome duplicate data entry', 'Stale or fabricated system records'],
          ['Disruption Mismatch', 'Lack of automated alert cascades', 'Hauling crop to broken/closed mandis'],
          ['Payment Visibility', 'Decoupled procurement & treasury', 'Repeated stressful bank visits']
        ]
      }
    },
    {
      id: 'sec-02-4',
      title: 'Worked Example: Ramesh’s Journey Today vs. With HarvestFlow',
      evidenceType: 'ILLUSTRATIVE',
      markdown: `#### The Scenario Today (Uncoordinated)
*Ramesh, a paddy farmer with 80 quintals, hears from a neighbor that the local purchase centre is open.*
- **Day 1, 5:00 AM**: Ramesh hires a tractor-trolley for ₹2,500 and leaves for the centre, arriving at 7:00 AM.
- **Day 1, 11:30 AM**: After waiting in a 2-km line of 90 tractors, the gatekeeper announces the single weighbridge is malfunctioning.
- **Day 1, Night**: Ramesh is forced to sleep on the roadside to guard his paddy from theft and dew. Tractor hiring charges double to ₹5,000.
- **Day 2, 3:00 PM**: Scale is repaired, but trucks have not arrived to clear bagged paddy. Centre closes.
- **Day 3, 10:00 AM**: Paddy is finally weighed. Ramesh receives a handwritten slip. For the next 3 weeks, he visits the bank every Tuesday, uncertain if his payment has been rejected or delayed.

---

#### The Scenario With HarvestFlow (Coordinated)
- **Day 0**: Ramesh looks up his approved registration via CSC or SMS. HarvestFlow shows available usable capacity and offers a confirmed arrival slot for Thursday, 10:00 AM – 12:00 PM. Ramesh receives **Token HF-DEMO-024**.
- **Thursday, 8:30 AM**: A weighbridge breaks down. Operator logs an adjustment. Usable capacity decreases. HarvestFlow detects Ramesh’s slot is affected and sends an instant SMS: *“Centre capacity reduced due to scale repair. Your slot is rescheduled to 2:00 PM today, or click to pick Friday morning.”*
- **Thursday, 2:00 PM**: Ramesh arrives with his tractor. Operator scans Token HF-DEMO-024.
- **Thursday, 2:45 PM**: Token is called. Weighment completed. Verified procurement record logged.
- **Following Days**: Ramesh receives SMS milestones: *“Purchase recorded” → “Payment submitted to Treasury” → “Payment credited: ₹1,74,400 into Bank of Baroda A/c **4821 on 24-Sep.”*`
    }
  ]
};

export const CHAPTER_03_EXISTING_SYSTEMS: Chapter = {
  id: '03-existing-government-systems',
  number: '03',
  title: 'Existing Government Systems — The Most Important Research Finding',
  shortTitle: 'Existing Govt Systems',
  subtitle: 'Evidence from MP e-Uparjan, Telangana OPMS, Chhattisgarh, and HP procurement portals',
  sourceSections: 'Section 3: Existing systems — the most important research finding & Section 28',
  primaryEvidence: 'OFFICIAL',
  readingMinutes: 8,
  category: 'Problem & Systems',
  sections: [
    {
      id: 'sec-03-1',
      title: 'The Breakthrough Research Finding: Government Already Has Software',
      evidenceType: 'OFFICIAL',
      markdown: `The most critical realization of our research is that **government departments across India already operate sophisticated, multi-crore digital procurement systems**.

HarvestFlow must **never** pretend that the government has no digital procurement infrastructure.

> **The problem is NOT “government has no software.”**

Current official, publicly documented state systems already provide substantial pieces of the farmer journey. Understanding this reality fundamentally shaped our architecture: HarvestFlow is designed to **integrate with and coordinate existing systems, NOT replace them.**`,
      whyAccordionId: 'why-not-replace-gov-systems',
      callout: {
        type: 'RULE',
        title: 'Mandatory Claim Discipline',
        content: 'Do NOT say “no existing system does this.” Say: “Our research identified a need to validate whether the selected state’s existing system already synchronizes appointment capacity, live queue state and operational disruptions. HarvestFlow is designed to fill that coordination gap if it exists.”'
      }
    },
    {
      id: 'sec-03-2',
      title: 'Analysis of Four Major State Systems',
      evidenceType: 'OFFICIAL',
      markdown: `### 1. Madhya Pradesh — e-Uparjan
[Official Portal (https://mpeuparjan.nic.in/)](https://mpeuparjan.nic.in/)
- **Documented Capabilities**: Comprehensive farmer registration linked with land records (Khasra), online slot booking (*Kisan Slot Booking*), procurement recording at societies, transport tracking, warehouse receipt generation, and direct bank payment processing.
- **What HarvestFlow Cannot Claim**: We cannot claim that farmer registration, slot booking, or digital payments are novel concepts invented by our team.

### 2. Telangana — Online Procurement Management System (OPMS)
[CGG Project Profile (https://www.cgg.gov.in/it_project/online-procurement-management-system-opms/)](https://www.cgg.gov.in/it_project/online-procurement-management-system-opms/)
- **Documented Capabilities**: Built by the Centre for Good Governance (CGG); captures paddy procurement across thousands of Paddy Procurement Centres (PPCs), transport contractor dispatch to rice mills, direct farmer payments via treasury, centre-side tablet data collection, executive dashboards, and automated SMS.
- **What HarvestFlow Cannot Claim**: We cannot claim that tablet-based mandi data entry, automated SMS updates, or transport tracking are novel.

### 3. Chhattisgarh — KMS 2025–26 Token & Command Centre
[Government Publication (https://jansampark.cg.gov.in/Janman/EN_OCT2025/JanmanOct2025_eng.pdf)](https://jansampark.cg.gov.in/Janman/EN_OCT2025/JanmanOct2025_eng.pdf)
- **Documented Capabilities**: Online token booking system for paddy farmers, e-KYC and Agristack-related farmer registration verification, biometric verification at primary cooperative societies, Integrated Command and Control Centre (ICCC) for real-time monitoring of procurement, storage and transport, and assisted offline token issuance through societies.
- **What HarvestFlow Cannot Claim**: We cannot claim that token generation, command centre monitoring, or assisted offline token issuance are novel.

### 4. Himachal Pradesh — Procurement Portal
[Official Software Interface (https://hpappp.hp.gov.in/Citizen/SoftwareInterfaces.aspx)](https://hpappp.hp.gov.in/Citizen/SoftwareInterfaces.aspx)
- **Documented Capabilities**: Farmer registration, token generation, procurement intake entry, receipt generation, transfer of approved farmer data to the Central Food Procurement Portal (CFPP) through API, and structured payment data exchange.
- **What HarvestFlow Cannot Claim**: We cannot claim that API-based data exchange with central portals is novel.`,
      table: {
        headers: ['State System', 'Key Features Documented', 'What HarvestFlow CANNOT Claim Novel'],
        rows: [
          ['MP e-Uparjan', 'Registration, slot booking, procurement, payments', 'Slot booking, registration, digital receipts'],
          ['Telangana OPMS', 'Paddy procurement, mill tracking, tablet entry, SMS', 'SMS notifications, mobile data entry, payment tracking'],
          ['Chhattisgarh', 'Online tokens, Agristack e-KYC, ICCC monitoring, assisted tokens', 'Token booking, central dashboards, assisted access'],
          ['Himachal Pradesh', 'Registration, tokens, procurement, CFPP API sync', 'API exchange with central procurement systems']
        ]
      }
    },
    {
      id: 'sec-03-3',
      title: 'What Remains Unknown & Must Be Validated in the Pilot',
      evidenceType: 'PILOT HYPOTHESIS',
      markdown: `While existing state systems possess impressive capabilities, our research identified critical **potential coordination gaps**:
1. Do existing slot booking systems dynamically adjust available slots when a weighbridge fails mid-day, or are slots purely calendar-based?
2. Do existing token systems reflect the **live physical queue sequence** at the mandi gate, or are they merely static date-stamped tickets?
3. When operational disruptions occur (rain, storage congestion, staff absence), do existing systems automatically notify affected farmers and throttle incoming traffic?
4. How much duplicate data entry are centre operators currently forced to perform between state portals and physical registers?

> **These are pilot validation questions.** The team must validate the exact workflow of the selected pilot state before claiming that HarvestFlow solves an unaddressed problem.`,
      callout: {
        type: 'TIP',
        title: 'Jury Strategy',
        content: 'When judges ask “Doesn’t e-Uparjan already do this?”, respond: “Yes, e-Uparjan does an excellent job of farmer registration and slot scheduling. HarvestFlow focuses specifically on the physical operational layer: synchronizing dynamic centre capacity, live queue states, and real-time disruption handling that existing systems do not coordinate.”'
      }
    }
  ]
};
