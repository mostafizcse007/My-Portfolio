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
      "A browser-based visual sandbox for exploring 51 machine learning and deep learning algorithms without a backend. Training and inference run in background Web Workers so you can edit data points on the canvas, scrub training timelines, and inspect intuition, math, and code side by side.",
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
      "A 1v1 competitive programming duel platform built for an AI Native Hackathon. It pairs a Monaco code editor with an isolated Web Worker judge, live dual-trace visualization, a Hack & Defend sabotage mode, and Elo matchmaking backed by Supabase.",
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
      "Binary quality control on 951 BraTS 2021 FLAIR volumes with synthetic motion, ghosting, Rician noise, and slice-dropout artifacts. After auditing and removing a background-noise shortcut, a 3D ResNet with Cross-Attention reached 90.00% test accuracy and 0.9496 AUC on a multi-severity stress test.",
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
      "Ongoing thesis and computer vision study on 11,668 balanced face images across seven AI generators. A compact dual-branch spatial and 2D-Fourier network with gated fusion reached 98.15% clean accuracy and held up strongly under heavy JPEG compression and downscaling.",
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
      "An academic semester project at Daffodil International University with separate portals for patients and doctors. It handles OTP login, appointment scheduling, digital prescriptions, and payment tracking.",
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
