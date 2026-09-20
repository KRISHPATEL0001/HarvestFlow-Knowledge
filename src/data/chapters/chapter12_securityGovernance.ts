import type { Chapter } from '../../types/content';

export const CHAPTER_12_SECURITY_GOVERNANCE: Chapter = {
  id: '12-security-and-governance',
  number: '12',
  title: 'Security & Governance — Data Minimization & Audits',
  shortTitle: 'Security & Governance',
  subtitle: 'Role-based access, the 5-question data test, encryption, and statutory audit trails',
  sourceSections: 'Section 18: Security and data governance',
  primaryEvidence: 'OFFICIAL',
  readingMinutes: 7,
  category: 'Governance & AI',
  sections: [
    {
      id: 'sec-12-1',
      title: 'Security Principles for Public Procurement Systems',
      evidenceType: 'OFFICIAL',
      markdown: `Agricultural procurement touches sensitive personal data (farmer names, contact numbers, landholding records, bank account details) and substantial public funds.

HarvestFlow enforces security at every layer without requiring bloated enterprise security software:
- **Role-Based Access Control (RBAC)**: Strict role boundaries (Farmer, Centre Operator, Supervising Officer, System Administrator).
- **Server-Side Authorization**: Every state-changing API request is validated server-side against session credentials, preventing client-side privilege escalation.
- **Privileged User Protection**: Supervising officer actions (overrides, manual reconciliations) require multi-factor authentication and explicit reason logging.
- **Data Encryption**: TLS 1.3 encryption in transit; AES-256 encryption at rest for sensitive PII and audit logs.
- **Rate Limiting**: Throttling on SMS triggers, booking queries, and token lookup endpoints to prevent enumeration and denial-of-service attacks.
- **Backup & Disaster Recovery**: Automated daily snapshots with quarterly restore testing to guarantee business continuity.`,
      callout: {
        type: 'RULE',
        title: 'Compliance Guideline',
        content: 'Follows GIGW 3.0 guidelines and CERT-In cybersecurity best practices for citizen-facing government digital assets.'
      }
    },
    {
      id: 'sec-12-2',
      title: 'The 5-Question Data Minimization Test',
      evidenceType: 'PROPOSED',
      markdown: `To prevent data hoarding and minimize privacy risks, HarvestFlow subjects every proposed data field to a mandatory **5-Question Test** before it is admitted into the database schema:

1. **Why is it needed?** Does this field directly improve appointment scheduling, queue management, or status transparency?
2. **Who owns it?** Is HarvestFlow the authoritative source, or is this field legally owned by an existing government agency?
3. **Who can see it?** What is the exact RBAC visibility scope (public, farmer-only, operator-only, officer-only)?
4. **How long is it retained?** When does this data expire, and what is the statutory archiving policy?
5. **Is it already available from an authoritative system?** If an existing government system already stores it, **do not duplicate it**—fetch it on demand via API.`,
      table: {
        headers: ['Field', 'Needed For?', 'Authoritative Owner', 'Retention Policy', 'Duplicated in HarvestFlow?'],
        rows: [
          ['Farmer Name & Phone', 'SMS notifications & check-in', 'Govt Registration Portal', 'Active procurement season + 3 yrs', 'Cached reference only'],
          ['Aadhaar Number', 'Statutory identity check', 'UIDAI / State e-KYC', 'Zero retention in HarvestFlow', 'NEVER STORED'],
          ['Bank Account / IFSC', 'Direct MSP payment credit', 'State Treasury / PFMS', 'Zero retention in HarvestFlow', 'NEVER STORED'],
          ['Booking Token Code', 'Visit reference & gate queue', 'HarvestFlow Engine', 'Procurement season + 1 yr audit', 'Authoritative Owner'],
          ['Arrival Timestamp', 'Queue sequencing & audit', 'HarvestFlow Engine', '7 years statutory audit', 'Authoritative Owner']
        ]
      }
    },
    {
      id: 'sec-12-3',
      title: 'Immutable Operational Audit Trail',
      evidenceType: 'PROPOSED',
      markdown: `Every operational action in HarvestFlow is logged in an append-only audit trail:
- Capacity adjustments (old value, new value, reason code, operator ID);
- Disruption declarations and closures;
- Farmer check-ins and stage progressions;
- Officer overrides and exception resolutions.

Audit logs cannot be updated or deleted, ensuring complete forensic traceability in the event of administrative disputes or vigilance inquiries.`,
      callout: {
        type: 'IMPORTANT',
        title: 'Audit Guarantee',
        content: '“Every manual change must have actor + timestamp + reason.” An operator or officer cannot change a capacity value or bypass a queue without leaving an indelible audit mark.'
      }
    }
  ]
};

