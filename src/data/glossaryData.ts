import type { GlossaryItem } from '../types/content';

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    id: 'sih26032',
    term: 'SIH26032',
    definition: 'Smart India Hackathon problem statement issued by the Ministry of Consumer Affairs, Food & Public Distribution (Department of Consumer Affairs) addressing farmer waiting times, lack of procurement schedule visibility, and procurement/payment status uncertainty.',
    authority: 'Ministry of Consumer Affairs, Food & Public Distribution (DoCA)',
    category: 'Core Concept',
    canonicalQuote: '“Farmers often face long waiting times, lack of information regarding procurement schedules, and uncertainty about procurement status.”'
  },
  {
    id: 'procurement-centre',
    term: 'Procurement Centre',
    definition: 'The designated physical facility (mandi, purchase centre, PACS, or society centre) where approved farmers deliver agricultural produce for government minimum support price (MSP) intake, quality inspection, weighing, bagging, and receipt issuance.',
    authority: 'State Food & Civil Supplies Corporation / FCI / Departmental SOP',
    category: 'Operational State'
  },
  {
    id: 'capacity',
    term: 'Capacity',
    definition: 'The operational intake volume that a procurement centre can physically inspect, weigh, unload, and store within a given working window. It is NOT merely the number of farmers; it reflects physical resource throughput.',
    authority: 'HarvestFlow Coordination Model / Centre SOP',
    category: 'Core Concept',
    canonicalQuote: '“Capacity is not simply ‘number of farmers’. It represents usable operational intake capacity.”'
  },
  {
    id: 'usable-capacity',
    term: 'Usable Capacity',
    definition: 'The actual intake volume available for scheduling appointments on a specific day after factoring in physical operational constraints (staff, weighing scales, storage space, transport availability). Calculated as Baseline Capacity + Operational Adjustment.',
    authority: 'HarvestFlow Operational Layer',
    category: 'Core Concept',
    canonicalQuote: '“Normal usable capacity: 400 q; Equipment/storage/staff issue: -100 q; Current usable capacity: 300 q.”'
  },
  {
    id: 'baseline-capacity',
    term: 'Baseline Capacity',
    definition: 'The standard intake capacity configured by an authorized departmental officer for a centre based on historical throughput, installed equipment, and standard operating hours.',
    authority: 'Supervising Officer / Departmental Configuration',
    category: 'Core Concept'
  },
  {
    id: 'operational-adjustment',
    term: 'Operational Adjustment',
    definition: 'A temporary modification made by the centre operator reducing or adjusting the usable intake capacity due to local equipment failure, staff shortage, weather disruption, or transport bottlenecks. Must log actor, timestamp, reason, old value, and new value.',
    authority: 'Centre Operator (with mandatory audit log)',
    category: 'Operational State'
  },
  {
    id: 'slot',
    term: 'Slot',
    definition: 'The designated arrival time window offered to a farmer based on verified usable centre capacity. Answers the farmer question: “When should I come?”',
    authority: 'HarvestFlow Scheduling Layer',
    category: 'Core Concept',
    canonicalQuote: '“Slot answers: When should I come?”'
  },
  {
    id: 'booking',
    term: 'Booking',
    definition: 'A confirmed appointment reservation that binds an eligible farmer and crop quantity to a specific centre and time slot. Answers: “Is my arrival window confirmed?”',
    authority: 'HarvestFlow Booking Engine',
    category: 'Core Concept',
    canonicalQuote: '“Booking answers: Is my arrival window confirmed?”'
  },
  {
    id: 'token',
    term: 'Token',
    definition: 'The universal, farmer-facing unique alphanumeric reference code representing a visit reservation. Accessible via SMS, web, or printout. QR codes are an optional convenience, but the token itself is universal.',
    authority: 'HarvestFlow Coordination Layer',
    category: 'Core Concept',
    canonicalQuote: '“Token answers: What is my visit reference? Use the token as the universal farmer-facing visit reference.”'
  },
  {
    id: 'check-in',
    term: 'Farmer Check-in',
    definition: 'The operational event recorded when a farmer physically arrives at the centre and presents their token. Triggers queue entry, timestamp logging, and officer visibility. It is strictly an arrival confirmation, NOT identity verification.',
    authority: 'HarvestFlow Operational Layer (Operator Action)',
    category: 'Operational State',
    canonicalQuote: '“Call it Farmer Check-in. Do not call check-in ‘identity verification’.”'
  },
  {
    id: 'queue',
    term: 'Queue',
    definition: 'The active sequence of checked-in farmers waiting for or undergoing inspection, weighing, and unloading at a centre. Answers: “Where am I in the current operational process?”',
    authority: 'HarvestFlow Queue State Machine',
    category: 'Operational State',
    canonicalQuote: '“Queue answers: Where am I in the current operational process?”'
  },
  {
    id: 'operational-state',
    term: 'Operational State',
    definition: 'The dynamic status of centre intake, queue depth, active disruptions, and processing stages at any point in time. Governed by a deterministic state machine.',
    authority: 'HarvestFlow Operational Engine',
    category: 'Operational State'
  },
  {
    id: 'disruption',
    term: 'Disruption',
    definition: 'An unexpected operational impediment (e.g. weighing scale malfunction, rain, power outage, storage overflow, transport delay) declared by an operator that temporarily reduces usable capacity and triggers automated rescheduling alerts and officer exceptions.',
    authority: 'Centre Operator / Supervising Officer',
    category: 'Operational State'
  },
  {
    id: 'stale-data',
    term: 'Stale Data',
    definition: 'Operational queue or capacity status that has not been updated within a preconfigured time threshold. Must be visibly marked as stale rather than presented as live.',
    authority: 'HarvestFlow Monitoring & Freshness Logic',
    category: 'System Architecture',
    canonicalQuote: '“A stale capacity value is worse than no capacity value. Do not invent live status when no one has updated the system.”'
  },
  {
    id: 'source-of-truth',
    term: 'Source of Truth',
    definition: 'The single authoritative system designated as having ultimate legal and operational ownership over a particular data element (e.g. state portal for registration/payment, HarvestFlow for appointment coordination).',
    authority: 'System Architecture Policy Matrix',
    category: 'Governance & Legal',
    canonicalQuote: '“HarvestFlow should own coordination, not government procurement or financial truth.”'
  },
  {
    id: 'authoritative-system',
    term: 'Authoritative System',
    definition: 'The official government software (e.g. e-Uparjan, OPMS, CFPP, PFMS/e-Kuber) responsible for legally binding farmer registration, land verification, crop weighment, and financial disbursement.',
    authority: 'State / Central Government Agencies',
    category: 'Governance & Legal'
  },
  {
    id: 'api-setu',
    term: 'API Setu',
    definition: 'An Open API platform by the Government of India (MeitY/NIC) enabling secure, consent-based, and standardized data exchange between public entities and authorized software systems.',
    authority: 'National Informatics Centre (NIC) / MeitY',
    category: 'System Architecture',
    canonicalQuote: '“API Setu is an official government API platform intended for API discovery, publishing, consumption and secure interoperability.”'
  },
  {
    id: 'sms',
    term: 'SMS (Short Message Service)',
    definition: 'The primary, non-negotiable communication channel for notifying farmers about booking confirmations, disruptions, turn alerts, and payment updates. Guarantees access without smartphone or internet dependency.',
    authority: 'HarvestFlow Notification Service / Telecom Gateway',
    category: 'Core Concept',
    canonicalQuote: '“SMS is essential. A smartphone app is useful but must not be mandatory.”'
  },
  {
    id: 'assisted-access',
    term: 'Assisted Access',
    definition: 'Provision allowing farmers to book slots, verify status, and receive printed tokens via local Common Service Centres (CSCs), Gram Panchayats, or centre helpdesks in their local language.',
    authority: 'Inclusion & Accessibility Standard',
    category: 'Core Concept',
    canonicalQuote: '“A farmer should not be forced into: English + smartphone + app + continuous internet.”'
  },
  {
    id: 'offline-contingency',
    term: 'Controlled Offline Contingency',
    definition: 'A centre-side fallback procedure that records token check-ins, timestamps, and operator IDs during internet outages for subsequent synchronization, without allowing offline creation of new bookings.',
    authority: 'HarvestFlow Resilience Architecture',
    category: 'System Architecture',
    canonicalQuote: '“Full offline farmer booking = NOT SUPPORTED. Controlled centre-side contingency may capture check-in for later sync.”'
  },
  {
    id: 'procurement-status',
    term: 'Procurement Status',
    definition: 'The operational state of the farmer’s crop delivery at the centre (e.g. Checked-in, Quality Accepted/Rejected, Weighed, Purchase Completed). Answers: “What happened to my crop?”',
    authority: 'Authoritative Procurement System',
    category: 'Operational State'
  },
  {
    id: 'payment-status',
    term: 'Payment Status',
    definition: 'The financial disbursement lifecycle state (e.g. Purchase recorded → Payment submitted → Credit confirmed). HarvestFlow provides visibility only when confirmed by the authoritative bank/government system.',
    authority: 'Authoritative Payment System (PFMS / Bank / Treasury)',
    category: 'Governance & Legal',
    canonicalQuote: '“Only show ‘Payment credited’ when the authoritative source confirms it.”'
  },
  {
    id: 'audit-event',
    term: 'Audit Event',
    definition: 'An immutable system log recording any manual modification, capacity adjustment, disruption declaration, check-in, or exception override with actor ID, timestamp, and justification.',
    authority: 'HarvestFlow Governance & Compliance',
    category: 'Governance & Legal'
  },
  {
    id: 'exception',
    term: 'Exception',
    definition: 'An operational condition deviating from standard workflow (e.g. stale centre updates, over-capacity arrivals, quality disputes, delayed payment sync) highlighted on the supervising officer dashboard.',
    authority: 'Supervising Officer / HarvestFlow Monitoring',
    category: 'Operational State'
  },
  {
    id: 'maya-chatbot',
    term: 'Maya Chatbot',
    definition: 'A prototype conversational help/FAQ assistant present in early iterations for user guidance. Strictly categorized as a non-core helper, NOT a differentiator or operational decision-maker.',
    authority: 'Prototype Help Feature Only',
    category: 'Core Concept',
    canonicalQuote: '“If Maya exists in the current prototype, treat it as a prototype help/FAQ feature only, not as part of the HarvestFlow solution proposition.”'
  },
  {
    id: 'gigw',
    term: 'GIGW 3.0',
    definition: 'Guidelines for Indian Government Websites and Apps (Version 3.0), establishing standards for usability, accessibility (WCAG 2.1 AA), cybersecurity, and software lifecycle.',
    authority: 'National Informatics Centre (NIC) / MeitY',
    category: 'Governance & Legal'
  },
  {
    id: 'deterministic-automation',
    term: 'Deterministic Automation',
    definition: 'Predictable, rule-based algorithmic coordination where identical inputs and operational conditions always yield the exact same verifiable outcome, eliminating AI hallucinations and opacity.',
    authority: 'HarvestFlow Architecture Foundation',
    category: 'System Architecture',
    canonicalQuote: '“Smart Automation here means reliable rule-based automation of a real operational workflow. No ML model. No AI prediction.”'
  }
];
