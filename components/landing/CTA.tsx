import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 bg-[#161617] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ED4716]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ED4716]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ED4716]/10 border border-[#ED4716]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#ED4716]" />
            <span className="text-sm text-[#ED4716] font-medium">
              Get Started Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="text-gradient">
              transform your curtain business
            </span>
            ?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-zinc-400 mb-10 italic">
            "Visualize Before You Stitch."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              View Pricing
            </Button>
          </div>

          {/* Footer note */}
          <p className="mt-8 text-sm text-zinc-400">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
