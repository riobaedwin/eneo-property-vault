import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/15ef1068-33bc-4e95-bedd-a5a93a82d64d/eneocapital-portfolio-view-f5814128-1775078427615.webp" 
                alt="About Eneo Capital" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 bg-amber-500 p-8 rounded-2xl z-20 hidden md:block">
                <div className="text-white text-5xl font-bold">2021</div>
                <div className="text-amber-100 font-medium">Year Established</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Our Legacy</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Empowering Landlords Since 2021</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Eneo Capital Limited started with a vision to revolutionize property management in Kangemi and beyond. Over the years, we have grown into a powerhouse of real estate financial solutions.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Managing a portfolio of 94 premium properties.",
                  "Total portfolio valuation exceeding 8 Million KES.",
                  "Strategic location in Kangemi, above Think Twice Cloths.",
                  "Committed to excellence, integrity, and client growth."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-amber-500 rounded-full p-1 text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 italic">
                "Our journey is defined by the success of the landlords who trust us with their most valuable assets."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;