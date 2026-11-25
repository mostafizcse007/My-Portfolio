import { useCallback, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ResearchMonograph } from "@/components/ResearchMonograph";
import { ProjectsSection } from "@/components/ProjectsSection";
import { KaggleSection } from "@/components/KaggleSection";
import { CompetitiveSection } from "@/components/CompetitiveSection";
import { CapabilitiesEducation } from "@/components/CapabilitiesEducation";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Toast, type ToastMessage } from "@/components/Toast";

export default function Index() {
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const handleNotify = useCallback((next: Omit<ToastMessage, "id">) => {
    setToast({ ...next, id: Date.now() });
  }, []);

  const handleDismiss = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-medium focus:text-[var(--accent-ink-on-fill)]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ResearchMonograph />
        <ProjectsSection />
        <KaggleSection />
        <CompetitiveSection />
        <CapabilitiesEducation />
        <ContactSection onNotify={handleNotify} />
      </main>

      <Footer />
      <Toast toast={toast} onDismiss={handleDismiss} />
    </div>
  );
}
