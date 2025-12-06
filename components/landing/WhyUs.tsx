import {
  Clock,
  Briefcase,
  MessageCircle,
  TrendingUp,
  Target,
} from "lucide-react";

const benefits = [
  { icon: Clock, text: "Saves hours of work" },
  { icon: Briefcase, text: "Looks ultra professional" },
  { icon: MessageCircle, text: "Eliminates customer confusion" },
  { icon: TrendingUp, text: "Increases conversion rate" },
  { icon: Target, text: "Built for curtain stores only" },
];

const WhySection = () => {
  return (
    <section className="relative py-28 bg-[#161617] overflow-hidden">
      {/* Glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[400px]
        bg-[#ED4716]/10 blur-[150px] rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-[#ED4716] text-sm mb-2">
            Real Business Impact
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Why choose <span className="text-gradient">Curtains Lab</span>?
          </h2>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.text}
              className="group flex items-center gap-4 px-6 py-4 rounded-xl
                bg-white/[0.04] border border-white/10 backdrop-blur-md
                hover:border-[#ED4716]/40 transition-all duration-300
                hover:shadow-[0_0_18px_rgba(237,71,22,0.15)]
              ">
              {/* Icon */}
              <div
                className="w-9 h-9 rounded-lg bg-[#ED4716]/10
                border border-[#ED4716]/30 flex items-center
                justify-center group-hover:scale-110 transition-transform">
                <benefit.icon className="w-4 h-4 text-[#ED4716]" />
              </div>

              {/* Text */}
              <span className="text-white font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
