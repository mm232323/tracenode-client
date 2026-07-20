import { HiOutlineCube } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/8 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <HiOutlineCube size={18} className="text-[#6366F1]" />
          <span className="text-sm font-semibold">
            Trace<span className="text-[#6366F1]">Node</span>
          </span>
          <span className="ml-3 jetbrain-text text-[11px] text-white/25">
            © 2026 TraceNode Labs
          </span>
        </div>
        <div className="flex items-center gap-6 jetbrain-text text-[11px] text-white/35">
          <a href="/docs" className="hover:text-white/60">Docs</a>
          <a href="/privacy" className="hover:text-white/60">Privacy</a>
          <a href="/terms" className="hover:text-white/60">Terms</a>
        </div>
      </div>
    </footer>
  );
}
