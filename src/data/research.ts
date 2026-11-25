export type BenchmarkDatasetId = "nc-sentnob" | "bnsentmix" | "banth-ood";

export interface MethodologyStage {
  stage: string;
  title: string;
  tag: string;
  summary: string;
  metrics: string;
}

export interface BenchmarkRow {
  model: string;
  note?: string;
  columns: {
    label: string;
    value: string;
  }[];
  s1Score: number;
  s5Score: number;
  highlight?: boolean;
}

export interface BenchmarkTab {
  id: BenchmarkDatasetId;
  label: string;
  subtitle: string;
  metricNote: string;
  columnHeaders: string[];
  rows: BenchmarkRow[];
  callout: string;
}

export const researchMonograph = {
  eyebrow: "Undergraduate Thesis Monograph",
  statusLabel: "Ongoing Undergraduate Thesis · Stages 0–6 Locked · Not Yet Published",
  title:
    "Robustness Without Catastrophic Forgetting: Cross-Script Model Merging and Selective Normalization for Noisy Code-Mixed Bangla NLP",
  abstract:
    "Evaluating whether selective Unicode normalization, dual-view gated fusion, and weight-space model merging can harden Bangla transformers against Romanized Banglish and noisy code-mixing without sacrificing clean Bangla accuracy.",
  stages: [
    {
      stage: "S0–S2",
      title: "Leak-Free Splits & Selective Normalization",
      tag: "Data & Hygiene",
      summary:
        "Locked author/split boundaries across NC-SentNoB, BnSentMix, and BanTH OOD. Stage 2 selective normalization eliminates floating vowel-sign artifacts while leaving clean English spans untouched.",
      metrics: "0 floating vowel-sign artifacts · 100% EN_CLEAN preservation",
    },
    {
      stage: "S3–S4",
      title: "Dual-View Gated Fusion & Cross-Script Merging",
      tag: "Clean_Delta ≥ -3.0",
      summary:
        "Combines raw and normalized token views alongside 29 merging configurations per backbone, constrained strictly by a clean-accuracy retention budget.",
      metrics: "29 merging configs / backbone · Retention constraint Clean_Delta >= -3.0",
    },
    {
      stage: "S5–S6",
      title: "Unified Integration & 3-Seed Stability",
      tag: "63 Total Runs",
      summary:
        "Full end-to-end integration evaluated deterministically across three random seeds on dual-GPU compute to quantify mean Macro-F1 and variance reduction.",
      metrics: "Seeds 42, 123, 2026 · Kaggle 2× T4 GPUs",
    },
  ] satisfies MethodologyStage[],
  tabs: [
    {
      id: "nc-sentnob",
      label: "NC-SentNoB",
      subtitle: "Clean vs. Romanized Perturbation Spectrum",
      metricNote: "Macro-F1 ± SD across 3 seeds (42, 123, 2026)",
      columnHeaders: [
        "Model",
        "S1 Clean 0%",
        "S1 100% Rom.",
        "S1 Mean10",
        "S5 Unified Mean10",
      ],
      rows: [
        {
          model: "BanglaBERT",
          note: "Highest 3-seed Mean10 · 100% Rom. 64.44 ± 1.68",
          highlight: true,
          columns: [
            { label: "S1 Clean 0%", value: "78.38 ± 2.70" },
            { label: "S1 100% Rom.", value: "11.23 ± 1.99" },
            { label: "S1 Mean10", value: "30.88 ± 6.98" },
            { label: "S5 Mean10", value: "71.94 ± 2.29" },
          ],
          s1Score: 30.88,
          s5Score: 71.94,
        },
        {
          model: "XLM-R Base",
          note: "21.4× variance reduction vs. S1",
          highlight: true,
          columns: [
            { label: "S1 Clean 0%", value: "70.88 ± 6.98" },
            { label: "S1 100% Rom.", value: "36.76 ± 16.86" },
            { label: "S1 Mean10", value: "56.90 ± 12.44" },
            { label: "S5 Mean10", value: "70.86 ± 0.58" },
          ],
          s1Score: 56.9,
          s5Score: 70.86,
        },
        {
          model: "BanglishBERT",
          note: "Consistent gain over S1 baseline",
          columns: [
            { label: "S1 Clean 0%", value: "76.93 ± 4.23" },
            { label: "S1 100% Rom.", value: "48.66 ± 0.91" },
            { label: "S1 Mean10", value: "64.66 ± 7.98" },
            { label: "S5 Mean10", value: "70.12 ± 1.58" },
          ],
          s1Score: 64.66,
          s5Score: 70.12,
        },
      ],
      callout:
        "Stage 5 Unified integration raises BanglaBERT Mean10 from 30.88 to 71.94 ± 2.29 (with 64.44 ± 1.68 at 100% Romanized) and cuts XLM-R Base variance by 21.4× (SD 12.44 → 0.58).",
    },
    {
      id: "bnsentmix",
      label: "BnSentMix",
      subtitle: "Code-Mixed Sentiment Splits (PT_Clean_1042 & Stratified_N338)",
      metricNote: "Macro-F1 ± SD comparing Stage 1 Baseline vs. Stage 5 Unified",
      columnHeaders: [
        "Model",
        "S1 PT_Clean_1042",
        "S5 PT_Clean_1042",
        "S1 Stratified_N338",
        "S5 Stratified_N338",
      ],
      rows: [
        {
          model: "BanglaBERT",
          note: "+1.44 PT_Clean · +1.75 Stratified",
          highlight: true,
          columns: [
            { label: "S1 PT_Clean", value: "80.26 ± 1.26" },
            { label: "S5 PT_Clean", value: "81.70 ± 1.74" },
            { label: "S1 Stratified", value: "79.15 ± 2.52" },
            { label: "S5 Stratified", value: "80.90 ± 2.33" },
          ],
          s1Score: 80.26,
          s5Score: 81.7,
        },
        {
          model: "XLM-R Base",
          note: "+1.48 PT_Clean · +1.69 Stratified",
          columns: [
            { label: "S1 PT_Clean", value: "76.28 ± 2.71" },
            { label: "S5 PT_Clean", value: "77.76 ± 2.56" },
            { label: "S1 Stratified", value: "76.18 ± 3.46" },
            { label: "S5 Stratified", value: "77.87 ± 2.23" },
          ],
          s1Score: 76.28,
          s5Score: 77.76,
        },
        {
          model: "BanglishBERT",
          note: "+0.08 PT_Clean · +1.08 Stratified",
          columns: [
            { label: "S1 PT_Clean", value: "76.88 ± 1.96" },
            { label: "S5 PT_Clean", value: "76.96 ± 1.68" },
            { label: "S1 Stratified", value: "76.99 ± 3.04" },
            { label: "S5 Stratified", value: "78.07 ± 1.76" },
          ],
          s1Score: 76.88,
          s5Score: 76.96,
        },
      ],
      callout:
        "All three backbones improve on both PT_Clean_1042 and Stratified_N338 in Stage 5, led by BanglaBERT at 81.70 ± 1.74 and 80.90 ± 2.33.",
    },
    {
      id: "banth-ood",
      label: "BanTH OOD",
      subtitle: "Out-of-Domain Generalization & Clean Retention",
      metricNote: "Macro-F1 ± SD on BanTH_Full and BanTH_Clean",
      columnHeaders: ["Model", "BanTH_Full", "BanTH_Clean", "OOD Retention (Seed 42)"],
      rows: [
        {
          model: "BanglishBERT",
          note: "Highest BanTH OOD scores",
          highlight: true,
          columns: [
            { label: "BanTH_Full", value: "77.47 ± 0.29" },
            { label: "BanTH_Clean", value: "77.70 ± 0.29" },
            { label: "Seed 42 Delta", value: "Safe (-0.08 to -0.41)" },
          ],
          s1Score: 77.47,
          s5Score: 77.7,
        },
        {
          model: "BanglaBERT",
          note: "Tight 0.29–0.31 SD spread",
          columns: [
            { label: "BanTH_Full", value: "77.41 ± 0.31" },
            { label: "BanTH_Clean", value: "77.57 ± 0.29" },
            { label: "Seed 42 Delta", value: "Safe (-0.08 to -0.41)" },
          ],
          s1Score: 77.41,
          s5Score: 77.57,
        },
        {
          model: "XLM-R Base",
          note: "Lowest SD across OOD splits",
          columns: [
            { label: "BanTH_Full", value: "77.08 ± 0.22" },
            { label: "BanTH_Clean", value: "77.29 ± 0.21" },
            { label: "Seed 42 Delta", value: "Safe (-0.08 to -0.41)" },
          ],
          s1Score: 77.08,
          s5Score: 77.29,
        },
      ],
      callout:
        "OOD Retention verified as safe transfer across backbones, keeping seed-42 deltas tightly bounded within -0.08 to -0.41.",
    },
  ] satisfies BenchmarkTab[],
};
