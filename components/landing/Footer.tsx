const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#161617]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ED4716] flex items-center justify-center">
              <span className="text-black font-bold text-sm">CL</span>
            </div>
            <div>
              <span className="font-display font-semibold text-white">
                Curtains Lab
              </span>
              <p className="text-zinc-400 text-xs">Powered by TribeTek</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-6">
            <a
              href="#features"
              className="text-sm text-zinc-400 hover:text-white transition-colors">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-zinc-400 hover:text-white transition-colors">
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-sm text-zinc-400 hover:text-white transition-colors">
              Pricing
            </a>
            <a
              href="#cta"
              className="text-sm text-zinc-400 hover:text-white transition-colors">
              Get Started
            </a>
            <a
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition-colors">
              Terms
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-zinc-400 mt-4 md:mt-0">
            © 2024 Curtains Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
