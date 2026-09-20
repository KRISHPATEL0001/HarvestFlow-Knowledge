# HarvestFlow — Lean Deep-Research Source of Truth

**Project:** HarvestFlow — Smart Crop Procurement & Queue Management  
**SIH Problem Statement:** SIH26032  
**Team:** Digital Dynamos  
**Revision:** 20 September 2026  
**Status:** Revised after source audit and necessity review

---

## 0. Executive decision

The previous knowledge base was **research-rich but too broad**. It contained useful operational reasoning, but also repeated the same ideas, expanded optional technology too far, and kept AI/ML as a visible section even after concluding it was unnecessary.

This revision is the **lean source of truth**.

### Final position

> **HarvestFlow is a government-compatible procurement coordination layer that connects approved farmer/transaction records with capacity-aware appointments, centre check-in, operational queue state, event-based notifications, disruption handling, and verified procurement/payment visibility — without replacing the government's authoritative procurement and payment systems.**

The project does **not** need AI/ML to be unique, and it should not add AI merely because the SIH theme says Smart Automation.

**Smart Automation here means reliable rule-based automation of a real operational workflow.**

---

# 1. Scope lock — SIH26032

### Official problem statement

**“Farmers often face long waiting times, lack of information regarding procurement schedules, and uncertainty about procurement status.”**

Expected solution:

1. Farmer registration and slot booking.
2. Real-time queue management.
3. SMS/app notifications.
4. Procurement and payment status tracking.
5. Reduction of congestion and waiting time at procurement centres.

Organization: Ministry of Consumer Affairs, Food & Public Distribution  
Department: Department of Consumer Affairs (DoCA)  
Category: Software  
Theme: Smart Automation.

These requirements are the hard boundary. Anything that does not directly improve this journey is not part of the core solution.

---

# 2. What the problem really is

The visible symptoms are:

- long waiting;
- uncertain procurement schedules;
- unclear queue position;
- repeated journeys;
- uncertain procurement status;
- uncertain payment status.

The deeper problem is:

> **The farmer's planned arrival is not reliably coordinated with the centre's actual operational state.**

A useful systems view is:

**PLAN → ARRIVE → QUEUE → PROCESS → COMPLETE → TRACK**

The failure can happen at every transition.

### Root causes

#### A. Arrival mismatch
Farmers may arrive without dependable information about when the centre can actually receive them.

#### B. Capacity mismatch
Nominal capacity can differ from usable capacity because of staffing, equipment, operating hours, storage, transport or other local constraints.

#### C. Queue mismatch
A booking is not a check-in, and a check-in is not the same as being processed.

#### D. Information mismatch
Different systems may own registration, procurement and payment information while the farmer experiences them as one journey.

#### E. Operator workload
Centre staff are already busy. A system that requires duplicate data entry will become stale.

#### F. Disruption mismatch
Equipment failure, closure, connectivity problems or other operational changes can invalidate a previously valid schedule.

#### G. Payment visibility mismatch
Procurement completion and payment completion are different events.

These are **research hypotheses to validate at the selected pilot centre**, not universal claims about every centre.

---

# 3. Existing systems — the most important research finding

HarvestFlow must not pretend that government has no digital procurement infrastructure.

Current official/publicly documented systems already provide substantial pieces of the journey.

### Madhya Pradesh — e-Uparjan

Public documentation describes:

- farmer registration;
- slot booking;
- procurement;
- transport;
- storage;
- payment;
- receipts.

Source: https://mpeuparjan.nic.in/

### Telangana — OPMS

The Centre for Good Governance describes a system that captures:

- paddy procurement;
- transport to mills;
- farmer payments;
- farmer/miller information at procurement centres;
- dashboards/reports;
- SMS;
- centre-side tablet-based data collection.

Source: https://www.cgg.gov.in/it_project/online-procurement-management-system-opms/

### Chhattisgarh

Government material for KMS 2025–26 describes:

- online token booking;
- e-KYC/Agristack-related registration;
- biometric verification;
- an Integrated Command and Control Centre;
- monitoring of procurement, storage and transport;
- assisted/offline token arrangements through societies.

Source: https://jansampark.cg.gov.in/Janman/EN_OCT2025/JanmanOct2025_eng.pdf

### Himachal Pradesh

The public procurement portal describes:

