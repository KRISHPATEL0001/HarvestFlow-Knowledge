import type { Chapter } from '../../types/content';

export const CHAPTER_10_GOV_INTEGRATION: Chapter = {
  id: '10-government-integration',
  number: '10',
  title: 'Government Integration — Principles & Fallbacks',
  shortTitle: 'Govt Integration',
  subtitle: 'API Setu interoperability, zero direct database access, and resilient fallback paths',
  sourceSections: 'Section 16: Integration',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 7,
  category: 'Core Architecture',
  sections: [
    {
      id: 'sec-10-1',
      title: 'Architectural Integration Flow',
      evidenceType: 'PROPOSED',
      markdown: `HarvestFlow adheres to strict government enterprise architecture guidelines:

\`\`\`text
HarvestFlow  ──(Approved REST / JSON API)──►  Government System (e-Uparjan / OPMS / CFPP)
\`\`\`

HarvestFlow **never assumes direct database access to any government system**.

### Why Direct Database Access Is Forbidden:
1. **Security & Governance**: Government IT policies (NIC, MeitY) strictly prohibit external applications from executing direct SQL queries against state databases.
2. **Data Integrity**: Direct SQL inserts bypass statutory business logic, schema triggers, database constraints, and audit logging.
3. **Change Fragility**: Direct DB couplings break the instant a state IT team alters an internal column name or table schema.
4. **Legal Compliance**: Bypassing authorized API gateways violates state cybersecurity mandates and disqualifies software from government procurement.`,
      whyAccordionId: 'why-no-direct-database-access'
    },
    {
      id: 'sec-10-2',
      title: 'The Role of API Setu',
      evidenceType: 'OFFICIAL',
      markdown: `**API Setu (https://www.apisetu.gov.in/)** is the Government of India’s national open API platform, operated by MeitY and NIC.

It provides:
- A standardized API catalog for discovering central and state government services;
- Secure, token-based authentication (OAuth2 / JWT);
- Citizen consent management frameworks;
- Standardized data schemas for agricultural and civil supplies entities.

### Strict Claim Discipline on API Setu:
> **Do NOT claim an integration exists until the relevant API is actually available, tested, and authorized.**

In our hackathon prototype and pilot proposal:
- We reference API Setu as the **target interoperability platform**;
- We do **NOT** fabricate fake API endpoints and claim they are live government servers;
- We follow official API Setu request/response specifications (https://docs.apisetu.gov.in/) for our simulated contracts.`,
      callout: {
        type: 'RULE',
        title: 'Claim Discipline Mandate',
        content: 'Never present mock API data as live government feeds. Always clearly label simulated payloads as “DEMO / ILLUSTRATIVE”.'
      }
    },
    {
      id: 'sec-10-3',
      title: 'Fallback Mechanisms When No API Exists',
      evidenceType: 'PROPOSED',
      markdown: `In reality, many district procurement operations or smaller state agencies do not yet have active REST APIs. HarvestFlow is designed with a **3-tier graceful degradation strategy**:

### Tier 1: Approved REST API (Preferred)
Bidirectional automated synchronization via API Setu or state API gateway.

### Tier 2: Approved Batch Data Exchange (Fallback)
If no live API exists, HarvestFlow supports secure, authorized batch file exchange (e.g. daily encrypted CSV/Excel roster of approved farmers and land quotas imported at the start of the procurement season).

### Tier 3: Coordination-Only Mode (Zero Integration Fallback)
If neither API nor file exchange is permitted, HarvestFlow operates strictly in **independent coordination mode**:
- Farmer enters their official government registration number;
- HarvestFlow coordinates the physical arrival, usable capacity, gate check-in, and yard queue;
- Authoritative procurement recording and payment disbursement remain entirely within the state's existing portal.

> **Result: HarvestFlow delivers immediate operational value even in states with zero API infrastructure.**`,
      table: {
        headers: ['Integration Tier', 'Government Prerequisite', 'Data Exchange Method', 'HarvestFlow Operational Scope'],
        rows: [
          ['Tier 1: Live API', 'State REST API Gateway', 'Real-time JSON via API Setu', 'Full bidirectional sync'],
          ['Tier 2: Batch Exchange', 'Encrypted file drop authorization', 'Daily CSV / SFTP batch upload', 'Daily roster verification'],
          ['Tier 3: Coordination Only', 'None required', 'Manual reference entry', 'Physical yard & queue coordination']
        ]
      }
    }
  ]
};

