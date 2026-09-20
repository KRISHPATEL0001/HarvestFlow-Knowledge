import type { SourceItem } from '../types/content';

export const SOURCES_DATA: SourceItem[] = [
  {
    id: 'mp-e-uparjan',
    name: 'Madhya Pradesh — e-Uparjan',
    organization: 'Food, Civil Supplies & Consumer Protection Department, Government of Madhya Pradesh / NIC',
    url: 'https://mpeuparjan.nic.in/',
    type: 'Government Portal',
    demonstratedCapabilities: [
      'Comprehensive farmer registration with land record linking',
      'Slot booking and appointment scheduling for crop delivery',
      'Mandi procurement intake and weighment recording',
      'Transport order generation and warehouse storage management',
      'Direct payment processing and digital farmer receipts'
    ],
    whatCannotBeClaimed: 'HarvestFlow must NOT claim that slot booking, digital tokens, or registration are novel inventions. e-Uparjan has operated these capabilities at scale for years.',
    pilotValidationNeeds: 'Validate whether e-Uparjan currently synchronizes real-time physical queue depth at centres, handles dynamic operational equipment disruptions, and alerts farmers of sudden capacity reductions.'
  },
  {
    id: 'telangana-opms',
    name: 'Telangana — Online Procurement Management System (OPMS)',
    organization: 'Centre for Good Governance (CGG) / Civil Supplies Department, Government of Telangana',
    url: 'https://www.cgg.gov.in/it_project/online-procurement-management-system-opms/',
    type: 'Government Portal',
    demonstratedCapabilities: [
      'Paddy procurement tracking across thousands of purchase centres (PPCs)',
      'Transport contractor tracking and mill delivery allocation',
      'Direct farmer payment calculations and bank disbursement workflows',
      'Centre-side tablet-based digital data collection',
      'Executive dashboards, analytics reports, and automated SMS alerts'
    ],
    whatCannotBeClaimed: 'HarvestFlow must NOT claim that SMS alerts, mobile data entry at centres, or digital payment tracking are unprecedented.',
    pilotValidationNeeds: 'Investigate whether OPMS provides live farmer-facing queue transparency, capacity-aware appointment throttling, or automated disruption handling when milling or transport bottlenecks occur.'
  },
  {
    id: 'chhattisgarh-token',
    name: 'Chhattisgarh — KMS 2025–26 Procurement & Token System',
    organization: 'Food, Civil Supplies & Consumer Protection Department, Government of Chhattisgarh',
    url: 'https://jansampark.cg.gov.in/Janman/EN_OCT2025/JanmanOct2025_eng.pdf',
    type: 'Government Publication',
    demonstratedCapabilities: [
      'Online token booking system for paddy farmers',
      'e-KYC and Agristack-related farmer registration verification',
      'Biometric verification at cooperative society procurement centres',
      'Integrated Command and Control Centre (ICCC) for real-time monitoring',
      'Assisted and offline token issuance arrangements through primary societies'
    ],
    whatCannotBeClaimed: 'HarvestFlow must NOT claim that token-based procurement, command centre dashboards, or assisted token issuance through societies are novel concepts.',
    pilotValidationNeeds: 'Examine how Chhattisgarh manages sudden local capacity drops (e.g. wet weather or scale failure) and whether tokens automatically adjust without requiring manual re-issuance.'
  },
  {
    id: 'hp-procurement',
    name: 'Himachal Pradesh — Food, Civil Supplies & Consumer Affairs Portal',
    organization: 'Department of Food, Civil Supplies & Consumer Affairs, Government of Himachal Pradesh',
    url: 'https://hpappp.hp.gov.in/Citizen/SoftwareInterfaces.aspx',
    type: 'Government Portal',
    demonstratedCapabilities: [
      'Online farmer registration and document verification',
      'Token generation for mandi arrival',
      'Procurement entry and digital receipt generation',
      'Transfer of approved farmer data to Central Food Procurement Portal (CFPP) via API',
      'Structured payment data exchange with banking partners'
    ],
    whatCannotBeClaimed: 'HarvestFlow must NOT claim that API-based data exchange between state portals and central systems (CFPP) is novel.',
    pilotValidationNeeds: 'Determine if CFPP/HP APIs allow bidirectional operational queue sync or if data exchange is restricted to post-procurement batch reporting.'
  },
  {
    id: 'api-setu',
    name: 'API Setu — National API Platform',
    organization: 'Ministry of Electronics & Information Technology (MeitY) / National Informatics Centre (NIC)',
    url: 'https://www.apisetu.gov.in/',
    type: 'Government Portal',
    demonstratedCapabilities: [
      'Standardized government API discovery, publishing, and consumption',
      'Secure, consent-based citizen and enterprise data interoperability',
      'Unified data exchange framework across central and state departments'
    ],
    whatCannotBeClaimed: 'HarvestFlow must NOT claim live integration with API Setu until the specific department API is officially published, tested, and authorized.',
    pilotValidationNeeds: 'Confirm API Setu catalog availability for the target state’s agriculture/procurement department endpoints and obtain test credentials.'
  },
  {
    id: 'api-setu-docs',
    name: 'API Setu Technical Documentation',
    organization: 'National Informatics Centre (NIC)',
    url: 'https://docs.apisetu.gov.in/',
    type: 'Guidelines',
    demonstratedCapabilities: [
      'OAuth2 / JWT authentication standards for government data exchange',
      'Rate limiting, payload schemas, and digital signature requirements',
      'Interoperability compliance guidelines for public software'
    ],
    whatCannotBeClaimed: 'Do not simulate fake API responses and present them as certified API Setu connections.',
    pilotValidationNeeds: 'Follow documented security schemas for API consumer onboarding during Phase 3 integration pilot.'
  },
  {
    id: 'gigw',
    name: 'Guidelines for Indian Government Websites and Apps (GIGW 3.0)',
    organization: 'Ministry of Electronics & Information Technology (MeitY) / NIC',
    url: 'https://guidelines.india.gov.in/',
    type: 'Guidelines',
    demonstratedCapabilities: [
      'Universal accessibility compliance based on WCAG 2.1 Level AA',
      'Cybersecurity and data privacy lifecycle mandates',
      'Bilingual / multi-language interface guidelines',
      'Usability heuristics for citizen-facing public software'
    ],
    whatCannotBeClaimed: 'Do not claim formal GIGW certification for a hackathon prototype before independent STQC audit.',
    pilotValidationNeeds: 'Ensure UI components, color contrast ratios, screen reader compatibility, and keyboard navigation strictly conform to GIGW 3.0 standards.'
  }
];