- farmer registration;
- token generation;
- procurement entry;
- receipts;
- transfer of approved farmer data to CFPP through API;
- payment data exchange.

Source: https://hpappp.hp.gov.in/Citizen/SoftwareInterfaces.aspx

### Research conclusion

These examples prove that:

> **The problem is not “government has no software.”**

They also mean HarvestFlow must **not** sell registration, token generation, procurement entry or payment tracking as if those capabilities alone are novel.

The defensible proposition is:

> **HarvestFlow coordinates the farmer's appointment and centre-operational state across existing systems, rather than replacing those systems.**

### Important qualification

The research does **not** prove that every existing state system lacks a capacity-aware live coordination layer.

It only establishes that the publicly documented systems reviewed provide different combinations of registration, token/slot booking, procurement, payment, transport, monitoring and notifications.

Therefore:

**Do not say “no existing system does this.”**

Say:

> “Our research identified a need to validate whether the selected state's existing system already synchronizes appointment capacity, live queue state and operational disruptions. HarvestFlow is designed to fill that coordination gap if it exists.”

That is a much stronger and safer claim.

---

# 4. What HarvestFlow should actually add

HarvestFlow should add only the missing coordination capabilities that the pilot confirms are needed.

## Core coordination layer

### 4.1 Capacity-aware booking

A farmer should not receive a slot simply because a calendar has an empty time cell.

The slot should be based on the **currently usable intake capacity configured for that centre**.

However, do not attempt to automatically calculate physical capacity from every machine, worker, truck and warehouse in the MVP.

Use two levels:

**Baseline capacity**
- configured by an authorized officer/department;
- based on the actual local procurement process.

**Operational adjustment**
- centre operator can reduce today's usable capacity when an approved operational problem occurs.

Example:

`Normal usable capacity: 400 q`

`Equipment/storage/staff issue: -100 q`

`Current usable capacity: 300 q`

Every adjustment records:
- actor;
- time;
- reason;
- old value;
- new value.

The 20% reserve previously used in examples is **not a government rule**. Do not hard-code it. Make reserve policy configurable and validate it locally.

---

# 5. Slot, token, check-in and queue are different

This distinction is central.

| Concept | Answers |
|---|---|
| Slot | When should I come? |
| Booking | Is my arrival window confirmed? |
| Token | What is my visit reference? |
| Check-in | Have I actually arrived? |
| Queue | Where am I in the current operational process? |
| Procurement status | What happened to my crop? |
| Payment status | What happened after procurement financially? |

Do not merge these states.

### Token

Use the token as the universal farmer-facing visit reference.

QR may be used as a convenience, but **QR is not the core feature**.

### Check-in

Call it:

> **Farmer Check-in**

Do not call check-in “identity verification.”

Identity should come from whatever authorized government process the pilot already uses.

---

# 6. Queue design

The official requirement says real-time queue management.

The MVP therefore needs:

- checked-in farmers;
- queue order;
- current processing state;
- stage/status;
- farmer's position where meaningful;
- last update time.

A queue can be represented as a state machine:

`BOOKED → CHECKED_IN → WAITING → PROCESSING → COMPLETED`

Additional states such as quality pending or weighing pending should only be introduced if the selected pilot process actually uses separate operational stages.

### Waiting-time estimate

This is **optional**, not the core of queue management.

If used, show an estimate/range only when enough recent operational data exists.

Example:

> Approximately 30–50 minutes  
> Last updated 11:20 AM

If not enough data exists:

> Wait estimate unavailable — queue information is being updated.

Never promise an exact waiting time.

---

# 7. Notifications

Notifications are core because SMS/app notification is explicitly in SIH26032.

Use **event-based notifications**, not unnecessary reminders.

Important events:

### Booking
- booking confirmed;
- booking changed;
- booking cancelled.

### Centre
- centre closed;
- capacity reduced;
- schedule changed;
- disruption resolved.

### Queue
- check-in confirmed;
- turn approaching;
- queue paused/resumed.

### Procurement
- quality result recorded;
- accepted/rejected;
- procurement completed.

### Payment
- payment submitted;
- payment status changed;
- payment failed/returned where supported;
- credit confirmed by an authoritative source.

### Channel priority

**SMS is essential.**

A smartphone app is useful but must not be mandatory.

Printed confirmation/token and assisted access should remain possible.

Do not add IVR unless the selected government pilot explicitly requires it.

