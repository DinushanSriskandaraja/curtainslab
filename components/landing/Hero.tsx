import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroRoom from "@/public/next.svg";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 bg-[#161616] overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute w-[380px] h-[380px] bg-[#ED4716]/25 blur-[120px] top-1/4 left-1/4 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-[#ED4716]/15 blur-[120px] top-1/3 right-1/4 animate-pulse delay-1000" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* TribeTek Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161617] border border-[#2a2a2a] mb-8">
            <Sparkles className="w-4 h-4 text-[#ED4716]" />
            <span className="text-sm text-gray-400">
              Powered by{" "}
              <span className="text-white font-medium">TribeTek</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Turn every room photo into a{" "}
            <span className="text-[#ED4716]">curtain showroom</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Instantly preview curtain styles, colors, and fabrics using AI.
            Designed for curtain shops, interior designers, and décor businesses
            to close sales faster.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="bg-[#ED4716] hover:bg-[#ff5d32] text-white group shadow-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="border-[#ED4716] text-[#ED4716] hover:bg-[#ED4716] hover:text-white">
              View Pricing
            </Button>
          </div>

          {/* Tagline */}
          <p className="mt-12 text-sm italic text-gray-500">
            "Visualize Before You Stitch."
          </p>
        </div>

        {/* Preview Image */}
        <div className="mt-20">
          <div className="relative max-w-5xl mx-auto">
            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-[#ED4716]/20 blur-3xl rounded-3xl" />

            {/* Card */}
            <div className="relative bg-[#161617] rounded-2xl border border-[#2a2a2a] overflow-hidden shadow-2xl">
              <img
                src={heroRoom}
                alt="Curtains Lab AI showing curtain design on living room photo"
                className="w-full h-auto object-cover"
              />

              {/* Labels */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-sm border border-[#2a2a2a]">
                  <p className="text-xs text-gray-400">Original Room Photo</p>
                </div>

                <div className="px-4 py-2 rounded-lg bg-[#ED4716]">
                  <p className="text-xs text-white font-medium">
                    AI Preview Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
