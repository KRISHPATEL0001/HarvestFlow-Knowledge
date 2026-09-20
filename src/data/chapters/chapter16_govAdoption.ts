import type { Chapter } from '../../types/content';

export const CHAPTER_16_GOV_ADOPTION: Chapter = {
  id: '16-government-adoption',
  number: '16',
  title: 'Government Adoption — 5-Phase Pilot Strategy',
  shortTitle: 'Govt Adoption',
  subtitle: 'The disciplined journey from Discovery to Measured State Scale',
  sourceSections: 'Section 25: Government adoption strategy',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 8,
  category: 'Strategy & Reference',
  sections: [
    {
      id: 'sec-16-1',
      title: 'The Core Adoption Principle: Pilot Before Scale',
      evidenceType: 'PROPOSED',
      markdown: `Many technology proposals fail in government because they present an unrealistic all-or-nothing proposition: *“Deploy our software across all 7,000 mandis in India tomorrow.”*

Government procurement is heavily decentralized, legally sensitive, and tied to state-specific cooperative societies and civil supplies corporations. HarvestFlow rejects nationwide deployment claims and adopts the **Core Government Principle**:

\`\`\`text
INTEGRATE → MINIMIZE WORK → AUDIT → PILOT → MEASURE → SCALE
\`\`\`

We earn the right to scale by proving measurable operational reductions in waiting time at a single controlled centre first.`,
      whyAccordionId: 'why-pilot-before-scale'
    },
    {
      id: 'sec-16-2',
      title: 'The 5-Phase Adoption Lifecycle',
      evidenceType: 'PROPOSED',
      markdown: `### Phase 0: Department Discovery & Baseline
- **Scope**: One agency (e.g. State Civil Supplies Corporation), one crop (e.g. Kharif Paddy), one district, exactly 1 or 2 procurement centres.
- **Objectives**: Document the real on-ground SOP, existing software (e.g. e-Uparjan or OPMS), data ownership boundaries, operator keystrokes, weighbridge hardware, local connectivity, and statutory quality rules.
- **Output**: Detailed interface specification and baseline KPI measurements (median waiting time, queue depth).

### Phase 1: Shadow Mode (Zero Operational Authority)
- **Scope**: Same 1–2 centres during live procurement.
- **Objectives**: Deploy HarvestFlow alongside existing operations in read-only observation mode. Operators or field interns shadow arrivals and log events.
- **Safety**: HarvestFlow has **zero authority** over statutory intake. It simply compares proposed capacity calculations against actual mandi congestion to tune parameters.

### Phase 2: Assisted Pilot (Live Coordination)
- **Scope**: 2–5 centres in one district.
- **Objectives**: Introduce capacity-aware appointments, live queue displays at the mandi gate, and automated SMS alerts to farmers.
- **Integration**: Operates with manual daily roster imports or simple webhook sync. Measures operator adoption and farmer satisfaction.

### Phase 3: Approved Integration Pilot
- **Scope**: 10–20 centres across an entire agricultural district.
- **Objectives**: Connect directly to state procurement ERPs via approved APIs (e.g. API Setu). Enable bidirectional event synchronization for weighment and payment visibility.
- **Audit**: Independent security review (STQC / CERT-In empanelled auditor) and GIGW 3.0 accessibility verification.

### Phase 4: State Expansion & Measured Scale
- **Scope**: District-by-district rollout across the state.
- **Prerequisite**: Scale is initiated **only after measured Phase 2 and 3 pilot results prove statistically significant reductions** in farmer waiting times and centre congestion.`,
      table: {
        headers: ['Phase', 'Target Scope', 'System Role', 'Key Milestone'],
        rows: [
          ['Phase 0: Discovery', '1 agency, 1 crop, 1-2 centres', 'Field research & SOP documentation', 'Baseline KPIs & interface spec'],
          ['Phase 1: Shadow Mode', '1-2 centres', 'Read-only observation & comparison', 'Model calibration against real arrivals'],
          ['Phase 2: Assisted Pilot', '2-5 centres', 'Live appointment & queue coordination', 'Farmer SMS alerts & operator validation'],
          ['Phase 3: Integration Pilot', '10-20 centres (1 district)', 'Bidirectional API sync via API Setu', 'Security audit & live payment sync'],
          ['Phase 4: State Scale', 'Full state rollout', 'Authoritative coordination layer', 'Measured multi-centre waiting reduction']
        ]
      }
    }
  ]
};