---

# 8. Operator workflow — the biggest adoption test

The operator is the critical human in the system.

### Non-negotiable rule

> **Never ask an operator to re-enter information that an authoritative government system already knows.**

HarvestFlow should collect only the operational events it needs.

### Minimum operator actions

1. Open/close centre.
2. Adjust today's capacity when required.
3. Check farmer in using token.
4. Record required operational stage/event.
5. Declare disruption.
6. Resume normal operation.
7. Resolve exceptions where authorized.

One action should trigger multiple digital effects.

Example:

`Check-in token`

→ arrival timestamp  
→ queue entry  
→ farmer status update  
→ officer visibility  
→ audit event.

### If the operator does not update

This is a critical failure case.

The system must:

- show the last update time;
- mark data as stale after a configured threshold;
- avoid presenting stale information as real-time;
- surface stale centres to the supervising officer;
- allow assisted/manual escalation.

Do not invent live status when no one has updated the system.

---

# 9. Source of truth

Before coding, define ownership.

| Information | Authority |
|---|---|
| Farmer registration | Existing authorized government system |
| Eligibility | Government/agency rules |
| Procurement policy | Department/agency |
| Booking | HarvestFlow |
| Check-in | HarvestFlow/approved source |
| Live queue | HarvestFlow operational layer |
| Capacity signal | Authorized centre/department workflow |
| Quality result | Authorized procurement process |
| Accepted weight | Authoritative procurement system |
| Purchase record | Existing procurement system |
| Payment instruction | Authorized payment/procurement system |
| Bank credit | Authoritative payment/bank record |
| Notification delivery | HarvestFlow/approved notification service |
| HarvestFlow audit | HarvestFlow |

### Core principle

> **HarvestFlow should own coordination, not government procurement or financial truth.**

If two systems disagree:

- do not silently overwrite;
- record the conflict;
- identify both sources;
- identify timestamps;
- send it to an authorized resolver.

---

# 10. Payment

Payment tracking is required.

But HarvestFlow should **not claim that it makes government payment faster**.

It improves:

- visibility;
- status clarity;
- identification of exceptions;
- responsibility/escalation;
- synchronization with the authoritative payment system.

Lifecycle should be configurable, for example:

`Purchase recorded → Payment submitted → Credit confirmed`

Optional failure/return states may be added if the pilot workflow supports them.

Only show:

> **Payment credited**

when the authoritative source confirms it.

Otherwise show:

> **Payment submitted / processing**

with the last verification time.

---

# 11. Quality and rejection

Quality should be a proper status branch, not an error popup.

Minimum conceptual states:

`Quality pending → Accepted / Rejected`

If the agency permits further action, additional states can exist:

`Rejected → Retest/Dispute/Corrective action`

The system should show:

- result;
- reason/category where permitted;
- timestamp;
- responsible actor;
- next permitted action.

Do not invent quality rules.

---

# 12. Disruption handling

This is one of HarvestFlow's strongest practical features.

Example:

**Weighing equipment unavailable**

→ operator declares disruption  
→ usable capacity reduced  
→ affected bookings identified  
→ new bookings restricted if configured  
→ affected farmers notified  
→ officer sees exception  
→ centre resumes  
→ capacity restored according to authorized rule.

Other examples:

- centre closure;
- staff shortage;
- storage constraint;
- transport constraint;
- connectivity problem.

The exact response must be configurable.

### Non-negotiable

> A stale capacity value is worse than no capacity value.

---

# 13. Transport and storage

Transport and storage are **not separate HarvestFlow products**.

They matter because they can affect whether a centre can continue receiving crop.

Therefore they should be treated as:

> **capacity/disruption inputs**

not as a new logistics-management system.

Do not build:

- fleet management;
- route optimization;
- warehouse management;
- mill management;

unless the selected government workflow explicitly makes one of these necessary for the SIH26032 coordination problem.

---

# 14. Assisted access and inclusion

A farmer should not be forced into:

**English + smartphone + app + continuous internet.**

Core access channels:

- responsive web/app;
- SMS;
- printed token/confirmation;
- authorized assisted booking;
- centre-assisted access.

Local language support is an operational requirement.

GIGW 3.0 covers usability, accessibility, security and lifecycle expectations for government websites/apps and includes WCAG 2.1 Level AA guidance. citeturn0search0turn0search3

