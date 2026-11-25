export interface ProfileLink {
  name: string;
  handle: string;
  url: string;
}

export interface IndexLedgerRow {
  index: string;
  label: string;
  value: string;
  detail: string;
}

export interface BronzeNotebook {
  title: string;
  upvotes: number;
  focus: string;
  medal: "Bronze";
  url: string;
}

export interface CapabilityColumn {
  heading: string;
  subtitle: string;
  items: { name: string; context: string }[];
}

export const identity = {
  name: "Mostafizur Rahman Antu",
  shortName: "Mostafizur Rahman Antu",
  domain: "https://alsomostafiz.me",
  email: "mostafizurrahmanantu@gmail.com",
  phone: "+880 1309462705",
  location: "Dhaka, Bangladesh",
  degree: "Third-year B.Sc. in Computer Science & Engineering (CSE)",
  institution: "Daffodil International University (DIU)",
  campus: "Ashulia, Dhaka, Bangladesh",
  cvUrl: "/cv.pdf",
  resumeUrl: "/resume.pdf",
};

export const navItems = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Kaggle", href: "#kaggle" },
  { label: "Algorithms", href: "#competitive" },
  { label: "Capabilities", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const publicProfiles: ProfileLink[] = [
  { name: "GitHub", handle: "mostafizcse007", url: "https://github.com/mostafizcse007" },
  { name: "Kaggle", handle: "alsomostafiz", url: "https://www.kaggle.com/alsomostafiz" },
  { name: "Codeforces", handle: "also_mostafiz", url: "https://codeforces.com/profile/also_mostafiz" },
  { name: "LeetCode", handle: "mostafizcse", url: "https://leetcode.com/u/mostafizcse/" },
  {
    name: "LinkedIn",
    handle: "mostafizur-rahman-antu",
    url: "https://www.linkedin.com/in/mostafizur-rahman-antu-559472437",
  },
];

export const heroIndexRows: IndexLedgerRow[] = [
  {
    index: "01",
    label: "Ongoing Thesis",
    value: "Stages 0–6 Locked",
    detail: "Bangla NLP · Not Yet Published",
  },
  {
    index: "02",
    label: "Algorithms",
    value: "507 Verified Solved",
    detail: "283 Codeforces · 224 LeetCode",
  },
  {
    index: "03",
    label: "Kaggle Tier",
    value: "Notebooks Expert",
    detail: "Rank 2,462 / 57,080 · 5 Bronze",
  },
  {
    index: "04",
    label: "ML Sandbox",
    value: "51 Algorithms",
    detail: "MLCanvas · Client-Side Web Workers",
  },
  {
    index: "05",
    label: "GitHub Record",
    value: "17 Public Repos",
    detail: "11 Stars · 205 Contributions (1y)",
  },
];

export const kaggleData = {
  profileUrl: "https://www.kaggle.com/alsomostafiz",
  tier: "Notebooks Expert",
  rank: "2,462 / 57,080",
  peakRank: "2,142",
  medals: "5 Bronze",
  summaryStats: [
    { label: "Tier Classification", value: "Notebooks Expert", sub: "Verified Kaggle progression" },
    { label: "Global Standing", value: "2,462 / 57,080", sub: "Peak rank 2,142" },
    { label: "Notebook Medals", value: "5 Bronze", sub: "Peer-upvoted kernels" },
    { label: "Public Activity", value: "10 Notebooks", sub: "83 Upvotes · 111 Forks · 4 Competitions" },
  ],
  bronzeNotebooks: [
    {
      title: "Medical Insurance Cost Prediction",
      upvotes: 24,
      focus: "Exploratory analysis and tabular regression pipeline",
      medal: "Bronze" as const,
      url: "https://www.kaggle.com/alsomostafiz",
    },
    {
      title: "Complete EDA + XGBoost",
      upvotes: 11,
      focus: "Feature inspection and gradient-boosted baseline",
      medal: "Bronze" as const,
      url: "https://www.kaggle.com/alsomostafiz",
    },
    {
      title: "Complete EDA + CatBoost",
      upvotes: 10,
      focus: "Categorical feature modeling with CatBoost",
      medal: "Bronze" as const,
      url: "https://www.kaggle.com/alsomostafiz",
    },
    {
      title: "Customer Churn Prediction ANN (.86) without tuning",
      upvotes: 10,
      focus: "Baseline artificial neural network on churn classification",
      medal: "Bronze" as const,
      url: "https://www.kaggle.com/alsomostafiz",
    },
    {
      title: "Preprocessing + XGBoost (0.94)",
      upvotes: 8,
      focus: "Structured data preprocessing and XGBoost scoring",
      medal: "Bronze" as const,
      url: "https://www.kaggle.com/alsomostafiz",
    },
  ] satisfies BronzeNotebook[],
};

export const competitiveData = {
  totalSolved: 507,
  summaryNote: "Verified total across Codeforces (283) and LeetCode (224).",
  leetcode: {
    url: "https://leetcode.com/u/mostafizcse/",
    handle: "mostafizcse",
    totalSolved: 224,
    easy: 150,
    medium: 69,
    hard: 5,
    contestRating: "1,433",
    contestsAttended: 2,
    topPercentile: "69.15%",
    languages: [
      { name: "C++", count: 213 },
      { name: "Pandas", count: 7 },
    ],
    badges: ["100 Days Badge 2024", "50 Days"],
  },
  codeforces: {
    url: "https://codeforces.com/profile/also_mostafiz",
    handle: "also_mostafiz",
    totalSolved: 283,
    rating: "639",
    maxRating: "833",
    rankTier: "Newbie",
    longestStreak: "19 days",
    affiliation: "Daffodil International University (DIU)",
  },
};

export const capabilityColumns: CapabilityColumn[] = [
  {
    heading: "Languages & Core",
    subtitle: "Systems & Data Foundations",
    items: [
      { name: "Python", context: "ML pipelines, NLP & medical imaging" },
      { name: "C++", context: "500+ algorithmic solutions & OOP" },
      { name: "TypeScript", context: "Typed workers & web applications" },
      { name: "SQL / PL/pgSQL", context: "Relational modeling & RLS" },
      { name: "C", context: "Low-level fundamentals & memory" },
    ],
  },
  {
    heading: "ML, Vision & NLP",
    subtitle: "Modeling & Evaluation",
    items: [
      { name: "PyTorch", context: "3D ResNet, FFT CNNs & model merging" },
      { name: "Scikit-learn", context: "Classical baselines & GroupKFold" },
      { name: "2D FFT & Grad-CAM++", context: "Spatial-frequency attribution" },
      { name: "XGBoost / CatBoost", context: "Tabular boosting benchmarks" },
      { name: "Pandas & NumPy", context: "Vectorized preprocessing" },
    ],
  },
  {
    heading: "Systems & Web",
    subtitle: "Client & Full-Stack Execution",
    items: [
      { name: "React 18 / 19 & Next.js", context: "App Router & responsive UI" },
      { name: "Web Workers & TypedArrays", context: "60 FPS zero-backend compute" },
      { name: "HTML5 Canvas + SVG", context: "Dual-trace & decision boundaries" },
      { name: "Supabase PostgreSQL", context: "Atomic matchmaking & RLS" },
      { name: "Monaco Editor & KaTeX", context: "Cockpit code & math rendering" },
    ],
  },
  {
    heading: "Tooling & Compute",
    subtitle: "Reproducibility & Workflow",
    items: [
      { name: "Kaggle 2× T4 GPUs", context: "Multi-seed 63-run training sweeps" },
      { name: "Vite & Tailwind CSS", context: "Design tokens & lean builds" },
      { name: "Git & GitHub", context: "Versioned experiments & repos" },
      { name: "Jupyter Notebooks", context: "Reproducible EDA & evaluation" },
      { name: "Linux & CLI", context: "Reproducible execution environment" },
    ],
  },
];
