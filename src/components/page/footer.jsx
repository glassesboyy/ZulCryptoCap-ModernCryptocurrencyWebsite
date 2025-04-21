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
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Section */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white mb-4">ZulCryptoCap</h2>
            <p className="text-white/70 mb-6 font-light">
              Your trusted platform for cryptocurrency trading and investment.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {socialIcons.map((SocialIcon, index) => (
                <a
                  key={index}
                  href={SocialIcon.href}
                  className="p-2 rounded-full bg-violet-900/20 text-violet-400 hover:bg-violet-500/20 hover:text-white transition-colors duration-300"
                >
                  <SocialIcon.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="text-center lg:text-left">
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm"
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
        <div className="mt-12 pt-8">
          <p className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} ZulCryptoCap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
