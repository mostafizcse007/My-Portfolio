import { useEffect } from "react";
import { Check, AlertCircle, X } from "lucide-react";

export interface ToastMessage {
  id: number;
  title: string;
  description?: string;
  variant?: "default" | "error";
}

interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
}

export function Toast({ toast, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(onDismiss, 4200);
    return () => window.clearTimeout(timer);
  }, [toast, onDismiss]);

  if (!toast) return null;

  const isError = toast.variant === "error";

  return (
    <div
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
      data-testid="toast-notification"
      className={`fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] rounded-control border p-4 bg-surface text-ink monograph-transition ${
        isError ? "border-accent-warm" : "border-accent"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-control ${
            isError
              ? "bg-accent-warm-soft text-[var(--accent-warm-ink)]"
              : "bg-accent-soft text-accent"
          }`}
        >
          {isError ? <AlertCircle size={14} strokeWidth={1.5} /> : <Check size={14} strokeWidth={1.5} />}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-ink">{toast.title}</p>
          {toast.description && (
            <p className="mt-0.5 text-xs text-ink-secondary leading-relaxed">{toast.description}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="rounded-control p-1 text-ink-secondary hover:bg-surface-subtle hover:text-ink monograph-transition"
        >
          <X size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