export const CHAPTER_11_ARCHITECTURE: Chapter = {
  id: '11-architecture',
  number: '11',
  title: 'Architecture — Keep It Simple & Reliable',
  shortTitle: 'Architecture',
  subtitle: 'Logical system architecture, modular design, and why complex tech is deliberately excluded',
  sourceSections: 'Section 17: Architecture — keep it simple',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 8,
  category: 'Core Architecture',
  sections: [
    {
      id: 'sec-11-1',
      title: 'Logical System Architecture',
      evidenceType: 'PROPOSED',
      markdown: `HarvestFlow is structured as a clean, modular coordination layer positioned between existing government authorities and on-ground field users:

\`\`\`text
                  Existing Government Systems
                 (e-Uparjan, OPMS, CFPP, PFMS)
                               │
                               │ Approved REST API / API Setu
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                         HarvestFlow                         │
│                                                             │
│  ┌──────────────────────┐        ┌───────────────────────┐  │
│  │  Booking & Capacity  │        │   Check-in & Queue    │  │
│  │  - Baseline Intake   │        │   - Token Check-in    │  │
│  │  - Usable Throttling │        │   - State Machine     │  │
│  └──────────┬───────────┘        └───────────┬───────────┘  │
│             │                                │              │
│  ┌──────────▼───────────┐        ┌───────────▼───────────┐  │
│  │    Notifications     │        │  Disruption Handling  │  │
│  │    - SMS Gateway     │        │  - Capacity Reductions│  │
│  │    - Multi-language  │        │  - Reschedule Cascade │  │
│  └──────────┬───────────┘        └───────────┬───────────┘  │
│             │                                │              │
│  ┌──────────▼───────────┐        ┌───────────▼───────────┐  │
│  │    Status Visibility │        │  Exceptions & Audit   │  │
│  │    - Verified Payout │        │  - Immutable Event Log│  │
│  │    - Mandi Receipts  │        │  - Officer Escalations│  │
│  └──────────────────────┘        └───────────────────────┘  │
└──────────────────────────────┬──────────────────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
      FARMER CHANNELS                      CENTRE OPERATOR
   SMS / Assisted / Web                   Terminal / Tablet
            │                                     │
            └──────────────────┬──────────────────┘
                               ▼
                      SUPERVISING OFFICER
                    District Command & Audit
\`\`\``,
      diagramId: 'architecture-diagram'
    },
    {
      id: 'sec-11-2',
      title: 'The Technology Principle: Simplicity Over Theatre',
      evidenceType: 'PROPOSED',
      markdown: `For pilot deployments and government adoption, HarvestFlow strictly follows the **Simplicity Over Resume-Driven Development** principle:

> **Prefer a simple, maintainable web application with a relational database and a standard REST API layer.**

A single optimized PostgreSQL or SQLite instance handles **thousands of appointments per minute** with ACID-compliant locking against concurrent booking collisions. Introducing distributed microservices for a regional mandi deployment creates operational debt without solving any user problem.`,
      whyAccordionId: 'why-simple-architecture'
    },
    {
      id: 'sec-11-3',
      title: 'Deliberately Unnecessary Technologies',
      evidenceType: 'OUT OF SCOPE',
      markdown: `The following technologies are **deliberately excluded** from the core architecture because they are unnecessary to solve SIH26032:

| Technology | Why It Is Promoted in Hackathons | Why HarvestFlow Deliberately Excludes It |
|---|---|---|
| **Apache Kafka / RabbitMQ** | Distributed pub/sub message streaming | Overkill for regional mandi event rates (10–50 events/hour/centre). Standard PostgreSQL transactional queues or Redis suffice. |
| **Kubernetes (K8s) Clusters** | Container orchestration at massive scale | Immense maintenance overhead for state IT departments; simple containerized single-node or PaaS instances are far easier to operate. |
| **Microservices Mesh (Istio)** | Decoupling hundreds of independent teams | A single team or small department benefits vastly more from a clean, modular monolith with zero network latency. |
| **Python ML Inference Microservices** | Running predictive models in production | ML is explicitly excluded from the solution; adding a Python inference server wastes memory and compute. |
| **Distributed Distributed Tracing (OTel)** | Debugging complex multi-hop microservices | A single structured application log with correlation IDs is far more effective and less resource-intensive. |`,
      callout: {
        type: 'RULE',
        title: 'Core Architecture Mandate',
        content: '“A technology needs an operational reason, an owner, and a measured benefit before it enters HarvestFlow.” Never add infrastructure merely to make an architecture slide look complex.'
      }
    }
  ]
};
