"use client";

import {
  IconArrowRight,
  IconBell,
  IconMail,
  IconNews,
  IconRocket,
  IconStar,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Newsletter() {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-1/4 -left-12 w-24 h-24 bg-violet-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-violet-500/10 rounded-full blur-xl" />
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-950/40 via-violet-900/20 to-black border border-violet-500/20 backdrop-blur-md p-8 md:p-12">
          {/* Enhanced Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-violet-900/10 to-black/50" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-4">
                <IconStar size={14} />
                Newsletter
              </span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4">
                Stay Ahead in Crypto
              </h2>
              <p className="text-white/70 text-base xs:text-lg">
                Get expert insights and analysis delivered directly to your
                inbox
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {/* Updated Subscription Plans Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Free Plan */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-violet-500/20 backdrop-blur-sm hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">Basic</h3>
                      <span className="text-violet-400">Free</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Weekly Newsletter</span>
                      </li>
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Market Updates</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full mt-6 px-4 py-2 bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 rounded-lg transition-colors">
                    Start Free
                  </button>
                </motion.div>

                {/* Starter Plan */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-violet-900/10 border border-violet-500/20 backdrop-blur-sm hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">Starter</h3>
                      <span className="text-violet-400">$4.99/mo</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Basic Features</span>
                      </li>
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Daily Updates</span>
                      </li>
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Basic Analysis</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full mt-6 px-4 py-2 bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 rounded-lg transition-colors">
                    Get Started
                  </button>
                </motion.div>

                {/* Pro Plan */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-900/20 border border-violet-500/30 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="absolute -top-2 -right-2">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-violet-500 text-white text-xs">
                        <IconRocket size={12} />
                        Popular
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">Pro</h3>
                      <span className="text-violet-400">$9.99/mo</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>All Starter Features</span>
                      </li>
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Premium Analysis</span>
                      </li>
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Market Alerts</span>
                      </li>
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Priority Support</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full mt-6 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition-colors">
                    Go Pro
                  </button>
                </motion.div>

                {/* Enterprise Plan */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 rounded-xl bg-gradient-to-br from-violet-600/20 to-violet-900/20 border border-violet-500/30 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">
                        Enterprise
                      </h3>
                      <span className="text-violet-400">Custom</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>All Pro Features</span>
                      </li>
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Custom Analysis</span>
                      </li>
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>API Access</span>
                      </li>
                      <li className="flex items-center text-white/70">
                        <IconMail className="w-4 h-4 mr-2 text-violet-400" />
                        <span>Dedicated Support</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white rounded-lg transition-colors">
                    Contact Sales
                  </button>
                </motion.div>
              </div>

              {/* Enhanced Email Subscription */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-violet-500/5 to-transparent blur-xl" />
                <div className="relative flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-12 py-4 bg-white/5 border border-violet-500/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                    />
                    <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400/50" />
                  </div>
                  <button className="px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                    Subscribe Now
                    <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-white/50">
                  <div className="flex items-center gap-2">
                    <IconBell size={16} className="text-violet-400" />
                    <span>Instant Updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconNews size={16} className="text-violet-400" />
                    <span>Weekly Digest</span>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center text-white/50 text-sm mt-6"
              >
                No spam. Unsubscribe anytime. Your email stays private.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