---

# 15. Offline operation

Do **not** promise full offline farmer booking.

Booking needs current capacity to avoid conflicts.

If the pilot requires centre-side connectivity fallback, support only a controlled contingency such as:

- token/check-in event capture;
- timestamp;
- operator ID;
- later synchronization;
- duplicate/conflict handling.

Do not allow offline mode to independently become the authoritative government procurement/payment system.

---

# 16. Integration

HarvestFlow should never assume direct database access to a government system.

Preferred:

`HarvestFlow → approved API/integration → Government system`

API Setu is an official government API platform intended for API discovery, publishing, consumption and secure interoperability. citeturn0search2turn0search13

But:

> **Do not claim an integration exists until the relevant API is actually available and authorized.**

If no API exists:

1. approved file/data exchange may be used if permitted;
2. otherwise HarvestFlow operates only its coordination functions;
3. authoritative procurement/payment data remains in the government system.

---

# 17. Architecture — keep it simple

Do not over-engineer the hackathon solution.

### Logical architecture

```text
Existing Government Systems
        │
        │ approved integration
        ▼
┌──────────────────────────────┐
│         HarvestFlow          │
│                              │
│ Booking & Capacity           │
│ Check-in & Queue             │
│ Notifications                │
│ Disruption Handling          │
│ Status Visibility            │
│ Exceptions & Audit           │
└──────────────┬───────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
    Farmer           Centre
   SMS/Web          Operator
       │                │
       └───────┬────────┘
               ▼
       Supervising Officer
```

### Technology principle

For the pilot, prefer a **simple maintainable web application with a relational database and normal API layer**.

Specific choices such as:

- Kafka;
- RabbitMQ;
- Valkey/Redis;
- Kubernetes;
- microservices;
- Python ML services;
- OpenTelemetry;

are **not required to prove the SIH26032 solution**.

Introduce them only if measured scale or deployment constraints justify them.

---

# 18. Security and data governance

Security is necessary, but do not turn the knowledge base into a catalogue of every enterprise security product.

Minimum principles:

- role-based access;
- server-side authorization;
- privileged-user protection;
- secure sessions;
- encryption in transit;
- appropriate encryption at rest;
- rate limiting;
- audit logs;
- secure secrets;
- backups;
- restore testing;
- vulnerability/security testing.

For every data field ask:

1. Why is it needed?
2. Who owns it?
3. Who can see it?
4. How long is it retained?
5. Is it already available from an authoritative system?

GIGW 3.0 includes government guidance on cybersecurity, accessibility and lifecycle management. citeturn0search0turn0search8

---

# 19. AI/ML decision — explicitly removed

## AI/ML is NOT a HarvestFlow feature.

Not MVP.

Not a differentiator.

Not part of the core architecture.

Not something to add just because the theme is Smart Automation.

### Why?

The SIH problem can be solved by deterministic operational automation.

The difficult part is:

- obtaining trustworthy operational state;
- coordinating bookings;
- preventing overbooking;
- maintaining queue state;
- notifying farmers;
- handling disruptions;
- showing verified status.

Adding ML does not solve those foundational problems.

Centre-specific data may also be sparse and highly variable.

### Therefore

**No ML model.**

**No AI prediction dashboard.**

**No “AI-powered procurement.”**

**No AI eligibility decision.**

**No AI queue prioritization.**

**No AI payment decision.**

If Maya exists in the current prototype, treat it as a **prototype help/FAQ feature only**, not as part of the HarvestFlow solution proposition.

The project should be able to explain its entire core value without mentioning AI.

---

# 20. Other things deliberately excluded

These are not merely “future features”; they are excluded unless new evidence creates a real requirement.

- blockchain;
- facial recognition;
- autonomous procurement decisions;
- autonomous eligibility decisions;
- direct bank/payment execution;
- replacement of the procurement ERP;
- fleet-management system;
- warehouse-management system;
- national forecasting;
- crop-disease prediction;
- market-price prediction;
- unnecessary IoT;
- unnecessary biometric infrastructure;
- full offline farmer booking;
- nationwide deployment claim;
- complex microservice architecture solely for presentation;
- AI chatbot as a core differentiator.

### Rule

> **A feature needs a problem, an owner, a data source, an operational workflow and a measurable benefit before it enters HarvestFlow.**

---

