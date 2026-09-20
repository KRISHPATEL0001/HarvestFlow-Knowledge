export type EvidenceType =
  | 'OFFICIAL'
  | 'RESEARCH'
  | 'FIELD REPORT'
  | 'CURRENT PROTOTYPE'
  | 'PROPOSED'
  | 'PILOT HYPOTHESIS'
  | 'ILLUSTRATIVE'
  | 'OUT OF SCOPE';

export interface SectionContent {
  id: string;
  title: string;
  level?: 2 | 3 | 4;
  evidenceType?: EvidenceType;
  markdown: string;
  callout?: {
    type: 'NOTE' | 'IMPORTANT' | 'WARNING' | 'TIP' | 'RULE' | 'HYPOTHESIS';
    title: string;
    content: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  diagramId?: string;
  whyAccordionId?: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  sourceSections: string;
  primaryEvidence: EvidenceType;
  readingMinutes: number;
  category: 'Foundation' | 'Problem & Systems' | 'Core Architecture' | 'Governance & AI' | 'Strategy & Reference';
  sections: SectionContent[];
}

export interface GlossaryItem {
  id: string;
  term: string;
  definition: string;
  authority: string;
  category: 'Core Concept' | 'Operational State' | 'System Architecture' | 'Governance & Legal';
  relatedTerms?: string[];
  canonicalQuote?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  category: 'System Scope' | 'Architecture & Tech' | 'Operational Logic' | 'Government & Data' | 'Jury Tough Questions';
  evidenceType: EvidenceType;
  shortAnswer: string;
  detailedAnswer: string;
  relatedChapterId: string;
  dangerAlert?: string;
}

export interface WhyItem {
  id: string;
  question: string;
  shortSummary: string;
  canonicalReason: string;
  whatGoesWrongIfIgnored: string;
  evidenceType: EvidenceType;
  relatedChapterId: string;
}

export interface ExcludedFeature {
  id: string;
  name: string;
  whyAttractive: string;
  whyExcluded: string;
  harvestFlowAlternative: string;
  category: 'AI / Automation' | 'Infrastructure & Architecture' | 'Fintech & Identity' | 'Supply Chain & Logistics';
  evidenceType: EvidenceType;
}

export interface SourceItem {
  id: string;
  name: string;
  organization: string;
  url: string;
  type: 'Government Portal' | 'Government Publication' | 'Guidelines' | 'Field Research';
  demonstratedCapabilities: string[];
  whatCannotBeClaimed: string;
  pilotValidationNeeds: string;
}
