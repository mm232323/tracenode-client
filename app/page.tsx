import HomeHeader from "@/components/layout/HomeHeader";
import RippleGrid from "@/components/schdn/RippleGrid";
import { BsStars, BsGithub } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Footer from "@/components/layout/Footer";
import DemoWindow from "@/components/home/DemoWindow";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import PricingSection from "@/components/home/PricingSection";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <main>
      <HomeHeader />

      <section
        id="hero"
        className="relative w-full h-fit flex justify-center items-center flex-col py-26 gap-6 px-6 overflow-hidden"
      >
        <div className="pointer-events-none bg-[#] absolute inset-0 -z-10">
          <RippleGrid
            enableRainbow={false}
            gridColor="#281c58"
            rippleIntensity={0.04}
            gridSize={10}
            gridThickness={20}
            mouseInteraction
            mouseInteractionRadius={0.6}
            opacity={0.6}
            fadeDistance={1.8}
            vignetteStrength={4.4}
            glowIntensity={0.5}
            gridRotation={0}
          />
        </div>

        <div className="bg-[#00FF66]/10 border-[.5px] border-[#00FF66]/55 w-65 h-7 rounded-[11px] flex justify-center items-center gap-4">
          <BsStars size={12} className="text-[#00ff66]/55" />
          <p className="font-extralight text-[11px] text-[#00FF7B]">
            AI architecture for engineering teams
          </p>
        </div>  

        <h1 className="font-extrabold text-[40px] sm:text-[52px] md:text-[65px] leading-[1.1] md:leading-20 text-center">
          See your codebase
          <br />
          <span className="text-[#6366F1]">before</span>{" "}
          <span className="gradient-text">you touch it.</span>
        </h1>

        <p className="w-full max-w-185 font-light text-[16px] md:text-[19px] opacity-60 text-center">
          TraceNode connects to any repo, parses the AST, and generates a
          live architecture map with AI documentation, route diagrams, and
          impact analysis.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button className="flex items-center gap-2 rounded-lg bg-linear-to-b from-[#7C7EF2] to-[#5457E5] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.6)] transition-opacity hover:opacity-90">
            <BsGithub size={16} />
            Connect Github
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-white/12 px-5 py-2.5 text-[14px] font-medium text-white/85 transition-colors hover:bg-white/4">
            Explore public maps
            <FiArrowRight size={15} />
          </button>
        </div>

        <div className="flex items-center gap-2 mt-1 jetbrain-text text-[11px] text-white/35">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
          <span>12,400+ repos mapped</span>
          <span className="text-white/15">·</span>
          <span>No credit card required</span>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto mt-10">
          <DemoWindow />
        </div>
      </section>

      <CapabilitiesSection />
      <PricingSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