# 21. What is actually unique/valuable

Do not claim that HarvestFlow invented:

- online registration;
- digital tokens;
- slot booking;
- SMS;
- procurement recording;
- payment tracking.

Existing government systems already demonstrate many of these capabilities.

The value proposition is the **coordination loop**:

**CURRENT CAPACITY → SLOT → ARRIVAL → CHECK-IN → QUEUE → OPERATIONAL EVENT → CAPACITY UPDATE → NOTIFICATION → EXCEPTION**

That loop connects the farmer-facing schedule to what is actually happening at the centre.

Whether the target state's existing system already performs all or part of this loop is a **pilot validation question**.

---

# 22. MVP — only what is needed

## Farmer

**Must have:**
- registration/reference lookup;
- eligible centre;
- slot booking;
- booking confirmation;
- token;
- check-in/queue status;
- procurement status;
- payment status;
- SMS simulation.

## Centre

**Must have:**
- today's bookings;
- centre open/closed;
- capacity adjustment;
- token check-in;
- queue;
- required stage/status update;
- disruption declaration.

## Officer

**Must have:**
- centre overview;
- stale-status/overload exceptions;
- disruption visibility;
- delayed-stage exceptions;
- payment-status exceptions;
- audit trail.

## Core

**Must have:**
- capacity-aware booking;
- concurrent booking protection;
- queue state machine;
- event notifications;
- audit events.

## Optional only if time permits

- printable token;
- QR;
- assisted booking;
- multilingual UI;
- controlled centre-side offline contingency;
- receipt.

---

# 23. What should NOT be in the SIH demo

Do not spend hackathon time proving:

- ML;
- AI prediction;
- blockchain;
- Kubernetes;
- Kafka;
- advanced forecasting;
- direct bank integration;
- nationwide scaling;
- facial recognition;
- a new government ERP.

The demo should prove one complete operational journey.

---

# 24. Ideal demonstration

Show one farmer.

### Step 1 — Booking

Farmer enters approved reference + crop + quantity.

System shows eligible centre and available slot.

### Step 2 — Confirmation

Farmer receives:

- centre;
- date;
- time;
- token.

### Step 3 — Centre disruption

Operator reduces capacity because of an operational problem.

### Step 4 — Automatic response

HarvestFlow:

- protects remaining capacity;
- identifies affected bookings;
- sends notification;
- shows officer exception.

### Step 5 — Farmer arrives

Token is checked in.

### Step 6 — Queue

Farmer sees:

- checked-in;
- queue position/status;
- last update.

### Step 7 — Procurement

Centre records the authorized stage.

### Step 8 — Payment

HarvestFlow displays the verified payment status from the authoritative source/simulation.

That demonstrates the complete SIH26032 journey without unnecessary technology theatre.

---

# 25. Government adoption strategy

Do not propose nationwide deployment first.

### Phase 0 — Discovery

One agency, one crop, one district, ideally one or two centres.

Document:

- actual workflow;
- existing software;
- data owners;
- operator actions;
- token process;
- capacity process;
- quality process;
- payment process;
- connectivity;
- devices;
- APIs.

### Phase 1 — Shadow mode

Observe and compare the proposed coordination workflow without becoming authoritative.

### Phase 2 — Assisted pilot

Introduce:

- appointment coordination;
- queue visibility;
- notifications;
- exception monitoring.

### Phase 3 — Approved integration

Connect authoritative systems where APIs/data exchange are approved.

### Phase 4 — Scale

Only after measured pilot results justify it.

---

# 26. What must be measured

Do not claim “waiting time reduced by X%” without a pilot.

### Farmer

- total visit time;
- gate-to-exit time;
- repeat journeys;
- missed slots;
- booking delay;
- notification delivery;
- status clarity.

### Centre

- arrivals/hour;
- processing throughput;
- queue depth;
- overload events;
- stale-status frequency;
- operator actions per farmer;
- data-entry time;
- disruption response time.

### Government

- capacity utilization;
- overloaded centres;
- exception resolution;
- payment-status visibility latency;
- conflicting/duplicate records;
- audit completeness.

### Inclusion

- assisted bookings;
- SMS-only usage;
- failed digital interactions;
- language usage.

---

# 27. The most important research limitation

The current research is sufficient for:

