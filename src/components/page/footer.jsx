"use client";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

const footerLinks = {
  "About Us": ["About", "Careers", "Blog", "Legal & Privacy"],
  Services: [
    "Applications",
    "Buy Crypto",
    "Affiliate",
    "Institutional Services",
  ],
  Learn: [
    "What is Cryptocurrency",
    "Crypto Basic",
    "Tips and Tutorials",
    "Market Update",
  ],
};

const socialIcons = [
  { icon: IconBrandInstagram, href: "#" },
  { icon: IconBrandFacebook, href: "#" },
  { icon: IconBrandX, href: "#" },
  { icon: IconBrandYoutube, href: "#" },
  { icon: IconBrandDiscord, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-violet-950 to-black">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 py-8 xs:py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xs:gap-8">
          {/* Logo and Social Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl xs:text-2xl font-bold text-white mb-2 xs:mb-4">
              ZulCryptoCap
            </h2>
            <p className="text-sm xs:text-base text-white/70 mb-4 xs:mb-6 font-light max-w-sm">
              Your trusted platform for cryptocurrency trading and investment.
            </p>
            <div className="flex space-x-3 xs:space-x-4">
              {socialIcons.map((SocialIcon, index) => (
                <a
                  key={index}
                  href={SocialIcon.href}
                  className="p-1.5 xs:p-2 rounded-full bg-violet-900/20 text-violet-400 hover:bg-violet-500/20 hover:text-white transition-colors duration-300"
                >
                  <SocialIcon.icon size={16} className="xs:w-5 xs:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-base xs:text-lg text-white font-semibold mb-2 xs:mb-4">
                {category}
              </h3>
              <ul className="space-y-1 xs:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs xs:text-sm text-white/70 hover:text-white transition-colors duration-300 font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 xs:mt-10 sm:mt-12 pt-6 xs:pt-8">
          <p className="text-xs xs:text-sm text-white/50">
            © {new Date().getFullYear()} ZulCryptoCap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
