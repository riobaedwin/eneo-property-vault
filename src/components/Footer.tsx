import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-bold mb-2">
              ENEO <span className="text-amber-500">CAPITAL</span>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              Leading the way in property financial solutions and professional management in Kenya since 2021.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Legal Notices</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
          <p>© {currentYear} Eneo Capital Limited. All rights reserved. Registered in Kenya.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;