import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Home, Wallet } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://storage.googleapis.com/dala-prod-public-storage/generated-images/15ef1068-33bc-4e95-bedd-a5a93a82d64d/eneocapital-hero-bg-bdab014d-1775078429756.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-500 uppercase bg-amber-500/10 border border-amber-500/20 rounded-full">
            Trusted Real Estate Solutions
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Expert Property Management <br />
            <span className="text-amber-500">For Your Peace of Mind</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Eneo Capital Limited provides seamless rent collection, landlord advances, and maintenance services to maximize your investment returns in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 text-white rounded-lg font-bold text-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-2 group"
            >
              Consult Us Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: ShieldCheck, title: 'Guaranteed Payments', desc: 'Secure rent collection on behalf of landlords.' },
            { icon: Wallet, title: 'Landlord Advances', desc: 'Access quick loans on your future rental collections.' },
            { icon: Home, title: 'Full Maintenance', desc: 'Comprehensive property upkeep and management.' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-left">
              <div className="bg-amber-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-amber-500" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;