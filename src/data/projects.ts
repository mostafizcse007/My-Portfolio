export type ProjectCategory = "all" | "systems" | "ml";

export interface FeaturedProject {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  categories: Exclude<ProjectCategory, "all">[];
  domainLabel: string;
  statusNote: string;
  metrics: { label: string; value: string }[];
  description: string;
  stack: string[];
  links: {
    label: string;
    url: string;
    primary?: boolean;
  }[];
  internalStatus?: string;
}

export interface ArchiveRepository {
  name: string;
  language: string;
  summary: string;
  url: string;
}

export const projectFilterTabs: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "systems", label: "Systems & Web" },
  { id: "ml", label: "ML & Vision" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "mlcanvas",
    index: "01",
    title: "MLCanvas",
    subtitle: "51-Algorithm Visual ML & DL Laboratory",
    categories: ["systems", "ml"],
    domainLabel: "Systems & ML Sandbox",
    statusNote: "Live Production",
    metrics: [
      { label: "Algorithms", value: "51 across 7 stages" },
      { label: "Execution", value: "60 FPS Web Workers" },
      { label: "Memory Target", value: "4GB RAM · Zero Backend" },
    ],
    description:
      "100% client-side glass-box ML/DL visual sandbox spanning 51 algorithms across 7 stages. Executes in background Web Workers using Float32Array TypedArrays at 60 FPS on 4GB RAM devices with zero backend. Includes a 3-Lens view (Intuition, KaTeX Math, PyTorch/Scikit-learn Code), direct canvas point editing, timeline scrubbing, and ghost boundaries.",
    stack: ["React 19", "TypeScript", "Vite", "Web Workers", "HTML5 Canvas + SVG", "KaTeX"],
    links: [
      { label: "Live Sandbox", url: "https://mlcanvas.netlify.app", primary: true },
      { label: "GitHub", url: "https://github.com/mostafizcse007/mlcanvas" },
    ],
  },
  {
    id: "algoarena",
    index: "02",
    title: "AlgoArena",
    subtitle: "60 FPS Multiplayer Algorithmic Duel Platform",
    categories: ["systems"],
    domainLabel: "Competitive Systems",
    statusNote: "AI Native Hackathon",
    metrics: [
      { label: "Judge Timeout", value: "500ms TLE Kill Switch" },
      { label: "Trace Canvas", value: "60 FPS (useRef + rAF)" },
      { label: "Matchmaking", value: "PL/pgSQL Elo + RLS" },
    ],
    description:
      "Deterministic 1v1 competitive programming and counterexample duel platform built for an AI Native Hackathon. Features a 3-pane cockpit with Monaco Editor, an isolated Web Worker judge with a strict 500ms TLE kill switch, a 60 FPS Dual-Trace Canvas (useRef + requestAnimationFrame, zero React re-renders), Hack & Defend sabotage mode, and atomic PL/pgSQL Elo matchmaking with Supabase RLS.",
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Supabase PostgreSQL",
      "Monaco Editor",
      "Web Workers",
    ],
    links: [
      { label: "Live Platform", url: "https://algowar.vercel.app", primary: true },
      { label: "GitHub", url: "https://github.com/mostafizcse007/AlgoArena" },
    ],
  },
  {
    id: "mri-dti-qc",
    index: "03",
    title: "Leak-Free 3D MRI / DTI Quality Control with Cross-Attention",
    subtitle: "Neuroimaging Artifact Detection & Shortcut Auditing",
    categories: ["ml"],
    domainLabel: "Medical Imaging ML",
    statusNote: "Kaggle 2× T4 Benchmark",
    metrics: [
      { label: "Test Acc / AUC", value: "90.00% / 0.9078" },
      { label: "Stress Bal. Acc / AUC", value: "90.56% / 0.9496" },
      { label: "Shortcut Audit", value: "55.00% Linear Val" },
    ],
    description:
      "Binary QC (Good vs. Poor) on 951 skull-stripped BraTS 2021 FLAIR volumes with synthetic motion, ghosting, Rician noise, and slice-dropout corruptions. Eliminated background-noise shortcuts (linear shortcut audit dropped to 55.00% validation accuracy). The proposed 3D ResNet + Cross-Attention architecture achieved 90.00% test accuracy (0.9078 ROC-AUC) and 90.56% balanced accuracy (0.9496 AUC) on a 120-volume multi-severity stress test on Kaggle 2× T4 GPUs.",
    stack: ["PyTorch", "3D ResNet", "Cross-Attention", "BraTS 2021", "GroupKFold"],
    links: [{ label: "Kaggle Profile", url: "https://www.kaggle.com/alsomostafiz", primary: true }],
  },
  {
    id: "spatial-frequency-face",
    index: "04",
    title:
      "AI-Generated vs. Real Human Face Classification Using Spatial–Frequency Learning and Comparative CNN Evaluation",
    subtitle: "Ongoing Thesis & Comparative CV Study",
    categories: ["ml"],
    domainLabel: "Computer Vision Research",
    statusNote: "Ongoing Thesis · Unpublished",
    metrics: [
      { label: "Clean Acc / AUC", value: "98.15% / 0.9975" },
      { label: "Model Budget", value: "0.563M Params · 5.58ms CPU" },
      { label: "Stress Robustness", value: "JPEG Q=30 0.882 · 0.35× 0.862" },
    ],
    description:
      "Ongoing thesis and DL/CV study evaluated on 11,668 balanced ellipse-masked faces across 7 AI generators. A Dual-Branch spatial + 2D-Fourier network with gated fusion (0.563M parameters, 5.58ms CPU inference) achieved 98.15% clean accuracy (0.9975 ROC-AUC) and the strongest robustness under JPEG Q=30 compression (0.882) and 0.35× downscaling (0.862).",
    stack: ["PyTorch", "2D FFT", "Gated Fusion", "Grad-CAM++", "Computer Vision"],
    links: [],
    internalStatus: "Ongoing Research · No Public Repo",
  },
  {
    id: "mediseba",
    index: "05",
    title: "MediSeba",
    subtitle: "Telemedicine & Clinical Workflow Portal",
    categories: ["systems"],
    domainLabel: "Clinical Web Portal",
    statusNote: "DIU Semester Project",
    metrics: [
      { label: "Role Portals", value: "Patient & Doctor" },
      { label: "Authentication", value: "Phone / Email OTP" },
      { label: "Clinical Flow", value: "Booking · Rx · Payments" },
    ],
    description:
      "Academic semester project at Daffodil International University implementing separate patient and doctor portals, phone/email OTP authentication, appointment scheduling, digital prescription management, and payment tracking.",
    stack: [
      "Patient & Doctor Portals",
      "OTP Authentication",
      "Appointment Scheduling",
      "Digital Prescriptions",
      "Payment Tracking",
    ],
    links: [{ label: "GitHub", url: "https://github.com/mostafizcse007/Mediseba", primary: true }],
  },
];

export const archiveRepositories: ArchiveRepository[] = [
  {
    name: "Student-Management-System",
    language: "C++",
    summary: "Console-based student records system using OOP & File I/O.",
    url: "https://github.com/mostafizcse007/Student-Management-System",
  },
  {
    name: "DSA-in-CPP",
    language: "C++",
    summary: "Core data structures and algorithms implementations in C++.",
    url: "https://github.com/mostafizcse007/DSA-in-CPP",
  },
  {
    name: "Medical-insurance-price-prediction",
    language: "Jupyter / Python",
    summary: "Regression analysis and exploratory feature modeling on medical insurance costs.",
    url: "https://github.com/mostafizcse007/Medical-insurance-price-prediction",
  },
  {
    name: "ytdownloader-CLI-",
    language: "Python",
    summary: "Command-line utility for media stream download and format selection.",
    url: "https://github.com/mostafizcse007/ytdownloader-CLI-",
  },
];