export const EVIDENCE_SOURCES_REGISTER = {
  officialCurrentSystems: [
    'MP e-Uparjan — registration, slot booking, procurement, transport, storage, payment (mpeuparjan.nic.in)',
    'Telangana OPMS — procurement, transport, payment, centre-side digital capture, SMS (cgg.gov.in)',
    'Chhattisgarh — online tokens and command/control monitoring (jansampark.cg.gov.in)',
    'HP Procurement Portal — registration, tokens, procurement, CFPP/API exchange (hpappp.hp.gov.in)',
    'GIGW 3.0 — government web/app usability, accessibility, security, and lifecycle (guidelines.india.gov.in)',
    'API Setu — government API interoperability platform (apisetu.gov.in)'
  ],
  governmentPolicyReviews: [
    'DFPD/PIB procurement-centre infrastructure and timely-payment review, 20 Feb 2026',
    'DFPD/PIB procurement/storage/stock-movement review, 1 Sep 2026',
    'West Bengal procurement guidelines covering operational procurement procedures'
  ],
  fieldResearchStudies: [
    'Kerala farmer procurement constraints study (identifying weighbridge bottlenecks and queue delays)',
    'Telangana decentralized procurement ground-level study (evaluating PPC operations and storage delays)',
    'Procurement/storage/handling constraints research across northern and central states',
    'West Bengal procurement operations research (decentralized paddy procurement challenges)'
  ]
};
