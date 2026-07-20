import {
  FiCode,
  FiShare2,
  FiActivity,
  FiGitBranch,
  FiShield,
  FiBox,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type Capability = {
  icon: IconType;
  number: string;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    icon: FiCode,
    number: "01",
    title: "Static Code Analysis",
    description:
      "Parses AST trees across your entire monorepo to detect service boundaries, API endpoints, and database interactions automatically.",
  },
  {
    icon: FiShare2,
    number: "02",
    title: "Interactive AI Maps",
    description:
      "Navigate live architecture graphs. Click any node to instantly view AI-generated context, relevant code snippets, and routing logic.",
  },
  {
    icon: FiActivity,
    number: "03",
    title: "Impact Analysis",
    description:
      "Trace the blast radius of any change before you ship. See which downstream services depend on the API endpoint you're about to modify.",
  },
  {
    icon: FiGitBranch,
    number: "04",
    title: "Version-Aware Diffing",
    description:
      "Compare architecture snapshots across branches and commits to see exactly what changed in your system topology over time.",
  },
  {
    icon: FiShield,
    number: "05",
    title: "Security Boundary Detection",
    description:
      "Automatically flags services that touch sensitive data paths and surfaces missing authentication layers before they ship.",
  },
  {
    icon: FiBox,
    number: "06",
    title: "Monorepo Aware",
    description:
      "Understands workspace packages, shared libraries, and cross-service dependencies natively — no manual configuration required.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="features" className="w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-[13px] jetbrain-text tracking-widest text-[#00FF7B]">
          CAPABILITIES
        </p>
        <h2 className="mt-4 max-w-xl text-3xl md:text-[40px] font-bold leading-tight">
          Stop drawing outdated diagrams in markdown files.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, number, title, description }) => (
            <div
              key={number}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.03]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00FF66]/20 bg-[#00FF66]/10">
                  <Icon size={18} className="text-[#00FF7B]" />
                </div>
                <span className="jetbrain-text text-xs text-white/20">
                  {number}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-white/90">
                {title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/45">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
