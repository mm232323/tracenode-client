"use client";

import { useState } from "react";
import { BsCheck2, BsGithub } from "react-icons/bs";

type Tier = {
  name: string;
  price: number;
  cta: string;
  featured?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "FREE",
    price: 0,
    cta: "Start free",
    features: [
      "1 active repo",
      "Public maps only",
      "Community support",
      "Basic AI docs",
    ],
  },
  {
    name: "PRO",
    price: 20,
    cta: "Start Pro Trial",
    featured: true,
    features: [
      "10 active repos",
      "Private maps",
      "Impact analysis",
      "Priority AI models",
      "GitHub PR comments",
    ],
  },
  {
    name: "TEAM",
    price: 80,
    cta: "Talk to Sales",
    features: [
      "Unlimited repos",
      "SSO & RBAC",
      "Shared workspaces",
      "Audit log",
      "Dedicated support",
    ],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
        <p className="text-[13px] jetbrain-text tracking-widest text-[#6366F1]">
          PRICING
        </p>
        <h2 className="mt-4 text-3xl md:text-[40px] font-bold leading-tight">
          Simple, transparent, per seat.
        </h2>

        <div className="mt-8 flex items-center gap-1 rounded-full border border-white/10 bg-white/3 p-1">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              !yearly
                ? "bg-[#6366F1] text-white"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              yearly
                ? "bg-[#6366F1] text-white"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            Yearly · -20%
          </button>
        </div>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const price = yearly ? Math.round(tier.price * 0.8) : tier.price;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-7 text-left ${
                  tier.featured
                    ? "border-[#6366F1]/60 bg-[#6366F1]/6"
                    : "border-white/8 bg-white/2"
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6366F1] px-3 py-1 text-[10px] font-semibold tracking-wide text-white">
                    Most popular
                  </span>
                ) : null}

                <p className="jetbrain-text text-[11px] tracking-widest text-white/40">
                  {tier.name}
                </p>
                <p className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-bold">${price}</span>
                  <span className="pb-1 text-[13px] text-white/40">/mo</span>
                </p>

                <button
                  className={`mt-6 flex items-center justify-center gap-2 rounded-lg py-2.5 text-[13px] font-medium transition-opacity hover:opacity-90 ${
                    tier.featured
                      ? "bg-[#6366F1] text-white"
                      : "bg-white/6 text-white/85"
                  }`}
                >
                  {tier.name === "FREE" && <BsGithub size={14} />}
                  {tier.cta}
                </button>

                <ul className="mt-7 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[13px] text-white/55"
                    >
                      <BsCheck2
                        size={14}
                        className={
                          tier.featured ? "text-[#6366F1]" : "text-[#00FF7B]"
                        }
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
