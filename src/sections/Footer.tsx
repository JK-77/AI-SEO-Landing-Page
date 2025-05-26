import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black/30 to-transparent py-12 border-t border-white/15">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <Logo className="h-8 w-8 text-primary" />
              <div className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ai-SEO
              </div>
            </div>
            <p className="text-white/60 text-sm">
              AI-driven SEO solutions for everyone. Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex gap-4 mt-2">
              <XSocial className="h-5 w-5 text-white/40 hover:text-primary transition cursor-pointer" />
              <InstaSocial className="h-5 w-5 text-white/40 hover:text-primary transition cursor-pointer" />
              <YTSocial className="h-5 w-5 text-white/40 hover:text-primary transition cursor-pointer" />
            </div>
          </div>

          {/* Links columns */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-white/90">Product</h3>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              Features
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              Pricing
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              Changelog
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              Roadmap
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-white/90">Developers</h3>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              Documentation
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              API Reference
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              Status
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              GitHub
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-white/90">Company</h3>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              About
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              Blog
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              Careers
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-sm transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} AI-SEO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-sm transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition">
              Cookies
            </Link>
          </div>
        </div>

        {/* CTA for mobile */}
        <div className="mt-8 md:hidden">
          <button className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-white hover:opacity-90 transition">
            Join Wallet
          </button>
        </div>
      </div>
    </footer>
  );
};