export const CHAPTER_13_AI_ML_DECISION: Chapter = {
  id: '13-ai-ml-decision',
  number: '13',
  title: 'AI/ML Decision — Explicitly Removed',
  shortTitle: 'AI/ML Decision',
  subtitle: 'The engineering rationale for excluding AI/ML and choosing deterministic automation',
  sourceSections: 'Section 19: AI/ML decision — explicitly removed',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 8,
  category: 'Governance & AI',
  sections: [
    {
      id: 'sec-13-1',
      title: 'The Core Verdict: AI/ML Is NOT a HarvestFlow Feature',
      evidenceType: 'PROPOSED',
      markdown: `## AI/ML is NOT a HarvestFlow feature.

It is:
- **NOT** MVP;
- **NOT** a differentiator;
- **NOT** part of the core architecture;
- **NOT** something to add merely because the SIH theme says “Smart Automation”.

> **The project must be able to explain its entire core value without mentioning AI.**`,
      whyAccordionId: 'why-no-ai',
      callout: {
        type: 'RULE',
        title: 'Non-Negotiable Project Position',
        content: 'Smart Automation here means reliable, rule-based automation of a real operational workflow. No ML model. No AI prediction dashboard. No AI-powered procurement.'
      }
    },
    {
      id: 'sec-13-2',
      title: 'The Six Engineering Reasons Why AI Was Removed',
      evidenceType: 'PROPOSED',
      markdown: `During our deep research and architectural necessity review, we rigorously evaluated AI/ML and concluded it was inappropriate for SIH26032:

### 1. SIH26032 Is a Deterministic Operational Problem
The core problem statement demands: registration, slot booking, real-time queue management, SMS alerts, and payment visibility. These require **deterministic coordination**: calculating available quintals, sequencing vehicles in first-come-first-served order, and dispatching event notifications. Deterministic rules solve this with 100% precision.

### 2. The Hard Part Is Operational State, Not Prediction
The actual failure point in crop procurement is **stale operational state**—knowing if a weighbridge broke down 15 minutes ago, or if trucks failed to arrive. An AI model predicting future queues based on historical data cannot know that a weighbridge motor burned out this morning. Only real-time operator state capture solves this.

### 3. Sparse and Unpredictable Rural Mandi Data
Machine learning requires vast, clean, stationary training datasets. In rural procurement centres, data is sparse, highly seasonal (operating only 6–8 weeks a year), and dramatically distorted by weather, local strikes, and sudden policy shifts. Training an ML model on this data produces unreliable noise.

### 4. ML Does Not Solve Duplicate Data Entry
The primary human failure mode is operator burnout from duplicate data entry. Adding an AI dashboard does not reduce an operator's keystrokes. Streamlining the workflow to "One Action → Multiple Effects" does.

### 5. Opacity and Lack of Auditability Violates Government Standards
If an AI algorithm allocates slots or prioritizes queues, it acts as a black box. If Farmer A is given a preferred slot over Farmer B by an AI model, the administration cannot explain why, sparking farmer protests and accusations of bias. Government systems require 100% explainable, deterministic rules.

### 6. Unnecessary Operational and Infrastructure Overhead
Running ML inference pipelines requires dedicated Python servers (TensorFlow/PyTorch), GPU or heavy CPU compute, data drift monitoring, and ongoing model retraining. This adds fragile failure points without any demonstrated operational benefit.`,
      table: {
        headers: ['Evaluation Dimension', 'AI / ML Approach', 'HarvestFlow Deterministic Approach'],
        rows: [
          ['Queue Sequencing', 'Black-box algorithmic ranking', 'Transparent First-Checked-In, First-Served state machine'],
          ['Capacity Calculation', 'Predictive estimation model', 'Exact formula: Baseline + Operational Adjustment'],
          ['Disruption Response', 'Probabilistic rescheduling suggestions', 'Deterministic rule cascade: Throttling + SMS alert'],
          ['Auditability', 'Opaque neural weights', '100% explainable audit logs with actor & timestamp'],
          ['Infrastructure Cost', 'Heavy Python ML servers & GPU/CPU', 'Lightweight, ultra-fast relational database queries'],
          ['Farmer Trust', 'Suspicion of algorithmic bias', 'Complete clarity on arrival windows and queue numbers']
        ]
      }
    },
    {
      id: 'sec-13-3',
      title: 'The Six Explicit AI Exclusions',
      evidenceType: 'OUT OF SCOPE',
      markdown: `HarvestFlow explicitly prohibits the following six AI implementations:

1. **NO ML MODEL**: No predictive neural networks, regression models, or random forests.
2. **NO AI PREDICTION DASHBOARD**: No speculative graphs claiming to forecast next week's mandi arrivals.
3. **NO “AI-POWERED PROCUREMENT”**: No algorithmic interference with statutory intake workflows.
4. **NO AI ELIGIBILITY DECISION**: Eligibility is governed strictly by statutory government land records.
5. **NO AI QUEUE PRIORITIZATION**: Queue position is strictly governed by physical check-in sequence and authorized exception rules.
6. **NO AI PAYMENT DECISION**: Financial disbursement is strictly governed by state treasury approval.`,
      callout: {
        type: 'IMPORTANT',
        title: 'Status of Maya Chatbot in Prototype',
        content: 'If Maya exists in the current prototype codebase, it is treated strictly as a PROTOTYPE HELP/FAQ FEATURE ONLY, not as part of the HarvestFlow solution proposition or core architecture.'
      }
    }
  ]
};
