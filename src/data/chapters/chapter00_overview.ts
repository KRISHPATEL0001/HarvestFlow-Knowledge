import type { Chapter } from '../../types/content';

export const CHAPTER_00_OVERVIEW: Chapter = {
  id: '00-overview',
  number: '00',
  title: 'Executive Summary & System Overview',
  shortTitle: 'System Overview',
  subtitle: 'A high-level systems briefing on the HarvestFlow coordination model',
  sourceSections: 'Executive Decision (0) & Final HarvestFlow Definition (31)',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 4,
  category: 'Foundation',
  sections: [
    {
      id: 'sec-00-1',
      title: 'The Core HarvestFlow Definition',
      evidenceType: 'PROPOSED',
      markdown: `> **HarvestFlow is a government-compatible procurement coordination layer that connects approved farmer/transaction records with capacity-aware appointments, centre check-in, operational queue state, event-based notifications, disruption handling, and verified procurement/payment visibility — without replacing the government's authoritative procurement and payment systems.**

This internal knowledge website serves as the single source of truth, interactive explainer, and jury preparation guide for the HarvestFlow engineering team.`,
      callout: {
        type: 'RULE',
        title: 'Fundamental Purpose',
        content: 'This website explains the proposed HarvestFlow system. It does NOT perform real procurement operations, execute payments, or replace state procurement ERPs.'
      }
    },
    {
      id: 'sec-00-2',
      title: 'Project Identity & SIH26032 Mandate',
      evidenceType: 'OFFICIAL',
      markdown: `| Field | Specification |
|---|---|
| **Project Name** | HarvestFlow — Smart Crop Procurement & Queue Management |
| **SIH Problem Statement** | SIH26032 |
| **Team Name** | Digital Dynamos |
| **Organization** | Ministry of Consumer Affairs, Food & Public Distribution |
| **Department** | Department of Consumer Affairs (DoCA) |
| **Category / Theme** | Software / Smart Automation |
| **Revision Date** | 20 September 2026 (Revised after source audit and necessity review) |`,
      callout: {
        type: 'IMPORTANT',
        title: 'Official Problem Statement',
        content: '“Farmers often face long waiting times, lack of information regarding procurement schedules, and uncertainty about procurement status.”'
      }
    },
    {
      id: 'sec-00-3',
      title: 'The Core Value & Core Automation Formulas',
      evidenceType: 'PROPOSED',
      markdown: `HarvestFlow is structured around three non-negotiable operational equations:

### 1. Core Value Formula
\`\`\`text
RIGHT FARMER → RIGHT CENTRE → RIGHT TIME → RIGHT QUEUE → COMPLETE STATUS
\`\`\`

### 2. Core Automation Loop
\`\`\`text
CAPACITY → BOOKING → CHECK-IN → QUEUE → EVENT → NOTIFICATION → EXCEPTION
\`\`\`

### 3. Core Government Adoption Principle
\`\`\`text
INTEGRATE → MINIMIZE WORK → AUDIT → PILOT → MEASURE → SCALE
\`\`\`

### 4. The Final Design Filter
> **“If a feature is not required to make this journey more predictable, it does not belong in HarvestFlow.”**`,
      diagramId: 'core-loop'
    }
  ]
};

export const CHAPTER_01_STARTHERE: Chapter = {
  id: '01-start-here',
  number: '01',
  title: 'Start Here — SIH26032 & Core Definitions',
  shortTitle: 'Start Here',
  subtitle: 'Understanding the problem statement in simple language and defining smart automation',
  sourceSections: 'Sections 0, 1 & 31',
  primaryEvidence: 'OFFICIAL',
  readingMinutes: 5,
  category: 'Foundation',
  sections: [
    {
      id: 'sec-01-1',
      title: 'SIH26032 in Simple Language',
      evidenceType: 'OFFICIAL',
      markdown: `When harvest season arrives across rural India, millions of farmers transport their paddy, wheat, or pulses to government-designated procurement centres (mandis / purchase centres) to receive the statutory Minimum Support Price (MSP).

Under the current setup, farmers frequently face:
- **Long, unpredictable waiting times** stretching from several hours to multiple days outside the mandi gate;
- **Zero visibility into daily procurement schedules**, leading to sudden gate closures or overwhelmed weighbridges;
- **Severe uncertainty regarding payment disbursements**, leaving farmers anxiously checking bank branches.

The official Ministry mandate expects five specific deliverables:
1. Farmer registration and slot booking;
2. Real-time queue management;
3. SMS/app notifications;
4. Procurement and payment status tracking;
5. Reduction of congestion and waiting time at procurement centres.`,
      callout: {
        type: 'RULE',
        title: 'Scope Boundary',
        content: 'These five requirements form the hard boundary of HarvestFlow. Anything that does not directly improve this specific journey is not part of the core solution.'
      }
    },
    {
      id: 'sec-01-2',
      title: 'The One-Minute Explanation',
      evidenceType: 'PROPOSED',
      markdown: `**What is HarvestFlow?**
HarvestFlow is a lightweight software coordination layer that acts like an air traffic controller for crop procurement centres.

- It does **not** replace the government’s existing farmer databases, land records, or payment systems.
- Instead, it checks how much grain a centre can actually process today (**usable capacity**), allows eligible farmers to book a confirmed arrival window (**slot booking**), issues a simple visit code (**universal token**), tracks their physical arrival at the gate (**farmer check-in**), sequences the live line (**operational queue**), dispatches instant SMS alerts during breakdowns (**disruption handling**), and reflects verified purchase and bank credit milestones (**payment status visibility**).`,
      whyAccordionId: 'why-not-replace-gov-systems'
    },
    {
      id: 'sec-01-3',
      title: 'What “Smart Automation” Means (and Does NOT Mean)',
      evidenceType: 'PROPOSED',
      markdown: `The hackathon theme is **Smart Automation**. In HarvestFlow, smart automation has a precise engineering definition:

> **Smart Automation means reliable, rule-based automation of a real operational workflow.**

It does **NOT** mean:
- Shoehorning complex AI/ML models into a workflow that requires 100% deterministic rules;
- Building predictive black-box dashboards that guess queue wait times;
- Claiming an AI chatbot is the core differentiator.

The difficult problem in crop procurement is **trustworthy operational state coordination**. Deterministic rules provide total auditability, zero hallucinations, and immediate legal compliance with government standards.`,
      whyAccordionId: 'why-no-ai',
      callout: {
        type: 'IMPORTANT',
        title: 'AI/ML Removal Decision',
        content: 'AI/ML is explicitly removed from HarvestFlow’s core, MVP, differentiator, and architecture. See Chapter 13 for the complete decision rationale.'
      }
    }
  ]
};
