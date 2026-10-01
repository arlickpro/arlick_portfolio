import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />,
  };

  return (
    <aside
      aria-label="Notifications"
      aria-live="polite"
      className="fixed bottom-6 left-6 z-50 max-w-sm w-full animate-bounce-in"
    >
      <div className="flex items-center gap-3 p-4 rounded-2xl shadow-2xl bg-slate-950/90 text-white border border-white/10 backdrop-blur-xl">
        {icons[toast.type] || icons.info}
        <div className="flex-1 text-sm font-medium">
          {toast.message}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="text-slate-400 hover:text-white transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
