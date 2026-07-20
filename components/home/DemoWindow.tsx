import ArchitectureMap from "./ArchitectureMap";

export default function DemoWindow() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0A0A0E]/20 backdrop-blur-md overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <p className="text-[11px] jetbrain-text text-white/40 hidden sm:block">
            acme/tracenode-core · architecture.map
          </p>
        </div>
        <p className="text-[10px] jetbrain-text text-white/40 hidden sm:block">
          live demo · click nodes
        </p>
      </div>
      <div className="h-85 sm:h-105 md:h-125 w-full">
        <ArchitectureMap />
      </div>
    </div>
  );
}