export const CHAPTER_17_MEASUREMENT: Chapter = {
  id: '17-measurement',
  number: '17',
  title: 'Measurement & KPIs — Four Pillars of Accountability',
  shortTitle: 'Measurement & KPIs',
  subtitle: 'Farmer, Centre, Government, and Inclusion metrics with strict claim discipline',
  sourceSections: 'Section 26: What must be measured',
  primaryEvidence: 'PROPOSED',
  readingMinutes: 8,
  category: 'Strategy & Reference',
  sections: [
    {
      id: 'sec-17-1',
      title: 'The Claim Discipline Mandate for Metrics',
      evidenceType: 'PROPOSED',
      markdown: `> **Do NOT claim “HarvestFlow reduces waiting time by 60%” or “Saves ₹500 crore” without a live pilot.**

Such fabricated claims destroy credibility in front of experienced evaluators. In HarvestFlow, all metric targets are explicitly labeled as **ILLUSTRATIVE** or **PILOT TARGETS**.

We define the exact mathematical metrics that **must be measured during the pilot** to prove real-world impact.`,
      callout: {
        type: 'RULE',
        title: 'Claim Discipline Rule',
        content: '“Measure before claiming impact.” Differentiate clearly between pilot hypotheses and verified experimental results.'
      }
    },
    {
      id: 'sec-17-2',
      title: 'Pillar 1: Farmer Experience KPIs',
      evidenceType: 'PROPOSED',
      markdown: `These metrics evaluate the direct impact on the farmer's time, financial cost, and emotional stress:

- **Median Total Visit Time**: Time elapsed from gate arrival (check-in) to receipt issuance (completion). *[Pilot Target: < 120 minutes]*
- **P90 Total Visit Time**: 90th percentile visit duration, capturing the worst-case delays. *[Pilot Target: < 240 minutes]*
- **Gate-to-Exit Throughput**: Time vehicle spends inside the active yard.
- **Repeat Journey Rate**: Percentage of farmers who had to return home without selling due to centre closure or capacity exhaustion. *[Pilot Target: < 2%]*
- **Missed Slot Rate**: Percentage of booked farmers who failed to arrive during their designated window.
- **SMS Delivery Rate & Latency**: Percentage of alert messages delivered within 60 seconds of an operational event. *[Pilot Target: > 98%]*
- **Status Clarity Score**: Farmer survey rating on understanding their queue position and payment milestones.`,
      table: {
        headers: ['Farmer Metric', 'Formula / Measurement', 'Target (Illustrative)', 'Status'],
        rows: [
          ['Median Visit Time', 'Median(Completion Timestamp - Check-in Timestamp)', '< 2 hours', 'PILOT TARGET'],
          ['P90 Visit Time', '90th percentile of total visit duration', '< 4 hours', 'PILOT TARGET'],
          ['Repeat Journeys', 'Count(Unsuccessful arrivals) / Total arrivals', '< 2%', 'PILOT TARGET'],
          ['SMS Latency', 'Delivery Timestamp - Event Timestamp', '< 60 seconds', 'PILOT TARGET']
        ]
      }
    },
    {
      id: 'sec-17-3',
      title: 'Pillar 2: Centre Operational KPIs',
      evidenceType: 'PROPOSED',
      markdown: `These metrics evaluate centre throughput, physical congestion, and operator workload:

- **Arrival Uniformity (Arrivals/Hour)**: Variance of vehicle arrivals across the working day (preventing 8:00 AM spikes).
- **Processing Throughput (Quintals/Hour)**: Actual intake volume weighed and offloaded per hour.
- **Average & Peak Queue Depth**: Number of vehicles waiting in the yard at any time.
- **Overload Events**: Number of times yard vehicle count exceeded safe physical capacity. *[Pilot Target: Zero]*
- **Operator Keystrokes per Farmer**: Number of manual inputs required to process one delivery. *[Target: Exactly 1 action (Token scan)]*
- **Stale Status Frequency**: Number of times centre data remained un-updated past the 45-minute threshold.
- **Disruption Response Latency**: Time elapsed from scale breakdown to SMS alert dispatch. *[Pilot Target: < 5 minutes]*`
    },
    {
      id: 'sec-17-4',
      title: 'Pillar 3: Government Governance KPIs',
      evidenceType: 'PROPOSED',
      markdown: `These metrics give district officers and state administrators transparent oversight:

- **Capacity Utilization Rate**: Ratio of actual intake to configured usable capacity.
- **Overloaded vs. Underutilized Centres**: Distribution of intake across neighboring mandis to balance district load.
- **Exception Resolution Latency**: Time taken by supervising officers to resolve flagged discrepancies or disruptions.
- **Payment Status Visibility Latency**: Time elapsed from treasury disbursement to reflection on farmer tracking view.
- **Data Conflict Rate**: Frequency of discrepancies between gate records and ERP entries. *[Target: < 0.5%]*
- **Audit Completeness**: 100% cryptographic capture of manual adjustments, overrides, and cancellations.`
    },
    {
      id: 'sec-17-5',
      title: 'Pillar 4: Inclusion & Equity KPIs',
      evidenceType: 'PROPOSED',
      markdown: `These metrics verify that the digital system does not discriminate against marginal farmers:

- **Assisted vs. Self-Service Ratio**: Proportion of bookings made via CSCs/Panchayats vs. smartphone app.
- **SMS-Only Interaction Rate**: Percentage of farmers who completed their entire journey using basic feature phones.
- **Failed Digital Interaction Rate**: Farmers who attempted digital booking but required manual offline intervention.
- **Regional Language Usage**: Proportion of farmers accessing interfaces in local vernacular vs. English.`
    }
  ]
};
