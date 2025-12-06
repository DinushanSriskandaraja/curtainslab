import { Upload, Settings, Image } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Room Image",
    description: "Upload your customer’s room photo from mobile or desktop",
  },
  {
    icon: Settings,
    number: "02",
    title: "Choose Curtain Style",
    description: "Pick fabric type, colors, and curtain pattern instantly",
  },
  {
    icon: Image,
    number: "03",
    title: "Generate AI Preview",
    description: "Get realistic AI curtain preview within seconds",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-28 bg-[#161617] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-20 w-[400px] h-[400px] bg-[#ED4716]/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-[#ED4716]/10 blur-[140px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-[#ED4716] mb-3">
            Simple Process
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            How Curtains Lab <span className="text-gradient">Works</span>
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From photo to curtain preview — in under a minute.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[72px] left-1/2 w-full h-[2px]
                  bg-gradient-to-r from-[#ED4716]/30 to-transparent"
                />
              )}

              {/* Card */}
              <div className="relative mb-8">
                <div
                  className="w-28 h-28 rounded-3xl bg-white/[0.03] border border-white/10 mx-auto flex items-center justify-center relative overflow-hidden
                  group-hover:border-[#ED4716]/40 transition-all duration-300 backdrop-blur-md
                  hover:shadow-[0_0_25px_rgba(237,71,22,0.15)]">
                  <step.icon className="w-12 h-12 text-[#ED4716] group-hover:scale-110 transition-transform" />
                </div>

                {/* Number */}
                <span
                  className="absolute -top-3 right-1/3 w-10 h-10 rounded-full
                  bg-[#ED4716] text-black font-bold text-sm flex items-center justify-center shadow-lg">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-white mb-2">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
