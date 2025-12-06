"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

type Region = "lk" | "intl";

const pricingData = {
  lk: {
    currency: "LKR",
    flag: "🇱🇰",
    label: "Sri Lanka",
    plans: [
      {
        name: "Starter",
        price: "1,500",
        period: "/month",
        description: "Perfect for small shops",
        features: [
          "50 AI previews/month",
          "Basic curtain styles",
          "Email support",
          "1 team member",
        ],
        popular: false,
      },
      {
        name: "Pro",
        price: "3,500",
        period: "/month",
        description: "Best for growing businesses",
        features: [
          "200 AI previews/month",
          "All curtain styles",
          "Priority support",
          "5 team members",
          "Custom branding",
          "Client portal",
        ],
        popular: true,
      },
      {
        name: "Business",
        price: "7,500",
        period: "/month",
        description: "For large operations",
        features: [
          "Unlimited previews",
          "All premium features",
          "Dedicated support",
          "Unlimited team",
          "API access",
          "White-label option",
        ],
        popular: false,
      },
    ],
  },
  intl: {
    currency: "USD",
    flag: "🌍",
    label: "USA / Australia",
    plans: [
      {
        name: "Basic",
        price: "29",
        period: "/month",
        description: "Great for individuals",
        features: [
          "100 AI previews/month",
          "Basic curtain styles",
          "Email support",
          "2 team members",
        ],
        popular: false,
      },
      {
        name: "Studio",
        price: "59",
        period: "/month",
        description: "Perfect for studios",
        features: [
          "500 AI previews/month",
          "All curtain styles",
          "Priority support",
          "10 team members",
          "Custom branding",
          "Client portal",
        ],
        popular: true,
      },
      {
        name: "Agency",
        price: "99",
        period: "/month",
        description: "For agencies & chains",
        features: [
          "Unlimited previews",
          "All premium features",
          "Dedicated support",
          "Unlimited team",
          "API access",
          "White-label option",
        ],
        popular: false,
      },
    ],
  },
};

const PricingSection = () => {
  const [region, setRegion] = useState<Region>("intl");
  const data = pricingData[region];

  return (
    <section
      id="pricing"
      className="relative py-32 bg-[#161617] overflow-hidden">
      {/* Glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[400px]
        bg-[#ED4716]/10 blur-[150px] rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-[#ED4716] text-sm mb-2">
            Pricing Plans
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Simple & <span className="text-gradient">Affordable</span> Pricing
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Transparent pricing built specifically for curtain businesses
          </p>

          {/* Toggle */}
          <div
            className="inline-flex items-center gap-1 p-1.5 rounded-xl
            bg-white/[0.05] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setRegion("lk")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                region === "lk"
                  ? "bg-[#ED4716] text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}>
              🇱🇰 Sri Lanka
            </button>

            <button
              onClick={() => setRegion("intl")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                region === "intl"
                  ? "bg-[#ED4716] text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}>
              🌍 USA / Australia
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 transition-all duration-300 backdrop-blur-md
                ${
                  plan.popular
                    ? "bg-white/[0.06] border border-[#ED4716]/50 scale-105 shadow-[0_0_30px_rgba(237,71,22,0.25)]"
                    : "bg-white/[0.03] border border-white/10 hover:border-[#ED4716]/30"
                }
              `}>
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2
                  px-4 py-1 rounded-full bg-[#ED4716]
                  flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 text-black fill-black" />
                  <span className="text-xs font-semibold text-black">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{plan.description}</p>

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-zinc-400">{data.currency}</span>
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-zinc-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#ED4716]/15 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#ED4716]" />
                    </div>
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full tracking-wide">
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-400">
          All plans include zero setup fee • Cancel anytime • 7-day free trial
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
