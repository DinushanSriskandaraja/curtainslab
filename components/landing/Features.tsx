import {
  Upload,
  Wand2,
  Palette,
  FolderOpen,
  Share2,
  TrendingDown,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload Real Photos",
    description:
      "Upload actual customer room photos for accurate visualization",
  },
  {
    icon: Wand2,
    title: "Instant AI Previews",
    description: "Generate realistic curtain previews in seconds",
  },
  {
    icon: Palette,
    title: "Multiple Styles & Colors",
    description: "Experiment with fabrics, patterns, and colors easily",
  },
  {
    icon: FolderOpen,
    title: "Client Design Manager",
    description: "All customer previews stored safely in one dashboard",
  },
  {
    icon: Share2,
    title: "One-Click Sharing",
    description: "Send previews instantly through WhatsApp or Email",
  },
  {
    icon: TrendingDown,
    title: "Reduce Field Visits",
    description: "Save time and reduce site visits with previews",
  },
  {
    icon: Rocket,
    title: "Faster Closures",
    description: "Visual confidence that converts leads into sales",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-28 relative bg-[#161616] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-[#ED4716]/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-[#ED4716]/10 blur-[160px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-[#ED4716] text-sm mb-3">
            Why Choose Curtains Lab
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Everything you need to sell curtains <br />
            <span className="text-gradient">like a premium brand</span>
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Built for modern curtain showrooms, decorators, and fabric sellers
            who want to sell faster with AI power.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#ED4716]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(237,71,22,0.15)]"
              style={{ animationDelay: `${index * 0.08}s` }}>
              {/* Icon box */}
              <div className="w-12 h-12 rounded-xl bg-[#ED4716]/10 border border-[#ED4716]/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-[#ED4716]" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Glow line */}
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#ED4716]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
