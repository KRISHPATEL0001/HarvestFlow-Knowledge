import type { ExcludedFeature } from '../types/content';

export const EXCLUDED_FEATURES: ExcludedFeature[] = [
  {
    id: 'ai-ml',
    name: 'AI / Machine Learning as a Core Feature',
    whyAttractive: 'Sounds cutting-edge, aligns superficially with the SIH theme “Smart Automation”, and creates an impressive demo slide.',
    whyExcluded: 'SIH26032 is an operational state coordination challenge. The core problem is trustworthy state, capacity matching, and disruption communication. ML does not solve duplicate data entry or stale centre updates. Centre data is sparse and unpredictable.',
    harvestFlowAlternative: 'Deterministic rule-based automation: capacity calculation, queue state machine, event-driven SMS alerts, and exception rules that are 100% auditable and reliable.',
    category: 'AI / Automation',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot as the Core Differentiator',
    whyAttractive: 'Modern conversational interface that appears accessible to non-technical users.',
    whyExcluded: 'A chatbot does not coordinate physical mandi capacity, manage weighbridge bottlenecks, or synchronize operational queue state. If an assistant exists (e.g. Maya in prototype), it is strictly a help/FAQ utility, not the system core.',
    harvestFlowAlternative: 'Standardized SMS event notifications, multi-lingual responsive web UI, and assisted access via Gram Panchayat / CSC operators.',
    category: 'AI / Automation',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'blockchain',
    name: 'Blockchain / Distributed Ledger',
    whyAttractive: 'Promises tamper-proof audit trails and decentralized trust for agricultural transactions.',
    whyExcluded: 'Government procurement is already governed by statutory centralized authorities (State Civil Supplies, FCI, State Treasury). Blockchain introduces severe write latency, massive compute costs, and zero operational benefit for mandi queue coordination.',
    harvestFlowAlternative: 'Append-only relational audit logs with cryptographically signed operational event records and role-based access control.',
    category: 'Infrastructure & Architecture',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'facial-recognition',
    name: 'Facial Recognition / Computer Vision for Identity',
    whyAttractive: 'High-tech biometric verification that claims to eliminate proxy deliveries.',
    whyExcluded: 'High false-rejection rates in rural outdoor conditions (dust, direct sunlight, poor lighting), high hardware cost for centres, and lack of statutory legal backing for non-Aadhaar biometrics.',
    harvestFlowAlternative: 'Universal alphanumeric Token check-in. Statutory farmer identity verification is delegated to whatever authorized government process (Aadhaar/e-KYC) the state already mandates.',
    category: 'Fintech & Identity',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'direct-payment-execution',
    name: 'Direct Bank / Payment Execution',
    whyAttractive: 'Appears to complete the end-to-end financial loop by transferring MSP funds directly to farmers.',
    whyExcluded: 'Government disbursements are strictly regulated statutory treasury operations executed via PFMS, state cooperative banks, or RBI e-Kuber. A third-party hackathon app executing public funds violates fiscal laws and creates massive financial liability.',
    harvestFlowAlternative: 'Verified Payment Status Tracking: HarvestFlow reads and surfaces authoritative payment stages (Submitted → Processing → Credited) without touching banking rails.',
    category: 'Fintech & Identity',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'erp-replacement',
    name: 'Procurement ERP Replacement',
    whyAttractive: 'Designing a complete from-scratch crop procurement ERP gives total control over the database.',
    whyExcluded: 'States have spent hundreds of crores and decades building robust procurement ERPs (MP e-Uparjan, Telangana OPMS). Demanding that governments scrap their existing software ensures immediate adoption failure.',
    harvestFlowAlternative: 'Lightweight Coordination Layer: Operates alongside existing systems via approved APIs (API Setu) or secure batch feeds, leaving authoritative procurement records intact.',
    category: 'Infrastructure & Architecture',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'fleet-management',
    name: 'Fleet Management & Route Optimization',
    whyAttractive: 'Visualizing trucks moving from mandis to warehouses looks impressive on an executive dashboard.',
    whyExcluded: 'Transport contracting is an existing government domain with dedicated logistics vendors. Transport delays matter to HarvestFlow only as a capacity constraint (i.e. yard congestion).',
    harvestFlowAlternative: 'Capacity Input Signal: Transport bottlenecks simply reduce the centre’s usable intake capacity until trucks arrive to evacuate bagged crop.',
    category: 'Supply Chain & Logistics',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'warehouse-management',
    name: 'Warehouse Management System (WMS)',
    whyAttractive: 'Managing godown stacks, moisture testing, and storage bin allocations.',
    whyExcluded: 'FCI, CWC, and SWCs already operate specialized WMS software. HarvestFlow’s boundary is the procurement centre yard and farmer queue.',
    harvestFlowAlternative: 'Storage constraint input: If destination godowns are full, the centre operator logs an adjustment to reduce daily intake capacity.',
    category: 'Supply Chain & Logistics',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'national-forecasting',
    name: 'National Macro Forecasting & Yield Estimation',
    whyAttractive: 'Displays nationwide heatmaps and predictive supply-demand models.',
    whyExcluded: 'Requires macroeconomic and satellite datasets far outside SIH26032 scope. Macro models do not help a farmer stuck at a weighing scale in a taluk mandi.',
    harvestFlowAlternative: 'Hyper-local centre capacity configuration and operational queue visibility for the specific pilot district.',
    category: 'AI / Automation',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'crop-disease-prediction',
    name: 'Crop Disease & Pest Prediction',
    whyAttractive: 'Popular agricultural hackathon feature combining image recognition with farmer apps.',
    whyExcluded: 'Completely unrelated to the SIH26032 problem statement of procurement schedules, queues, and payment visibility.',
    harvestFlowAlternative: 'Strict scope lock on SIH26032: Farmer registration, slot booking, real-time queue state, SMS notifications, and status tracking.',
    category: 'AI / Automation',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'market-price-prediction',
    name: 'Market Price / APMC Price Prediction',
    whyAttractive: 'Suggests optimal selling dates based on future price speculation.',
    whyExcluded: 'Government procurement operates at fixed statutory Minimum Support Price (MSP). Price prediction is irrelevant for MSP procurement.',
    harvestFlowAlternative: 'Transparent display of approved MSP rates and official procurement schedules as published by the Department of Consumer Affairs.',
    category: 'AI / Automation',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'unnecessary-iot',
    name: 'Unnecessary IoT Sensors (Moisture, Weight, RFID)',
    whyAttractive: 'Demos automated sensor readings directly feeding the cloud without human intervention.',
    whyExcluded: 'Mandis already have certified, stamp-verified electronic weighbridges and moisture meters under Legal Metrology department rules. Mandating custom IoT hardware creates massive procurement hurdles and failure points.',
    harvestFlowAlternative: 'Operator entry of certified weighment results, or reading from existing digital scale printouts/APIs where available.',
    category: 'Infrastructure & Architecture',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'unnecessary-biometrics',
    name: 'Custom Biometric Hardware Infrastructure',
    whyAttractive: 'Iris scanners and custom fingerprint devices to enforce strict physical presence.',
    whyExcluded: 'Costly, fragile in dusty mandi environments, and legally complex. Biometric verification for procurement is already managed by state agencies via UIDAI-certified POS terminals where mandated.',
    harvestFlowAlternative: 'Universal Token check-in by centre operators, respecting existing state biometric SOPs without introducing redundant hardware.',
    category: 'Fintech & Identity',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'full-offline-booking',
    name: 'Full Offline Farmer Booking',
    whyAttractive: 'Allows farmers to book slots anywhere without mobile network connectivity.',
    whyExcluded: 'Offline booking creates unresolvable capacity collisions: multiple devices book the same capacity quota simultaneously, resulting in catastrophic mandi congestion.',
    harvestFlowAlternative: 'Controlled Centre-side Offline Contingency: Allows operators to record check-in timestamps during temporary outages for later sync, while booking strictly requires live capacity checks.',
    category: 'Infrastructure & Architecture',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'nationwide-deployment-claims',
    name: 'Immediate Nationwide Deployment Claims',
    whyAttractive: 'Impresses judges by claiming readiness for all 28 states and 7,000+ mandis across India.',
    whyExcluded: 'Procurement rules, state software (e-Uparjan, OPMS, etc.), crop specifications, and administrative workflows differ radically across states. A single nationwide assumption is factually false.',
    harvestFlowAlternative: 'Disciplined 5-Phase Adoption Model: Discovery → Shadow Mode → Assisted Pilot → Integration Pilot → Measured Scale based on pilot-specific official evidence.',
    category: 'Infrastructure & Architecture',
    evidenceType: 'OUT OF SCOPE'
  },
  {
    id: 'complex-microservices',
    name: 'Complex Microservices / Kafka / Kubernetes Architecture',
    whyAttractive: 'Resume-driven enterprise architecture with distributed streaming and container orchestration.',
    whyExcluded: 'Unnecessary operational overhead for hackathon prototypes and pilot centres. Introduces distributed failure modes, deployment delays, and high infrastructure costs without scale justification.',
    harvestFlowAlternative: 'Clean, modular web application with a relational database and REST API layer: fast, reliable, easily debugged, and straightforward for government IT teams to maintain.',
    category: 'Infrastructure & Architecture',
    evidenceType: 'OUT OF SCOPE'
  }
];
