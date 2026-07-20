import { BsGithub } from "react-icons/bs";

export default function FinalCta() {
  return (
    <section className="w-full border-t border-white/8 px-6 py-28 text-center">
      <h2 className="text-3xl md:text-[42px] font-bold leading-tight">
        Ship with full visibility.
      </h2>
      <p className="mt-4 text-[15px] text-white/45">
        Connect a repo in 30 seconds. The first map is on us.
      </p>
      <button className="mx-auto mt-9 flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#7C7EF2] to-[#5457E5] px-6 py-3 text-[14px] font-medium text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.6)] transition-opacity hover:opacity-90">
        <BsGithub size={16} />
        Connect Github
      </button>
    </section>
  );
}
