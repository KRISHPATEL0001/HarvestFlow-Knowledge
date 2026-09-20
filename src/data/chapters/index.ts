import type { Chapter } from '../../types/content';
import { CHAPTER_00_OVERVIEW, CHAPTER_01_STARTHERE } from './chapter00_overview';
import { CHAPTER_02_UNDERSTAND_PROBLEM, CHAPTER_03_EXISTING_SYSTEMS } from './chapter02_understandProblem';
import { CHAPTER_04_HARVESTFLOW_GAP, CHAPTER_05_FARMER_JOURNEY } from './chapter04_harvestflowGap';
import { CHAPTER_06_CENTRE_OPERATOR, CHAPTER_07_DATA_OWNERSHIP } from './chapter06_centreOperator';
import { CHAPTER_08_OPERATIONAL_LOGIC, CHAPTER_09_ACCESS_RELIABILITY } from './chapter08_operationalLogic';
import { CHAPTER_10_GOV_INTEGRATION, CHAPTER_11_ARCHITECTURE } from './chapter10_govIntegration';
import { CHAPTER_12_SECURITY_GOVERNANCE, CHAPTER_13_AI_ML_DECISION } from './chapter12_securityGovernance';
import { CHAPTER_14_SCOPE_EXCLUSIONS, CHAPTER_15_VALUABLE } from './chapter14_scopeExclusions';
import { CHAPTER_16_GOV_ADOPTION, CHAPTER_17_MEASUREMENT } from './chapter16_govAdoption';
import { CHAPTER_18_EVIDENCE, CHAPTER_19_FINAL_RULES, CHAPTER_20_QUICK_REFERENCE } from './chapter18_evidence';

export const ALL_CHAPTERS: Chapter[] = [
  CHAPTER_00_OVERVIEW,
  CHAPTER_01_STARTHERE,
  CHAPTER_02_UNDERSTAND_PROBLEM,
  CHAPTER_03_EXISTING_SYSTEMS,
  CHAPTER_04_HARVESTFLOW_GAP,
  CHAPTER_05_FARMER_JOURNEY,
  CHAPTER_06_CENTRE_OPERATOR,
  CHAPTER_07_DATA_OWNERSHIP,
  CHAPTER_08_OPERATIONAL_LOGIC,
  CHAPTER_09_ACCESS_RELIABILITY,
  CHAPTER_10_GOV_INTEGRATION,
  CHAPTER_11_ARCHITECTURE,
  CHAPTER_12_SECURITY_GOVERNANCE,
  CHAPTER_13_AI_ML_DECISION,
  CHAPTER_14_SCOPE_EXCLUSIONS,
  CHAPTER_15_VALUABLE,
  CHAPTER_16_GOV_ADOPTION,
  CHAPTER_17_MEASUREMENT,
  CHAPTER_18_EVIDENCE,
  CHAPTER_19_FINAL_RULES,
  CHAPTER_20_QUICK_REFERENCE
];

export function getChapterById(id: string): Chapter | undefined {
  return ALL_CHAPTERS.find(c => c.id === id);
}

export function getChapterByNumber(num: string): Chapter | undefined {
  return ALL_CHAPTERS.find(c => c.number === num);
}

export function getAdjacentChapters(currentId: string): { prev?: Chapter; next?: Chapter } {
  const index = ALL_CHAPTERS.findIndex(c => c.id === currentId);
  if (index === -1) return {};
  return {
    prev: index > 0 ? ALL_CHAPTERS[index - 1] : undefined,
    next: index < ALL_CHAPTERS.length - 1 ? ALL_CHAPTERS[index + 1] : undefined
  };
}