- understanding SIH26032;
- defining the root problem;
- designing the conceptual solution;
- challenging unnecessary features;
- comparing existing systems;
- defining a realistic MVP;
- explaining government adoption.

### No more broad/generic research is necessary right now.

But one category of research **is still mandatory before claiming the solution is deployment-ready**:

> **Pilot-specific official evidence.**

Once the team chooses the target state/crop/agency, obtain that authority's:

- procurement SOP;
- token/slot rules;
- eligibility rules;
- centre workflow;
- existing software/API documentation;
- quality rules;
- payment workflow;
- data ownership;
- operator process;
- local-language requirements.

This is not “more research for the sake of research.” It is **validation of the exact environment in which HarvestFlow would operate.**

---

# 28. Evidence register

### Official/current system evidence

- MP e-Uparjan — registration, slot booking, procurement, transport, storage, payment.
- Telangana OPMS — procurement, transport, payment, centre-side digital capture, SMS.
- Chhattisgarh — online tokens and command/control monitoring.
- HP procurement portal — registration, tokens, procurement, CFPP/API exchange.
- GIGW 3.0 — government web/app usability, accessibility, security and lifecycle.
- API Setu — government API interoperability.

### Government policy/review evidence

- DFPD/PIB procurement-centre infrastructure and timely-payment review, 20 Feb 2026.
- DFPD/PIB procurement/storage/stock-movement review, 1 Sep 2026.
- West Bengal procurement guidelines covering operational procurement procedures.

### Research evidence

- Kerala farmer procurement constraints study.
- Telangana decentralized procurement ground-level study.
- procurement/storage/handling constraints research.
- West Bengal procurement operations research.
- West Bengal decentralized procurement research.

These sources are enough for the **generic analytical foundation**. They should not be treated as proof of the exact workflow in an unselected state.

---

# 29. Evidence rules

Every statement must be classified as one of:

**OFFICIAL** — official government source.  
**RESEARCH** — academic/institutional evidence.  
**FIELD REPORT** — documented local event/condition.  
**CURRENT PROTOTYPE** — actually implemented.  
**PROPOSED** — design decision.  
**PILOT HYPOTHESIS** — requires validation.  
**ILLUSTRATIVE** — example only.  
**OUT OF SCOPE** — deliberately excluded.

Never turn:

`PROPOSED → CURRENT`

or:

`ILLUSTRATIVE → FACT`

or:

`ONE STATE'S WORKFLOW → INDIA-WIDE RULE`.

---

# 30. Final design rules

1. **Solve SIH26032, not “agriculture” generally.**
2. **Automation does not require AI.**
3. **Do not duplicate government procurement truth.**
4. **Do not claim existing systems are inadequate without evidence.**
5. **Do not claim HarvestFlow is unique because it has a chatbot.**
6. **Do not make operators perform duplicate data entry.**
7. **Do not make smartphones mandatory.**
8. **Do not fake real-time information.**
9. **Do not guarantee waiting times.**
10. **Do not claim payment execution.**
11. **Do not hard-code one state's workflow as universal.**
12. **Do not over-engineer the architecture.**
13. **Do not add a feature without a real operational reason.**
14. **Every important status must have an owner.**
15. **Every manual change must have actor + timestamp + reason.**
16. **Every integration must have a failure/fallback path.**
17. **Every major claim must have evidence or be labelled a hypothesis.**
18. **Pilot before scale.**
19. **Measure before claiming impact.**
20. **If removing a feature makes the solution clearer without weakening SIH26032 coverage, remove it.**

---

# 31. Final HarvestFlow definition

> **HarvestFlow is a thin, government-compatible coordination layer that helps procurement centres schedule farmer arrivals against usable capacity, manage check-in and operational queues, communicate changes through SMS/app channels, handle disruptions, and show verified procurement/payment status — while leaving authoritative registration, procurement and payment records with the systems that already own them.**

### Core value

**RIGHT FARMER → RIGHT CENTRE → RIGHT TIME → RIGHT QUEUE → COMPLETE STATUS**

### Core automation

**CAPACITY → BOOKING → CHECK-IN → QUEUE → EVENT → NOTIFICATION → EXCEPTION**

### Core government principle

**INTEGRATE → MINIMIZE WORK → AUDIT → PILOT → MEASURE → SCALE**

### Final rule

> **If a feature is not required to make this journey more predictable, it does not belong in HarvestFlow.**
